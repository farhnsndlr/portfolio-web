"use client";
import { useRef, useCallback } from "react";

export default function HoloCard({
  avatarUrl = "/avatar.png",
  name = "Farhan Sultan Nadlir",
  title = "Web Developer",
}: {
  avatarUrl?: string;
  name?: string;
  title?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const cx = px - 0.5;
    const cy = py - 0.5;

    card.style.transition = "transform 0.08s ease";
    card.style.transform = `perspective(900px) rotateX(${cy * -18}deg) rotateY(${cx * 18}deg) scale3d(1.02, 1.02, 1.02)`;

    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255, 229, 0, 0.25) 0%, transparent 60%)`;
      glareRef.current.style.opacity = "1";
    }

    if (shineRef.current) {
      const angle = Math.atan2(cy, cx) * (180 / Math.PI);
      const dist = Math.hypot(cx, cy);
      shineRef.current.style.background = `
        repeating-linear-gradient(
          ${angle + 90}deg,
          rgba(255,255,255,0.1) 0%,
          rgba(255,255,255,0.02) 8%,
          rgba(255,229,0,0.12) 16%,
          transparent 24%
        )
      `;
      shineRef.current.style.opacity = `${dist * 0.9}`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    if (glareRef.current) glareRef.current.style.opacity = "0";
    if (shineRef.current) shineRef.current.style.opacity = "0";
  }, []);

  return (
    <div
      className="w-full max-w-[310px] h-[430px] select-none"
      style={{ perspective: "900px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full border-[3px] border-[#171717] dark:border-[#FFE500] bg-white dark:bg-[#1A1A1A] shadow-brutal-xl overflow-hidden cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
<<<<<<< HEAD
        {/* Avatar */}
        <img
          src={avatarUrl}
          alt={name}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="absolute left-0 right-0 w-full object-cover object-top pointer-events-none"
          style={{
            top: "88px",
            bottom: "72px",
            height: "calc(100% - 88px - 72px)",
            filter: "grayscale(100%) contrast(1.1) brightness(0.85)",
          }}
        />

        {/* Icon pattern background — subtle */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Top — nama & title */}
        <div className="absolute top-0 left-0 right-0 p-6 text-center">
          <h3 className="text-white/90 font-semibold text-xl leading-tight tracking-wide">
            {name}
          </h3>
          <p className="text-white/40 text-sm mt-1.5 tracking-[0.2em] uppercase">
            {title}
          </p>
=======
        {/* Top Header Badge */}
        <div className="flex items-center justify-between px-3.5 py-2 bg-[#FFE500] text-[#171717] border-b-2 border-[#171717] font-mono text-xs font-black uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#171717]" />
            <span>ID.CARD // DEV-01</span>
          </div>
          <span className="text-[10px] font-bold">2026 // OK</span>
>>>>>>> develop
        </div>

        {/* Card Body */}
        <div className="p-4 flex flex-col items-center">
          {/* Avatar Photo Frame */}
          <div className="relative w-36 h-44 border-2 border-[#171717] dark:border-[#FFE500] bg-[#E5DDCB] dark:bg-[#252525] shadow-brutal-sm overflow-hidden mb-3">
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover object-top filter grayscale contrast-110"
            />
            {/* Holographic Watermark Stamp */}
            <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-[#FFE500] text-[#171717] font-mono text-[9px] font-black border border-[#171717]">
              VERIFIED
            </div>
          </div>

          {/* Identity Info */}
          <div className="w-full text-center">
            <h3 className="font-mono text-base font-black text-[#171717] dark:text-white uppercase leading-tight tracking-wide">
              {name}
            </h3>
            <p className="font-mono text-xs font-bold text-[#171717]/70 dark:text-[#FFE500] mt-0.5 uppercase tracking-wider">
              {title}
            </p>
          </div>

          {/* Metadata Specs Box */}
          <div className="w-full mt-3 p-2 bg-[#F5F0E6] dark:bg-[#141414] border border-[#171717] dark:border-[#333333] font-mono text-[10px] text-[#171717]/80 dark:text-gray-300 flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="font-bold opacity-60">SPEC:</span>
              <span className="font-black text-[#171717] dark:text-white">SYSTEM INFORMATION</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold opacity-60">LOC:</span>
              <span className="font-black text-[#171717] dark:text-white">INDONESIA [UTC+7]</span>
            </div>
          </div>

          {/* Barcode Graphics at Bottom */}
          <div className="w-full mt-3 pt-2 border-t border-dashed border-[#171717]/30 dark:border-gray-700 flex flex-col items-center gap-1 font-mono text-[9px] text-[#171717]/50 dark:text-gray-500">
            <div className="font-barcode tracking-[0.2em] text-xs font-bold select-none text-[#171717] dark:text-gray-400">
              ||| | |||| | ||| |||| | || | |||
            </div>
            <span>SN: 9872-FSN-PORTFOLIO-V2</span>
          </div>
        </div>

        {/* Shine & Glare Overlays */}
        <div
          ref={shineRef}
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0, mixBlendMode: "overlay" }}
        />
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0 }}
        />
      </div>
    </div>
  );
}
