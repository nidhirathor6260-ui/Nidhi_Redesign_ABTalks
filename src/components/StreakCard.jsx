import React from 'react';
import { Flame, Shield, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

export function StreakCard({ userState, onUseShield }) {
  const isZeroStreak = userState.currentStreak === 0;
  const isMissed = userState.id === 'MISSED_DAY_11';

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#172136] to-[#0F172A] border border-[#23314D] p-5 shadow-xl">
      {/* Background Decorative Glow */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left Side: Flame Icon & Numbers */}
        <div className="flex items-center gap-4">
          <div className={`relative p-4 rounded-2xl flex items-center justify-center ${
            isZeroStreak 
              ? 'bg-gray-800/80 border border-gray-700 text-gray-500' 
              : 'bg-gradient-to-tr from-orange-600/30 to-amber-500/20 border border-orange-500/30 shadow-glow-orange'
          }`}>
            <Flame className={`w-10 h-10 ${
              isZeroStreak ? 'text-gray-500' : 'text-orange-500 animate-flame-pulse'
            }`} />
            {userState.currentStreak >= 10 && (
              <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full shadow">
                HOT 🔥
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {userState.currentStreak}
              </span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Days Streak</span>
            </div>

            <p className="text-xs text-gray-400 mt-0.5">
              {isZeroStreak
                ? 'Your streak is unlit! Submit Day 1 task before midnight to ignite.'
                : isMissed
                ? 'Streak broken yesterday! Activate Recovery Quest below.'
                : `Awesome work! You've built consistency for ${userState.currentStreak} consecutive days.`}
            </p>
          </div>
        </div>

        {/* Right Side: Midnight Freeze Shield & Stats */}
        <div className="flex flex-wrap sm:flex-col items-start sm:items-end justify-between border-t sm:border-t-0 border-[#23314D] pt-3 sm:pt-0 gap-2">
          <div className="flex items-center gap-2 bg-[#0B0F19] px-3 py-1.5 rounded-xl border border-[#1F293D]">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-400">
              {userState.streakShieldsAvailable} Streak Shield Available
            </span>
          </div>

          <div className="text-xs text-gray-400">
            Target: <span className="text-indigo-400 font-bold">60 Days</span> ({Math.round((userState.completedDaysCount / 60) * 100)}% complete)
          </div>
        </div>
      </div>

      {/* Missed Day Recovery Banner if in Missed State */}
      {isMissed && (
        <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3 text-amber-300 text-xs">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span><strong>Streak Rescue Mode:</strong> Complete Day 12 & Day 11 tasks today to restore your 10-day streak!</span>
          </div>
          <button 
            onClick={onUseShield}
            className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black font-bold text-[11px] rounded-lg transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5" />
            Use Shield Rescue
          </button>
        </div>
      )}
    </div>
  );
}
