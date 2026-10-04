'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { RegionCarousel } from '@/components/hero/RegionCarousel';
import { Sparkles, ArrowDown, Award, Users, HeartPulse } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      dir={isAr ? 'rtl' : 'ltr'}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#051c2a] via-[#08324A] to-[#041622] text-white"
      aria-label={isAr ? "الواجهة الرئيسية لفريق سول لايف" : "Soul Life Team Hero Section"}
    >
      {/* Background Ambient Lighting with Pulse Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[var(--color-teal-vibrant)]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-[var(--color-deep-teal)]/35 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[var(--color-navy-light)]/25 rounded-full blur-[90px] pointer-events-none" />

      {/* Oversized Arabic Display Word "سول لايف" Behind Subject */}
      <div
        className="absolute top-16 md:top-20 inset-x-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)`,
          transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)',
        }}
      >
        <span className="text-[17vw] font-black tracking-tighter text-white/[0.04] md:text-white/[0.05] leading-none whitespace-nowrap font-heading select-none">
          {t('displayWord')}
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Kicker badge with pulse */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-[var(--color-teal-light)]/40 backdrop-blur-md shadow-lg shadow-[var(--color-teal)]/10 mb-6 animate-fade-in hover:border-[var(--color-teal-vibrant)]/60 transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-teal-vibrant)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-teal-vibrant)]" />
          </span>
          <span className="text-xs sm:text-sm font-semibold text-slate-100 font-sans tracking-wide">
            {t('kicker')}
          </span>
        </div>

        {/* Primary Headline with Rich Medical Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--color-mint)] to-[var(--color-teal-light)] drop-shadow-sm max-w-4xl">
          {t('headline')}
        </h1>

        {/* Verbatim Subheadline */}
        <p className="mt-4 sm:mt-5 text-base sm:text-xl text-slate-200/95 max-w-2xl font-sans leading-relaxed">
          {t('subheadline')}
        </p>

        {/* Dual CTAs with enhanced micro-interactions and glow */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton strength={0.25}>
            <Link
              href="#story"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[var(--color-teal-vibrant)] via-[var(--color-teal)] to-[var(--color-deep-teal)] text-white font-bold text-sm sm:text-base shadow-xl shadow-[var(--color-teal-vibrant)]/25 transition-all duration-300 hover:shadow-[var(--color-teal-vibrant)]/45 hover:scale-[1.02] border border-white/20 active:scale-[0.98]"
            >
              <span>{t('ctaStory')}</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </Link>
          </MagneticButton>

          <MagneticButton strength={0.25}>
            <Link
              href="#programs"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white/40 active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-[var(--color-teal-soft)]" />
              <span>{t('ctaPrograms')}</span>
            </Link>
          </MagneticButton>
        </div>

        {/* Central Rounded Glass Card with Team Group Photo */}
        <div
          className="relative mt-12 w-full max-w-4xl rounded-3xl md:rounded-[36px] p-2.5 sm:p-4 bg-gradient-to-b from-white/20 via-white/10 to-transparent border border-white/25 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg)`,
          }}
        >
          <div className="relative h-64 sm:h-80 md:h-[430px] w-full rounded-2xl md:rounded-[28px] overflow-hidden group">
            {/* Group photo with gentle Ken-Burns zoom */}
            <Image
              src="/images/team-group.jpg"
              alt={isAr ? "صورة الفريق الرسمية - متطوعو فريق سول لايف في قطاع غزة" : "Soul Life Team Official Photo - Gaza Strip"}
              fill
              priority
              className="object-cover object-center filter brightness-[0.97] contrast-[1.05] transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Atmospheric gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08324A]/90 via-[#08324A]/20 to-transparent" />

            {/* Floating Glass Pill 1: Total Volunteers */}
            <div className={`absolute top-4 ${isAr ? 'right-4 sm:right-6' : 'left-4 sm:left-6'} sm:top-6 px-3.5 py-2 rounded-2xl bg-[var(--color-navy)]/85 border border-white/25 backdrop-blur-md shadow-xl flex items-center gap-2.5 ${isAr ? 'text-right' : 'text-left'} transition-transform duration-300 hover:scale-105`}>
              <span className="p-1.5 rounded-xl bg-[var(--color-teal-vibrant)]/25 text-[var(--color-teal-soft)]">
                <Users className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[11px] text-slate-300 font-sans">{isAr ? 'عضوية الفريق' : 'Team Members'}</p>
                <p className="text-xs sm:text-sm font-bold text-white font-heading">
                  {isAr ? '30 متطوعاً ومتطوعة' : '30 Volunteers'}
                </p>
              </div>
            </div>

            {/* Floating Glass Pill 2: Synchronous Operation */}
            <div className={`absolute top-4 ${isAr ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} sm:top-6 px-3.5 py-2 rounded-2xl bg-[var(--color-navy)]/85 border border-white/25 backdrop-blur-md shadow-xl flex items-center gap-2.5 ${isAr ? 'text-right' : 'text-left'} transition-transform duration-300 hover:scale-105`}>
              <span className="p-1.5 rounded-xl bg-[var(--color-teal-vibrant)]/25 text-[var(--color-teal-soft)]">
                <HeartPulse className="w-4 h-4 animate-pulse" />
              </span>
              <div>
                <p className="text-[11px] text-slate-300 font-sans">{isAr ? 'نطاق العمل' : 'Field Branches'}</p>
                <p className="text-xs sm:text-sm font-bold text-white font-heading">
                  {isAr ? '3 شعب بالتوازي' : '3 Parallel Branches'}
                </p>
              </div>
            </div>

            {/* Bottom Caption within the Photo Card */}
            <div className={`absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 flex flex-col sm:flex-row items-center justify-between gap-3 ${isAr ? 'text-right' : 'text-left'} bg-[var(--color-navy)]/80 border border-white/20 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-lg shadow-lg`}>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-white font-heading">
                  {isAr ? 'فريق طلابي يقود مستقبل التدريب الصحي في غزة' : 'A student team leading healthcare training in Gaza'}
                </h2>
                <p className="text-xs text-slate-200/85 font-sans mt-0.5">
                  {isAr ? 'رغم التحديات والصعوبات، تبقى المعرفة الطبية والمهارة السريرية حقاً لكل طالب.' : 'Against all challenges, clinical knowledge and surgical dexterity remain a fundamental right for every student.'}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-teal-soft)] font-semibold bg-[var(--color-teal-vibrant)]/20 px-3 py-1.5 rounded-xl border border-[var(--color-teal-vibrant)]/40 shrink-0">
                <Award className="w-3.5 h-3.5" />
                <span>{isAr ? 'برامج مجانية 100%' : '100% Free Programs'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Requirement #8: Region swipe carousel (Khan Younis · Central · Gaza) */}
        <div className="w-full mt-4">
          <RegionCarousel />
        </div>
      </div>
    </section>
  );
}
