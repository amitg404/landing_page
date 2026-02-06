import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Section from '../layout/Section';

type ViewMode = 'default' | 'students' | 'doctors';

interface HeroSectionProps {
  viewMode: ViewMode;
  scrollProgress: number;
}

export default function HeroSection({ viewMode, scrollProgress }: HeroSectionProps) {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="hero">
      {/* Content - centered and positioned higher */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen pt-20">
        {/* Space for logo - it's now rendered in App.tsx as animated element */}
        <div className="w-[300px] h-[300px] mb-6" />
        
        <p className={`text-2xl md:text-3xl font-medium text-center max-w-3xl px-4 ${
          viewMode === 'students' 
            ? 'bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]' 
            : 'text-gray-800'
        }`}>
          Personalized Clinical AI Assistant for Doctors and Medical Students
        </p>
      </div>

      {/* Scroll hint */}
      {showScrollHint && scrollProgress < 0.1 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10"
        >
          <p className={`text-lg ${viewMode === 'students' ? 'text-white' : 'text-gray-600'}`}>
            ↓ Scroll to explore
          </p>
        </motion.div>
      )}
    </Section>
  );
}
