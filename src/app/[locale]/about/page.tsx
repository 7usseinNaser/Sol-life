import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'من نحن | رؤية ورسالة فريق سول لايف',
  description: 'تعرف على قصة فريق سول لايف، رؤيتنا، رسالتنا، وقيمنا الخمس في خدمة وإسناد طلبة التخصصات الطبية في قطاع غزة.',
};
import { SectionHeading } from '@/components/motion/SectionHeading';
import { GlassCard } from '@/components/common/GlassCard';
import { teamStats } from '@/data/stats';
import { Eye, Compass, Target, HeartHandshake, Shield, Sparkles, MapPin, CheckCircle2, Award } from 'lucide-react';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const values = [
    {
      title: 'التطوع والعطاء',
      desc: 'نؤمن بأن العلم أمانة يجب أن تصل لكل طالب دون مقابل، وبأن العمل الإنساني ركيزة الطبيب الأساسية.',
    },
    {
      title: 'الجودة والاحترافية',
      desc: 'نحرص على أعلى معايير التدريب الطبي السريري رغم التحديات ومحدودية الإمكانيات في قطاع غزة.',
    },
    {
      title: 'العدالة في الوصول',
      desc: 'نعمل بالتوازي في كل مناطق القطاع دون تمييز جغرافي، لتمكين كافة الطلبة في أماكن تواجدهم.',
    },
    {
      title: 'روح الفريق الواحد',
      desc: 'نؤمن بالعمل الجماعي المنظم عبر هيكل إداري ولجان تخصصية بأدوار تكاملية واضحة.',
    },
    {
      title: 'الاستمرارية والتطوير',
      desc: 'نبني بثقة على كل برنامج منجز لنقدم ما هو أفضل، ونوسع نطاق أثرنا نحو المستقبل.',
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none">
      {/* Page Header */}
      <SectionHeading
        kicker="هويتنا ومسيرتنا"
        title="عن فريق سول لايف"
        subtitle="مبادرة طلابية تطوعية غير ربحية يقودها طلبة كليات الطب في قطاع غزة لتدريب وتأهيل الكوادر الصحية"
        align="center"
      />

      {/* Main Intro Card with Team Photo */}
      <div className="mt-12 rounded-3xl overflow-hidden bg-gradient-to-b from-[#08324A] to-[#0D5260] text-white p-6 sm:p-10 border border-white/20 shadow-2xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#40A39C] border border-[#40A39C]/40 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>مبادرة طلابية خالصة</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading leading-tight">
              من نحن؟
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              فريق سول لايف (Soul Life Team) هو مبادرة طلابية تطوعية غير ربحية، يقودها طلبة كليات الطب في قطاع غزة، وتُعنى بتقديم برامج تدريبية وتعليمية مجانية عالية الجودة لطلبة التخصصات الطبية.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              انطلق الفريق من قناعة راسخة بأن الظروف المادية أو الصحية أو الأمنية الصعبة لا ينبغي أن تحول دون وصول الطالب إلى المعرفة والمهارة العملية التي يحتاجها ليصبح كادراً طبياً كفؤاً يصنع فارقاً في حياة مجتمعه.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
            <Image
              src="/images/team-group.jpg"
              alt="متطوعو فريق سول لايف في قطاع غزة"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08324A]/90 via-transparent to-transparent" />
            <div className="absolute bottom-3 right-3 text-xs font-bold bg-[#08324A]/80 px-3 py-1 rounded-full border border-white/20">
              30 متطوعاً ومتطوعة في الميدان
            </div>
          </div>
        </div>

        {/* Highlight Quote */}
        <div className="mt-8 pt-6 border-t border-white/15 bg-white/5 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-[#E4F3F1] leading-relaxed italic text-center max-w-4xl mx-auto">
            &ldquo;الريادة في بناء بيئة طلابية طبية متكاملة ومبتكرة، تُلهم وتُمكّن طلبة التخصصات الطبية معرفيًا ومهاريًا، ليكونوا قادة في العمل الإنساني ومساهمين في تشكيل مستقبل الرعاية الصحية.&rdquo;
          </p>
        </div>
      </div>

      {/* Vision & Mission Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <GlassCard variant="light" className="p-8 border-white/80">
          <div className="w-12 h-12 rounded-2xl bg-[#E4F3F1] text-[#0D5260] flex items-center justify-center mb-4">
            <Eye className="w-6 h-6 text-[#40A39C]" />
          </div>
          <h3 className="text-xl font-bold font-heading text-[#08324A] mb-3">
            رؤيتنا
          </h3>
          <p className="text-sm text-[#4A6572] leading-relaxed">
            نسعى أن نكون المبادرة الطلابية الطبية الرائدة في قطاع غزة، وتوفير بيئة تدريبية متكاملة ومبتكرة تُلهم طلبة الكليات الطبية وتُمكّنهم معرفيًا ومهاريًا ليكونوا قادة في العمل الإنساني وصنّاع مستقبل الرعاية الصحية.
          </p>
        </GlassCard>

        <GlassCard variant="light" className="p-8 border-white/80">
          <div className="w-12 h-12 rounded-2xl bg-[#E4F3F1] text-[#0D5260] flex items-center justify-center mb-4">
            <Compass className="w-6 h-6 text-[#40A39C]" />
          </div>
          <h3 className="text-xl font-bold font-heading text-[#08324A] mb-3">
            رسالتنا
          </h3>
          <p className="text-sm text-[#4A6572] leading-relaxed">
            نسعى لتوفير فرص تدريبية وتعليمية مجانية وعالية الجودة لطلبة التخصصات الطبية في جميع محافظات قطاع غزة، من خلال متطوعين وطواقم تدريبية مؤهلة، إيمانًا منّا بأن الصعوبات المادية يجب ألا تكون حاجزًا أمام بناء الكفاءة الطبية.
          </p>
        </GlassCard>
      </div>

      {/* Core Values */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold font-heading text-[#08324A] text-center mb-8">
          قيمنا ومبادئنا الراسخة
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/70 border border-white/80 shadow-md">
              <h4 className="text-base font-bold font-heading text-[#0D5260] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#40A39C]" />
                <span>{v.title}</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#4A6572] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How We Work: Regional Branches */}
      <div className="mt-16 rounded-3xl p-8 bg-[#08324A]/30 border border-white/10 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-[#40A39C] mb-2">
          <MapPin className="w-4 h-4" />
          <span>آلية العمل الميداني</span>
        </div>
        <h3 className="text-2xl font-bold font-heading text-white mb-4">
          كيف نعمل؟ نموذج الشعب الإقليمية الثلاث
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-6">
          يعمل الفريق حالياً بعضوية 30 متطوعاً ومتطوعة، موزعين على ثلاث شعب إقليمية تغطي قطاع غزة بالكامل: شمال، وسط، وجنوب، بحيث تُنفَّذ البرامج التدريبية في آنٍ واحد وبالتوازي لضمان وصولها لأكبر عدد ممكن من الطلبة دون تمييز جغرافي.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-right">
            <h4 className="font-bold text-sm text-white">شعبة الجنوب</h4>
            <p className="text-xs text-slate-400 mt-1">تغطية خانيونس ورفح بالتنسيق مع مجمع ناصر الطبي والمؤسسات الشريكة.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-right">
            <h4 className="font-bold text-sm text-white">شعبة الوسطى</h4>
            <p className="text-xs text-slate-400 mt-1">تغطية دير البلح والنصيرات ومخيماتها مع المركز الطبي واللجان المحلية.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-right">
            <h4 className="font-bold text-sm text-white">شعبة الشمال وغزة</h4>
            <p className="text-xs text-slate-400 mt-1">تغطية مدينة غزة والشمال بالتعاون مع مستشفى المعمداني وفرسان الغد.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
