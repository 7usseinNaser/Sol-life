'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { X, HeartHandshake, Phone, Mail, Instagram, ChevronLeft } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('nav');
  const common = useTranslations('common');
  const locale = useLocale();
  const isAr = locale === 'ar';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#08324A]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Glass Drawer Panel */}
      <div className="fixed inset-y-0 end-0 w-full max-w-xs sm:max-w-sm glass-panel-light p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-s border-white/60">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#0D5260]/10">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 ring-1 ring-[#0D5260]/15">
                <Image
                  src="/images/logo.png"
                  alt={isAr ? 'سول لايف' : 'Soul Life'}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-[#08324A] text-lg">
                {isAr ? 'فريق سول لايف' : 'Soul Life Team'}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-[#08324A] hover:bg-white/80 transition-colors"
              aria-label={isAr ? 'إغلاق القائمة' : 'Close menu'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="py-6 space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-base font-semibold text-[#08324A] hover:bg-white/70 hover:text-[#40A39C] transition-colors"
            >
              <span>{t('home')}</span>
              <ChevronLeft className="w-4 h-4 text-[#0D5260]/40" />
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-base font-semibold text-[#08324A] hover:bg-white/70 hover:text-[#40A39C] transition-colors"
            >
              <span>{t('about')}</span>
              <ChevronLeft className="w-4 h-4 text-[#0D5260]/40" />
            </Link>

            <Link
              href="/programs"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-base font-semibold text-[#08324A] hover:bg-white/70 hover:text-[#40A39C] transition-colors"
            >
              <span>{t('programs')}</span>
              <ChevronLeft className="w-4 h-4 text-[#0D5260]/40" />
            </Link>

            {/* Team Nested Group */}
            <div className="pt-2 pb-2 ps-3 pe-2 bg-white/40 rounded-2xl border border-white/40 my-2 space-y-1">
              <span className="text-xs font-bold text-[#0D5260] px-2 py-1 uppercase tracking-wider block">
                {t('team')}
              </span>
              <Link
                href="/team"
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-lg text-sm text-[#08324A] hover:bg-white hover:text-[#40A39C]"
              >
                <span>{t('teamOverview')}</span>
                <span className="text-xs text-[#4A6572] bg-[#E4F3F1] px-2 py-0.5 rounded-full">
                  {isAr ? '30 متطوعاً' : '30 Volunteers'}
                </span>
              </Link>
              <Link
                href="/committees"
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-lg text-sm text-[#08324A] hover:bg-white hover:text-[#40A39C]"
              >
                <span>{t('committees')}</span>
              </Link>
              <Link
                href="/behind-the-scenes"
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-lg text-sm text-[#08324A] hover:bg-white hover:text-[#40A39C]"
              >
                <span>{t('behindTheScenes')}</span>
              </Link>
            </div>

            <Link
              href="/library"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-base font-semibold text-[#08324A] hover:bg-white/70 hover:text-[#40A39C] transition-colors"
            >
              <span>{t('library')}</span>
              <ChevronLeft className="w-4 h-4 text-[#0D5260]/40" />
            </Link>

            <Link
              href="/gallery"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-base font-semibold text-[#08324A] hover:bg-white/70 hover:text-[#40A39C] transition-colors"
            >
              <span>{t('gallery')}</span>
              <ChevronLeft className="w-4 h-4 text-[#0D5260]/40" />
            </Link>

            <Link
              href="/voices"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-base font-semibold text-[#08324A] hover:bg-white/70 hover:text-[#40A39C] transition-colors"
            >
              <span>{t('voices')}</span>
              <ChevronLeft className="w-4 h-4 text-[#0D5260]/40" />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl text-base font-semibold text-[#08324A] hover:bg-white/70 hover:text-[#40A39C] transition-colors"
            >
              <span>{t('contact')}</span>
              <ChevronLeft className="w-4 h-4 text-[#0D5260]/40" />
            </Link>
          </nav>
        </div>

        {/* Footer Area with Persistent CTA & Contacts */}
        <div className="pt-4 border-t border-[#0D5260]/10 space-y-4">
          <Link
            href="/collaborate"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#08324A] via-[#0D5260] to-[#40A39C] shadow-lg shadow-[#08324A]/20"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{common('collaborate')}</span>
          </Link>

          <div className="text-xs text-[#4A6572] space-y-2 pt-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#40A39C]" />
              <span dir="ltr">+972 56-784-4766</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#40A39C]" />
              <span>soullifeteam17@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5 text-[#40A39C]" />
              <span dir="ltr">@soullife.gaza1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
