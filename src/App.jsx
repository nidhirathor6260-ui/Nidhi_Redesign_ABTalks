import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EDGE_CASE_PRESETS } from './data/userStates';
import { EdgeCaseSelector } from './components/EdgeCaseSelector';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { ChallengeDayPage } from './pages/ChallengeDayPage';

export function App() {
  const [activeStateKey, setActiveStateKey] = useState('ACTIVE_DAY_12');
  const [userState, setUserState] = useState(EDGE_CASE_PRESETS.ACTIVE_DAY_12);

  const handleSelectPreset = (presetKey) => {
    setActiveStateKey(presetKey);
    setUserState({ ...EDGE_CASE_PRESETS[presetKey] });
  };

  const handleUseShield = () => {
    if (userState.streakShieldsAvailable > 0) {
      setUserState((prev) => ({
        ...prev,
        currentStreak: 10, // Restored streak
        streakShieldsAvailable: prev.streakShieldsAvailable - 1,
        bannerMessage: '⚡ Streak Shield activated! Your 10-day streak has been restored.'
      }));
    }
  };

  const handleSubmitSuccess = ({ githubUrl, linkedinUrl }) => {
    setUserState((prev) => ({
      ...prev,
      currentStreak: prev.currentStreak + 1,
      completedDaysCount: prev.completedDaysCount + 1,
      todaySubmitted: true,
      totalXP: prev.totalXP + 150,
      recruiterVisibilityScore: Math.min(100, prev.recruiterVisibilityScore + 4),
      bannerMessage: '🔥 Day 12 verified! Streak bumped to ' + (prev.currentStreak + 1) + ' Days!'
    }));
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] flex flex-col font-sans">
        {/* Edge Case Simulator Control Bar */}
        <EdgeCaseSelector
          activeStateKey={activeStateKey}
          onSelectState={handleSelectPreset}
        />

        {/* Header Navigation Bar */}
        <Navbar userState={userState} />

        {/* Main Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/dashboard"
              element={
                <StudentDashboard
                  userState={userState}
                  onUseShield={handleUseShield}
                />
              }
            />
            <Route
              path="/day/12"
              element={
                <ChallengeDayPage
                  userState={userState}
                  onSubmitSuccess={handleSubmitSuccess}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
