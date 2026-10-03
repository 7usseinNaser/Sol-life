'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useMotion } from '@/context/MotionContext';
import { regionsData } from '@/data/regions';
import { MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export function ThreeRegionsScene() {
  const t = useTranslations('threeRegions');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const { isLite } = useMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    if (isLite) return;

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
  }, [isLite]);

  const shouldBeStatic = isLite || isReducedMotion;

  // LITE MODE (Direct 3-column responsive cards, zero scroll traps)
  if (shouldBeStatic) {
    return (
      <section
        id="regions-scene"
        dir={isAr ? 'rtl' : 'ltr'}
        className="relative w-full py-20 px-4 sm:px-8 bg-gradient-to-b from-[#03111b] via-[#051c2a] to-[#041622] text-white select-none"
        aria-label={isAr ? "تغطية المناطق الثلاث في قطاع غزة" : "Three Regions Coverage in Gaza Strip"}
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#40A39C]/40 text-xs font-semibold text-[#40A39C] mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
              {t('title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2 font-sans">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regionsData.map((reg) => (
              <div
                key={reg.id}
                className="rounded-3xl p-6 bg-[#08324A]/40 border border-white/10 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-white/10">
                    <Image
                      src={reg.imagePlaceholder || '/images/team-group.jpg'}
                      alt={isAr ? reg.labelAr : reg.labelEn}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08324A] via-transparent to-transparent" />
                    <span className="absolute bottom-3 start-3 px-3 py-1 rounded-lg bg-[#40A39C] text-[#08324A] text-xs font-bold font-heading">
                      {isAr ? reg.labelAr : reg.labelEn}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    {isAr ? reg.labelAr : reg.labelEn}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {reg.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#40A39C]">
                  <span>{isAr ? 'شعبة ميدانية نشطة' : 'Active Field Wing'}</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#40A39C]/20 border border-[#40A39C]/40 text-sm font-bold text-[#67C0B9]">
              <Sparkles className="w-4 h-4 text-[#40A39C]" />
              <span>{isAr ? 'ثلاث مناطق، فريق واحد' : 'Three Regions, One Team'}</span>
            </span>
          </div>
        </div>
      </section>
    );
  }

  // ULTRA MODE (Interactive 220vh scroll-stepper)
  const currentRegion = regionsData[activeStep] || regionsData[0];

  return (
    <section
      ref={containerRef}
      id="regions-scene"
      dir={isAr ? 'rtl' : 'ltr'}
      className="relative w-full h-[220vh] bg-gradient-to-b from-[#03111b] via-[#051c2a] to-[#041622] text-white select-none py-12"
      aria-label={isAr ? "تغطية المناطق الثلاث في قطاع غزة" : "Three Regions Coverage in Gaza Strip"}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 py-10">
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#40A39C]/40 backdrop-blur-md text-xs font-semibold text-[#40A39C] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4F3F1] to-[#40A39C]">
            {t('title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2 font-sans">
            {t('subtitle')}
          </p>
        </div>

        {/* Region Stepper & Card */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center">
          {/* Step Indicators */}
          <div className="flex items-center gap-3 sm:gap-6 mb-6">
            {regionsData.map((reg, idx) => (
              <div
                key={reg.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl border transition-all duration-300 ${
                  activeStep === idx
                    ? 'bg-[#40A39C] text-[#08324A] font-bold border-white shadow-lg scale-105'
                    : 'bg-white/5 text-slate-400 border-white/10'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                <span className="text-xs sm:text-sm font-heading">
                  {isAr ? reg.labelAr : reg.labelEn}
                </span>
              </div>
            ))}
          </div>

          {/* Active Card */}
          <div className="w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-[#08324A]/60 border border-[#40A39C]/40 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-full sm:w-1/2 h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 shrink-0">
              <Image
                src={currentRegion.imagePlaceholder || '/images/team-group.jpg'}
                alt={isAr ? currentRegion.labelAr : currentRegion.labelEn}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08324A]/80 via-transparent to-transparent" />
            </div>

            <div className="w-full sm:w-1/2 space-y-3 text-start">
              <span className="text-xs font-mono font-bold text-[#40A39C] uppercase tracking-wider block">
                {isAr ? 'شعبة ميدانية' : 'Field Division'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {isAr ? currentRegion.labelAr : currentRegion.labelEn}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentRegion.description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isAr ? 'تنسيق نشط مع المستشفيات' : 'Active Hospital Coordination'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Strip */}
        <div className="relative z-10 max-w-xl mx-auto w-full flex items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="font-mono text-[#40A39C] font-bold">
              {Math.round(scrollProgress * 100)}%
            </span>
            <span>{isAr ? 'تغطية القطاع' : 'Coverage Progress'}</span>
          </div>

          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0D5260] via-[#40A39C] to-white rounded-full transition-all duration-150"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          <span className="text-xs text-[#67C0B9] font-bold font-heading">
            {isAr ? 'ثلاث مناطق، فريق واحد' : 'Three Regions, One Team'}
          </span>
        </div>
      </div>
    </section>
  );
}
