'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ScrollSceneProps {
  id?: string;
  heightViewport?: number; // e.g. 2 for 200vh, 3 for 300vh
  children: React.ReactNode | ((progress: number, isReducedMotion: boolean) => React.ReactNode);
  className?: string;
  pin?: boolean;
  onProgress?: (progress: number) => void;
}

export const ScrollScene: React.FC<ScrollSceneProps> = ({
  id,
  heightViewport = 2,
  children,
  className = '',
  pin = true,
  onProgress,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isSaveData, setIsSaveData] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // Check saveData or slow network
    if ('connection' in navigator) {
      const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
      if (conn?.saveData || conn?.effectiveType === '2g') {
        setIsSaveData(true);
      }
    }

    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion || isSaveData || !pin) {
      setProgress(1);
      onProgress?.(1);
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = containerRef.current;
          if (el) {
            const rect = el.getBoundingClientRect();
            const containerHeight = el.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollableDistance = containerHeight - windowHeight;

            if (scrollableDistance <= 0) {
              setProgress(1);
              onProgress?.(1);
            } else {
              const scrolled = -rect.top;
              const calculatedProgress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
              setProgress(calculatedProgress);
              onProgress?.(calculatedProgress);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReducedMotion, isSaveData, pin, onProgress]);

  // Fallback for reduced motion or lightweight data saver
  if (isReducedMotion || isSaveData || !pin) {
    return (
      <section id={id} className={`relative py-16 ${className}`}>
        <div className="w-full">
          {typeof children === 'function' ? children(1, true) : children}
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={containerRef}
      style={{ height: `${heightViewport * 100}vh` }}
      className={`relative w-full ${className}`}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Subtle scene scroll progress bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-[#08324A]/10 z-20">
          <div
            className="h-full bg-gradient-to-r from-[#40A39C] to-[#67C0B9] transition-all duration-75 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="relative w-full h-full">
          {typeof children === 'function' ? children(progress, false) : children}
        </div>
      </div>
    </section>
  );
};
