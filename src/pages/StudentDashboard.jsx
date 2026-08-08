import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, Calendar, Trophy, ArrowRight, Award, ShieldAlert, Sparkles, 
  CheckCircle2, Clock, Zap, BookOpen, Star, AlertTriangle 
} from 'lucide-react';
import { StreakCard } from '../components/StreakCard';
import { NightTimerWidget } from '../components/NightTimerWidget';
import { ProgressHeatmap } from '../components/ProgressHeatmap';
import { RecruiterScore } from '../components/RecruiterScore';
import { BADGES, DAY_12_TASK } from '../data/mockData';

export function StudentDashboard({ userState, onUseShield }) {
  const isZeroStreak = userState.currentStreak === 0;
  const isMissed = userState.id === 'MISSED_DAY_11';
  const isCompleted = userState.id === 'COMPLETED_60_DAYS';

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] pb-24 md:pb-12 pt-4 px-3 sm:px-6 max-w-6xl mx-auto space-y-6">
      {/* Edge Case Banner Alert (if applicable) */}
      {userState.bannerMessage && (
        <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold shadow-lg ${
          isCompleted 
            ? 'bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border-emerald-500/40 text-emerald-300'
            : isMissed
            ? 'bg-gradient-to-r from-rose-950/80 to-amber-950/80 border-rose-500/40 text-rose-200'
            : 'bg-indigo-950/80 border-indigo-500/40 text-indigo-200'
        }`}>
          <div className="flex items-center gap-2.5">
            {isCompleted && <Trophy className="w-5 h-5 text-amber-400 flex-shrink-0 animate-bounce" />}
            {isMissed && <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 animate-pulse" />}
            {userState.id === 'DAY_1_COLD_START' && <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0" />}
            <span>{userState.bannerMessage}</span>
          </div>

          <Link
            to="/day/12"
            className="px-3.5 py-1.5 bg-white text-black hover:bg-gray-100 font-extrabold text-xs rounded-xl shadow transition-transform hover:scale-105 flex-shrink-0"
          >
            {isCompleted ? 'View Certificate' : 'Go to Day 12'}
          </Link>
        </div>
      )}

      {/* Student Profile Header & Level/XP Badge */}
      <div className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-5 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={userState.avatar}
              alt={userState.studentName}
              className="w-14 h-14 rounded-2xl object-cover ring-2 ring-indigo-500/50 shadow-md"
            />
            <span className="absolute -bottom-1 -right-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-black px-1.5 py-0.2 rounded-full border border-[#0B0F19]">
              Lvl {userState.level}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold text-white">{userState.studentName}</h2>
              <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 rounded-md text-[10px] font-extrabold border border-indigo-500/20">
                {userState.trackName}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">{userState.college}</p>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="bg-[#0B0F19] p-3 rounded-xl border border-[#1F293D] w-full sm:w-64">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gray-400 font-medium">Level {userState.level} Coder</span>
            <span className="text-amber-400 font-bold">{userState.totalXP} XP</span>
          </div>
          <div className="w-full h-2 bg-[#1C273E] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (userState.completedDaysCount / 60) * 100)}%` }}
            />
          </div>
          <div className="text-[10px] text-gray-400 text-right mt-1">
            Overall Completion: <strong className="text-white">{Math.round((userState.completedDaysCount / 60) * 100)}%</strong>
          </div>
        </div>
      </div>

      {/* Grid Row 1: Streak Card & Late Night Timer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <StreakCard userState={userState} onUseShield={onUseShield} />
        </div>
        <div>
          <NightTimerWidget />
        </div>
      </div>

      {/* Grid Row 2: Today's Focus Task Card */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900/40 via-[#131B2E] to-[#131B2E] border border-indigo-500/30 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-orange-500/20 text-orange-400 rounded-full text-xs font-black border border-orange-500/30 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" />
                TODAY'S TASK: DAY {DAY_12_TASK.dayNumber}
              </span>
              <span className="text-xs text-gray-400 font-semibold">{DAY_12_TASK.estimatedTime}</span>
              <span className="text-xs text-amber-400 font-bold">+{DAY_12_TASK.xpReward} XP</span>
            </div>

            <h3 className="text-xl font-extrabold text-white tracking-tight">
              {DAY_12_TASK.title}
            </h3>
            <p className="text-xs text-gray-300 max-w-xl">
              {DAY_12_TASK.subtitle}
            </p>
          </div>

          <Link
            to="/day/12"
            className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>Open Day 12 Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Grid Row 3: 60-Day Activity Heatmap */}
      <ProgressHeatmap userState={userState} />

      {/* Grid Row 4: Recruiter Visibility & Badges Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <RecruiterScore score={userState.recruiterVisibilityScore} viewsCount={userState.recruiterViews} />

        {/* Badges / Achievements Panel */}
        <div className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Student Standing & Achievements</span>
            </h4>
            <span className="text-xs text-gray-400 font-semibold">3/5 Unlocked</span>
          </div>

          <div className="space-y-3">
            {BADGES.map((badge) => (
              <div
                key={badge.id}
                className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                  badge.unlocked
                    ? 'bg-[#0B0F19] border-[#1F293D]'
                    : 'bg-[#0B0F19]/40 border-[#1F293D]/50 opacity-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                      badge.unlocked
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-gray-800 text-gray-500 border border-gray-700'
                    }`}
                  >
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs">{badge.title}</h5>
                    <p className="text-[11px] text-gray-400">{badge.desc}</p>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  badge.unlocked ? 'bg-emerald-500/10 text-emerald-400' : 'bg-gray-800 text-gray-500'
                }`}>
                  {badge.unlocked ? 'Unlocked' : 'Locked'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
