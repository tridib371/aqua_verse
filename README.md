# 🌊 AquaVerse – Underwater World Experience

A high-performance, cinematic underwater web experience built with smooth frame-by-frame canvas scrubbing, an ambient studio audio engine, real-time submarine depth telemetry, and interactive biological species dossiers.

## ✨ Features
- **480-Frame Deep Sea Journey**: High-resolution synchronized canvas rendering powered by continuous scroll interpolation and high-performance LERP smoothing.
- **Dynamic Submarine Telemetry**: Real-time depth gauge with directional arrows (`▲` on ascending, `▼` on descending) and submarine HUD meter capsule.
- **Interactive Marine Explorers**:
  - Direct typographic display with bioluminescent SVG creature icons.
  - Interactive Specimen Dossier chamber with living, species-specific animations:
    - **Clownfish**: Animated swimming movement with fluttering fins and swaying sea anemones.
    - **Sea Turtle**: Synchronized flipper paddling motion, mottled scutes, and drifting kelp.
    - **Manta Ray**: Undulating 3D pelagic wing-flaps, cephalic horns, and white oceanic shoulder chevrons.
    - **Shark**: Hydrodynamic apex patrol with caudal fin propulsion, predator eyes, and crimson gill slits.
    - **Jellyfish**: Rhythmic bell propulsion expansion/contraction with glowing bioluminescent tentacles.
  - Comprehensive biological specs: taxonomy, habitat depth, dimensions, feeding habits, lifespan, unique adaptations, ecological impact, and performance telemetry bars.
- **Atmospheric Studio Audio Engine**: Pre-cached ambient ocean audio with mute/unmute control.
- **Ultra-Fast RAM Server**: Native Node.js HTTP server pre-caching frames and media directly into memory with zero-latency delivery and `no-cache` HTML headers.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)

### Installation & Launch
```bash
# Clone the repository
git clone https://github.com/tridib371/aqua_verse.git
cd aqua_verse

# Start the high-performance local server
node server.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
