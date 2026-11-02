'use client';

import React, { useState, useMemo, useTransition } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  Download,
  Phone,
  MessageSquare,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Send,
  XCircle,
  Archive,
  User,
  Building,
} from 'lucide-react';
import { exportEnquiriesCSVAction } from '@/lib/actions/enquiries-admin';
import { EnquiryStatus, BusinessStage } from '@prisma/client';

export interface EnquiryListItem {
  id: string;
  referenceId: string | null;
  fullName: string;
  email: string;
  phone: string;
  businessStage: BusinessStage;
  departmentSlug: string;
  serviceSlug: string | null;
  packageSlug: string | null;
  businessName: string | null;
  status: EnquiryStatus;
  isArchived: boolean;
  assignedToName: string | null;
  createdAt: string;
}

interface EnquiryListViewProps {
  initialEnquiries: EnquiryListItem[];
  adminTeam: { id: string; name: string }[];
}

const STATUS_CONFIG: Record<
  EnquiryStatus,
  { label: string; badge: string; border: string; icon: React.ElementType }
> = {
  NEW: { label: 'New', badge: 'bg-blue-100 text-blue-800 border-blue-200', border: 'border-l-blue-500', icon: Clock },
  CONTACTED: { label: 'Contacted', badge: 'bg-amber-100 text-amber-800 border-amber-200', border: 'border-l-amber-500', icon: Clock },
  QUALIFIED: { label: 'Qualified', badge: 'bg-purple-100 text-purple-800 border-purple-200', border: 'border-l-purple-500', icon: ShieldAlert },
  QUOTATION_SENT: { label: 'Quotation Sent', badge: 'bg-orange-100 text-orange-800 border-orange-200', border: 'border-l-orange-500', icon: Send },
  CONVERTED: { label: 'Converted', badge: 'bg-emerald-100 text-emerald-800 border-emerald-200', border: 'border-l-emerald-500', icon: CheckCircle2 },
  LOST: { label: 'Lost', badge: 'bg-slate-100 text-slate-700 border-slate-200', border: 'border-l-slate-400', icon: XCircle },
  ARCHIVED: { label: 'Archived', badge: 'bg-zinc-100 text-zinc-600 border-zinc-200', border: 'border-l-zinc-400', icon: Archive },
};

