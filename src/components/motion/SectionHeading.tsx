import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'start' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  badge,
  title,
  subtitle,
  align = 'start',
  className = '',
}) => {
  const displayKicker = kicker || badge;
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-start'} ${className}`}>
      {/* Category Kicker */}
      {displayKicker && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F3F1] text-[#0D5260] text-xs font-bold mb-3 border border-[#40A39C]/30 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#40A39C]" />
          <span>{displayKicker}</span>
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#08324A] tracking-tight leading-tight">
        {title}
      </h2>

      {/* ECG Line Divider Accent */}
      <div className={`flex items-center gap-3 my-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-0.5 bg-[#40A39C]/40 rounded-full" />
        <svg
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-4 text-[#40A39C]"
          aria-hidden="true"
        >
          <path
            d="M 0 8 L 12 8 L 15 2 L 20 14 L 25 5 L 28 8 L 40 8"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="w-20 h-0.5 bg-[#40A39C]/40 rounded-full" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-base sm:text-lg text-[#4A6572] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
