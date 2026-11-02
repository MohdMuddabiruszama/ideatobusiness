'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Phone,
  MessageSquare,
  Mail,
  User,
  Clock,
  CheckCircle2,
  Send,
  ShieldAlert,
  XCircle,
  Archive,
  RefreshCw,
  ArrowLeft,
  Calendar,
  Building,
  MapPin,
  FileText,
  Plus,
  MessageCircle,
} from 'lucide-react';
import {
  updateEnquiryStatusAction,
  assignEnquiryLeadAction,
  addEnquiryNoteAction,
  archiveEnquiryAction,
  restoreEnquiryAction,
} from '@/lib/actions/enquiries-admin';
import { EnquiryStatus, BusinessStage, ContactMethod } from '@prisma/client';

interface NoteItem {
  id: string;
  authorName: string;
  content: string;
  createdAt: string;
}

interface EnquiryDetailManagerProps {
  enquiry: {
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
    city: string | null;
    country: string | null;
    message: string;
    preferredContact: ContactMethod;
    status: EnquiryStatus;
    isArchived: boolean;
    assignedToId: string | null;
    notes: NoteItem[];
    createdAt: string;
  };
  adminTeam: { id: string; name: string }[];
}

const ALL_STATUSES: { status: EnquiryStatus; label: string; color: string }[] = [
  { status: 'NEW', label: 'New', color: 'hover:bg-blue-50 text-blue-700 border-blue-200' },
  { status: 'CONTACTED', label: 'Contacted', color: 'hover:bg-amber-50 text-amber-700 border-amber-200' },
  { status: 'QUALIFIED', label: 'Qualified', color: 'hover:bg-purple-50 text-purple-700 border-purple-200' },
  { status: 'QUOTATION_SENT', label: 'Quotation Sent', color: 'hover:bg-orange-50 text-orange-700 border-orange-200' },
  { status: 'CONVERTED', label: 'Converted', color: 'hover:bg-emerald-50 text-emerald-700 border-emerald-200' },
  { status: 'LOST', label: 'Lost', color: 'hover:bg-slate-50 text-slate-700 border-slate-200' },
  { status: 'ARCHIVED', label: 'Archived', color: 'hover:bg-zinc-50 text-zinc-700 border-zinc-200' },
];

