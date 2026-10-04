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
    light: 'glass-panel-light text-[var(--color-ink)] border-[var(--glass-border-light)]',
    dark: 'glass-panel-dark text-white border-[var(--glass-border-dark)]',
    subtle: 'bg-white/60 dark:bg-[#082638]/60 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-ink)] shadow-sm',
  };

  return (
    <div
      className={clsx(
        'rounded-2xl p-6 transition-all duration-300',
        variantStyles[variant],
        hoverEffect && 'glass-card-hover cursor-pointer hover:border-[var(--color-teal)]/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
