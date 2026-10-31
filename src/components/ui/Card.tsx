import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className,
  hoverable = false,
  padding = 'md',
  ...props
}: CardProps) {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6', // 16px mobile, 24px desktop
    lg: 'p-6 sm:p-8',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-[16px] border border-[#E5E7EB] transition-all duration-200',
        paddingClasses[padding],
        hoverable &&
          'hover:-translate-y-1 hover:border-brand-emerald hover:shadow-card-hover transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
