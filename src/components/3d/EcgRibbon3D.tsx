'use client';

import React from 'react';
import Image from 'next/image';

interface EcgRibbon3DProps {
  className?: string;
}

export function EcgRibbon3D({ className = '' }: EcgRibbon3DProps) {
  return (
    <div
      className={`relative w-full h-44 sm:h-56 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* 3D Flowing ECG Background Ambient Image */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen filter contrast-125">
        <Image
          src="/images/ecg-ambient.jpg"
          alt="شريط نبض ثلاثي الأبعاد"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#041622] via-transparent to-[#041622]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041622] via-transparent to-[#041622]" />

      {/* Morphing Pulse Wave */}
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        className="absolute inset-0 w-full h-full text-[#40A39C] opacity-75 drop-shadow-[0_0_15px_#40A39C]"
      >
        <path
          d="M 0 60 Q 150 20 300 60 T 600 60 L 640 15 L 660 105 L 680 30 L 700 80 L 720 60 T 1200 60"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
}
