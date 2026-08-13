import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Download, CheckCircle2, QrCode, Shield, Cpu } from 'lucide-react';
import { sound } from '../utils/audioEngine';

export const PassGenerator = ({ isOpen, onClose }) => {
  const [name, setName] = useState('Alex Mercer');
  const [role, setRole] = useState('Neural Architect');
  const [institution, setInstitution] = useState('IIT Bombay');
  const [passTier, setPassTier] = useState('VIP Augmentee');
  const [passSerial, setPassSerial] = useState('IITB-CY-88219');
  const [isGenerated, setIsGenerated] = useState(true);

  const canvasRef = useRef(null);

  // Generate QR Code on Canvas
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 100;
    canvas.width = size;
    canvas.height = size;

    // Draw dark background
    ctx.fillStyle = '#05070f';
    ctx.fillRect(0, 0, size, size);

    // Draw stylized QR grid
    ctx.fillStyle = '#00f3ff';
    const gridSize = 10;
    const cellSize = size / gridSize;

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        // Draw corner finders or random noise for QR pattern
        if ((r < 3 && c < 3) || (r < 3 && c > 6) || (r > 6 && c < 3)) {
          ctx.fillRect(c * cellSize + 1, r * cellSize + 1, cellSize - 2, cellSize - 2);
        } else if (Math.sin(r * 5 + c * 3 + passSerial.length) > 0) {
          ctx.fillRect(c * cellSize + 1, r * cellSize + 1, cellSize - 2, cellSize - 2);
        }
      }
    }
  }, [isOpen, name, role, passTier, passSerial]);

  const handleGenerate = (e) => {
    e.preventDefault();
    sound.playSuccess();
    const randomHash = 'IITB-CY-' + Math.floor(10000 + Math.random() * 90000);
    setPassSerial(randomHash);
    setIsGenerated(true);
  };

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl cyber-glass rounded-2xl p-6 sm:p-8 border border-[#00f3ff]/60 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => { sound.playClick(); onClose(); }}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="font-mono text-xs text-[#00f3ff] uppercase tracking-widest px-3 py-1 rounded bg-[#00f3ff]/10 border border-[#00f3ff]/30">
            DIGITAL CREDENTIAL GENERATOR
          </span>
          <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white mt-2">
            Claim Techfest <span className="text-[#00f3ff]">Cyborg Pass</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Form Inputs (Left Column) */}
          <form onSubmit={handleGenerate} className="md:col-span-5 space-y-4 font-mono text-xs">
            <div>
              <label className="text-slate-300 block mb-1">PARTICIPANT NAME</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:border-[#00f3ff] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1">CYBER DESIGNATION</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:border-[#00f3ff] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1">INSTITUTION / COMPANY</label>
              <input
                type="text"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                required
                className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:border-[#00f3ff] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1">ACCESS TIER</label>
              <select
                value={passTier}
                onChange={(e) => setPassTier(e.target.value)}
                className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:border-[#00f3ff] focus:outline-none"
              >
                <option value="VIP Augmentee">VIP Augmentee (All Arenas)</option>
                <option value="Competitor Pilot">Competitor Pilot (Arena Access)</option>
                <option value="Research Delegate">Research Delegate (Keynotes)</option>
                <option value="General Visitor">General Visitor</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full cyber-btn py-3 text-xs mt-2 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Update Cyber Badge</span>
            </button>
          </form>

          {/* Rendered Holographic Pass (Right Column) */}
          <div className="md:col-span-7 flex flex-col items-center">
            
            {/* Ticket Card Container */}
            <div className="w-full max-w-sm rounded-2xl p-6 bg-gradient-to-br from-[#0c1020] via-[#05070f] to-[#1a0820] border-2 border-[#00f3ff] shadow-[0_0_30px_rgba(0,243,255,0.3)] relative overflow-hidden text-left">
              
              {/* Card Holographic Watermark */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00f3ff]/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Header */}
              <div className="flex justify-between items-start border-b border-slate-800 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[#00f3ff]">
                    <Cpu className="w-4 h-4 animate-pulse" />
                    <span className="font-orbitron font-black text-sm text-white tracking-widest">IIT BOMBAY</span>
                  </div>
                  <p className="font-rajdhani text-[11px] text-[#ff0055] font-bold tracking-widest">
                    TECHFEST 2026 • CYBORG PASS
                  </p>
                </div>

                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40 uppercase">
                  VERIFIED
                </span>
              </div>

              {/* Participant Details */}
              <div className="space-y-3 font-mono">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">AUGMENTEE NAME</span>
                  <p className="font-orbitron font-black text-lg text-white truncate">{name}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">ROLE</span>
                    <p className="font-bold text-[#00f3ff] truncate">{role}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">INSTITUTION</span>
                    <p className="font-bold text-slate-200 truncate">{institution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">ACCESS TIER</span>
                    <p className="font-bold text-[#fcee0a]">{passTier}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">PASS HASH</span>
                    <p className="font-bold text-slate-300">{passSerial}</p>
                  </div>
                </div>
              </div>

              {/* Footer with QR Code */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block">DATES: DEC 26-28, 2026</span>
                  <span className="text-[9px] font-mono text-[#00f3ff] block">VENUE: IIT BOMBAY POWAI</span>
                </div>

                <div className="p-1 rounded bg-slate-900 border border-[#00f3ff]/40">
                  <canvas ref={canvasRef} className="w-16 h-16 rounded" />
                </div>
              </div>

            </div>

            {/* Print Action */}
            <button
              onClick={handlePrint}
              onMouseEnter={() => sound.playHover()}
              className="mt-6 px-6 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-[#00f3ff] hover:border-[#00f3ff] transition-all font-orbitron text-xs font-bold flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download / Print Cyborg Pass</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
