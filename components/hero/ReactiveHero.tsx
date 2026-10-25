"use client";

import { Terminal, Network, Search, FileText, Github, Linkedin, Instagram, ArrowDownRight } from "lucide-react";

export default function ReactiveHero() {
  const triggerPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Technical Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-8 border-b border-[#262D28] font-mono text-xs text-[#777D76]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#B8FF3B] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#B8FF3B] animate-pulse" />
              DIGITAL_IDENTITY::RUNTIME_V2
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">FARHAN SULTAN NADLIR</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>INDONESIA [UTC+7]</span>
            <span className="text-[#B8FF3B] hidden md:inline">SYSTEM: LATENCY 0.8MS</span>
          </div>
        </div>

        {/* Hero Editorial Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Giant Typographic Monolith (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="inline-block px-2.5 py-1 bg-[#181C1A] border border-[#262D28] font-mono text-xs text-[#B8FF3B] font-bold mb-4">
              [ROLE: FULL-STACK WEB ARCHITECT &amp; SYSTEM ANALYST]
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-black uppercase tracking-tight text-[#F3F4EF] leading-[0.88] select-none">
              FARHAN
              <br />
              SULTAN
              <br />
              <span className="text-[#B8FF3B] inline-block hover:skew-x-2 transition-transform cursor-default">
                NADLIR.
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-[#777D76] max-w-xl font-medium leading-relaxed">
              System Information student engineering scalable digital solutions with clean architecture, database modeling, and fluid, high-performance web applications.
            </p>

            {/* Interactive Primary Action Trigger Cluster */}
            <div className="flex flex-wrap items-center gap-3 pt-6 mt-2">
              <button
                onClick={() => scrollToSection("constellation")}
                className="btn-laser flex items-center gap-2"
              >
                <span>PROJECT CONSTELLATION</span>
                <Network size={14} />
              </button>

              <button
                onClick={() => scrollToSection("terminal")}
                className="btn-ghost-laser flex items-center gap-2"
              >
                <Terminal size={14} className="text-[#B8FF3B]" />
                <span>TERMINAL $_</span>
              </button>

              <button
                onClick={triggerPalette}
                className="btn-ghost-laser hidden sm:flex items-center gap-2"
              >
                <Search size={14} className="text-[#B8FF3B]" />
                <span>SEARCH (⌘K)</span>
              </button>

              <a
                href="/CV_Farhan_Sultan_Nadlir.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-laser flex items-center gap-2 text-xs"
              >
                <FileText size={14} />
                <span>RESUME (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Spec Sheet & Identity Card (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Live System Spec HUD */}
            <div className="p-5 border border-[#262D28] bg-[#181C1A] font-mono text-xs relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#262D28]">
                <span className="text-[#B8FF3B] font-bold">SYSTEM_SPECS</span>
                <span className="text-[#777D76]">STATUS: ONLINE</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-[#777D76]">FOUNDATION:</span>
                  <span className="text-[#F3F4EF] font-bold">Next.js 16 + React 19</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777D76]">BACKEND STACK:</span>
                  <span className="text-[#F3F4EF] font-bold">Laravel + MySQL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777D76]">SYSTEM FOCUS:</span>
                  <span className="text-[#F3F4EF] font-bold">Clean Architecture</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777D76]">MOTION RENDER:</span>
                  <span className="text-[#B8FF3B] font-bold">Zero-Lag Vector</span>
                </div>
              </div>
            </div>

            {/* Connected Channels Grid */}
            <div className="p-4 border border-[#262D28] bg-[#141816] flex items-center justify-between">
              <span className="font-mono text-xs text-[#777D76] font-bold">
                COMM_CHANNELS:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/farhnsndlr/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-[#262D28] text-[#F3F4EF] hover:border-[#B8FF3B] hover:text-[#B8FF3B] transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={15} />
                </a>
                <a
                  href="https://linkedin.com/in/farhansultan/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-[#262D28] text-[#F3F4EF] hover:border-[#B8FF3B] hover:text-[#B8FF3B] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://instagram.com/farhnsndlr/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-[#262D28] text-[#F3F4EF] hover:border-[#B8FF3B] hover:text-[#B8FF3B] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
              </div>
            </div>

            {/* Fast Jump Cue */}
            <div
              onClick={() => scrollToSection("constellation")}
              className="p-3 border border-[#262D28] bg-[#181C1A] hover:border-[#B8FF3B] transition-colors cursor-pointer flex items-center justify-between font-mono text-xs group"
            >
              <span className="text-[#777D76] group-hover:text-[#F3F4EF]">
                JUMP TO ARCHITECTURE
              </span>
              <ArrowDownRight size={16} className="text-[#B8FF3B] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
