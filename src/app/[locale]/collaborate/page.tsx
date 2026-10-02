import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeading } from '@/components/motion/SectionHeading';

export const metadata: Metadata = {
  title: 'التعاون والشراكة | إسناد التدريب الطبي في غزة',
  description: 'مسارات التعاون المالي والعيني والمؤسسي مع فريق سول لايف لتمكين طلبة الكليات الصحية وتوفير مستلزمات التدريب الطبي.',
};
import { GlassCard } from '@/components/common/GlassCard';
import { CollaborateForm } from '@/components/forms/CollaborateForm';
import {
  Coins,
  PackageOpen,
  Building2,
  ShieldCheck,
  FileCheck2,
  Users2,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export default async function CollaboratePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const pillars = [
    {
      title: 'الدعم المالي المباشر',
      icon: Coins,
      accent: 'from-amber-500/20 to-amber-600/5 text-amber-400 border-amber-500/30',
      badge: 'شفافية كاملة',
      description:
        'المساهمة في تغطية نفقات المواد الاستهلاكية للتدريب الطبي العملي (خيوط جراحية، شاش معقم، أدوات محاكاة) لضمان مجانية أو رمزية الدورات لطلبتنا.',
      deliverables: [
        'تقارير مالية وتدريبية موثقة لكل دورة يتم تنفيذها',
        'تغطية تكاليف التدريب المباشر للطلبة المتعففين',
        'توفير مستهلكات التدريب السريري التخصصي',
      ],
    },
    {
      title: 'الدعم العيني والمستلزمات',
      icon: PackageOpen,
      accent: 'from-teal-500/20 to-teal-600/5 text-teal-400 border-teal-500/30',
      badge: 'أدوات ومحاكاة',
      description:
        'إسناد الفريق بمعدات تدريبية ومجسمات محاكاة طبية سريرية تسهم في صقل مهارات الطلبة السريرية في بيئة آمنة وواقعية.',
      deliverables: [
        'مجسمات تدريب الإنعاش القلبي الرئوي (CPR)',
        'أدوات التدريب الجراحي والخياطة السريرية',
        'مستهلكات سحب الدم وتركيب القساطر الوريدية',
      ],
    },
    {
      title: 'الشراكة المؤسسية والمكانية',
      icon: Building2,
      accent: 'from-cyan-500/20 to-cyan-600/5 text-cyan-400 border-cyan-500/30',
      badge: 'تكامل ميداني',
      description:
        'فتح مساحات وقاعات ومختبرات تدريبية مع الجامعات والمراكز الصحية والجمعيات الشريكة لتوسيع نطاق الاستيعاب الطلابي.',
      deliverables: [
        'توفير قاعات تدريبية مجهزة تقنياً للاستيعاب',
        'تنظيم فعاليات وأيام تدريبية طبية مشتركة',
        'تيسير وصول الطلبة في المحافظات الثلاث',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#030712]">
      {/* Background radial lights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مسارات الإسناد والتعاون الاستراتيجي</span>
          </div>

          <SectionHeading
            badge="يداً بيد لأجل طلبة غزة"
            title="شراكات تصنع الأثر الطبي"
            subtitle="نفتح آفاق التعاون مع المؤسسات الطبية والجهات الإنسانية والمانحين لتمكين طلبتنا بالمهارات السريرية الحية وتأمين استمرارية التدريب في الميدان."
            align="center"
          />
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <GlassCard
                key={idx}
                variant="dark"
                hoverEffect
                className="flex flex-col justify-between p-8 border border-white/10 bg-[#0B1528]/60 hover:border-teal-500/40 relative overflow-hidden group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${pillar.accent} border`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <span className="text-xs font-semibold text-white/50 block">
                      مخرجات هذا المسار:
                    </span>
                    {pillar.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                  <span>فريق سول لايف</span>
                  <span className="text-teal-400/80">شفافية وتوثيق</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Medical Integrity & Governance Disclaimer (§3.1) */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-teal-950/40 via-[#0B1528]/80 to-slate-900/60 border border-teal-500/20 backdrop-blur-xl relative">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span>ميثاق النزاهة وحوكمة التدريب الطبي</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  لوائح الفريق
                </span>
              </h4>
              <p className="text-white/75 text-sm leading-relaxed">
                فريق سول لايف مبادرة طلابية تطوعية غير ربحية متخصصة حصراً في التدريب الطبي والسريري
                لطلبة الكليات الصحية في قطاع غزة، ولا يقدّم الفريق أي خدمات علاجية أو إسعافية طارئة
                للمواطنين. كافة المساهمات والتبرعات توجّه بحوكمة وتوثيق دقيق لتأمين أدوات ومستهلكات التدريب السريري وقاعات الورش المعتمدة.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0 text-xs text-white/60 border-r border-white/10 pr-6">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-teal-400" />
                <span>تقارير إنجاز دورية</span>
              </div>
              <div className="flex items-center gap-2">
                <Users2 className="w-4 h-4 text-teal-400" />
                <span>إشراف أكاديمي وسريري</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>تغطية متوازنة للمحافظات</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Form Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              ابدأ مسار التعاون اليوم
            </h3>
            <p className="text-white/60 text-sm">
              أرسل بياناتك ومقترح الشراكة، وسيتواصل معك منسق العلاقات العامة والتواصل في الفريق لمناقشة التفاصيل.
            </p>
          </div>

          <CollaborateForm />
        </div>
      </div>
    </div>
  );
}
