# System Components & Architecture Guide
**Project**: Arshad Ahamed — Backend & AI Engineer Portfolio  
**Author**: Arshad Ahamed  
**Stack**: React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion  
**Repository**: [github.com/arshad-2311/Portfolio](https://github.com/arshad-2311/Portfolio)

This document provides a comprehensive technical blueprint of every component, data model, interactive sandbox, and styling pattern in the portfolio. It is designed for future developers and AI assistants to quickly understand and modify the codebase without breaking design integrity or type safety.

---

## 📂 1. Directory Structure

```
c:\Users\arsha\Downloads\Arshad\
├── docs/
│   └── COMPONENTS.md               # This comprehensive component guide
├── src/
│   ├── components/
│   │   ├── about/
│   │   │   └── AboutSection.tsx     # 07 / ABOUT: Bio, education (DG Vaishnav College), competencies
│   │   ├── case-study/
│   │   │   └── ProjectDetailView.tsx # Deep-dive case study page (routes: #work/:id)
│   │   ├── contact/
│   │   │   └── ContactSection.tsx   # 08 / GET IN TOUCH: Form with WhatsApp (+91 8667760793) & Email redirection
│   │   ├── engineering/
│   │   │   ├── AIApplied.tsx        # 05 / PRACTICAL AI: Vision, Structured LLMs, Audio paradigms
│   │   │   ├── BackendSystems.tsx   # 04 / ARCHITECTURE: 6-tier layered backend inspector
│   │   │   └── HowIBuild.tsx        # 03 / METHODOLOGY: 6-step engineering process
│   │   ├── hero/
│   │   │   ├── Hero.tsx             # Hero section with typography and CTA buttons
│   │   │   └── HeroSystemVisual.tsx # Responsive HTML5 Canvas data-trace engine
│   │   ├── icons/
│   │   │   └── Icons.tsx            # Custom SVGs (GithubIcon, WhatsAppIcon, LinkedinIcon)
│   │   ├── intro/
│   │   │   └── EditorialIntro.tsx   # 01 / APPROACH: Engineering philosophy
│   │   ├── layout/
│   │   │   ├── CustomCursor.tsx     # Desktop custom cursor with hover label states
│   │   │   ├── Footer.tsx           # Minimalist footer with direct communication channels
│   │   │   ├── Navbar.tsx           # Sticky header with active scroll spy and mobile drawer
│   │   │   └── ProjectIndexNav.tsx  # Persistent desktop right-side project quick navigator
│   │   ├── projects/
│   │   │   ├── AppointmentAPIShowcase.tsx # Project 05: FastAPI Sandbox & response inspector
│   │   │   ├── AttendanceShowcase.tsx     # Project 03: Biometric Euclidean distance simulator
│   │   │   ├── BlackOrchidShowcase.tsx    # Project 02: Next.js + Prisma + WebSocket simulator
│   │   │   ├── CompanionAIShowcase.tsx    # Project 04: Dark audio waveform & cadence inspector
│   │   │   ├── MedLensHeroShowcase.tsx    # Project 01 (Hero): Multimodal OCR/TTS sandbox
│   │   │   └── SelectedWork.tsx           # 02 / SELECTED WORK: Showcase master container
│   │   └── stack/
│   │       └── TechMatrix.tsx       # 06 / THE STACK: 5-pillar technical matrix
│   ├── data/
│   │   ├── githubData.ts            # GitHub profile stats and URL configuration
│   │   ├── projectsData.ts          # 5 verified projects data & FastAPI mock endpoints
│   │   └── stackData.ts             # 5 technical matrix categories and verified markers
│   ├── styles/
│   │   └── index.css                # Global CSS variables, fonts, tech-grid-bg, scrollbar
│   ├── types/
│   │   └── index.ts                 # Strict TypeScript interfaces
│   ├── App.tsx                      # Main app orchestrator and hash router
│   └── main.tsx                     # React DOM entry point
├── index.html                       # HTML root with preloaded Google Fonts (Inter, JetBrains Mono)
├── tailwind.config.js               # Theme colors (#0A0A0A, #111111, #3B82F6) and fonts
└── tsconfig.json                    # Strict TypeScript bundler configuration
```

---

## 🧩 2. Detailed Component Reference

### A. Layout & Navigation
1. **`Navbar.tsx`**
   - **Path**: `src/components/layout/Navbar.tsx`
   - **Purpose**: Sticky header that handles section scrolling (`#work`, `#engineering`, `#stack`, `#about`), external GitHub navigation, and mobile hamburger drawer.
   - **Key Props**: `activeSection: string`, `onNavigate: (sectionId: string) => void`.
   - **Mobile Behavior**: Displays a slide-down blurred drawer with navigation links and GitHub CTA.

2. **`Footer.tsx`**
   - **Path**: `src/components/layout/Footer.tsx`
   - **Purpose**: Displays branding, verified BCA education at DG Vaishnav College, direct GitHub/Email/Phone links, and smooth "Back to Top" scrolling.

3. **`CustomCursor.tsx`**
   - **Path**: `src/components/layout/CustomCursor.tsx`
   - **Purpose**: Desktop-only micro-interaction cursor that expands and reveals contextual badges (e.g. `EXPLORE WORK`, `OPEN GITHUB`, `CASE STUDY`) when hovering elements with `data-cursor` attributes.

4. **`ProjectIndexNav.tsx`**
   - **Path**: `src/components/layout/ProjectIndexNav.tsx`
   - **Purpose**: Persistent desktop index widget anchored on the right edge for instant jumping to projects 01 through 05.

---

### B. Hero & Introduction
5. **`Hero.tsx`**
   - **Path**: `src/components/hero/Hero.tsx`
   - **Purpose**: Asymmetric editorial hero section.
   - **Key Text**:
     - Label: `BACKEND / AI ENGINEERING`
     - Headline: `I build systems that work behind the interface.`
     - Subline: `APIs · DATA · COMPUTER VISION · AI APPLICATIONS`
   - **Responsiveness**: Responsive font clamps (`text-3xl sm:text-5xl lg:text-6xl`) and vertical stacking on mobile.

6. **`HeroSystemVisual.tsx`**
   - **Path**: `src/components/hero/HeroSystemVisual.tsx`
   - **Purpose**: Real-time interactive HTML5 Canvas visual simulating distributed packet transfers across 5 system nodes (`CLIENT`, `API GATEWAY`, `ASYNC WORKER`, `DATABASE POOL`, `AI MODEL / VISION`).
   - **Responsive Scaling**: Automatically computes node box dimensions (`boxW = 58px..100px`) and adjusts font size so node boxes never collide on mobile screens.

7. **`EditorialIntro.tsx`**
   - **Path**: `src/components/intro/EditorialIntro.tsx`
   - **Purpose**: Section `01 / ENGINEERING APPROACH`. Discusses deterministic backend schemas, separation of concerns, and verifiable code.

---

### C. Selected Work Showcases
8. **`SelectedWork.tsx`**
   - **Path**: `src/components/projects/SelectedWork.tsx`
   - **Purpose**: Section `02 / SELECTED WORK`. Iterates through the verified projects and renders the respective showcase components in order:
     - `01 — MedLens` (`MedLensHeroShowcase.tsx`)
     - `02 — Black Orchid` (`BlackOrchidShowcase.tsx`)
     - `03 — Smart Attendance System` (`AttendanceShowcase.tsx`)
     - `04 — Companion AI` (`CompanionAIShowcase.tsx`)
     - `05 — Appointment Booking API` (`AppointmentAPIShowcase.tsx`)

9. **`MedLensHeroShowcase.tsx`**
   - **Path**: `src/components/projects/MedLensHeroShowcase.tsx`
   - **Purpose**: Features the multimodal health companion.
   - **Interactive Sandbox**:
     - *Step 01*: Packaging image scan.
     - *Step 02*: Gemini 2.5 Flash bounding box OCR inference with confidence score.
     - *Step 03*: Deterministic JSON schema extraction.
     - *Step 04*: Multi-dialect translation (English, Hindi, Tamil, Telugu, Marathi) and simulated ElevenLabs audio voice player.

10. **`BlackOrchidShowcase.tsx`**
    - **Path**: `src/components/projects/BlackOrchidShowcase.tsx`
    - **Purpose**: Full-stack Next.js + Prisma ORM restaurant platform (78 commits).
    - **Interactive Sandbox**:
      - *Architecture*: Caddy + Next.js SSR + Prisma Postgres topology.
      - *WebSocket Sync*: Interactive 6-table floor plan where clicking a table emits a real-time `WS_EVENT` broadcast.
      - *Prisma Schema*: Verified Prisma data model definition.

11. **`AttendanceShowcase.tsx`**
    - **Path**: `src/components/projects/AttendanceShowcase.tsx`
    - **Purpose**: OpenCV + dlib 128-dimensional facial embedding attendance system.
    - **Interactive Sandbox**:
      - *Professor Capture*: Range slider to adjust Euclidean distance match tolerance (`0.30 - 0.65`) and observe live student attendance classification.
      - *Admin Portal*: Batch CSV enrollment description.
      - *Student View*: Semester attendance percentage breakdown (92.4%).

12. **`CompanionAIShowcase.tsx`**
    - **Path**: `src/components/projects/CompanionAIShowcase.tsx`
    - **Purpose**: Non-judgmental speech cadence and vocal reflection tool.
    - **Interactive Sandbox**:
      - Waveform player with animated frequency bars highlighting pause windows (>800ms) and filler words.
      - Signal diagnostic tabs: `pace`, `pauses`, `fillers`, `restarts`.

13. **`AppointmentAPIShowcase.tsx`**
    - **Path**: `src/components/projects/AppointmentAPIShowcase.tsx`
    - **Purpose**: Foundational FastAPI + SQLAlchemy REST API.
    - **Interactive Sandbox**:
      - Select from 5 endpoints (`POST /register`, `GET /doctors`, `POST /appointments/book`, `GET /appointments/patient/1`, `PUT /appointments/108`).
      - Edit JSON request payload and click "Send Request" to inspect the simulated JSON response status and payload.

---

### D. Engineering Insights & Stack
14. **`HowIBuild.tsx`**
    - **Path**: `src/components/engineering/HowIBuild.tsx`
    - **Purpose**: Section `03 / METHODOLOGY`. 6-stage engineering breakdown (*01 Understand → 02 Model → 03 Build → 04 Integrate → 05 Test → 06 Iterate*).

15. **`BackendSystems.tsx`**
    - **Path**: `src/components/engineering/BackendSystems.tsx`
    - **Purpose**: Section `04 / ARCHITECTURE`. 6-tier backend inspector (*Client / Ingestion → API Gateway → Validation & Schemas → Core Logic & Engines → Persistence & Storage → Intelligent Services*).

16. **`AIApplied.tsx`**
    - **Path**: `src/components/engineering/AIApplied.tsx`
    - **Purpose**: Section `05 / PRACTICAL AI`. 3 practical concrete paradigms (*Computer Vision*, *Structured Language*, *Signal & Speech Processing*).

17. **`TechMatrix.tsx`**
    - **Path**: `src/components/stack/TechMatrix.tsx`
    - **Purpose**: Section `06 / TECHNICAL MATRIX`. 5 structured categories (Backend Architecture, Data & Persistence, Computer Vision & AI, Frontend & Interfaces, Infrastructure & Tools) mapped to verified project instances.

---

### E. Profile, Education & Contact
18. **`AboutSection.tsx`**
    - **Path**: `src/components/about/AboutSection.tsx`
    - **Purpose**: Section `07 / ABOUT`.
    - **Content**:
      - Name: **Arshad Ahamed**
      - Education: **Bachelor of Computer Applications (BCA)** at **DG Vaishnav College**
      - Core technical competencies grid
      - Direct contact details (Email, Phone, Location)

19. **`ContactSection.tsx`**
    - **Path**: `src/components/contact/ContactSection.tsx`
    - **Purpose**: Section `08 / GET IN TOUCH`.
    - **Features**:
      - **WhatsApp Direct Redirection**: Packages Name, Email, and Message into `https://wa.me/918667760793?text=...` and opens WhatsApp.
      - **Email Direct Redirection**: Prepares a prefilled `mailto:arshadasik.7@gmail.com?subject=...&body=...`.
      - **Channel Selector**: Tab to toggle between WhatsApp and Email.
      - **Direct Channel Cards**: One-click links for WhatsApp, Email, Phone (`+91 8667760793`), and GitHub.

20. **`ProjectDetailView.tsx`**
    - **Path**: `src/components/case-study/ProjectDetailView.tsx`
    - **Purpose**: Dedicated case study route (`#work/:projectId`). Contains:
      - End-to-End Data Flow Pipeline
      - 01. The Problem
      - 02. Engineering Approach
      - 03. Architecture & System Design
      - 04. Key Implementation (Verified code snippets)
      - 05. Technical Challenges & Trade-offs
      - 06. Engineering Lessons
      - Direct back navigation and GitHub repo links

---

## 📊 3. Data Layer Reference (`src/data/`)

### A. `projectsData.ts`
Contains the complete data records for all 5 verified projects and the mock API endpoints for the FastAPI explorer:
- `id`: Unique identifier (`'medlens'`, `'black-orchid'`, `'attendance'`, `'companion-ai'`, `'appointment-api'`)
- `index`: Display index string (`'01'`, `'02'`, etc.)
- `title`: Project title
- `category`: Domain classification
- `tagline`: One-sentence executive summary
- `summary`: Detailed architectural description
- `repository`: GitHub source code URL
- `liveUrl`: Optional live deployment URL (omitted for Smart Attendance, present for MedLens & Black Orchid)
- `verifiedCommits`: Exact commit count
- `tags`: Array of technical stack keywords
- `systemFlow`: Array of steps with `step`, `label`, `description`
- `problem`: Problem statement
- `approach`: Architectural approach
- `architectureNotes`: Array of technical bullet points
- `keyImplementations`: Array with `title`, `description`, `codeSnippet`
- `challenges`: Array of technical constraints and solutions
- `whatWasLearned`: Array of engineering takeaways

### B. `stackData.ts`
Contains the structured technical matrix divided into 5 categories:
- `Backend Architecture` (Python, FastAPI, REST APIs, SQLAlchemy, Pydantic, Node.js)
- `Data & Persistence` (MySQL, PostgreSQL/Supabase, SQLite, Prisma ORM, SQL Modeling)
- `Computer Vision & AI` (Computer Vision & OCR, OpenCV & dlib, LLM APIs, AI Audio)
- `Frontend & Interfaces` (React, TypeScript, Next.js, Vite, Tailwind CSS)
- `Infrastructure & Tools` (Git & GitHub, WebSockets, Caddy Reverse Proxy, Swagger UI, Linux/Shell)

### C. `githubData.ts`
Contains profile statistics, profile URL (`https://github.com/arshad-2311`), and repository language distributions.

---

## 🎨 4. Design System & Styling Tokens

### Color Palette (Defined in `tailwind.config.js` & `index.css`)
- **Base Background**: `#0A0A0A`
- **Surface Dark**: `#0E0E0E` / `#111111`
- **Surface Highlight**: `#181818` / `#1F1F1F`
- **Borders**: `rgba(255, 255, 255, 0.08)` / `rgba(255, 255, 255, 0.12)`
- **Primary Text**: `#F5F5F5`
- **Secondary Text**: `#A1A1AA`
- **Muted Text**: `#71717A` / `#52525B`
- **Accent**: `#3B82F6` (Electric Cobalt)
- **Success / Matched**: `#10B981` (Emerald)
- **Warning / Pause**: `#F59E0B` (Amber)
- **Error / Filler**: `#F43F5E` (Rose)

### Typography
- **Headings & Body**: `Inter`, system-ui, sans-serif
- **Code, Numbers, Tags, Labels**: `JetBrains Mono`, monospace
- **Mono Label Utility**: `.mono-label` (`font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; letter-spacing: 0.05em; text-transform: uppercase;`)

---

## 🤖 5. Rules for Future AI Updates

When making future edits using AI, adhere to these strict principles:
1. **Never Make it Look AI-Generated**:
   - Avoid generic glowing purple/cyan blobs, floating robot graphics, or generic AI marketing templates.
   - Maintain the editorial minimalism, crisp borders, dark monochrome surfaces, and high-density technical information.
2. **Authenticity Over Visual Fluff**:
   - Every metric, technology tag, and repository reference must reflect real projects at `github.com/arshad-2311`.
   - Never label a frontend simulation as "live production" — always keep `[MOCK REQUEST]` or `[SANDBOX]` badges on interactive simulators.
3. **Mobile Responsiveness**:
   - Always use responsive padding (`px-4 sm:px-8`), flexible grids (`grid-cols-1 sm:grid-cols-2`), and `flex-wrap` on header button rows.
   - Avoid rigid fixed pixel widths on canvas elements or text containers.
4. **TypeScript Strictness**:
   - Ensure all props have strict interfaces in `src/types/index.ts`.
   - Remove unused imports before committing (`tsc -b` must always pass with 0 errors).
