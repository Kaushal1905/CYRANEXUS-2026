import React from 'react';
import { Mic, Globe, Cpu, Sparkles } from 'lucide-react';
import { TECHFEST_DATA } from '../data/techfestData';
import { sound } from '../utils/audioEngine';

export const KeynoteSpeakers = () => {
  return (
    <section id="speakers" className="py-20 px-4 relative z-10 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-[#00ff66] uppercase tracking-widest px-3 py-1 rounded bg-[#00ff66]/10 border border-[#00ff66]/30">
            PIONEERS & CYBERNETIC VISIONS
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mt-3">
            International <span className="text-[#00ff66]">Keynotes</span> & Exhibits
          </h2>
          <p className="font-rajdhani text-slate-400 text-lg max-w-2xl mx-auto mt-2">
            Engage with world-renowned roboticists, AI researchers, and live android demonstrations.
          </p>
        </div>

        {/* Speaker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECHFEST_DATA.speakers.map((speaker, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="p-6 rounded-xl cyber-glass border border-slate-800 hover:border-[#00ff66]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-5">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-2 py-1 rounded bg-slate-950/80 text-[#00ff66] border border-[#00ff66]/40 uppercase">
                    {speaker.tag}
                  </span>
                </div>

                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-[#00ff66] transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">{speaker.title}</p>

                <div className="mt-4 p-3 rounded bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">LECTURE TOPIC</span>
                  <p className="font-rajdhani text-sm text-slate-200 font-semibold leading-snug">
                    "{speaker.topic}"
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[#00ff66]" />
                  Convocation Hall
                </span>
                <span className="text-[#00ff66]">LIVE DEMO</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
