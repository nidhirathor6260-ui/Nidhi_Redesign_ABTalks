# AI Usage & Vibe-Coding Log (`PROMPTS.md`)

This repository was vibe-coded using **Google DeepMind Antigravity AI** to design and build the mobile-first **ABTalks 60-Day College Coding Challenge** platform.

---

## 🚀 Prompts & AI Trajectory Summary

### 1. Problem Statement & Architecture Initialization
> **Prompt**: "I have to build a website ABTalks for Indian college students running a 60-day challenge... Design and build 3 screens: Landing Page (/), Student Dashboard (/dashboard), and Challenge Day (/day/12)... Mobile-first (390px), edge case handling (0 streak, missed day, empty profile), thoughtful ideas (Late night study timer, Recruiter score)... React base, mobile friendly."

- **AI Action**: Formulated implementation plan artifact (`implementation_plan.md`) outlining Vite + React + React Router DOM + Tailwind CSS design system with Midnight Dark Mode aesthetics (`#0B0F19`).

---

### 2. Design System & Component Architecture
> **Prompt**: "Build modern dark mode aesthetics for late-night college coders with glassmorphism, glowing fire animations, and interactive mock backend state."

- **AI Action**: 
  - Created `src/data/mockData.js` and `src/data/userStates.js` for real-world edge case toggling (Day 1 Cold Start, Missed Day 11 Rescue Mode, Active Day 12 Streak, Completed 60 Days).
  - Built custom glassmorphism utilities, dark gradients, and responsive mobile bottom navbar (`Navbar.jsx`).

---

### 3. Screen 1: Landing Page (`/`)
- **Implemented**: High-impact hero section, live student trust counters (12.4k+ students, 480k+ commits), track selector cards (MERN, AI Engineering, Flutter, DevOps), proof-of-work engine visual, wall of proof ticker, FAQ accordion, and sticky mobile CTA bar.

---

### 4. Screen 2: Student Dashboard (`/dashboard`)
- **Implemented**:
  - **Edge-Case Simulator Bar**: Integrated toolbar allowing recruiters/reviewers to switch between 4 student states live.
  - **Streak & Midnight Timer Card**: Animated 🔥 flame counter, streak shields inventory, and live countdown timer to the 12:00 AM cutoff.
  - **60-Day Interactive Heatmap**: Responsive grid with status tooltips and week filters.
  - **Recruiter Magnet Score Card**: Visual candidate visibility index (88% Top Tier) and hiring partner metrics.
  - **Badges Showcase**: Achievement unlocked cards.

---

### 5. Screen 3: Challenge Day 12 (`/day/12`)
- **Implemented**:
  - Challenge header with track context, estimated time (45 mins), difficulty, and XP rewards.
  - Task briefing specs checklist, pro-tips, and copyable WebSocket code starter snippet.
  - **Interactive Live Canvas Demo (`CollaborativeCanvasDemo.jsx`)**: In-browser vector drawing canvas allowing judges to draw live and view an animated peer co-drawer cursor (`Priya (VIT)`).
  - **Proof of Work Form**: Form validation requiring `github.com` and `linkedin.com` URLs + 1-click hashtag generator.
  - **Submission Celebration Modal**: Canvas confetti trigger via `canvas-confetti` + Web Audio API synthesizer chime notes (`src/utils/audio.js`), updating streak state dynamically.
  - Peer submissions showcase feed for Day 12.

---

### 6. Audio Haptic Feedback & Interactive Enhancement
> **Prompt**: "Further What changes and improvement I can do in the website"

- **AI Action**:
  - Implemented `src/utils/audio.js` providing browser-native Web Audio API chime sounds on proof verification and streak shield activation.
  - Added live drawing canvas playground to Day 12 specs tab.

---

### 7. Deployment & Routing Setup
> **Prompt**: "Provide step-by-step guide to push to GitHub and deploy live."

- **AI Action**:
  - Added `.github/workflows/deploy.yml` for automated GitHub Actions build and deployment to GitHub Pages.
  - Configured `HashRouter` and `base: './'` in `vite.config.js` to ensure zero 404 blank screen errors on deployment subpaths.
  - Created `vercel.json` for single-page application routing.
