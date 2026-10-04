import React from 'react';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { programsData } from '@/data/programs';
import { GlassCard } from '@/components/common/GlassCard';
import { Calendar, Clock, MapPin, Building, GraduationCap, ArrowRight, CheckCircle2, FileText, Download } from 'lucide-react';

import type { Metadata } from 'next';

export function generateStaticParams() {
  return programsData.map((prog) => ({
    slug: prog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    return {
      title: 'برنامج غير موجود | فريق سول لايف',
    };
  }

  const isAr = locale === 'ar';
  const title = isAr ? program.titleAr : program.titleEn;
  const description = program.shortDescription;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | فريق سول لايف`,
      description,
      type: 'article',
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const program = programsData.find((p) => p.slug === slug);
  if (!program) {
    notFound();
  }

  const totalAccepted = program.editions.reduce(
    (acc, ed) => acc + (ed.acceptedCount || 0),
    0
  );
  const estimate = program.editions.find((ed) => ed.trainedEstimate)?.trainedEstimate;

  return (
    <div dir="rtl" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-right select-none">
      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/programs"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#40A39C] hover:text-[#0D5260] transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة إلى كافة البرامج التدريبية</span>
        </Link>
      </div>

      {/* Hero Header Card */}
      <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#08324A] to-[#0D5260] text-white border border-white/20 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#40A39C]/20 border border-[#40A39C]/40 text-[#40A39C]">
            {program.status === 'completed' ? 'دورة منجزة وموثقة' : 'برنامج تدريبي'}
          </span>
          <span className="text-xs text-slate-300 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#40A39C]" />
            <span>نطاق التنفيذ: {program.defaultLocationLevel}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          {program.titleAr}
        </h1>
        <p className="text-sm font-semibold text-[#40A39C] mt-1">
          {program.titleEn}
        </p>
        <p className="text-sm sm:text-base text-slate-200 mt-4 leading-relaxed font-sans max-w-3xl">
          {program.shortDescription}
        </p>

        {/* Quick Numbers Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/15">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[11px] text-slate-300 block">إجمالي المستفيدين</span>
            <strong className="text-xl font-bold text-white">
              {estimate ? `~${estimate} طالب` : `${totalAccepted} طالب مقبول`}
            </strong>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[11px] text-slate-300 block">النسخ المنفّذة</span>
            <strong className="text-xl font-bold text-white">
              {program.editions.length} نسخ ميدانية
            </strong>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
            <span className="text-[11px] text-slate-300 block">رسوم الالتحاق</span>
            <strong className="text-xl font-bold text-[#40A39C]">
              مجانية بالكامل 100%
            </strong>
          </div>
        </div>
      </div>

      {/* Editions List */}
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold font-heading text-[#08324A]">
          تفاصيل النسخ المنفذة وجدول التدريب
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {program.editions.map((ed, idx) => (
            <div
              key={ed.id || idx}
              className="p-6 rounded-2xl bg-white/80 border border-white/80 shadow-md space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#08324A]/10 pb-3">
                <span className="font-bold text-base text-[#08324A] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#40A39C]" />
                  {ed.editionName}
                </span>
                <span className="text-xs px-3 py-1 rounded-lg bg-[#E4F3F1] border border-[#40A39C]/30 text-[#0D5260] font-bold">
                  {ed.displayLocation}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#4A6572] pt-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#40A39C]" />
                  <span>{ed.dateRange}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#40A39C]" />
                  <span>{ed.sessionsCount} جلسات {ed.hoursTotal ? `(${ed.hoursTotal} ساعات)` : ''}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#40A39C]" />
                  <span>
                    {ed.trainedEstimate
                      ? `~${ed.trainedEstimate} متدرب`
                      : `${ed.acceptedCount || 0} مقبول`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#40A39C]" />
                  <span>{ed.hostOrganization || 'قاعة تدريب معتمدة'}</span>
                </div>
              </div>

              <div className="pt-2 text-xs flex items-center justify-between text-[#08324A]">
                <div>
                  <span className="text-[#4A6572]">المدرب المشرف: </span>
                  <strong className="text-[#0D5260]">
                    {ed.trainerName === 'CONTENT_REQUIRED'
                      ? 'طاقم تدريبي معتمد من الفريق'
                      : ed.trainerName}
                  </strong>
                </div>
                {ed.registrantsCount && (
                  <span className="text-[#4A6572] text-[11px]">
                    المسجلون: {ed.registrantsCount} طالب
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Objectives */}
      {program.objectives.length > 0 && (
        <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-white/70 border border-white/80 shadow-lg">
          <h3 className="text-xl font-bold font-heading text-[#08324A] mb-4">
            أهداف ومخرجات البرنامج السريرية
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A6572]">
            {program.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#40A39C] shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
