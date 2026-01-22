import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'motion/react';
import Threads from './components/Threads';
import GradientText from './components/GradientText';
import { supabase } from './lib/supabase';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [canInteractWithContent, setCanInteractWithContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasShownIndicator = useRef(false);
  
  const { scrollY } = useScroll();

  // Memoize mobile check to prevent unnecessary re-renders
  const isMobile = useMemo(() => windowWidth < 768, [windowWidth]);

  // Check for mobile screen size - update windowWidth state only
  useEffect(() => {
    const checkMobile = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update interaction state based on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setCanInteractWithContent(latest > 100);
  });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Logo animations based on scroll - smooth version
  const logoScale = useTransform(scrollYProgress, [0, 0.3], [1.2, 0.7]);
  const logoY = useTransform(scrollYProgress, [0, 0.3], ['0vh', '-35vh']);
  
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.4], ['50px', '0px']);
  
  // Background animations (Scale on scroll)
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  // Scroll on refresh behavior
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll indicator logic: Show once after 2s inactivity, stay for 4s, then never again
  useEffect(() => {
    if (hasShownIndicator.current) return;

    const showTimer = window.setTimeout(() => {
      setShowScrollIndicator(true);
      hasShownIndicator.current = true;
      
      // Hide after 4 seconds
      const hideTimer = window.setTimeout(() => {
        setShowScrollIndicator(false);
      }, 4000);
      
      return () => clearTimeout(hideTimer);
    }, 2000);

    const handleScroll = () => {
      if (!hasShownIndicator.current) {
        clearTimeout(showTimer);
        hasShownIndicator.current = true;
      }
      setShowScrollIndicator(false);
    };

    window.addEventListener('scroll', handleScroll, { once: true });
    
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from('medvora_signup')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: `+91${formData.phone}`
          }
        ]);

      if (error) throw error;
      console.log('Waitlist submission successful:', data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      alert('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Memoize Threads component to prevent re-renders on state changes
  const mobileThreads = useMemo(() => (
    <div style={{ width: '100%', height: '100%', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', maxWidth: '1080px', maxHeight: '1080px', opacity: 0.5 }}>
      <Threads
        color={[0.2, 0.2, 0.8]}
        amplitude={0.8}
        distance={0}
        enableMouseInteraction={false}
      />
    </div>
  ), []);

  const desktopThreads = useMemo(() => (
    <Threads
      color={[0.2, 0.2, 0.8]}
      amplitude={1}
      distance={0.4}
      enableMouseInteraction={false}
    />
  ), []);

  return (
    <div ref={containerRef} className="relative min-h-[200vh] bg-white text-[#1c1c1c] font-sans">
      {/* Fixed Background - White with Blue Threads */}
      <motion.div 
        className="fixed inset-0 bg-white origin-center"
        style={{ 
          scale: bgScale
        }}
      >
        {isMobile ? mobileThreads : desktopThreads}
      </motion.div>

      {/* Hero Section - Logo Centered */}
      <section className="fixed inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <motion.div 
          // Adjusted mobile margin to move down slightly (was -mt-12, now -mt-4)
          className="flex flex-col items-center px-4 -mt-4 md:mt-0"
          style={{ 
            scale: logoScale,
            y: logoY
          }}
        >
          <motion.img
            src="/medvora_logo.png"
            alt="Medvora.AI"
            // Reduced mobile size by ~40% (w-80 -> w-48)
            className="w-48 md:w-[28rem] lg:w-[36rem] h-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="mt-8 text-center max-w-4xl"
            style={{ opacity: taglineOpacity }}
          >
            <div className="block md:hidden">
              {/* Reduced text size but made thicker (font-black) for mobile */}
              <GradientText
                colors={['#0c1e4a', '#1e3a8a', '#3b82f6', '#1e3a8a', '#0c1e4a']}
                animationSpeed={5}
                showBorder={false}
                className="text-base font-black tracking-wide"
              >
                Personalized Clinical AI Assistant
              </GradientText>
              <GradientText
                colors={['#0c1e4a', '#1e3a8a', '#3b82f6', '#1e3a8a', '#0c1e4a']}
                animationSpeed={5}
                showBorder={false}
                className="text-base font-black tracking-wide mt-1"
              >
                For Doctors and Medical Students
              </GradientText>
            </div>
            <div className="hidden md:block whitespace-nowrap">
              <GradientText
                colors={['#0c1e4a', '#1e3a8a', '#3b82f6', '#1e3a8a', '#0c1e4a']}
                animationSpeed={5}
                showBorder={false}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide"
              >
                Personalized Clinical AI Assistant for Doctors and Medical Students
              </GradientText>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section - Coming Soon & Waitlist */}
      <motion.section 
        className={`fixed inset-0 flex flex-col items-center justify-center z-20 transition-all duration-300 ${canInteractWithContent ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Increased max-w to match tagline width on desktop */}
        <div className="mt-24 text-center px-4 w-full max-w-lg md:max-w-2xl relative">
          
          {/* Background removed as requested */}


          {/* Coming Soon Badge with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            {/* Enhanced animation with shadow pulse and text shimmer */}
            <span className="relative inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#ebebfa] border border-[#ababea] text-[#3333CC] text-xs md:text-sm font-medium backdrop-blur-sm shadow-[0_0_0_0_rgba(51,51,204,0.4)] animate-pulse-shadow overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer"></span>
              <span className="relative flex items-center">
                 <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#3333CC] rounded-full mr-2 animate-pulse"></span>
                 Coming Soon
              </span>
            </span>
          </motion.div>

          <motion.p
            // Reduced text size for mobile, one line for desktop
            className="text-[#1c1c1c] text-sm md:text-xl font-bold mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed md:whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            BE THE FIRST TO EXPERIENCE
            <br className="block md:hidden" />{' '}
            <span className="bg-gradient-to-r from-[#3333CC] via-[#5e5e98] to-[#3333CC] bg-clip-text text-transparent font-extrabold uppercase tracking-wider">
              THE FUTURE OF HEALTHCARE
            </span>
          </motion.p>

          {/* Waitlist Form */}
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="w-full mx-auto px-4 md:px-6 space-y-3 md:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  // Reduced padding and font size for mobile
                  className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/80 border-2 border-[#dedede] rounded-xl text-sm md:text-base text-[#1c1c1c] placeholder-[#949494] focus:outline-none focus:border-[#3333CC] focus:ring-0 transition-all duration-300"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/80 border-2 border-[#dedede] rounded-xl text-sm md:text-base text-[#1c1c1c] placeholder-[#949494] focus:outline-none focus:border-[#3333CC] focus:ring-0 transition-all duration-300"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/80 border-2 border-[#dedede] rounded-xl text-sm md:text-base text-[#1c1c1c] placeholder-[#949494] focus:outline-none focus:border-[#3333CC] focus:ring-0 transition-all duration-300"
                />
              </div>
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-3 md:px-4 md:py-4 bg-[#f5f5f5] border-2 border-[#dedede] rounded-xl text-[#757575] font-medium text-sm md:text-base">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    pattern="[0-9]{10}"
                    required
                    className="flex-1 px-4 py-3 md:px-5 md:py-4 bg-white/80 border-2 border-[#dedede] rounded-xl text-sm md:text-base text-[#1c1c1c] placeholder-[#949494] focus:outline-none focus:border-[#3333CC] focus:ring-0 transition-all duration-300"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 md:py-4 bg-[#3333CC] hover:bg-[#24248f] active:bg-[#1f1f7c] disabled:bg-[#ababea] disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm md:text-base transition-all duration-300 transform hover:scale-[1.02] shadow-[0_4px_12px_rgba(51,51,204,0.3)] hover:shadow-[0_6px_16px_rgba(51,51,204,0.4)]"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </motion.form>
          ) : (
            <motion.div
              className="text-center px-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#d9f5d9] rounded-full flex items-center justify-center shadow-md border border-[#3bc73b]">
                <svg className="w-8 h-8 text-[#008000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
               {/* Mobile: Combined text logic */}
              <div className="block md:hidden">
                <h3 className="text-xl font-bold text-[#1c1c1c] mb-1">You're on the list!</h3>
                <p className="text-base text-[#3b3b3b] font-medium">We'll get in touch</p>
              </div>

              {/* Desktop Only Text */}
              <div className="hidden md:block">
                <h3 className="text-2xl font-bold text-[#1c1c1c] mb-2">You're on the list!</h3>
                <p className="text-base text-[#3b3b3b]">We'll get in touch</p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Footer - Contact Email (Static, with hover effect) */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 py-6 md:py-8 pointer-events-none">
        <div className="flex justify-center items-center pointer-events-auto">
          <motion.a
            href="mailto:info@medvora.ai"
            // Reduced size for mobile
            className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#ebebfa] border-2 border-[#ababea] text-[#3333CC] text-sm md:text-base font-medium transition-all duration-300 shadow-md hover:bg-[#3333CC] hover:border-[#3333CC] hover:text-white hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            info@medvora.ai
          </motion.a>
        </div>
      </footer>

      {/* Scroll Indicator - Smart visibility, re-appears on inactivity */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div 
            className="fixed bottom-24 md:bottom-36 left-[42%] md:left-[46.5%] transform -translate-x-1/2 z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-[#949494] text-sm">
              <span className="mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
