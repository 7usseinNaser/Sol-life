'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { RegionCarousel } from '@/components/hero/RegionCarousel';
import { Sparkles, ArrowDown, Award, Users, HeartPulse } from 'lucide-react';

export function Hero() {
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
      dir="rtl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#051c2a] via-[#08324A] to-[#041622] text-white"
      aria-label="الواجهة الرئيسية لفريق سول لايف"
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#40A39C]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#0D5260]/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Oversized Arabic Display Word "سول لايف" Behind Subject */}
      <div
        className="absolute top-16 md:top-20 inset-x-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)`,
          transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)',
        }}
      >
        <span className="text-[17vw] font-black tracking-tighter text-white/[0.035] md:text-white/[0.045] leading-none whitespace-nowrap font-heading">
          سول لايف
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#40A39C]/40 backdrop-blur-md shadow-lg mb-6 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40A39C] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#40A39C]" />
          </span>
          <span className="text-xs sm:text-sm font-semibold text-slate-100 font-sans tracking-wide">
            مبادرة طلابية طبية تطوعية غير ربحية • قطاع غزة
          </span>
        </div>

        {/* Primary Headline: "نتعلّم. نتدرّب. نُلهم." */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4F3F1] to-[#40A39C] drop-shadow-sm max-w-4xl">
          نتعلّم. نتدرّب. نُلهم.
        </h1>

        {/* Verbatim Subheadline */}
        <p className="mt-4 sm:mt-5 text-base sm:text-xl text-slate-200/95 max-w-2xl font-sans leading-relaxed">
          مبادرة طلابية تطوعية لبناء المعرفة والمهارة الطبية في غزة، وإتاحة التدريب المجاني العالي الجودة لطلبة الكليات الصحية.
        </p>

        {/* Dual CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton strength={0.25}>
            <Link
              href="#story"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#40A39C] to-[#0D5260] hover:from-[#358a84] hover:to-[#093e49] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#40A39C]/25 transition-all duration-300 hover:shadow-[#40A39C]/40 hover:scale-[1.02] border border-white/20"
            >
              <span>اكتشف قصتنا</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </Link>
          </MagneticButton>

          <MagneticButton strength={0.25}>
            <Link
              href="#programs"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white/35"
            >
              <Sparkles className="w-4 h-4 text-[#40A39C]" />
              <span>شاهد أثرنا وبرامجنا</span>
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
              alt="صورة الفريق الرسمية - متطوعو فريق سول لايف في قطاع غزة"
              fill
              priority
              className="object-cover object-center filter brightness-[0.97] contrast-[1.05] transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Atmospheric gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08324A]/90 via-[#08324A]/20 to-transparent" />

            {/* Floating Glass Pill 1: Total Volunteers */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3.5 py-2 rounded-2xl bg-[#08324A]/80 border border-white/20 backdrop-blur-md shadow-xl flex items-center gap-2 text-right">
              <span className="p-1.5 rounded-xl bg-[#40A39C]/20 text-[#40A39C]">
                <Users className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[11px] text-slate-300 font-sans">عضوية الفريق</p>
                <p className="text-xs sm:text-sm font-bold text-white font-heading">
                  30 متطوعاً ومتطوعة
                </p>
              </div>
            </div>

            {/* Floating Glass Pill 2: Synchronous Operation */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-2 rounded-2xl bg-[#08324A]/80 border border-white/20 backdrop-blur-md shadow-xl flex items-center gap-2 text-right">
              <span className="p-1.5 rounded-xl bg-[#40A39C]/20 text-[#40A39C]">
                <HeartPulse className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[11px] text-slate-300 font-sans">نطاق العمل</p>
                <p className="text-xs sm:text-sm font-bold text-white font-heading">
                  3 شعب بالتوازي
                </p>
              </div>
            </div>

            {/* Bottom Caption within the Photo Card */}
            <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-right bg-[#08324A]/70 border border-white/15 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-lg">
              <div>
                <h2 className="text-sm sm:text-base font-bold text-white font-heading">
                  فريق طلابي يقود مستقبل التدريب الصحي في غزة
                </h2>
                <p className="text-xs text-slate-200/80 font-sans mt-0.5">
                  رغم التحديات والصعوبات، تبقى المعرفة الطبية والمهارة السريرية حقاً لكل طالب.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#40A39C] font-semibold bg-[#40A39C]/15 px-3 py-1.5 rounded-lg border border-[#40A39C]/30 shrink-0">
                <Award className="w-3.5 h-3.5" />
                <span>برامج مجانية 100%</span>
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
