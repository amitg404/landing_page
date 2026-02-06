import { useState, useEffect, useCallback } from 'react';
import GradientText from './components/ui/GradientText';
import FloatingCTA from './components/ui/FloatingCTA';


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
  const [isScrolled, setIsScrolled] = useState(false);

  // Track visited modes for simplified back navigation
  const [visitedModes, setVisitedModes] = useState<ViewMode[]>(['default']);

  // Browser history support - handle back/forward navigation
  useEffect(() => {
    // Initialize from URL hash on mount
    const hash = window.location.hash.replace('#', '');
    if (hash === 'students' || hash === 'doctors') {
      setViewMode(hash);
      setVisitedModes(['default', hash]);
      window.history.replaceState({ viewMode: hash, visitedModes: ['default', hash] }, '');
    } else {
      window.history.replaceState({ viewMode: 'default', visitedModes: ['default'] }, '');
    }

    const handlePopState = (event: PopStateEvent) => {
      const mode = event.state?.viewMode || 'default';
      const visited = event.state?.visitedModes || ['default'];
      setViewMode(mode);
      setVisitedModes(visited);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Mode change handler with simplified history (each page only once)
  const handleModeChange = useCallback((mode: ViewMode) => {
    setViewMode(mode);
    const hash = mode === 'default' ? '' : `#${mode}`;
    
    // Check if this mode was already visited
    if (visitedModes.includes(mode)) {
      // Go back to this mode - pop forward entries by replacing
      const modeIndex = visitedModes.indexOf(mode);
      const newVisited = visitedModes.slice(0, modeIndex + 1);
      setVisitedModes(newVisited);
      window.history.replaceState({ viewMode: mode, visitedModes: newVisited }, '', hash || window.location.pathname);
    } else {
      // New mode - push to history
      const newVisited = [...visitedModes, mode];
      setVisitedModes(newVisited);
      window.history.pushState({ viewMode: mode, visitedModes: newVisited }, '', hash || window.location.pathname);
    }
  }, [visitedModes]);

  // Logo click handler - go to home/default and scroll to top
  const handleLogoClick = useCallback(() => {
    handleModeChange('default');
    // Scroll to top
    const container = document.querySelector('.snap-y');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [handleModeChange]);

  // Scroll tracking - simple boolean for logo position
  useEffect(() => {
    const container = document.querySelector('.snap-y');
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = (container as HTMLElement).scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Fixed Background Layer - visible across all sections */}
      <div className="fixed inset-0 z-0">
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

      {/* Logo - switches between center and top-left instantly */}
      {!isScrolled ? (
        // Hero logo - layout varies by mode
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          {viewMode === 'default' ? (
            // Default mode: centered logo with description text below
            <div className="flex flex-col items-center">
              <img
                src="/medvora_logo.png"
                alt="Medvora"
                onClick={handleLogoClick}
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
              />
              <GradientText
                colors={['#3333CC', '#8989e1', '#3333CC']}
                animationSpeed={3}
                showBorder={false}
                className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium text-center max-w-4xl px-4 md:px-6 -mt-12 pointer-events-none"
              >
                Personalized Clinical AI Assistant for Doctors and Medical Students
              </GradientText>
            </div>
          ) : (
            // Students/Doctors mode: logo on left with mode label beside it
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-4 lg:gap-6 px-4">
              <img
                src={viewMode === 'students' ? '/medvora_logo_white.png' : '/medvora_logo.png'}
                alt="Medvora"
                onClick={handleLogoClick}
                className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
              />
              <GradientText
                colors={viewMode === 'students' 
                  ? ['#ffffff', '#FF8C00', '#ffffff'] 
                  : ['#ffffff', '#000000', '#3333CC']
                }
                animationSpeed={4}
                showBorder={false}
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pointer-events-none text-center md:text-left -mt-6 md:mt-0"
              >
                {viewMode === 'students' ? 'For Students' : 'For Doctors'}
              </GradientText>
            </div>
          )}
        </div>
      ) : (
        // Small logo - top left
        <div className="fixed top-4 left-4 md:top-6 md:left-6 z-10">
          <img
            src={viewMode === 'students' ? '/medvora_logo_white.png' : '/medvora_logo.png'}
            alt="Medvora"
            onClick={handleLogoClick}
            className="w-20 h-20 md:w-32 md:h-32 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-20">
        {/* Hero Section - First scrollable section (spacer) */}
        <section className="relative w-full h-screen snap-start snap-always overflow-hidden" />

        {/* Navigation Section */}
        <NavSection viewMode={viewMode} onModeChange={handleModeChange} />

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
            <EarlyAccessSection />
          </>
        )}

        {viewMode === 'doctors' && (
          <>
            <HelpDoctorsSection />
            <DemoVideoSection />
            <ComplianceSection />
            <ShowInterestSection />
          </>
        )}
      </div>

      {/* Floating CTA button for mode switching */}
      <FloatingCTA currentMode={viewMode} onNavigate={handleModeChange} />


    </div>
  );
}

export default App;
