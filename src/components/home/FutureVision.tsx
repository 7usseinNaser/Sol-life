'use client';

import React from 'react';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { Laptop, GraduationCap, Building2, Clock, Sparkles } from 'lucide-react';

export function FutureVision() {
  const futureProjects = [
    {
      icon: Laptop,
      title: 'المنصة التعليمية الرقمية المفتوحة',
      enTitle: 'Soul Life Digital Platform',
      tag: 'مخطّط له',
      desc: 'بناء منصة رقمية متكاملة تتيح سلايدات الدورات، والمراجع الطبية التخصصية، ومقاطع الفيديو التدريبية لطلبة الطب والتمريض أينما تواجدوا.',
    },
    {
      icon: GraduationCap,
      title: 'برنامج المنح الدراسية للطلبة المتفوقين',
      enTitle: 'Medical Student Scholarships',
      tag: 'مخطّط له',
      desc: 'تأسيس صندوق بالشراكة مع المؤسسات الإنسانية والمانحة لتوفير منح تغطي الرسوم الجامعية لطلبة الكليات الصحية المتفوقين ذوي الظروف الصعبة.',
    },
    {
      icon: Building2,
      title: 'مركز المحاكاة والتدريب السريري المتكامل',
      enTitle: 'Clinical Simulation Hub',
      tag: 'مخطّط له',
      desc: 'تأسيس قاعات تدريب مجهزة بمجسمات محاكاة متطورة تتيح للطلبة التدرب المستمر على مهارات الطوارئ والجراحة والإنعاش على مدار العام.',
    },
  ];

  return (
    <section
      id="future"
      dir="rtl"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none"
      aria-label="المشاريع المستقبلية المخطط لها"
    >
      <SectionHeading
        kicker="التطلعات المستقبلية"
        title="ما القادم؟"
        subtitle="هذه مشاريع ومبادرات طموحة مخطّط لها مستقبلاً، وليست خدمات متاحة حالياً"
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
                <span>ضمن خطة التوسع والتطوير الاستراتيجي للفريق</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
