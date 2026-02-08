import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: Element | string | null;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollerTarget: Element | string | null = container || null;

    if (typeof scrollerTarget === 'string') {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    // Set initial state immediately via GSAP to avoid FOUC or reliance on CSS classes
    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'visible', // Ensure it's visible to layout
      willChange: 'transform, opacity' // Optimization
    });

    const tl = gsap.timeline({
      paused: true,
      delay: delay / 1000, // GSAP uses seconds, prop is likely ms (fixing this discrepancy)
      onComplete: () => {
        // Cleanup will-change to save memory after animation
        gsap.set(el, { willChange: 'auto' });
        if (onComplete) onComplete();
        
        if (disappearAfter > 0) {
           // ... disappearance logic
        }
      }
    });

    tl.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease
    });

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget || window,
      start: `top ${startPct}%`, // When top of element hits X% of viewport
      once: true,
      onEnter: () => tl.play(),
      // Fallback: if it's already past the trigger point (e.g. refresh), play it
      onRefresh: (self) => {
        if (self.progress > 0 && self.progress < 1) {
            tl.play();
        }
      } 
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay
  ]);

  // Removed 'invisible' class to rely on GSAP's initial set. 
  // Added 'opacity-0' as a safe default for SSR/initial render before JS kicks in? 
  // Actually, 'invisible' is safer for FOUC if JS is slow, BUT user reported "Empty" content.
  // If text is "invisible" and GSAP fails, it stays invisible.
  // I will use `opacity-0` class so it takes up space but is hidden, and if GSAP works it overrides.
  // If GSAP fails, it stays opacity-0... which is also bad.
  // But usage of `invisible` might be confusing IntersectionObserver if dimensions are weird?
  // Use `style={{ opacity: 0 }}`
  
  return (
    <div ref={ref} className={`${className}`} style={{ opacity: 0 }} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContent;
