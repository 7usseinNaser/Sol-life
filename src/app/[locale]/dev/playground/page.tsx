'use client';

import React, { useState } from 'react';
import { PulseLine, PulseLineMode } from '@/components/motion/PulseLine';
import { ScrollScene } from '@/components/motion/ScrollScene';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { RevealText } from '@/components/motion/RevealText';
import { ParallaxImage } from '@/components/motion/ParallaxImage';
import { StatCounter } from '@/components/motion/StatCounter';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { CursorFollowLight } from '@/components/motion/CursorFollowLight';
import { GlassCard } from '@/components/common/GlassCard';
import { teamStats } from '@/data/stats';
import { Sparkles, Activity, Eye, Zap, ShieldCheck } from 'lucide-react';

export default function MotionPlaygroundPage() {
  const [pulseMode, setPulseMode] = useState<PulseLineMode>('ecg');
  const [forceReducedMotion, setForceReducedMotion] = useState(false);

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${forceReducedMotion ? 'reduce-motion-active' : ''}`}>
      <CursorFollowLight />

      {/* Playground Header & Controls */}
      <div className="glass-panel-light rounded-3xl p-6 sm:p-8 mb-12 border border-white/70 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4F3F1] text-[#0D5260] text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#40A39C]" />
            <span>المرحلة 2: مختبر أنظمة الحركة الأساسية (Core Motion Systems)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#08324A]">
            لوحة اختبار وفحص مكونات الحركة والتفاعل
          </h1>
          <p className="text-sm text-[#4A6572] mt-1">
            فحص خط النبض، التمرير التثبيتي، الأزرار المغناطيسية، كشف النصوص، والعدادات الموثقة.
          </p>
        </div>

        {/* Accessibility Simulator Toggle */}
        <button
          type="button"
          onClick={() => setForceReducedMotion((prev) => !prev)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
            forceReducedMotion
              ? 'bg-[#08324A] text-white border-[#08324A] shadow-md'
              : 'bg-white/80 text-[#0D5260] border-[#0D5260]/20 hover:bg-white'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-[#40A39C]" />
          <span>محاكاة تقليل الحركة (Reduced Motion): {forceReducedMotion ? 'مفعل' : 'معطل'}</span>
        </button>
      </div>

      {/* 1. Pulse Line Morphing Showcase */}
      <section className="mb-16">
        <SectionHeading
          kicker="خط النبض التفاعلي"
          title="The Pulse Line: حالات التحول والشريان المستمر"
          subtitle="خط SVG رئيسي واحد يعبر الموقع، يتغير شكله بانسيابية ليصبح طريقاً أو خطاً زمنياً أو خيطاً جراحياً."
        />

        <GlassCard className="p-8">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs font-bold text-[#0D5260] me-2">اختر وضع المسار:</span>
            {(['ecg', 'road', 'thread', 'timeline', 'flat'] as PulseLineMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setPulseMode(mode)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  pulseMode === mode
                    ? 'bg-[#40A39C] text-white shadow-sm'
                    : 'bg-white/80 text-[#08324A] hover:bg-white border border-[#0D5260]/10'
                }`}
              >
                {mode === 'ecg' ? 'نبض طبي (ECG)' : mode === 'road' ? 'طريق (Road)' : mode === 'thread' ? 'خيط جراحي (Thread)' : mode === 'timeline' ? 'خط زمني (Timeline)' : 'مستقيم (Flat)'}
              </button>
            ))}
          </div>

          <div className="py-6 bg-[#08324A]/5 rounded-2xl p-4 overflow-hidden border border-[#0D5260]/10">
            <PulseLine mode={pulseMode} glow={true} className="my-4" />
          </div>
        </GlassCard>
      </section>

      {/* 2. Magnetic Buttons & Interactive Micro-actions */}
      <section className="mb-16">
        <SectionHeading
          kicker="الميكرو-إنيميشن"
          title="الأزرار المغناطيسية (Magnetic Buttons)"
          subtitle="أزرار تستجيب لحركة المؤشر عند الاقتراب بقوة جذب فيزيائية سلسة (تعطل تلقائياً على اللمس وتقليل الحركة)."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard className="text-center p-8 flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-[#0D5260] mb-4">زر المبادرة الأساسي</span>
            <MagneticButton className="px-6 py-3 bg-gradient-to-r from-[#08324A] to-[#40A39C] text-white shadow-lg shadow-[#08324A]/20">
              <Zap className="w-4 h-4 me-2 text-[#67C0B9]" />
              <span>اكتشف قصتنا</span>
            </MagneticButton>
          </GlassCard>

          <GlassCard className="text-center p-8 flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-[#0D5260] mb-4">زر الزجاج الشفاف</span>
            <MagneticButton className="px-6 py-3 bg-white/80 text-[#08324A] border border-[#0D5260]/15 hover:bg-white shadow-sm">
              <Eye className="w-4 h-4 me-2 text-[#40A39C]" />
              <span>شاهد أثرنا الميداني</span>
            </MagneticButton>
          </GlassCard>

          <GlassCard className="text-center p-8 flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-[#0D5260] mb-4">زر التأكيد الأخضر التيل</span>
            <MagneticButton className="px-6 py-3 bg-[#40A39C] text-white hover:bg-[#1B8B82] shadow-md shadow-[#40A39C]/20">
              <Activity className="w-4 h-4 me-2" />
              <span>تعاون مع الفريق</span>
            </MagneticButton>
          </GlassCard>
        </div>
      </section>

      {/* 3. Text Reveal & Accurate Stat Counters */}
      <section className="mb-16">
        <SectionHeading
          kicker="الكشف والإحصاءات"
          title="كشف النصوص والعدادات الرقمية الموثقة"
          subtitle="ظهور متدرج للكلمات العربية مع عدادات تستند بدقة للأرقام الرسمية دون تضخيم."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reveal Text Box */}
          <GlassCard className="p-8">
            <span className="text-xs font-bold text-[#0D5260] uppercase block mb-3">النصوص البارزة (RevealText)</span>
            <RevealText
              as="h3"
              text="نتعلّم • نتدرّب • نُلهم: مبادرة طلابية لخدمة كليات الطب في قطاع غزة"
              className="text-xl sm:text-2xl font-bold text-[#08324A] mb-4"
            />
            <RevealText
              as="p"
              text="الظروف صعبة، لكن الوصول للمعرفة السريرية والمهارة الجراحية يجب ألا يكون كذلك. نعمل بالتوازي في الشمال والوسط والجنوب."
              className="text-[#4A6572] leading-relaxed text-sm"
              staggerMs={30}
            />
          </GlassCard>

          {/* Verified Counters Box */}
          <GlassCard className="p-8">
            <span className="text-xs font-bold text-[#0D5260] uppercase block mb-4">العدادات الموثقة (StatCounters)</span>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="text-xs text-[#4A6572] block mb-1">المتطوعون الميدانيون</span>
                <StatCounter
                  value={teamStats.totalVolunteers}
                  suffix="متطوعاً"
                  className="text-3xl text-[#08324A]"
                />
              </div>

              <div>
                <span className="text-xs text-[#4A6572] block mb-1">طلبات الالتحاق (7 دورات)</span>
                <StatCounter
                  value={teamStats.completedRosterRegistrants}
                  suffix="طالباً"
                  className="text-3xl text-[#40A39C]"
                />
              </div>

              <div>
                <span className="text-xs text-[#4A6572] block mb-1">المقبولون فعلياً</span>
                <StatCounter
                  value={teamStats.completedRosterAccepted}
                  suffix="متدرباً"
                  className="text-3xl text-[#0D5260]"
                />
              </div>

              <div>
                <span className="text-xs text-[#4A6572] block mb-1">الخياطة الجراحية (منفصل)</span>
                <StatCounter
                  value={teamStats.surgicalSuturingTrainedEstimate}
                  prefix="~"
                  suffix="طالب"
                  className="text-3xl text-[#67C0B9]"
                />
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 4. Parallax Image Showcase */}
      <section className="mb-16">
        <SectionHeading
          kicker="التفاعل مع الصور"
          title="الصورة الجماعية مع حركة العمق (Parallax Image)"
          subtitle="تأثير العمق الرأسي المحسوب على الصورة الرسمية للفريق مع حواف دائرية فخمة."
        />

        <div className="max-w-3xl mx-auto">
          <ParallaxImage
            src="/images/team-group.jpg"
            alt="صورة فريق سول لايف الرسمية"
            width={1200}
            height={800}
            className="w-full h-80 sm:h-96 object-cover"
          />
        </div>
      </section>

      {/* 5. ScrollScene Simulation */}
      <section className="mb-20">
        <SectionHeading
          kicker="تثبيت المشاهد (Scrub & Pin)"
          title="غلاف مشهد التمرير التثبيتي (ScrollScene Preview)"
          subtitle="تجربة تثبيت المحتوى والتمرير المتحكم بنسبة التقدم مع مؤشر شريط التقدم العلوي."
        />

        <ScrollScene heightViewport={1.5}>
          {(progress, isReduced) => (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <GlassCard className="max-w-lg p-8 border-2 border-[#40A39C]/30 shadow-2xl">
                <span className="text-xs font-bold text-[#0D5260] uppercase mb-2 block">
                  {isReduced ? 'وضع العرض الثابت المباشر' : 'مشهد تثبيتي تفاعلي (Pinned Scene)'}
                </span>
                <h3 className="text-2xl font-bold text-[#08324A] mb-3">
                  مستوى تقدم التمرير: {Math.round(progress * 100)}%
                </h3>
                <p className="text-sm text-[#4A6572] mb-6">
                  {isReduced
                    ? 'يتم عرض المشهد بدون تثبيت إجباري عند تفعيل تقليل الحركة لضمان راحة الزائر.'
                    : 'يتحكم هذا المكون في مشاهد الوصول (Arrival) وسد الفجوة (The Gap) والمناطق الثلاث في المراحل القادمة.'}
                </p>

                <div className="w-full bg-[#08324A]/10 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#08324A] via-[#40A39C] to-[#67C0B9] h-full transition-all duration-75"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </GlassCard>
            </div>
          )}
        </ScrollScene>
      </section>
    </div>
  );
}
