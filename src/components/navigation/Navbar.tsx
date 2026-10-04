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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const otherLocale = locale === 'ar' ? 'en' : 'ar';

  const isHome = pathname === '/' || pathname === `/${locale}` || pathname === `/${locale}/`;
  const isDarkHero = !isScrolled && isHome;

  const isActive = (path: string) => {
    const current = pathname.replace(/^\/(ar|en)/, '') || '/';
    if (path === '/') return current === '/';
    return current.startsWith(path);
  };

  const getLinkClass = (path: string) => {
    const active = isActive(path);
    if (isDarkHero) {
      return active
        ? 'px-3 py-2 text-sm font-semibold rounded-lg text-[#00E5C9] bg-white/15 ring-1 ring-[#00E5C9]/40 shadow-sm'
        : 'px-3 py-2 text-sm font-medium rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all';
    }
    return active
      ? 'px-3 py-2 text-sm font-semibold rounded-lg text-[#008B7A] bg-[#00E5C9]/15 ring-1 ring-[#00E5C9]/30 shadow-sm'
      : 'px-3 py-2 text-sm font-medium rounded-lg text-[var(--color-navy)] hover:text-[var(--color-teal)] hover:bg-white/70 transition-all';
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-md'
            : isHome
              ? 'bg-gradient-to-b from-[#041B2D]/85 via-[#041B2D]/40 to-transparent py-4 backdrop-blur-[1px]'
              : 'glass-nav py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[var(--color-teal-vibrant)] rounded-lg p-1"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white shadow-sm ring-1 ring-[var(--color-deep-teal)]/10 p-0.5 group-hover:scale-105 transition-transform duration-300">
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
                <span className={`font-bold text-lg md:text-xl tracking-tight transition-colors ${
                  isDarkHero ? 'text-white group-hover:text-[var(--color-teal-soft)]' : 'text-[var(--color-navy)] group-hover:text-[var(--color-teal)]'
                }`}>
                  {locale === 'ar' ? 'فريق سول لايف' : 'Soul Life Team'}
                </span>
                <span className={`text-xs font-medium hidden sm:inline-block ${
                  isDarkHero ? 'text-slate-300' : 'text-[var(--color-deep-teal)]'
                }`}>
                  {locale === 'ar' ? 'Soul Life Team' : 'Medical Education & Field Health'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={getLinkClass('/')}
              >
                {t('home')}
              </Link>
              <Link
                href="/about"
                className={getLinkClass('/about')}
              >
                {t('about')}
              </Link>
              <Link
                href="/programs"
                className={getLinkClass('/programs')}
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
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 focus:outline-none ${
                    isActive('/team') || isActive('/committees') || isActive('/behind-the-scenes')
                      ? isDarkHero
                        ? 'text-[#00E5C9] bg-white/15 ring-1 ring-[#00E5C9]/40 font-semibold'
                        : 'text-[#008B7A] bg-[#00E5C9]/15 ring-1 ring-[#00E5C9]/30 font-semibold'
                      : isDarkHero
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-[var(--color-navy)] hover:text-[var(--color-teal)] hover:bg-white/70'
                  }`}
                  aria-expanded={megaMenuOpen}
                >
                  <span>{t('team')}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      megaMenuOpen ? 'rotate-180 text-[var(--color-teal)]' : isDarkHero ? 'text-white/70' : 'text-[var(--color-deep-teal)]/70'
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
                className={getLinkClass('/library')}
              >
                {t('library')}
              </Link>
              <Link
                href="/gallery"
                className={getLinkClass('/gallery')}
              >
                {t('gallery')}
              </Link>
              <Link
                href="/voices"
                className={getLinkClass('/voices')}
              >
                {t('voices')}
              </Link>
              <Link
                href="/contact"
                className={getLinkClass('/contact')}
              >
                {t('contact')}
              </Link>
            </nav>

            {/* Actions: Language Switcher & Persistent CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href={pathname.replace(/^\/(ar|en)/, '') || '/'}
                locale={otherLocale}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm ${
                  isDarkHero
                    ? 'text-white bg-white/10 hover:bg-white/20 border border-white/20'
                    : 'text-[var(--color-navy)] bg-white/80 hover:bg-white border border-slate-200/80 hover:shadow'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{otherLocale === 'ar' ? 'العربية' : 'English'}</span>
              </Link>

              <Link
                href="/collaborate"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#041B2D] bg-gradient-to-r from-[#00D2BA] via-[#00E5C9] to-[#0EA5E9] hover:brightness-105 shadow-md shadow-[#00E5C9]/25 hover:shadow-lg hover:shadow-[#00E5C9]/40 transition-all active:scale-[0.98] border border-white/40"
              >
                <HeartHandshake className="w-4 h-4 text-[#041B2D]" />
                <span>{common('collaborate')}</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href={pathname.replace(/^\/(ar|en)/, '') || '/'}
                locale={otherLocale}
                className={`p-2 rounded-lg text-xs font-bold transition-all ${
                  isDarkHero
                    ? 'text-white bg-white/10 border border-white/20'
                    : 'text-[#041B2D] bg-white/80 border border-slate-200'
                }`}
              >
                {otherLocale === 'ar' ? 'EN' : 'عربي'}
              </Link>

              <button
                type="button"
                onClick={() => setMobileDrawerOpen(true)}
                className={`p-2.5 rounded-xl transition-all shadow-sm focus:outline-none ${
                  isDarkHero
                    ? 'text-white bg-white/10 border border-white/20 hover:bg-white/20'
                    : 'text-[#041B2D] hover:text-[var(--color-teal)] bg-white/80 border border-slate-200'
                }`}
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
