'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, HeartPulse, ShieldCheck, Stethoscope, Gift, Users } from 'lucide-react';

interface GlassHeart3DProps {
  className?: string;
}

export function GlassHeart3D({ className = '' }: GlassHeart3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 28; // -14 to +14 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -28;
    setRotation({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const orbitFeatures = [
    { label: 'مجاني بالكامل', icon: Gift, angle: 0 },
    { label: 'سد فجوة السريري', icon: Stethoscope, angle: 72 },
    { label: '30 متطوعاً ومتطوعة', icon: Users, angle: 144 },
    { label: 'شمال • وسط • جنوب', icon: HeartPulse, angle: 216 },
    { label: 'انتقائية وجودة', icon: ShieldCheck, angle: 288 },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-2xl mx-auto h-[450px] sm:h-[500px] flex items-center justify-center select-none ${className}`}
      style={{ perspective: '1200px' }}
      aria-label="مجسم القلب الزجاجي الرمزي مع الألواح المدارية"
    >
      {/* Background Soft Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-[#40A39C]/20 blur-3xl pointer-events-none" />

      {/* 3D Transform Stage */}
      <div
        className="relative w-64 h-64 sm:w-72 sm:h-72 transition-transform duration-300 ease-out flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: isReducedMotion
            ? 'none'
            : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* The Central Glass Heart Artifact */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden p-2 bg-gradient-to-b from-white/30 to-white/5 border border-white/40 shadow-2xl backdrop-blur-2xl flex items-center justify-center group">
          <Image
            src="/images/glass-heart.jpg"
            alt="القلب الزجاجي الطبي لفريق سول لايف"
            fill
            className="object-cover rounded-full filter brightness-95 contrast-105 group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#08324A]/70 via-transparent to-white/20" />

          {/* Central Pulsing Heart Icon */}
          <div className="absolute z-10 p-3 rounded-full bg-[#08324A]/80 border border-[#40A39C]/60 backdrop-blur-md shadow-[0_0_24px_rgba(64,163,156,0.6)]">
            <HeartPulse className="w-8 h-8 text-[#40A39C] animate-pulse" />
          </div>
        </div>

        {/* 5 Orbiting Glass Panels */}
        {!isReducedMotion && (
          <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
            {orbitFeatures.map((feat, idx) => {
              const rad = (feat.angle * Math.PI) / 180;
              const radius = 145; // distance from center
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const Icon = feat.icon;

              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-2xl bg-[#08324A]/80 border border-white/20 backdrop-blur-md shadow-lg text-white flex items-center gap-1.5 whitespace-nowrap transition-transform duration-500"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, 35px)`,
                  }}
                >
                  <Icon className="w-3.5 h-3.5 text-[#40A39C]" />
                  <span className="text-[11px] font-bold font-heading">{feat.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Caption badge */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] text-slate-300 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#40A39C]" />
          <span>القلب الزجاجي: رمزية الإنسانية والنبض الطبي المستمر</span>
        </div>
      </div>
    </div>
  );
}
