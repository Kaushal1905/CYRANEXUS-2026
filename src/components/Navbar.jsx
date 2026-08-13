import React, { useState } from 'react';
import { Cpu, Volume2, VolumeX, Menu, X, Ticket, Terminal, Send } from 'lucide-react';
import { sound } from '../utils/audioEngine';

export const Navbar = ({ onOpenPass, onOpenSubmission }) => {
  const [isMuted, setIsMuted] = useState(sound.isMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAudio = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) sound.playClick();
  };

  const handleNavClick = (id) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-[#05070f]/80 backdrop-blur-md border-b border-[#00f3ff]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
          onMouseEnter={() => sound.playHover()}
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded bg-[#00f3ff]/10 border border-[#00f3ff]/50 group-hover:border-[#00f3ff] transition-all group-hover:box-glow-cyan">
            <Cpu className="w-6 h-6 text-[#00f3ff] animate-pulse" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#ff0055] rounded-full animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-black text-lg tracking-wider text-white">TECHFEST</span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#ff0055]/20 text-[#ff0055] border border-[#ff0055]/40">
                IIT BOMBAY
              </span>
            </div>
            <p className="text-[11px] font-rajdhani text-[#00f3ff] font-semibold tracking-widest uppercase">
              CYBORG EDITION '26
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-orbitron text-slate-300">
          <button 
            onClick={() => handleNavClick('telemetry')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#00f3ff] transition-colors hover:glow-cyan"
          >
            HUD Telemetry
          </button>
          <button 
            onClick={() => handleNavClick('competitions')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#00f3ff] transition-colors hover:glow-cyan"
          >
            Competitions
          </button>
          <button 
            onClick={() => handleNavClick('speakers')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#00f3ff] transition-colors hover:glow-cyan"
          >
            Keynotes
          </button>
          <button 
            onClick={() => handleNavClick('schedule')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#00f3ff] transition-colors hover:glow-cyan"
          >
            Schedule
          </button>
          <button 
            onClick={() => handleNavClick('terminal')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#00f3ff] transition-colors hover:glow-cyan flex items-center gap-1.5 text-xs text-[#ff0055]"
          >
            <Terminal className="w-3.5 h-3.5" />
            CYRA-9
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => sound.playHover()}
            className="p-2 rounded bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-[#00f3ff] hover:border-[#00f3ff] transition-all"
            title={isMuted ? "Unmute Sci-Fi UI Audio" : "Mute Sci-Fi UI Audio"}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-slate-500" /> : <Volume2 className="w-5 h-5 text-[#00f3ff] animate-pulse" />}
          </button>

          {/* Submission Modal Trigger */}
          <button
            onClick={() => { sound.playClick(); onOpenSubmission(); }}
            onMouseEnter={() => sound.playHover()}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-orbitron font-bold text-[#ff0055] bg-[#ff0055]/10 border border-[#ff0055]/40 rounded hover:bg-[#ff0055]/20 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            Submission Links
          </button>

          {/* Cyborg Pass CTA */}
          <button
            onClick={() => { sound.playClick(); onOpenPass(); }}
            onMouseEnter={() => sound.playHover()}
            className="cyber-btn text-xs py-2 px-4 flex items-center gap-2"
          >
            <Ticket className="w-4 h-4" />
            <span>Cyborg Pass</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-[#00f3ff]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-3 font-orbitron text-sm">
          <button 
            onClick={() => handleNavClick('telemetry')}
            className="text-left py-2 text-slate-300 hover:text-[#00f3ff]"
          >
            HUD Telemetry
          </button>
          <button 
            onClick={() => handleNavClick('competitions')}
            className="text-left py-2 text-slate-300 hover:text-[#00f3ff]"
          >
            Competitions
          </button>
          <button 
            onClick={() => handleNavClick('speakers')}
            className="text-left py-2 text-slate-300 hover:text-[#00f3ff]"
          >
            Keynotes
          </button>
          <button 
            onClick={() => handleNavClick('schedule')}
            className="text-left py-2 text-slate-300 hover:text-[#00f3ff]"
          >
            Schedule
          </button>
          <button 
            onClick={() => handleNavClick('terminal')}
            className="text-left py-2 text-[#ff0055]"
          >
            CYRA-9 Terminal
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenSubmission(); }}
            className="text-left py-2 text-xs text-[#00f3ff] flex items-center gap-2"
          >
            <Send className="w-4 h-4" /> Submission & GitHub Links
          </button>
        </div>
      )}
    </header>
  );
};
