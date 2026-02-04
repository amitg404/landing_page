import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Section from '../layout/Section';
import Threads from '../backgrounds/Threads';
import Prism from '../backgrounds/Prism';
import Iridescence from '../backgrounds/Iridescence';

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
      {/* Background based on mode */}
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

      {/* Logo and tagline - centered and positioned higher */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20">
        <div className="w-[300px] h-[300px] mb-6">
          <img src="/medvora_logo.png" alt="Medvora" className="w-full h-full object-contain" />
        </div>
        <p className={`text-2xl md:text-3xl font-medium text-center max-w-3xl px-4 ${
          viewMode === 'students' ? 'text-white' : 'text-gray-800'
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
