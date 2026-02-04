import { useEffect, useRef, ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function Marquee({ 
  children, 
  speed = 50, 
  direction = 'left',
  className = '' 
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Clone content for seamless loop
    const clone = content.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    let position = 0;
    const contentWidth = content.offsetWidth;
    let animationId: number;

    const animate = () => {
      if (direction === 'left') {
        position -= speed / 60; // 60fps
        if (Math.abs(position) >= contentWidth) {
          position = 0;
        }
      } else {
        position += speed / 60;
        if (position >= 0) {
          position = -contentWidth;
        }
      }

      if (content) {
        content.style.transform = `translateX(${position}px)`;
      }
      if (clone) {
        clone.style.transform = `translateX(${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      if (clone && container.contains(clone)) {
        container.removeChild(clone);
      }
    };
  }, [speed, direction]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={containerRef} className="flex">
        <div ref={contentRef} className="flex shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}
