/* ─────────────────────────────────────────
   PORTFOLIO DATA — Kapish Tickoo
   Enriched from project READMEs + GitHub profile.
   To add a project: append to the `projects` array.
   ───────────────────────────────────────── */

export const personalInfo = {
  name: 'Kapish Tickoo',
  firstName: 'Kapish',
  title: 'Full-Stack · Mobile · Data Engineering',
  tagline: '"The best way to learn systems is to build one that real people depend on."',
  email: 'kapishtickoo.dev@gmail.com',
  github: 'https://github.com/kapish-18',
  linkedin: 'https://linkedin.com/in/kapish-tickoo',
  location: 'VIT Vellore, India',
  statusBadge: 'Open to Opportunities · VIT \'28',
  resumePath: '/kapish_resume_sanitized.pdf',
};

export const heroStats = [
  { value: '4', label: 'Major Projects' },
  { value: '15+', label: 'Technologies' },
  { value: '100%', label: 'Problem Driven' },
];

// ═══════════════════════════════════════════
//  PROJECTS
// ═══════════════════════════════════════════
export const projects = [
  {
    id: 'onecart',
    title: 'OneCart',
    subtitle: 'Multi-Outlet Campus Food Delivery — Live MVP',
    description: 'A production food delivery platform deployed at VIT campus. Users order from multiple outlets in one checkout, pay once, and get a single delivery. 4 apps, 1 backend, 1 database — solving a problem Swiggy and Zomato don\'t.',
    longDescription: 'OneCart tackles a system-level problem that traditional food aggregators don\'t solve on campus: ordering from multiple outlets in one checkout. The platform onboards vendors with zero tech on their side — just a PDF menu photo and a phone call. No dashboard. No app. No setup. The delivery partner acts as the bridge.\n\nThe system comprises 4 separate apps (User App, Delivery Partner App, Admin Dashboard, and the Node.js Backend) all communicating through a central MongoDB Atlas database. Payment integrity is enforced via Razorpay HMAC-SHA256 server-side verification. OTP authentication is restricted to @vitstudent.ac.in emails via Brevo\'s transactional API (migrated from Gmail SMTP due to Render timeout issues). Real-time push notifications power the entire order lifecycle across all apps.',
    categories: ['Full-Stack', 'Mobile'],
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB Atlas', 'Razorpay', 'Firebase', 'Brevo API', 'Render'],
    metrics: [
      { value: '4', label: 'App Ecosystem' },
      { value: 'HMAC', label: 'SHA-256 Payments' },
      { value: 'Live', label: 'MVP Status' },
    ],
    highlights: [
      '4-app ecosystem: User App, Delivery App, Admin Dashboard (Vite React), Node.js + Express Backend',
      'Multi-outlet checkout — order from 2 outlets, pay once, single delivery',
      'Razorpay HMAC-SHA256 server-side payment signature verification',
      'Atomic MongoDB findOneAndUpdate to eliminate concurrent order lifecycle race conditions',
      'OTP auth restricted to @vitstudent.ac.in via Brevo transactional email API',
      'Admin payout tracker with per-partner QR codes for UPI and "Mark Paid" reset',
      'Peak mode pricing toggled from admin panel (+₹10 delivery surcharge)',
      'Real-time order tracking with 5-second polling and push notifications on arrival',
    ],
    github: 'https://github.com/kapish-18/ONECART',
    apk: null,
    liveUrl: null,
    codeSnippet: `// Atomic order acceptance — only one delivery partner wins
const order = await Order.findOneAndUpdate(
  { _id: orderId, status: 'CREATED' },
  { 
    $set: { 
      status: 'ASSIGNED',
      deliveryPerson: partnerId,
      assignedAt: new Date()
    }
  },
  { new: true }
);
// Returns null if already assigned → second partner rejected`,
    featured: true,
  },
  {
    id: 'truefit',
    title: 'TrueFit',
    subtitle: 'Offline-First Intelligent Strength Training App',
    description: 'A fully offline mobile app with 84 exercises, 8 intelligence engine modules, and an algorithmic progressive overload system — all running locally on SQLite with zero internet, zero subscriptions, zero accounts.',
    longDescription: 'TrueFit sits between simple gym loggers and over-engineered $15/month platforms. It\'s a fully offline, zero-subscription training app that actually thinks for you.\n\nThe intelligence engine comprises 8 functionally pure modules: Progressive Overload Advisor (double progression via Epley 1RM), Deload Planner (5-week cycle detection), Joint Safety Validator (flags >30% compound jumps, >20% isolation jumps), PR Detector (weight, estimated 1RM, and rep records), Volume Analyzer (10-20 sets/week per muscle group), Fatigue Scorer (0-100 gauge), Progress Analyzer, and Weekly Report Generator.\n\nThe data layer is built on 10+ normalized SQLite tables with strict foreign keys and cascading deletes, protected by a centralized DAO layer using parameterized queries. Ghost data from your last session auto-fills, and smart recommendations appear before you start logging. Pre-built templates include Push/Pull/Legs, Upper/Lower, Full Body, and Bro Split.',
    categories: ['Mobile', 'Full-Stack'],
    tech: ['React Native', 'Expo SDK 56', 'SQLite', 'Zustand', 'Expo Router', 'Reanimated', 'GitHub Actions'],
    metrics: [
      { value: '84', label: 'Exercises' },
      { value: '8', label: 'Engine Modules' },
      { value: '100%', label: 'Offline' },
    ],
    highlights: [
      '8-module intelligence engine: overload, deload, fatigue, joint safety, PR detection, volume analysis',
      'Epley 1RM formula with double progression methodology for automatic weight/rep recommendations',
      '84 exercises across 13 muscle groups with proper categorization and default increments',
      '10+ normalized SQLite tables with FK constraints, cascading deletes, and parameterized DAO',
      'Ghost data from last session + smart auto-fill for fastest possible logging flow',
      'Joint safety: flags >30% compound jumps, >20% isolation, >50% danger zone',
      'Deload planner triggers after 5 consecutive training weeks with automatic volume reduction',
      'GitHub Actions CI/CD for automated APK build and release',
    ],
    github: 'https://github.com/kapish-18/TrueFit',
    apk: 'https://github.com/kapish-18/TrueFit/releases/latest',
    liveUrl: null,
    codeSnippet: `// Progressive overload — double progression engine
function evaluatePerformance(lastSets, target) {
  const allMaxReps = lastSets.every(s => s.reps >= target.repsMax);
  const allMinReps = lastSets.every(s => s.reps >= target.repsMin);
  const atTargetWeight = lastSets[0]?.weight >= target.weight;

  if (allMaxReps && atTargetWeight)  return 'INCREASE_WEIGHT';
  if (allMinReps && atTargetWeight)  return 'INCREASE_REPS';
  if (allMinReps && !atTargetWeight) return 'PROGRESS_WEIGHT';
  if (someHit(lastSets, target))     return 'MAINTAIN';
  return 'REDUCE_WEIGHT';
}`,
    featured: true,
  },
  // ──────────────────────────────────────────
  // ADD MORE PROJECTS — just copy this template:
  // {
  //   id: 'unique-id',
  //   title: 'Project Name',
  //   subtitle: 'Short tagline',
  //   description: 'Card description',
  //   longDescription: 'Modal description',
  //   categories: ['Mobile', 'Full-Stack', 'Backend', 'AI/ETL'],
  //   tech: ['Tech1', 'Tech2'],
  //   metrics: [{ value: '...', label: '...' }],
  //   highlights: ['Bullet 1', 'Bullet 2'],
  //   github: 'https://github.com/kapish-18/repo',
  //   apk: 'https://link-to-apk',
  //   liveUrl: null,
  //   codeSnippet: `// code`,
  //   featured: false,
  // },
];

