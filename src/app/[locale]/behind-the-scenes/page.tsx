'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { Film, Sparkles, Wrench, Users, CalendarCheck, ShieldCheck } from 'lucide-react';

export default function BehindTheScenesPage() {
  const reelMoments = [
    {
      title: 'تحضير القاعات والمجسمات السريرية',
      phase: 'ما قبل التدريب',
      desc: 'فحص أدوات الخياطة الجراحية، ترتيب المعاطف الطبية، وتجهيز مجسمات التدريب لضمان أن كل متدرب يحظى بمساحة عمل مستقلة ومكتملة.',
      image: '/images/ambulance-arrival.jpg',
    },
    {
      title: 'التنسيق والاتصال بالمؤسسات المستضيفة',
      phase: 'الترتيبات اللوجستية',
      desc: 'تنسيق المواعيد مع البلديات والمستشفيات واللجان المحلية لتأمين قاعات ملائمة في ظل تحديات النقل والكهرباء في قطاع غزة.',
      image: '/images/team-group.jpg',
    },
    {
      title: 'مرافقة المدربين وتوزيع المهام',
      phase: 'ساعة الصفر الميدانية',
      desc: 'اجتماع تنسيقي سريع لأعضاء اللجان الميدانية، واستقبال الطلبة المقبولين، والتأكد من مطابقة كشوفات الحضور بدقة متناهية.',
      image: '/images/ambulance-arrival.jpg',
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none">
      <SectionHeading
        kicker="الجهد غير المرئي"
        title="كواليس العمل الميداني"
        subtitle="لمحات حصرية من كواليس تحضير القاعات، مراجعة المعدات الطبية، والتنسيق اللوجستي قبل انطلاق الورش السريرية"
        align="center"
      />

      {/* Cinematic Reel Story Cards */}
      <div className="mt-12 space-y-8">
        {reelMoments.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl p-6 sm:p-8 bg-[#08324A]/40 border border-white/15 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Visual Reel Frame */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/20 shadow-inner group">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08324A]/80 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#08324A]/80 border border-white/20 text-xs font-bold text-[#40A39C] backdrop-blur-md">
                {item.phase}
              </div>
            </div>

            {/* Content Story */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#40A39C]">
                <Film className="w-4 h-4" />
                <span>مشهد توثيقي 0{idx + 1}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                {item.desc}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#40A39C]" />
                  <span>تجهيز طبي تطوعي</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#40A39C]" />
                  <span>سواعد طلبة الطب</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
