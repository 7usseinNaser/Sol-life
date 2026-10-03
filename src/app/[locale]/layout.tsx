import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ibmPlexArabic, readexPro, inter } from '@/styles/fonts';
import '@/styles/globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { MotionProvider } from '@/context/MotionContext';
import { AdaptiveMotionController } from '@/components/motion/AdaptiveMotionController';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return {
    title: {
      template: isAr ? '%s | فريق سول لايف' : '%s | Soul Life Team',
      default: isAr
        ? 'فريق سول لايف | تدريب وتعليم طبي سريري مجاني في قطاع غزة'
        : 'Soul Life Team | Free Medical & Clinical Training in Gaza',
    },
    description: isAr
      ? 'مبادرة طلابية تطوعية غير ربحية في قطاع غزة تُعنى بتقديم تدريب طبي وسريري عملي مجاني عالي الجودة لطلبة الكليات الصحية لتمكين الكوادر الطبية الصاعدة.'
      : 'A student-led non-profit medical training initiative in the Gaza Strip providing free, high-quality hands-on clinical and surgical education.',
    keywords: [
      'فريق سول لايف',
      'سول لايف غزة',
      'Soul Life Team',
      'تدريب طبي في غزة',
      'تعليم طبي سريري غزة',
      'كليات الطب فلسطين',
      'خياطة جراحية غزة',
      'إسعافات أولية غزة',
      'مبادرات طبية طلابية',
      'تحاليل طبية غزة CBC',
    ],
    authors: [
      { name: 'Soul Life Team' },
      { name: 'Hussein Mohammad Hussein Naser', url: 'https://linkedin.com' },
    ],
    metadataBase: new URL('https://soullife-gaza.org'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: '/ar',
        en: '/en',
      },
    },
    openGraph: {
      title: isAr
        ? 'فريق سول لايف | منصة التدريب والتعليم الطبي السريري في غزة'
        : 'Soul Life Team | Clinical Medical Training Platform in Gaza',
      description: isAr
        ? 'مبادرة طلابية تطوعية غير ربحية تهدف لتأهيل وصقل مهارات طلبة التخصصات الطبية والصحية في قطاع غزة عبر التدريب الميداني والسريري المباشر.'
        : 'Student-led non-profit initiative dedicated to hands-on clinical medical training for healthcare students in Gaza.',
      url: `https://soullife-gaza.org/${locale}`,
      siteName: isAr ? 'فريق سول لايف — Soul Life' : 'Soul Life Team',
      images: [
        {
          url: '/images/hero-bg.jpg',
          width: 1200,
          height: 630,
          alt: isAr ? 'فريق سول لايف للتدريب الطبي' : 'Soul Life Medical Training Team',
        },
        {
          url: '/images/logo.png',
          width: 512,
          height: 512,
          alt: 'شعار فريق سول لايف',
        },
      ],
      locale: isAr ? 'ar_AR' : 'en_US',
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'ar' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  // High-Fidelity Schema.org JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'فريق سول لايف | Soul Life Team',
    alternateName: ['Soul Life Initiative', 'سول لايف'],
    url: 'https://soullife-gaza.org',
    logo: 'https://soullife-gaza.org/images/logo.png',
    image: 'https://soullife-gaza.org/images/hero-bg.jpg',
    slogan: 'نتعلّم • نتدرّب • نُلهم',
    description:
      'مبادرة طلابية تطوعية غير ربحية يقودها طلبة كليات الطب في قطاع غزة لتقديم برامج تدريب سريري وطبي مجاني عالي الجودة.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Gaza Strip',
      addressCountry: 'PS',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+972-56-784-4766',
      contactType: 'public relations',
      email: 'soullifeteam17@gmail.com',
      areaServed: 'Gaza Strip',
      availableLanguage: ['Arabic', 'English'],
    },
    sameAs: [
      'https://instagram.com/soullife.gaza1',
    ],
    knowsAbout: [
      'التعليم الطبي',
      'الخياطة الجراحية السريرية',
      'التغريز الطبي',
      'الإنعاش القلبي الرئوي CPR',
      'تحاليل الدم CBC',
      'الإسعافات الأولية الميدانية',
    ],
    creator: {
      '@type': 'Person',
      name: 'Hussein Mohammad Hussein Naser',
      jobTitle: 'Lead Digital Platform Architect',
      description: 'Digital Platform Architect & Developer for Soul Life Team (BRD §14)',
    },
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${ibmPlexArabic.variable} ${readexPro.variable} ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&family=Readex+Pro:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F6FAF9] text-[#0F2A3A] antialiased selection:bg-[#40A39C]/20 selection:text-[#08324A]">
        {/* Skip to Content for Accessibility */}
        <a href="#main-content" className="skip-to-content">
          {locale === 'ar' ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
        </a>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <MotionProvider>
            <Navbar />
            <main id="main-content" className="flex-1 pt-24">
              {children}
            </main>
            <Footer />
            <AdaptiveMotionController />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
