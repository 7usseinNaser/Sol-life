import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SectionHeading } from '@/components/motion/SectionHeading';

export const metadata: Metadata = {
  title: 'تواصل معنا | القنوات الرسمية لفريق سول لايف',
  description: 'قنوات التواصل المعتمدة مع فريق سول لايف في قطاع غزة: البريد الرسمي، الهاتف والواتساب، وحساب إنستغرام، مع نموذج المراسلة المباشر.',
};
import { GlassCard } from '@/components/common/GlassCard';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  Mail,
  Phone,
  Instagram,
  MapPin,
  Sparkles,
  HelpCircle,
  ShieldAlert,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const contactChannels = [
    {
      title: 'البريد الإلكتروني الرسمي',
      value: 'soullifeteam17@gmail.com',
      href: 'mailto:soullifeteam17@gmail.com',
      icon: Mail,
      accent: 'from-teal-500/20 to-teal-600/5 text-teal-400 border-teal-500/30',
      actionLabel: 'مراسلة عبر البريد',
      badge: 'الاستفسارات الرسمية',
      direction: 'ltr',
    },
    {
      title: 'الهاتف والواتساب المعتمد',
      value: '+972 56-784-4766',
      href: 'https://wa.me/972567844766',
      icon: Phone,
      accent: 'from-emerald-500/20 to-emerald-600/5 text-emerald-400 border-emerald-500/30',
      actionLabel: 'محادثة فورية (WhatsApp)',
      badge: 'تواصل وتنسيق مباشر',
      direction: 'ltr',
    },
    {
      title: 'الحساب الرسمي على إنستغرام',
      value: '@soullife.gaza1',
      href: 'https://instagram.com/soullife.gaza1',
      icon: Instagram,
      accent: 'from-pink-500/20 to-pink-600/5 text-pink-400 border-pink-500/30',
      actionLabel: 'متابعة الإعلانات والأنشطة',
      badge: 'الإعلانات ومواعيد الدورات',
      direction: 'ltr',
    },
    {
      title: 'النطاق الجغرافي والانتشار',
      value: 'قطاع غزة (شمال، وسط، جنوب)',
      href: '#',
      icon: MapPin,
      accent: 'from-cyan-500/20 to-cyan-600/5 text-cyan-400 border-cyan-500/30',
      actionLabel: 'تنسيق قاعات التدريب',
      badge: 'ثلاث مناطق جغرافية',
      direction: 'rtl',
    },
  ];

  const faqs = [
    {
      q: 'كيف يمكنني التسجيل في الدورات والورش التدريبية القادمة؟',
      a: 'نعلن عن فتح باب التسجيل لكل دورة عبر حسابنا الرسمي على إنستغرام وعبر صفحة "الدورات والبرامج" في هذا الموقع. يتم فرز المقاعد بحسب التخصص والأولوية لضمان أقصى تركيز وتطبيق عملي لكل طالب.',
    },
    {
      q: 'هل يقدّم فريق سول لايف شهادات حضور للورش التدريبية؟',
      a: 'نعم، يحصل كل متدرب يكمل الدورة ويلتزم بالحضور والممارسة العملية على إفادة/شهادة مشاركة رسمية من الفريق توثّق عدد الساعات والمهارات السريرية التي تم التدرب عليها.',
    },
    {
      q: 'هل يقدّم الفريق خدمات طبية أو علاجية مباشرة للمواطنين؟',
      a: 'كلا، فريق سول لايف مبادرة طلابية تدريبية وأكاديمية متخصصة حصراً في صقل مهارات طلبة الكليات الطبية والصحية، ولا يقدّم الفريق أي خدمات علاجية أو طبية أو إسعافية للمواطنين.',
    },
    {
      q: 'كيف يمكن للأطباء والمدربين السريريين الانضمام للمبادرة؟',
      a: 'نرحب بكل طبيب استشاري أو أخصائي يرغب في التطوع بنقل خبرته السريرية لطلبة غزة. يمكنك مراسلتنا باختيار صفة "طبيب / مدرب سريري" في النموذج أدناه وسيتواصل معك رئيس اللجنة الطبية.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#030712]">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>قنوات التواصل والتنسيق المعتمدة</span>
          </div>

          <SectionHeading
            badge="تواصل معنا"
            title="نحن هنا للاستماع إليكم"
            subtitle="نسعد بالإجابة عن استفسارات الطلبة والأطباء والمؤسسات الشريكة، وتنسيق الأنشطة التدريبية في عموم قطاع غزة."
            align="center"
          />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((item, idx) => {
            const Icon = item.icon;
            const isClickable = item.href !== '#';
            return (
              <GlassCard
                key={idx}
                variant="dark"
                hoverEffect={isClickable}
                className="p-6 border border-white/10 bg-[#0B1528]/60 flex flex-col justify-between group transition-all duration-300 hover:border-teal-500/40"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${item.accent} border`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white/70">
                      {item.title}
                    </h4>
                    <p
                      dir={item.direction}
                      className="text-base font-bold text-white group-hover:text-teal-300 transition-colors truncate"
                    >
                      {item.value}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  {isClickable ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-400 group-hover:text-teal-300 transition-colors"
                    >
                      <span>{item.actionLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-white/40">
                      {item.actionLabel}
                    </span>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Security and Privacy Notice Box */}
        <div className="rounded-3xl p-6 bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-white/70">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1 leading-relaxed">
            <span className="font-bold text-white block">
              تنويه بشأن السلامة وخصوصية المواقع:
            </span>
            <p>
              حفاظاً على سلامة المتدربين وفرق العمل في قطاع غزة، لا يعتمد الفريق أي مقار دائمة أو عناوين شوارع منشورة. يُعلن عن أماكن إقامة الورش التدريبية حصراً للمقبولين في كل دورة عبر القاعات الأكاديمية والمراكز الصحية الشريكة المعتمدة.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              نموذج الاستفسار والمراسلة المباشرة
            </h3>
            <p className="text-white/60 text-sm">
              املأ البيانات التالية وسيقوم منسق التواصل في الفريق بالرد عليك في أقرب وقت.
            </p>
          </div>

          <ContactForm />
        </div>

        {/* FAQs */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs text-teal-400 font-semibold">
              <HelpCircle className="w-4 h-4" />
              <span>إجابات سريعة</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              الأسئلة الشائعة
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <GlassCard
                key={idx}
                variant="dark"
                className="p-6 border border-white/10 bg-[#0B1528]/50 space-y-3"
              >
                <h4 className="text-base font-bold text-white flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0 mt-2" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-white/70 leading-relaxed pr-4">
                  {faq.a}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Team Motto Sign-off */}
        <div className="text-center py-6 border-t border-white/5 space-y-2">
          <p className="text-sm font-semibold tracking-wider text-teal-400">
            فريق سول لايف • Soul Life Team
          </p>
          <p className="text-xs text-white/40">
            نتعلّم • نتدرّب • نُلهم
          </p>
        </div>
      </div>
    </div>
  );
}
