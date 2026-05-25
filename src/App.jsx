import UpworkRadar from './UpworkRadar'
import ParticleField from './ParticleField'
import { Code, Terminal, Bot, Zap, Cpu, Database, Mail, ArrowUpRight } from 'lucide-react'

function App() {
  return (
    <>
      {/* Aurora mesh background */}
      <div className="bg-aurora">
        <div className="aurora-layer"></div>
        <div className="aurora-layer"></div>
        <div className="aurora-layer"></div>
        <div className="aurora-layer"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="bg-orbs">
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
      </div>

      {/* Interactive particle network */}
      <ParticleField />

      <div className="dashboard-layout">
        {/* SIDEBAR PROFILE */}
        <aside className="profile-section">
          <div className="profile-card">
            <div className="profile-avatar">
              👨‍💻
            </div>
            <h1>Damar G.</h1>
            <p className="profile-title">AI Automation Specialist</p>

            <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px', position: 'relative', zIndex: 1 }}>
              I build autonomous AI systems and data extraction pipelines that save thousands of hours.
            </p>

            <div className="skills-container">
              <span className="skill-badge"><Bot size={12} style={{marginRight: '5px'}}/> AI Agents</span>
              <span className="skill-badge"><Terminal size={12} style={{marginRight: '5px'}}/> Python</span>
              <span className="skill-badge"><Code size={12} style={{marginRight: '5px'}}/> React</span>
              <span className="skill-badge"><Database size={12} style={{marginRight: '5px'}}/> Supabase</span>
              <span className="skill-badge"><Cpu size={12} style={{marginRight: '5px'}}/> LLMs</span>
            </div>

            <a href="mailto:damar@example.com" className="btn-hire" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
              <Mail size={16} style={{marginRight: '6px', verticalAlign: 'middle'}}/> Hire Me
            </a>

            {/* Social links */}
            <div className="social-links">
              <a href="https://github.com/damarff" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.5 5.5 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
              </a>
              <a href="https://linkedin.com/in/damarff" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:damar@example.com" className="social-link" title="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="stats-card">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Job Success</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">AI Uptime</span>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="content-area">
          <UpworkRadar />

          {/* Featured Systems */}
          <div className="radar-card">
            <div className="radar-header" style={{borderBottom: 'none', marginBottom: '10px', paddingBottom: '10px'}}>
              <div className="radar-title-group">
                <h2>Featured Systems</h2>
              </div>
              <span style={{ fontSize: '0.85rem', color: '#666' }}>Built & shipped</span>
            </div>
            <div className="featured-grid">
              <a href="https://github.com/damarff" target="_blank" rel="noreferrer" className="featured-item">
                <div className="featured-icon blue">
                  <Bot size={20} />
                </div>
                <h3>Autonomous Bidder <ArrowUpRight size={14} style={{opacity: 0.4, marginLeft: '4px'}} /></h3>
                <p>
                  An AI agent that monitors job boards 24/7, filters high-value leads using LLMs, and automatically drafts personalized proposals.
                </p>
              </a>
              <a href="https://github.com/damarff" target="_blank" rel="noreferrer" className="featured-item">
                <div className="featured-icon purple">
                  <Cpu size={20} />
                </div>
                <h3>Financial OCR Pipeline <ArrowUpRight size={14} style={{opacity: 0.4, marginLeft: '4px'}} /></h3>
                <p>
                  A robust pipeline extracting structured data from messy PDFs using computer vision and deterministic parsing.
                </p>
              </a>
              <a href="https://github.com/damarff" target="_blank" rel="noreferrer" className="featured-item">
                <div className="featured-icon green">
                  <Database size={20} />
                </div>
                <h3>Real-time Data Sync <ArrowUpRight size={14} style={{opacity: 0.4, marginLeft: '4px'}} /></h3>
                <p>
                  Live data pipeline connecting scrapers to dashboards via Supabase Realtime, with zero-downtime deployment.
                </p>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="radar-card contact-section">
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', marginBottom: '10px', background: 'linear-gradient(135deg, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Let's Work Together
            </h2>
            <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '25px', maxWidth: '500px' }}>
              Got a project that needs AI automation, data pipelines, or web scraping? I'm available for freelance work.
            </p>
            <div className="contact-buttons">
              <a href="mailto:damar@example.com" className="btn-contact primary">
                <Mail size={16} /> Send Email
              </a>
              <a href="https://www.upwork.com" target="_blank" rel="noreferrer" className="btn-contact secondary">
                <Zap size={16} /> Hire on Upwork
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
