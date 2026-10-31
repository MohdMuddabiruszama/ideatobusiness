'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  defaultOpenId?: string;
}

export function Accordion({ items, className, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className={cn('divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="bg-white">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex items-center justify-between w-full px-5 py-4 sm:px-6 sm:py-5 text-left hover:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className={cn('text-sm sm:text-base font-semibold pr-4', isOpen ? 'text-brand-700' : 'text-slate-900')}>
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 shrink-0 transition-transform duration-200',
                  isOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <p className="px-5 pb-4 sm:px-6 sm:pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

