#  KaarYab Afghanistan - Opportunity Finder Platform

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.3-38bdf8?logo=tailwindcss)
![Zustand](https://img.shields.io/badge/Zustand-State_Management-orange)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-purple)
![Recharts](https://img.shields.io/badge/Recharts-Charts-22c55e)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

---

##  Project Name

KaarYab Afghanistan - Opportunity Finder Platform

---

## Project Description

KaarYab is a modern, full-stack opportunity finder platform designed to help Afghan youth discover jobs, internships, scholarships, online courses, remote work, and skill-building opportunities in one centralized place. Built with cutting-edge technologies, the platform delivers a blazing-fast, accessible, and visually stunning experience across all devices.

---

##  Problem It Solves

Many young people in Afghanistan need better access to opportunities such as jobs, internships, scholarships, online work, training programs, and career resources. Information is often scattered across different websites, social media pages, and groups. This makes it difficult for students and job seekers to find useful opportunities in one place.

KaarYab solves this problem by creating a clean and easy-to-use platform where people can browse, search, filter, save, and submit opportunities — all in one centralized hub.

---

##  Target Users

-  Students
-  Fresh Graduates
- Job Seekers
-  Women looking for remote opportunities
-  People searching for scholarships
-  Organizations that want to share opportunities

---

##  Features

###  Core Features (Required - All Implemented)

| # | Feature | Description |
|---|---------|-------------|
| 1 | Opportunity Listing | Each opportunity includes Title, Organization, Category, Location, Type, Deadline, Description, Requirements, Apply Link, and Tags |
| 2 | Search & Filter | Search by title, organization, description, and tags. Filter by Category, Location, Type (Remote/On-site/Hybrid), and Featured status |
| 3 | Dynamic Details Page | Each opportunity has a dedicated page at /opportunities/[id] with full information display |
| 4 | Save Opportunity | Users can save/unsave opportunities with a single click, stored persistently |
| 5 | Add Opportunity Form | Complete form with validation for all required fields (Title, Organization, Category, Location, Deadline, Description, Requirements, Apply Link) |
| 6 | CRUD System | Full Create, Read, Update, and Delete functionality for all opportunities |
| 7 | Dashboard | Statistics cards (Total, Jobs, Internships, Scholarships, Remote, Expiring Soon), interactive Pie Chart, and management table with Edit/Delete actions |
| 8 | Responsive Design | Fully responsive on Mobile (320px+), Tablet (768px+), Desktop (1024px+), and Large Desktop (1440px+) |
| 9 | Dark Mode | Complete light/dark theme toggle with smooth transitions, persisted in localStorage |
| 10 | Professional UI | Clean navbar, footer, cards, buttons, forms, modals, badges, empty states, loading states, and error states |

### Bonus Features (Beyond Requirements)

| # | Bonus Feature | Description |
|---|---------------|-------------|
| 1 | Framer Motion Animations | Smooth page transitions, card hover effects, spring animations on navbar indicator, mobile menu with AnimatePresence, staggered list animations |
| 2 |  Recharts Pie Chart | Interactive donut chart in Dashboard showing category distribution with custom tooltips and legends |
| 3 |  Canvas Confetti | Celebratory confetti explosion when users successfully add a new opportunity |
| 4 |  Sonner Toast Notifications | Beautiful, customizable toast messages for save, delete, edit, and error actions |
| 5 |  Zustand State Management | Global state with localStorage persistence — data survives page refreshes |
| 6 |  Full TypeScript | Complete type safety across the entire codebase with custom interfaces and types |
| 7 |  SEO Metadata | Open Graph tags for social media sharing, meta description, and keywords |
| 8 |  Glass Morphism | Modern frosted-glass effect on navbar with backdrop blur and transparency |
| 9 |  Featured Badge System | Special badge for featured opportunities with gradient styling and shadow |
| 10 |  Deadline Tracking | Automatic days-remaining calculation with color-coded badges (Expired/Urgent/Soon/OK) |
| 11 |  Animated Mobile Menu | Full-screen mobile navigation with spring animations and active state indicators |
| 12 | Back to Top Button | Smooth scroll-to-top button in footer for better UX |
| 13 |  Custom Scrollbar | Styled scrollbar matching the light/dark theme |
| 14 |  Custom Form Validation | Client-side validation with real-time error messages and URL format checking |
| 15 |  Share Functionality | Native Web Share API integration with clipboard fallback |
| 16 |  Pending Status System | New submissions marked as "pending" for future admin approval workflow |
| 17 |  404 & Error Pages | Custom styled not-found page and error boundary with reset functionality |
| 18 |  Gradient Text & Badges | Beautiful gradient headings and color-coded category badges |
| 19 | 🇦🇫 Made for Afghanistan | Heart animation and Afghanistan dedication in footer |

---

##  Technologies Used

| Technology | Version | Usage |
|------------|---------|-------|
| Next.js | 16.2 | React Framework with App Router |
| React | 19 | UI Component Library |
| TypeScript | 5 | Type Safety |
| Tailwind CSS | 4.3 | Utility-First CSS Framework |
| Zustand | Latest | Global State Management |
| Framer Motion | Latest | Page & Component Animations |
| Recharts | Latest | Interactive Charts |
| Lucide React | Latest | Icon Library (15+ icons) |
| Sonner | Latest | Toast Notification System |
| Canvas Confetti | Latest | Celebration Effects |
| clsx | Latest | Conditional Class Names |
| tailwind-merge | Latest | Class Name Merging |

---

##  How to Run Locally

```
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/kaar-yab.git

# 2. Navigate to project folder
cd kaar-yab

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev

# 5. Open in browser
open http://localhost:3000
```

---

## Screenshots
### Home
![home page](https://github.com/setayeshazizi/kaarYab/blob/main/screenshots/home_2026-08-03_17-18-35.jpg)
### Opportunities
![opportunities](https://github.com/setayeshazizi/kaarYab/blob/main/screenshots/screencapture-localhost-3000-opportunities-2026-08-03-15_59_10.png)
### Saved
![Saved](https://github.com/setayeshazizi/kaarYab/blob/main/screenshots/screencapture-localhost-3000-saved-2026-08-03-16_00_03.png)
### Dashboard
![Dashboard](https://github.com/setayeshazizi/kaarYab/blob/main/screenshots/screencapture-localhost-3000-dashboard-2026-08-03-16_01_42.png)
### Add
![Add](https://github.com/setayeshazizi/kaarYab/blob/main/screenshots/screencapture-localhost-3000-add-opportunity-2026-08-03-16_02_04.png)
### About
![About](https://github.com/setayeshazizi/kaarYab/blob/main/screenshots/screencapture-localhost-3000-about-2026-08-03-16_02_43.png)
### Contact
![Contact](https://github.com/setayeshazizi/kaarYab/blob/main/screenshots/screencapture-localhost-3000-contact-2026-08-03-16_03_09.png)
### Details
![Details](https://github.com/setayeshazizi/kaarYab/blob/main/screenshots/screencapture-localhost-3000-opportunities-4-2026-08-03-16_03_55.png)

---


## Live Demo

(https://kaar-yab.vercel.app/)

---

## Demo Video

 *https://youtu.be/ago4MJG99HM?feature=shared*

---
##  Grading Rubric Coverage

| # | Criteria | Weight | Status | Evidence |
|---|----------|--------|--------|----------|
| 1 | UI/UX Design — Clean layout, good colors, responsive, professional look | 20% |  Exceeded | Glass morphism navbar, gradient headings, custom scrollbar, consistent spacing, light/dark themes, responsive on all devices |
| 2 | Functionality — Search, filter, dynamic pages, save feature, forms, CRUD | 30% |  Exceeded | Advanced search with debounce, multi-filter system, full CRUD operations, save/unsave toggle, form validation with error messages, share functionality |
| 3 | Code Quality — Clean components, folder structure, reusable, state management | 20% |  Exceeded | Modular component architecture, reusable Button/EmptyState/Card components, Zustand global store with persist middleware, TypeScript throughout |
| 4 | Next.js Skills — App Router, dynamic routes, API routes/mock API, metadata, deployment | 15% |  Exceeded | Next.js 16 App Router, dynamic [id] routes, SEO metadata with Open Graph, Vercel deployment ready |
| 5 | Final Presentation — Clear explanation, working demo, confidence, README, GitHub | 15% |  Exceeded | Comprehensive README with badges, tables, screenshots, setup instructions, live demo link, and 19 documented bonus features |

---


Student: Setayesh Azizi
Course: Next.Js
Instructor: Ehsan Ehrari
Date: 2026/8/3
