import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { ExternalLink, Activity, Play, CheckCircle2 } from 'lucide-react';

export default function UpworkRadar() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStatus, setDeployStatus] = useState(null);

  useEffect(() => {
    // 1. Fetch initial data
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('scraped_at', { ascending: false })
        .limit(6);
      
      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        setJobs(data);
      }
      setLoading(false);
    };

    fetchJobs();

    // 2. Set up real-time subscription
    const channel = supabase
      .channel('public:jobs')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'jobs' },
        (payload) => {
          console.log('New job received!', payload.new);
          // Add new job to the top of the list
          setJobs((currentJobs) => [payload.new, ...currentJobs].slice(0, 6));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleDeployAgent = async () => {
    setIsDeploying(true);
    setDeployStatus('Deploying scraper agent...');
    try {
      const res = await fetch('http://localhost:8000/api/scrape?keyword=python+web+scraping', {
        method: 'POST',
      });
      if (res.ok) {
        setDeployStatus('Agent deployed! Awaiting intercepted data...');
        setTimeout(() => setDeployStatus(null), 5000);
      } else {
        setDeployStatus('Failed to deploy agent.');
      }
    } catch (error) {
      console.error(error);
      setDeployStatus('API Error. Is the backend running?');
    }
    setIsDeploying(false);
  };

  return (
    <div className="radar-card">
      <div className="radar-header">
        <div className="radar-title-group">
          <div className="pulse-ring"></div>
          <h2>Live Radar</h2>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {deployStatus && (
            <span style={{ fontSize: '0.85rem', color: '#30d158', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={14} /> {deployStatus}
            </span>
          )}
          
          <button 
            onClick={handleDeployAgent}
            disabled={isDeploying}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--glass-border)',
              color: '#fff',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              cursor: isDeploying ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              if(!isDeploying) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'var(--glass-border-hover)';
              }
            }}
            onMouseOut={(e) => {
              if(!isDeploying) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }
            }}
          >
            {isDeploying ? <Activity size={14} className="animate-spin" /> : <Play size={14} />}
            Deploy Agent
          </button>
        </div>
      </div>

      {loading ? (
        <p style={{ color: '#888', textAlign: 'center', padding: '40px 0' }}>Scanning satellite feeds...</p>
      ) : jobs.length === 0 ? (
        <p style={{ color: '#888', textAlign: 'center', padding: '40px 0' }}>Radar is clear. No jobs intercepted yet.</p>
      ) : (
        <div className="job-list">
          {jobs.map((job) => (
            <div key={job.job_id} className="job-item">
              <div className="job-header">
                <h3 className="job-title">{job.title}</h3>
                <span className="job-budget">{job.budget || 'Hourly'}</span>
              </div>
              <p className="job-desc">{job.description}</p>
              <div className="job-footer">
                <span className="time-badge">
                  {new Date(job.scraped_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
                <a href={job.url} target="_blank" rel="noreferrer" className="btn-analyze">
                  Analyze <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