export const experience = [
  {
    id: 'vyntelligence',
    company: 'Vyntelligence',
    companyNote: 'Series B · London, UK',
    role: 'Software Engineer Intern — AI Data Ingestion',
    location: 'London, UK (Remote)',
    period: 'May 2026 – July 2026',
    type: 'Internship',
    description: 'Owned and engineered a 3-tier Python ETL pipeline to replace fragmented demo data with high-fidelity simulations. Collaborated with a fellow intern (synthetic data generator) while building the ingestion and integration layer end-to-end.',
    metrics: [
      { value: '4,000+', label: 'JSON Records', color: 'var(--cyan)' },
      { value: '100%', label: 'Success Rate', color: 'var(--mint)' },
      { value: '0', label: 'Runtime Faults', color: 'var(--lavender)' },
    ],
    highlights: [
      'Built a modular 3-tier ETL pipeline (Extract → Validate → Transform) processing 4,000+ deeply nested JSON records against live servers',
      'Implemented urllib3 and requests.Session custom HTTP adapters to handle transient network errors and API rate limits (HTTP 429)',
      'Built direct AWS S3 integrations for complex multipart binary media uploads via automated PUT requests',
      'Configured QuickSight dashboards to analyze operational data patterns across ingested datasets',
      'Migrated manual pre-flight validation to Pydantic schemas, eliminating malformed data runtime faults entirely',
      'Developed unit testing suite using patch and mock_open to validate retry and upload mechanics safely off-cloud',
    ],
    tech: ['Python', 'Pydantic', 'AWS S3', 'QuickSight', 'urllib3', 'requests', 'unittest.mock', 'REST APIs'],
  },
];

