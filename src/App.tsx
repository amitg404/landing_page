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
      <section className="relative z-10 w-full h-screen flex items-center justify-center">
        {viewMode === "default" ? (
          <div className="flex flex-col items-center">
            <img
              src="/medvora_logo.png"
              alt="Medvora"
              className="w-[180px] h-auto md:w-[240px] lg:w-[280px] xl:w-[320px] pointer-events-none"
            />
            <div className="flex flex-col items-center gap-0 mt-[20px] pointer-events-none px-4 md:px-6">
              <GradientText
                colors={["#3333CC", "#8989e1", "#3333CC"]}
                animationSpeed={3}
                showBorder={false}
                className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium text-center max-w-4xl"
              >
                Personalized Clinical AI Assistant for Doctors
              </GradientText>
              <GradientText
                colors={["#3333CC", "#8989e1", "#3333CC"]}
                animationSpeed={3}
                showBorder={false}
                className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium text-center max-w-4xl"
              >
                Empowering Medical Students with AI enabled learning
              </GradientText>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-0 md:gap-4 lg:gap-6 px-4">
            <img
              src="/medvora_logo.png"
              alt="Medvora"
              className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] object-contain pointer-events-none"
            />
            <GradientText
              colors={["#949494", "#b0b0b0", "#3333CC"]}
              animationSpeed={4}
              showBorder={false}
              className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pointer-events-none text-center md:text-left -mt-6 md:mt-0"
            >
              {viewMode === "students" ? "For Students" : "For Doctors"}
            </GradientText>
          </div>
        )}
      </section>

      {/* Small logo - top left, fades in when scrolled */}
      <div
        className={`fixed top-4 left-4 md:top-6 md:left-6 z-50 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <img
          src="/medvora_logo.png"
          alt="Medvora"
          onClick={handleLogoClick}
          className="w-16 h-16 md:w-24 md:h-24 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Top fade overlay */}
      <div
        className={`fixed top-0 left-0 right-0 h-24 z-40 pointer-events-none transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
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
