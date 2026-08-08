import React from 'react';
import { Eye, TrendingUp, Award, Building2, ExternalLink } from 'lucide-react';
import { RECRUITER_STATISTICS } from '../data/mockData';

export function RecruiterScore({ score, viewsCount }) {
  return (
    <div className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-5 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-white text-sm">Recruiter Visibility Score</h4>
            <p className="text-xs text-gray-400">Based on public GitHub + LinkedIn proof consistency</p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-emerald-400">
            {score}%
          </div>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            Top 5% Tier
          </span>
        </div>
      </div>

      {/* Recruiter Views Stats */}
      <div className="grid grid-cols-2 gap-3 my-4">
        <div className="bg-[#0B0F19] p-3 rounded-xl border border-[#1F293D] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <div className="text-lg font-bold text-white">{viewsCount}</div>
            <div className="text-[11px] text-gray-400">Recruiter Views This Week</div>
          </div>
        </div>

        <div className="bg-[#0B0F19] p-3 rounded-xl border border-[#1F293D] flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-lg font-bold text-emerald-400">+45%</div>
            <div className="text-[11px] text-gray-400">Visibility Surge</div>
          </div>
        </div>
      </div>

      {/* Hiring Companies Bar */}
      <div className="pt-2 border-t border-[#1F293D]">
        <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-indigo-400" />
            Hiring Partners Reviewing Proof
          </span>
          <span className="text-indigo-400 font-semibold">{RECRUITER_STATISTICS.averagePackage} Avg Package</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {RECRUITER_STATISTICS.partnerCompanies.map((company, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-[#0B0F19] border border-[#1F293D] rounded-lg text-[10px] font-semibold text-gray-300 hover:text-white hover:border-indigo-500/40 transition-colors"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
