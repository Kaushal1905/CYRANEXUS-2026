import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TermIcon, Send, Sparkles, Trash2, Cpu } from 'lucide-react';
import { TECHFEST_DATA } from '../data/techfestData';
import { sound } from '../utils/audioEngine';

export const TerminalAssistant = () => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState([
    { type: 'system', text: 'CYRA-9 [v2.4.9] Cybernetic Intelligence Interface Online.' },
    { type: 'system', text: 'Type /help or select a quick query chip below.' }
  ]);

  const logEndRef = useRef(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (cmd) => {
    sound.playClick();
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    // Append user input to logs
    const newLogs = [...logs, { type: 'user', text: `$ ${cmd}` }];

    let response = '';

    if (cleanCmd === 'clear') {
      setLogs([{ type: 'system', text: 'Terminal output cleared.' }]);
      setInput('');
      return;
    } else if (cleanCmd.includes('help') || cleanCmd === '/help') {
      response = 'Available commands:\n  /events - List flagship challenges & prize pools\n  /schedule - View festival 3-day timeline\n  /prizes - Display total prize breakdown\n  /augmentations - Inspect available cyber mods\n  /venue - IIT Bombay campus location details\n  clear - Clear terminal logs';
    } else if (cleanCmd.includes('event') || cleanCmd === '/events') {
      response = 'FLAGSHIP COMPETITIONS:\n1. RoboWars: Cybernetic Carnage (₹15,00,000)\n2. Neural Mesh AI Hackathon (₹10,00,000)\n3. Bionic Prosthetics Challenge (₹8,00,000)\n4. Quantum Defense CTF (₹7,50,000)\n5. Techno-Drone FPV Grand Prix (₹6,00,000)';
    } else if (cleanCmd.includes('schedule') || cleanCmd === '/schedule') {
      response = 'PROGRAMME OVERVIEW:\nDec 26: Opening Ceremony, Dr. Sethu Vijayakumar Keynote, RoboWars Round 1\nDec 27: AI Hackathon Demos, Sophia Humanoid Live Q&A, Drone Race Finals\nDec 28: Bio-Mech MedTech Finals, RoboWars Grand Finale, Prize Night';
    } else if (cleanCmd.includes('prize') || cleanCmd === '/prizes') {
      response = 'TOTAL PRIZE POOL: ₹50,000,000 INR across 25+ global competitions and open hackathons.';
    } else if (cleanCmd.includes('venue') || cleanCmd === '/venue') {
      response = 'VENUE LOCATION:\nIIT Bombay Campus, Powai, Mumbai, Maharashtra 400076, India.\nNearest Airport: Chhatrapati Shivaji Maharaj International Airport (BOM)\nNearest Railway: Kanjurmarg / Vikhroli station.';
    } else if (cleanCmd.includes('aug') || cleanCmd === '/augmentations') {
      response = 'CYBORG MODULES:\n- Cortex-9 BCI (Neural Link)\n- Ocular HUD (Optics)\n- Micro-Fusion Core (Heart Reactor)\n- Subdermal Exo-Spine (Titanium Alloy)';
    } else {
      response = `CYRA-9 query executed for: "${cmd}". IIT Bombay Techfest 2026 welcomes all human and cyborg participants. Use /events or /schedule for direct telemetry.`;
    }

    newLogs.push({ type: 'cyra', text: response });
    setLogs(newLogs);
    setInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section id="terminal" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-10">
          <span className="font-mono text-xs text-[#ff0055] uppercase tracking-widest px-3 py-1 rounded bg-[#ff0055]/10 border border-[#ff0055]/30">
            HOLOGRAPHIC AI INTERFACE
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mt-3">
            CYRA-9 <span className="text-[#ff0055]">Terminal</span>
          </h2>
          <p className="font-rajdhani text-slate-400 text-lg max-w-xl mx-auto mt-2">
            Ask CYRA-9 anything about event specs, schedule, venues, or prize distributions.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-xl cyber-glass border border-[#ff0055]/40 shadow-2xl overflow-hidden font-mono">
          
          {/* Header Bar */}
          <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TermIcon className="w-4 h-4 text-[#ff0055]" />
              <span className="text-xs text-slate-200 font-bold tracking-wider">cyra9@techfest.iitb.ac.in:~#</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff0055]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#fcee0a]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66]" />
            </div>
          </div>

          {/* Console Log Area */}
          <div className="p-5 h-80 overflow-y-auto space-y-3 bg-[#05070f]/90 text-xs leading-relaxed">
            {logs.map((log, idx) => (
              <div key={idx} className="space-y-1">
                {log.type === 'system' && (
                  <p className="text-[#00f3ff] font-semibold">{log.text}</p>
                )}
                {log.type === 'user' && (
                  <p className="text-white font-bold">{log.text}</p>
                )}
                {log.type === 'cyra' && (
                  <pre className="text-[#00ff66] whitespace-pre-wrap font-mono pl-4 border-l-2 border-[#00ff66]/40">
                    {log.text}
                  </pre>
                )}
              </div>
            ))}
            <div ref={logEndRef} />
          </div>

          {/* Prompt Chips */}
          <div className="p-3 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="text-slate-400">Quick Commands:</span>
            {['/events', '/schedule', '/prizes', '/augmentations', '/venue', '/help'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                onMouseEnter={() => sound.playHover()}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-[#ff0055] hover:border-[#ff0055] transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleFormSubmit} className="p-3 bg-slate-950 flex items-center gap-2 border-t border-slate-800">
            <span className="text-[#ff0055] font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command or question (e.g. /events)..."
              className="flex-1 bg-transparent text-slate-100 text-xs focus:outline-none placeholder-slate-600"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded bg-[#ff0055] text-white text-xs font-bold hover:bg-[#ff2277] transition-all flex items-center gap-1"
            >
              <Send className="w-3 h-3" />
              Send
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
