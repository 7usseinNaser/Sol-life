import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'فريقنا | مجلس الإدارة والمتطوعون الميدانيون',
  description: 'تعرف على 30 متطوعاً ومتطوعة من كليات الطب والعلوم الصحية في قطاع غزة ومجلس الإدارة المعتمد والشعب الميدانية الثلاث.',
};
import { boardMembers, regionalVolunteersSummary } from '@/data/team';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { GlassCard } from '@/components/common/GlassCard';
import { VIPDeveloperShowcase } from '@/components/team/VIPDeveloperShowcase';
import { Users, Shield, MapPin } from 'lucide-react';

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === 'ar';

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} className={`min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${isAr ? 'text-right' : 'text-left'} select-none`}>
      <SectionHeading
        kicker={isAr ? 'الكوادر والقيادات الطلابية' : 'Student Cadres & Field Leadership'}
        title={isAr ? 'فريق سول لايف' : 'Soul Life Team'}
        subtitle={isAr ? '30 متطوعاً ومتطوعة من كليات الطب والعلوم الصحية في قطاع غزة يقودون التدريب الميداني المنظم' : '30 medical and health sciences student volunteers across Gaza orchestrating structured field training'}
        align="center"
      />

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 mb-16">
        <GlassCard variant="light" className="p-6 text-center border-white/80">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#E4F3F1] text-[#0D5260] flex items-center justify-center mb-3">
            <Users className="w-6 h-6 text-[#40A39C]" />
          </div>
          <div className="text-3xl font-extrabold text-[#08324A] font-heading">
            30
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#0D5260] mt-1">
            إجمالي عضوية الفريق
          </div>
        </GlassCard>

        <GlassCard variant="light" className="p-6 text-center border-white/80">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#E4F3F1] text-[#0D5260] flex items-center justify-center mb-3">
            <Shield className="w-6 h-6 text-[#40A39C]" />
          </div>
          <div className="text-3xl font-extrabold text-[#08324A] font-heading">
            9
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#0D5260] mt-1">
            أعضاء مجلس الإدارة
          </div>
        </GlassCard>

        <GlassCard variant="light" className="p-6 text-center border-white/80">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#E4F3F1] text-[#0D5260] flex items-center justify-center mb-3">
            <MapPin className="w-6 h-6 text-[#40A39C]" />
          </div>
          <div className="text-3xl font-extrabold text-[#08324A] font-heading">
            21
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#0D5260] mt-1">
            متطوعاً في 3 شعب إقليمية
          </div>
        </GlassCard>
      </div>

      {/* Board Members Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold font-heading text-[#08324A] mb-8 flex items-center gap-2">
          <Shield className="w-6 h-6 text-[#40A39C]" />
          <span>مجلس الإدارة (9 أعضاء موثقين)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-3xl bg-white/70 border border-white/80 shadow-lg backdrop-blur-xl hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#08324A] to-[#40A39C] text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                  {member.name.slice(0, 1)}
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-[#08324A]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#40A39C] mt-0.5">
                    {member.roleAr}
                  </p>
                  <p className="text-[11px] text-[#4A6572] font-mono mt-0.5">
                    {member.roleEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Field Teams Section */}
      <div className="mb-20 rounded-3xl p-8 bg-gradient-to-b from-[#08324A] to-[#0D5260] text-white border border-white/20 shadow-2xl">
        <div className="flex items-center gap-2 text-xs font-bold text-[#40A39C] mb-2">
          <MapPin className="w-4 h-4" />
          <span>الشعب الإقليمية الميدانية</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
          21 متطوعاً ومتطوعة في الميدان
        </h2>
        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mb-8 leading-relaxed">
          يتوزع 21 متطوعاً على ثلاث شعب جغرافية رئيسية في شمال ووسط وجنوب قطاع غزة، لضمان إدارة الورش وتحضير القاعات ومرافقة المدربين بالتوازي.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              {regionalVolunteersSummary.south.label}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {regionalVolunteersSummary.south.role}
            </p>
            <span className="text-xs font-bold text-[#40A39C] bg-[#40A39C]/20 px-3 py-1 rounded-lg">
              {regionalVolunteersSummary.south.count} متطوعين
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              {regionalVolunteersSummary.central.label}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {regionalVolunteersSummary.central.role}
            </p>
            <span className="text-xs font-bold text-[#40A39C] bg-[#40A39C]/20 px-3 py-1 rounded-lg">
              {regionalVolunteersSummary.central.count} متطوعين
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              {regionalVolunteersSummary.north.label}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {regionalVolunteersSummary.north.role}
            </p>
            <span className="text-xs font-bold text-[#40A39C] bg-[#40A39C]/20 px-3 py-1 rounded-lg">
              {regionalVolunteersSummary.north.count} متطوعين
            </span>
          </div>
        </div>
      </div>

      {/* VIP Developer & Software Systems Architect Showcase */}
      <div id="developer" className="scroll-mt-24">
        <VIPDeveloperShowcase />
      </div>
    </div>
  );
}