export const problemsSolved = [
  {
    id: 'concurrency',
    project: 'OneCart',
    title: 'Race Condition Prevention',
    description: 'Multiple delivery partners could accept the same order simultaneously. Used MongoDB\'s findOneAndUpdate with a status condition to make acceptance atomic.',
    annotation: '← only one partner wins',
    code: `// Atomic — second partner always gets null
const order = await Order.findOneAndUpdate(
  { _id: orderId, status: 'CREATED' },
  { $set: { status: 'ASSIGNED', deliveryPerson } },
  { new: true }
);
if (!order) throw new Error('Already taken');`,
  },
  {
    id: 'offline',
    project: 'TrueFit',
    title: 'Offline-First Data Resilience',
    description: 'Built a parameterized SQLite DAO layer enabling full app functionality without internet — 84 exercises, 10+ tables, zero SQL injection vectors.',
    annotation: '← zero network calls',
    code: `// Parameterized DAO — safe + offline
const logs = await db.getAllAsync(
  \`SELECT * FROM workout_logs
   WHERE date BETWEEN ? AND ?
   ORDER BY date DESC\`,
  [startDate, endDate]
);`,
  },
  {
    id: 'etl',
    project: 'Vyntelligence',
    title: 'High-Throughput Data Ingestion',
    description: 'Processed 4,000+ deeply nested JSON records with 100% success rate through Pydantic validation and custom HTTP retry adapters for transient failures.',
    annotation: '← 0 runtime faults',
    code: `# Pydantic guard + retry adapter
class AnnotationRecord(BaseModel):
    task_id: str
    annotations: List[Annotation]

session = requests.Session()
adapter = HTTPAdapter(max_retries=Retry(
    total=3, backoff_factor=1,
    status_forcelist=[429, 500, 502]
))
session.mount("https://", adapter)`,
  },
];

export const skills = [
  { category: 'Languages', icon: 'Code2', items: ['JavaScript', 'TypeScript', 'Python', 'C/C++', 'Java', 'SQL', 'HTML', 'CSS'] },
  { category: 'Frontend & Mobile', icon: 'Smartphone', items: ['React', 'React Native', 'Expo SDK 56', 'Expo Router', 'Vite', 'TailwindCSS'] },
  { category: 'Backend & Data', icon: 'Server', items: ['Node.js', 'Express.js', 'REST APIs', 'ETL Pipelines', 'Pydantic', 'urllib3'] },
  { category: 'Databases & Cloud', icon: 'Database', items: ['MongoDB Atlas', 'SQLite', 'Mongoose', 'Firebase', 'AWS S3', 'QuickSight'] },
  { category: 'Payments & APIs', icon: 'Package', items: ['Razorpay SDK', 'Brevo API', 'Firebase Cloud Messaging', 'Expo Push'] },
  { category: 'Tools & Practices', icon: 'Wrench', items: ['Git', 'GitHub Actions', 'EAS Build', 'CI/CD', 'Postman', 'Agile', 'unittest.mock'] },
];

export const education = {
  school: 'VIT Vellore',
  degree: 'B.Tech in Computer Science & Engineering',
  specialization: 'Business Systems',
  period: '2024 – 2028',
  courses: ['Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems', 'Software Engineering', 'Computer Networks'],
};

export const achievements = [
  {
    id: 'gdsc',
    title: 'GDSC Hackathon Finalist',
    description: 'Finalist at Google Developer Student Club (GDSC) Hackathon, VIT Vellore — competed against 100+ teams.',
    icon: '🏆',
  },
];

export const currentFocus = [
  'Mastering advanced DSA and high-level System Design',
  'Deepening architecture paradigms: Offline-First, Distributed State, High-Throughput Ingestion',
  'Delivering enterprise-grade, highly optimized software before graduating',
];

