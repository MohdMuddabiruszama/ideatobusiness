'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Loader2 } from 'lucide-react';

interface FrameSequenceCanvasProps {
  phaseIndex: number;
  frameIndex: number;
  getFrame: (phaseIdx: number, frameIdx: number) => HTMLImageElement | null;
  isInitialReady: boolean;
  className?: string;
}

export function FrameSequenceCanvas({
  phaseIndex,
  frameIndex,
  getFrame,
  isInitialReady,
  className = '',
}: FrameSequenceCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastDrawnImageRef = useRef<HTMLImageElement | null>(null);
  const rafIdRef = useRef<number | null>(null);

  // Track container dimensions
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 600,
    height: 700,
  });

  // Observe container size changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setDimensions({
            width: Math.floor(width),
            height: Math.floor(height),
          });
        }
      }
    });

    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  // Draw current frame onto canvas
  const drawCurrentFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const { width, height } = dimensions;
    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);

    // Ensure physical canvas resolution matches DPR
    const targetPhysicalWidth = Math.floor(width * dpr);
    const targetPhysicalHeight = Math.floor(height * dpr);

    if (canvas.width !== targetPhysicalWidth || canvas.height !== targetPhysicalHeight) {
      canvas.width = targetPhysicalWidth;
      canvas.height = targetPhysicalHeight;
    }

    // Attempt to get the target frame
    const img = getFrame(phaseIndex, frameIndex) || lastDrawnImageRef.current;

    ctx.save();
    ctx.scale(dpr, dpr);

    // Clean white background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);

    if (img && img.naturalWidth > 0 && img.naturalHeight > 0) {
      lastDrawnImageRef.current = img;

      // Fit with aspect ratio preservation (object-fit: contain)
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const containerAspect = width / height;

      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (containerAspect > imgAspect) {
        // Container is wider than character portrait: fit to container height
        drawHeight = height;
        drawWidth = height * imgAspect;
        offsetX = (width - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Container is narrower: fit to container width
        drawWidth = width;
        drawHeight = width / imgAspect;
        offsetX = 0;
        offsetY = (height - drawHeight) / 2;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }

    ctx.restore();
  }, [dimensions, getFrame, phaseIndex, frameIndex]);

  // Request redraw whenever inputs change
  useEffect(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }
    rafIdRef.current = requestAnimationFrame(() => {
      drawCurrentFrame();
    });

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [drawCurrentFrame]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center bg-white rounded-3xl overflow-hidden select-none ${className}`}
    >
      {/* HTML5 High-Performance Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none drop-shadow-sm"
        style={{
          width: '100%',
          height: '100%',
        }}
        aria-label={`Interactive character animation phase ${phaseIndex + 1}`}
      />

      {/* Loading overlay if not ready */}
      {!isInitialReady && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm transition-opacity duration-300">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 shadow-inner mb-4">
            <Loader2 className="w-8 h-8 animate-spin text-brand-600" />
          </div>
          <p className="text-sm font-bold text-slate-800 tracking-wide">
            Loading Interactive Story...
          </p>
          <p className="text-xs text-slate-500 mt-1">Preparing high-definition character sequence</p>
        </div>
      )}
    </div>
  );
}

