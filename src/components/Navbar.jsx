import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Home, LayoutDashboard, Calendar, ShieldCheck, User } from 'lucide-react';

export function Navbar({ userState }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Top Header */}
      <header className="sticky top-0 z-40 bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#1F293D] px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-between px-1.5 py-1">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 text-sm">AB</span>
              </div>
            </div>
            <div>
              <span className="font-extrabold text-white text-lg tracking-tight">ABTalks</span>
              <span className="ml-1.5 px-2 py-0.5 text-[10px] font-bold bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">#60DaysOfCode</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#131B2E] p-1 rounded-xl border border-[#1F293D]">
            <Link
              to="/"
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                isActive('/')
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-[#1C273E]'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Landing Page</span>
            </Link>

            <Link
              to="/dashboard"
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                isActive('/dashboard')
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-[#1C273E]'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/day/12"
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                isActive('/day/12')
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-[#1C273E]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day 12 Task</span>
            </Link>
          </nav>

          {/* User Profile / Streak Status Pill */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-[#131B2E] px-3 py-1.5 rounded-xl border border-[#1F293D]">
              <Flame className={`w-4 h-4 ${userState.currentStreak > 0 ? 'text-orange-500 animate-pulse' : 'text-gray-500'}`} />
              <span className="font-extrabold text-sm text-white">{userState.currentStreak}</span>
              <span className="text-[11px] text-gray-400 font-medium hidden sm:inline">Days Streak</span>
            </div>

            <Link to="/dashboard" className="flex items-center gap-2 group">
              <img
                src={userState.avatar}
                alt={userState.studentName}
                className="w-8 h-8 rounded-full ring-2 ring-indigo-500/40 group-hover:ring-indigo-400 transition-all object-cover"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Fixed Navigation Bar (Optimized for 390px Viewport) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F19]/95 backdrop-blur-xl border-t border-[#1F293D] px-3 py-2">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <Link
            to="/"
            className={`flex flex-col items-center py-1 px-3 rounded-xl transition-all ${
              isActive('/') ? 'text-indigo-400 font-bold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] mt-0.5">Landing</span>
          </Link>

          <Link
            to="/dashboard"
            className={`flex flex-col items-center py-1 px-3 rounded-xl transition-all ${
              isActive('/dashboard') ? 'text-indigo-400 font-bold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-[10px] mt-0.5">Dashboard</span>
          </Link>

          <Link
            to="/day/12"
            className={`flex flex-col items-center py-1 px-3 rounded-xl transition-all relative ${
              isActive('/day/12') ? 'text-indigo-400 font-bold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <div className="relative">
              <Calendar className="w-5 h-5" />
              {!userState.todaySubmitted && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full animate-ping" />
              )}
            </div>
            <span className="text-[10px] mt-0.5">Day 12</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
