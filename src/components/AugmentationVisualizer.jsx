import React, { useState } from 'react';
import { Cpu, Eye, Zap, Shield, Activity, Radio, RefreshCw } from 'lucide-react';
import { TECHFEST_DATA } from '../data/techfestData';
import { sound } from '../utils/audioEngine';

export const AugmentationVisualizer = () => {
  const [selectedAug, setSelectedAug] = useState(TECHFEST_DATA.augmentations[0]);
  const [isScanning, setIsScanning] = useState(false);

  const handleSelectAug = (aug) => {
    sound.playScan();
    setSelectedAug(aug);
  };

  const handleRunDiagnostic = () => {
    sound.playScan();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      sound.playSuccess();
    }, 1200);
  };

  const getIcon = (id) => {
    switch (id) {
      case 'neural-link': return <Cpu className="w-5 h-5 text-[#00f3ff]" />;
      case 'cyber-optics': return <Eye className="w-5 h-5 text-[#ff0055]" />;
      case 'bio-reactor': return <Zap className="w-5 h-5 text-[#fcee0a]" />;
      case 'exo-spine': return <Shield className="w-5 h-5 text-[#00ff66]" />;
      case 'bionic-limb': return <Activity className="w-5 h-5 text-[#00f3ff]" />;
      default: return <Radio className="w-5 h-5" />;
    }
  };

  return (
    <section id="telemetry" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-[#00f3ff] uppercase tracking-widest px-3 py-1 rounded bg-[#00f3ff]/10 border border-[#00f3ff]/30">
            BIO-CYBERNETIC TELEMETRY
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl text-white mt-3">
            Cyborg Augmentation <span className="text-[#00f3ff]">HUD</span>
          </h2>
          <p className="font-rajdhani text-slate-400 text-lg max-w-2xl mx-auto mt-2">
            Click on any cybernetic node on the chassis to analyze diagnostic metrics and power distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Node Selector List (Left Column) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
              ACTIVE AUGMENTATION MODULES
            </span>
            {TECHFEST_DATA.augmentations.map((aug) => {
              const isSelected = selectedAug.id === aug.id;
              return (
                <button
                  key={aug.id}
                  onClick={() => handleSelectAug(aug)}
                  onMouseEnter={() => sound.playHover()}
                  className={`w-full text-left p-4 rounded-lg transition-all flex items-center gap-4 ${
                    isSelected 
                      ? 'bg-[#00f3ff]/15 border-2 border-[#00f3ff] box-glow-cyan' 
                      : 'cyber-glass border border-slate-800 hover:border-[#00f3ff]/40'
                  }`}
                >
                  <div className={`p-2.5 rounded bg-slate-900 border ${isSelected ? 'border-[#00f3ff]' : 'border-slate-800'}`}>
                    {getIcon(aug.id)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-orbitron font-bold text-sm text-white">{aug.name}</h4>
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 text-slate-300">
                        {aug.power}
                      </span>
                    </div>
                    <p className="text-xs font-rajdhani text-slate-400 mt-0.5">{aug.type}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Cyborg Blueprint HUD (Center Column) */}
          <div className="lg:col-span-4 relative flex items-center justify-center p-6 rounded-2xl cyber-glass border border-[#00f3ff]/30 min-h-[420px] overflow-hidden">
            
            {/* HUD Grid Overlay */}
            <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
            
            {/* Scanning Line Animation */}
            {isScanning && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent shadow-[0_0_15px_#00f3ff] animate-[bounce_1.5s_infinite]" />
            )}

            {/* Cyborg Silhouette SVG */}
            <div className="relative w-full max-w-[280px] h-[380px] flex items-center justify-center">
              <svg viewBox="0 0 200 400" className="w-full h-full text-[#00f3ff]/30 drop-shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                {/* Head */}
                <path d="M 85 20 C 85 10 115 10 115 20 L 118 45 C 118 60 82 60 82 45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                {/* Neck */}
                <rect x="94" y="58" width="12" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
                {/* Torso Chest */}
                <path d="M 65 74 L 135 74 L 125 180 L 75 180 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                {/* Spine Backbone */}
                <line x1="100" y1="74" x2="100" y2="240" stroke="#00ff66" strokeWidth="2" strokeDasharray="4 4" />
                {/* Arms */}
                <path d="M 60 78 L 35 140 L 25 210" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M 140 78 L 165 140 L 175 210" fill="none" stroke="currentColor" strokeWidth="2" />
                {/* Pelvis & Legs */}
                <path d="M 75 180 L 125 180 L 115 230 L 85 230 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 85 230 L 75 310 L 70 380" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M 115 230 L 125 310 L 130 380" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>

              {/* Hotspot Target Nodes */}
              {TECHFEST_DATA.augmentations.map((aug) => {
                const isActive = selectedAug.id === aug.id;
                return (
                  <button
                    key={aug.id}
                    onClick={() => handleSelectAug(aug)}
                    style={{ top: `${aug.coordinates.y}%`, left: `${aug.coordinates.x}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  >
                    <span 
                      className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-all ${
                        isActive ? 'bg-[#00f3ff] scale-125 shadow-[0_0_15px_#00f3ff]' : 'bg-slate-900 border border-[#00f3ff]/60 hover:scale-110'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-white" />
                      {isActive && (
                        <span className="absolute inset-0 rounded-full border border-[#00f3ff] animate-ping" />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Diagnostics Telemetry Screen (Right Column) */}
          <div className="lg:col-span-4 p-6 rounded-xl cyber-glass border border-[#00f3ff]/40 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#00f3ff] animate-pulse" />
                <span className="font-orbitron font-bold text-base text-white">TELEMETRY DECK</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/30">
                {selectedAug.status}
              </span>
            </div>

            <div>
              <h3 className="font-orbitron font-bold text-lg text-[#00f3ff]">{selectedAug.name}</h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">{selectedAug.type}</p>
              <p className="text-sm font-rajdhani text-slate-300 mt-2 leading-relaxed">
                {selectedAug.description}
              </p>
            </div>

            {/* Dynamic Telemetry Key-Values */}
            <div className="bg-slate-950/80 p-4 rounded-lg border border-slate-800 space-y-3 font-mono text-xs">
              <div className="text-[10px] text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-1">
                SYSTEM METRICS
              </div>
              {Object.entries(selectedAug.stats).map(([key, val]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-[#00f3ff] font-bold">{val}</span>
                </div>
              ))}
            </div>

            {/* Power Meter */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-slate-400">MODULE POWER OUTPUT</span>
                <span className="text-[#fcee0a] font-bold">{selectedAug.power}</span>
              </div>
              <div className="w-full h-2 rounded bg-slate-900 border border-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#00f3ff] via-[#fcee0a] to-[#ff0055] transition-all duration-500"
                  style={{ width: '88%' }}
                />
              </div>
            </div>

            {/* Diagnostic Button */}
            <button
              onClick={handleRunDiagnostic}
              disabled={isScanning}
              onMouseEnter={() => sound.playHover()}
              className="w-full py-2.5 rounded font-orbitron font-bold text-xs uppercase tracking-wider text-white bg-[#00f3ff]/20 border border-[#00f3ff] hover:bg-[#00f3ff]/30 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 text-[#00f3ff] ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? 'DIAGNOSTIC IN PROGRESS...' : 'RUN MODULE DIAGNOSTIC'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
