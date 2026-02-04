import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, signInWithGoogle, saveBetaSignup } from './lib/firebase';

// Sections
import HeroSection from './components/sections/HeroSection';
import NavSection from './components/sections/NavSection';
import AboutSection from './components/sections/AboutSection';
import EndorsedBySection from './components/sections/EndorsedBySection';
import TeamSection from './components/sections/TeamSection';
import HelpStudentsSection from './components/sections/HelpStudentsSection';
import HelpDoctorsSection from './components/sections/HelpDoctorsSection';
import ProductGallerySection from './components/sections/ProductGallerySection';
import PartnersSection from './components/sections/PartnersSection';
import DemoVideoSection from './components/sections/DemoVideoSection';
import ComplianceSection from './components/sections/ComplianceSection';
import EarlyAccessSection from './components/sections/EarlyAccessSection';
import ShowInterestSection from './components/sections/ShowInterestSection';
import Footer from './components/sections/Footer';

type ViewMode = 'default' | 'students' | 'doctors';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('default');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleBetaSignup = async () => {
    if (!user?.email) return;
    await saveBetaSignup(user.email, 'student_beta');
  };

  const handleDoctorInterest = async () => {
    if (!user?.email) return;
    await saveBetaSignup(user.email, 'doctor_interest');
  };

  const isDarkMode = viewMode === 'students';

  return (
    <div className="min-h-screen overflow-y-auto">
      {/* Hero Section - Always visible */}
      <HeroSection viewMode={viewMode} scrollProgress={scrollProgress} />

      {/* Navigation Section */}
      <NavSection viewMode={viewMode} onModeChange={setViewMode} isDarkMode={isDarkMode} />

      {/* Content sections based on mode */}
      {viewMode === 'default' && (
        <>
          <AboutSection />
          <EndorsedBySection />
          <TeamSection />
          <Footer />
        </>
      )}

      {viewMode === 'students' && (
        <>
          <HelpStudentsSection />
          <ProductGallerySection />
          <PartnersSection />
          <EarlyAccessSection
            isLoggedIn={!!user}
            userEmail={user?.email || null}
            onSignup={handleBetaSignup}
            onLoginRequired={handleLogin}
          />
        </>
      )}

      {viewMode === 'doctors' && (
        <>
          <HelpDoctorsSection />
          <DemoVideoSection />
          <ComplianceSection />
          <ShowInterestSection
            isLoggedIn={!!user}
            userEmail={user?.email || null}
            onShowInterest={handleDoctorInterest}
            onLoginRequired={handleLogin}
          />
        </>
      )}

      {/* Login button - fixed top right, always visible when not logged in */}
      {!user && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: scrollProgress > 0.05 ? 1 : 0, y: scrollProgress > 0.05 ? 0 : -20 }}
          onClick={handleLogin}
          className="fixed top-6 right-6 z-50 btn-primary"
        >
          Login
        </motion.button>
      )}

      {/* Logo - fixed top left after scroll */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: scrollProgress > 0.15 ? 1 : 0,
          x: scrollProgress > 0.15 ? 0 : -20
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-6 left-6 z-50 w-16 h-16"
      >
        <img src="/medvora_logo.png" alt="Medvora" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
}

export default App;
