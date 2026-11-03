'use client';

import React, { useState, useEffect, useCallback, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw, Radio, CheckCircle, Clock } from 'lucide-react';

interface AdminLiveBarProps {
  isOfflineMode?: boolean;
}

export function AdminLiveBar({ isOfflineMode = false }: AdminLiveBarProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const [timeAgo, setTimeAgo] = useState('just now');

  const handleRefresh = useCallback(() => {
    startTransition(() => {
      router.refresh();
      setLastRefreshed(new Date());
    });
  }, [router]);

  // Revalidate automatically when the tab becomes active or focused
  useEffect(() => {
    const onFocusOrVisible = () => {
      if (document.visibilityState === 'visible') {
        handleRefresh();
      }
    };

    window.addEventListener('focus', onFocusOrVisible);
    document.addEventListener('visibilitychange', onFocusOrVisible);

    // Light periodic polling every 25 seconds
    const interval = setInterval(() => {
      handleRefresh();
    }, 25000);

    return () => {
      window.removeEventListener('focus', onFocusOrVisible);
      document.removeEventListener('visibilitychange', onFocusOrVisible);
      clearInterval(interval);
    };
  }, [handleRefresh]);

  // Update relative time display
  useEffect(() => {
    const timer = setInterval(() => {
      const diffSec = Math.floor((Date.now() - lastRefreshed.getTime()) / 1000);
      if (diffSec < 5) setTimeAgo('just now');
      else if (diffSec < 60) setTimeAgo(`${diffSec}s ago`);
      else setTimeAgo(`${Math.floor(diffSec / 60)}m ago`);
    }, 5000);

    return () => clearInterval(timer);
  }, [lastRefreshed]);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs">
      <div className="flex items-center gap-2.5">
        {isOfflineMode ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold bg-amber-100 text-amber-800 border border-amber-200">
            <Radio className="w-3.5 h-3.5 animate-pulse text-amber-600" />
            <span>Local Backup Mode (Database Reconnecting)</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Live Pipeline Synchronized</span>
          </span>
        )}
        <span className="hidden sm:inline-flex items-center gap-1 text-slate-400 text-[11px]">
          <Clock className="w-3 h-3" />
          <span>Updated {timeAgo}</span>
        </span>
      </div>

      <button
        onClick={handleRefresh}
        disabled={isPending}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors disabled:opacity-50 cursor-pointer text-xs"
        title="Refresh data from PostgreSQL"
      >
        <RefreshCw className={`w-3.5 h-3.5 ${isPending ? 'animate-spin text-emerald-600' : ''}`} />
        <span>{isPending ? 'Updating...' : 'Refresh Pipeline'}</span>
      </button>
    </div>
  );
}
