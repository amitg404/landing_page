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

  // Logo positioning based on scroll
  const isScrolled = scrollProgress > 0.1;
  const logoScale = isScrolled ? 0.24 : 1; // 48px / 200px = 0.24
  const logoY = isScrolled ? -45 : 0; // Move to top

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

      {/* Logo - centered initially, then moves to header */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          animate={{
            scale: logoScale,
            y: `${logoY}vh`
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="w-[200px] h-[200px]"
        >
          <img src="/medvora_logo.png" alt="Medvora" className="w-full h-full object-contain" />
        </motion.div>
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
