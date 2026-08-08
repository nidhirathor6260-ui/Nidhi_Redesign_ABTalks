import React, { useState, useEffect } from 'react';
import { Moon, Clock, Sparkles } from 'lucide-react';

export function NightTimerWidget() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-900/80 border border-indigo-500/20 rounded-2xl p-4 shadow-lg flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
          <Moon className="w-5 h-5 animate-subtle-float text-purple-300" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300">
            <span>Late Night Study Cutoff</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <p className="text-[11px] text-gray-400">Submit proof of work before 12:00 AM midnight</p>
        </div>
      </div>

      <div className="flex items-center gap-1 font-mono text-sm sm:text-base font-bold bg-[#0B0F19] px-3 py-1.5 rounded-xl border border-[#1F293D] text-indigo-300 shadow-inner">
        <Clock className="w-4 h-4 text-purple-400 mr-1 hidden sm:inline" />
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
        <span className="text-orange-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
