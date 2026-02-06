import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  scrollProgress: number;
}

export default function Header({ scrollProgress }: HeaderProps) {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // Show header when scrolled past first section
    setShowHeader(scrollProgress > 0.1);
  }, [scrollProgress]);

  // Logo size and position based on scroll
  const logoSize = Math.max(48, 200 - scrollProgress * 152); // 200px -> 48px
  const logoX = scrollProgress > 0.5 ? 0 : (0.5 - scrollProgress) * 100; // Center -> Left
  const logoY = scrollProgress > 0.5 ? 0 : (0.5 - scrollProgress) * 100; // Center -> Top

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between"
        >
          <motion.div
            style={{
              width: logoSize,
              height: logoSize,
              x: `${logoX}vw`,
              y: `${logoY}vh`
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <img
              src="/medvora_logo.png"
              alt="Medvora"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
