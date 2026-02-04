# Medvora Landing Page

A single-page website for Medvora with three viewing modes: Default Homepage, For Students, and For Doctors.

## Features

- **Snap-scroll navigation** - Full-screen sections with smooth scrolling
- **Three viewing modes** with different backgrounds:
  - Default: White mode with Threads background
  - For Students: Dark mode with Prism background
  - For Doctors: White mode with Iridescence background
- **Animated logo** - Transitions from center to top-left on scroll
- **Firebase Authentication** - Google sign-in
- **Beta signups** - Email collection for early access
- **Responsive design** - Works on mobile, tablet, and desktop

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- OGL (WebGL backgrounds)
- Motion (Framer Motion)
- Firebase (Auth + Firestore)

## Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing
3. Go to Project Settings → General → Your apps
4. Copy your Firebase config values
5. Open `src/lib/firebase.ts` and replace the placeholder values:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 3. Enable Authentication

1. In Firebase Console, go to Authentication → Sign-in method
2. Enable **Google** sign-in provider

### 4. Set up Firestore

1. In Firebase Console, go to Firestore Database
2. Create database (start in production mode or test mode)
3. The app will automatically create a `beta_signups` collection

### 5. Run Development Server

```bash
pnpm dev
```

Visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── backgrounds/       # WebGL background components
│   │   ├── Threads.tsx
│   │   ├── Prism.tsx
│   │   └── Iridescence.tsx
│   ├── ui/               # Reusable UI components
│   │   ├── CountUp.tsx
│   │   ├── Marquee.tsx
│   │   └── NavTabs.tsx
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── NavSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── HelpStudentsSection.tsx
│   │   ├── HelpDoctorsSection.tsx
│   │   ├── ProductGallerySection.tsx
│   │   ├── DemoVideoSection.tsx
│   │   ├── ComplianceSection.tsx
│   │   ├── EarlyAccessSection.tsx
│   │   ├── ShowInterestSection.tsx
│   │   └── Footer.tsx
│   └── layout/           # Layout components
│       ├── Section.tsx
│       └── Header.tsx
├── lib/
│   └── firebase.ts       # Firebase configuration
├── App.tsx               # Main app component
├── index.css             # Global styles
└── main.tsx              # Entry point
```

## Assets

All images should be placed in the `public/` folder:

- `medvora_logo.png` - Main logo
- Partner logos (Microsoft, Wadhwani, etc.)
- Team member photos
- Product screenshots
- Compliance badges

## Deployment

### Build for Production

```bash
pnpm build
```

The build output will be in the `dist/` folder.

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set build command: `pnpm build`
3. Set output directory: `dist`
4. Deploy!

## Firebase Security Rules

Add these Firestore security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /beta_signups/{document} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
    }
  }
}
```

## License

© 2026 Medvora. All rights reserved.
