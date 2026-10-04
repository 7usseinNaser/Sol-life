'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { institutionsData } from '@/data/institutions';
import { Building2, Handshake, ShieldAlert } from 'lucide-react';

export function InstitutionsMarquee() {
  const t = useTranslations('marquee');
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <section
      dir={isAr ? 'rtl' : 'ltr'}
      className={`py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${isAr ? 'text-right' : 'text-left'} select-none`}
      aria-label={isAr ? "جهات نتعاون ونتواصل معها" : "Institutions We Cooperate & Communicate With"}
    >
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white to-[#F6FCFB] border border-slate-200/90 shadow-[0_10px_35px_-10px_rgba(4,27,45,0.07)] relative overflow-hidden">
        {/* Top vibrant cyan accent line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00D2BA] via-[#0EA5E9] to-[#00D2BA]" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-200/80 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#008B7A] bg-[#00E5C9]/10 px-3 py-1 rounded-full border border-[#00E5C9]/25 mb-2">
              <Handshake className="w-3.5 h-3.5 text-[#00A896]" />
              <span>{isAr ? 'العلاقات العامة والتنسيق الميداني' : 'Field Coordination & Public Relations'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#041B2D]">
              {t('title')}
            </h3>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-sm">
            <ShieldAlert className="w-3.5 h-3.5 text-[#00A896]" />
            <span>{isAr ? 'مؤسسات صحية ومحلية استضافت أو نسقت لبرامجنا التدريبية (§3.1).' : 'Health & community entities hosting or coordinating training cohorts (§3.1).'}</span>
          </div>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {institutionsData.map((inst) => (
            <div
              key={inst.id}
              className={`p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#00D2BA] hover:shadow-md hover:shadow-[#00E5C9]/10 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group shadow-sm ${isAr ? 'text-right' : 'text-left'}`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#E6F8F6] text-[#00A896] flex items-center justify-center mb-2.5 group-hover:bg-[#00E5C9] group-hover:text-[#041B2D] transition-colors">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#041B2D] font-heading group-hover:text-[#008B7A] transition-colors">
                  {isAr ? inst.nameAr : (inst.nameEn || inst.nameAr)}
                </p>
                <p className="text-[11px] font-medium text-slate-500 mt-1 line-clamp-1">
                  {isAr ? inst.relationshipLabel : (inst.relationshipLabel.includes('مستشفى') ? 'Hospital Venue' : 'Host & Coordination Entity')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
