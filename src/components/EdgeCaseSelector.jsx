import React from 'react';
import { Sliders, CheckCircle2, AlertTriangle, Play, Sparkles } from 'lucide-react';
import { EDGE_CASE_PRESETS } from '../data/userStates';

export function EdgeCaseSelector({ activeStateKey, onSelectState }) {
  return (
    <div className="bg-[#131B2E] border-b border-[#1F293D] px-4 py-2.5 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
          <Sliders className="w-4 h-4 text-indigo-400" />
          <span className="uppercase tracking-wider">Edge-Case Simulator:</span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {Object.values(EDGE_CASE_PRESETS).map((preset) => {
            const isActive = preset.id === activeStateKey;
            return (
              <button
                key={preset.id}
                onClick={() => onSelectState(preset.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 ring-1 ring-indigo-400'
                    : 'bg-[#0B0F19] text-gray-300 hover:bg-[#1A2338] hover:text-white border border-[#1F293D]'
                }`}
              >
                {preset.id === 'DAY_1_COLD_START' && <Play className="w-3 h-3 text-emerald-400" />}
                {preset.id === 'MISSED_DAY_11' && <AlertTriangle className="w-3 h-3 text-amber-400" />}
                {preset.id === 'ACTIVE_DAY_12' && <Sparkles className="w-3 h-3 text-indigo-300" />}
                {preset.id === 'COMPLETED_60_DAYS' && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
                <span>{preset.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
