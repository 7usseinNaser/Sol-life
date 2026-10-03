'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { programsData } from '@/data/programs';
import { Program } from '@/schemas/program';
import { CourseReportModal } from '@/components/home/CourseReportModal';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { Sparkles, Calendar, Users, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';

export function CoursesRail() {
  const t = useTranslations('courses');
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const completedPrograms = programsData.filter((p) => p.status === 'completed');

  return (
    <section
      id="courses"
      dir={isAr ? 'rtl' : 'ltr'}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${isAr ? 'text-right' : 'text-left'} select-none`}
      aria-label={isAr ? "أحدث البرامج والدورات التدريبية المنجزة" : "Latest Completed Medical Training Programs"}
    >
      <SectionHeading
        kicker={t('badge')}
        title={t('title')}
        subtitle={t('subtitle')}
        align="center"
      />

      {/* Courses Grid / Rail */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
        {completedPrograms.map((prog) => {
          const totalAccepted = prog.editions.reduce((acc, ed) => acc + (ed.acceptedCount || 0), 0);
          const estimate = prog.editions.find((ed) => ed.trainedEstimate)?.trainedEstimate;

          return (
            <div
              key={prog.slug}
              onClick={() => setSelectedProgram(prog)}
              className="group relative rounded-3xl p-6 sm:p-7 bg-white/70 border border-white/80 shadow-xl backdrop-blur-xl hover:shadow-2xl hover:border-[#40A39C]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              {/* Subtle Card Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#40A39C]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#40A39C]/20 transition-all" />

              <div>
                {/* Header Pills */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E4F3F1] text-[#0D5260] border border-[#40A39C]/30">
                    {estimate 
                      ? (isAr ? 'برنامج القطاع الكامل' : 'All-Gaza Initiative') 
                      : (isAr ? `${prog.editions.length} نسخ منفذة` : `${prog.editions.length} Cohorts`)}
                  </span>
                  <span className="text-xs font-semibold text-[#40A39C] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{isAr ? prog.defaultLocationLevel : 'Gaza Strip'}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#08324A] group-hover:text-[#0D5260] transition-colors mb-1.5">
                  {isAr ? prog.titleAr : prog.titleEn}
                </h3>
                <p className="text-xs font-semibold text-[#40A39C] mb-3">
                  {isAr ? prog.titleEn : prog.titleAr}
                </p>
                <p className="text-xs sm:text-sm text-[#4A6572] leading-relaxed line-clamp-3">
                  {isAr 
                    ? prog.shortDescription 
                    : (prog.slug === 'medical-terminology' 
                      ? 'Intensive foundational training in medical and clinical terminology to facilitate hospital practice and academic coursework.' 
                      : prog.slug === 'al-taghreez' 
                      ? 'Hands-on practical training on core surgical suturing techniques using real instruments and silicone tissue models.' 
                      : 'Advanced surgical suturing techniques and complex wound management under consultant physician mentorship.')}
                </p>
              </div>

              {/* Bottom Meta & Action */}
              <div className="mt-6 pt-4 border-t border-[#08324A]/10 flex items-center justify-between text-xs text-[#08324A]">
                <div className="flex items-center gap-1.5 font-bold text-[#0D5260]">
                  <Users className="w-4 h-4 text-[#40A39C]" />
                  {estimate ? (
                    <span>{isAr ? `~${estimate} طالب مستفيد` : `~${estimate} Students Benefited`}</span>
                  ) : (
                    <span>{isAr ? `${totalAccepted} طالب مقبول` : `${totalAccepted} Certified Students`}</span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#40A39C] group-hover:text-[#0D5260] transition-colors">
                  <span>{t('detailsButton')}</span>
                  {isAr ? (
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-screen Glass Course Report Modal */}
      <CourseReportModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </section>
  );
}
