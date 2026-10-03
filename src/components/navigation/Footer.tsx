import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Phone, Mail, Instagram, MapPin, Heart, ExternalLink } from 'lucide-react';
import { featuredContributor } from '@/data/team';

export const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const common = useTranslations('common');

  return (
    <footer className="relative bg-[#08324A] text-white overflow-hidden mt-20">
      {/* Blurred Team Photo Background with Deep Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/team-group.jpg"
          alt="فريق سول لايف"
          fill
          className="object-cover object-center filter blur-xl scale-110 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08324A]/90 via-[#08324A]/95 to-[#051F2E]" />
      </div>

      {/* Decorative Top ECG Pulse Line Accent */}
      <div className="relative z-10 w-full h-1 bg-gradient-to-r from-transparent via-[#40A39C] to-transparent opacity-50" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Identity & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 ring-2 ring-[#40A39C]/40 shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="فريق سول لايف"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-xl text-white block">{common('brandName')}</span>
                <span className="text-xs text-[#67C0B9] font-medium tracking-wide">
                  Soul Life Medical Team
                </span>
              </div>
            </div>

            <p className="text-sm text-[#E4F3F1]/80 leading-relaxed">
              {t('aboutSoulLife')}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D5260]/60 border border-[#40A39C]/30 text-xs font-semibold text-[#67C0B9]">
              <Heart className="w-3.5 h-3.5 text-[#40A39C] fill-[#40A39C]" />
              <span>{common('tagline')}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-bold text-[#67C0B9] uppercase tracking-wider mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E4F3F1]/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {nav('home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {nav('about')}
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  {nav('programs')}
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-white transition-colors">
                  {nav('library')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  {nav('gallery')}
                </Link>
              </li>
              <li>
                <Link href="/voices" className="hover:text-white transition-colors">
                  {nav('voices')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Team Tracks */}
          <div>
            <h3 className="text-sm font-bold text-[#67C0B9] uppercase tracking-wider mb-4">
              {t('specializedTracks')}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E4F3F1]/80">
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  {nav('teamOverview')}
                </Link>
              </li>
              <li>
                <Link href="/committees" className="hover:text-white transition-colors">
                  {nav('committees')}
                </Link>
              </li>
              <li>
                <Link href="/behind-the-scenes" className="hover:text-white transition-colors">
                  {nav('behindTheScenes')}
                </Link>
              </li>
              <li>
                <Link href="/collaborate" className="hover:text-white transition-colors">
                  {nav('collaborate')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {nav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Scope */}
          <div>
            <h3 className="text-sm font-bold text-[#67C0B9] uppercase tracking-wider mb-4">
              {t('contactInfo')}
            </h3>
            <div className="space-y-3 text-sm text-[#E4F3F1]/80">
              <a
                href="tel:+972567844766"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#0D5260]/60 border border-[#40A39C]/20 group-hover:border-[#40A39C]">
                  <Phone className="w-4 h-4 text-[#40A39C]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#67C0B9]">{t('phoneLabel')}</span>
                  <span dir="ltr" className="font-medium">+972 56-784-4766</span>
                </div>
              </a>

              <a
                href="mailto:soullifeteam17@gmail.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#0D5260]/60 border border-[#40A39C]/20 group-hover:border-[#40A39C]">
                  <Mail className="w-4 h-4 text-[#40A39C]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#67C0B9]">{t('emailLabel')}</span>
                  <span className="font-medium text-xs sm:text-sm">soullifeteam17@gmail.com</span>
                </div>
              </a>

              <a
                href="https://instagram.com/soullife.gaza1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#0D5260]/60 border border-[#40A39C]/20 group-hover:border-[#40A39C]">
                  <Instagram className="w-4 h-4 text-[#40A39C]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#67C0B9]">{t('instagramLabel')}</span>
                  <span dir="ltr" className="font-medium">@soullife.gaza1</span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 pt-1 text-xs text-[#E4F3F1]/70">
                <MapPin className="w-4 h-4 text-[#40A39C] shrink-0" />
                <span>{common('scope')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E4F3F1]/60">
          <div>
            <span>{t('rights')}</span>
          </div>

          {/* Platform Attribution Credit (BRD §14) - VIP Architect Badge */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-center md:text-start">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D5260]/80 hover:bg-[#40A39C]/30 border border-[#40A39C]/40 text-[#67C0B9] hover:text-white transition-all shadow-sm group"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden ring-1 ring-[#40A39C]/60 shrink-0">
                <Image
                  src="/images/developer-hussein.jpg"
                  alt="م. حسين محمد ناصر"
                  width={20}
                  height={20}
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-xs text-white">
                {t('developerCredit')}
              </span>
            </Link>

            <div className="flex items-center gap-2 text-xs text-[#67C0B9]">
              <a
                href={featuredContributor.github || 'https://github.com/7usseinNaser/Sol-life'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href={featuredContributor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline-offset-4 hover:underline inline-flex items-center gap-0.5"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
