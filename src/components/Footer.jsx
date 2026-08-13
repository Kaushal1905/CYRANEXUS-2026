import React from 'react';
import { Cpu, MapPin, Mail, Phone, Globe, Shield, Heart } from 'lucide-react';
import { TECHFEST_DATA } from '../data/techfestData';
import { sound } from '../utils/audioEngine';

export const Footer = () => {
  return (
    <footer className="relative z-10 pt-16 pb-12 px-4 bg-slate-950 border-t border-slate-900 font-mono text-xs text-slate-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#00f3ff]" />
            <span className="font-orbitron font-black text-lg text-white">TECHFEST 2026</span>
          </div>
          <p className="font-rajdhani text-sm text-slate-300">
            {TECHFEST_DATA.theme}
          </p>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Asia's Largest Science and Technology Festival, hosted annually by IIT Bombay, Powai, Mumbai.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-2">
          <h4 className="font-orbitron font-bold text-slate-200 text-sm mb-3">NAVIGATION</h4>
          <ul className="space-y-2">
            <li><a href="#telemetry" onClick={() => sound.playClick()} className="hover:text-[#00f3ff]">HUD Telemetry</a></li>
            <li><a href="#competitions" onClick={() => sound.playClick()} className="hover:text-[#00f3ff]">Robotics & Competitions</a></li>
            <li><a href="#speakers" onClick={() => sound.playClick()} className="hover:text-[#00f3ff]">Keynotes & Speakers</a></li>
            <li><a href="#schedule" onClick={() => sound.playClick()} className="hover:text-[#00f3ff]">Event Schedule</a></li>
            <li><a href="#terminal" onClick={() => sound.playClick()} className="hover:text-[#ff0055]">CYRA-9 Terminal</a></li>
          </ul>
        </div>

        {/* Col 3: Venue & Contact */}
        <div className="space-y-2">
          <h4 className="font-orbitron font-bold text-slate-200 text-sm mb-3">HEADQUARTERS</h4>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#00f3ff] shrink-0 mt-0.5" />
            <span>Techfest Office, Main Building, IIT Bombay, Powai, Mumbai - 400076</span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <Mail className="w-4 h-4 text-[#00f3ff]" />
            <span>cyborg@techfest.org</span>
          </div>
        </div>

        {/* Col 4: Cyber Security Shield */}
        <div className="space-y-3 p-4 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 text-[#00ff66]">
            <Shield className="w-4 h-4" />
            <span className="font-orbitron font-bold text-xs">CYBER GUARANTEE</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-snug">
            All bio-interface data packets encrypted via 4096-bit Quantum BCI Protocol.
          </p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} IIT Bombay Techfest. All Rights Reserved. Built for Cyborg 2026.
        </p>
        <span className="text-[11px] text-slate-500 flex items-center gap-1">
          Designed for <span className="text-white font-bold">IIT Bombay Techfest</span>
        </span>
      </div>
    </footer>
  );
};
