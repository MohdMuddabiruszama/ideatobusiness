'use client';

import React, { useState, useTransition } from 'react';
import {
  Lock,
  Shield,
  Key,
  CheckCircle2,
  AlertCircle,
  Monitor,
  Calendar,
  LogOut,
} from 'lucide-react';
import { changePasswordAction } from '@/lib/actions/auth';
import { AdminRole } from '@prisma/client';

interface AdminSettingsViewProps {
  user: {
    id: string;
    name: string;
    email: string;
    role: AdminRole;
    lastLoginAt: string | null;
  };
  activeSessions: {
    id: string;
    ipAddress: string | null;
    userAgent: string | null;
    expiresAt: string;
    createdAt: string;
    isCurrent: boolean;
  }[];
}

export function AdminSettingsView({ user, activeSessions }: AdminSettingsViewProps) {
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const res = await changePasswordAction(formData);
      if (res.success) {
        setPasswordSuccess(true);
        form.reset();
      } else {
        setPasswordError(res.error || 'Failed to update password.');
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Password Change & Profile (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Profile Overview Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Administrator Profile</span>
            </h2>

            <div className="grid grid-cols-2 gap-4 text-xs font-medium">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                  Display Name
                </span>
                <span className="font-bold text-slate-900 text-sm">{user.name}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                  Access Level / Role
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {user.role}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                  Official Email
                </span>
                <span className="font-semibold text-slate-700">{user.email}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                  Last Authentication
                </span>
                <span className="text-slate-500">
                  {user.lastLoginAt ? new Date(user.lastLoginAt).toLocaleString('en-IN') : 'Active Now'}
                </span>
              </div>
            </div>
          </div>

          {/* Password Change Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Key className="w-4 h-4 text-emerald-600" />
              <span>Update Password</span>
            </h2>

            {passwordSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Password updated successfully. Other active sessions revoked.</span>
              </div>
            )}

            {passwordError && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>{passwordError}</span>
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="space-y-3 text-xs font-medium text-slate-700">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Current Password
                </label>
                <input
                  name="currentPassword"
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  New Password (min 8 characters)
                </label>
                <input
                  name="newPassword"
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Confirm New Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors disabled:opacity-50"
                >
                  {isPending ? 'Updating...' : 'Save New Password'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Active Sessions & Security Badges (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Active Sessions */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-emerald-600" />
                <span>Active Server Sessions</span>
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 font-bold text-slate-600">
                {activeSessions.length} Device(s)
              </span>
            </div>

            <div className="space-y-3">
              {activeSessions.map((s) => (
                <div
                  key={s.id}
                  className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-slate-500" />
                      <span>{s.userAgent ? s.userAgent.slice(0, 30) + '...' : 'Browser Session'}</span>
                    </span>
                    {s.isCurrent && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 space-y-0.5">
                    <p>IP Address: {s.ipAddress || '127.0.0.1'}</p>
                    <p>Expires: {new Date(s.expiresAt).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Standards Overview */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3">
              Infrastructure Security Specs
            </h2>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                <span>Database Engine</span>
                <span className="font-bold text-slate-900">PostgreSQL 16/17</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                <span>Password Hashing</span>
                <span className="font-bold text-emerald-700">Bcrypt (Salt 12)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-50">
                <span>Session Storage</span>
                <span className="font-bold text-slate-900">PostgreSQL Backed</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Cookie Protection</span>
                <span className="font-bold text-emerald-700">HttpOnly + SameSite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

