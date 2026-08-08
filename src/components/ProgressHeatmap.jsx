import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Lock, Flame, AlertCircle, Eye } from 'lucide-react';

export function ProgressHeatmap({ userState }) {
  const navigate = useNavigate();
  const [hoveredDay, setHoveredDay] = useState(null);

  const getStatusColor = (status, dayNum) => {
    if (status === 'completed') return 'bg-emerald-500 hover:bg-emerald-400 text-black border-emerald-400 shadow-sm shadow-emerald-500/30';
    if (status === 'active') return 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400 shadow-md shadow-indigo-500/40 animate-pulse';
    if (status === 'missed') return 'bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 border-rose-500/40';
    return 'bg-[#0B0F19] text-gray-600 border-[#1F293D] hover:border-gray-600';
  };

  const handleTileClick = (dayNum, status) => {
    if (dayNum === 12 || status === 'active' || status === 'completed') {
      navigate('/day/12');
    }
  };

  return (
    <div className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="font-extrabold text-white text-base tracking-tight flex items-center gap-2">
            <span>60-Day Challenge Roadmap</span>
            <span className="text-xs bg-indigo-500/20 text-indigo-400 font-bold px-2 py-0.5 rounded-full border border-indigo-500/30">
              {userState.completedDaysCount} / 60 Completed
            </span>
          </h3>
          <p className="text-xs text-gray-400">Click any unlocked tile to view task brief and proof requirements.</p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-emerald-500" />
            <span>Submitted</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-indigo-600" />
            <span>Today's Task</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-rose-500/40" />
            <span>Missed</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-[#0B0F19] border border-[#1F293D]" />
            <span>Locked</span>
          </div>
        </div>
      </div>

      {/* Grid of 60 tiles (10 columns x 6 rows) */}
      <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
        {userState.heatmapStatus.map((status, index) => {
          const dayNum = index + 1;
          const isCurrent = dayNum === userState.currentDay;

          return (
            <button
              key={dayNum}
              onMouseEnter={() => setHoveredDay(dayNum)}
              onMouseLeave={() => setHoveredDay(null)}
              onClick={() => handleTileClick(dayNum, status)}
              className={`relative h-11 rounded-xl font-mono text-xs font-bold transition-all border flex flex-col items-center justify-center cursor-pointer ${getStatusColor(
                status,
                dayNum
              )}`}
            >
              <span>{dayNum}</span>
              
              {status === 'completed' && <CheckCircle2 className="w-3 h-3 mt-0.5 text-black" />}
              {status === 'active' && <Flame className="w-3 h-3 mt-0.5 text-orange-400 animate-bounce" />}
              {status === 'missed' && <AlertCircle className="w-3 h-3 mt-0.5 text-rose-400" />}
              {status === 'locked' && <Lock className="w-2.5 h-2.5 mt-0.5 text-gray-600" />}

              {/* Hover Tooltip */}
              {hoveredDay === dayNum && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-30 w-36 bg-[#0B0F19] border border-[#1F293D] text-white p-2 rounded-xl text-[11px] shadow-2xl pointer-events-none">
                  <div className="font-bold text-indigo-400">Day {dayNum}</div>
                  <div className="capitalize text-gray-300 text-[10px]">Status: {status}</div>
                  {dayNum === 12 && (
                    <div className="text-[9px] text-emerald-400 font-semibold mt-0.5">Click to view Day 12!</div>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
