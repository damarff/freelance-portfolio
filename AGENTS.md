# Freelance Portfolio & Live Radar

## Stack
- React, Vite, Vanilla CSS, Supabase (Realtime WebSockets), Lucide-React

## Arsitektur Singkat
- `src/App.jsx` — Entry point utama, menampung layout, profile, stats, dan contact section.
- `src/UpworkRadar.jsx` — Komponen yang melakukan listen ke channel `public:jobs` di Supabase untuk render realtime.
- `src/ParticleField.jsx` — Efek animasi canvas interaktif.

## Konvensi Multi-Agent (Orkestrasi)
Proyek ini di-maintain oleh skuad AI berikut:
1. **`vuxi`** (Frontend UI/UX): Bertugas memastikan desain premium, glassmorphism, dan animasi lancar. [MODEL_TIER_STANDARD]
2. **`qatsy`** (QA/Testing): Bertugas melakukan build test (`npm run build`) dan fixing icon imports. [MODEL_TIER_FAST]

*Note: Selalu gunakan Vanilla CSS (index.css) untuk styling. Hindari Tailwind kecuali diminta.*
