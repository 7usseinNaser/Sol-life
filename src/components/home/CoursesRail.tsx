'use client';

import React, { useState } from 'react';
import { programsData } from '@/data/programs';
import { Program } from '@/schemas/program';
import { CourseReportModal } from '@/components/home/CourseReportModal';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { Sparkles, Calendar, Users, MapPin, ArrowLeft } from 'lucide-react';

export function CoursesRail() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const completedPrograms = programsData.filter((p) => p.status === 'completed');

  return (
    <section
      id="courses"
      dir="rtl"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none"
      aria-label="أحدث البرامج والدورات التدريبية المنجزة"
    >
      <SectionHeading
        kicker="سجل الإنجاز الميداني المعتمد"
        title="أحدث الدورات والبرامج المنجزة"
        subtitle="برامج تدريبية تخصصية مجانية نُفذت في قطاع غزة وفق كشوف رسمية موثقة ومعتمدة"
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
                    {estimate ? 'برنامج القطاع الكامل' : `${prog.editions.length} نسخ منفذة`}
                  </span>
                  <span className="text-xs font-semibold text-[#40A39C] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{prog.defaultLocationLevel}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#08324A] group-hover:text-[#0D5260] transition-colors mb-1.5">
                  {prog.titleAr}
                </h3>
                <p className="text-xs font-semibold text-[#40A39C] mb-3">
                  {prog.titleEn}
                </p>
                <p className="text-xs sm:text-sm text-[#4A6572] leading-relaxed line-clamp-3">
                  {prog.shortDescription}
                </p>
              </div>

              {/* Bottom Meta & Action */}
              <div className="mt-6 pt-4 border-t border-[#08324A]/10 flex items-center justify-between text-xs text-[#08324A]">
                <div className="flex items-center gap-1.5 font-bold text-[#0D5260]">
                  <Users className="w-4 h-4 text-[#40A39C]" />
                  {estimate ? (
                    <span>~{estimate} طالب مستفيد</span>
                  ) : (
                    <span>{totalAccepted} طالب مقبول</span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#40A39C] group-hover:text-[#0D5260] transition-colors">
                  <span>تقرير الدورة الكامل</span>
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
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
