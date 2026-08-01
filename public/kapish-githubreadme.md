<h1 align="center">Hey 👋, I'm Kapish</h1>
<h3 align="center">BTech CSE @ VIT Vellore • Former SWE Intern @ Vyntelligence • Full Stack, Mobile & Data Engineering</h3>

<p align="center">
  <a href="https://linkedin.com/in/kapish-tickoo">
    <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white"/>
  </a>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kapishtickoo.dev@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white"/>
  </a>
  <img src="https://komarev.com/ghpvc/?username=kapish-18&label=Profile%20views&color=0e75b6&style=flat"/>
</p>

---

## 🚀 About Me

- 🎓 BTech CSE @ VIT Vellore
- 💼 Former SWE Intern @ Vyntelligence (Series B, UK) — engineered resilient Python ETL pipelines for AI workflows
- 🏋️‍♂️ Built **TrueFit** — an offline-first intelligent strength training app driven by a custom relational database design and algorithmic recommendation engine
- ⚡ Built **OneCart** — a live multi-vendor food delivery platform deployed at VIT campus
- 🧠 I learn by building systems used by real people
- 🛠️ Focused on full-stack architecture, system reliability, and real-world problem solving

---

## 🏢 SWE Internship — Vyntelligence (London, Remote)

Worked on an initiative to revamp the company's enterprise product demo environments, replacing fragmented, non-contextual test data with high-fidelity simulations. 

I collaborated closely with a fellow engineering intern (who built the synthetic data generator) while I **owned and engineered the 3-tier Python ETL ingestion and integration pipeline**:

- ⚙️ **Data Pipeline:** Built a modular pipeline to process and ingest 4,000+ highly nested JSON records against live servers with a 100% success rate.
- 🛡️ **Resilience & Integrity:** Implemented `urllib3` and `requests.Session` custom HTTP adapters to handle transient network errors and API rate limits (HTTP 429), automating lifecycle state syncs in real-time.
- ☁️ **Cloud & Analytics:** Built direct AWS S3 integrations to manage complex multipart binary media uploads via automated PUT requests and configured QuickSight dashboards to analyze operational data patterns.
- 🧪 **Data Guardrails & Testing:** Migrated manual pre-flight validation to Pydantic schemas to eliminate malformed data runtime faults, and developed a unit testing suite using `patch` and `mock_open` to validate retry and upload mechanics safely off-cloud.

---

## 🏋️‍♂️ TrueFit — Offline-First Intelligent Strength Training App

A fully offline mobile application designed to manage centralized fitness programs, workout sessions, and personalized data analytics.

- 📱 **Architecture:** Developed with React Native (Expo SDK 56) utilizing file-based routing (`Expo Router`) and `Zustand` for performant, centralized state management across local routines.
- 🗄️ **Relational Database Design:** Architected a normalized relational schema in SQLite containing 10+ tables with strict foreign keys and cascading deletes. Protected application security behind a centralized DAO layer using parameterized queries to completely eliminate SQL injection vectors.
- 🧠 **Algorithmic Engine:** Engineered an 8-module recommendation engine covering progressive overload, fatigue scoring, deload planning, joint-safety validation, and volume analysis.
- 🔢 **Performance Modeling:** Implemented a double-progression methodology calculation engine leveraging the Epley 1RM formula to automatically process historical performance data and yield targeted weight/rep markers.

🔗 **Project Repo:**  
👉 https://github.com/kapish-18/TrueFit

---

## 🛒 OneCart — Multi-Outlet Food Delivery Production System

A **multi-outlet campus food delivery platform** built and deployed during my college semesters.

Users can:
- Order from multiple outlets
- Checkout once
- Pay once
- Get a single delivery

> A system-level problem traditional aggregators (Zomato/Swiggy) don't solve on campus.

### 💡 Core Insight

Millions of small vendors are excluded from platforms due to tech barriers.

**Solution:**  
→ PDF menus + free-text ordering  
→ Zero tech requirement on the vendor side

### ⚙️ What's Live

- 📱 React Native Customer App (ordering, tracking, payments)
- 🚴 Delivery Partner App (earnings, notifications)
- 🖥️ Admin Dashboard (analytics, payouts, live orders)
- 🌐 Backend API (Node.js + Express + MongoDB) handling real transactions

### 🧠 Engineering Highlights

- ⚡ Atomic order locking using MongoDB `findOneAndUpdate` to completely eliminate concurrent order lifecycle race conditions.
- 🔐 Razorpay HMAC-SHA256 signature verification to ensure absolute payment infrastructure integrity.
- 📲 Real-time multi-app alerting powered by Firebase and Expo push notifications.
- 📧 Eliminated external domain dependencies for authentication workflows by migrating to Brevo's API for zero-cost transactional OTP delivery.

🔗 **Project Repo:**  
👉 https://github.com/kapish-18/ONECART

---

## 🛠️ Tech Stack

**Languages:** JavaScript, TypeScript, Python, C++  
**Backend & Data Engineering:** Node.js, Express.js, REST APIs, ETL Pipelines, Pydantic, urllib3, requests, unittest.mock  
**Mobile & Frontend:** React Native (Expo), Expo Router, Zustand, React (Vite), TailwindCSS, Offline-First Architecture  
**Database & Cloud:** MongoDB, SQLite, Mongoose, AWS (S3, QuickSight), Firebase, MongoDB Atlas  
**Payments & Tools:** Razorpay, Brevo API, Git/GitHub, Postman, Atomic DB Operations, Relational Schema Design  

---

## 📊 GitHub Stats

![](https://github-readme-stats.vercel.app/api?username=kapish-18&show_icons=true&theme=dark&hide_border=true&include_all_commits=true&count_private=true)
![](https://streak-stats.demolab.com?user=kapish-18&theme=dark&hide_border=true)
![](https://github-readme-stats.vercel.app/api/top-langs/?username=kapish-18&layout=compact&theme=dark&hide_border=true)

---

## 🐍 Contribution Graph

<p align="center">
  <img src="https://raw.githubusercontent.com/kapish-18/kapish-18/output/github-contribution-grid-snake.svg" />
</p>

---

## 🧩 Current Focus

- 🎯 Mastering advanced Data Structures & Algorithms (DSA) and high-level System Design
- 🚀 Deepening architecture paradigms (Offline-First, Distributed State, High-Throughput Ingestion)
- 🛠️ Delivering enterprise-grade, highly optimized software before graduating

---

## 📬 Reach Out

- 💼 LinkedIn: https://linkedin.com/in/kapish-tickoo
- 📧 Email: kapishtickoo.dev@gmail.com

---

## ⚡ Philosophy

> "The best way to learn systems is to build one that real people depend on."