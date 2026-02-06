import { useState, useEffect } from 'react';

type ViewMode = 'default' | 'students' | 'doctors';

interface FloatingCTAProps {
  currentMode: ViewMode;
  onNavigate: (mode: ViewMode) => void;
}

export default function FloatingCTA({ currentMode, onNavigate }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Timer cycle: hidden 5s → visible 3s → repeat
  useEffect(() => {
    if (currentMode === 'default') {
      setIsVisible(false);
      return;
    }

    let showTimeout: ReturnType<typeof setTimeout>;
    let hideTimeout: ReturnType<typeof setTimeout>;
    let mounted = true;

    const startCycle = () => {
      // Wait 5 seconds, then show
      showTimeout = setTimeout(() => {
        if (!mounted) return;
        setIsVisible(true);
        
        // After 3 seconds, hide
        hideTimeout = setTimeout(() => {
          if (!mounted) return;
          setIsVisible(false);
          
          // Start next cycle after hiding
          startCycle();
        }, 3000);
      }, 5000);
    };

    startCycle();

    return () => {
      mounted = false;
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [currentMode]);

  // Don't render in default mode
  if (currentMode === 'default') return null;

  const isStudentMode = currentMode === 'students';

  const handleClick = () => {
    const targetMode = isStudentMode ? 'doctors' : 'students';
    onNavigate(targetMode);
    
    // Scroll to the top of the page (section 1) after a brief delay for mode change
    setTimeout(() => {
      const container = document.querySelector('.snap-y');
      if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 
        cursor-pointer group
        bg-white/95 backdrop-blur-sm
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
        border border-gray-100
        p-3 md:p-4
        max-w-[180px] md:max-w-[220px]
        transform hover:-translate-y-1
        transition-all duration-500 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      {/* Text content */}
      <p className="text-xs md:text-sm text-gray-600 mb-2 leading-snug">
        {isStudentMode 
          ? 'See how we help doctors streamline clinical workflows'
          : 'Empower your medical journey with AI-driven learning'
        }
      </p>
      
      {/* CTA Button */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs md:text-sm font-semibold text-[#3333CC] group-hover:text-[#24248f] transition-colors">
          {isStudentMode ? 'For Doctors' : 'For Students'}
        </span>
        <span className="text-[#3333CC] group-hover:translate-x-0.5 transition-transform text-sm md:text-base">
          →
        </span>
      </div>
    </div>
  );
}
