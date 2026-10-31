import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'subtle' | 'dark' | 'brand';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Section({
  children,
  className,
  id,
  background = 'white',
  padding = 'lg',
  ...props
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    subtle: 'bg-slate-50 border-y border-slate-100',
    dark: 'bg-slate-900 text-white',
    brand: 'bg-brand-950 text-white',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16 lg:py-20',
    lg: 'py-16 sm:py-20 lg:py-28',
  };

  return (
    <section
      id={id}
      className={cn('relative w-full overflow-hidden', bgClasses[background], paddingClasses[padding], className)}
      {...props}
    >
      {children}
    </section>
  );
}

