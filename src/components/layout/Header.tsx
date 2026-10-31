'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]'
            : 'bg-white border-b border-slate-100'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative h-10 w-44 sm:h-12 sm:w-52">
                <Image
                  src="/logos/logo-dark.png"
                  alt="IDEATOBUSINESS Logo"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 180px, 220px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {MAIN_NAVIGATION.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3.5 py-2 text-[15px] font-semibold rounded-lg transition-colors',
                      isActive(item.href)
                        ? 'text-brand-deep bg-brand-mint'
                        : 'text-neutral-navy hover:text-brand-emerald hover:bg-slate-50'
                    )}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-1 px-2 py-0.5 text-[10px] font-bold uppercase bg-accent-orange text-neutral-navy rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform text-slate-400',
                          openDropdown === item.label && 'rotate-180 text-brand-emerald'
                        )}
                      />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="w-80 bg-white rounded-[16px] border border-[#E5E7EB] shadow-xl p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-mint transition-colors group"
                          >
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-brand-deep group-hover:text-brand-emerald transition-colors">
                                {child.label}
                              </p>
                              {child.description && (
                                <p className="text-xs text-[#4B5563] mt-0.5 leading-relaxed">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-slate-100 mt-1.5 pt-1.5">
                          <Link
                            href={item.href}
                            className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-brand-emerald hover:bg-brand-mint rounded-lg transition-colors"
                          >
                            View All 30 Services
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                href="/get-started"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="hidden sm:inline-flex"
              >
                Get Started →
              </Button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 -mr-2 text-brand-deep hover:bg-slate-100 rounded-lg transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-neutral-navy/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between px-5 h-20 border-b border-slate-100">
              <div className="relative h-10 w-40">
                <Image
                  src="/logos/logo-dark.png"
                  alt="IDEATOBUSINESS Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 -mr-2 text-slate-700 hover:bg-slate-100 rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-5 space-y-1">
              {MAIN_NAVIGATION.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                        className={cn(
                          'flex items-center justify-between w-full px-3 py-3 text-base font-semibold rounded-xl transition-colors',
                          isActive(item.href)
                            ? 'text-brand-deep bg-brand-mint'
                            : 'text-neutral-navy hover:bg-slate-50'
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform text-slate-400',
                            openDropdown === item.label && 'rotate-180 text-brand-emerald'
                          )}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="mt-1 ml-3 pl-3 border-l-2 border-brand-emerald space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm text-[#4B5563] hover:text-brand-deep rounded-lg hover:bg-slate-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm font-bold text-brand-emerald rounded-lg hover:bg-brand-mint transition-colors"
                          >
                            View All Services →
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center gap-2 px-3 py-3 text-base font-semibold rounded-xl transition-colors',
                        isActive(item.href)
                          ? 'text-brand-deep bg-brand-mint'
                          : 'text-neutral-navy hover:bg-slate-50'
                      )}
                    >
                      {item.label}
                      {item.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-accent-orange text-neutral-navy rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="px-5 py-5 border-t border-slate-100">
              <Button
                href="/get-started"
                variant="primary"
                fullWidth
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started →
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
