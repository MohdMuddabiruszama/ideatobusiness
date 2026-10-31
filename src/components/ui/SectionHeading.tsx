import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'light' | 'dark';
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  theme = 'light',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const isDark = theme === 'dark';

  return (
    <div className={cn('mb-10 sm:mb-14 max-w-3xl flex flex-col', alignClasses[align], className)}>
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3',
            isDark
              ? 'bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30'
              : 'bg-brand-mint text-brand-emerald border border-brand-emerald/20 font-bold'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight',
          isDark ? 'text-white' : 'text-brand-deep'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3.5 text-base sm:text-lg leading-relaxed max-w-2xl',
            isDark ? 'text-slate-300' : 'text-[#4B5563]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
