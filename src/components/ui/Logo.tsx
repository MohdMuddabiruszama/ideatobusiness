import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

export function Logo({
  variant = 'dark',
  size = 'md',
  className,
  showTagline = true,
}: LogoProps) {
  const isLight = variant === 'light';

  // Sizing definitions tuned for maximum readability and visual balance
  const sizeMap = {
    sm: {
      icon: 'h-7 w-7',
      title: 'text-[15px]',
      tagline: 'text-[7.5px] tracking-[0.11em] mt-0.5',
      gap: 'gap-2',
    },
    md: {
      icon: 'h-9 w-9 sm:h-10 sm:w-10',
      title: 'text-[18px]',
      tagline: 'text-[9px] tracking-[0.12em] mt-0.5',
      gap: 'gap-2.5',
    },
    lg: {
      icon: 'h-12 w-12 sm:h-14 sm:w-14',
      title: 'text-[24px] sm:text-[28px]',
      tagline: 'text-[11px] sm:text-xs tracking-[0.16em] mt-1',
      gap: 'gap-3',
    },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      className={cn(
        'inline-flex items-center select-none group transition-opacity hover:opacity-95',
        currentSize.gap,
        className
      )}
    >
      {/* 3D Glossy "ib" Emblem with Glowing Growth Arrow */}
      <div className={cn('relative shrink-0 transition-transform group-hover:scale-105 duration-200', currentSize.icon)}>
        <Image
          src="/logos/logo-symbol.png"
          alt="IDEATOBUSINESS Emblem"
          fill
          priority
          sizes="(max-width: 640px) 44px, 52px"
          className="object-contain"
        />
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col justify-center leading-none">
        <div
          className={cn(
            'flex items-baseline font-black tracking-[-0.03em] uppercase leading-none font-sans',
            currentSize.title
          )}
        >
          <span className={isLight ? 'text-white' : 'text-[#0B2D1F]'}>IDEATO</span>
          <span className="text-[#10B981] ml-[0.5px]">BUSINESS</span>
        </div>

        {showTagline && (
          <span
            className={cn(
              'font-bold uppercase leading-none whitespace-nowrap font-sans',
              isLight ? 'text-slate-200' : 'text-[#1E293B]',
              currentSize.tagline
            )}
          >
            YOUR BUSINESS JOURNEY, SIMPLIFIED.
          </span>
        )}
      </div>
    </div>
  );
}
