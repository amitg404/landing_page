import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, signInWithGoogle, saveBetaSignup } from './lib/firebase';

// Backgrounds
import Threads from './components/backgrounds/Threads';
import Prism from './components/backgrounds/Prism';
import Iridescence from './components/backgrounds/Iridescence';

// Sections
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
  const [user, setUser] = useState<User | null>(null);

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
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

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Hero Section - First scrollable section with background */}
        <section className="relative w-full h-screen snap-start snap-always overflow-hidden flex flex-col items-center justify-center">
          {/* Background for this section only */}
          <div className="absolute inset-0 z-0">
            {viewMode === 'default' && (
              <Threads color={[0.2, 0.2, 0.8]} amplitude={0.6} distance={0.2} />
            )}
            {viewMode === 'students' && (
              <Prism
                animationType="rotate"
                timeScale={0.5}
                height={3.5}
                baseWidth={5.5}
                scale={3.6}
                noise={0}
                glow={1}
              />
            )}
            {viewMode === 'doctors' && (
              <Iridescence color={[0.6, 0.8, 0.8]} mouseReact={false} amplitude={0.1} speed={0.7} />
            )}
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src={viewMode === 'students' ? '/medvora_logo_white.png' : '/medvora_logo.png'}
              alt="Medvora"
              className="w-[300px] h-[300px] object-contain"
            />
            <p
              className={`text-2xl md:text-3xl font-medium text-center max-w-3xl px-4 mt-6 ${
                viewMode === 'students' ? 'text-white' : 'text-gray-800'
              }`}
            >
              Personalized Clinical AI Assistant for Doctors and Medical Students
            </p>
          </div>
        </section>

        {/* Navigation Section */}
        <NavSection viewMode={viewMode} onModeChange={setViewMode} />

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
      </div>

      {/* Login button - fixed top right */}
      {!user && (
        <button
          onClick={handleLogin}
          className="fixed top-6 right-6 z-50 btn-primary"
        >
          Login
        </button>
      )}
    </div>
  );
}

export default App;
