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
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const cx = px - 0.5;
    const cy = py - 0.5;

    card.style.transition = "transform 0.08s ease";
    card.style.transform = `perspective(900px) rotateX(${cy * -20}deg) rotateY(${cx * 20}deg) scale3d(1.02,1.02,1.02)`;

    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
      glareRef.current.style.opacity = "1";
    }

    if (shineRef.current) {
      const angle = Math.atan2(cy, cx) * (180 / Math.PI);
      const dist = Math.hypot(cx, cy);
      shineRef.current.style.background = `
        repeating-linear-gradient(
          ${angle + 90}deg,
          rgba(255,255,255,0.06) 0%,
          rgba(255,255,255,0.03) 8%,
          rgba(255,255,255,0.06) 16%,
          transparent 24%
        )
      `;
      shineRef.current.style.opacity = `${dist * 0.8}`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    if (glareRef.current) glareRef.current.style.opacity = "0";
    if (shineRef.current) shineRef.current.style.opacity = "0";
  }, []);

  return (
    <div className="w-[270px] h-[370px]" style={{ perspective: "900px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer select-none"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
          background: "linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)",
          boxShadow:
            "0 30px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* Avatar */}
        <img
          src={avatarUrl}
          alt={name}
          className="absolute left-0 right-0 w-full object-cover object-top"
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
        </div>

        {/* Bottom subtle divider info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="h-[1px] bg-white/8 mb-4" />
          <div className="flex justify-between items-center">
            <span className="text-white/25 text-xs tracking-widest uppercase">
              Portfolio
            </span>
            <span className="text-white/25 text-xs tracking-widest">2026</span>
          </div>
        </div>

        {/* Shine layer */}
        <div
          ref={shineRef}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ opacity: 0, mixBlendMode: "overlay" }}
        />

        {/* Glare layer */}
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ opacity: 0 }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            opacity: 0.035,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "150px",
          }}
        />

        {/* Border */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" }}
        />
      </div>
    </div>
  );
}
