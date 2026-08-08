# ABTalks - 60-Day College Coding Challenge Platform 🚀

A mobile-first, proof-of-work coding challenge platform designed for Indian college students to build consistency, push daily GitHub commits, share LinkedIn proof, and get discovered by top tech recruiters.

---

## 🔗 Route Map & Live Demo

```
/
/dashboard
/day/12
```

- **Landing Page (`/`)**: High-trust hero section, track selection, proof-of-work engine visual, student wall of proof, and FAQ accordion.
- **Student Dashboard (`/dashboard`)**: 🔥 Animated streak card, midnight countdown timer widget, 60-day interactive heatmap, recruiter magnet score, and real-world edge case simulator switcher.
- **Challenge Day 12 (`/day/12`)**: Task briefing overview, WebSocket cursor sync starter code, interactive proof submission form (GitHub repo + LinkedIn post validation), confetti celebration modal, and peer submissions feed.

---

## ✨ Key Features & Thoughtful Enhancements

1. **Mobile-First Design (390px Viewport)**: Optimized for late-night mobile phone usage after college lectures, complete with a responsive bottom navigation bar.
2. **Edge-Case Simulator Bar**: Integrated toolbar allowing reviewers to toggle between 4 student states live:
   - **Day 1 / Cold Start** (0 streak, initial state)
   - **Missed Day 11 Rescue Mode** (Broken streak with Streak Recovery Quest)
   - **Active Day 12** (Active 12-day streak)
   - **Completed 60 Days** (Graduation certificate)
3. **Late-Night Study Cutoff Widget**: Live countdown timer counting down to the 12:00 AM submission deadline.
4. **Recruiter Magnet Score**: Dynamic calculation of candidate visibility index (88% Top Tier) based on proof-of-work consistency.
5. **Interactive Proof Verifier**: Validates GitHub commit/repo and LinkedIn URLs with instant feedback and canvas confetti triggers.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: React 18 + Vite
- **Routing**: React Router DOM (HashRouter)
- **Styling & Theme**: Tailwind CSS v3 + Custom Glassmorphism Design Tokens
- **Icons & FX**: Lucide React Icons + Canvas Confetti
- **Mock Data Layer**: Structured JSON data files (`src/data/mockData.js` & `src/data/userStates.js`)

---

## 💻 Local Setup Instructions

```bash
# 1. Clone repository
git clone https://github.com/nidhirathor6260-ui/Nidhi_Redesign_ABTalks.git

# 2. Navigate into project folder
cd Nidhi_Redesign_ABTalks

# 3. Install dependencies
npm install

# 4. Start local dev server
npm run dev
```

Open `http://localhost:3000` in your browser and switch to **390px mobile view** in browser DevTools to test the mobile experience!
