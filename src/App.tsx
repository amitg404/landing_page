import { useState, useEffect } from 'react';
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
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
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

      {/* Login button - fixed top right, appears after scroll */}
      {scrollProgress > 0.1 && !user && (
        <button
          onClick={handleLogin}
          className="fixed top-6 right-6 z-50 btn-primary"
        >
          Login
        </button>
      )}

      {/* Logo - fixed top left after scroll */}
      {scrollProgress > 0.5 && (
        <div className="fixed top-6 left-6 z-50 w-12 h-12">
          <img src="/medvora_logo.png" alt="Medvora" className="w-full h-full object-contain" />
        </div>
      )}
    </div>
  );
}

export default App;
