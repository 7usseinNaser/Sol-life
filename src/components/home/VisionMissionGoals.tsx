'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Eye, Target, Compass, ChevronDown, ChevronUp, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/motion/SectionHeading';

export function VisionMissionGoals() {
  const t = useTranslations('vision');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [goalsExpanded, setGoalsExpanded] = useState(false);

  const goals = [
    t('goal1'),
    t('goal2'),
    t('goal3'),
    t('goal4'),
    t('goal5'),
  ];

  return (
    <section
      id="vision"
      dir={isAr ? 'rtl' : 'ltr'}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${isAr ? 'text-right' : 'text-left'} select-none`}
      aria-label={isAr ? "الرؤية والرسالة والأهداف" : "Vision, Mission and Goals"}
    >
      <SectionHeading
        kicker={t('badge')}
        title={t('title')}
        subtitle={t('subtitle')}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 items-start">
        {/* Panel 1: Vision */}
        <div className="rounded-3xl p-6 sm:p-8 bg-white/70 border border-white/80 shadow-xl backdrop-blur-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#E4F3F1] border border-[#40A39C]/30 text-[#0D5260] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-7 h-7 text-[#40A39C]" />
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#40A39C] mb-2 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? 'الطموح الاستراتيجي' : 'Strategic Ambition'}</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#08324A] mb-4">
              {t('visionTab')}
            </h3>
            <p className="text-sm text-[#4A6572] leading-relaxed font-sans">
              {t('visionContent')}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#08324A]/10 text-xs font-semibold text-[#0D5260]">
            {isAr ? 'الريادة في العمل الطلابي الصحي' : 'Leadership in Health Student Action'}
          </div>
        </div>

        {/* Panel 2: Mission */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#08324A] to-[#0D5260] text-white border border-[#40A39C]/40 shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full group hover:-translate-y-1">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-[#40A39C] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Compass className="w-7 h-7 text-[#40A39C]" />
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#40A39C] mb-2 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? 'المهمة والواجب' : 'Duty & Purpose'}</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-4">
              {t('missionTab')}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed font-sans">
              {t('missionContent')}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/15 text-xs font-semibold text-[#40A39C]">
            {isAr ? 'التعليم الطبي المجاني حق لكل طالب' : 'Free Medical Education for All'}
          </div>
        </div>

        {/* Panel 3: Goals with Expansion */}
        <div className="rounded-3xl p-6 sm:p-8 bg-white/70 border border-white/80 shadow-xl backdrop-blur-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#E4F3F1] border border-[#40A39C]/30 text-[#0D5260] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-[#40A39C]" />
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#40A39C] mb-2 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? 'خطة العمل الميدانية' : 'Field Action Plan'}</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#08324A] mb-4">
              {t('goalsTab')}
            </h3>
            <div className="space-y-3">
              {goals.slice(0, goalsExpanded ? 5 : 2).map((goal, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A6572] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#40A39C] shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#08324A]/10">
            <button
              onClick={() => setGoalsExpanded(!goalsExpanded)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0D5260] hover:text-[#40A39C] transition-colors"
            >
              <span>{goalsExpanded ? (isAr ? 'عرض أقل' : 'Show less') : (isAr ? 'عرض كافة الأهداف الخمسة (5)' : 'Show all 5 strategic goals')}</span>
              {goalsExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
