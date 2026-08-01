# Implementation Plan - Kapish Tickoo's Developer Portfolio

Create a high-impact, unique, and professional web portfolio for **Kapish Tickoo** (Computer Science & Business Systems student at VIT Vellore, ex-Vyntelligence Software Engineer Intern). The portfolio is designed specifically to captivate technical recruiters, engineering managers, and LinkedIn connections, placing heavy emphasis on **"Solving Problems Through Code"** with interactive architecture visualizations, live terminal snippets, recruiter view options, project deep-dives, expandable project data support, and fluid **Anime.js** motion design.

---

## Portfolio Strategy & Tech Stack

### 1. Technology Stack
- **Frontend**: React (Vite), JavaScript / JSX, HTML5, Vanilla CSS (CSS Modules & tokens).
- **Animations & Motion Design**: **Anime.js** for kinetic hero typography, particle background physics, interactive hover state springs, scroll-triggered section reveals, and smooth terminal output typing effects.
- **MERN Stack Architecture & Contact Backend**: Lightweight Express + Node.js backend server (`server/index.js`) providing an `/api/contact` endpoint for recruiter submissions with MongoDB / email dispatch capabilities.
- **Dynamic & Scalable Project Engine**: Structured centralized data store (`src/data/portfolioData.js`) allowing Kapish to easily add 5, 10, or 20+ future projects with tags, GitHub links, APK download links, architecture highlights, and screenshots. Optional live GitHub API integration feature for auto-syncing public GitHub repositories.

### 2. Design Philosophy
- **Theme**: Modern Dark / Engineering Cyber-Clean aesthetic featuring deep slate (`#0B0F17`), glowing indigo/cyan accents (`#38BDF8`, `#818CF8`, `#10B981`), glassmorphism card surfaces, and subtle particle/grid background overlays.
- **Problem-Solver DNA**: An interactive live terminal/code snippet in the hero section displaying real engineering logic (e.g. MongoDB atomic concurrency check, SQLite offline DAO query, or Python ETL retry loop).

---

## Key Features & Sections

1. **Interactive Hero Section (Animated with Anime.js)**:
   - Dynamic headline reveal and morphing particle background powered by Anime.js.
   - Animated status badge ("Open to Opportunities | VIT Vellore '28").
   - Interactive Terminal Widget: Execute quick commands like `help`, `skills`, `projects`, `contact`, `solve-problem` or toggle code samples.
   - Quick CTA buttons: "Explore Major Projects", "View Resume (PDF)", "Recruiter Snapshot".

2. **Core Philosophy / Problem-Solving Spotlight**:
   - Highlighted section demonstrating 3 real-world engineering challenges solved:
     - **Race Condition Prevention** (OneCart): Atomic MongoDB `findOneAndUpdate` for concurrent food orders.
     - **Offline-First Resilience** (TrueFit): Parameterized SQLite DAO & 8-module exercise recommendation engine.
     - **High-Throughput Ingestion** (Vyntelligence): Python 3-tier ETL pipeline handling 4k+ nested JSONs with 0% runtime faults via Pydantic.

3. **Major & Modular Projects Showcase (Unlimited Projects Support)**:
   - **OneCart** (Multi-Outlet Campus Food Delivery Platform) — App & Ecosystem, Razorpay HMAC-SHA256, Firebase push notifications, Direct APK / GitHub Releases download link.
   - **TrueFit** (Offline-First Intelligent Strength Training App) — 10+ relational SQLite tables, Zustand state management, EAS CI/CD cloud builds, Direct APK download link.
   - **Expandable Project Data**: Easily add more projects from GitHub by updating `portfolioData.js`. Includes filter tags (All, Mobile, Full-Stack, Backend & Data, AI/ETL).
   - "Deep Dive" modal for architecture breakdown, APK download buttons, GitHub source code links, and live app links.

4. **Experience & Internship Timeline**:
   - **Software Engineer Intern (AI Data Ingestion)** @ Vyntelligence (London, UK - Remote | May 2026 – July 2026).
   - Key highlights with quantifiable metrics: 4,000+ nested JSON records, 100% success rate, zero malformed payload runtime faults.

5. **Courses, Academics & Achievements**:
   - **Education**: B.Tech in Computer Science (Business Systems) at VIT Vellore (2024–2028).
   - **Relevant Coursework**: Data Structures & Algorithms, Database Management Systems, Operating Systems, Software Engineering, Computer Networks.
   - **Key Achievements**: Finalist at Google Developer Student Club (GDSC) Hackathon, VIT Vellore.

6. **Interactive Skills Radar & Tech Stack**:
   - Categorized grid: Languages, Frontend & Mobile, Backend & Data, Databases & Cloud, Libraries, Tools & Concepts.
   - Hover tooltips showing project context where each skill was applied.

7. **Recruiter Mode & Interactive Contact Backend**:
   - One-click **"Recruiter Mode"** toggle: Converts the site into a high-density, print-friendly executive summary optimized for quick scanning in 30 seconds.
   - Direct Resume PDF preview & download link.
   - **Recruiter Contact Form**: Connects to the Express `/api/contact` backend route with feedback validation, status state, and fallback one-click email copy.

