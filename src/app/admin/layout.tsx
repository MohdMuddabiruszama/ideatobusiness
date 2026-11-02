import type { Metadata } from 'next';
import { getAdminSession } from '@/lib/auth/session';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Super Admin Portal — IDEATOBUSINESS',
  robots: { index: false, follow: false },
};

export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionCtx = await getAdminSession();

  // For unauthenticated pages (e.g. /admin/login)
  if (!sessionCtx) {
    return <div className="min-h-screen bg-slate-100 flex flex-col justify-center">{children}</div>;
  }

  // Dedicated authenticated Super Admin workspace
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex font-sans antialiased">
      <AdminSidebar user={sessionCtx.user} />
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0 min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}

