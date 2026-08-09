import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Sparkles, Share2, Github, Linkedin, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { playChimeSound } from '../utils/audio';

export function SubmissionModal({ isOpen, onClose, dayNumber, githubUrl, linkedinUrl, newStreak }) {
  useEffect(() => {
    if (isOpen) {
      // Trigger festive canvas confetti animation
      confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.6 }
      });
      // Play celebratory chime sound
      playChimeSound();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#131B2E] border border-indigo-500/30 rounded-3xl p-6 shadow-2xl overflow-hidden">
        {/* Glowing aura background */}
        <div className="absolute -top-20 -left-20 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-[#0B0F19] text-gray-400 hover:text-white border border-[#1F293D]"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center pt-2">
          <div className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 border border-emerald-500/40 text-emerald-400 mb-3 shadow-glow-cyber">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
          </div>

          <h3 className="text-2xl font-black text-white tracking-tight">Proof of Work Verified!</h3>
          <p className="text-xs text-gray-300 mt-1">
            Day {dayNumber} submission officially logged. Streak bumped to{' '}
            <span className="text-orange-400 font-bold">{newStreak} Days 🔥</span>!
          </p>
        </div>

        {/* Verification Summary Box */}
        <div className="my-5 p-4 rounded-2xl bg-[#0B0F19] border border-[#1F293D] text-left space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 flex items-center gap-1.5">
              <Github className="w-4 h-4 text-white" />
              GitHub Commit:
            </span>
            <span className="text-emerald-400 font-mono font-semibold truncate max-w-[180px]">
              {githubUrl}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 flex items-center gap-1.5">
              <Linkedin className="w-4 h-4 text-blue-400" />
              LinkedIn Post:
            </span>
            <span className="text-indigo-400 font-mono font-semibold truncate max-w-[180px]">
              {linkedinUrl}
            </span>
          </div>

          <div className="pt-2 border-t border-[#1F293D] flex items-center justify-between text-[11px]">
            <span className="text-gray-400">XP Earned:</span>
            <span className="text-amber-400 font-bold">+150 XP</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            <span>Open LinkedIn Post to Celebrate</span>
          </a>

          <Link
            to="/dashboard"
            onClick={onClose}
            className="w-full py-3 bg-[#0B0F19] hover:bg-[#1A2338] text-gray-300 hover:text-white font-bold text-xs rounded-xl border border-[#1F293D] transition-all flex items-center justify-center gap-2"
          >
            <span>Back to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
