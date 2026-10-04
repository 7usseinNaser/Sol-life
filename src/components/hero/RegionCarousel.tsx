'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { regionsData } from '@/data/regions';
import { ChevronRight, ChevronLeft, MapPin, Sparkles, Activity } from 'lucide-react';

interface RegionCarouselProps {
  onRegionChange?: (regionId: string) => void;
}

export function RegionCarousel({ onRegionChange }: RegionCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = regionsData.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay 6s with pause on hover/touch
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    if (regionsData[activeIndex]) {
      onRegionChange?.(regionsData[activeIndex].id);
    }
  }, [activeIndex, onRegionChange]);

  // Touch Swipe handlers (RTL aware)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    // In RTL, dragging right-to-left (positive distance) moves forward (next)
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  const activeRegion = regionsData[activeIndex];

  return (
    <div
      dir="rtl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full max-w-4xl mx-auto mt-6 select-none"
      aria-label="استعراض مناطق نشاط وتدريب الفريق في قطاع غزة"
    >
      {/* Container Card */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 bg-[#08324A]/40 backdrop-blur-xl shadow-2xl p-4 sm:p-6 transition-all duration-500">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#40A39C]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header line with Region Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-2 text-white">
            <span className="p-1.5 rounded-lg bg-[#40A39C]/20 border border-[#40A39C]/40 text-[#40A39C]">
              <MapPin className="w-4 h-4" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white">
              ثلاث شعب جغرافية متزامنة
            </span>
          </div>

          {/* Region Tabs (Pills) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#041B2D]/90 border border-white/20 backdrop-blur-md">
            {regionsData.map((region, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={region.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3.5 py-1.5 text-xs md:text-sm font-bold rounded-lg transition-all duration-300 ${
                    isCurrent
                      ? 'bg-gradient-to-r from-[var(--color-teal-vibrant)] to-[var(--color-blue-electric)] text-[#041B2D] font-black shadow-md shadow-[var(--color-teal-vibrant)]/30 scale-105'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {region.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Slide Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          {/* Visual Thumbnail */}
          <div className="md:col-span-5 relative h-48 sm:h-56 md:h-64 rounded-xl md:rounded-2xl overflow-hidden border border-white/25 shadow-lg group">
            <Image
              src={activeRegion.imagePlaceholder || '/images/team-group.jpg'}
              alt={`فريق سول لايف في ${activeRegion.labelAr}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-100 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041B2D] via-transparent to-transparent opacity-85" />
            
            {/* Region Floating Badge on image */}
            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[#041B2D]/95 border border-[var(--color-teal-vibrant)]/50 backdrop-blur-md text-xs font-bold text-white flex items-center gap-1.5 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[var(--color-teal-vibrant)] animate-pulse" />
              <span>{activeRegion.shortLabel}</span>
            </div>
          </div>

          {/* Content Description */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-3.5 text-right">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[var(--color-teal-vibrant)] font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>حضور ميداني فاعل ومستمر</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                {activeRegion.labelAr}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#E0FAF7] leading-relaxed font-sans">
                {activeRegion.description}
              </p>
            </div>

            {/* Key Activities in this Region */}
            <div className="space-y-1.5 bg-[#041B2D]/75 p-3.5 rounded-xl border border-white/15">
              <span className="text-[11px] font-bold text-[var(--color-teal-light)] block">
                أبرز البرامج التدريبية المنفّذة:
              </span>
              <div className="space-y-1">
                {activeRegion.activities.slice(0, 3).map((act, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white">
                    <Activity className="w-3.5 h-3.5 text-[var(--color-teal-vibrant)] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="flex items-center justify-between pt-1">
              {/* Dots Progress */}
              <div className="flex items-center gap-1.5">
                {regionsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`الانتقال إلى المنطقة ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-7 bg-[var(--color-teal-vibrant)] shadow-sm shadow-[var(--color-teal-vibrant)]'
                        : 'w-2 bg-white/35 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="المنطقة السابقة"
                  className="p-2.5 rounded-xl bg-[#08233A] hover:bg-[var(--color-teal-vibrant)] hover:text-[#041B2D] border border-[var(--color-teal-vibrant)]/40 text-white transition-all duration-200 active:scale-95 shadow-md"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="المنطقة التالية"
                  className="p-2.5 rounded-xl bg-[#08233A] hover:bg-[var(--color-teal-vibrant)] hover:text-[#041B2D] border border-[var(--color-teal-vibrant)]/40 text-white transition-all duration-200 active:scale-95 shadow-md"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
