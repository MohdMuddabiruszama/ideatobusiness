import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getAdminEnquiries } from '@/lib/actions/admin';
import { AdminLeadsView } from './AdminLeadsView';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Lead Management — Protected Internal Admin',
  robots: { index: false, follow: false },
};

export default async function AdminLeadsPage() {
  const { enquiries } = await getAdminEnquiries();

  return (
    <Section background="subtle" padding="sm">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Customer Lead Management
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Protected internal dashboard for enquiry review, status updates, and customer follow-ups.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
              Total Leads: {enquiries.length}
            </span>
          </div>
        </div>

        <AdminLeadsView initialEnquiries={enquiries} />
      </Container>
    </Section>
  );
}