---

## User Review Required

> [!IMPORTANT]
> **APK Links & Future Projects**: APK download buttons will be built directly into project cards and modals. Adding new projects is as easy as appending an object in `src/data/portfolioData.js`!

> [!NOTE]
> **Workspace Copy**: This implementation plan is saved directly in your project folder as `IMPLEMENTATION_PLAN.md`.

---

## Proposed Changes

### Project Initialization & Setup

#### [NEW] [package.json](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/package.json)
- React + Vite + Lucide Icons + `animejs` + Express/Cors/Body-Parser dependencies setup.

#### [NEW] [index.html](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/index.html)
- Main HTML entry with SEO metadata, Google Fonts (Inter + JetBrains Mono), OpenGraph social preview tags.

#### [NEW] [IMPLEMENTATION_PLAN.md](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/IMPLEMENTATION_PLAN.md)
- In-repo copy of the complete implementation plan.

### Backend (MERN Stack)

#### [NEW] [server/index.js](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/server/index.js)
- Lightweight Express server handling `/api/contact` endpoint, storing messages in memory/MongoDB, and handling recruiter submissions.

### Styles & Design System

#### [NEW] [src/index.css](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/index.css)
- Master design system: color variables (Slate dark background, Electric Cyan `#00F2FE`, Neon Indigo `#6366F1`, Emerald `#10B981`), glassmorphism utility classes, typography, scrollbar styling, grid animations, print media styles for Recruiter Mode.

### Components & Anime.js Animations

#### [NEW] [src/utils/animeEffects.js](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/utils/animeEffects.js)
- Reusable Anime.js helper functions for timeline reveals, code typing simulation, floating cards, line drawing, and hover effects.

#### [NEW] [src/components/Navbar.jsx](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/components/Navbar.jsx)
- Responsive header navigation bar with theme glow, section anchors, Recruiter Mode toggle, and PDF Resume download button.

#### [NEW] [src/components/HeroSection.jsx](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/components/HeroSection.jsx)
- Hero section with interactive terminal, Anime.js typewriter headline, particle visualizer, stats counters, and problem-solver statement.

#### [NEW] [src/components/ProblemSolverSection.jsx](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/components/ProblemSolverSection.jsx)
- Dedicated interactive showcase of real technical challenges solved (Concurrency, Offline DAO, High-Throughput ETL).

#### [NEW] [src/components/ProjectsSection.jsx](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/components/ProjectsSection.jsx)
- Modular filterable cards for OneCart, TrueFit, and additional GitHub projects with APK download links, Anime.js transitions, tech tags, metrics, and GitHub repo links.

#### [NEW] [src/components/ExperienceSection.jsx](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/components/ExperienceSection.jsx)
- Vyntelligence Software Engineer Intern spotlight with key metrics, 3-tier ETL breakdown, and tech stack tags.

#### [NEW] [src/components/SkillsSection.jsx](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/components/SkillsSection.jsx)
- Interactive categorized skills matrix (Languages, Frontend/Mobile, Backend, Databases/Cloud, Libraries, Tools).

#### [NEW] [src/components/EducationSection.jsx](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/components/EducationSection.jsx)
- VIT Vellore CSBS details, relevant courses, GDSC Hackathon Finalist achievement banner.

#### [NEW] [src/components/ContactSection.jsx](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/components/ContactSection.jsx)
- Contact form connecting to backend `/api/contact` API with live validation, status feedback, and quick email copy.

#### [NEW] [src/components/ProjectModal.jsx](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/components/ProjectModal.jsx)
- Rich modal for deep-diving into project architecture, database schemas, APK downloads, and code snippet walk-throughs.

#### [NEW] [src/components/FooterSection.jsx](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/components/FooterSection.jsx)
- Footer with social links, email copy button, copyright, and back-to-top feature.

#### [NEW] [src/data/portfolioData.js](file:///c:/Users/Kapish/Pictures/projects/ANTIGRAVITY/Kapish-Portfolio/src/data/portfolioData.js)
- Scalable structured data store containing Kapish's resume info, project array (easily expandable with new objects), experiences, courses, achievements, APK links, and code snippets.

---

## Verification Plan

### Automated Verification
1. `npm run build` — Verify zero TypeScript/JSX syntax errors and clean Vite bundle compilation.
2. `npm run dev` / dev server startup check — Ensure clean execution without console errors.

### Manual Verification
1. **Anime.js Motion Design**: Verify smooth 60fps animations for hero text morphing, terminal typing, card reveals, and hover state transitions.
2. **Interactive Elements**: Test terminal command inputs, category filters, project modals, APK download buttons, contact form submit, copy email functionality, and Recruiter Mode view.
3. **Responsive Design**: Verify layout flexibility across desktop, tablet, and mobile breakpoints.
4. **Resume & Links**: Confirm PDF resume button links properly to `kapish_resume_sanitized.pdf` and external links open safely in new tabs (`_blank`, `rel="noreferrer"`).
