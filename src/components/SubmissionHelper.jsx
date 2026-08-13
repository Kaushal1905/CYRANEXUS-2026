import React, { useState } from 'react';
import { X, Github, Video, Copy, Check, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
import { sound } from '../utils/audioEngine';

export const SubmissionHelper = ({ isOpen, onClose }) => {
  const [githubUrl, setGithubUrl] = useState('https://github.com/your-username/iit-bombay-techfest-cyborg');
  const [driveUrl, setDriveUrl] = useState('https://drive.google.com/file/d/your-demo-recording-id/view?usp=sharing');
  const [copiedGithub, setCopiedGithub] = useState(false);
  const [copiedDrive, setCopiedDrive] = useState(false);

  const copyToClipboard = (text, setCopied) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl cyber-glass-magenta rounded-2xl p-6 sm:p-8 border border-[#ff0055]/60">
        
        {/* Close Button */}
        <button
          onClick={() => { sound.playClick(); onClose(); }}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <span className="font-mono text-xs text-[#ff0055] uppercase tracking-widest px-3 py-1 rounded bg-[#ff0055]/10 border border-[#ff0055]/30">
            OFFICIAL ENTRY DECK
          </span>
          <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white mt-2">
            IIT Bombay Techfest <span className="text-[#ff0055]">Submission</span>
          </h3>
          <p className="font-rajdhani text-slate-300 text-sm mt-1">
            Ensure viewer access is enabled for your Google Drive recording link before submitting.
          </p>
        </div>

        {/* Links Fields */}
        <div className="space-y-4 font-mono text-xs">
          
          {/* GitHub Repository */}
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-300 font-bold flex items-center gap-2">
                <Github className="w-4 h-4 text-[#00f3ff]" />
                GitHub Repository Link
              </span>
              <span className="text-[10px] text-[#00ff66] uppercase">PUBLIC REPO</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="flex-1 bg-slate-900 px-3 py-2 rounded border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-[#00f3ff]"
              />
              <button
                onClick={() => copyToClipboard(githubUrl, setCopiedGithub)}
                className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all"
                title="Copy GitHub Link"
              >
                {copiedGithub ? <Check className="w-4 h-4 text-[#00ff66]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Google Drive Demo Link */}
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-300 font-bold flex items-center gap-2">
                <Video className="w-4 h-4 text-[#ff0055]" />
                Google Drive Demo Recording Link
              </span>
              <span className="text-[10px] text-[#fcee0a] uppercase flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#fcee0a]" />
                Viewer Access Enabled
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={driveUrl}
                onChange={(e) => setDriveUrl(e.target.value)}
                className="flex-1 bg-slate-900 px-3 py-2 rounded border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-[#ff0055]"
              />
              <button
                onClick={() => copyToClipboard(driveUrl, setCopiedDrive)}
                className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all"
                title="Copy Google Drive Link"
              >
                {copiedDrive ? <Check className="w-4 h-4 text-[#00ff66]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Verification Checklist */}
        <div className="mt-6 p-4 rounded-lg bg-[#ff0055]/10 border border-[#ff0055]/30 space-y-2 text-xs font-mono">
          <span className="text-[#ff0055] font-bold block flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" /> SUBMISSION CHECKLIST
          </span>
          <div className="text-slate-300 space-y-1 pl-5 list-disc">
            <p>✓ GitHub repository contains complete source code & package dependencies</p>
            <p>✓ Demo video uploaded to Google Drive with "Anyone with link can view" permission</p>
            <p>✓ Responsive Cyborg theme UI validated across mobile & desktop viewports</p>
          </div>
        </div>

      </div>
    </div>
  );
};