export function EnquiryListView({ initialEnquiries, adminTeam }: EnquiryListViewProps) {
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedDept, setSelectedDept] = useState<string>('ALL');
  const [selectedStage, setSelectedStage] = useState<string>('ALL');
  const [showArchived, setShowArchived] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isExporting, startExportTransition] = useTransition();

  const PAGE_SIZE = 15;

  // Filtered dataset
  const filtered = useMemo(() => {
    return initialEnquiries.filter((item) => {
      // Archive toggle
      if (!showArchived && item.isArchived) return false;
      if (showArchived && !item.isArchived) return false;

      // Status
      if (selectedStatus !== 'ALL' && item.status !== selectedStatus) return false;

      // Department
      if (selectedDept !== 'ALL' && item.departmentSlug !== selectedDept) return false;

      // Stage
      if (selectedStage !== 'ALL' && item.businessStage !== selectedStage) return false;

      // Search Query
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesName = item.fullName.toLowerCase().includes(q);
        const matchesEmail = item.email.toLowerCase().includes(q);
        const matchesPhone = item.phone.includes(q);
        const matchesRef = item.referenceId ? item.referenceId.toLowerCase().includes(q) : false;
        const matchesBiz = item.businessName ? item.businessName.toLowerCase().includes(q) : false;

        return matchesName || matchesEmail || matchesPhone || matchesRef || matchesBiz;
      }

      return true;
    });
  }, [initialEnquiries, search, selectedStatus, selectedDept, selectedStage, showArchived]);

  // Pagination calculation
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const handleExportCSV = () => {
    startExportTransition(async () => {
      const res = await exportEnquiriesCSVAction();
      if (res.success && res.csvContent) {
        const blob = new Blob([res.csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ideatobusiness_enquiries_${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    });
  };

  return (
    <div className="space-y-4">
      {/* Search and Filters Header */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by name, email, phone, or Ref ID..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
            />
          </div>

          {/* Action Row: Export CSV & Archive Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setShowArchived(!showArchived);
                setCurrentPage(1);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
                showArchived
                  ? 'bg-zinc-800 text-white border-zinc-800'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Archive className="w-3.5 h-3.5" />
              <span>{showArchived ? 'Viewing Archived' : 'Archived'}</span>
            </button>

            <button
              onClick={handleExportCSV}
              disabled={isExporting}
              className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-colors flex items-center gap-1.5 disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isExporting ? 'Exporting...' : 'Export CSV'}</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
            {['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'QUOTATION_SENT', 'CONVERTED', 'LOST'].map(
              (st) => (
                <button
                  key={st}
                  onClick={() => {
                    setSelectedStatus(st);
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] whitespace-nowrap transition-colors ${
                    selectedStatus === st
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {st.replace('_', ' ')}
                </button>
              )
            )}
          </div>

          {/* Dropdown Filters */}
          <div className="flex items-center gap-2 ml-auto">
            <select
              value={selectedDept}
              onChange={(e) => {
                setSelectedDept(e.target.value);
                setCurrentPage(1);
              }}
              className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-[11px] font-semibold text-slate-700 focus:outline-none"
            >
              <option value="ALL">All Departments</option>
              <option value="business-launch">Business Launch</option>
              <option value="branding-design">Branding & Design</option>
              <option value="website-technology">Website & Tech</option>
              <option value="marketplace-selling">Marketplace Selling</option>
              <option value="marketing-growth">Marketing & Growth</option>
            </select>

            <select
              value={selectedStage}
              onChange={(e) => {
                setSelectedStage(e.target.value);
                setCurrentPage(1);
              }}
              className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-[11px] font-semibold text-slate-700 focus:outline-none"
            >
              <option value="ALL">All Stages</option>
              <option value="IDEA">Idea Stage</option>
              <option value="NEW_BUSINESS">New Business</option>
              <option value="EXISTING_BUSINESS">Existing Business</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between px-2 text-xs text-slate-500 font-semibold">
        <span>
          Showing {paginated.length} of {filtered.length} leads
        </span>
        <span>Page {currentPage} of {totalPages}</span>
      </div>

      {/* Main Table View (Desktop) & Card View (Mobile) */}
      {paginated.length > 0 ? (
        <div className="space-y-3">
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3.5 px-4">Ref / Customer</th>
                  <th className="py-3.5 px-4">Contact</th>
                  <th className="py-3.5 px-4">Department & Service</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Stage</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {paginated.map((lead) => {
                  const cfg = STATUS_CONFIG[lead.status] || STATUS_CONFIG.NEW;
                  return (
                    <tr
                      key={lead.id}
                      className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                    >
                      <td className="py-3.5 px-4">
                        <Link href={`/admin/enquiries/${lead.id}`} className="block">
                          <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors block">
                            {lead.fullName}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400">
                            {lead.referenceId || lead.id.slice(-6)}
                          </span>
                        </Link>
                      </td>

                      <td className="py-3.5 px-4 text-slate-600">
                        <div className="flex flex-col">
                          <span>{lead.email}</span>
                          <span className="text-slate-400 font-mono text-[11px]">{lead.phone}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[11px] inline-block capitalize">
                          {lead.departmentSlug.replace('-', ' ')}
                        </span>
                        {lead.serviceSlug && (
                          <span className="block text-[10px] text-slate-400 mt-0.5 truncate max-w-[160px]">
                            {lead.serviceSlug}
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border ${cfg.badge}`}
                        >
                          {cfg.label}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-slate-600 text-[11px]">
                        <span className="capitalize">{lead.businessStage.replace('_', ' ')}</span>
                      </td>

                      <td className="py-3.5 px-4 text-slate-400 text-[11px]">
                        {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                            title="WhatsApp Client"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </a>
                          <Link
                            href={`/admin/enquiries/${lead.id}`}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white transition-colors"
                            title="Open Dossier"
                          >
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile / Tablet Responsive High-Density Card View */}
          <div className="lg:hidden space-y-3">
            {paginated.map((lead) => {
              const cfg = STATUS_CONFIG[lead.status] || STATUS_CONFIG.NEW;
              return (
                <div
                  key={lead.id}
                  className={`bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 space-y-3 border-l-4 ${cfg.border}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        href={`/admin/enquiries/${lead.id}`}
                        className="font-bold text-sm text-slate-900 hover:text-emerald-700"
                      >
                        {lead.fullName}
                      </Link>
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-0.5">
                        <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">
                          {lead.referenceId || lead.id.slice(-6)}
                        </span>
                        <span>•</span>
                        <span>
                          {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                          })}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border ${cfg.badge}`}
                    >
                      {cfg.label}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1">
                    <p className="truncate">{lead.email}</p>
                    <p className="font-mono text-[11px] text-slate-500">{lead.phone}</p>
                    <div className="pt-1 flex items-center gap-2">
                      <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px] capitalize">
                        {lead.departmentSlug.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Quick Action Buttons */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <a
                        href={`tel:${lead.phone}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-green-500 text-white text-xs font-semibold"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <Link
                      href={`/admin/enquiries/${lead.id}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold"
                    >
                      <span>Manage</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-slate-200/90 shadow-xs text-xs">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none font-bold"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <span className="text-slate-500 font-bold">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none font-bold"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-12 text-center space-y-2">
          <p className="text-sm font-bold text-slate-800">No matching leads found</p>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search query, status filters, or check the archived tab.
          </p>
        </div>
      )}
    </div>
  );
}

