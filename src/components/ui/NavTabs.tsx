import { useRef, useEffect, useState } from 'react';

type ViewMode = 'default' | 'students' | 'doctors';

interface NavTabsProps {
  activeMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

function HoverButton({
  defaultText,
  hoverText,
  onClick,
  isActive,
  buttonRef,

}: {
  defaultText: string;
  hoverText: string;
  onClick: () => void;
  isActive: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative z-10 overflow-hidden rounded-xl transition-all duration-300 cursor-pointer
        px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-5 xl:px-14 xl:py-6
        text-sm md:text-base lg:text-xl xl:text-2xl font-semibold
        ${isActive
          ? 'bg-[#3333CC] text-white shadow-[0_4px_12px_rgba(51,51,204,0.3)]'
          : 'bg-white text-[#1c1c1c] border-2 border-[#dedede] hover:border-[#b0b0b0] shadow-[0_2px_4px_rgba(0,0,0,0.05)]'
        }
        ${!isActive ? 'hover:-translate-y-[2px]' : ''}
      `}
      style={{ minWidth: isActive ? undefined : '100px' }}
    >
      <div className="relative overflow-hidden" style={{ height: '1.4em' }}>
        {/* Default text */}
        <span
          className="block transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            transform: isHovered && !isActive ? 'translateY(-100%)' : 'translateY(0)',
            opacity: isHovered && !isActive ? 0 : 1,
          }}
        >
          {defaultText}
        </span>
        {/* Hover text */}
        <span
          className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            transform: isHovered && !isActive ? 'translateY(0)' : 'translateY(100%)',
            opacity: isHovered && !isActive ? 1 : 0,
          }}
        >
          {hoverText}
        </span>
      </div>
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

    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeMode]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-3 md:gap-4 p-2 overflow-hidden rounded-2xl"
    >
      {/* Animated sliding indicator (behind the active button) */}
      <div
        className="absolute top-2 bottom-2 rounded-xl bg-[#3333CC] shadow-[0_4px_16px_rgba(51,51,204,0.5)] pointer-events-none"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          opacity: indicatorStyle.opacity,
          transition: 'left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease-out, opacity 0.3s ease',
          maxWidth: '100%', // Prevent overflow
        }}
      />

      <HoverButton
        buttonRef={studentsRef}
        onClick={() => onModeChange('students')}
        isActive={activeMode === 'students'}
        defaultText="Students"
        hoverText="Students"
      />

      <HoverButton
        buttonRef={doctorsRef}
        onClick={() => onModeChange('doctors')}
        isActive={activeMode === 'doctors'}
        defaultText="Doctors"
        hoverText="Doctors"
      />
    </div>
  );
}
