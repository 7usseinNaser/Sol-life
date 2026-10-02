'use client';

import React from 'react';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { GlassHeart3D } from '@/components/3d/GlassHeart3D';
import { Gift, Map, Stethoscope, Users2, TrendingUp, CheckCircle, Award } from 'lucide-react';

export function WhyChooseUs() {
  const points = [
    {
      icon: Gift,
      title: 'مجاني بالكامل وبدون أي مقابل',
      fact: 'مجانية تامة 100%',
      desc: 'كافة دوراتنا ومستلزماتنا التدريبية متاحة مجاناً لطلبة التخصصات الصحية، إيماناً بأن العلم أمانة والصعوبات المادية لا يجوز أن تعيق الكفاءة.',
    },
    {
      icon: Map,
      title: 'حضور متزامن في كافة محافظات القطاع',
      fact: 'تغطية شمال ووسط وجنوب',
      desc: 'نعمل بالتوازي في خانيونس والوسطى وغزة لضمان العدالة الجغرافية في وصول التدريب لكافة الطلبة في أماكن تواجدهم.',
    },
    {
      icon: Stethoscope,
      title: 'تدريب سريري عملي بأدوات حقيقية',
      fact: 'سد الفجوة بين النظري والعملي',
      desc: 'تركيز كامل على المهارة اليدوية (خياطة جراحية، تغريز، تحاليل مخبرية، وإسعاف أولي) تحت إشراف نخبة من الأطباء والمدربين.',
    },
    {
      icon: Users2,
      title: 'فريق طلابي منظم وهيكل إداري واضح',
      fact: '30 متطوعاً ومتطوعة',
      desc: 'مجلس إدارة مكون من 9 أعضاء ولجان متخصصة (العلاقات العامة، إدارة المشاريع، الإعلام) و21 متطوعاً ميدانياً.',
    },
    {
      icon: TrendingUp,
      title: 'نبني بثبات على سجل إنجازاتنا',
      fact: 'برامج منفذة ومشاريع قادمة',
      desc: 'أنجزنا بنجاح برامج نوعية في المصطلحات والدم والجراحة، ونعمل على تأسيس منصة تعليمية رقمية ومنح دراسية للمتفوقين.',
    },
    {
      icon: Award,
      title: 'إقبال واسع وانتقائية تضمن الجودة',
      fact: '1,734 مسجلاً و 361 متدرباً',
      desc: 'الطاقة الاستيعابية للقاعات محددة بعناية لضمان حصول كل متدرب على وقت كافٍ للممارسة اليدوية الفردية والإشراف المباشر.',
    },
  ];

  return (
    <section
      id="why-us"
      dir="rtl"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none"
      aria-label="لماذا يثق بنا الطلبة والمؤسسات"
    >
      <SectionHeading
        kicker="الحقائق والأدلة الميدانية"
        title="لماذا يختار الطلبة فريق سول لايف؟"
        subtitle="كل ميزة نطرحها ترتكز على واقع موثق وملموس أثبتته دوراتنا الميدانية في قطاع غزة"
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
