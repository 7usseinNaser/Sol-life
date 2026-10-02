'use client';

import React from 'react';
import { institutionsData } from '@/data/institutions';
import { Building2, Handshake, ShieldAlert } from 'lucide-react';

export function InstitutionsMarquee() {
  return (
    <section
      dir="rtl"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none"
      aria-label="جهات نتعاون ونتواصل معها"
    >
      <div className="rounded-3xl p-6 sm:p-8 bg-[#08324A]/40 border border-white/15 backdrop-blur-xl shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#40A39C] mb-1">
              <Handshake className="w-4 h-4" />
              <span>العلاقات العامة والشراكات الميدانية</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              جهات نتعاون ونتواصل معها
            </h3>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-xl border border-white/10">
            <ShieldAlert className="w-3.5 h-3.5 text-[#40A39C]" />
            <span>مؤسسات صحية ومحلية استضافت أو نسقت لبرامجنا التدريبية (§3.1).</span>
          </div>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {institutionsData.map((inst) => (
            <div
              key={inst.id}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#40A39C]/40 hover:bg-white/10 transition-all duration-200 flex flex-col justify-between text-right"
            >
              <Building2 className="w-5 h-5 text-[#40A39C] mb-2" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-white font-heading">
                  {inst.nameAr}
                </p>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                  {inst.relationshipLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
