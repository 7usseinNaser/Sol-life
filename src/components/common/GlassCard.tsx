import React from 'react';
import { clsx } from 'clsx';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'subtle';
  hoverEffect?: boolean;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'light',
  hoverEffect = false,
  className,
  ...props
}) => {
  const variantStyles = {
    light: 'glass-panel-light text-[#0F2A3A]',
    dark: 'glass-panel-dark text-white',
    subtle: 'bg-white/40 backdrop-blur-md border border-white/30 text-[#0F2A3A]',
  };

  return (
    <div
      className={clsx(
        'rounded-2xl p-6 transition-all duration-300',
        variantStyles[variant],
        hoverEffect && 'glass-card-hover cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
