'use client';

import React from 'react';
import { useMotion } from '@/context/MotionContext';
import { useLocale } from 'next-intl';
import { Zap, Sparkles, X, WifiOff, Gauge } from 'lucide-react';

export function AdaptiveMotionController() {
  const { mode, isLite, toggleMode, networkNotification, dismissNotification } = useMotion();
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <>
      {/* Toast Notification for Network Watchdog Auto-Trigger */}
      {networkNotification && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-20 start-4 sm:start-6 z-50 max-w-sm p-4 rounded-2xl bg-[#08324A]/95 text-white border border-[#40A39C]/40 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#40A39C]/20 text-[#40A39C] shrink-0 mt-0.5">
              <Gauge className="w-5 h-5" />
            </div>
            <div className="flex-1 text-xs">
              <p className="font-bold text-white mb-1">
                {isAr ? 'محرك الأداء التكيفي' : 'Adaptive Performance Engine'}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {isAr 
                  ? networkNotification 
                  : 'Switched to Lite Mode to ensure low data consumption and instant rendering.'}
              </p>
              <div className="flex items-center gap-3 mt-3">
                <button
                  type="button"
                  onClick={toggleMode}
                  className="font-bold text-[#40A39C] hover:underline"
                >
                  {isAr ? 'العودة للوضع الكامل' : 'Switch to Ultra Mode'}
                </button>
                <button
                  type="button"
                  onClick={dismissNotification}
                  className="text-slate-400 hover:text-white"
                >
                  {isAr ? 'إغلاق' : 'Dismiss'}
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={dismissNotification}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Floating Toggle Pill */}
      <div className="fixed bottom-4 end-4 sm:bottom-6 sm:end-6 z-40">
        <button
          type="button"
          onClick={toggleMode}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold backdrop-blur-xl border transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 ${
            isLite
              ? 'bg-[#08324A]/90 text-amber-300 border-amber-400/40 shadow-amber-900/20'
              : 'bg-[#08324A]/90 text-[#67C0B9] border-[#40A39C]/40 shadow-[#40A39C]/20'
          }`}
          title={
            isLite
              ? (isAr ? 'الوضع الخفيف مفعل (انقر للوضع السينمائي)' : 'Lite Mode active (Click for Ultra)')
              : (isAr ? 'الوضع السينمائي مفعل (انقر لتسريع التصفح)' : 'Ultra Mode active (Click for Lite)')
          }
          aria-label="Toggle motion performance mode"
        >
          {isLite ? (
            <>
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
              <span>{isAr ? 'وضع السرعة: خفيف' : 'Lite Mode: Active'}</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-[#40A39C] animate-pulse" />
              <span>{isAr ? 'التجربة: سينمائية' : 'Experience: Ultra'}</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
