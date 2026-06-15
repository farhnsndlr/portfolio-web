"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectGalleryProps = {
  screenshots: string[];
  title: string;
};

export default function ProjectGallery({ screenshots, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasMultiple = screenshots.length > 1;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const handlePrev = () => setActiveIndex((current) => (current === 0 ? screenshots.length - 1 : current - 1));
  const handleNext = () => setActiveIndex((current) => (current === screenshots.length - 1 ? 0 : current + 1));

  return (
    <div className="grid gap-6">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/20 p-1 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.65)]">
        <button
          type="button"
          onClick={() => openLightbox(activeIndex)}
          className="group relative block h-full w-full overflow-hidden rounded-[1.75rem] bg-slate-950"
          aria-label={`Open ${title} preview ${activeIndex + 1}`}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {screenshots.map((img, index) => (
              <img
                key={img}
                src={img}
                alt={`${title} screenshot ${index + 1}`}
                className="min-w-full h-105 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ))}
          </div>
        </button>

        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/90 transition hover:bg-black/70"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/90 transition hover:bg-black/70"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute left-4 bottom-4 rounded-full bg-background/90 px-3 py-1 text-xs uppercase tracking-[0.3em] text-foreground/70 shadow-sm">
          {activeIndex + 1} / {screenshots.length}
        </div>
      </div>

      {hasMultiple && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-foreground/10 bg-foreground/5 p-4 text-sm text-foreground/70">
          <span className="font-medium text-foreground">
            {activeIndex + 1}/{screenshots.length} images in gallery
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/40">
            Click the preview to view in fullscreen.
          </span>
        </div>
      )}

      {lightboxOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeLightbox}
          />
          <div
            className="fixed inset-x-4 top-1/2 z-50 mx-auto flex max-h-[90vh] max-w-[95vw] -translate-y-1/2 items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] transition-all duration-300 ease-out">
              <div className="relative aspect-16/10 bg-slate-950/95">
                <img
                  src={screenshots[activeIndex]}
                  alt={`${title} screenshot ${activeIndex + 1}`}
                  className="h-full w-full object-contain"
                />

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="absolute right-4 top-4 z-10 inline-flex items-center justify-center rounded-full border border-white/20 bg-black/60 px-3 py-2 text-sm text-white/90 transition hover:bg-black/80"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-white/90 transition hover:bg-black/80"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-3 text-white/90 transition hover:bg-black/80"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-foreground/60">
                <span>
                  Image {activeIndex + 1} of {screenshots.length}
                </span>
                <span className="hidden sm:inline">Click arrows or tap preview to navigate.</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
