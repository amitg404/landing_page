import { useState, useEffect, useCallback } from 'react';

type ViewMode = 'default' | 'students' | 'doctors';

interface FloatingCTAProps {
  currentMode: ViewMode;
  onNavigate: (mode: ViewMode) => void;
}

export default function FloatingCTA({ currentMode, onNavigate }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Detect if form is open by checking for form elements with MutationObserver
  useEffect(() => {
    const checkForm = () => {
      const form = document.querySelector('form');
      setIsFormOpen(!!form);
    };
    
    // Initial check
    checkForm();
    
    // Watch for DOM changes
    const observer = new MutationObserver(checkForm);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);

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

  const handleClick = useCallback(() => {
    const targetMode = currentMode === 'students' ? 'doctors' : 'students';
    onNavigate(targetMode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentMode, onNavigate]);

  // Don't render in default mode or when form is open
  if (currentMode === 'default') return null;
  
  // Hide completely when form is open
  if (isFormOpen) return null;

  const isStudentMode = currentMode === 'students';

  return (
    <div
      onClick={handleClick}
      className={`fixed bottom-6 right-4 md:bottom-8 md:right-6 z-30 
        cursor-pointer group
        bg-white/80 backdrop-blur-sm
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
        border border-gray-100
        p-3 md:p-4
        w-[160px] md:w-[200px]
        transform hover:-translate-y-1
        transition-all duration-500 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      {/* Text content */}
      <p className="text-[10px] md:text-xs text-gray-600 mb-2 leading-snug line-clamp-2">
        {isStudentMode 
          ? 'See how we help doctors'
          : 'AI-powered learning for students'
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
