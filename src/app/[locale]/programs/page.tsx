'use client';

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import { programsData } from '@/data/programs';
import { ProgramStatus } from '@/schemas/program';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { Search, Filter, MapPin, Users, Calendar, ArrowLeft, Sparkles } from 'lucide-react';

export default function ProgramsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPrograms = programsData.filter((prog) => {
    const matchesStatus =
      selectedStatus === 'all' ? true : prog.status === selectedStatus;
    const matchesSearch =
      prog.titleAr.includes(searchQuery) ||
      prog.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.shortDescription.includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  return (
    <div dir="rtl" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none">
      <SectionHeading
        kicker="سجل التدريب والتأهيل السريري"
        title="البرامج والدورات التدريبية"
        subtitle="استعراض شامل لكافة الدورات المنفذة، القادمة، والمخطط لها مع بيانات التوثيق الرسمية"
        align="center"
      />

      {/* Filter and Search Bar */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/70 border border-white/80 shadow-lg backdrop-blur-xl">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/60 border border-white/80 w-full md:w-auto">
          {[
            { id: 'all', label: 'كافة البرامج' },
            { id: 'completed', label: 'المنجزة (سجل رسمي)' },
            { id: 'upcoming', label: 'القادمة' },
            { id: 'future', label: 'مخطط لها' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedStatus(tab.id)}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedStatus === tab.id
                  ? 'bg-[#40A39C] text-[#08324A] shadow-md'
                  : 'text-[#4A6572] hover:text-[#08324A] hover:bg-white/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن دورة أو مهارة..."
            className="w-full pl-4 pr-10 py-2 rounded-xl bg-white border border-white/80 text-xs sm:text-sm text-[#08324A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#40A39C]/40 shadow-inner"
          />
          <Search className="w-4 h-4 text-slate-400 absolute top-1/2 right-3 -translate-y-1/2" />
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((prog) => {
            const totalAccepted = prog.editions.reduce(
              (acc, ed) => acc + (ed.acceptedCount || 0),
              0
            );
            const estimate = prog.editions.find((ed) => ed.trainedEstimate)?.trainedEstimate;

            return (
              <div
                key={prog.slug}
                className="rounded-3xl p-6 sm:p-7 bg-white/70 border border-white/80 shadow-xl backdrop-blur-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${
                        prog.status === 'completed'
                          ? 'bg-[#E4F3F1] text-[#0D5260] border-[#40A39C]/30'
                          : prog.status === 'upcoming'
                          ? 'bg-amber-50 text-amber-800 border-amber-300'
                          : 'bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                    >
                      {prog.status === 'completed'
                        ? 'دورة منجزة'
                        : prog.status === 'upcoming'
                        ? 'قيد التنسيق'
                        : 'مخطط لها'}
                    </span>
                    <span className="text-xs font-semibold text-[#40A39C] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{prog.defaultLocationLevel}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#08324A] mb-1">
                    {prog.titleAr}
                  </h3>
                  <p className="text-xs font-semibold text-[#40A39C] mb-3">
                    {prog.titleEn}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A6572] leading-relaxed line-clamp-3 mb-4">
                    {prog.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#08324A]/10 flex items-center justify-between text-xs">
                  <div className="font-bold text-[#0D5260] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#40A39C]" />
                    {estimate ? (
                      <span>~{estimate} طالب مستفيد</span>
                    ) : (
                      <span>{totalAccepted} طالب مقبول</span>
                    )}
                  </div>

                  <Link
                    href={`/programs/${prog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#40A39C] hover:text-[#0D5260] transition-colors"
                  >
                    <span>تفاصيل التقرير</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-16 text-center text-slate-400 bg-white/40 rounded-3xl border border-white/60">
            لا توجد برامج مطابقة لبحثك في هذا القسم حالياً.
          </div>
        )}
      </div>
    </div>
  );
}
