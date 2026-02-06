import { useRef, useEffect, useState, CSSProperties } from 'react';

type ViewMode = 'default' | 'students' | 'doctors';

interface NavTabsProps {
  activeMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

// Inline glare hover effect component for buttons
function GlareButton({ 
  children, 
  onClick, 
  isActive, 
  buttonRef,
  className 
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  isActive: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>;
  className: string;
}) {
  const glareRef = useRef<HTMLDivElement>(null);
  
  const animateIn = () => {
    const el = glareRef.current;
    if (!el || isActive) return;
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%';
    requestAnimationFrame(() => {
      el.style.transition = '1500ms ease';
      el.style.backgroundPosition = '200% 200%';
    });
  };

  const animateOut = () => {
    const el = glareRef.current;
    if (!el || isActive) return;
    el.style.transition = '400ms ease';
    el.style.backgroundPosition = '-100% -100%';
  };

  const glareStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    background: `linear-gradient(
      -45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 60%
    )`,
    backgroundSize: '250% 250%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-100% -100%',
    pointerEvents: 'none',
    opacity: isActive ? 0 : 1,
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      className={className}
    >
      {/* Glare overlay */}
      <div ref={glareRef} style={glareStyle} />
      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default function NavTabs({ activeMode, onModeChange }: NavTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const studentsRef = useRef<HTMLButtonElement>(null);
  const doctorsRef = useRef<HTMLButtonElement>(null);
  
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Update indicator position when activeMode changes
  useEffect(() => {
    const updateIndicator = () => {
      const container = containerRef.current;
      const studentsBtn = studentsRef.current;
      const doctorsBtn = doctorsRef.current;
      
      if (!container || !studentsBtn || !doctorsBtn) return;
      
      let targetBtn: HTMLButtonElement | null = null;
      
      if (activeMode === 'students') {
        targetBtn = studentsBtn;
      } else if (activeMode === 'doctors') {
        targetBtn = doctorsBtn;
      }
      
      if (targetBtn) {
        const containerRect = container.getBoundingClientRect();
        const targetRect = targetBtn.getBoundingClientRect();
        
        setIndicatorStyle({
          left: targetRect.left - containerRect.left,
          width: targetRect.width,
          opacity: 1,
        });
      } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
      }
    };

    updateIndicator();
    
    // Also update on resize
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeMode]);

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center gap-2 md:gap-3 p-2 rounded-xl bg-transparent"
    >
      {/* Animated sliding indicator */}
      <div
        className="absolute top-2 bottom-2 rounded-xl bg-[#3333CC] shadow-[0_4px_16px_rgba(51,51,204,0.5)] pointer-events-none"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          opacity: indicatorStyle.opacity,
          transition: 'left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease-out, opacity 0.3s ease',
        }}
      />
      
      <GlareButton
        buttonRef={studentsRef}
        onClick={() => onModeChange('students')}
        isActive={activeMode === 'students'}
        className={`relative z-10 overflow-hidden px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 xl:px-16 xl:py-8 text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold rounded-xl transition-colors duration-300 ${
          activeMode === 'students'
            ? 'text-white'
            : 'text-gray-800'
        }`}
      >
        For Students
      </GlareButton>

      <GlareButton
        buttonRef={doctorsRef}
        onClick={() => onModeChange('doctors')}
        isActive={activeMode === 'doctors'}
        className={`relative z-10 overflow-hidden px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 xl:px-16 xl:py-8 text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold rounded-xl transition-colors duration-300 ${
          activeMode === 'doctors'
            ? 'text-white'
            : 'text-gray-800'
        }`}
      >
        For Doctors
      </GlareButton>
    </div>
  );
}
