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
      icon: 'h-8 w-8',
      title: 'text-[17px]',
      tagline: 'text-[8.5px] tracking-[0.14em] mt-0.5',
      gap: 'gap-2',
    },
    md: {
      icon: 'h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12',
      title: 'text-[19px] sm:text-[22px] md:text-[24px]',
      tagline: 'text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.15em] sm:tracking-[0.17em] mt-1',
      gap: 'gap-2.5 sm:gap-3',
    },
    lg: {
      icon: 'h-14 w-14 sm:h-16 sm:w-16',
      title: 'text-2xl sm:text-3xl',
      tagline: 'text-[11px] sm:text-xs tracking-[0.2em] mt-1.5',
      gap: 'gap-3.5',
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
