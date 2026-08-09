import React, { useState } from 'react';
import { Sliders, CheckCircle2, AlertTriangle, Play, Sparkles, X, ChevronUp } from 'lucide-react';
import { EDGE_CASE_PRESETS } from '../data/userStates';

export function EdgeCaseSelector({ activeStateKey, onSelectState }) {
  const [isOpen, setIsOpen] = useState(false);

  const activePreset = EDGE_CASE_PRESETS[activeStateKey];

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Expanded State Selection Drawer */}
      {isOpen && (
        <div className="mb-3 w-72 bg-[#131B2E] border border-[#1F293D] p-4 rounded-2xl shadow-2xl space-y-3 animate-fadeIn backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-[#1F293D] pb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400">
              <Sliders className="w-3.5 h-3.5" />
              <span>Demo State Switcher</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg bg-[#0B0F19] text-gray-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-gray-400">
            Switch student states to test real-world edge cases:
          </p>

          <div className="space-y-1.5">
            {Object.values(EDGE_CASE_PRESETS).map((preset) => {
              const isActive = preset.id === activeStateKey;
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    onSelectState(preset.id);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                      : 'bg-[#0B0F19] text-gray-300 hover:bg-[#1C273E] hover:text-white border border-[#1F293D]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {preset.id === 'DAY_1_COLD_START' && <Play className="w-3 h-3 text-emerald-400" />}
                    {preset.id === 'MISSED_DAY_11' && <AlertTriangle className="w-3 h-3 text-amber-400" />}
                    {preset.id === 'ACTIVE_DAY_12' && <Sparkles className="w-3 h-3 text-indigo-300" />}
                    {preset.id === 'COMPLETED_60_DAYS' && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
                    <span className="truncate max-w-[170px]">{preset.label}</span>
                  </div>

                  {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Discrete Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3.5 py-2 rounded-full bg-[#131B2E]/90 hover:bg-[#1A2338] border border-indigo-500/30 text-indigo-300 text-xs font-bold shadow-2xl backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
      >
        <Sliders className="w-3.5 h-3.5 text-indigo-400" />
        <span className="hidden sm:inline">State: {activePreset.label.split(':')[0]}</span>
        <span className="sm:hidden">Demo State</span>
        <ChevronUp className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}
