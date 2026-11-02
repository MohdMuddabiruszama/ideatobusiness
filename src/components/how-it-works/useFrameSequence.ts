'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { HOW_IT_WORKS_STORY_PHASES, StoryPhase } from '@/data/howItWorksPhases';

interface FrameCacheEntry {
  img: HTMLImageElement;
  loaded: boolean;
}

export function useFrameSequence(activePhaseIndex: number) {
  // Master cache mapping frame URL to FrameCacheEntry
  const cacheRef = useRef<Map<string, FrameCacheEntry>>(new Map());
  // Track loaded frame indices per phase for fast nearest-frame fallback
  const loadedIndicesRef = useRef<Set<number>[]>(
    HOW_IT_WORKS_STORY_PHASES.map(() => new Set<number>())
  );
  // Whether the first phase is ready enough to display smoothly
  const [isInitialReady, setIsInitialReady] = useState(false);
  // Overall load percentage for the active phase (0 - 100)
  const [activePhaseProgress, setActivePhaseProgress] = useState(0);

  // Helper to load a single frame
  const loadSingleFrame = useCallback((phaseIdx: number, frameIdx: number, priority: boolean = false): Promise<HTMLImageElement | null> => {
    const phase = HOW_IT_WORKS_STORY_PHASES[phaseIdx];
    if (!phase) return Promise.resolve(null);
    const url = phase.frames[frameIdx];
    if (!url) return Promise.resolve(null);

    const existing = cacheRef.current.get(url);
    if (existing) {
      if (existing.loaded) return Promise.resolve(existing.img);
      return Promise.resolve(null);
    }

    const img = new Image();
    img.decoding = priority ? 'sync' : 'async';
    const entry: FrameCacheEntry = { img, loaded: false };
    cacheRef.current.set(url, entry);

    return new Promise((resolve) => {
      img.onload = () => {
        entry.loaded = true;
        loadedIndicesRef.current[phaseIdx]?.add(frameIdx);

        // Decode in background thread if supported
        if ('decode' in img) {
          img.decode().catch(() => {}).finally(() => resolve(img));
        } else {
          resolve(img);
        }
      };
      img.onerror = () => {
        // Fallback gracefully on error
        resolve(null);
      };
      img.src = url;
    });
  }, []);

  // Priority batch loading for a phase
  const loadPhaseFrames = useCallback(async (phaseIdx: number, onProgress?: (loaded: number, total: number) => void) => {
    const phase = HOW_IT_WORKS_STORY_PHASES[phaseIdx];
    if (!phase) return;

    const total = phase.frames.length;
    let loadedCount = 0;

    // Phase 1: Load first 10 frames with high priority for instant responsiveness
    const initialBatch = Math.min(15, total);
    const initialPromises = [];
    for (let i = 0; i < initialBatch; i++) {
      initialPromises.push(loadSingleFrame(phaseIdx, i, true));
    }
    await Promise.all(initialPromises);
    loadedCount += initialBatch;
    onProgress?.(loadedCount, total);

    // Phase 2: Load the rest with controlled concurrency (chunks of 8)
    const chunkSize = 8;
    for (let i = initialBatch; i < total; i += chunkSize) {
      const chunk = [];
      for (let j = i; j < Math.min(i + chunkSize, total); j++) {
        chunk.push(loadSingleFrame(phaseIdx, j, false));
      }
      await Promise.all(chunk);
      loadedCount = Math.min(i + chunkSize, total);
      onProgress?.(loadedCount, total);
    }
  }, [loadSingleFrame]);

  // Initial load: Preload Phase 01 immediately on mount
  useEffect(() => {
    let isMounted = true;

    async function init() {
      // Step 1: Load first 10 frames of Phase 01 for instant paint
      await Promise.all([
        loadSingleFrame(0, 0, true),
        loadSingleFrame(0, 1, true),
        loadSingleFrame(0, 2, true),
        loadSingleFrame(0, 3, true),
        loadSingleFrame(0, 4, true),
        loadSingleFrame(0, 5, true),
      ]);

      if (isMounted) {
        setIsInitialReady(true);
      }

      // Step 2: Finish loading remainder of Phase 01
      loadPhaseFrames(0, (loaded, total) => {
        if (isMounted && activePhaseIndex === 0) {
          setActivePhaseProgress(Math.round((loaded / total) * 100));
        }
      }).then(() => {
        // Step 3: Once Phase 1 is done, eagerly preload Phase 2
        if (isMounted) {
          loadPhaseFrames(1);
        }
      });
    }

    init();

    return () => {
      isMounted = false;
    };
  }, [loadSingleFrame, loadPhaseFrames, activePhaseIndex]);

  // Dynamic window preloading: Keep current, next, and previous phases loaded
  useEffect(() => {
    // Current phase
    loadPhaseFrames(activePhaseIndex, (loaded, total) => {
      setActivePhaseProgress(Math.round((loaded / total) * 100));
    });

    // Lookahead: Preload next phase
    if (activePhaseIndex + 1 < HOW_IT_WORKS_STORY_PHASES.length) {
      loadPhaseFrames(activePhaseIndex + 1);
    }

    // Lookbehind: Ensure previous phase stays warm
    if (activePhaseIndex - 1 >= 0) {
      loadPhaseFrames(activePhaseIndex - 1);
    }
  }, [activePhaseIndex, loadPhaseFrames]);

  // Instant frame retrieval with intelligent fallback
  const getFrame = useCallback((phaseIdx: number, frameIdx: number): HTMLImageElement | null => {
    const phase = HOW_IT_WORKS_STORY_PHASES[phaseIdx];
    if (!phase) return null;

    const clampedIdx = Math.max(0, Math.min(phase.frameCount - 1, frameIdx));
    const url = phase.frames[clampedIdx];
    const entry = cacheRef.current.get(url);

    if (entry && entry.loaded) {
      return entry.img;
    }

    // Fallback: Find nearest loaded frame within this phase
    const loadedSet = loadedIndicesRef.current[phaseIdx];
    if (loadedSet && loadedSet.size > 0) {
      let closest = -1;
      let minDiff = Infinity;
      loadedSet.forEach((idx) => {
        const diff = Math.abs(idx - clampedIdx);
        if (diff < minDiff) {
          minDiff = diff;
          closest = idx;
        }
      });
      if (closest !== -1) {
        const fallbackUrl = phase.frames[closest];
        const fallbackEntry = cacheRef.current.get(fallbackUrl);
        if (fallbackEntry && fallbackEntry.loaded) {
          return fallbackEntry.img;
        }
      }
    }

    // Secondary fallback: First frame of this phase if available
    const firstUrl = phase.frames[0];
    const firstEntry = cacheRef.current.get(firstUrl);
    if (firstEntry && firstEntry.loaded) {
      return firstEntry.img;
    }

    return null;
  }, []);

  return {
    getFrame,
    isInitialReady,
    activePhaseProgress,
  };
}

