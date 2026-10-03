'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/motion/SectionHeading';
import { Camera, X, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'صورة الفريق الرسمية في قطاع غزة',
      category: 'team',
      categoryLabel: 'الفريق الرسمي',
      src: '/images/team-group.jpg',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 2,
      title: 'وصول مركبة التدريب الرمزية إلى قاعات الورش',
      category: 'field',
      categoryLabel: 'الميدان والوصول',
      src: '/images/ambulance-arrival.jpg',
      aspect: 'aspect-[16/9]',
    },
    {
      id: 3,
      title: 'شعار فريق سول لايف الطبي المعتمد',
      category: 'identity',
      categoryLabel: 'الهوية الطبية',
      src: '/images/logo.png',
      aspect: 'aspect-square',
    },
    {
      id: 4,
      title: 'محاكاة النبض الطبي والقلب المضيء',
      category: 'clinical',
      categoryLabel: 'الرمزية السريرية',
      src: '/images/glass-heart.jpg',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 5,
      title: 'النبض الحيوي والمسار الميداني',
      category: 'clinical',
      categoryLabel: 'الرمزية السريرية',
      src: '/images/ecg-ambient.jpg',
      aspect: 'aspect-[16/9]',
    },
    {
      id: 6,
      title: 'ورشة التدريب السريري والدم الكامل - خانيونس',
      category: 'field',
      categoryLabel: 'الميدان والتنسيق',
      src: '/images/regions/khan-younis.jpg',
      aspect: 'aspect-[16/9]',
    },
    {
      id: 7,
      title: 'محاكاة مهارات التمريض والمصطلحات الطبية - الوسطى',
      category: 'clinical',
      categoryLabel: 'الرمزية السريرية',
      src: '/images/regions/central.jpg',
      aspect: 'aspect-[16/9]',
    },
    {
      id: 8,
      title: 'المهندس المعماري ومطور المنصة الرقمية - م. حسين ناصر',
      category: 'team',
      categoryLabel: 'الفريق الرسمي',
      src: '/images/developer-hussein.jpg',
      aspect: 'aspect-square',
    },
  ];

  const filteredItems = galleryItems.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) =>
          prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <div dir="rtl" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right select-none">
      <SectionHeading
        kicker="الأرشيف البصري الميداني"
        title="معرض الصور والتوثيق"
        subtitle="توثيق بصري رسمي لورش التدريب السريري، لقاءات الفريق، وتجهيزات الميدان في قطاع غزة"
        align="center"
      />

      {/* Category Filter Tabs */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/70 border border-white/80 shadow-md backdrop-blur-xl max-w-2xl mx-auto">
        {[
          { id: 'all', label: 'كافة الصور' },
          { id: 'team', label: 'الفريق' },
          { id: 'field', label: 'الميدان والتنسيق' },
          { id: 'clinical', label: 'الرمزية الطبية' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveCategory(tab.id);
              setSelectedImageIndex(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === tab.id
                ? 'bg-[#40A39C] text-[#08324A] shadow-md'
                : 'text-[#4A6572] hover:text-[#08324A]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedImageIndex(index)}
            className="group relative rounded-3xl overflow-hidden border border-white/80 shadow-lg bg-white/40 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#08324A]/10`}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08324A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[11px] font-bold text-[#40A39C] block mb-1">
                  {item.categoryLabel}
                </span>
                <p className="text-xs sm:text-sm font-bold font-heading line-clamp-1">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            aria-label="إغلاق العارض"
            className="absolute top-6 left-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setSelectedImageIndex((prev) =>
                prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
              )
            }
            aria-label="الصورة السابقة"
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setSelectedImageIndex((prev) =>
                prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
              )
            }
            aria-label="الصورة التالية"
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Display Image */}
          <div className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredItems[selectedImageIndex].src}
                alt={filteredItems[selectedImageIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-sm text-white font-bold font-heading text-center">
              {filteredItems[selectedImageIndex].title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
