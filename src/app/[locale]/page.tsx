import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { teamStats } from '@/data/stats';
import { Preloader } from '@/components/hero/Preloader';
import { Hero } from '@/components/hero/Hero';
import { ArrivalScene } from '@/components/story/ArrivalScene';
import { TheGapScene } from '@/components/story/TheGapScene';
import { ThreeRegionsScene } from '@/components/story/ThreeRegionsScene';
import { VisionMissionGoals } from '@/components/home/VisionMissionGoals';
import { CoursesRail } from '@/components/home/CoursesRail';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FutureVision } from '@/components/home/FutureVision';
import { InstitutionsMarquee } from '@/components/home/InstitutionsMarquee';
import { FinalCTA } from '@/components/home/FinalCTA';
import { EcgRibbon3D } from '@/components/3d/EcgRibbon3D';
import { GlassCard } from '@/components/common/GlassCard';
import { Users, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* 0. Preloader (<= 1.4s, once per session, skippable) */}
      <Preloader />

      {/* 1. Hero Section (Group Photo, Oversized Typography & Region Carousel) */}
      <Hero />

      {/* 2. Signature Scroll Scenario */}
      {/* Scene (a): The Arrival (Pinned vehicle arrival, team steps out, 3 beats) */}
      <ArrivalScene />

      {/* Scene (b): The Gap (Theory vs Clinical Practice stitched by Pulse Line) */}
      <TheGapScene />

      {/* Scene (c): Three Regions (3 Sequential Nodes: Khan Younis, Central, Gaza) */}
      <ThreeRegionsScene />

      {/* 3D Flowing ECG Ribbon Divider */}
      <EcgRibbon3D className="-my-10 relative z-20" />

      {/* 3. Vision, Mission & Goals (Expandable 5 goals) */}
      <VisionMissionGoals />

      {/* 4. Verified Proof Strip (Strictly from verified data table) */}
      <div id="proof" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <GlassCard variant="light" className="text-center p-6 border-white/70">
            <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-[#E4F3F1] text-[#0D5260] flex items-center justify-center">
              <Users className="w-6 h-6 text-[#40A39C]" />
            </div>
            <div className="text-3xl font-extrabold text-[#08324A] font-heading">
              {teamStats.totalVolunteers}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#0D5260] mt-1">
              متطوعاً ومتطوعة في الميدان
            </div>
            <div className="text-[11px] text-[#4A6572] mt-0.5">
              9 مجلس إدارة + 21 متطوع ميداني
            </div>
          </GlassCard>

          <GlassCard variant="light" className="text-center p-6 border-white/70">
            <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-[#E4F3F1] text-[#0D5260] flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#40A39C]" />
            </div>
            <div className="text-3xl font-extrabold text-[#08324A] font-heading">
              {teamStats.completedRosterRegistrants}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#0D5260] mt-1">
              طلب تسجيل موثق بالكشف
            </div>
            <div className="text-[11px] text-[#4A6572] mt-0.5">
              عبر 7 نسخ تدريبية في المحافظات
            </div>
          </GlassCard>

          <GlassCard variant="light" className="text-center p-6 border-white/70">
            <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-[#E4F3F1] text-[#0D5260] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-[#40A39C]" />
            </div>
            <div className="text-3xl font-extrabold text-[#08324A] font-heading">
              {teamStats.completedRosterAccepted}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#0D5260] mt-1">
              طالباً تم قبولهم وتدريبهم
            </div>
            <div className="text-[11px] text-[#4A6572] mt-0.5">
              بالإضافة إلى ~100 في الخياطة الجراحية
            </div>
          </GlassCard>

          <GlassCard variant="light" className="text-center p-6 border-white/70">
            <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-[#E4F3F1] text-[#0D5260] flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#40A39C]" />
            </div>
            <div className="text-3xl font-extrabold text-[#08324A] font-heading">
              {teamStats.collaboratingInstitutionsCount}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#0D5260] mt-1">
              جهات نتواصل ونتعاون معها
            </div>
            <div className="text-[11px] text-[#4A6572] mt-0.5">
              مستشفيات، بلديات، ومراكز صحية
            </div>
          </GlassCard>
        </div>
      </div>

      {/* 5. Latest Courses Rail with Full-screen Course Report Modal */}
      <CoursesRail />

      {/* 6. Why Choose Us (6 Evidence-backed Panels) */}
      <WhyChooseUs />

      {/* 7. Future Vision ("ما القادم؟" - Tagged planned) */}
      <FutureVision />

      {/* 8. Collaborating Institutions Strip (Approved legal phrasing) */}
      <InstitutionsMarquee />

      {/* 9. Final CTA (3 Audiences: Student / Trainer / Institution) */}
      <FinalCTA />
    </>
  );
}
