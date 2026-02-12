import { useState, useEffect, useCallback } from "react";
import GradientText from "./components/ui/GradientText";
import FloatingCTA from "./components/ui/FloatingCTA";

// Backgrounds
import Particles from "./components/backgrounds/Particles";

// Sections
import NavSection from "./components/sections/NavSection";
import AboutSection from "./components/sections/AboutSection";
import EndorsedBySection from "./components/sections/EndorsedBySection";
import TeamSection from "./components/sections/TeamSection";
import HelpStudentsSection from "./components/sections/HelpStudentsSection";
import HelpDoctorsSection from "./components/sections/HelpDoctorsSection";
import ProductGallerySection from "./components/sections/ProductGallerySection";
import PartnersSection from "./components/sections/PartnersSection";
import DemoVideoSection from "./components/sections/DemoVideoSection";
import ComplianceSection from "./components/sections/ComplianceSection";
import EarlyAccessSection from "./components/sections/EarlyAccessSection";
import ShowInterestSection from "./components/sections/ShowInterestSection";

type ViewMode = "default" | "students" | "doctors";

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("default");
  const [isScrolled, setIsScrolled] = useState(false);
  const [visitedModes, setVisitedModes] = useState<ViewMode[]>(["default"]);

  // Browser history support
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "students" || hash === "doctors") {
      setViewMode(hash);
      setVisitedModes(["default", hash]);
      window.history.replaceState(
        { viewMode: hash, visitedModes: ["default", hash] },
        "",
      );
    } else {
      window.history.replaceState(
        { viewMode: "default", visitedModes: ["default"] },
        "",
      );
    }

    const handlePopState = (event: PopStateEvent) => {
      const mode = event.state?.viewMode || "default";
      const visited = event.state?.visitedModes || ["default"];
      setViewMode(mode);
      setVisitedModes(visited);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Mode change handler
  const handleModeChange = useCallback(
    (mode: ViewMode) => {
      setViewMode(mode);
      const hash = mode === "default" ? "" : `#${mode}`;

      if (visitedModes.includes(mode)) {
        const modeIndex = visitedModes.indexOf(mode);
        const newVisited = visitedModes.slice(0, modeIndex + 1);
        setVisitedModes(newVisited);
        window.history.replaceState(
          { viewMode: mode, visitedModes: newVisited },
          "",
          hash || window.location.pathname,
        );
      } else {
        const newVisited = [...visitedModes, mode];
        setVisitedModes(newVisited);
        window.history.pushState(
          { viewMode: mode, visitedModes: newVisited },
          "",
          hash || window.location.pathname,
        );
      }
    },
    [visitedModes],
  );

  // Logo click - scroll to top
  const handleLogoClick = useCallback(() => {
    handleModeChange("default");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [handleModeChange]);

  // Track scroll position for logo visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        {/* White background for all tabs */}
        <div className="absolute inset-0 bg-[#f5f5f5]" />
        
        {/* Particles overlay */}
        <Particles
          className="absolute inset-0"
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={['#3333cc']}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      {/* Hero Section - First section with centered logo */}
      <section className="relative z-10 w-full h-screen flex items-center justify-center px-4">
        {viewMode === "default" ? (
          <div className="flex flex-col items-center gap-6 md:gap-8">
            <img
              src="/medvora_logo.png"
              alt="Medvora"
              className="w-[220px] h-auto sm:w-[300px] md:w-[380px] lg:w-[480px] xl:w-[560px] pointer-events-none"
            />
            <div className="flex flex-col items-center gap-2 md:gap-3 pointer-events-none px-4 md:px-6 max-w-4xl">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-center text-[#3b3b3b]">
                Personalized Clinical AI Assistant for Doctors
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-center text-[#3b3b3b]">
                Empowering Medical Students with AI enabled learning
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 lg:gap-8 px-4">
            <img
              src="/medvora_logo.png"
              alt="Medvora"
              className="w-[220px] h-auto sm:w-[300px] md:w-[380px] lg:w-[480px] xl:w-[560px] pointer-events-none"
            />
            <GradientText
              colors={["#949494", "#b0b0b0", "#3333CC"]}
              animationSpeed={4}
              showBorder={false}
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold pointer-events-none text-center md:text-left -mt-2 md:mt-0"
            >
              {viewMode === "students" ? "For Students" : "For Doctors"}
            </GradientText>
          </div>
        )}
      </section>

      {/* Small logo - top left, fades in when scrolled */}
      <div
        className={`fixed top-1 left-1 md:top-1.5 md:left-1.5 z-50 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Solid white blur background for maximum logo visibility */}
        <div className="absolute inset-0 bg-white blur-lg rounded-full" />
        
        <img
          src="/medvora_logo.png"
          alt="Medvora"
          onClick={handleLogoClick}
          className="relative z-10 w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Top fade overlay */}
      <div
        className={`fixed top-0 left-0 right-0 h-32 z-40 pointer-events-none transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}
        style={{
          background: "linear-gradient(to bottom, rgba(245,245,245,0.98) 0%, rgba(245,245,245,0.7) 50%, transparent 100%)",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 pb-24 md:pb-32">
        {/* Navigation Section */}
        <NavSection viewMode={viewMode} onModeChange={handleModeChange} />

        {/* Content sections based on mode */}
        {viewMode === "default" && (
          <div className="space-y-16 md:space-y-24">
            <AboutSection />
            <EndorsedBySection />
            <TeamSection />
          </div>
        )}

        {viewMode === "students" && (
          <div className="space-y-16 md:space-y-24">
            <HelpStudentsSection />
            <ProductGallerySection />
            <PartnersSection />
            <EarlyAccessSection />
          </div>
        )}

        {viewMode === "doctors" && (
          <div className="space-y-16 md:space-y-24">
            <HelpDoctorsSection />
            <DemoVideoSection />
            <ComplianceSection />
            <ShowInterestSection />
          </div>
        )}
      </div>

      {/* Floating CTA button */}
      <FloatingCTA currentMode={viewMode} onNavigate={handleModeChange} />
    </div>
  );
}

export default App;
