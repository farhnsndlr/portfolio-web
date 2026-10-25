"use client";

import { FileDown, Code2, Database, Layers, CheckCircle2, Globe, Shield } from "lucide-react";

export default function ModernAbout() {
  return (
    <section id="about" className="py-28 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-white/8 pb-6 font-mono text-xs">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2D5BFF]" />
              <span className="text-[#8A8D98] uppercase tracking-wider">[03] IDENTITY &amp; PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F5F7]">
              ARCHITECTURAL <span className="text-[#2D5BFF]">FOUNDATION</span>
            </h2>
          </div>

          <div className="text-[#8A8D98]">
            SYSTEM INFORMATION // WEB ARCHITECTURE
          </div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Portrait & Credentials Frame (5 Cols) */}
          <div className="lg:col-span-5 editorial-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header metadata */}
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/5 font-mono text-xs">
                <span className="text-[#2D5BFF] font-medium">PROFILE DOSSIER</span>
                <span className="text-[#8A8D98]">AUTHENTIC RECORD</span>
              </div>

              {/* Portrait Frame */}
              <div className="relative w-full aspect-square max-w-[300px] mx-auto rounded-2xl overflow-hidden bg-[#0A0B0D] border border-white/10 mb-6">
                <img
                  src="/avatar.png"
                  alt="Farhan Sultan Nadlir"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F5F5F7]">
                  FARHAN SULTAN NADLIR
                </div>
              </div>

              {/* Structured Metadata Readout */}
              <div className="space-y-3 font-mono text-xs border-t border-white/5 pt-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#8A8D98]">DEGREE:</span>
                  <span className="text-[#F5F5F7] font-medium">System Information</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#8A8D98]">DISCIPLINE:</span>
                  <span className="text-[#F5F5F7] font-medium">Full-Stack Web Architect</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#8A8D98]">LOCATION:</span>
                  <span className="text-[#2D5BFF] font-medium">Indonesia (UTC+7 / WIB)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-xs text-[#8A8D98]">
              <span>STATUS: AVAILABLE</span>
              <span className="text-[#2D5BFF]">VERIFIED 2026</span>
            </div>
          </div>

          {/* Right Column: Editorial Biography & Competency Pods (7 Cols) */}
          <div className="lg:col-span-7 editorial-card rounded-3xl p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#2D5BFF] mb-6">
                ARCHITECTURAL STATEMENT
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#F5F5F7]">
                <p className="font-semibold text-xl sm:text-2xl text-white leading-snug">
                  I&apos;m <span className="text-[#2D5BFF]">Farhan Sultan Nadlir</span>, a System Information student passionate about building modern and scalable digital solutions. I focus on clean architecture, performance optimization, and structured system design.
                </p>

                <p className="text-[#8A8D98] text-sm sm:text-base font-normal">
                  With a strong background in system analysis and development, I enjoy transforming ideas into reliable applications that balance usability and technical precision.
                </p>
              </div>

              {/* Structured Competency Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 pt-6 border-t border-white/5">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 text-[#2D5BFF] text-xs font-mono font-medium mb-1.5">
                    <Code2 size={16} />
                    <span>FRONTEND</span>
                  </div>
                  <p className="text-xs text-[#8A8D98] leading-relaxed">
                    Next.js 16, React 19, TypeScript, Tailwind CSS
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 text-[#2D5BFF] text-xs font-mono font-medium mb-1.5">
                    <Database size={16} />
                    <span>BACKEND</span>
                  </div>
                  <p className="text-xs text-[#8A8D98] leading-relaxed">
                    Laravel, PHP, MySQL, REST APIs
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 text-[#2D5BFF] text-xs font-mono font-medium mb-1.5">
                    <Layers size={16} />
                    <span>SYSTEMS</span>
                  </div>
                  <p className="text-xs text-[#8A8D98] leading-relaxed">
                    Clean Architecture, Geofencing, DB Modeling
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Resume Download Button */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-4">
              <a
                href="/CV_Farhan_Sultan_Nadlir.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-primary flex items-center gap-2 text-xs"
              >
                <FileDown size={14} />
                <span>DOWNLOAD CURRICULUM VITAE (PDF)</span>
              </a>

              <div className="flex items-center gap-1.5 font-mono text-xs text-[#8A8D98]">
                <CheckCircle2 size={14} className="text-[#2D5BFF]" />
                <span>OFFICIAL VERIFIED ASSET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
