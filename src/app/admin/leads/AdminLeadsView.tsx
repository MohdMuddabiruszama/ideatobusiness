'use client';

import React, { useState, useMemo } from 'react';
import { updateEnquiryStatus } from '@/lib/actions/admin';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Search, Filter, Phone, Mail, Clock, CheckCircle2, ChevronDown, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EnquiryStatus } from '@prisma/client';

interface EnquiryData {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  businessStage: string;
  departmentSlug: string;
  serviceSlug: string | null;
  packageSlug: string | null;
  businessName: string | null;
  city: string | null;
  country: string | null;
  message: string;
  preferredContact: string;
  consentAccepted: boolean;
  status: EnquiryStatus;
  internalNotes: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export function AdminLeadsView({ initialEnquiries }: { initialEnquiries: EnquiryData[] }) {
  const [enquiries, setEnquiries] = useState<EnquiryData[]>(initialEnquiries);
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryData | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [notesInput, setNotesInput] = useState('');

  const stats = useMemo(() => {
    return {
      total: enquiries.length,
      new: enquiries.filter((e) => e.status === 'NEW').length,
      contacted: enquiries.filter((e) => e.status === 'CONTACTED').length,
      converted: enquiries.filter((e) => e.status === 'CONVERTED').length,
    };
  }, [enquiries]);

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((e) => {
      const matchesStatus = selectedStatus === 'ALL' || e.status === selectedStatus;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        e.fullName.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        e.phone.includes(q) ||
        (e.businessName && e.businessName.toLowerCase().includes(q)) ||
        e.departmentSlug.toLowerCase().includes(q);

      return matchesStatus && matchesSearch;
    });
  }, [enquiries, selectedStatus, search]);

  const handleStatusChange = async (id: string, newStatus: EnquiryStatus) => {
    setIsUpdating(true);
    const res = await updateEnquiryStatus(id, newStatus, notesInput || undefined);
    if (res.success) {
      setEnquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus, internalNotes: notesInput || item.internalNotes } : item))
      );
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry((prev) => prev ? { ...prev, status: newStatus, internalNotes: notesInput || prev.internalNotes } : null);
      }
    }
    setIsUpdating(false);
  };

  const statusColors: Record<EnquiryStatus, 'blue' | 'emerald' | 'amber' | 'slate' | 'orange'> = {
    NEW: 'blue',
    CONTACTED: 'amber',
    QUALIFIED: 'orange',
    QUOTED: 'amber',
    CONVERTED: 'emerald',
    NOT_CONVERTED: 'slate',
    CLOSED: 'slate',
  };

  return (
    <div className="space-y-6">
      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 border-l-4 border-l-slate-400">
          <p className="text-xs font-semibold uppercase text-slate-500">Total Leads</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{stats.total}</p>
        </Card>
        <Card className="p-4 border-l-4 border-l-blue-500">
          <p className="text-xs font-semibold uppercase text-blue-600">New Unread</p>
          <p className="text-2xl font-black text-blue-900 mt-1">{stats.new}</p>
        </Card>
        <Card className="p-4 border-l-4 border-l-amber-500">
          <p className="text-xs font-semibold uppercase text-amber-600">Contacted / In Discussion</p>
          <p className="text-2xl font-black text-amber-900 mt-1">{stats.contacted}</p>
        </Card>
        <Card className="p-4 border-l-4 border-l-emerald-500">
          <p className="text-xs font-semibold uppercase text-emerald-600">Converted Clients</p>
          <p className="text-2xl font-black text-emerald-900 mt-1">{stats.converted}</p>
        </Card>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads by name, email, phone..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'CLOSED'].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-colors',
                selectedStatus === st
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              )}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table / Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Leads Table */}
        <div className={cn(selectedEnquiry ? 'lg:col-span-7' : 'lg:col-span-12')}>
          {filteredEnquiries.length > 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="divide-y divide-slate-100">
                {filteredEnquiries.map((enquiry) => (
                  <div
                    key={enquiry.id}
                    onClick={() => {
                      setSelectedEnquiry(enquiry);
                      setNotesInput(enquiry.internalNotes || '');
                    }}
                    className={cn(
                      'p-4 sm:p-5 hover:bg-slate-50/80 cursor-pointer transition-colors flex items-start justify-between gap-4',
                      selectedEnquiry?.id === enquiry.id && 'bg-brand-50/50 border-l-4 border-l-brand-600'
                    )}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-sm font-bold text-slate-900">
                          {enquiry.fullName}
                        </strong>
                        <Badge variant={statusColors[enquiry.status]} size="sm">
                          {enquiry.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500">
                        {enquiry.email} • {enquiry.phone}
                      </p>
                      <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-600">
                        <span className="font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                          {enquiry.departmentSlug}
                        </span>
                        {enquiry.serviceSlug && (
                          <span className="text-slate-400">→ {enquiry.serviceSlug}</span>
                        )}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] text-slate-400">
                        {new Date(enquiry.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-6">
              <p className="text-sm font-semibold text-slate-700">No enquiries found</p>
              <p className="text-xs text-slate-400 mt-1">
                New enquiries submitted via the Get Started form will appear here in real time.
              </p>
            </div>
          )}
        </div>

        {/* Selected Lead Drawer/Panel */}
        {selectedEnquiry && (
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-md p-6 space-y-5 lg:sticky lg:top-24">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{selectedEnquiry.fullName}</h3>
                <p className="text-xs text-slate-400">
                  Lead ID: <span className="font-mono">{selectedEnquiry.id}</span>
                </p>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                ✕ Close
              </button>
            </div>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${selectedEnquiry.phone}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold"
              >
                <Phone className="w-3.5 h-3.5" /> Call Lead
              </a>
              <a
                href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>

            {/* Details */}
            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <span className="text-slate-400 uppercase font-semibold text-[10px] block">
                  Business Stage:
                </span>
                <span className="font-medium text-slate-900">{selectedEnquiry.businessStage}</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase font-semibold text-[10px] block">
                  Department & Service:
                </span>
                <span className="font-medium text-slate-900">
                  {selectedEnquiry.departmentSlug} {selectedEnquiry.serviceSlug && `(${selectedEnquiry.serviceSlug})`}
                </span>
              </div>
              {selectedEnquiry.packageSlug && (
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px] block">
                    Selected Package:
                  </span>
                  <span className="font-medium text-brand-700">{selectedEnquiry.packageSlug}</span>
                </div>
              )}
              <div>
                <span className="text-slate-400 uppercase font-semibold text-[10px] block">
                  Customer Message:
                </span>
                <p className="mt-1 p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 leading-relaxed italic">
                  &quot;{selectedEnquiry.message}&quot;
                </p>
              </div>
            </div>

            {/* Status changer */}
            <div className="pt-3 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Update Status:
              </label>
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                {(['NEW', 'CONTACTED', 'QUALIFIED', 'QUOTED', 'CONVERTED', 'CLOSED'] as EnquiryStatus[]).map(
                  (st) => (
                    <button
                      key={st}
                      disabled={isUpdating}
                      onClick={() => handleStatusChange(selectedEnquiry.id, st)}
                      className={cn(
                        'py-1.5 px-2 rounded-lg font-semibold border transition-all text-[11px]',
                        selectedEnquiry.status === st
                          ? 'bg-brand-600 text-white border-brand-600'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      )}
                    >
                      {st}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Internal Notes */}
            <div className="pt-3 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Internal Follow-Up Notes:
              </label>
              <textarea
                rows={3}
                value={notesInput}
                onChange={(e) => setNotesInput(e.target.value)}
                placeholder="Add private team notes (e.g., Called customer, sent proposal on WhatsApp)..."
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <div className="mt-2 text-right">
                <Button
                  onClick={() => handleStatusChange(selectedEnquiry.id, selectedEnquiry.status)}
                  isLoading={isUpdating}
                  size="sm"
                  className="text-xs"
                >
                  Save Notes
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

