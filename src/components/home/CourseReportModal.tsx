'use client';

import React, { useEffect } from 'react';
import { Program } from '@/schemas/program';
import { X, Calendar, Clock, MapPin, Building, GraduationCap, CheckCircle, FileText } from 'lucide-react';

interface CourseReportModalProps {
  program: Program | null;
  onClose: () => void;
}

export function CourseReportModal({ program, onClose }: CourseReportModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (program) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none animate-fade-in"
    >
      {/* Blurred Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#041622]/80 backdrop-blur-xl transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-[#08324A]/90 border border-white/20 text-white shadow-2xl backdrop-blur-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="إغلاق التقرير"
          className="absolute top-6 left-6 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-right pr-1 pt-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#40A39C]/20 border border-[#40A39C]/40 text-[#40A39C] text-xs font-bold mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>تقرير الدورة الميدانية المعتمد</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            {program.titleAr}
          </h2>
          <p className="text-sm font-medium text-slate-300 mt-1">
            {program.titleEn}
          </p>
          <p className="text-xs sm:text-sm text-slate-200 mt-3 leading-relaxed">
            {program.shortDescription}
          </p>
        </div>

        {/* Editions and Execution Details */}
        <div className="mt-8 space-y-4">
          <h3 className="text-base font-bold font-heading text-[#40A39C] border-b border-white/10 pb-2">
            النسخ المنفّذة وجدول المواعيد والمدربين
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {program.editions.map((edition, idx) => (
              <div
                key={edition.id || idx}
                className="rounded-2xl p-4 sm:p-5 bg-white/5 border border-white/10 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#40A39C]" />
                    {edition.editionName}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#40A39C]/15 border border-[#40A39C]/30 text-[#40A39C] font-semibold">
                    {edition.displayLocation}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#40A39C] shrink-0" />
                    <span>{edition.dateRange}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#40A39C] shrink-0" />
                    <span>{edition.sessionsCount} جلسات {edition.hoursTotal ? `(${edition.hoursTotal} س)` : ''}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#40A39C] shrink-0" />
                    <span>
                      {edition.trainedEstimate
                        ? `~${edition.trainedEstimate} متدرب`
                        : `${edition.acceptedCount || 0} مقبول`}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-[#40A39C] shrink-0" />
                    <span className="line-clamp-1">{edition.hostOrganization || 'قاعة تدريب معتمدة'}</span>
                  </div>
                </div>

                {/* Trainer Information */}
                <div className="pt-2 text-xs flex items-center justify-between text-slate-300">
                  <div>
                    <span className="text-white/50">إشراف المدرب: </span>
                    <strong className="text-white">
                      {edition.trainerName === 'CONTENT_REQUIRED'
                        ? 'طاقم تدريبي معتمد من الفريق'
                        : edition.trainerName}
                    </strong>
                  </div>
                  {edition.registrantsCount && (
                    <span className="text-slate-400 text-[11px]">
                      المسجلون: {edition.registrantsCount} طالب
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Objectives */}
        {program.objectives.length > 0 && (
          <div className="mt-6 pt-4 border-t border-white/10">
            <h4 className="text-sm font-bold text-[#40A39C] mb-2 font-heading">
              مخرجات الدورة وأهداف التدريب:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
              {program.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#40A39C] shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Note on Location Privacy */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#40A39C]" />
            <span>يتم الاكتفاء بعرض المحافظة لسلامة وخصوصية القاعات (§3.2).</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
