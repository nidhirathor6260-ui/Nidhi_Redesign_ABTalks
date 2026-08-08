import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, CheckCircle2, ArrowRight, Github, Linkedin, Trophy, ShieldCheck, 
  Users, Code2, Sparkles, ChevronDown, ChevronUp, Star, PlayCircle 
} from 'lucide-react';
import { TRACKS, RECRUITER_STATISTICS } from '../data/mockData';

export function LandingPage() {
  const [selectedTrack, setSelectedTrack] = useState('mern');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      q: 'Why 60 Days? Is that realistic alongside college?',
      a: 'Each daily challenge is micro-scoped to take 30-45 minutes. You can build it late at night after college lectures or hostel study hours.'
    },
    {
      q: 'What if I miss a day due to exams or travel?',
      a: 'We built Streak Protection & Recovery Quests! You get 1 free Streak Shield per month, and can clear a recovery task within 24 hours to keep your streak intact.'
    },
    {
      q: 'How does daily proof of work help me get hired?',
      a: 'Recruiters reject empty resumes. When you post a daily GitHub commit and a 30-second video/screenshot on LinkedIn with tag #ABTalks60Days, recruiters track your consistency directly.'
    },
    {
      q: 'Is ABTalks free for college students?',
      a: 'Yes, 100% free for college students across India. Zero hidden paywalls for core tracks.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] pb-24 md:pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 px-4">
        {/* Background glow animations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>India's #1 College Proof-of-Work Challenge</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Build 60 Projects in 60 Days.{' '}
            <span className="text-gradient-purple">Get Visible. Get Hired.</span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Stop sending cold resumes with empty GitHub heatmaps. Pick a track, commit code every night, post public proof of work, and let recruiters reach out to you.
          </p>

          {/* Primary CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <Link
              to="/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start 60-Day Challenge</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/day/12"
              className="w-full sm:w-auto px-6 py-4 bg-[#131B2E] hover:bg-[#1C273E] text-gray-300 hover:text-white font-bold text-sm rounded-2xl border border-[#1F293D] transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-4 h-4 text-emerald-400" />
              <span>Preview Day 12 Task</span>
            </Link>
          </div>

          {/* Live Trust Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-12 max-w-2xl mx-auto pt-8 border-t border-[#1F293D]">
            <div className="p-3 rounded-xl bg-[#131B2E]/60 border border-[#1F293D]">
              <div className="text-xl sm:text-2xl font-black text-white">12,400+</div>
              <div className="text-[11px] text-gray-400">Active College Coders</div>
            </div>

            <div className="p-3 rounded-xl bg-[#131B2E]/60 border border-[#1F293D]">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">480,000+</div>
              <div className="text-[11px] text-gray-400">Public GitHub Commits</div>
            </div>

            <div className="p-3 rounded-xl bg-[#131B2E]/60 border border-[#1F293D]">
              <div className="text-xl sm:text-2xl font-black text-orange-400">850+</div>
              <div className="text-[11px] text-gray-400">Recruiter Placements</div>
            </div>
          </div>
        </div>
      </section>

      {/* How Proof of Work Works */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">How ABTalks Works</h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">3 simple steps every single night after college</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-panel p-6 rounded-2xl border border-[#1F293D] relative">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-extrabold text-sm mb-4">
              01
            </div>
            <h3 className="font-extrabold text-white text-base mb-2">Pick Your Track & Brief</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every day at 6:00 PM, get a practical 45-minute building prompt (MERN, AI Engineering, Flutter, or DevOps).
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#1F293D] relative">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-extrabold text-sm mb-4">
              02
            </div>
            <h3 className="font-extrabold text-white text-base mb-2">Push GitHub Commit</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Write working code, push your daily commit to GitHub, and keep your contribution green heatmap glowing.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#1F293D] relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold text-sm mb-4">
              03
            </div>
            <h3 className="font-extrabold text-white text-base mb-2">Post LinkedIn Proof</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Share a quick post on LinkedIn with your repo & demo. Our algorithm boosts your post to hiring managers.
            </p>
          </div>
        </div>
      </section>

      {/* Track Selection Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Choose Your 60-Day Track</h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">Structured curriculum designed from zero to production deployment</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TRACKS.map((track) => (
            <div
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`glass-panel-interactive p-5 rounded-2xl border transition-all cursor-pointer ${
                selectedTrack === track.id
                  ? 'border-indigo-500 bg-[#162036] ring-1 ring-indigo-500/50'
                  : 'border-[#1F293D]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg text-[11px] font-extrabold border border-indigo-500/20">
                  {track.studentsCount} Students Enrolled
                </div>
                <span className="text-xs text-gray-400 font-semibold">{track.level}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1.5">{track.name}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">{track.description}</p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1F293D]">
                {track.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-[#0B0F19] text-gray-300 rounded text-[10px] border border-[#1F293D]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-indigo-400 hover:text-indigo-300"
          >
            <span>Enroll in Selected Track & Go to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Recruiter Placement Logos */}
      <section className="py-10 px-4 bg-[#131B2E]/50 border-y border-[#1F293D]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            Students Placed at Top Companies via Proof-of-Work
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-gray-300 font-extrabold text-sm sm:text-base opacity-85">
            {RECRUITER_STATISTICS.partnerCompanies.map((comp, idx) => (
              <span key={idx} className="hover:text-indigo-400 transition-colors">
                {comp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">Everything you need to know before starting Day 1</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
              className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-4 cursor-pointer transition-colors hover:border-indigo-500/40"
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-bold text-white text-sm">{faq.q}</h4>
                {openFaqIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
              </div>
              {openFaqIndex === index && (
                <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-[#1F293D] leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Mobile CTA Bar */}
      <div className="sm:hidden fixed bottom-14 left-0 right-0 z-40 bg-[#131B2E]/95 backdrop-blur-md border-t border-[#1F293D] p-3">
        <Link
          to="/dashboard"
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
        >
          <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
          <span>Join 60-Day Challenge Free</span>
        </Link>
      </div>
    </div>
  );
}
