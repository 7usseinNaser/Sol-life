'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { boardMembers } from '@/data/team';
import { Sparkles, Users, Award, ShieldCheck, ArrowDown } from 'lucide-react';

export function ArrivalScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height - windowHeight;
      const currentScroll = -rect.top;

      let progress = currentScroll / totalDist;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Story beats derived from scroll progress
  // Beat 1: 0 - 15% (Line flattens into road)
  // Beat 2: 15% - 40% (Ambulance vehicle drives in)
  // Beat 3: 40% - 55% (Vehicle stops, doors open)
  // Beat 4: 55% - 85% (Team steps out with role tags)
  // Beat 5: 85% - 100% (Walk towards training hall, line continues)

  // Approved board members to display on role tags (no invented names)
  const featuredVolunteers = boardMembers.slice(0, 4);

  return (
    <section
      ref={containerRef}
      id="story"
      dir="rtl"
      className="relative w-full h-[280vh] bg-gradient-to-b from-[#041622] via-[#062438] to-[#041622] text-white select-none"
      aria-label="المشهد القصصي التفاعلي: وصول فريق سول لايف للتدريب الميداني"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 py-8">
        {/* Background Ambient Glow & Cinematic Dusk Skyline */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#40A39C]/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#0D5260]/20 rounded-full blur-[120px]" />
          {/* Subtle Skyline silhouette layer */}
          <div className="absolute bottom-24 inset-x-0 h-40 bg-[linear-gradient(to_top,rgba(8,50,74,0.4),transparent)] opacity-60" />
        </div>

        {/* Top Header & Scenario Subtitle */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center pt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#40A39C]/40 backdrop-blur-md text-xs font-semibold text-[#40A39C] mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مشهد سينمائي رمزي • سيناريو الوصول الميداني</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4F3F1] to-[#40A39C]">
            الفريق يصل ليتدرّب ويُدرّب
          </h2>
          <p className="text-xs sm:text-sm text-slate-300/90 font-sans mt-2 max-w-xl mx-auto">
            محاكاة فنية رمزية لرحلة متطوعي كليات الطب نحو قاعات التدريب السريري، لسد الفجوة بين المعرفة النظرية والممارسة الميدانية.
          </p>

          {/* Mandatory Integrity Note (§3.1) */}
          <div className="inline-flex items-center gap-1.5 mt-2 text-[11px] text-slate-400 bg-white/5 px-3 py-0.5 rounded-full border border-white/10">
            <ShieldCheck className="w-3 h-3 text-[#40A39C]" />
            <span>تجسيد فني لجهود التدريب الطبي الطلابي، وليس خدمة إسعاف طوارئ.</span>
          </div>
        </div>

        {/* Centerpiece Stage: The Road, Vehicle & Team */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex flex-col items-center justify-center">
          {/* Slogan Beats ("نتعلّم" -> "نتدرّب" -> "نُلهم") */}
          <div className="absolute top-4 inset-x-0 flex items-center justify-center gap-6 sm:gap-12 text-sm sm:text-xl font-bold font-heading">
            <span
              className={`transition-all duration-500 px-4 py-1.5 rounded-xl border backdrop-blur-md ${
                scrollProgress >= 0.2
                  ? 'bg-[#40A39C] text-[#08324A] border-white shadow-lg scale-105'
                  : 'bg-white/5 text-white/40 border-white/10'
              }`}
            >
              1. نتعلّم
            </span>
            <span
              className={`transition-all duration-500 px-4 py-1.5 rounded-xl border backdrop-blur-md ${
                scrollProgress >= 0.5
                  ? 'bg-[#40A39C] text-[#08324A] border-white shadow-lg scale-105'
                  : 'bg-white/5 text-white/40 border-white/10'
              }`}
            >
              2. نتدرّب
            </span>
            <span
              className={`transition-all duration-500 px-4 py-1.5 rounded-xl border backdrop-blur-md ${
                scrollProgress >= 0.8
                  ? 'bg-[#40A39C] text-[#08324A] border-white shadow-lg scale-105'
                  : 'bg-white/5 text-white/40 border-white/10'
              }`}
            >
              3. نُلهم
            </span>
          </div>

          {/* Main Visual Frame */}
          <div className="relative w-full max-w-4xl h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden border border-white/20 bg-[#08324A]/40 backdrop-blur-xl shadow-2xl flex items-center justify-center mt-6">
            {/* Cinematic Arrival Backdrop Image */}
            <Image
              src="/images/ambulance-arrival.jpg"
              alt="وصول سيارة تدريب فريق سول لايف الرمزية في الميدان"
              fill
              className="object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700"
              style={{
                transform: `scale(${1 + scrollProgress * 0.08})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08324A]/90 via-[#08324A]/30 to-transparent" />

            {/* Stepping out figures: Glass role tags */}
            <div className="absolute bottom-6 inset-x-4 sm:inset-x-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {featuredVolunteers.map((member, idx) => {
                const threshold = 0.5 + idx * 0.09;
                const isRevealed = scrollProgress >= threshold || isReducedMotion;

                return (
                  <div
                    key={member.id}
                    className={`transition-all duration-500 transform ${
                      isRevealed
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
                    } px-3.5 py-2 rounded-2xl bg-[#08324A]/85 border border-[#40A39C]/40 backdrop-blur-md shadow-xl flex items-center gap-2.5 text-right`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#40A39C] animate-pulse" />
                    <div>
                      <p className="text-xs font-bold text-white font-heading">
                        {member.name}
                      </p>
                      <p className="text-[10px] text-slate-300 font-sans">
                        {member.roleAr}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* The Pulse Line morphing into Road */}
          <div className="w-full max-w-4xl mt-6 relative flex flex-col items-center">
            <svg
              viewBox="0 0 800 50"
              fill="none"
              className="w-full h-10 text-[#40A39C] drop-shadow-[0_0_12px_#40A39C]"
            >
              <path
                d="M 0 25 L 250 25 L 280 8 L 300 42 L 320 18 L 340 32 L 360 25 L 800 25"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 900,
                  strokeDashoffset: 900 * (1 - scrollProgress),
                  transition: 'stroke-dashoffset 0.1s ease-out',
                }}
              />
            </svg>
            <div className="flex items-center justify-between w-full text-[11px] text-slate-400 font-sans px-2">
              <span>انطلاق المسار الطبي</span>
              <span className="text-[#40A39C] font-semibold">
                من المعرفة إلى المهارة السريرية الميدانية
              </span>
              <span>الوصول للقاعات</span>
            </div>
          </div>
        </div>

        {/* Bottom Progress Bar & Scroll Indicator */}
        <div className="relative z-10 max-w-xl mx-auto w-full flex items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="font-mono text-[#40A39C] font-bold">
              {Math.round(scrollProgress * 100)}%
            </span>
            <span>تقدّم سيناريو الوصول</span>
          </div>

          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0D5260] via-[#40A39C] to-white rounded-full transition-all duration-150"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>مرر لأسفل</span>
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
