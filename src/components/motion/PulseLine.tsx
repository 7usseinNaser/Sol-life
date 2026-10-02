'use client';

import React, { useEffect, useState, useRef } from 'react';

export type PulseLineMode = 'ecg' | 'road' | 'thread' | 'timeline' | 'flat';

interface PulseLineProps {
  mode?: PulseLineMode;
  progress?: number; // 0 to 1, if controlled externally
  className?: string;
  glow?: boolean;
}

export const PulseLine: React.FC<PulseLineProps> = ({
  mode = 'ecg',
  progress,
  className = '',
  glow = true,
}) => {
  const [scrollProgress, setScrollProgress] = useState(progress ?? 0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Detect reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (progress !== undefined) {
      setScrollProgress(progress);
      return;
    }

    if (prefersReducedMotion) {
      setScrollProgress(1);
      return;
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = window.scrollY / totalScroll;
        setScrollProgress(Math.min(Math.max(current, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [progress, prefersReducedMotion]);

  // SVG Paths for different morph states (based on viewbox 0 0 1000 100)
  const pathMap: Record<PulseLineMode, string> = {
    // Medical ECG with classic P-Q-R-S-T pulse spike
    ecg: 'M 0 50 L 350 50 L 370 50 L 380 44 L 390 56 L 400 12 L 415 88 L 428 35 L 438 52 L 450 50 L 475 50 L 490 40 L 505 50 L 1000 50',
    // Flattened road mode for vehicle arrival
    road: 'M 0 50 L 1000 50',
    // Suture stitch thread mode with suture loop marks
    thread: 'M 0 50 Q 200 30, 400 50 T 800 50 L 1000 50',
    // Timeline rail with gentle stepped milestones
    timeline: 'M 0 50 L 250 50 L 300 35 L 350 50 L 550 50 L 600 35 L 650 50 L 1000 50',
    // Flat baseline
    flat: 'M 0 50 L 1000 50',
  };

  const activeD = pathMap[mode];

  return (
    <div className={`relative w-full overflow-visible pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1000 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#08324A" stopOpacity="0.3" />
            <stop offset="35%" stopColor="#0D5260" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#40A39C" stopOpacity="1" />
            <stop offset="85%" stopColor="#67C0B9" stopOpacity="1" />
            <stop offset="100%" stopColor="#E4F3F1" stopOpacity="0.8" />
          </linearGradient>

          {glow && (
            <filter id="pulseGlow" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}
        </defs>

        {/* Background track line */}
        <path
          d={activeD}
          stroke="rgba(13, 82, 96, 0.12)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Animated Active ECG/Pulse Line */}
        <path
          ref={pathRef}
          d={activeD}
          stroke="url(#pulseGradient)"
          strokeWidth={mode === 'road' ? '4' : '2.5'}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={glow ? 'url(#pulseGlow)' : undefined}
          strokeDasharray="1000"
          strokeDashoffset={prefersReducedMotion ? '0' : `${1000 * (1 - scrollProgress)}`}
          vectorEffect="non-scaling-stroke"
          className="transition-all duration-300 ease-out"
        />

        {/* Pulse Heart Indicator Head */}
        {!prefersReducedMotion && scrollProgress > 0 && scrollProgress < 0.99 && (
          <circle
            cx={scrollProgress * 1000}
            cy="50"
            r="4.5"
            fill="#40A39C"
            className="animate-pulse shadow-lg"
          />
        )}
      </svg>
    </div>
  );
};
