'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { GlassHeart3D } from '@/components/3d/GlassHeart3D';
import { Gift, Map, Stethoscope, Users2, TrendingUp, CheckCircle, Award } from 'lucide-react';

export function WhyChooseUs() {
  const t = useTranslations('whyUs');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const points = [
    {
      icon: Gift,
      title: t('item1Title'),
      fact: isAr ? 'مجانية تامة 100%' : '100% Completely Free',
      desc: t('item1Desc'),
    },
    {
      icon: Map,
      title: t('item3Title'),
      fact: isAr ? 'تغطية شمال ووسط وجنوب' : 'North, Central & South',
      desc: t('item3Desc'),
    },
    {
      icon: Stethoscope,
      title: t('item4Title'),
      fact: isAr ? 'سد الفجوة بين النظري والعملي' : 'Bridging Theory & Practice',
      desc: t('item4Desc'),
    },
    {
      icon: Users2,
      title: isAr ? 'فريق طلابي منظم وهيكل إداري واضح' : 'Organized Student Team Structure',
      fact: isAr ? '30 متطوعاً ومتطوعة' : '30 Dedicated Volunteers',
      desc: isAr 
        ? 'مجلس إدارة مكون من 9 أعضاء ولجان متخصصة (العلاقات العامة، إدارة المشاريع، الإعلام) و21 متطوعاً ميدانياً.'
        : '9 executive board members, specialized committees (PR, Projects, Media), and 21 frontline field volunteers.',
    },
    {
      icon: TrendingUp,
      title: isAr ? 'نبني بثبات على سجل إنجازاتنا' : 'Building Solidly on Real Impact',
      fact: isAr ? 'برامج منفذة ومشاريع قادمة' : 'Delivered & Upcoming Tracks',
      desc: isAr
        ? 'أنجزنا بنجاح برامج نوعية في المصطلحات والدم والجراحة، ونعمل على تأسيس منصة تعليمية رقمية ومنح دراسية للمتفوقين.'
        : 'Delivered certified clinical programs in surgical suturing and diagnostics, with an upcoming digital repository and student grants.',
    },
    {
      icon: Award,
      title: isAr ? 'إقبال واسع وانتقائية تضمن الجودة' : 'High Demand & Quality-Focused Cohorts',
      fact: isAr ? '1,734 مسجلاً و 361 متدرباً' : '1,734 Registrants & 361 Certified',
      desc: isAr
        ? 'الطاقة الاستيعابية للقاعات محددة بعناية لضمان حصول كل متدرب على وقت كافٍ للممارسة اليدوية الفردية والإشراف المباشر.'
        : 'Carefully managed cohort sizes to ensure every trainee receives direct supervisor feedback and sufficient individual practice.',
    },
  ];

  return (
    <section
      id="why-us"
      dir={isAr ? 'rtl' : 'ltr'}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${isAr ? 'text-right' : 'text-left'} select-none`}
      aria-label={isAr ? "لماذا يثق بنا الطلبة والمؤسسات" : "Why Choose Soul Life"}
    >
      <SectionHeading
        kicker={t('badge')}
        title={t('title')}
        subtitle={t('subtitle')}
        align="center"
      />

      {/* 3D Glass Heart Centerpiece with 5 Orbiting Panels */}
      <div className="my-8">
        <GlassHeart3D />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
        {points.map((pt, idx) => {
          const Icon = pt.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl p-6 sm:p-7 bg-white/70 border border-white/80 shadow-xl backdrop-blur-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E4F3F1] border border-[#40A39C]/30 text-[#0D5260] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#40A39C]" />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#40A39C]/10 text-[#0D5260] text-[11px] font-bold mb-2">
                  {pt.fact}
                </div>

                <h3 className="text-lg font-bold font-heading text-[#08324A] mb-2">
                  {pt.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A6572] leading-relaxed font-sans">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#08324A]/10 flex items-center gap-1.5 text-xs font-semibold text-[#40A39C]">
                <CheckCircle className="w-4 h-4" />
                <span>حقيقة موثقة في سجل الفريق</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
