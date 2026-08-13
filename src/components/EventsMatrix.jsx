import React, { useState } from 'react';
import { Trophy, Users, Search, ArrowUpRight, X, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { TECHFEST_DATA } from '../data/techfestData';
import { sound } from '../utils/audioEngine';

export const EventsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalEvent, setActiveModalEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState({});

  const filteredEvents = TECHFEST_DATA.events.filter((event) => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenModal = (event) => {
    sound.playClick();
    setActiveModalEvent(event);
  };

  const handleRegister = (eventId) => {
    sound.playSuccess();
    setRegisteredEvents((prev) => ({ ...prev, [eventId]: true }));
  };

  return (
    <section id="competitions" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-[#ff0055] uppercase tracking-widest px-3 py-1 rounded bg-[#ff0055]/10 border border-[#ff0055]/30">
            COMPETITION MATRIX
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mt-3">
            Flagship <span className="text-[#ff0055]">Arena</span> Challenges
          </h2>
          <p className="font-rajdhani text-slate-400 text-lg max-w-2xl mx-auto mt-2">
            Compete for ₹50,000,000+ in prizes across international robotics, AI, bio-cybernetics, and quantum security arenas.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {TECHFEST_DATA.categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => { sound.playClick(); setSelectedCategory(cat.id); }}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-4 py-2 rounded-lg font-orbitron text-xs font-semibold tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#ff0055] text-white box-glow-magenta'
                      : 'cyber-glass text-slate-300 border border-slate-800 hover:border-[#ff0055]/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search competitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-sm font-mono focus:outline-none focus:border-[#ff0055] transition-all"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const isReg = registeredEvents[event.id];
            return (
              <div
                key={event.id}
                onMouseEnter={() => sound.playHover()}
                className="group rounded-xl cyber-glass border border-slate-800 hover:border-[#ff0055]/60 transition-all flex flex-col overflow-hidden"
              >
                {/* Event Image Banner */}
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090c19] via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 right-3 font-mono text-[10px] font-bold px-2 py-1 rounded bg-[#ff0055]/90 text-white uppercase tracking-wider shadow-lg">
                    {event.badge}
                  </span>
                </div>

                {/* Event Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-[#ff0055] transition-colors">
                      {event.title}
                    </h3>
                    <p className="font-rajdhani text-slate-300 text-sm mt-2 leading-relaxed line-clamp-2">
                      {event.summary}
                    </p>
                  </div>

                  {/* Prize & Team Info */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-[#fcee0a] font-bold">
                      <Trophy className="w-4 h-4" />
                      <span>{event.prize}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Users className="w-3.5 h-3.5" />
                      <span>{event.teamSize}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => handleOpenModal(event)}
                      className="flex-1 py-2 rounded bg-slate-900 border border-slate-700 text-slate-200 text-xs font-orbitron font-bold hover:border-[#ff0055] hover:text-[#ff0055] transition-all"
                    >
                      View Specs
                    </button>

                    <button
                      onClick={() => handleRegister(event.id)}
                      className={`px-4 py-2 rounded text-xs font-orbitron font-bold transition-all flex items-center gap-1.5 ${
                        isReg
                          ? 'bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40'
                          : 'bg-[#ff0055] text-white hover:bg-[#ff2277]'
                      }`}
                    >
                      {isReg ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Registered
                        </>
                      ) : (
                        'Register'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Event Details Modal */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl cyber-glass-magenta rounded-2xl p-6 border border-[#ff0055]/60 overflow-hidden">
            <button
              onClick={() => { sound.playClick(); setActiveModalEvent(null); }}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs text-[#ff0055] uppercase tracking-widest">
              CHALLENGE SPECIFICATION
            </span>
            <h3 className="font-orbitron font-black text-2xl text-white mt-1">
              {activeModalEvent.title}
            </h3>

            <p className="font-rajdhani text-slate-300 text-base mt-4 leading-relaxed">
              {activeModalEvent.details}
            </p>

            <div className="my-6 grid grid-cols-2 gap-3 p-4 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs">
              <div>
                <span className="text-slate-400 block">PRIZE POOL</span>
                <span className="text-[#fcee0a] font-bold text-base">{activeModalEvent.prize}</span>
              </div>
              <div>
                <span className="text-slate-400 block">TEAM REQUIREMENT</span>
                <span className="text-white font-bold text-base">{activeModalEvent.teamSize}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { handleRegister(activeModalEvent.id); setActiveModalEvent(null); }}
                className="w-full cyber-btn-magenta py-3 flex items-center justify-center gap-2 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>CONFIRM REGISTRATION</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
