'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { regionsData } from '@/data/regions';
import { MapPin, Sparkles, Check, CheckCircle2 } from 'lucide-react';

export function ThreeRegionsScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const total = rect.height - windowHeight;
      const current = -rect.top;
      let progress = current / total;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      if (progress < 0.33) {
        setActiveStep(0);
      } else if (progress < 0.66) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentRegion = regionsData[activeStep] || regionsData[0];

  return (
    <section
      ref={containerRef}
      id="regions-scene"
      dir="rtl"
      className="relative w-full h-[220vh] bg-gradient-to-b from-[#03111b] via-[#051c2a] to-[#041622] text-white select-none py-12"
      aria-label="تغطية المناطق الثلاث في قطاع غزة"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 py-10">
        {/* Header */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#40A39C]/40 backdrop-blur-md text-xs font-semibold text-[#40A39C] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>التغطية الجغرافية المتوازية</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4F3F1] to-[#40A39C]">
            ثلاث مناطق، فريق واحد
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2 font-sans">
            تنفيذ البرامج التدريبية بالتوازي في كافة محافظات القطاع لضمان العدالة في وصول المعرفة الطبية لكل طالب.
          </p>
        </div>

        {/* 3 Interactive Nodes on Pulse Line */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center">
          {/* Nodes Rail */}
          <div className="relative w-full flex items-center justify-between mb-8 px-8 sm:px-16">
            {/* Connecting Line */}
            <div className="absolute inset-x-8 sm:inset-x-16 top-1/2 -translate-y-1/2 h-1 bg-white/15">
              <div
                className="h-full bg-gradient-to-r from-[#40A39C] to-white transition-all duration-300"
                style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
              />
            </div>

            {/* 3 Region Nodes */}
            {regionsData.map((reg, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;

              return (
                <div key={reg.id} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-400 border ${
                      isActive
                        ? 'bg-[#40A39C] text-[#08324A] border-white scale-110 shadow-[0_0_20px_#40A39C]'
                        : isPast
                        ? 'bg-[#0D5260] text-white border-[#40A39C]'
                        : 'bg-[#08324A] text-white/50 border-white/15'
                    }`}
                  >
                    {isPast ? <Check className="w-5 h-5 text-white" /> : `0${idx + 1}`}
                  </div>
                  <span
                    className={`mt-2 text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                      isActive ? 'text-[#40A39C]' : 'text-slate-400'
                    }`}
                  >
                    {reg.shortLabel}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Region Focus Card */}
          <div className="relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 bg-[#08324A]/50 border border-white/20 backdrop-blur-2xl shadow-2xl transition-all duration-500 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/15">
              <Image
                src="/images/team-group.jpg"
                alt={currentRegion.labelAr}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08324A] via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#08324A]/80 border border-white/20 text-xs font-bold text-white">
                {currentRegion.shortLabel}
              </div>
            </div>

            <div className="md:col-span-7 space-y-3 text-right">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#40A39C] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>شعبة ميدانية فاعلة</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {currentRegion.labelAr}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                {currentRegion.description}
              </p>

              <div className="space-y-1.5 pt-2">
                {currentRegion.activities.slice(0, 2).map((act, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#40A39C] shrink-0" />
                    <span className="line-clamp-1">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Unified Badge */}
        <div className="relative z-10 max-w-md mx-auto w-full text-center pt-4">
          <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
            شمال • وسط • جنوب — تكامل العمل الإنساني والطلابي
          </div>
        </div>
      </div>
    </section>
  );
}
