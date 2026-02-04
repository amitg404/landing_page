# Medvora Website Specification

**Version:** 1.0  
**Created:** 2026-02-04

---

## 📋 Overview

A single-page website for Medvora with three viewing modes:

1. **Default Homepage** (White mode, Threads background)
2. **For Students** (Dark mode, Prism background)
3. **For Doctors** (White mode, Iridescence background)

### Core Behaviors

- **Snap-scroll** navigation (one full-screen section at a time)
- Each section covers **100vh** (full viewport height)
- Responsive design for mobile, tablet, and desktop
- Logo animation from center to top-left on scroll

---

## 🎨 Backgrounds & Dependencies

### Required Packages

```bash
# OGL for WebGL backgrounds
pnpm add ogl

# Motion for animations
pnpm add motion

# Firebase for authentication
pnpm add firebase
```

### Background Components

| Mode             | Background          | File                             |
| ---------------- | ------------------- | -------------------------------- |
| Default Homepage | Threads (white)     | `src/components/Threads.tsx`     |
| For Students     | Prism (dark)        | `src/components/Prism.tsx`       |
| For Doctors      | Iridescence (white) | `src/components/Iridescence.tsx` |

---

## 🖼️ Available Assets

### Logos & Branding

| Asset        | File               | Usage                |
| ------------ | ------------------ | -------------------- |
| Medvora Logo | `medvora_logo.png` | Hero section, Header |

### Endorsed By / Partners

| Asset                  | File                          |
| ---------------------- | ----------------------------- |
| Microsoft for Startups | `microsoft_for startups.webp` |
| Wadhwani Foundation    | `vadhwani_foundation.webp`    |
| Eleven Labs            | `eleven_labs.png`             |
| Block71                | `block71.avif`                |

### Partner Colleges (For Students)

| Asset       | File              |
| ----------- | ----------------- |
| IIT Dharwad | `IIT_Dharwad.svg` |
| College 1   | `college.png`     |
| College 2   | `college1.png`    |
| MMC         | `mmc.jpg`         |

### Product Screenshots (For Students)

| Asset     | File           |
| --------- | -------------- |
| Product 1 | `product1.png` |
| Product 2 | `product2.png` |
| Product 3 | `product3.png` |
| Product 4 | `product4.png` |

### Compliance (For Doctors)

| Asset | File        |
| ----- | ----------- |
| DPDP  | `dpdp.png`  |
| HIPAA | `hippa.png` |
| GDPR  | `gdpr.jpg`  |

### Team Members

| Name       | File            | Role        |
| ---------- | --------------- | ----------- |
| CEO        | `ceo.jpg`       | CEO         |
| CTO        | `cto.jpg`       | CTO         |
| Akash      | `akash.jpg`     | Team Member |
| Disha      | `disha.jpg`     | Team Member |
| Engineer 1 | `engineer1.jpg` | Engineer    |
| Engineer 2 | `engineer2.jpg` | Engineer    |

---

## 📐 Section Structure

### Default Homepage (White + Threads)

```
┌─────────────────────────────────────────┐
│         SECTION 1: Hero                 │
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │      [Medvora Logo - Center]    │    │
│  │                                 │    │
│  │   Background: Threads (white)   │    │
│  │                                 │    │
│  └─────────────────────────────────┘    │
│         ↓ Scroll to explore ↓           │
│         (fades after 2 seconds)         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         SECTION 2: Navigation           │
│  ┌─────────────────────────────────┐    │
│  │ [Logo]              [Login]     │ ← Header (appears after scroll)
│  └─────────────────────────────────┘    │
│                                         │
│  ┌──────────────┐  ┌──────────────┐     │
│  │ For Students │  │ For Doctors  │     │ ← Nav Tabs (neither selected)
│  └──────────────┘  └──────────────┘     │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│      SECTION 3: About Medvora AI        │
│                                         │
│  "About Medvora AI"                     │
│  [Placeholder content about what        │
│   Medvora does, how it works, etc.]     │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│       SECTION 4: Endorsed By            │
│                                         │
│  ← [Logo] [Logo] [Logo] [Logo] ←        │
│       (auto-scrolling marquee)          │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│       SECTION 5: Meet the Team          │
│                                         │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐            │
│  │CEO │ │CTO │ │Eng1│ │Eng2│            │
│  └────┘ └────┘ └────┘ └────┘            │
│  ┌────┐ ┌────┐                          │
│  │Aksh│ │Dish│                          │
│  └────┘ └────┘                          │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│          SECTION 6: Footer              │
│                                         │
│  © 2026 Medvora | Contact | Privacy     │
│                                         │
└─────────────────────────────────────────┘
```

