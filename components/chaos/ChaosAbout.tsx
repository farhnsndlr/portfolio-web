"use client";

import { FileDown, Code2, Database, Layers, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";

export default function ChaosAbout() {
  return (
    <section id="identity" className="py-24 px-4 sm:px-8 md:px-14 relative font-mono">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12 border-b-2 border-[#262626] pb-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 bg-[#C8FF00] text-[#0A0A0A] font-black uppercase">
              [02 // IDENTITY_SPEC]
            </span>
            <span className="text-[#7E7E7E]">RECOMBINANT DOSSIER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#F4F1E8] tracking-tight">
            SYSTEM ANALYSIS &amp;
            <br />
            <span className="text-[#C8FF00]">DIGITAL ARCHITECTURE</span>
          </h2>
        </div>

        {/* Anti-Grid Asymmetrical Dossier Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Portrait & Identity Fragment (5 Cols) */}
          <div className="lg:col-span-5 border-2 border-[#262626] bg-[#141414] p-6 flex flex-col justify-between relative shadow-chaos-lime">
            <div>
              {/* Header Telemetry */}
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#262626] text-xs">
                <span className="text-[#C8FF00] font-black">ID::FARHAN_SULTAN</span>
                <span className="text-[#38E8FF]">SERIAL_09872</span>
              </div>

              {/* Fragment Avatar Box */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto border-2 border-[#C8FF00] bg-[#0A0A0A] overflow-hidden p-1 shadow-chaos-magenta">
                <img
                  src="/avatar.png"
                  alt="Farhan Sultan Nadlir"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#0A0A0A] text-[#C8FF00] text-[10px] font-black border border-[#C8FF00]">
                  ARCHITECT // VERIFIED
                </div>
              </div>

              {/* Identity Matrix Readouts */}
              <div className="mt-6 space-y-2 text-xs border-t border-[#262626] pt-4">
                <div className="flex justify-between">
                  <span className="text-[#7E7E7E]">DEGREE PROGRAM:</span>
                  <span className="text-[#F4F1E8] font-bold">System Information</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E7E7E]">CORE COMPETENCY:</span>
                  <span className="text-[#C8FF00] font-bold">Web Architecture</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E7E7E]">BASE REGION:</span>
                  <span className="text-[#38E8FF] font-bold">Indonesia (WIB / UTC+7)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#7E7E7E]">
              <span>SPEC_STATUS: ACCREDITED</span>
              <span className="text-[#C8FF00]">SYS::ACTIVE</span>
            </div>
          </div>

          {/* Right Column: Editorial Manifesto & Competencies (7 Cols) */}
          <div className="lg:col-span-7 border-2 border-[#262626] bg-[#141414] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-chaos-magenta">
            <div>
              <div className="inline-block px-2.5 py-1 bg-[#0A0A0A] border border-[#FF3DCE] text-xs font-black text-[#FF3DCE] uppercase mb-4">
                ARCHITECTURAL STATEMENT
              </div>

              <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-[#F4F1E8]">
                <p className="font-bold text-lg sm:text-xl text-[#F4F1E8]">
                  I&apos;m <span className="text-[#C8FF00] font-mono">Farhan Sultan Nadlir</span>, a System Information student passionate about building modern and scalable digital solutions. I focus on clean architecture, performance optimization, and structured system design.
                </p>

                <p className="font-medium text-[#D4D1C8]">
                  With a strong background in system analysis and development, I enjoy transforming ideas into reliable applications that balance usability and technical precision.
                </p>
              </div>

              {/* Asymmetrical Competency Pods */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 pt-6 border-t border-[#262626]">
                <div className="p-3 bg-[#0A0A0A] border border-[#262626] hover:border-[#C8FF00] transition-colors">
                  <div className="flex items-center gap-1.5 text-[#C8FF00] text-xs font-black mb-1">
                    <Code2 size={15} />
                    <span>FRONTEND</span>
                  </div>
                  <p className="font-sans text-xs text-[#7E7E7E]">
                    Next.js 16, React 19, TypeScript, Tailwind CSS
                  </p>
                </div>

                <div className="p-3 bg-[#0A0A0A] border border-[#262626] hover:border-[#FF3DCE] transition-colors">
                  <div className="flex items-center gap-1.5 text-[#FF3DCE] text-xs font-black mb-1">
                    <Database size={15} />
                    <span>BACKEND</span>
                  </div>
                  <p className="font-sans text-xs text-[#7E7E7E]">
                    Laravel, PHP, MySQL, REST APIs
                  </p>
                </div>

                <div className="p-3 bg-[#0A0A0A] border border-[#262626] hover:border-[#38E8FF] transition-colors">
                  <div className="flex items-center gap-1.5 text-[#38E8FF] text-xs font-black mb-1">
                    <Layers size={15} />
                    <span>SYSTEMS</span>
                  </div>
                  <p className="font-sans text-xs text-[#7E7E7E]">
                    Clean Architecture, Geofencing, DB Modeling
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Download Action Bar */}
            <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center gap-4">
              <a
                href="/CV_Farhan_Sultan_Nadlir.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-chaos-lime flex items-center gap-2 text-xs"
              >
                <FileDown size={15} />
                <span>DOWNLOAD CURRICULUM VITAE (PDF)</span>
              </a>

              <div className="flex items-center gap-1.5 text-xs text-[#7E7E7E]">
                <CheckCircle2 size={15} className="text-[#C8FF00]" />
                <span>OFFICIAL VERIFIED ASSET // 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
