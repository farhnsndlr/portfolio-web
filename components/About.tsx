"use client";

import SkillsCarousel from "@/components/ui/SkillsCarousel";
import { FileDown, Code2, Database, Layers, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-[#B8FF3B] text-[#111312] font-mono text-xs font-bold uppercase tracking-wider">
              [03 // DOSSIER]
            </span>
            <span className="font-mono text-xs text-[#777D76] uppercase tracking-wider">
              IDENTITY &amp; CAPABILITY MATRIX
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#F3F4EF] uppercase tracking-tight">
            SYSTEM ANALYSIS &amp;
            <br />
            <span className="text-[#B8FF3B]">WEB ARCHITECTURE</span>
          </h2>
        </div>

        {/* Dual Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          {/* LEFT: DEVELOPER SPEC CARD (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-[#262D28] bg-[#181C1A] p-6 relative">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262D28] font-mono text-xs">
                <span className="text-[#B8FF3B] font-bold">IDENTITY_SPEC // DEV-01</span>
                <span className="text-[#777D76]">VALIDATED</span>
              </div>

              {/* Avatar Frame */}
              <div className="relative w-full aspect-square max-w-[260px] mx-auto border border-[#262D28] bg-[#111312] overflow-hidden mb-5">
                <img
                  src="/avatar.png"
                  alt="Farhan Sultan Nadlir"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#B8FF3B] text-[#111312] font-mono text-[10px] font-bold">
                  FARHAN SULTAN NADLIR
                </div>
              </div>

              {/* Metadata Specs */}
              <div className="space-y-2 font-mono text-xs pt-2">
                <div className="flex justify-between py-1 border-b border-[#262D28]/60">
                  <span className="text-[#777D76]">DEGREE PROGRAM:</span>
                  <span className="text-[#F3F4EF] font-bold">System Information</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#262D28]/60">
                  <span className="text-[#777D76]">DISCIPLINE:</span>
                  <span className="text-[#F3F4EF] font-bold">Full-Stack Engineering</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#262D28]/60">
                  <span className="text-[#777D76]">BASE OF OPERATIONS:</span>
                  <span className="text-[#F3F4EF] font-bold">Indonesia (UTC+7)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#262D28] flex items-center justify-between font-mono text-[11px] text-[#777D76]">
              <span>ID: FSN-2026-RUNTIME</span>
              <span className="text-[#B8FF3B]">SYS::ACTIVE</span>
            </div>
          </div>

          {/* RIGHT: EDITORIAL BIO DOSSIER (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between border border-[#262D28] bg-[#141816] p-6 sm:p-8 md:p-10 relative">
            <div>
              <div className="inline-block px-2 py-0.5 bg-[#181C1A] border border-[#262D28] font-mono text-[11px] text-[#B8FF3B] font-bold mb-4">
                STATEMENT OF CAPABILITY
              </div>

              <div className="space-y-4">
                <p className="text-base sm:text-lg font-bold text-[#F3F4EF] leading-relaxed">
                  I&apos;m{" "}
                  <span className="text-[#B8FF3B]">Farhan Sultan Nadlir</span>, a System Information student passionate about building modern and scalable digital solutions. I focus on clean architecture, performance optimization, and structured system design.
                </p>

                <p className="text-sm sm:text-base font-medium text-[#777D76] leading-relaxed">
                  With a strong background in system analysis and development, I enjoy transforming ideas into reliable applications that balance usability and technical precision.
                </p>
              </div>

              {/* Core Competencies Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 pt-6 border-t border-[#262D28]">
                <div className="p-3 bg-[#181C1A] border border-[#262D28]">
                  <div className="flex items-center gap-2 mb-1.5 text-[#B8FF3B]">
                    <Code2 size={16} />
                    <span className="font-mono text-xs font-bold text-[#F3F4EF]">
                      FRONTEND
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-[#777D76]">
                    Next.js, React 19, TypeScript, Tailwind
                  </p>
                </div>

                <div className="p-3 bg-[#181C1A] border border-[#262D28]">
                  <div className="flex items-center gap-2 mb-1.5 text-[#B8FF3B]">
                    <Database size={16} />
                    <span className="font-mono text-xs font-bold text-[#F3F4EF]">
                      BACKEND
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-[#777D76]">
                    Laravel, PHP, MySQL, REST APIs
                  </p>
                </div>

                <div className="p-3 bg-[#181C1A] border border-[#262D28]">
                  <div className="flex items-center gap-2 mb-1.5 text-[#B8FF3B]">
                    <Layers size={16} />
                    <span className="font-mono text-xs font-bold text-[#F3F4EF]">
                      SYSTEMS
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-[#777D76]">
                    Geofencing, DB Design, Clean Architecture
                  </p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#262D28]">
              <a
                href="/CV_Farhan_Sultan_Nadlir.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-laser flex items-center gap-2 text-xs"
              >
                <FileDown size={15} />
                <span>DOWNLOAD CURRICULUM VITAE (PDF)</span>
              </a>

              <div className="flex items-center gap-1.5 font-mono text-xs text-[#777D76]">
                <CheckCircle2 size={15} className="text-[#B8FF3B]" />
                <span>UPDATED 2026 // VERIFIED ASSET</span>
              </div>
            </div>
          </div>
        </div>

        {/* TECHNICAL STACK MARQUEE & ARSENAL */}
        <div className="border border-[#262D28] bg-[#181C1A] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#262D28]">
            <div>
              <span className="font-mono text-xs font-bold text-[#B8FF3B] uppercase tracking-wider">
                [SKILL_REGISTRY // CORE_STACK]
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#F3F4EF] uppercase tracking-tight mt-0.5">
                TECHNICAL ARSENAL &amp; CAPABILITIES
              </h3>
            </div>
            <span className="font-mono text-xs text-[#777D76]">
              INTERACTION: HOVER TO INSPECT
            </span>
          </div>

          <SkillsCarousel />
        </div>
      </div>
    </section>
  );
}
