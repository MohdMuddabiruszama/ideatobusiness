import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'emerald' | 'amber' | 'blue' | 'slate' | 'orange' | 'outline';
  size?: 'sm' | 'md';
}

export function Badge({
  children,
  className,
  variant = 'emerald',
  size = 'md',
  ...props
}: BadgeProps) {
  const variants = {
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
    amber: 'bg-amber-50 text-amber-900 border-amber-200/60',
    blue: 'bg-sky-50 text-sky-800 border-sky-200/60',
    slate: 'bg-slate-100 text-slate-800 border-slate-200',
    orange: 'bg-orange-50 text-orange-800 border-orange-200/60',
    outline: 'bg-transparent text-slate-700 border-slate-300',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-semibold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