export function EnquiryDetailManager({ enquiry, adminTeam }: EnquiryDetailManagerProps) {
  const router = useRouter();
  const [currentStatus, setCurrentStatus] = useState<EnquiryStatus>(enquiry.status);
  const [assignedId, setAssignedId] = useState<string>(enquiry.assignedToId || '');
  const [noteContent, setNoteContent] = useState('');
  const [notes, setNotes] = useState<NoteItem[]>(enquiry.notes);
  const [isArchived, setIsArchived] = useState(enquiry.isArchived);

  const [isPending, startTransition] = useTransition();

  const handleStatusChange = (status: EnquiryStatus) => {
    setCurrentStatus(status);
    startTransition(async () => {
      await updateEnquiryStatusAction(enquiry.id, status);
      router.refresh();
    });
  };

  const handleAssignLead = (targetId: string) => {
    setAssignedId(targetId);
    startTransition(async () => {
      await assignEnquiryLeadAction(enquiry.id, targetId || null);
      router.refresh();
    });
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteContent.trim()) return;

    const tempText = noteContent;
    setNoteContent('');

    startTransition(async () => {
      const res = await addEnquiryNoteAction(enquiry.id, tempText);
      if (res.success && res.note) {
        setNotes((prev) => [
          {
            id: res.note!.id,
            authorName: res.note!.authorName,
            content: res.note!.content,
            createdAt: res.note!.createdAt.toISOString(),
          },
          ...prev,
        ]);
        router.refresh();
      }
    });
  };

  const handleArchiveToggle = () => {
    startTransition(async () => {
      if (isArchived) {
        await restoreEnquiryAction(enquiry.id);
        setIsArchived(false);
      } else {
        await archiveEnquiryAction(enquiry.id);
        setIsArchived(true);
      }
      router.refresh();
    });
  };

  return (
    <div className="space-y-6">
      {/* Back and Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-200/90 shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/enquiries"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {enquiry.fullName}
              </h1>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold">
                {enquiry.referenceId || enquiry.id.slice(-6)}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Logged on {new Date(enquiry.createdAt).toLocaleString('en-IN')}
            </p>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${enquiry.phone}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-slate-700" />
            <span>Call</span>
          </a>
          <a
            href={`https://wa.me/${enquiry.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-bold transition-colors shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:${enquiry.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-700" />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Dossier Details (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Customer Requirements Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Customer Requirements & Concept</span>
            </h2>

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 text-sm font-medium text-slate-800 leading-relaxed italic">
              &quot;{enquiry.message}&quot;
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs pt-2">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                  Business Stage
                </span>
                <span className="font-bold text-slate-800 capitalize">
                  {enquiry.businessStage.replace('_', ' ')}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                  Preferred Contact
                </span>
                <span className="font-bold text-slate-800 uppercase">
                  {enquiry.preferredContact}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                  Target Department
                </span>
                <span className="font-bold text-emerald-800 capitalize">
                  {enquiry.departmentSlug.replace('-', ' ')}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                  Requested Service / Package
                </span>
                <span className="font-bold text-slate-800">
                  {enquiry.serviceSlug || enquiry.packageSlug || 'General Inquiry'}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                  Business Name
                </span>
                <span className="font-bold text-slate-800">
                  {enquiry.businessName || 'Not specified'}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                  Location
                </span>
                <span className="font-bold text-slate-800">
                  {enquiry.city || 'India'}
                  {enquiry.country ? `, ${enquiry.country}` : ''}
                </span>
              </div>
            </div>
          </div>

          {/* Internal Follow-Up Notes Feed */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Internal Follow-Up Notes ({notes.length})</span>
            </h2>

            {/* Note Composer */}
            <form onSubmit={handleAddNote} className="space-y-2">
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Log follow-up details (e.g., Client answered call, discussed package pricing)..."
                rows={3}
                className="w-full p-3 text-xs sm:text-sm rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isPending || !noteContent.trim()}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Note</span>
                </button>
              </div>
            </form>

            {/* Notes List */}
            <div className="space-y-3 pt-2">
              {notes.length > 0 ? (
                notes.map((note) => (
                  <div
                    key={note.id}
                    className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-1 text-xs"
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-bold text-slate-700">{note.authorName}</span>
                      <span>{new Date(note.createdAt).toLocaleString('en-IN')}</span>
                    </div>
                    <p className="text-slate-800 leading-relaxed font-medium">{note.content}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-xs text-slate-400">
                  No internal notes recorded yet. Add the first follow-up note above.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Status & Assignment Control (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Status Pipeline Controller */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3">
              Lifecycle Stage
            </h2>

            <div className="grid grid-cols-1 gap-2">
              {ALL_STATUSES.map((st) => {
                const isSelected = currentStatus === st.status;
                return (
                  <button
                    key={st.status}
                    type="button"
                    onClick={() => handleStatusChange(st.status)}
                    disabled={isPending}
                    className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm scale-101'
                        : `bg-white ${st.color}`
                    }`}
                  >
                    <span>{st.label}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lead Assignment Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3">
              Lead Assignment
            </h2>
            <label className="text-xs text-slate-500 block">
              Assign coordinator responsible for customer outreach:
            </label>
            <select
              value={assignedId}
              onChange={(e) => handleAssignLead(e.target.value)}
              disabled={isPending}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Unassigned (Open Queue)</option>
              {adminTeam.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </div>

          {/* Archival Controller */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3">
              Archive & Data Hygiene
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Archived leads are kept for historical reporting and audit trails, but hidden from the
              active queue.
            </p>
            <button
              type="button"
              onClick={handleArchiveToggle}
              disabled={isPending}
              className={`w-full py-2.5 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                isArchived
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                  : 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200'
              }`}
            >
              {isArchived ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Restore to Active Queue</span>
                </>
              ) : (
                <>
                  <Archive className="w-3.5 h-3.5" />
                  <span>Archive Enquiry</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

