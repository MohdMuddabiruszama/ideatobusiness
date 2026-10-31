'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Lock, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // In initial MVP, redirect directly to leads dashboard
    if (email && password) {
      router.push('/admin/leads');
    } else {
      setError('Please provide valid admin credentials.');
      setLoading(false);
    }
  };

  return (
    <Section background="subtle">
      <Container size="narrow">
        <div className="max-w-md mx-auto py-12">
          <Card className="p-8 border-2 border-slate-200 shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>

            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Admin Portal</h1>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Sign in to manage incoming customer enquiries and leads.
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Admin Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@ideatobusiness.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" isLoading={loading} fullWidth size="lg">
                  Sign In to Dashboard
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

