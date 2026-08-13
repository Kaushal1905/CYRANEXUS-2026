export const TECHFEST_DATA = {
  festivalName: "IIT Bombay Techfest 2026",
  edition: "29th Edition",
  theme: "CYBORG: The Nexus of Human & Machine",
  dates: "December 26-28, 2026",
  location: "IIT Bombay, Powai, Mumbai",
  stats: [
    { label: "Footfall", value: "175,000+", icon: "Users" },
    { label: "Prize Pool", value: "₹50,000,000+", icon: "Trophy" },
    { label: "Participating Colleges", value: "2,500+", icon: "GraduationCap" },
    { label: "International Keynotes", value: "40+", icon: "Globe" }
  ],
  
  augmentations: [
    {
      id: "neural-link",
      name: "Cortex-9 Neural Interface",
      type: "Brain-Computer Interface",
      status: "OPTIMAL (99.8% Sync)",
      power: "1.2 GW",
      description: "Direct synaptic-to-silicon neural link allowing ultra-low latency mental telemetry and remote cybernetic control.",
      stats: { latency: "0.4 ms", bandwidth: "100 TB/s", neuralLoad: "14%" },
      color: "#00f3ff",
      coordinates: { x: 50, y: 18 }
    },
    {
      id: "cyber-optics",
      name: "Ocular HUD & Spectrum Sensor",
      type: "Visual Augmentation",
      status: "ACTIVE (Infrared/UV)",
      power: "350 MW",
      description: "Quantum-dot optic sensor array capable of thermal vision, facial recognition telemetry, and micro-hologram overlay.",
      stats: { resolution: "16K Ultra-HDR", zoom: "200x Optical", spectrum: "10nm - 1000nm" },
      color: "#ff0055",
      coordinates: { x: 55, y: 14 }
    },
    {
      id: "bio-reactor",
      name: "Micro-Fusion Heart Core",
      type: "Power Plant",
      status: "STABLE (98.4% Output)",
      power: "5.8 GW",
      description: "Miniature deuterium fusion cell fueling all bio-mechanical limb actuators and cybernetic sub-systems.",
      stats: { temp: "420 K", fuelReserve: "99.2%", efficiency: "96.7%" },
      color: "#fcee0a",
      coordinates: { x: 50, y: 38 }
    },
    {
      id: "exo-spine",
      name: "Titanium Subdermal Exo-Spine",
      type: "Structural Frame",
      status: "ARMORED",
      power: "850 MW",
      description: "Flex-alloy spinal weave providing 10x muscular leverage and kinetic impact dispersion during heavy load tasks.",
      stats: { tensileStrength: "4,500 MPa", impactAbsorbed: "94%", weight: "4.2 kg" },
      color: "#00ff66",
      coordinates: { x: 50, y: 52 }
    },
    {
      id: "bionic-limb",
      name: "Hyper-Servo Hydraulic Arms",
      type: "Actuator System",
      status: "CALIBRATED",
      power: "2.1 GW",
      description: "Carbon nanotube hydraulic fibers capable of micro-precision surgical tasks or 2-ton structural lifting.",
      stats: { force: "22,000 N", responseTime: "1.1 ms", gripPrecision: "0.01 mm" },
      color: "#00f3ff",
      coordinates: { x: 26, y: 44 }
    }
  ],

  categories: [
    { id: "all", label: "All Sectors" },
    { id: "robotics", label: "Combat & Robotics" },
    { id: "ai", label: "AI & Neural Mesh" },
    { id: "biotech", label: "Bio-Cybernetics" },
    { id: "hackathon", label: "Apex Hackathons" }
  ],

  events: [
    {
      id: "robowars",
      title: "RoboWars: Cybernetic Carnage",
      category: "robotics",
      badge: "Flagship",
      prize: "₹1,500,000",
      teamSize: "1 - 6 Members",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      summary: "The ultimate 60kg and 30kg combat robot showdown in India's largest reinforced bulletproof glass arena.",
      details: "Design, engineer, and pilot custom combat cyborg mechs equipped with pneumatic flippers, spinner blades, and flamethrowers to obliterate opponent bots."
    },
    {
      id: "ai-nexus",
      title: "Neural Mesh AI Hackathon",
      category: "ai",
      badge: "Global Open",
      prize: "₹1,000,000",
      teamSize: "2 - 4 Members",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      summary: "36-hour intense hackathon creating next-gen autonomous LLM agents, brain-computer interfaces, and neural control models.",
      details: "Participants build cutting-edge deep learning models and real-time computer vision algorithms to solve real-world cyborg & medical diagnostics problems."
    },
    {
      id: "bio-mech",
      title: "Bionic Prosthetics Innovation Challenge",
      category: "biotech",
      badge: "MedTech",
      prize: "₹800,000",
      teamSize: "1 - 5 Members",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
      summary: "Design affordable, high-dexterity bio-electric prosthetic limbs controlled by electromyographic (EMG) signals.",
      details: "Focusing on human augmentation, accessibility, and neural signal processing to restore or enhance human physical capabilities."
    },
    {
      id: "cyber-defense",
      title: "Quantum Defense CTF",
      category: "hackathon",
      badge: "Cyber Security",
      prize: "₹750,000",
      teamSize: "1 - 4 Members",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      summary: "Capture The Flag competition testing quantum cryptography, reverse engineering, cybernetic network exploits, and zero-day defense.",
      details: "Engineered by top cyber-security researchers to simulate attacks on cybernetic infrastructure and critical grid systems."
    },
    {
      id: "drone-racing",
      title: "Techno-Drone FPV Grand Prix",
      category: "robotics",
      badge: "High Speed",
      prize: "₹600,000",
      teamSize: "1 - 2 Members",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      summary: "Nighttime neon neon obstacle course drone racing featuring high-speed customized FPV quadcopters at speeds exceeding 140 km/h.",
      details: "Pilots wear FPV goggles to navigate a glowing cybernetic tunnel circuit with precision acrobatics and rapid response maneuvers."
    },
    {
      id: "subdermal-lab",
      title: "Bio-Interface & Genetic Coding Expo",
      category: "biotech",
      badge: "Research Expo",
      prize: "₹500,000",
      teamSize: "1 - 4 Members",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
      summary: "Showcase groundbreaking research in bio-compatible sensors, subdermal monitors, and synthetic biology interfaces.",
      details: "Exhibition format evaluated by international scientists, bio-ethicists, and top venture capitalists."
    }
  ],

  speakers: [
    {
      name: "Dr. Sethu Vijayakumar",
      title: "Director of Edinburgh Centre for Robotics",
      topic: "The Future of Humanoid & Cyborg Synergies",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      tag: "Robotics Keynote"
    },
    {
      name: "Sophia Humanoid & Hanson Team",
      title: "Hanson Robotics",
      topic: "AI Sentience & Social Cybernetic Companions",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
      tag: "Special Demonstration"
    },
    {
      name: "Dr. Elena Rostova",
      title: "Head of Neural Prosthetics at NeuralX",
      topic: "Sub-Millisecond Synaptic Neural Interfaces",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      tag: "NeuroTech Panel"
    }
  ],

  schedule: [
    {
      day: "Day 1",
      date: "Dec 26, 2026",
      theme: "Initialization & Cyber Inception",
      items: [
        { time: "09:00 AM", title: "Grand Opening Ceremony & Cyborg HUD Unveiling", venue: "Convocation Hall" },
        { time: "11:30 AM", title: "Dr. Sethu Vijayakumar Keynote Address", venue: "Main Auditorium" },
        { time: "02:00 PM", title: "RoboWars: Qualifiers Round 1", venue: "Gymkhana Grounds Arena" },
        { time: "06:00 PM", title: "EDM Night featuring Neon Cyborg Light Show", venue: "Open Air Theatre" }
      ]
    },
    {
      day: "Day 2",
      date: "Dec 27, 2026",
      theme: "Neural Convergence & Battle Arena",
      items: [
        { time: "09:30 AM", title: "Neural Mesh AI Hackathon Final Demos", venue: "FC Kohli Center" },
        { time: "01:00 PM", title: "Sophia Humanoid Live Interaction & Q&A", venue: "Convocation Hall" },
        { time: "03:30 PM", title: "Techno-Drone FPV Night Time Finals", venue: "IIT Athletics Ground" },
        { time: "07:30 PM", title: "International Cyber-Stunt Show", venue: "SAC Grounds" }
      ]
    },
    {
      day: "Day 3",
      date: "Dec 28, 2026",
      theme: "Apex Synthesis & Grand Finale",
      items: [
        { time: "10:00 AM", title: "Bio-Mech MedTech Finals Showcase", venue: "Lecture Hall Complex" },
        { time: "02:30 PM", title: "RoboWars Grand Championship Battle", venue: "Gymkhana Grounds Arena" },
        { time: "06:00 PM", title: "Closing Ceremony & ₹5 Crore Prize Distribution", venue: "Convocation Hall" }
      ]
    }
  ]
};
