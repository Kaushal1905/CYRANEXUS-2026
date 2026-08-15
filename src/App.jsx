import React, { useState } from 'react';
import { ThreeCyborgScene } from './components/ThreeCyborgScene';
import { ParallaxLayers } from './components/ParallaxLayers';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AugmentationVisualizer } from './components/AugmentationVisualizer';
import { EventsMatrix } from './components/EventsMatrix';
import { KeynoteSpeakers } from './components/KeynoteSpeakers';
import { ScheduleTimeline } from './components/ScheduleTimeline';
import { TerminalAssistant } from './components/TerminalAssistant';
import { PassGenerator } from './components/PassGenerator';
import { SubmissionHelper } from './components/SubmissionHelper';
import { Footer } from './components/Footer';

export function App() {
  const [isPassOpen, setIsPassOpen] = useState(false);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-100 selection:bg-[#00f3ff] selection:text-black overflow-x-hidden">
      
      {/* Scanline CRT overlay */}
      <div className="scanline-overlay" />
      
      {/* Interactive 3D WebGL Three.js Cyber Core & Scroll Animations */}
      <ThreeCyborgScene />

      {/* Task 3 Multi-Layered Parallax Scrolling Layers (Far BG, Midground Orbs, Fast FG Particles) */}
      <ParallaxLayers />

      {/* Main Navigation Bar */}
      <Navbar 
        onOpenPass={() => setIsPassOpen(true)}
        onOpenSubmission={() => setIsSubmissionOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12 pointer-events-auto">
        <HeroSection 
          onOpenPass={() => setIsPassOpen(true)} 
        />
        
        <AugmentationVisualizer />
        
        <EventsMatrix />
        
        <KeynoteSpeakers />
        
        <ScheduleTimeline />
        
        <TerminalAssistant />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cyborg Pass Generator Modal */}
      <PassGenerator 
        isOpen={isPassOpen}
        onClose={() => setIsPassOpen(false)}
      />

      {/* Submission & GitHub Link Helper Modal */}
      <SubmissionHelper 
        isOpen={isSubmissionOpen}
        onClose={() => setIsSubmissionOpen(false)}
      />

    </div>
  );
}

export default App;
