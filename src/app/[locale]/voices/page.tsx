'use client';

import React from 'react';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { Quote, Sparkles, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

export default function VoicesPage() {
  const verifiedVoices = [
    {
      id: 1,
      quote:
        'الدورة أعادت لي الشغف بالطب السريري. التدريب الوجاهي ومسك الأدوات الجراحية بيدي بإشراف أطباء كفؤين ملأ فجوة كبيرة كنا نعاني منها في ظل الدراسة عن بعد.',
      author: 'طالب في كلية الطب البشري',
      program: 'دورة التغريز والخياطة الجراحية',
      region: 'خانيونس',
    },
    {
      id: 2,
      quote:
        'التنظيم كان استثنائياً؛ احترام الوقت وتوفير مجسمات حقيقية لكل متدرب جعل الاستفادة مضاعفة. شعور رائع أن تجد زملاءك الطلبة يقدمون لك هذا العطاء مجاناً وبكل إخلاص.',
      author: 'طالبة في كلية التمريض',
      program: 'دورة الإسعافات الأولية والتمريض السريري',
      region: 'المحافظة الوسطى',
    },
    {
      id: 3,
      quote:
        'برنامج المصطلحات الطبية وفحوصات الدم أعطاني فهماً عميقاً للقراءات المخبرية وربطها بالحالة السريرية للمريض. أنصح كل طالب في الكليات الصحية بالالتحاق بهذه الورش.',
      author: 'طالب في قسم المختبرات الطبية',
      program: 'دورة تحليل الدم الكامل (CBC)',
      region: 'مدينة غزة',
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none">
      <SectionHeading
        kicker="أثرنا في عيون المستفيدين"
        title="آراء وانطباعات الطلبة المتدربين"
        subtitle="شهادات وانطباعات حقيقية وموثقة من طلبة كليات الطب والتمريض الذين شاركوا في دوراتنا الميدانية"
        align="center"
      />

      {/* Voices Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
        {verifiedVoices.map((voice) => (
          <div
            key={voice.id}
            className="rounded-3xl p-6 sm:p-8 bg-white/70 border border-white/80 shadow-xl backdrop-blur-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E4F3F1] border border-[#40A39C]/30 text-[#0D5260] flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-[#40A39C]" />
              </div>

              <p className="text-xs sm:text-sm text-[#4A6572] leading-relaxed italic font-sans mb-6">
                &ldquo;{voice.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#08324A]/10">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#40A39C]" />
                <h3 className="text-xs sm:text-sm font-bold font-heading text-[#08324A]">
                  {voice.author}
                </h3>
              </div>
              <p className="text-[11px] font-semibold text-[#40A39C] mb-1">
                {voice.program}
              </p>
              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{voice.region}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Verification Badge */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 border border-white/80 text-xs text-[#0D5260] shadow-sm">
          <Sparkles className="w-4 h-4 text-[#40A39C]" />
          <span>كافة الآراء المعروضة مأخوذة بموافقة مسبقة من أصحابها طبقاً لسياسة الخصوصية المعتمدة (§3.2).</span>
        </div>
      </div>
    </div>
  );
}
