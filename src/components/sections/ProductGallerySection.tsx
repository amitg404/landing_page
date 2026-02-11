import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedContent from '../ui/AnimatedContent';
import Section from '../layout/Section';

const products = [
  { id: 1, image: '/product1.png', alt: 'Medvora Dashboard Interface' },
  { id: 2, image: '/product2.png', alt: 'AI Diagnostic Analysis' },
  { id: 3, image: '/product3.png', alt: 'Patient Management System' },
  { id: 4, image: '/product4.png', alt: 'Mobile App View' },
];

export default function ProductGallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  }, []);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextImage]);

  // Calculate indices for circular display
  const getIndex = (offset: number) => {
    return (activeIndex + offset + products.length) % products.length;
  };

  const prevIndex = getIndex(-1);
  const nextIndex = getIndex(1);

  return (
    <Section id="product-gallery" className="bg-transparent py-12 md:py-20 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={0.9}
          threshold={0.1}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1c1c1c] text-center">
            Product Gallery
          </h2>
        </AnimatedContent>

        <div 
          className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center p-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel Container */}
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            <AnimatePresence initial={false} mode="popLayout">
              {/* Previous Image (Left, Blurred) */}
              <motion.div
                key={`prev-${products[prevIndex].id}`}
                layoutId={`img-${products[prevIndex].id}`}
                initial={{ x: '-100%', scale: 0.8, opacity: 0 }}
                animate={{ 
                  x: '-60%', 
                  scale: 0.85, 
                  opacity: 0.5,
                  zIndex: 1,
                  filter: 'blur(4px)'
                }}
                exit={{ x: '-100%', opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-[60%] md:w-[50%] aspect-video rounded-xl overflow-hidden cursor-pointer hidden md:block"
                onClick={prevImage}
                style={{ left: '50%', x: '-60%' }} // Initial position override
              >
                 <img
                  src={products[prevIndex].image}
                  alt={products[prevIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/20" />
              </motion.div>

              {/* Next Image (Right, Blurred) */}
              <motion.div
                key={`next-${products[nextIndex].id}`}
                layoutId={`img-${products[nextIndex].id}`}
                initial={{ x: '100%', scale: 0.8, opacity: 0 }}
                animate={{ 
                  x: '60%', 
                  scale: 0.85, 
                  opacity: 0.5,
                  zIndex: 1,
                  filter: 'blur(4px)'
                }}
                exit={{ x: '100%', opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-[60%] md:w-[50%] aspect-video rounded-xl overflow-hidden cursor-pointer hidden md:block"
                onClick={nextImage}
                style={{ right: '50%', x: '60%' }} // Initial position override
              >
                <img
                  src={products[nextIndex].image}
                  alt={products[nextIndex].alt}
                  className="w-full h-full object-cover"
                />
                 <div className="absolute inset-0 bg-white/20" />
              </motion.div>

              {/* Active Image (Center, Clear) */}
              <motion.div
                key={`active-${products[activeIndex].id}`}
                layoutId={`img-${products[activeIndex].id}`}
                initial={{ scale: 0.85, opacity: 0.5, filter: 'blur(4px)' }}
                animate={{ 
                  x: 0, 
                  scale: 1, 
                  opacity: 1, 
                  zIndex: 10,
                  filter: 'blur(0px)'
                }}
                exit={{ scale: 0.85, opacity: 0.5, filter: 'blur(4px)' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-[90%] md:w-[70%] aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white border border-[#dedede]"
              >
                <img
                  src={products[activeIndex].image}
                  alt={products[activeIndex].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows on Active Image */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-[#3333CC] shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95 group"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-[#3333CC] shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95 group"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-10 bg-[#3333CC]'
                  : 'w-2 bg-[#dedede] hover:bg-[#b0b0b0]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