---

### For Students Mode (Dark + Prism)

When "For Students" is selected:

- Background changes to **dark mode + Prism**
- Content sections change

```
SECTION 1: Hero (Dark + Prism background)
- Same Medvora logo centered
- Black background with Prism overlay

SECTION 2: Navigation
- "For Students" tab highlighted
- Login button visible

SECTION 3: How We Help Students
- Pointers/bullet points (placeholder text)
  • Reduce eye strain
  • Faster learning
  • AI-powered assistance
  • etc.

SECTION 4: Product Image Gallery
- Grid/carousel of product screenshots
  • product1.png, product2.png, product3.png, product4.png

SECTION 5: Our Partners (Colleges)
- Horizontal auto-scrolling marquee
  • IIT_Dharwad.svg, college.png, college1.png, mmc.jpg

SECTION 6: Early Access CTA
- "Early Access is out! Try the beta today"
- [Join Beta] button
  • If logged in → Store email, show confirmation
  • If not logged in → Redirect to login
```

---

### For Doctors Mode (White + Iridescence)

When "For Doctors" is selected:

- Background changes to **white mode + Iridescence**
- Content sections change

```
SECTION 1: Hero (White + Iridescence background)
- Same Medvora logo centered
- White background with Iridescence overlay

SECTION 2: Navigation
- "For Doctors" tab highlighted
- Login button visible

SECTION 3: How We Help Doctors
- Pointers with stats tiles (CountUp animation)

  Stats to display:
  ┌────────────────┐ ┌────────────────┐
  │    43.2%       │ │     65%        │
  │ Physician      │ │ Nurses under   │
  │ Burnout        │ │ extreme strain │
  └────────────────┘ └────────────────┘
  ┌────────────────┐ ┌────────────────┐
  │     47%        │ │     31%        │
  │ Personal       │ │ Work-related   │
  │ Burnout        │ │ Burnout        │
  └────────────────┘ └────────────────┘
  ┌────────────────┐ ┌────────────────┐
  │     35%        │ │    24.9%       │
  │ Patient-       │ │ Experience all │
  │ related        │ │ three forms    │
  └────────────────┘ └────────────────┘

SECTION 4: Demo Video
- Embedded YouTube video
- URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ

SECTION 5: Compliance
- Horizontal auto-scrolling marquee
  • dpdp.png, hippa.png, gdpr.jpg

SECTION 6: Show Interest CTA
- "Show your interest for early access"
- [Notify Me] button
  • If logged in → Store email, show confirmation
  • If not logged in → Redirect to login
```

---

## 🔧 Technical Implementation

### File Structure

```
src/
├── App.tsx                    # Main app with routing/state
├── index.css                  # Global styles
├── main.tsx                   # Entry point
├── components/
│   ├── backgrounds/
│   │   ├── Threads.tsx        # White mode background
│   │   ├── Prism.tsx          # Dark mode background
│   │   └── Iridescence.tsx    # Doctors mode background
│   ├── ui/
│   │   ├── CountUp.tsx        # Number animation
│   │   ├── Marquee.tsx        # Auto-scrolling carousel
│   │   ├── NavTabs.tsx        # For Students / For Doctors tabs
│   │   └── Button.tsx         # Primary/Secondary buttons
│   ├── sections/
│   │   ├── HeroSection.tsx    # Section 1
│   │   ├── NavSection.tsx     # Section 2
│   │   ├── AboutSection.tsx   # Section 3 (default)
│   │   ├── HelpStudents.tsx   # Section 3 (students)
│   │   ├── HelpDoctors.tsx    # Section 3 (doctors)
│   │   ├── EndorsedBy.tsx     # Section 4 (marquee)
│   │   ├── ProductGallery.tsx # Section 4 (students)
│   │   ├── DemoVideo.tsx      # Section 4 (doctors)
│   │   ├── TeamSection.tsx    # Section 5 (default)
│   │   ├── Partners.tsx       # Section 5 (students)
│   │   ├── Compliance.tsx     # Section 5 (doctors)
│   │   ├── EarlyAccess.tsx    # Section 6 (students)
│   │   ├── ShowInterest.tsx   # Section 6 (doctors)
│   │   └── Footer.tsx         # Section 6 (default)
│   └── layout/
│       ├── Header.tsx         # Fixed header with logo + login
│       └── Section.tsx        # Full-screen section wrapper
├── lib/
│   └── firebase.ts            # Firebase config & auth
├── hooks/
│   └── useScrollSnap.ts       # Snap scroll behavior
└── types/
    └── index.ts               # TypeScript types
```

