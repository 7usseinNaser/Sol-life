'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { Laptop, GraduationCap, Building2, Clock, Sparkles } from 'lucide-react';

export function FutureVision() {
  const t = useTranslations('future');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const futureProjects = [
    {
      icon: Laptop,
      title: t('card1Title'),
      enTitle: isAr ? 'Soul Life Digital Platform' : 'المنصة التعليمية الرقمية المفتوحة',
      tag: t('plannedBadge'),
      desc: t('card1Desc'),
    },
    {
      icon: GraduationCap,
      title: t('card2Title'),
      enTitle: isAr ? 'Clinical Simulation Unit' : 'معمل المحاكاة السريرية المتنقل',
      tag: t('plannedBadge'),
      desc: t('card2Desc'),
    },
    {
      icon: Building2,
      title: t('card3Title'),
      enTitle: isAr ? 'Student Clinical Symposia' : 'سلسلة المؤتمرات الطلابية السريرية',
      tag: t('plannedBadge'),
      desc: t('card3Desc'),
    },
  ];

  return (
    <section
      id="future"
      dir={isAr ? 'rtl' : 'ltr'}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${isAr ? 'text-right' : 'text-left'} select-none`}
      aria-label={isAr ? "المشاريع المستقبلية المخطط لها" : "Future Planned Initiatives"}
    >
      <SectionHeading
        kicker={t('badge')}
        title={t('title')}
        subtitle={t('subtitle')}
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
        {futureProjects.map((proj, idx) => {
          const Icon = proj.icon;
          return (
            <div
              key={idx}
              className="relative rounded-3xl p-6 sm:p-8 bg-white/95 border border-slate-200/80 shadow-[0_8px_25px_-5px_rgba(4,27,45,0.06)] hover:shadow-[0_16px_35px_-8px_rgba(0,191,165,0.2)] hover:border-[#00D2BA] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle ambient light orb */}
              <div className="absolute -top-12 -end-12 w-32 h-32 bg-gradient-to-br from-[#00E5C9]/15 to-[#0EA5E9]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6F8F6] text-[#00A896] border border-[#BCE8E2] flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#00D2BA] group-hover:to-[#0EA5E9] group-hover:text-[#041B2D] transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 border border-amber-200/90 text-amber-800 flex items-center gap-1.5 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{proj.tag}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#041B2D] group-hover:text-[#008B7A] transition-colors mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs font-bold text-[#009688] tracking-wide mb-3">
                  {proj.enTitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {proj.desc}
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center gap-1.5 group-hover:text-[#008B7A] transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-[#00BFA5]" />
                <span>{isAr ? 'ضمن خطة التوسع والتطوير الاستراتيجي للفريق' : 'Part of Soul Life strategic development roadmap'}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
