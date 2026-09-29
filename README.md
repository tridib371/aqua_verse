<div align="center">

# 🌊 AquaVerse • Underwater World Experience

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-aqua--verse.vercel.app-00f2fe?style=for-the-badge&logo=vercel&logoColor=black)](https://aqua-verse-nine.vercel.app/)
[![GitHub license](https://img.shields.io/badge/License-MIT-38bdf8?style=for-the-badge)](LICENSE)
[![Performance](https://img.shields.io/badge/Render-60FPS_Canvas-34d399?style=for-the-badge&logo=html5&logoColor=black)](https://aqua-verse-nine.vercel.app/)
[![Platform](https://img.shields.io/badge/Platform-Vercel_Edge_CDN-0284c7?style=for-the-badge&logo=googlechrome&logoColor=white)](https://aqua-verse-nine.vercel.app/)

<p align="center">
  <b>A cinematic, scroll-driven underwater expedition into the deep abyss.</b><br>
  Engineered with high-speed canvas frame interpolation, real-time submarine depth telemetry, an atmospheric spatial audio engine, and living vector specimen chambers.
</p>

[🌐 **Explore The Live Experience**](https://aqua-verse-nine.vercel.app/) • [✨ Features](#-key-features) • [🔬 Specimen Chamber](#-marine-specimen-chamber) • [🚀 Quickstart](#-running-locally)

---

</div>

## 🌐 Live Experience

Experience the full journey live on Vercel:
> 👉 **[https://aqua-verse-nine.vercel.app/](https://aqua-verse-nine.vercel.app/)**

---

## ✨ Key Features

### 🎞️ 480-Frame Hydrodynamic Scroll Canvas
- Continuous frame-by-frame scrubbing synchronized to user scroll velocity.
- Micro-optimized with **Linear Interpolation (LERP)** rendering and pre-buffered image pipelines for buttery-smooth 60 FPS playback.
- Dynamic responsive letterboxing that preserves cinematic 16:9 ratio across mobile and ultrawide displays.

### 🧭 Submarine Depth Telemetry System
- **Real-Time Bathymetric HUD**: Displays live descent metrics from the sunlit surface ($0\text{m}$) down through the Twilight, Midnight, and Abyssal zones ($3{,}800\text{m}$).
- **Kinetic Depth Gauge**: High-contrast vertical track with directional telemetry needles that automatically detect ascent vs. descent vectors.

### 🎵 Atmospheric Oceanic Soundscape
- High-fidelity studio ambient ocean audio engine with seamless loop playback.
- Smart auto-unlock on initial interaction with tactile HUD speaker toggle controls.

### 🛡️ "Protect The Blue" Conservation Covenant
- Holographic animated ocean emblem with dual-ring orbital rotations.
- Interactive pillar commitments: Zero Single-Use Plastic, Sanctuary Defense, and Carbon Mitigation.
- Satisfying celebratory pledge confirmation feedback.

---

## 🔬 Marine Specimen Chamber

Clicking **"Explore Specimen"** on any species launches a dedicated **Submarine Biological Dossier** with species-specific vector animations, taxonomic credentials, ecological functions, and interactive performance telemetry bars:

| Creature | Classification | Authentic Animated Artwork & Behaviors |
| :--- | :--- | :--- |
| **🐠 Clownfish** | *Reef Symbiont* | Vibrant orange mantle (`#ff7a18`), custom body-clipped white stripes with black borders, fluttering fins, and playful buoyancy. |
| **🐢 Sea Turtle** | *Ancient Navigator* | Dual-tone scutes (`#15803d` / `#d97706`) with gold seams, mottled emerald flipper strokes, and realistic golden sclera eyes. |
| **🪸 Manta Ray** | *Pelagic Glider* | Midnight-navy mantle (`#1e293b`), undulating oceanic white shoulder chevrons (`#f8fafc`), and cephalic horns. |
| **🦈 Shark** | *Apex Guardian* | Countershaded steel-slate dorsal back with pure white belly, razor teeth, 5 active crimson gill slits, and predatory eyes. |
| **🪼 Jellyfish** | *Bioluminescent Drifter* | Translucent pulsing violet bell (`#d946ef`), ruby photoprotein core, rose oral arms, and glowing drifting tentacles. |

> **Scroll Isolation Built-in**: Full background scroll locking and overscroll containment prevent the page from moving while exploring specimen details.

---

## ⌨️ Interactive Controls & Shortcuts

| Input | Action |
| :--- | :--- |
| **Mouse Wheel / Touch Scroll** | Dives through the 480-frame oceanic depth layers |
| **Audio Icon (Top Right)** | Mute / Unmute ambient submarine audio |
| **Explore Specimen Buttons** | Launches creature dossier modal |
| **`←` / `→` Arrow Keys** | Cycle through creature specimens in the modal |
| **`Escape` Key** | Closes any active modal |
| **Start Exploring Button** | Initiates smooth audio dive to Depth 50m |

---

## 🛠️ Technology Stack

- **Core**: Vanilla HTML5, Modern ECMAScript (ES6+), Canvas API
- **Styling**: Modern CSS3 (Glassmorphism, Viewport Clamp, Hardware-Accelerated Transforms)
- **Deployment**: Vercel Edge Network (1-Year Immutable CDN Caching)
- **Local Dev Server**: Native Node.js HTTP Server (`server.js`) with RAM pre-caching

---

## 🚀 Running Locally

### 1. Clone the repository
```bash
git clone https://github.com/tridib371/aqua_verse.git
cd aqua_verse
```

### 2. Start the local server
```bash
node server.js
```

### 3. Open in your browser
Navigate to **`http://localhost:3000`** and begin your descent!

---

## 📂 Project Architecture

```
aqua_verse/
├── all-frames/           # 480 high-resolution cinematic video frames
├── audio.mp3             # Studio-mastered underwater ambient audio
├── index.html            # Main single-page application & interactive UI
├── server.js             # High-performance zero-dependency Node.js RAM server
├── vercel.json           # Edge CDN caching & deployment configuration
├── package.json          # Project metadata & npm scripts
└── README.md             # Project documentation & live links
```

---

<div align="center">

Crafted with 💙 by [Tridib](https://github.com/tridib371) • Preserving the beauty of Earth's oceans.

[Back to Top ↑](#-aquaverse--underwater-world-experience)

</div>