### State Management

```typescript
type ViewMode = "default" | "students" | "doctors";

interface AppState {
  viewMode: ViewMode;
  isLoggedIn: boolean;
  userEmail: string | null;
  currentSection: number;
  showScrollHint: boolean;
}
```

### Scroll Behavior

- Use CSS `scroll-snap-type: y mandatory` for snap scrolling
- Each section has `scroll-snap-align: start`
- Logo position interpolates from center → top-left based on scroll position

### Firebase Requirements

For Firebase setup, please provide:

1. **API Key** (`apiKey`)
2. **Auth Domain** (`authDomain`)
3. **Project ID** (`projectId`)
4. **Storage Bucket** (`storageBucket`)
5. **Messaging Sender ID** (`messagingSenderId`)
6. **App ID** (`appId`)

Location: Firebase Console → Project Settings → General → Your apps → Web app

### Data Storage (For Email Collection)

We'll use Firestore to store user signups:

```typescript
// Collection: beta_signups
{
  email: string;
  timestamp: Date;
  type: "student_beta" | "doctor_interest";
}
```

---

## 🎬 Animations

### Logo Animation (Scroll-based)

```
Scroll Position 0% → Logo centered, full size (200px)
Scroll Position 50% → Logo moving to top-left, shrinking
Scroll Position 100%+ → Logo fixed at top-left (48px)
```

### Scroll Hint

- Appears at bottom of Section 1
- Text: "↓ Scroll to explore"
- Fades out after 2 seconds

### CountUp Animation

- Triggers when stats tiles come into view
- Duration: 1-2 seconds per number
- Uses spring physics for smooth animation

### Marquee

- Continuous horizontal scroll (right to left)
- Speed: ~50px/second
- No user interaction (cannot pause/stop)

---

## 🔐 Authentication Flow

### Login Button Click

1. Opens Firebase Auth popup (Google/Email)
2. On success: Store user email in state
3. Redirect back to current section

### Beta Signup (Students) / Show Interest (Doctors)

1. Check if user is logged in
2. If NOT logged in → Show login popup first
3. If logged in:
   - Store email + timestamp in Firestore
   - Show confirmation message: "Thank you for your interest! We'll send you an email regarding the beta product."

---

## 📱 Responsive Breakpoints

| Breakpoint | Width          | Adjustments                  |
| ---------- | -------------- | ---------------------------- |
| Mobile     | < 768px        | Single column, smaller fonts |
| Tablet     | 768px - 1024px | 2-column grids               |
| Desktop    | > 1024px       | Full layout                  |

---

## ✅ Implementation Checklist

### Phase 1: Foundation

- [ ] Install dependencies (ogl, motion, firebase)
- [ ] Set up background components (Threads, Prism, Iridescence)
- [ ] Create Section wrapper with snap-scroll
- [ ] Implement logo animation

### Phase 2: Default Homepage

- [ ] Hero section with Threads background
- [ ] Navigation section with tabs
- [ ] About Medvora section
- [ ] Endorsed By marquee
- [ ] Meet the Team section
- [ ] Footer

### Phase 3: For Students Mode

- [ ] Dark mode + Prism background
- [ ] How We Help Students section
- [ ] Product Gallery
- [ ] Partners marquee
- [ ] Early Access CTA

### Phase 4: For Doctors Mode

- [ ] White mode + Iridescence background
- [ ] How We Help Doctors section with stats
- [ ] Demo Video embed
- [ ] Compliance marquee
- [ ] Show Interest CTA

### Phase 5: Authentication

- [ ] Firebase setup
- [ ] Login popup
- [ ] Firestore integration for email storage
- [ ] Confirmation messages

### Phase 6: Polish

- [ ] Responsive testing
- [ ] Animation tuning
- [ ] Performance optimization
