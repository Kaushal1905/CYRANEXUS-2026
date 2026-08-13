import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { TECHFEST_DATA } from '../data/techfestData';
import { sound } from '../utils/audioEngine';

export const ScheduleTimeline = () => {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const currentSchedule = TECHFEST_DATA.schedule[activeDayIdx];

  return (
    <section id="schedule" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-[#fcee0a] uppercase tracking-widest px-3 py-1 rounded bg-[#fcee0a]/10 border border-[#fcee0a]/30">
            FESTIVAL PROGRAMME
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mt-3">
            Schedule <span className="text-[#fcee0a]">Timeline</span>
          </h2>
          <p className="font-rajdhani text-slate-400 text-lg max-w-xl mx-auto mt-2">
            Explore 3 days of non-stop cybernetic battles, keynote lectures, hackathons, and neon laser shows.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {TECHFEST_DATA.schedule.map((dayData, idx) => {
            const isActive = activeDayIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => { sound.playClick(); setActiveDayIdx(idx); }}
                onMouseEnter={() => sound.playHover()}
                className={`px-6 py-3 rounded-xl font-orbitron text-xs font-bold transition-all text-center border ${
                  isActive
                    ? 'bg-[#fcee0a] text-slate-950 border-[#fcee0a] shadow-[0_0_20px_rgba(252,238,10,0.5)]'
                    : 'cyber-glass text-slate-300 border-slate-800 hover:border-[#fcee0a]/40'
                }`}
              >
                <span className="block text-sm">{dayData.day}</span>
                <span className="text-[10px] font-mono opacity-80">{dayData.date}</span>
              </button>
            );
          })}
        </div>

        {/* Day Theme Banner */}
        <div className="mb-8 p-4 rounded-xl cyber-glass border border-[#fcee0a]/30 text-center">
          <span className="text-xs font-mono text-[#fcee0a] uppercase tracking-widest">DAY THEME:</span>
          <h4 className="font-orbitron font-bold text-lg text-white mt-1">{currentSchedule.theme}</h4>
        </div>

        {/* Timeline Items */}
        <div className="space-y-4 relative before:absolute before:left-4 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#fcee0a]/30">
          {currentSchedule.items.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-xl cyber-glass border border-slate-800 hover:border-[#fcee0a]/50 transition-all gap-4 group"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-[#fcee0a] text-[#fcee0a] shrink-0 font-mono text-xs font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-base text-white group-hover:text-[#fcee0a] transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs font-mono text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#fcee0a]" />
                    <span>{item.venue}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-[#fcee0a]">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
