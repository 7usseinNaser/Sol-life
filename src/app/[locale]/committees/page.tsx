import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'اللجان التخصصية | الهيكل التنظيمي لفريق سول لايف',
  description: 'اللجان التخصصية الأربعة لفريق سول لايف: اللجنة الطبية، العلاقات العامة، الإعلام والتسويق، والتنسيق الميداني واللوجستي.',
};
import { committeesData } from '@/data/committees';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { GlassCard } from '@/components/common/GlassCard';
import { Layers, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';

export default async function CommitteesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div dir="rtl" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none">
      <SectionHeading
        kicker="الهيكل الوظيفي الداخلي"
        title="لجان فريق سول لايف"
        subtitle="الهيكل التنظيمي للجان المتخصصة التي تتولى تنسيق وتنفيذ وتوثيق الأنشطة التدريبية"
        align="center"
      />

      {/* Notice Banner (§3.1) */}
      <div className="mt-8 mb-12 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs sm:text-sm flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
        <span>
          <strong>تنويه إداري (§3.1):</strong> تفاصيل واختصاصات اللجان المعروضة أدناه مستندة إلى مسودة البروفايل الداخلي وتنتظر اعتماد الصياغة النهائية من مجلس إدارة الفريق.
        </span>
      </div>

      {/* Committees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {committeesData.map((committee) => (
          <div
            key={committee.id}
            className="rounded-3xl p-6 sm:p-8 bg-white/70 border border-white/80 shadow-xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E4F3F1] border border-[#40A39C]/30 text-[#0D5260] flex items-center justify-center">
                  <Layers className="w-6 h-6 text-[#40A39C]" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                  مسودة قيد الاعتماد
                </span>
              </div>

              <h2 className="text-xl font-bold font-heading text-[#08324A] mb-1">
                {committee.nameAr}
              </h2>
              <p className="text-xs font-semibold text-[#40A39C] mb-3">
                {committee.nameEn}
              </p>
              <p className="text-xs sm:text-sm text-[#4A6572] leading-relaxed mb-4 font-sans">
                {committee.description}
              </p>

              {/* Coordinators */}
              {committee.coordinators && committee.coordinators.length > 0 && (
                <div className="mb-4 p-3 rounded-xl bg-[#E4F3F1]/60 border border-[#40A39C]/20 text-xs">
                  <span className="font-bold text-[#0D5260] block mb-1">مسؤولو اللجنة:</span>
                  <span className="text-[#08324A]">{committee.coordinators.join(' • ')}</span>
                </div>
              )}

              {/* Key Tasks */}
              <div className="space-y-2 border-t border-[#08324A]/10 pt-4">
                <span className="text-xs font-bold text-[#0D5260] block mb-2">
                  المهام والمسؤوليات الأساسية:
                </span>
                {committee.keyTasks.map((task: string, i: number) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#4A6572]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#40A39C] shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#08324A]/10 flex items-center justify-between text-[11px] text-slate-400">
              <span>تنسيق العمل الطلابي المشترك</span>
              <span className="text-[#40A39C] font-semibold">سول لايف</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
