'use client';

import React, { useRef, useState, useEffect } from 'react';
import { BookOpen, Stethoscope, Scissors, CheckCircle, ArrowLeftRight } from 'lucide-react';

export function TheGapScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stitchProgress, setStitchProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const total = rect.height - windowHeight;
      const current = -rect.top;
      let progress = current / total;
      progress = Math.max(0, Math.min(1, progress));
      setStitchProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      id="gap"
      dir="rtl"
      className="relative w-full h-[220vh] bg-[#03111b] text-white select-none py-12"
      aria-label="سد الفجوة بين التعليم النظري والممارسة السريرية"
    >
      {/* Sticky Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 py-10">
        {/* Header */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#40A39C]/40 backdrop-blur-md text-xs font-semibold text-[#40A39C] mb-3">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>رسالة فريق سول لايف الأساسية</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4F3F1] to-[#40A39C]">
            سدّ الفجوة: من النظرية إلى الممارسة
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2 font-sans">
            الظروف الصعبة يجب ألا تحول دون وصول طالب الطب إلى المهارة العملية الحقيقية التي تصنع منه كادراً مؤهلاً.
          </p>
        </div>

        {/* The Split Container (Theory vs Practice) with Stitching Line */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full items-stretch relative">
            {/* Right Half: Theoretical / E-learning */}
            <div
              className="rounded-3xl p-6 sm:p-8 bg-[#08324A]/30 border border-white/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-500"
              style={{
                transform: `translateX(${(1 - stitchProgress) * 20}px)`,
                opacity: 0.6 + stitchProgress * 0.4,
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-4">
                  <BookOpen className="w-6 h-6 text-[#40A39C]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-200">
                  التعليم النظري والإلكتروني
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  رغم غنى المحتوى الأكاديمي، إلا أن غياب التطبيق المباشر وظروف انقطاع الكهرباء وضعف التواصل السريري يخلق فجوة تدريبية قاسية لدى الطلبة.
                </p>
              </div>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                  <span>اقتصار على الشاشات والكتب الأكاديمية</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                  <span>ندرة الأدوات التدريبية الحقيقية</span>
                </div>
              </div>
            </div>

            {/* Central Stitching Line (The Pulse Line Suturing the Gap) */}
            <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 flex-col items-center justify-center z-20 pointer-events-none">
              <div className="w-0.5 h-full bg-dashed border-r border-[#40A39C]/40 relative flex flex-col items-center justify-around py-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-5 h-2 rounded-full border border-[#40A39C] transition-all duration-300 transform ${
                      stitchProgress > (i + 1) / 7
                        ? 'bg-[#40A39C] rotate-12 scale-110 shadow-[0_0_8px_#40A39C]'
                        : 'bg-transparent -rotate-12 opacity-30'
                    }`}
                  />
                ))}
              </div>
              <div
                className="absolute p-2 rounded-full bg-[#08324A] border border-[#40A39C] shadow-lg transition-transform duration-200"
                style={{ top: `${stitchProgress * 90}%` }}
              >
                <Scissors className="w-4 h-4 text-[#40A39C] -rotate-45" />
              </div>
            </div>

            {/* Left Half: Hands-on Clinical Training */}
            <div
              className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#08324A]/60 to-[#0D5260]/60 border border-[#40A39C]/40 backdrop-blur-xl flex flex-col justify-between shadow-2xl transition-all duration-500"
              style={{
                transform: `translateX(${(1 - stitchProgress) * -20}px)`,
                boxShadow: `0 0 ${stitchProgress * 30}px rgba(64,163,156,0.25)`,
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#40A39C]/20 border border-[#40A39C]/40 flex items-center justify-center text-[#40A39C] mb-4">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  التدريب السريري والوجاهي المجاني
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  دورات عملية مكثفة بأدوات حقيقية، إشراف سريري من أطباء اختصاصيين، وتدريب متوازي في المحافظات الثلاث لتمكين كل طالب بيده.
                </p>
              </div>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#40A39C]" />
                  <span>خياطة وتغريز جراحي بالأدوات الطبية الفعلية</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#40A39C]" />
                  <span>تغطية متزامنة في خانيونس، الوسطى، وغزة</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Note */}
        <div className="relative z-10 max-w-xl mx-auto w-full text-center pt-4">
          <p className="text-xs text-slate-300 font-sans">
            نسبة اكتمال الربط الميداني:{' '}
            <strong className="text-[#40A39C] font-mono font-bold">
              {Math.round(stitchProgress * 100)}%
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
