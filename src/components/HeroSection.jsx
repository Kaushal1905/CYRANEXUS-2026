import React, { useState, useEffect } from 'react';
import { Shield, Zap, ChevronRight, Activity, Cpu, Sparkles } from 'lucide-react';
import { TECHFEST_DATA } from '../data/techfestData';
import { sound } from '../utils/audioEngine';

export const HeroSection = ({ onOpenPass }) => {
  // Live Countdown to Techfest 2026 (Dec 26, 2026)
  const targetDate = new Date('2026-12-26T09:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTelemetry = () => {
    sound.playClick();
    const el = document.getElementById('telemetry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f3ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#ff0055]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
        
        {/* Top Cyborg Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f3ff]/10 border border-[#00f3ff]/40 mb-6 backdrop-blur-md">
          <Activity className="w-4 h-4 text-[#00f3ff] animate-pulse" />
          <span className="text-xs font-mono text-[#00f3ff] tracking-wider uppercase font-semibold">
            {TECHFEST_DATA.edition} • {TECHFEST_DATA.location}
          </span>
          <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
        </div>

        {/* Main Title Banner */}
        <h1 className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-4 leading-none">
          CYBORG <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-[#ffffff] to-[#ff0055] glow-cyan">2026</span>
        </h1>

        {/* Subtitle */}
        <p className="font-rajdhani text-xl sm:text-2xl md:text-3xl text-slate-300 font-semibold tracking-widest uppercase mb-8 max-w-3xl mx-auto">
          {TECHFEST_DATA.theme}
        </p>

        {/* Live Countdown Grid */}
        <div className="max-w-xl mx-auto mb-10 p-4 rounded-xl cyber-glass border border-[#00f3ff]/30 grid grid-cols-4 gap-3 text-center">
          <div className="p-2">
            <span className="font-orbitron font-black text-2xl sm:text-4xl text-[#00f3ff]">{timeLeft.days}</span>
            <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">DAYS</span>
          </div>
          <div className="p-2 border-l border-slate-800">
            <span className="font-orbitron font-black text-2xl sm:text-4xl text-[#00f3ff]">{timeLeft.hours}</span>
            <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">HOURS</span>
          </div>
          <div className="p-2 border-l border-slate-800">
            <span className="font-orbitron font-black text-2xl sm:text-4xl text-[#00f3ff]">{timeLeft.minutes}</span>
            <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">MINUTES</span>
          </div>
          <div className="p-2 border-l border-slate-800">
            <span className="font-orbitron font-black text-2xl sm:text-4xl text-[#ff0055]">{timeLeft.seconds}</span>
            <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">SECONDS</span>
          </div>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToTelemetry}
            onMouseEnter={() => sound.playHover()}
            className="cyber-btn flex items-center gap-2"
          >
            <Cpu className="w-4 h-4" />
            <span>Explore Augmentations</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => { sound.playClick(); onOpenPass(); }}
            onMouseEnter={() => sound.playHover()}
            className="cyber-btn-outline flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#00f3ff]" />
            <span>Claim Cyborg Pass</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {TECHFEST_DATA.stats.map((stat, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => sound.playHover()}
              className="p-5 rounded-lg cyber-glass text-left border border-slate-800 hover:border-[#00f3ff]/40 transition-all group"
            >
              <span className="font-orbitron font-black text-2xl sm:text-3xl text-white group-hover:text-[#00f3ff] transition-colors">
                {stat.value}
              </span>
              <p className="text-xs font-rajdhani text-slate-400 font-semibold uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
