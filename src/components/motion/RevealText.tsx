'use client';

import React, { useRef, useEffect, useState } from 'react';

interface RevealTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  staggerMs?: number;
  threshold?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  as: Component = 'p',
  className = '',
  staggerMs = 45,
  threshold = 0.2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const words = text.split(' ');

  if (isReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <div ref={containerRef} className="inline-block" aria-label={text}>
      <Component className={`overflow-hidden ${className}`}>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true" className="flex flex-wrap gap-x-2 gap-y-1">
          {words.map((word, idx) => (
            <span
              key={idx}
              className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(110%)',
                transitionDelay: `${idx * staggerMs}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </span>
      </Component>
    </div>
  );
};
