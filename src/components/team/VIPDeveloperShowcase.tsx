'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { featuredContributor } from '@/data/team';
import { 
  Code2, 
  Sparkles, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Gauge, 
  Terminal,
  CheckCircle2,
  Award
} from 'lucide-react';

export function VIPDeveloperShowcase() {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [isStatementOpen, setIsStatementOpen] = useState(false);

  return (
    <section className="relative my-16 overflow-hidden rounded-3xl">
      {/* Ambient background glow & radial light */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08324A] via-[#0A384A] to-[#041B26] z-0" />
      <div className="absolute -top-32 -end-32 w-96 h-96 bg-[#40A39C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -start-32 w-96 h-96 bg-[#00A389]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 p-6 sm:p-10 lg:p-12 border border-[#40A39C]/30 shadow-2xl backdrop-blur-2xl">
        {/* Header Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#40A39C]/15 border border-[#40A39C]/40 text-[#67C0B9] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#40A39C] animate-pulse" />
            <span>
              {isAr ? 'الإشراف والهندسة البرمجية للمنصة الرقمية' : 'Lead Platform Software Engineering & Architecture'}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{isAr ? 'كود معتمد: صفر أخطاء برمجية' : 'Verified: Zero Defects Architecture'}</span>
          </div>
        </div>

        {/* Main Content Grid: Avatar + Bio + Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8">
          
          {/* Column 1: Cinematic Avatar with glowing halo (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#40A39C] via-[#00A389] to-[#67C0B9] rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt" />

              {/* Photo Card Frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-2xl overflow-hidden bg-[#08324A] ring-2 ring-white/20 shadow-2xl">
                <Image
                  src={featuredContributor.avatar || '/images/developer-hussein.jpg'}
                  alt={isAr ? featuredContributor.nameAr : featuredContributor.nameEn}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041B26]/90 via-[#041B26]/20 to-transparent" />

                {/* Role Pill inside image */}
                <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-center">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-300 font-bold block">
                    Software Engineer
                  </span>
                  <span className="text-xs text-slate-200 font-sans block mt-0.5">
                    {isAr ? 'أنظمة الويب المتكاملة' : 'Full-Stack Web Systems'}
                  </span>
                </div>
              </div>
            </div>

            {/* Social & GitHub Quick Bar */}
            <div className="flex items-center gap-2.5 mt-5">
              {featuredContributor.github && (
                <a
                  href={featuredContributor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-[#40A39C] text-white hover:text-white border border-white/15 transition-all shadow-md hover:scale-110"
                  aria-label="GitHub Repository"
                  title="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {featuredContributor.linkedin && (
                <a
                  href={featuredContributor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-[#0077B5] text-white hover:text-white border border-white/15 transition-all shadow-md hover:scale-110"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {featuredContributor.instagram && (
                <a
                  href={featuredContributor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-[#E4405F] text-white hover:text-white border border-white/15 transition-all shadow-md hover:scale-110"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {featuredContributor.email && (
                <a
                  href={`mailto:${featuredContributor.email}`}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-[#40A39C] text-white hover:text-white border border-white/15 transition-all shadow-md hover:scale-110"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Profile Details, Achievements & Code Philosophy (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#67C0B9] mb-1">
                <Award className="w-4 h-4 text-[#40A39C]" />
                <span>{isAr ? featuredContributor.affiliation : (featuredContributor.affiliationEn || featuredContributor.affiliation)}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                {isAr ? featuredContributor.nameAr : featuredContributor.nameEn}
              </h2>
              <p className="text-sm sm:text-base text-[#67C0B9] font-medium mt-1">
                {isAr ? featuredContributor.titleAr : featuredContributor.titleEn}
              </p>
            </div>

            {/* Bio Note */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {isAr ? featuredContributor.note : (featuredContributor.noteEn || featuredContributor.note)}
            </p>

            {/* Key Technical Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#40A39C]/40 transition-colors">
                <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">
                    {isAr ? 'جودة برمجية صارمة' : 'Zero Defects'}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {isAr 
                    ? 'بناء يعتمد على Next.js 15 و TypeScript مع تدقيق صارم لكافة الأنواع البرمجية.' 
                    : 'Engineered with Next.js 15 App Router & strict TypeScript type integrity.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#40A39C]/40 transition-colors">
                <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
                  <Gauge className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">
                    {isAr ? 'أداء متكيف ذكي' : 'Adaptive Speed'}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {isAr 
                    ? 'محرك تكيفي للشبكات الضعيفة ووضع توفير البيانات مع خيارات تحكم سلسة.' 
                    : 'Smart network-aware loader with lightweight fallback for slow connections.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#40A39C]/40 transition-colors">
                <div className="flex items-center gap-2 text-teal-400 mb-1.5">
                  <Layers className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">
                    {isAr ? 'محرك لغوي مزدوج' : '100% Bilingual'}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {isAr 
                    ? 'توجيه ثنائي كامل للغتين الإنجليزية والعربية مع توافق تام لاتجاه الواجهة.' 
                    : 'Full bilingual routing and dynamic LTR/RTL layout switching.'}
                </p>
              </div>
            </div>

            {/* Skills Badges */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                {isAr ? 'التقنيات ومعايير البناء:' : 'Core Stack & Technologies:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {(featuredContributor.skills || []).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 text-slate-200 border border-white/10 hover:border-[#40A39C]/60 hover:text-white transition-all font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Statement Modal Trigger & GitHub Link */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setIsStatementOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#08324A] bg-gradient-to-r from-[#67C0B9] to-[#40A39C] hover:opacity-95 transition-all shadow-lg shadow-[#40A39C]/20 cursor-pointer active:scale-95"
              >
                <Terminal className="w-4 h-4" />
                <span>
                  {isStatementOpen 
                    ? (isAr ? 'إخفاء كلمة المطور' : 'Hide Architect Note') 
                    : (isAr ? 'عرض كلمة المهندس ورؤية البناء' : 'Read Architect Statement')}
                </span>
              </button>

              {featuredContributor.github && (
                <a
                  href={featuredContributor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub: Sol-life</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}
            </div>

            {/* Expandable Architect Statement */}
            {isStatementOpen && (
              <div className="mt-4 p-5 rounded-2xl bg-white/10 border border-[#40A39C]/30 text-xs sm:text-sm text-slate-200 leading-relaxed animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center gap-2 text-[#67C0B9] font-bold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isAr ? 'رؤية التطوير والالتزام الهندسي (§14):' : 'Architecture Manifesto:'}</span>
                </div>
                <p>
                  {isAr 
                    ? 'تم تصميم وهندسة هذه المنصة الرقمية التفاعلية تطوعاً واعتزازاً برسالة "فريق سول لايف" في قطاع غزة، بهدف توفير تجربة مستخدم عالمية تليق بجهود طلبة الطب والكوادر الصحية. ركزت في المعمارية على أعلى معايير الخفة والأداء، وتوفير تجربة بصرية سينمائية متوازنة مع سرعة التحميل على مختلف الشبكات، وبناء كود نقي خاضع لمعايير الاختبار الصارمة.'
                    : 'This interactive platform was architected and built voluntarily to champion the clinical medical mission of Soul Life Team in Gaza. The design harmonizes cinematic visual excellence with resilient, low-latency performance across constrained network conditions, governed by zero-defect software engineering.'}
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center text-[11px] text-slate-400 font-mono">
                  <span>Palestine • Gaza Strip</span>
                  <span>Sol-Life Engineering • 2026</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
