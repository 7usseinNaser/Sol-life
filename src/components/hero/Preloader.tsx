'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [stage, setStage] = useState<'line' | 'spike' | 'heart' | 'done'>('line');

  const finish = useCallback(() => {
    setIsFading(true);
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('soul_life_preloader_seen', 'true');
      } catch {
        // Safe fallback in restricted environments
      }
    }
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    // 1. Check if user already saw the preloader in this session
    try {
      const alreadySeen = sessionStorage.getItem('soul_life_preloader_seen');
      if (alreadySeen === 'true') {
        setIsVisible(false);
        onComplete?.();
        return;
      }
    } catch {
      // Proceed normally if storage inaccessible
    }

    // 2. Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
      return;
    }

    // 3. Animation timeline (Total duration <= 1.4s)
    const spikeTimer = setTimeout(() => setStage('spike'), 350);
    const heartTimer = setTimeout(() => setStage('heart'), 750);
    const doneTimer = setTimeout(() => finish(), 1350);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        finish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(spikeTimer);
      clearTimeout(heartTimer);
      clearTimeout(doneTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [finish, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-label="جارٍ تحميل منصة فريق سول لايف الطبية"
      onClick={finish}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#051c2a] text-white transition-opacity duration-400 cursor-pointer select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,163,156,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Skip button for high accessibility */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
        aria-label="تخطي شاشة التحميل"
        className="absolute top-6 left-6 z-10 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all duration-200"
      >
        تخطي ⇥
      </button>

      {/* Centerpiece ECG morphing to Heart */}
      <div className="relative w-48 h-32 flex items-center justify-center">
        {/* ECG Line Drawing */}
        <svg
          viewBox="0 0 200 80"
          fill="none"
          className={`w-full h-full transition-opacity duration-300 ${
            stage === 'heart' ? 'opacity-20 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <path
            d="M 10 40 L 60 40 L 75 18 L 85 62 L 95 30 L 105 48 L 115 40 L 190 40"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#40A39C] drop-shadow-[0_0_10px_#40A39C]"
            style={{
              strokeDasharray: 240,
              strokeDashoffset: stage === 'line' ? 120 : 0,
              transition: 'stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </svg>

        {/* Morphing Logo Heart Silhouette */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-400 transform ${
            stage === 'heart'
              ? 'opacity-100 scale-100 filter drop-shadow-[0_0_24px_rgba(64,163,156,0.6)]'
              : 'opacity-0 scale-75'
          }`}
        >
          <div className="relative w-20 h-20 rounded-full p-2 bg-[#08324A]/80 border border-[#40A39C]/40 backdrop-blur-md flex items-center justify-center shadow-lg">
            <Image
              src="/images/logo.png"
              alt="شعار سول لايف"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Team identity & slogan */}
      <div className="mt-4 text-center space-y-1.5">
        <h2 className="text-xl font-bold tracking-tight text-white font-heading">
          فريق سول لايف
        </h2>
        <p className="text-xs font-medium text-[#40A39C] flex items-center justify-center gap-1.5 font-sans">
          <span>نتعلّم</span>
          <span className="text-white/40">•</span>
          <span>نتدرّب</span>
          <span className="text-white/40">•</span>
          <span>نُلهم</span>
        </p>
      </div>

      {/* Progress pulse bar */}
      <div className="absolute bottom-10 w-44 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#0D5260] via-[#40A39C] to-white rounded-full transition-all duration-1000 ease-out"
          style={{ width: stage === 'line' ? '35%' : stage === 'spike' ? '70%' : '100%' }}
        />
      </div>
    </div>
  );
}
