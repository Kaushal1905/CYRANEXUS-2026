import React, { useState, useEffect } from 'react';
import { Layers, Activity, ArrowDown } from 'lucide-react';

export const ParallaxLayers = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 🌌 LAYER 0: Far Background Grid (Slow speed: 0.15x) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20 cyber-grid-bg transition-transform ease-out"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`
        }}
      />

      {/* 🔮 LAYER 1: Midground Floating Cyber Orbs & Rings (Counter speed: -0.35x + Rotation) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Orb 1 (Top Right) */}
        <div
          className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full border border-[#00f3ff]/30 bg-[#00f3ff]/5 backdrop-blur-sm shadow-[0_0_30px_rgba(0,243,255,0.2)]"
          style={{
            transform: `translateY(${-scrollY * 0.35}px) rotate(${scrollY * 0.1}deg)`
          }}
        >
          <div className="absolute inset-4 rounded-full border border-dashed border-[#00f3ff]/40 animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Floating Hexagon (Center Left) */}
        <div
          className="absolute top-[50%] left-[5%] w-48 h-48 border-2 border-[#ff0055]/30 bg-[#ff0055]/5 backdrop-blur-sm rotate-45 shadow-[0_0_30px_rgba(255,0,85,0.2)]"
          style={{
            transform: `translateY(${-scrollY * 0.45}px) rotate(${-scrollY * 0.15}deg)`
          }}
        />

        {/* Floating Ring (Bottom Right) */}
        <div
          className="absolute top-[80%] right-[15%] w-80 h-80 rounded-full border-2 border-dashed border-[#fcee0a]/30 bg-[#fcee0a]/5 shadow-[0_0_40px_rgba(252,238,10,0.15)]"
          style={{
            transform: `translateY(${-scrollY * 0.25}px) rotate(${scrollY * 0.08}deg)`
          }}
        />
      </div>

      {/* ✨ LAYER 3: Foreground Fast Particles (Fast speed: 1.4x) */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        <div
          className="w-full h-[200vh] opacity-70"
          style={{
            transform: `translateY(${-scrollY * 0.6}px)`
          }}
        >
          {/* Scattered glowing particle nodes */}
          <div className="absolute top-[100px] left-[20%] w-2 h-2 rounded-full bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]" />
          <div className="absolute top-[350px] right-[25%] w-3 h-3 rounded-full bg-[#ff0055] shadow-[0_0_12px_#ff0055]" />
          <div className="absolute top-[600px] left-[15%] w-2 h-2 rounded-full bg-[#fcee0a] shadow-[0_0_10px_#fcee0a]" />
          <div className="absolute top-[900px] right-[10%] w-3 h-3 rounded-full bg-[#00ff66] shadow-[0_0_12px_#00ff66]" />
          <div className="absolute top-[1200px] left-[30%] w-2.5 h-2.5 rounded-full bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]" />
        </div>
      </div>

      {/* 🎛️ Live Parallax Telemetry HUD Indicator (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 p-3 rounded-xl cyber-glass border border-[#00f3ff]/40 font-mono text-xs shadow-2xl">
        <div className="p-2 rounded bg-slate-900 border border-[#00f3ff]/40">
          <Layers className="w-4 h-4 text-[#00f3ff] animate-pulse" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">PARALLAX DEPTH:</span>
            <span className="font-bold text-[#00f3ff]">{Math.round(scrollY)} px</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-slate-400 mt-0.5">
            <span>BG: <strong className="text-[#00f3ff]">0.15x</strong></span>
            <span>MID: <strong className="text-[#ff0055]">-0.35x</strong></span>
            <span>FG: <strong className="text-[#fcee0a]">1.40x</strong></span>
          </div>
        </div>
      </div>
    </>
  );
};
