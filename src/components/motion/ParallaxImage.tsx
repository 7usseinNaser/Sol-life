'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ParallaxImageProps extends Omit<ImageProps, 'ref'> {
  speed?: number; // e.g. -0.1 to 0.2
  containerClassName?: string;
  roundedClassName?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  speed = 0.12,
  containerClassName = '',
  roundedClassName = 'rounded-3xl',
  alt,
  ...imageProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const centerDistance = rect.top + rect.height / 2 - windowHeight / 2;
        setOffsetY(centerDistance * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${roundedClassName} ${containerClassName}`}
    >
      <div
        className="w-full h-full will-change-transform transition-transform duration-100 ease-out scale-110"
        style={{
          transform: isReducedMotion ? 'none' : `translate3d(0, ${offsetY}px, 0)`,
        }}
      >
        <Image alt={alt} {...imageProps} />
      </div>
    </div>
  );
};
