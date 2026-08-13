# 🦾 IIT Bombay Techfest 2026 - CYBORG: Nexus of Human & Machine

> Official Cyborg-Themed Responsive Landing Page and Interactive Application for **IIT Bombay Techfest** (Asia's Largest Science & Technology Festival).

![Cyborg Landing Page Banner](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Key Features

### 1. 🌌 Interactive Canvas Cyber Neural Mesh
- Custom **HTML5 2D Canvas** rendering glowing particle nodes, dynamic inter-connecting web lines, and cursor gravitational pull effects.
- High-performance, 60 FPS background animation.

### 2. 🦾 Bio-Cybernetic Telemetry & Augmentation HUD
- Interactive **Silhouette Blueprint HUD** with hotspot targets for:
  - **Cortex-9 Neural Interface** (Brain-Computer Interface)
  - **Ocular HUD Sensor** (Optic Telemetry & Spectrum Vision)
  - **Micro-Fusion Heart Core** (Deuterium Reactor Cell)
  - **Titanium Exo-Spine** (Structural Flex-Alloy Frame)
  - **Hyper-Servo Hydraulic Arms** (Hydraulic Actuators)
- Live metrics display: Latency, Bandwidth, Tensile Strength, Power Output, and active module diagnostics simulator.

### 3. ⚔️ Flagship Competition & Event Matrix
- Search & sector filtering across:
  - **RoboWars: Cybernetic Carnage** (₹15,00,000 Prize)
  - **Neural Mesh AI Hackathon** (₹10,00,000 Prize)
  - **Bionic Prosthetics Innovation Challenge** (₹8,00,000 Prize)
  - **Quantum Defense CTF** (₹7,50,000 Prize)
  - **Techno-Drone FPV Grand Prix** (₹6,00,000 Prize)
- Interactive event modal specifications and instant registration toggles.

### 4. 🎛️ Zero-Dependency Web Audio API Sound Engine
- Custom-synthesized sci-fi audio effects for UI clicks, hover blips, telemetry sweeps, and event success chimes built directly with the **Web Audio API**.
- Mute/Unmute audio controls integrated into the top navigation.

### 5. 🤖 CYRA-9 Holographic AI Terminal
- Sci-fi interactive console answering quick queries (`/events`, `/schedule`, `/prizes`, `/augmentations`, `/venue`, `/help`).

### 6. 🎟️ Custom Cyborg Digital Pass & Badge Generator
- Real-time pass generator where participants can enter their Name, Designation, Institution, and Access Tier.
- Renders an official **IIT Bombay Techfest Cyborg Pass** complete with a custom HTML5 QR code, holographic foil styling, unique pass hash, and print/download button.

### 7. 📤 Submission & GitHub Link Modal
- Integrated helper displaying repository links, local git setup verification, and Google Drive video submission guidelines with viewer access checks.

---

## 🚀 Quick Start & Installation

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **NPM**: v9.0.0 or higher

### Steps to Run Locally

```bash
# 1. Clone or navigate to the repository
cd "d:/IIT Bombay Techfest"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# Local URL: http://localhost:3000
```

### Production Build

```bash
# Build for production distribution
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Architecture

```
IIT Bombay Techfest/
├── index.html                  # Main HTML entry with Google Fonts & SEO tags
├── package.json                # Project manifest & dependencies
├── vite.config.js              # Vite bundler configuration
├── README.md                   # Complete repository documentation
└── src/
    ├── main.jsx                # React root renderer
    ├── App.jsx                 # Main application layout assembly
    ├── index.css               # Design system, scanlines, glow keyframes, cyber glass
    ├── data/
    │   └── techfestData.js     # Festival data, augmentations, competitions, schedule
    ├── utils/
    │   └── audioEngine.js      # Web Audio API sci-fi synthesizer engine
    └── components/
        ├── Navbar.jsx          # Glassmorphic navbar with sound toggle & CTAs
        ├── HeroSection.jsx     # Glitch title, countdown clock, stats counter
        ├── CanvasCyborgCore.jsx# Interactive HTML5 Canvas background
        ├── AugmentationVisualizer.jsx # Telemetry blueprint with node targets
        ├── EventsMatrix.jsx    # Filterable competitions grid & detail modals
        ├── KeynoteSpeakers.jsx # International speakers & robot exhibits
        ├── ScheduleTimeline.jsx# Day 1 / 2 / 3 interactive timeline
        ├── TerminalAssistant.jsx# CYRA-9 interactive CLI chatbot
        ├── PassGenerator.jsx   # Custom Cyborg badge & canvas QR code creator
        ├── SubmissionHelper.jsx# GitHub & Google Drive submission links drawer
        └── Footer.jsx          # IIT Bombay campus venue & credits
```

---

## 📹 Video Demo & GitHub Submission Info

- **GitHub Repository Link**: [Submit GitHub Link Here]
- **Google Drive Demo Recording Link**: [Submit Google Drive Link Here] *(Viewer Access Enabled)*

---

*Built with passion for IIT Bombay Techfest 2026.*