// ═══════════════════════════════════════════
//  TERMINAL COMMANDS
// ═══════════════════════════════════════════
export const terminalCommands = {
  help: {
    output: [
      { text: 'Available commands:', type: 'highlight' },
      { text: '  about       Who is Kapish?', type: 'default' },
      { text: '  skills      Technical stack', type: 'default' },
      { text: '  projects    Major projects', type: 'default' },
      { text: '  experience  Work experience', type: 'default' },
      { text: '  contact     Get in touch', type: 'default' },
      { text: '  solve       See a real problem solved', type: 'default' },
      { text: '  philosophy  What drives me', type: 'default' },
      { text: '  resume      Download resume', type: 'default' },
      { text: '  clear       Clear terminal', type: 'default' },
    ],
  },
  about: {
    output: [
      { text: '━━━ Kapish Tickoo ━━━', type: 'highlight' },
      { text: '', type: 'default' },
      { text: 'BTech CSE @ VIT Vellore \'28', type: 'default' },
      { text: 'Former SWE Intern @ Vyntelligence (Series B, London)', type: 'default' },
      { text: '', type: 'default' },
      { text: 'I learn by building systems used by real people.', type: 'success' },
      { text: '→ OneCart: live food delivery on VIT campus', type: 'default' },
      { text: '→ TrueFit: 84 exercises, 8 engine modules, 100% offline', type: 'default' },
      { text: '→ Vyntelligence: 4K+ records, 0 runtime faults', type: 'default' },
    ],
  },
  skills: {
    output: [
      { text: '━━━ Tech Stack ━━━', type: 'highlight' },
      { text: '', type: 'default' },
      { text: 'Languages    → JS, TS, Python, C++, Java, SQL', type: 'default' },
      { text: 'Frontend     → React, React Native, Expo, Vite', type: 'default' },
      { text: 'Backend      → Node.js, Express, ETL, Pydantic', type: 'default' },
      { text: 'Databases    → MongoDB Atlas, SQLite, Firebase', type: 'default' },
      { text: 'Cloud        → AWS S3, QuickSight, Render', type: 'default' },
      { text: 'Tools        → Git, GitHub Actions, EAS Build', type: 'default' },
    ],
  },
  projects: {
    output: [
      { text: '━━━ Major Projects ━━━', type: 'highlight' },
      { text: '', type: 'default' },
      { text: '▸ OneCart — Live campus food delivery (4 apps)', type: 'success' },
      { text: '  Multi-outlet checkout · Razorpay · Firebase', type: 'default' },
      { text: '', type: 'default' },
      { text: '▸ TrueFit — Offline intelligent gym tracker', type: 'success' },
      { text: '  84 exercises · 8 engine modules · SQLite', type: 'default' },
      { text: '', type: 'default' },
      { text: '↓ scroll down for deep dives', type: 'warning' },
    ],
  },
  experience: {
    output: [
      { text: '━━━ Vyntelligence (Series B, London) ━━━', type: 'highlight' },
      { text: 'SWE Intern · AI Data Ingestion · Remote', type: 'default' },
      { text: 'May–Jul 2026', type: 'default' },
      { text: '', type: 'default' },
      { text: '→ 3-tier Python ETL pipeline', type: 'success' },
      { text: '→ 4,000+ nested JSON records ingested', type: 'default' },
      { text: '→ AWS S3 multipart uploads + QuickSight', type: 'default' },
      { text: '→ Pydantic validation · 0 runtime faults', type: 'default' },
    ],
  },
  contact: {
    output: [
      { text: '━━━ Contact ━━━', type: 'highlight' },
      { text: '', type: 'default' },
      { text: '📧 kapishtickoo.dev@gmail.com', type: 'default' },
      { text: '🔗 github.com/kapish-18', type: 'default' },
      { text: '💼 linkedin.com/in/kapish-tickoo', type: 'default' },
      { text: '', type: 'default' },
      { text: '↓ or use the contact form below', type: 'warning' },
    ],
  },
  philosophy: {
    output: [
      { text: '━━━ Philosophy ━━━', type: 'highlight' },
      { text: '', type: 'default' },
      { text: '"The best way to learn systems is to build', type: 'success' },
      { text: ' one that real people depend on."', type: 'success' },
      { text: '', type: 'default' },
      { text: 'I don\'t just write code — I architect solutions', type: 'default' },
      { text: 'to real problems. Every project starts with', type: 'default' },
      { text: 'understanding the problem deeply.', type: 'default' },
    ],
  },
  solve: {
    output: [
      { text: '━━━ Problem: Concurrent Order Race Condition ━━━', type: 'highlight' },
      { text: '', type: 'default' },
      { text: 'Two delivery partners tap "Accept" at the same', type: 'default' },
      { text: 'millisecond. Who gets the order?', type: 'default' },
      { text: '', type: 'default' },
      { text: 'Solution: Atomic MongoDB findOneAndUpdate', type: 'success' },
      { text: '', type: 'default' },
      { text: 'const order = await Order.findOneAndUpdate(\n  { _id: orderId, status: "CREATED" },\n  { $set: { status: "ASSIGNED" } },\n  { new: true }\n);\n// Returns null if already taken\n// → second partner rejected automatically ✓', type: 'code' },
    ],
  },
  whoami: {
    output: [
      { text: 'kapish-tickoo: problem-solver, system-builder,', type: 'highlight' },
      { text: 'and occasional coffee-to-code converter ☕→💻', type: 'success' },
    ],
  },
};

export const filterCategories = ['All', 'Full-Stack', 'Mobile', 'Backend', 'AI/ETL'];
