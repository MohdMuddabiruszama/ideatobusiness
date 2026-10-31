'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { Logo } from '@/components/ui/Logo';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setSearchOpen(false);
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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/services?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
            : 'bg-white border-b border-slate-100'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" aria-label="IDEATOBUSINESS - Your Business Journey, Simplified">
              <Logo variant="dark" size="md" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
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
                      'flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors',
                      isActive(item.href)
                        ? 'text-brand-emerald bg-emerald-50/80 font-bold'
                        : 'text-neutral-navy hover:text-brand-emerald hover:bg-slate-50'
                    )}
                  >
                    {item.label}
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
                      <div className="w-80 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 animate-in fade-in slide-in-from-top-2 duration-150">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                          >
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-brand-deep group-hover:text-brand-emerald transition-colors">
                                {child.label}
                              </p>
                              {child.description && (
                                <p className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-slate-100 mt-1.5 pt-1.5">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between px-3 py-2 text-xs font-bold text-brand-emerald hover:bg-emerald-50 rounded-lg transition-colors"
                          >
                            <span>View All 30 Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Actions (Search + CTA) */}
            <div className="flex items-center gap-3">
              {/* Search toggle */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-neutral-navy hover:text-brand-emerald hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Search services"
                >
                  <Search className="w-5 h-5" />
                </button>

                {searchOpen && (
                  <form
                    onSubmit={handleSearchSubmit}
                    className="absolute right-0 top-full mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        autoFocus
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search services, GST, logo..."
                        className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-emerald"
                      />
                      <button
                        type="submit"
                        className="bg-brand-emerald text-white p-2 rounded-lg hover:bg-emerald-600 transition-colors shrink-0"
                      >
                        <Search className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Get Started Button */}
              <Link
                href="/get-started"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-bold text-sm px-5 py-2.5 shadow-sm shadow-emerald-900/15 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-brand-deep hover:bg-slate-100 rounded-lg transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-neutral-navy/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-250">
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
              <Link href="/" onClick={() => setMobileOpen(false)} aria-label="IDEATOBUSINESS">
                <Logo variant="dark" size="sm" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
              {MAIN_NAVIGATION.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center justify-between px-3 py-2.5 text-base font-semibold rounded-xl transition-colors',
                      isActive(item.href)
                        ? 'text-brand-emerald bg-emerald-50'
                        : 'text-neutral-navy hover:bg-slate-50'
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile Footer CTA */}
            <div className="p-5 border-t border-slate-100">
              <Link
                href="/get-started"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-brand-emerald hover:bg-emerald-600 text-white font-bold text-base py-3 shadow transition-all"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
