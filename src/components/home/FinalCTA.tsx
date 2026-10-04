'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { GraduationCap, Stethoscope, Building2, ArrowLeft, ArrowRight, HeartHandshake } from 'lucide-react';

export function FinalCTA() {
  const t = useTranslations('finalCta');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const audiences = [
    {
      icon: GraduationCap,
      category: isAr ? 'طالب في كليات الطب والعلوم الصحية' : 'Medical & Health Sciences Student',
      title: isAr ? 'ابدأ بالتعلّم وطوّر مهاراتك' : 'Sharpen Your Clinical Mastery',
      desc: isAr 
        ? 'انضم إلى دوراتنا الميدانية المجانية في محافظتك واكتسب المهارة السريرية العملية بإشراف مباشر.'
        : 'Join our free hands-on field workshops in your area and acquire clinical dexterity under direct specialist mentorship.',
      ctaText: t('studentCta'),
      href: '/programs',
      primary: true,
    },
    {
      icon: Stethoscope,
      category: isAr ? 'طبيب اختصاصي أو كادر تمريضي' : 'Specialist Physician or Nurse',
      title: isAr ? 'ساهم بخبرتك وألهم الجيل القادم' : 'Mentor and Inspire Future Doctors',
      desc: isAr
        ? 'شارك في الإشراف على الورش العملية ودرب طلبة الكليات الطبية لبناء كفاءات صحية قادرة على العطاء.'
        : 'Lead clinical simulation workshops and train rising health students to empower medical resilience across Gaza.',
      ctaText: t('trainerCta'),
      href: '/contact?role=trainer',
      primary: false,
    },
    {
      icon: Building2,
      category: isAr ? 'مؤسسة صحية، أكاديمية، أو داعمة' : 'Health, Academic, or Partner Institution',
      title: isAr ? 'تعاون معنا وساند العمل الطلابي' : 'Support Youth Healthcare Initiatives',
      desc: isAr
        ? 'نسعى لشراكات مستدامة لاستضافة البرامج وتوفير المستلزمات الطبية والمنح الدراسية للطلبة.'
        : 'Partner with us to host clinical tracks, provide surgical training kits, or sponsor student education.',
      ctaText: t('partnerCta'),
      href: '/collaborate',
      primary: false,
    },
  ];

  return (
    <section
      id="cta"
      dir={isAr ? 'rtl' : 'ltr'}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${isAr ? 'text-right' : 'text-left'} select-none`}
      aria-label={isAr ? "دعوة للمشاركة والتعاون مع فريق سول لايف" : "Call to Join & Collaborate with Soul Life Team"}
    >
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#08324A] via-[#062438] to-[#041622] text-white border border-[#40A39C]/40 shadow-2xl overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#40A39C]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0D5260]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#40A39C]/40 text-[#40A39C] text-xs font-bold mb-4">
            <HeartHandshake className="w-4 h-4" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 border ${
                  aud.primary
                    ? 'bg-gradient-to-b from-[#40A39C]/25 to-white/10 border-[#40A39C] shadow-lg shadow-[#40A39C]/10'
                    : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 text-[#40A39C] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#40A39C] block mb-1">
                    {aud.category}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    {aud.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {aud.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15">
                  <Link
                    href={aud.href}
                    className={`w-full py-3 px-5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                      aud.primary
                        ? 'bg-gradient-to-r from-[var(--color-teal-vibrant)] to-[var(--color-blue-electric)] text-[#041B2D] hover:scale-[1.02] hover:shadow-lg hover:shadow-[var(--color-teal-vibrant)]/30 active:scale-[0.98]'
                        : 'bg-[#041B2D]/80 hover:bg-[#0B2C47] text-white border border-[var(--color-teal-vibrant)]/40 hover:border-[var(--color-teal-vibrant)] active:scale-[0.98]'
                    }`}
                  >
                    <span>{aud.ctaText}</span>
                    {isAr ? (
                      <ArrowLeft className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
