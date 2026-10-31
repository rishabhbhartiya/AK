# Apoorva ❖ Kunal — Wedding Patrika (React + GSAP + Three.js)
npm install && npm run dev      # local (phone pe: same wifi, npm run dev -- --host)
npm run build                   # deploy dist/ (Vercel / Netlify / GitHub Pages)
npx vite build -c vite.single.config.js   # optional: single-file preview

src/data.js        -> saara Hindi text, timings, links
src/assets/        -> photo.jpg, music.mp3 (yahan naye assets daalo)
src/lib.js         -> GSAP setup + music engine (soft volume, fade)
src/components/    -> Intro (AK zoom), Countdown (ring clock), Slides (generic pinned stage),
                      Sections (Parichay/Events/Family), Footer, Dock, Particles (three.js)
# AK
