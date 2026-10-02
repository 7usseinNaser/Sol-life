'use client';

import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  value: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  localeFormatted?: boolean;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  durationMs = 1500,
  prefix = '',
  suffix = '',
  className = '',
  localeFormatted = true,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      setCurrentValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, value]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      // Easing out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.floor(startValue + (value - startValue) * easedProgress);

      setCurrentValue(nextValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentValue(value);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, value, durationMs]);

  const displayString = localeFormatted
    ? currentValue.toLocaleString('ar-EG')
    : currentValue.toString();

  return (
    <span
      ref={containerRef}
      className={`tabular-nums font-bold inline-flex items-center gap-0.5 ${className}`}
    >
      {prefix && <span>{prefix}</span>}
      <span>{displayString}</span>
      {suffix && <span className="ms-1 text-sm font-normal opacity-80">{suffix}</span>}
    </span>
  );
};
