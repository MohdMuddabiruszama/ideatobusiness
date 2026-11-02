'use client';

import React, { useState, useTransition } from 'react';
import {
  Layers,
  Plus,
  Edit2,
  Check,
  X,
  Eye,
  EyeOff,
  DollarSign,
  Tag,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import {
  createServiceAction,
  updateServiceAction,
  toggleServiceStatusAction,
} from '@/lib/actions/services-admin';

export interface ServiceItemData {
  id: string;
  slug: string;
  departmentSlug: string;
  name: string;
  tagline: string;
  description: string;
  startingPrice: number | null;
  priceDisplay: string;
  isStartingPriceEstimate: boolean;
  isActive: boolean;
}

interface ServiceCatalogManagerProps {
  departments: { id: string; slug: string; name: string }[];
  initialServices: ServiceItemData[];
}

export function ServiceCatalogManager({ departments, initialServices }: ServiceCatalogManagerProps) {
  const [services, setServices] = useState<ServiceItemData[]>(initialServices);
  const [selectedDept, setSelectedDept] = useState<string>('business-launch');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceItemData | null>(null);

  const [isPending, startTransition] = useTransition();

  const filtered = services.filter((s) => s.departmentSlug === selectedDept);

  const handleToggleActive = (serviceId: string) => {
    startTransition(async () => {
      const res = await toggleServiceStatusAction(serviceId);
      if (res.success && res.service) {
        setServices((prev) =>
          prev.map((s) => (s.id === serviceId ? { ...s, isActive: res.service!.isActive } : s))
        );
      }
    });
  };

  const handleOpenCreate = () => {
    setEditingService(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (service: ServiceItemData) => {
    setEditingService(service);
    setIsModalOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      if (editingService) {
        const res = await updateServiceAction(editingService.id, formData);
        if (res.success && res.service) {
          setServices((prev) =>
            prev.map((s) => (s.id === editingService.id ? { ...s, ...res.service } : s))
          );
          setIsModalOpen(false);
        }
      } else {
        const res = await createServiceAction(formData);
        if (res.success && res.service) {
          setServices((prev) => [
            ...prev,
            {
              id: res.service!.id,
              slug: res.service!.slug,
              departmentSlug: res.service!.departmentSlug,
              name: res.service!.name,
              tagline: res.service!.tagline,
              description: res.service!.description,
              startingPrice: res.service!.startingPrice,
              priceDisplay: res.service!.priceDisplay,
              isStartingPriceEstimate: res.service!.isStartingPriceEstimate,
              isActive: res.service!.isActive,
            },
          ]);
          setIsModalOpen(false);
        }
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Department Tabs Bar */}
      <div className="bg-white p-3 sm:p-4 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {departments.map((dept) => (
            <button
              key={dept.slug}
              onClick={() => setSelectedDept(dept.slug)}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedDept === dept.slug
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((service) => (
          <div
            key={service.id}
            className={`p-5 rounded-3xl border bg-white shadow-xs flex flex-col justify-between space-y-4 transition-all hover:shadow-md ${
              service.isActive ? 'border-slate-200/90' : 'border-slate-200 bg-slate-50/50 opacity-75'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-slate-400 truncate max-w-[150px]">
                  /{service.slug}
                </span>

                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase border ${
                    service.isActive
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-slate-100 text-slate-500 border-slate-200'
                  }`}
                >
                  {service.isActive ? 'Active' : 'Hidden'}
                </span>
              </div>

              <h3 className="font-bold text-base text-slate-900 leading-snug">{service.name}</h3>
              <p className="text-xs font-semibold text-emerald-700">{service.tagline}</p>
              <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Price Display
                </span>
                <span className="font-black text-slate-900">{service.priceDisplay}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleToggleActive(service.id)}
                  disabled={isPending}
                  className={`p-2 rounded-xl border text-xs font-semibold transition-colors ${
                    service.isActive
                      ? 'border-slate-200 text-slate-600 hover:bg-slate-100'
                      : 'border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                  }`}
                  title={service.isActive ? 'Hide from public site' : 'Show on public site'}
                >
                  {service.isActive ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenEdit(service)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  title="Edit service details"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create / Edit Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-lg font-black text-slate-900">
                {editingService ? 'Edit Service' : 'Add New Service'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-4 text-xs font-medium text-slate-700">
              {!editingService && (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Department
                  </label>
                  <select
                    name="departmentSlug"
                    defaultValue={selectedDept}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {departments.map((d) => (
                      <option key={d.slug} value={d.slug}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Service Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  defaultValue={editingService?.name || ''}
                  placeholder="e.g., GST Registration & Filing"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Tagline / Benefit
                </label>
                <input
                  name="tagline"
                  type="text"
                  required
                  defaultValue={editingService?.tagline || ''}
                  placeholder="e.g., Fast, reliable compliance setup."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Price Display Label
                </label>
                <input
                  name="priceDisplay"
                  type="text"
                  required
                  defaultValue={editingService?.priceDisplay || 'Starting from ₹1,499'}
                  placeholder="e.g., Starting from ₹1,499 or Request Quote"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Starting Price (INR)
                  </label>
                  <input
                    name="startingPrice"
                    type="number"
                    defaultValue={editingService?.startingPrice || ''}
                    placeholder="1499"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-2 pt-6">
                  <input
                    id="isStartingPriceEstimate"
                    name="isStartingPriceEstimate"
                    type="checkbox"
                    value="true"
                    defaultChecked={editingService?.isStartingPriceEstimate || false}
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="isStartingPriceEstimate" className="text-xs font-bold text-slate-700">
                    Estimate only
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  defaultValue={editingService?.description || ''}
                  placeholder="Describe what the service provides and problem solved..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isPending ? 'Saving...' : editingService ? 'Update Service' : 'Create Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

