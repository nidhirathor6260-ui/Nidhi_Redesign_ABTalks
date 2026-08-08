export const TRACKS = [
  {
    id: 'mern',
    name: 'Fullstack MERN',
    icon: 'Layers',
    level: 'Beginner to Advanced',
    studentsCount: '5,820',
    description: 'Master MongoDB, Express, React, and Node.js by building 60 production-ready web apps.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind']
  },
  {
    id: 'ai-eng',
    name: 'AI & LLM Engineering',
    icon: 'Cpu',
    level: 'Intermediate',
    studentsCount: '3,940',
    description: 'Build RAG pipelines, AI Agents, custom fine-tunes, and OpenAI-integrated SaaS tools.',
    tags: ['Python', 'LangChain', 'OpenAI', 'Pinecone']
  },
  {
    id: 'flutter',
    name: 'Mobile Dev (Flutter)',
    icon: 'Smartphone',
    level: 'Beginner friendly',
    studentsCount: '2,150',
    description: 'Build native iOS and Android apps with Dart, Firebase, and smooth 60fps UI animations.',
    tags: ['Flutter', 'Dart', 'Firebase', 'State Mgmt']
  },
  {
    id: 'devops',
    name: 'Cloud & DevOps',
    icon: 'Cloud',
    level: 'Intermediate',
    studentsCount: '1,490',
    description: 'Containerize, orchestrate, deploy CI/CD pipelines, and manage AWS cloud infrastructure.',
    tags: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions']
  }
];

export const DAY_12_TASK = {
  dayNumber: 12,
  trackId: 'mern',
  trackName: 'Fullstack MERN',
  title: 'Build a Real-Time Collaborative Canvas App',
  subtitle: 'Implement WebSocket multi-cursor synchronization & SVG export',
  estimatedTime: '45 mins',
  difficulty: 'Intermediate',
  xpReward: 150,
  streakBonus: '+1 Day Streak Shield',
  overview: `Today, you will build a lightweight real-time collaborative canvas application where users can draw vector shapes, view live cursor positions of co-drawers, and export their artwork as SVG or PNG.

This challenge helps you understand WebSocket event broadcasting, state management for fast DOM redraws, and social proof sharing on LinkedIn.`,
  requirements: [
    'Initialize a canvas component capable of freehand drawing and rectangle shapes.',
    'Implement live cursor position broadcasting with WebSocket / Socket.io or mock client events.',
    'Add color palette picker (at least 6 curated hex colors) & line stroke thickness controls.',
    'Add an "Export SVG/PNG" action button that prompts download.',
    'Deploy live preview on Vercel / Netlify / GitHub Pages.'
  ],
  hints: [
    'Use standard HTML5 <canvas> context or SVG path rendering for smooth cross-device performance.',
    'Keep cursor throttle at ~16ms (60fps) to avoid websocket event congestion.',
    'For mobile touch screens, handle both `onTouchStart`/`onTouchMove` and `onMouseDown`/`onMouseMove`.'
  ],
  codeStarterSnippet: `// Socket.io Cursor Broadcast Example
import { useEffect, useState } from 'react';

export function useCollaborativeCanvas(roomId) {
  const [remoteCursors, setRemoteCursors] = useState({});

  useEffect(() => {
    // Listen for peer cursor movements
    const handlePeerMove = (data) => {
      setRemoteCursors((prev) => ({ ...prev, [data.userId]: data.coords }));
    };
    
    // Subscribe to socket events...
  }, [roomId]);

  return { remoteCursors };
}`,
  resources: [
    { title: 'Canvas API MDN Guide', url: '#' },
    { title: 'Figma UI Layout Spec (390px)', url: '#' },
    { title: 'Socket.io Event Emitter Docs', url: '#' }
  ]
};

export const MOCK_COMMUNITY_SUBMISSIONS = [
  {
    id: 'sub-1',
    studentName: 'Aarav Sharma',
    college: 'IIT Delhi - Class of 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    timeAgo: '14m ago',
    streak: 12,
    githubUrl: 'https://github.com/aaravsharma/day12-collab-canvas',
    linkedinUrl: 'https://linkedin.com/posts/aarav-sharma-60daysofcode-day12',
    comment: 'Finished the WebSocket throttle! Touch screen drawing works surprisingly smooth on Android Chrome.'
  },
  {
    id: 'sub-2',
    studentName: 'Priya Ananya',
    college: 'VIT Vellore - Class of 2025',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    timeAgo: '42m ago',
    streak: 12,
    githubUrl: 'https://github.com/priyaananya/abtalks-day12',
    linkedinUrl: 'https://linkedin.com/posts/priya-ananya-canvas-app',
    comment: 'Added custom neon glowing brush effects! Recruiter from Razorpay already checked my repo 🚀'
  },
  {
    id: 'sub-3',
    studentName: 'Rohan Gupta',
    college: 'SRM Institute - Class of 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    timeAgo: '1h ago',
    streak: 12,
    githubUrl: 'https://github.com/rohang/collaborative-canvas',
    linkedinUrl: 'https://linkedin.com/posts/rohan-gupta-day12',
    comment: 'Built late night after end-sem exams! Never breaking this streak.'
  }
];

export const BADGES = [
  { id: 'b1', title: 'Midnight Warrior', icon: 'Moon', desc: 'Submitted 5 tasks after 11 PM', unlocked: true },
  { id: 'b2', title: '10-Day Flame', icon: 'Flame', desc: 'Maintained a 10+ day unbroken streak', unlocked: true },
  { id: 'b3', title: 'LinkedIn Magnet', icon: 'Share2', desc: '500+ recruiter impressions on posts', unlocked: true },
  { id: 'b4', title: 'Git Veteran', icon: 'GitBranch', desc: '50 clean GitHub commits made', unlocked: false },
  { id: 'b5', title: '60-Day Titan', icon: 'Trophy', desc: 'Completed all 60 challenge days', unlocked: false }
];

export const RECRUITER_STATISTICS = {
  partnerCompanies: ['Swiggy', 'Razorpay', 'CRED', 'Flipkart', 'Zomato', 'Atlassian', 'Postman'],
  totalHires2025: '850+',
  averagePackage: '₹14.2 LPA',
  activeRecruitersOnline: 42
};
