"use client";

import { FileDown, Code2, Database, Layers, CheckCircle2, Award, Sparkles } from "lucide-react";

export default function PixelAbout() {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 md:px-14 relative font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-1.5 mb-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-[#F2C94C] text-[#242B25] text-xs font-black uppercase tracking-wider border-2 border-[#242B25]">
              [01 // TRAINER DOSSIER]
            </span>
            <span className="text-xs text-[#A6CDBA] uppercase">
              ABOUT THE DEVELOPER
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#F7F1D5] tracking-tight">
            SYSTEM ANALYSIS &amp;
            <br />
            <span className="text-[#F2C94C]">WEB ENGINEERING</span>
          </h2>
        </div>

        {/* Retro GBA Trainer Card Container */}
        <div className="pixel-card p-6 sm:p-8 md:p-10 relative">
          {/* Card Top Title Banner */}
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#242B25] text-xs">
            <div className="flex items-center gap-2 font-black text-[#285943]">
              <Sparkles size={14} className="text-[#F2C94C]" />
              <span>OFFICIAL TRAINER CARD // FARHAN SULTAN NADLIR</span>
            </div>
            <span className="text-[#4A544C] hidden sm:inline">
              NO. 09872 // REGION: ID_WIB
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left 4 Cols: Avatar Badge & Identification */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="w-48 h-52 border-[3px] border-[#242B25] bg-[#E5DDCB] p-1.5 shadow-md relative overflow-hidden">
                <img
                  src="/avatar.png"
                  alt="Farhan Sultan Nadlir"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-1 right-1 px-2 py-0.5 bg-[#F2C94C] text-[#242B25] text-[10px] font-black border border-[#242B25]">
                  VERIFIED
                </div>
              </div>

              <div className="mt-3 text-center">
                <h3 className="font-black text-lg uppercase text-[#242B25]">
                  Farhan Sultan Nadlir
                </h3>
                <p className="text-xs font-bold text-[#285943]">
                  System Information Student
                </p>
                <span className="text-[11px] text-[#5A635B] block mt-0.5">
                  Full-Stack Web Architect
                </span>
              </div>
            </div>

            {/* Right 8 Cols: Dossier Bio & Core Competency Pods */}
            <div className="md:col-span-8 space-y-4">
              <div className="space-y-3 font-sans text-sm sm:text-base leading-relaxed text-[#242B25]">
                <p className="font-bold">
                  I&apos;m <span className="bg-[#285943] text-[#F7F1D5] px-1.5 py-0.5 font-mono">Farhan Sultan Nadlir</span>, a System Information student passionate about building modern and scalable digital solutions. I focus on clean architecture, performance optimization, and structured system design.
                </p>
                <p className="font-medium text-[#4A544C]">
                  With a strong background in system analysis and development, I enjoy transforming ideas into reliable applications that balance usability and technical precision.
                </p>
              </div>

              {/* RPG Competency Pods */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3 bg-[#EAE0BC] border-2 border-[#242B25]">
                  <div className="flex items-center gap-1.5 font-black text-xs text-[#285943] mb-1">
                    <Code2 size={15} />
                    <span>FRONTEND</span>
                  </div>
                  <p className="font-sans text-[11px] text-[#4A544C]">
                    Next.js 16, React 19, TypeScript, Tailwind CSS
                  </p>
                </div>

                <div className="p-3 bg-[#EAE0BC] border-2 border-[#242B25]">
                  <div className="flex items-center gap-1.5 font-black text-xs text-[#285943] mb-1">
                    <Database size={15} />
                    <span>BACKEND</span>
                  </div>
                  <p className="font-sans text-[11px] text-[#4A544C]">
                    Laravel, PHP, MySQL, REST APIs
                  </p>
                </div>

                <div className="p-3 bg-[#EAE0BC] border-2 border-[#242B25]">
                  <div className="flex items-center gap-1.5 font-black text-xs text-[#285943] mb-1">
                    <Layers size={15} />
                    <span>SYSTEMS</span>
                  </div>
                  <p className="font-sans text-[11px] text-[#4A544C]">
                    Clean Architecture, Geofencing, DB Modeling
                  </p>
                </div>
              </div>

              {/* Action Button: Download CV */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="/CV_Farhan_Sultan_Nadlir.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="pixel-btn flex items-center gap-2 cursor-pointer text-xs"
                >
                  <FileDown size={15} />
                  <span>DOWNLOAD CURRICULUM VITAE (PDF)</span>
                </a>

                <div className="flex items-center gap-1.5 text-xs text-[#4A544C]">
                  <CheckCircle2 size={15} className="text-[#285943]" />
                  <span>UPDATED 2026 // OFFICIAL RECORD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
