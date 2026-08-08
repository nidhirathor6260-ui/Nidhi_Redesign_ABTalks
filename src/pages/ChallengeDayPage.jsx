import React, { useState } from 'react';
import { 
  Github, Linkedin, CheckCircle2, Copy, ExternalLink, Code2, 
  Sparkles, FileText, AlertCircle, Share2, Flame, ArrowLeft, Lightbulb 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { DAY_12_TASK, MOCK_COMMUNITY_SUBMISSIONS } from '../data/mockData';
import { validateGithubUrl, validateLinkedinUrl } from '../utils/helpers';
import { SubmissionModal } from '../components/SubmissionModal';

export function ChallengeDayPage({ userState, onSubmitSuccess }) {
  const [activeTab, setActiveTab] = useState('brief'); // 'brief', 'resources', 'submissions'
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [reflection, setReflection] = useState('');
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [copiedHashtags, setCopiedHashtags] = useState(false);

  const hashtags = '#ABTalks60Days #ProofOfWork #FullstackMERN #Day12 #BuildInPublic';

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText(hashtags);
    setCopiedHashtags(true);
    setTimeout(() => setCopiedHashtags(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ghCheck = validateGithubUrl(githubUrl);
    const liCheck = validateLinkedinUrl(linkedinUrl);

    if (!ghCheck.valid || !liCheck.valid) {
      setErrors({
        github: ghCheck.error,
        linkedin: liCheck.error
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
      onSubmitSuccess({ githubUrl, linkedinUrl, reflection });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] pb-24 md:pb-12 pt-4 px-3 sm:px-6 max-w-5xl mx-auto space-y-6">
      {/* Back to Dashboard Navigation link */}
      <div className="flex items-center justify-between">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-extrabold">
            {DAY_12_TASK.trackName}
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold">
            +{DAY_12_TASK.xpReward} XP
          </span>
        </div>
      </div>

      {/* Challenge Title Header Card */}
      <div className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-5 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-orange-400 font-extrabold mb-1">
              <Flame className="w-4 h-4 animate-pulse" />
              <span>CHALLENGE DAY {DAY_12_TASK.dayNumber} OF 60</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">{DAY_12_TASK.difficulty}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {DAY_12_TASK.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              {DAY_12_TASK.subtitle}
            </p>
          </div>

          <div className="bg-[#0B0F19] px-4 py-2.5 rounded-xl border border-[#1F293D] text-left sm:text-right flex-shrink-0">
            <div className="text-[11px] text-gray-400">Estimated Time</div>
            <div className="text-sm font-bold text-indigo-300">{DAY_12_TASK.estimatedTime}</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#1F293D] pb-2">
        <button
          onClick={() => setActiveTab('brief')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'brief'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
              : 'text-gray-400 hover:text-white hover:bg-[#131B2E]'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Task Brief & Specs</span>
        </button>

        <button
          onClick={() => setActiveTab('resources')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'resources'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
              : 'text-gray-400 hover:text-white hover:bg-[#131B2E]'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Starter Code & Specs</span>
        </button>

        <button
          onClick={() => setActiveTab('submissions')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'submissions'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
              : 'text-gray-400 hover:text-white hover:bg-[#131B2E]'
          }`}
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Peer Submissions ({MOCK_COMMUNITY_SUBMISSIONS.length})</span>
        </button>
      </div>

      {/* Main Grid: Left Column Content & Right Column Submission Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Task Brief / Resources / Peer Submissions */}
        <div className="md:col-span-7 space-y-5">
          {activeTab === 'brief' && (
            <div className="space-y-5">
              {/* Problem Overview */}
              <div className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-5 shadow-xl space-y-4">
                <h3 className="text-base font-extrabold text-white">Overview</h3>
                <p className="text-xs text-gray-300 leading-relaxed whitespace-pre-line">
                  {DAY_12_TASK.overview}
                </p>

                <h4 className="text-sm font-extrabold text-indigo-400 pt-2 border-t border-[#1F293D]">
                  Requirements Checklist
                </h4>
                <ul className="space-y-2">
                  {DAY_12_TASK.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hints Box */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>Pro-Tips for Late-Night Coders</span>
                </div>
                <ul className="list-disc list-inside text-[11px] text-amber-200/80 space-y-1">
                  {DAY_12_TASK.hints.map((hint, i) => (
                    <li key={i}>{hint}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-5">
              {/* Starter Code Snippet Box */}
              <div className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-5 shadow-xl space-y-3">
                <h3 className="text-sm font-extrabold text-white flex items-center justify-between">
                  <span>WebSocket Cursor Sync Starter</span>
                  <span className="text-[10px] text-gray-400 font-mono">React / JavaScript</span>
                </h3>
                <pre className="bg-[#0B0F19] p-4 rounded-xl font-mono text-[11px] text-emerald-400 border border-[#1F293D] overflow-x-auto">
                  {DAY_12_TASK.codeStarterSnippet}
                </pre>
              </div>

              {/* Useful External Links */}
              <div className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-5 shadow-xl space-y-3">
                <h3 className="text-sm font-extrabold text-white">Reference Documentation</h3>
                <div className="space-y-2">
                  {DAY_12_TASK.resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.url}
                      onClick={(e) => e.preventDefault()}
                      className="p-3 bg-[#0B0F19] hover:bg-[#1A2338] border border-[#1F293D] rounded-xl flex items-center justify-between text-xs font-bold text-indigo-300 transition-colors"
                    >
                      <span>{res.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-2">
                Live Submissions from College Peers (Day 12)
              </h3>
              {MOCK_COMMUNITY_SUBMISSIONS.map((sub) => (
                <div key={sub.id} className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={sub.avatar} alt={sub.studentName} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>{sub.studentName}</span>
                          <span className="text-[10px] text-orange-400 font-extrabold">🔥 {sub.streak} Days</span>
                        </div>
                        <div className="text-[10px] text-gray-400">{sub.college} • {sub.timeAgo}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 italic">"{sub.comment}"</p>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#1F293D] text-[11px]">
                    <a href={sub.githubUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-mono hover:underline flex items-center gap-1">
                      <Github className="w-3.5 h-3.5" /> GitHub Repo
                    </a>
                    <span className="text-gray-600">•</span>
                    <a href={sub.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-mono hover:underline flex items-center gap-1">
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn Post
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column (5 cols): Proof of Work Submission Form */}
        <div className="md:col-span-5">
          <div className="bg-[#131B2E] border border-[#1F293D] rounded-2xl p-5 shadow-xl space-y-4 sticky top-20">
            <div className="border-b border-[#1F293D] pb-3">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Submit Proof of Work</span>
              </h3>
              <p className="text-xs text-gray-400">
                Paste your public GitHub repository commit and LinkedIn post URL to complete Day 12.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* GitHub Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Github className="w-4 h-4 text-white" />
                    GitHub Repository / Commit URL *
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/username/day12-canvas"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="w-full glass-input px-3.5 py-2.5 rounded-xl text-xs font-mono"
                  required
                />
                {errors.github && (
                  <p className="text-[11px] text-rose-400 font-medium">{errors.github}</p>
                )}
              </div>

              {/* LinkedIn Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    LinkedIn Post URL *
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/posts/username-day12"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  className="w-full glass-input px-3.5 py-2.5 rounded-xl text-xs font-mono"
                  required
                />
                {errors.linkedin && (
                  <p className="text-[11px] text-rose-400 font-medium">{errors.linkedin}</p>
                )}
              </div>

              {/* Hashtag Helper Box */}
              <div className="p-3 rounded-xl bg-[#0B0F19] border border-[#1F293D] space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-gray-400 font-semibold">Recommended LinkedIn Hashtags</span>
                  <button
                    type="button"
                    onClick={handleCopyHashtags}
                    className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedHashtags ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <div className="text-[10px] text-gray-400 font-mono break-all">{hashtags}</div>
              </div>

              {/* Learning Notes / Reflection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-300">
                  Daily Reflection / Learnings (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="What was the trickiest part of today's WebSocket implementation?"
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  className="w-full glass-input px-3.5 py-2 rounded-xl text-xs"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Verifying Proof of Work...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Submit Proof & Claim +150 XP</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Celebration Modal */}
      <SubmissionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        dayNumber={12}
        githubUrl={githubUrl}
        linkedinUrl={linkedinUrl}
        newStreak={userState.currentStreak + 1}
      />
    </div>
  );
}
