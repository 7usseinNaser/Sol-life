'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { BookOpen, Search, Lock, FileText, Sparkles, AlertCircle, ShieldCheck } from 'lucide-react';

export default function LibraryPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div dir="rtl" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none">
      <SectionHeading
        kicker="المرجع الأكاديمي والسريري"
        title="المكتبة الطبية لطلبة الرعاية الصحية"
        subtitle="مستودع رقمي مخصص لسلايدات المحاضرات، الأدلة التدريبية، وبروتوكولات الورش السريرية"
        align="center"
      />

      {/* Filter and Search */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/70 border border-white/80 shadow-lg backdrop-blur-xl">
        <div className="flex items-center gap-2 p-1 rounded-xl bg-white/60 border border-white/80">
          {[
            { id: 'all', label: 'كافة المراجع' },
            { id: 'slides', label: 'سلايدات الدورات' },
            { id: 'protocols', label: 'البروتوكولات السريرية' },
            { id: 'guides', label: 'أدلة التدريب' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-[#40A39C] text-[#08324A] shadow-md'
                  : 'text-[#4A6572] hover:text-[#08324A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في المراجع والمحاضرات..."
            className="w-full pl-4 pr-10 py-2 rounded-xl bg-white border border-white/80 text-xs text-[#08324A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#40A39C]/40"
          />
          <Search className="w-4 h-4 text-slate-400 absolute top-1/2 right-3 -translate-y-1/2" />
        </div>
      </div>

      {/* Empty State complying with Rule: No Fake Download Links */}
      <div className="mt-12 rounded-3xl p-10 sm:p-16 bg-white/70 border border-white/80 shadow-xl backdrop-blur-xl text-center flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-3xl bg-[#E4F3F1] border border-[#40A39C]/30 text-[#0D5260] flex items-center justify-center mb-6">
          <BookOpen className="w-8 h-8 text-[#40A39C]" />
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#40A39C] bg-[#40A39C]/10 px-3 py-1 rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>المنصة الرقمية قيد التجهيز المعتمد</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#08324A] mb-2">
          جاري تجهيز وتدقيق المواد العلمية الرسمية
        </h3>
        <p className="text-xs sm:text-sm text-[#4A6572] max-w-lg mx-auto leading-relaxed mb-6 font-sans">
          التزاماً بقواعد الأمان والنزاهة الأكاديمية (§3.1)، لا يتم نشر أي ملفات إلا بعد المراجعة والاعتماد الطبي النهائي من الأطباء المشرفين ومجلس إدارة الفريق.
        </p>

        <div className="p-4 rounded-2xl bg-white/80 border border-white/80 text-xs text-[#0D5260] max-w-md mx-auto flex items-center gap-3 text-right">
          <ShieldCheck className="w-5 h-5 text-[#40A39C] shrink-0" />
          <span>
            سيتم تفعيل روابط التحميل المباشرة فور اكتمال رفع حقيبة التدريب لمشتركي الدورات المعتمدين.
          </span>
        </div>
      </div>
    </div>
  );
}
