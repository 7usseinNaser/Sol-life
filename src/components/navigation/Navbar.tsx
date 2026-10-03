'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Menu, X, ChevronDown, Users, Award, Camera, HeartHandshake, Globe } from 'lucide-react';
import { MobileDrawer } from './MobileDrawer';

export const Navbar: React.FC = () => {
  const t = useTranslations('nav');
  const common = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const otherLocale = locale === 'ar' ? 'en' : 'ar';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#40A39C] rounded-lg p-1"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white shadow-sm ring-1 ring-[#0D5260]/10 p-0.5 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/logo.png"
                  alt="فريق سول لايف"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-xl text-[#08324A] tracking-tight group-hover:text-[#40A39C] transition-colors">
                  {locale === 'ar' ? 'فريق سول لايف' : 'Soul Life Team'}
                </span>
                <span className="text-xs text-[#0D5260] font-medium hidden sm:inline-block">
                  {locale === 'ar' ? 'Soul Life Team' : 'Medical Education & Field Health'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-[#08324A] hover:text-[#40A39C] rounded-lg hover:bg-white/50 transition-all"
              >
                {t('home')}
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium text-[#08324A] hover:text-[#40A39C] rounded-lg hover:bg-white/50 transition-all"
              >
                {t('about')}
              </Link>
              <Link
                href="/programs"
                className="px-3 py-2 text-sm font-medium text-[#08324A] hover:text-[#40A39C] rounded-lg hover:bg-white/50 transition-all"
              >
                {t('programs')}
              </Link>

              {/* Mega Menu Trigger: فريقنا */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMegaMenuOpen((prev) => !prev)}
                  className="px-3 py-2 text-sm font-medium text-[#08324A] hover:text-[#40A39C] rounded-lg hover:bg-white/50 transition-all flex items-center gap-1.5 focus:outline-none"
                  aria-expanded={megaMenuOpen}
                >
                  <span>{t('team')}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      megaMenuOpen ? 'rotate-180 text-[#40A39C]' : 'text-[#0D5260]/60'
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                {megaMenuOpen && (
                  <div className="absolute top-full start-0 w-80 pt-2 animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="glass-panel-light rounded-2xl p-3 border border-white/60 shadow-xl space-y-1">
                      <Link
                        href="/team"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/80 transition-colors group"
                        onClick={() => setMegaMenuOpen(false)}
                      >
                        <div className="p-2 rounded-lg bg-[#E4F3F1] text-[#0D5260] group-hover:bg-[#40A39C] group-hover:text-white transition-colors">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#08324A] group-hover:text-[#40A39C]">
                            {t('teamOverview')}
                          </div>
                          <div className="text-xs text-[#4A6572] mt-0.5">
                            {locale === 'ar' ? 'مجلس الإدارة والمتطوعون الميدانيون (30 متطوعاً)' : 'Board of Directors & Field Volunteers (30 Members)'}
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/committees"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/80 transition-colors group"
                        onClick={() => setMegaMenuOpen(false)}
                      >
                        <div className="p-2 rounded-lg bg-[#E4F3F1] text-[#0D5260] group-hover:bg-[#40A39C] group-hover:text-white transition-colors">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#08324A] group-hover:text-[#40A39C]">
                            {t('committees')}
                          </div>
                          <div className="text-xs text-[#4A6572] mt-0.5">
                            {locale === 'ar' ? 'العلاقات، المشاريع، الإعلام، والشعب الميدانية' : 'PR, Projects, Media & Field Wings'}
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/behind-the-scenes"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/80 transition-colors group"
                        onClick={() => setMegaMenuOpen(false)}
                      >
                        <div className="p-2 rounded-lg bg-[#E4F3F1] text-[#0D5260] group-hover:bg-[#40A39C] group-hover:text-white transition-colors">
                          <Camera className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#08324A] group-hover:text-[#40A39C]">
                            {t('behindTheScenes')}
                          </div>
                          <div className="text-xs text-[#4A6572] mt-0.5">
                            {locale === 'ar' ? 'تجهيز القاعات، الأدوات الجراحية، وجهود الميدان' : 'Hall prep, surgical tools, and field efforts'}
                          </div>
                        </div>
                      </Link>

                      {/* VIP Developer Showcase Link */}
                      <Link
                        href="/team#developer"
                        className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-[#08324A]/5 to-[#40A39C]/10 border border-[#40A39C]/20 hover:bg-[#40A39C]/15 transition-all group"
                        onClick={() => setMegaMenuOpen(false)}
                      >
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-[#40A39C]/50 shrink-0">
                          <Image
                            src="/images/developer-hussein.jpg"
                            alt="م. حسين ناصر"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#08324A] group-hover:text-[#40A39C] flex items-center gap-1.5">
                            <span>{locale === 'ar' ? 'م. حسين محمد ناصر' : 'Eng. Hussein Naser'}</span>
                            <span className="text-[10px] font-mono text-[#0D5260] bg-[#40A39C]/20 px-1.5 py-0.2 rounded font-bold">
                              {locale === 'ar' ? 'المطور' : 'Architect'}
                            </span>
                          </div>
                          <div className="text-xs text-[#4A6572] mt-0.5">
                            {locale === 'ar' ? 'مهندس البرمجيات ومطور المنصة الرقمية' : 'Lead Software & Systems Architect'}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/library"
                className="px-3 py-2 text-sm font-medium text-[#08324A] hover:text-[#40A39C] rounded-lg hover:bg-white/50 transition-all"
              >
                {t('library')}
              </Link>
              <Link
                href="/gallery"
                className="px-3 py-2 text-sm font-medium text-[#08324A] hover:text-[#40A39C] rounded-lg hover:bg-white/50 transition-all"
              >
                {t('gallery')}
              </Link>
              <Link
                href="/voices"
                className="px-3 py-2 text-sm font-medium text-[#08324A] hover:text-[#40A39C] rounded-lg hover:bg-white/50 transition-all"
              >
                {t('voices')}
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-medium text-[#08324A] hover:text-[#40A39C] rounded-lg hover:bg-white/50 transition-all"
              >
                {t('contact')}
              </Link>
            </nav>

            {/* Actions: Language Switcher & Persistent CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href={pathname.replace(/^\/(ar|en)/, '') || '/'}
                locale={otherLocale}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0D5260] bg-white/60 hover:bg-white hover:text-[#08324A] border border-white/50 transition-all shadow-sm"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{otherLocale === 'ar' ? 'العربية' : 'English'}</span>
              </Link>

              <Link
                href="/collaborate"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#08324A] via-[#0D5260] to-[#40A39C] hover:opacity-95 shadow-md shadow-[#08324A]/15 hover:shadow-lg hover:shadow-[#40A39C]/20 transition-all active:scale-[0.98]"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>{common('collaborate')}</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href={pathname.replace(/^\/(ar|en)/, '') || '/'}
                locale={otherLocale}
                className="p-2 rounded-lg text-[#0D5260] bg-white/60 border border-white/50 text-xs font-bold"
              >
                {otherLocale === 'ar' ? 'عربي' : 'EN'}
              </Link>

              <button
                type="button"
                onClick={() => setMobileDrawerOpen(true)}
                className="p-2.5 rounded-xl text-[#08324A] hover:text-[#40A39C] bg-white/70 border border-white/60 shadow-sm focus:outline-none"
                aria-label="القائمة الرئيسية"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Glass Drawer */}
      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </>
  );
};
