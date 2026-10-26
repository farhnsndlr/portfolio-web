"use client";

import {
  ArrowDownRight,
  Send,
  FileDown,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Radio,
  Terminal,
  Activity,
} from "lucide-react";

export default function ChaosHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="signal" className="relative min-h-[92vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-28 pb-16 overflow-hidden bg-dither-pattern font-mono">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Signal Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-[#262626] text-xs">
          <div className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#C8FF00] animate-pulse" />
            <span className="text-[#C8FF00] font-black">BROADCAST_SIGNAL // 100% PURITY</span>
            <span className="text-[#7E7E7E] hidden sm:inline">•</span>
            <span className="text-[#38E8FF] hidden sm:inline">LATENCY: 0.4MS</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#7E7E7E]">
            <span>INDONESIA [UTC+7]</span>
            <span className="text-[#FF3DCE] font-bold">STATUS: RUNTIME_ACTIVE</span>
          </div>
        </div>

        {/* Hero Anti-Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Monolith (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="px-2.5 py-1 bg-[#141414] border border-[#C8FF00] text-[11px] font-black text-[#C8FF00] uppercase tracking-wider mb-4 shadow-chaos-magenta">
              SYSTEM INFORMATION STUDENT &amp; FULL-STACK ARCHITECT
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black uppercase tracking-tight text-[#F4F1E8] leading-[0.88] select-none">
              FARHAN
              <br />
              SULTAN
              <br />
              <span className="text-[#C8FF00] glitch-hover inline-block">
                NADLIR.
              </span>
            </h1>

            <div className="mt-6 p-4 border-l-4 border-[#FF3DCE] bg-[#141414]/80 max-w-xl">
              <p className="font-sans text-sm sm:text-base text-[#D4D1C8] font-medium leading-relaxed">
                I engineer modern, scalable web architectures with a focus on clean systems, database precision, and performance optimization. Blending heavy-motion digital interfaces with rock-solid backend logic.
              </p>
            </div>

            {/* Kinetic Action Triggers */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <button
                onClick={() => scrollTo("artifacts")}
                className="btn-chaos-lime flex items-center gap-2"
              >
                <span>DISSECT ARTIFACTS</span>
                <ArrowDownRight size={16} />
              </button>

              <button
                onClick={() => scrollTo("transmit")}
                className="btn-chaos-magenta flex items-center gap-2"
              >
                <span>TRANSMIT SIGNAL</span>
                <Send size={14} />
              </button>

              <a
                href="/CV_Farhan_Sultan_Nadlir.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-[#141414] text-[#F4F1E8] border border-[#38E8FF] hover:bg-[#38E8FF] hover:text-[#0A0A0A] font-bold text-xs transition-colors shadow-chaos-cyan flex items-center gap-2"
              >
                <FileDown size={14} />
                <span>RESUME (PDF)</span>
              </a>
            </div>

            {/* Comm Channels Bar */}
            <div className="flex items-center gap-2.5 pt-6 mt-2">
              <span className="text-[11px] text-[#7E7E7E] font-bold mr-1">
                RADAR_COMM:
              </span>
              {[
                {
                  icon: MessageCircle,
                  href: "https://wa.me/6281574029222",
                  label: "WhatsApp",
                  accent: "border-[#C8FF00] text-[#C8FF00] hover:bg-[#C8FF00] hover:text-[#0A0A0A]",
                },
                {
                  icon: Github,
                  href: "https://github.com/farhnsndlr",
                  label: "GitHub",
                  accent: "border-[#262626] text-[#F4F1E8] hover:border-[#FF3DCE] hover:text-[#FF3DCE]",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/farhansultan",
                  label: "LinkedIn",
                  accent: "border-[#262626] text-[#F4F1E8] hover:border-[#38E8FF] hover:text-[#38E8FF]",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/farhnsndlr",
                  label: "Instagram",
                  accent: "border-[#262626] text-[#F4F1E8] hover:border-[#FF3DCE] hover:text-[#FF3DCE]",
                },
              ].map(({ icon: Icon, href, label, accent }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className={`w-9 h-9 border bg-[#141414] flex items-center justify-center transition-colors shadow-sm ${accent}`}
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Speculative Telemetry Card (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Live Terminal Spec Box */}
            <div className="border-2 border-[#C8FF00] bg-[#141414] p-5 shadow-chaos-magenta relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#262626]">
                <div className="flex items-center gap-2 text-xs font-black text-[#C8FF00]">
                  <Terminal size={14} />
                  <span>CORE_TELEMETRY</span>
                </div>
                <Activity size={14} className="text-[#38E8FF] animate-pulse" />
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#7E7E7E]">DEGREE:</span>
                  <span className="text-[#F4F1E8] font-bold">System Information</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E7E7E]">FOUNDATION:</span>
                  <span className="text-[#C8FF00] font-bold">Next.js 16 + React 19</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E7E7E]">BACKEND:</span>
                  <span className="text-[#38E8FF] font-bold">Laravel + MySQL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E7E7E]">ARCHITECTURE:</span>
                  <span className="text-[#FF3DCE] font-bold">Clean &amp; Modular</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E7E7E]">RENDER COST:</span>
                  <span className="text-[#C8FF00] font-bold">0% Idle CPU</span>
                </div>
              </div>
            </div>

            {/* Custom SVG Pixel Dither Fragment Artifact */}
            <div className="border border-[#262626] bg-[#0E0E0E] p-3 overflow-hidden select-none">
              <div className="flex justify-between items-center text-[10px] text-[#7E7E7E] mb-2 font-mono">
                <span>FRAGMENT_ID: #09872</span>
                <span className="text-[#38E8FF]">DITHER_MATRIX</span>
              </div>
              <svg viewBox="0 0 160 80" className="w-full h-auto block" shapeRendering="crispEdges">
                <rect x="0" y="0" width="160" height="80" fill="#141414" />
                {/* Dither pattern grid */}
                <rect x="10" y="10" width="30" height="60" fill="#0A0A0A" />
                <rect x="45" y="10" width="70" height="60" fill="#1A1A1A" />
                <rect x="120" y="10" width="30" height="60" fill="#0A0A0A" />
                {/* Neon Glitch Strips */}
                <rect x="25" y="25" width="50" height="4" fill="#C8FF00" />
                <rect x="40" y="35" width="80" height="4" fill="#FF3DCE" />
                <rect x="70" y="45" width="60" height="4" fill="#38E8FF" />
                <rect x="20" y="55" width="40" height="4" fill="#C8FF00" />
                {/* Matrix crossbars */}
                <rect x="78" y="15" width="4" height="50" fill="#F4F1E8" />
              </svg>
            </div>
          </div>
        </div>

        {/* High-Speed Pixel Chaos Ticker */}
        <div className="mt-14 w-full overflow-hidden border-y-2 border-[#262626] bg-[#141414] py-2 text-xs font-black select-none">
          <div className="chaos-ticker-track">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center whitespace-nowrap gap-6 text-[#C8FF00]">
                <span>★ FARHAN SULTAN NADLIR</span>
                <span className="text-[#FF3DCE]">✦ FULL-STACK WEB ARCHITECT</span>
                <span className="text-[#38E8FF]">✦ SYSTEM INFORMATION</span>
                <span className="text-[#F4F1E8]">✦ NEXT.JS 16 &amp; REACT 19</span>
                <span className="text-[#C8FF00]">✦ LARAVEL &amp; MYSQL MONOLITHS</span>
                <span className="text-[#FF3DCE]">✦ 0% IDLE CPU OVERHEAD</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
