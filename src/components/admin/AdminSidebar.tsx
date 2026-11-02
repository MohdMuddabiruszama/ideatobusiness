'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Inbox,
  Layers,
  BarChart3,
  Users,
  ShieldCheck,
  Settings,
  ExternalLink,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Shield,
  Menu,
  X,
} from 'lucide-react';
import { logoutAdminAction } from '@/lib/actions/auth';
import { AdminRole } from '@prisma/client';

interface AdminSidebarProps {
  user: {
    name: string;
    email: string;
    role: AdminRole;
  };
}

const NAV_ITEMS = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/enquiries', label: 'Enquiries & Leads', icon: Inbox },
  { href: '/admin/services', label: 'Service Catalog', icon: Layers },
  { href: '/admin/reports', label: 'Reports & Funnel', icon: BarChart3 },
  { href: '/admin/team', label: 'Team Management', icon: Users, superAdminOnly: true },
  { href: '/admin/audit-logs', label: 'Security & Audit', icon: ShieldCheck, superAdminOnly: true },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isSuperAdmin = user.role === 'SUPER_ADMIN';

  return (
    <>
      {/* Mobile Top Navbar with Hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0B2D1F] text-white flex items-center justify-between px-4 z-40 border-b border-emerald-900/40 shadow-md">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-emerald-900/50 text-white hover:bg-emerald-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <span className="font-black text-sm tracking-tight">IDEATOBUSINESS</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Admin
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold truncate max-w-[120px]">{user.name}</span>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity"
        />
      )}

      {/* Sidebar Container (Desktop Pinned + Mobile Slide-Over) */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 bg-[#0B2D1F] text-white border-r border-emerald-900/50 flex flex-col justify-between transition-all duration-300 shadow-xl ${
          mobileOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'
        } ${collapsed ? 'lg:w-20' : 'lg:w-64'}`}
      >
        {/* Top Header & Branding */}
        <div>
          <div className="h-16 flex items-center justify-between px-4 border-b border-emerald-900/40">
            <div className={`flex items-center gap-2.5 overflow-hidden transition-all ${collapsed ? 'justify-center w-full' : ''}`}>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black text-sm shadow-md shrink-0">
                IB
              </div>
              {!collapsed && (
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-black tracking-tight text-white truncate">
                    IDEATOBUSINESS
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                    <Shield className="w-2.5 h-2.5" />
                    {user.role}
                  </span>
                </div>
              )}
            </div>

            {/* Desktop Collapse Toggle Button */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:flex p-1.5 rounded-lg text-emerald-300/80 hover:text-white hover:bg-emerald-900/50 transition-colors"
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
            {NAV_ITEMS.map((item) => {
              if (item.superAdminOnly && !isSuperAdmin) return null;

              const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname?.startsWith(item.href));
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  title={collapsed ? item.label : undefined}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/50 font-black'
                      : 'text-slate-300 hover:text-white hover:bg-emerald-900/40'
                  } ${collapsed ? 'justify-center' : ''}`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Profile & Actions */}
        <div className="p-3 border-t border-emerald-900/40 space-y-2">
          {/* Public Website Preview Link */}
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            title={collapsed ? 'Public Website' : undefined}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-[11px] font-semibold text-emerald-300 hover:text-white hover:bg-emerald-900/40 transition-colors ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            {!collapsed && <span className="truncate">View Public Site</span>}
          </Link>

          {/* User Info & Logout */}
          <div className={`pt-2 flex items-center ${collapsed ? 'justify-center' : 'justify-between'} gap-2`}>
            {!collapsed && (
              <div className="min-w-0 pr-1">
                <p className="text-xs font-bold text-white truncate">{user.name}</p>
                <p className="text-[10px] text-emerald-300/70 truncate">{user.email}</p>
              </div>
            )}

            <form action={logoutAdminAction}>
              <button
                type="submit"
                title="Sign Out"
                className="p-2 rounded-xl text-red-400 hover:text-white hover:bg-red-600/80 transition-all shrink-0"
                aria-label="Sign out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </aside>
    </>
  );
}

