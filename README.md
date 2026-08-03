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

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/kaar-yab.git

# 2. Navigate to project folder
cd kaar-yab

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev

# 5. Open in browser
open http://localhost:3000```

---

## Screenshots
### Cart Page
![empty cart page](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-cart-2026-04-24-19_57_39.png)
![Cart](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-cart-2026-04-24-19_52_53.png)

### Product Details
![Details](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-product-4-2026-04-24-20_41_10.png)
![Details light theme](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-product-3-2026-04-24-19_53_30.png)

### Checkout Flow
![Checkout1](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-checkout-2026-04-24-19_54_56.png)
![Checkout2](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-checkout-2026-04-24-19_55_45.png)
![Checkout3](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-checkout-2026-04-24-19_56_10.png)
![Checkout4](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-checkout-2026-04-24-21_35_39%20(1).png)

---
