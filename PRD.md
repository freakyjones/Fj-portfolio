# Product Requirements Document (PRD): Intelligence Dashboard

## 1. Product Vision & Positioning
- **Product Name:** Intelligence Dashboard
- **Concept:** A brutalist, terminal-themed developer portfolio framed as a high-density "Telemetry Product."
- **Mission:** Convert technical recruiters, engineering managers, and CTOs within a strict **30-second window** by presenting high-signal, zero-noise data.
- **Vibe & Aesthetic:** Brutalist, CLI-inspired, monospace typography, raw data streams, system monitoring dashboards. No fluff, no generic prose.

## 2. Target Audience & The Problem
- **Target Users:** Technical Recruiters, Engineering Managers, CTOs.
- **The Problem:** The target audience spends < 30 seconds scanning a profile. Traditional portfolios are weighed down by slow animations, excessive prose, and buried technical signals. 
- **The Solution:** A telemetry dashboard that instantly streams verifiable facts (skills, GitHub stats, project impact) in a highly scannable, data-dense format, treating the candidate's career as a monitored system.

## 3. Core User Stories (The 30-Second Conversion Funnel)
- **Time-to-Value (0-5s) - System Boot:** 
  *As a recruiter, I want to immediately see the developer's core stack and availability status upon loading the page, so I instantly know if they match my open requisition.*
- **Parsing Skills (5-15s) - Telemetry Scan:** 
  *As an engineering manager, I want to view a quantifiable "Telemetry Matrix" of skills rather than a basic list, so I can rapidly assess technical depth.*
- **Viewing GitHub Data (15-25s) - Live Diagnostics:** 
  *As a technical reviewer, I want to see live or simulated GitHub telemetry to verify active coding habits and real-world execution.*
- **Action/Conversion (25-30s) - Executing Commands:** 
  *As a recruiter, I want a frictionless, obvious way to execute a "Contact" or "Download Resume" command directly from the interface before my attention wanes.*

## 4. Key Features & Technical Architecture

### 12-Column CSS Grid System (Tactical Layouts)
The application eschews standard scrolling web designs for a dense, HUD-style dashboard layout driven by **Tailwind CSS v4**.
*   **Grid Blueprint:** The primary UI uses a responsive 12-column grid.
*   **Wireframe Panes:** A reusable structural primitive (`<WireframePane>`) creates a modular, asymmetric, widget-based interface reminiscent of complex military or avionics software.

### 'Engine Manifests' Data Structure
Traditional portfolio "case studies" are replaced by an industrial **Engine Manifests** data structure, reframing web projects as deployed operational systems.
*   **Engineered Properties:** Uses rigid properties (`intent`, `performance`, `ingestionSpec`, `infrastructure`) instead of generic marketing copy.
*   **Dynamic Filtering:** Framer Motion smoothly handles transitions between project classifications (e.g., `--frontend` vs `--fullstack`).

### Framer Motion Kinetic Typography
Animation is deeply integrated to emulate hardware boot sequences and data decryption processes.
*   **Decryption Effect:** The `<KineticDecryptionText>` component cycles through a randomized alphanumeric string before resolving to the actual text string.
*   **Hardware Emulation:** Typographic components use custom CSS classes like `.bloom` (phosphor glow) and `.aberration` (chromatic color-splitting).

### Pseudo-Backend Visitor Telemetry Module
*   **Node Detection:** A simulated real-time backend monitoring system streams mock incoming user connections (`[+] NODE DETECTED...`).
*   **SITREP Logging:** A secondary log pairs with this module, logging system operational history.

## 5. Future Roadmap
- **Phase 2 (Interactive CLI):** Fully functional interactive terminal allowing recruiters to type advanced commands (`cat resume.pdf`, `npm start hire`).
- **Phase 3 (Live Analytics):** Integration with GitHub API and WakaTime to replace mock data with live stats.
- **Phase 4 (Easter Eggs):** Hidden directories and Konami code triggers for deep technical dives.
