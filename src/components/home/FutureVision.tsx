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
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#08324A]/40 to-[#041622]/40 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-[#40A39C]/40 transition-all duration-300"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 text-[#40A39C] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{proj.tag}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs font-semibold text-[#40A39C] mb-3">
                  {proj.enTitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {proj.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#40A39C]" />
                <span>{isAr ? 'ضمن خطة التوسع والتطوير الاستراتيجي للفريق' : 'Part of Soul Life strategic development roadmap'}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
