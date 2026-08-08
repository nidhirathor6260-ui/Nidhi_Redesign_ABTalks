export const EDGE_CASE_PRESETS = {
  ACTIVE_DAY_12: {
    id: 'ACTIVE_DAY_12',
    label: 'Normal Active (Day 12 Streak)',
    studentName: 'Vikramaditya Roy',
    college: 'BITS Pilani - CS 2026',
    trackName: 'Fullstack MERN',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
    currentStreak: 12,
    completedDaysCount: 11,
    missedDaysCount: 0,
    currentDay: 12,
    todaySubmitted: false,
    totalXP: 1650,
    level: 4,
    recruiterVisibilityScore: 88, // 88% Top Talent Tier
    recruiterViews: 34,
    streakShieldsAvailable: 1,
    heatmapStatus: Array.from({ length: 60 }, (_, i) => {
      if (i < 11) return 'completed';
      if (i === 11) return 'active';
      return 'locked';
    }),
    bannerMessage: null
  },
  DAY_1_COLD_START: {
    id: 'DAY_1_COLD_START',
    label: 'Edge Case 1: First Day (0 Streak)',
    studentName: 'Ananya Verma',
    college: 'DTU Delhi - ECE 2027',
    trackName: 'Fullstack MERN',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    currentStreak: 0,
    completedDaysCount: 0,
    missedDaysCount: 0,
    currentDay: 1,
    todaySubmitted: false,
    totalXP: 0,
    level: 1,
    recruiterVisibilityScore: 12,
    recruiterViews: 0,
    streakShieldsAvailable: 1,
    heatmapStatus: Array.from({ length: 60 }, (_, i) => {
      if (i === 0) return 'active';
      return 'locked';
    }),
    bannerMessage: '⚡ Welcome to Day 1! Complete today’s task to ignite your fire and start your streak.'
  },
  MISSED_DAY_11: {
    id: 'MISSED_DAY_11',
    label: 'Edge Case 2: Missed Day Yesterday',
    studentName: 'Siddharth Nair',
    college: 'NIT Trichy - CS 2025',
    trackName: 'Fullstack MERN',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200',
    currentStreak: 0, // broken streak
    completedDaysCount: 10,
    missedDaysCount: 1,
    currentDay: 12,
    todaySubmitted: false,
    totalXP: 1400,
    level: 3,
    recruiterVisibilityScore: 62,
    recruiterViews: 19,
    streakShieldsAvailable: 0,
    heatmapStatus: Array.from({ length: 60 }, (_, i) => {
      if (i < 10) return 'completed';
      if (i === 10) return 'missed'; // Day 11 missed
      if (i === 11) return 'active';
      return 'locked';
    }),
    bannerMessage: '⚠️ You missed Day 11 yesterday! Complete Day 12 & activate Streak Recovery to restore your 10-day streak.'
  },
  COMPLETED_60_DAYS: {
    id: 'COMPLETED_60_DAYS',
    label: 'Edge Case 3: Completed 60/60 Days',
    studentName: 'Neha Deshmukh',
    college: 'IIIT Hyderabad - CS 2025',
    trackName: 'Fullstack MERN',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    currentStreak: 60,
    completedDaysCount: 60,
    missedDaysCount: 0,
    currentDay: 60,
    todaySubmitted: true,
    totalXP: 9500,
    level: 10,
    recruiterVisibilityScore: 99,
    recruiterViews: 248,
    streakShieldsAvailable: 3,
    heatmapStatus: Array.from({ length: 60 }, () => 'completed'),
    bannerMessage: '🏆 CONGRATULATIONS! You completed all 60 Days of ABTalks! Your verified certificate is ready.'
  }
};
