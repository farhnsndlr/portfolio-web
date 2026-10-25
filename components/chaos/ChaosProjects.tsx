"use client";

import { useRouter } from "next/navigation";
import { projects, techIcons } from "@/data/projects";
import { ArrowUpRight, Github, ExternalLink, Code2, Sparkles, Terminal, ShieldCheck, MapPin } from "lucide-react";

export default function ChaosProjects() {
  const router = useRouter();

  const umkm = projects.find((p) => p.id === "umkm-i") || projects[0];
  const absenku = projects.find((p) => p.id === "absenku") || projects[1];
  const portfolio = projects.find((p) => p.id === "portfolio") || projects[2];

  return (
    <section id="artifacts" className="py-24 px-4 sm:px-8 md:px-14 relative font-mono">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b-2 border-[#262626] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 text-xs">
              <span className="px-2 py-0.5 bg-[#FF3DCE] text-[#0A0A0A] font-black uppercase">
                [03 // DIGITAL_ARTIFACTS]
              </span>
              <span className="text-[#7E7E7E]">VERIFIED PRODUCTION SYSTEMS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#F4F1E8] tracking-tight">
              DISSECTING <span className="text-[#C8FF00]">WORK</span>
            </h2>
          </div>

          <div className="text-xs text-[#7E7E7E] font-bold">
            ARCHIVE COUNT: 3 DEPLOYED REPOSITORIES
          </div>
        </div>

        {/* Variable-Size Asymmetrical Artifact Compositions */}
        <div className="space-y-8">
          {/* ── ARTIFACT 01: UMKM-i (Flagship Wide Showcase) ── */}
          <div className="border-2 border-[#C8FF00] bg-[#141414] p-6 sm:p-8 shadow-chaos-magenta relative overflow-hidden group">
            <div className="flex flex-wrap items-center justify-between pb-3 mb-6 border-b border-[#262626] text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#C8FF00] text-[#0A0A0A] font-black">
                  FLAGSHIP // 01
                </span>
                <span className="text-[#F4F1E8] font-bold uppercase">{umkm.category}</span>
              </div>
              <span className="text-[#C8FF00] font-bold">YEAR: {umkm.year}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Preview (7 Cols) */}
              <div
                onClick={() => router.push(`/projects/${umkm.id}`)}
                className="lg:col-span-7 relative aspect-video border-2 border-[#262626] bg-[#0A0A0A] overflow-hidden cursor-pointer group/img"
              >
                <img
                  src={umkm.heroImage}
                  alt={umkm.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover/img:opacity-0 transition-opacity" />
                <div className="absolute top-3 right-3 p-2 bg-[#0A0A0A] text-[#C8FF00] border border-[#C8FF00] opacity-0 group-hover/img:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Artifact Overview (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    onClick={() => router.push(`/projects/${umkm.id}`)}
                    className="text-2xl sm:text-3xl font-black uppercase text-[#F4F1E8] cursor-pointer hover:text-[#C8FF00] transition-colors leading-tight"
                  >
                    {umkm.title}
                  </h3>

                  <p className="mt-2 font-sans text-xs sm:text-sm text-[#D4D1C8] leading-relaxed">
                    {umkm.shortDesc}
                  </p>
                </div>

                {/* Tech Chips */}
                <div>
                  <span className="text-[10px] text-[#7E7E7E] uppercase block mb-1.5 font-bold">
                    DEPLOYED STACK:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {umkm.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2 py-0.5 bg-[#0A0A0A] border border-[#262626] text-[10px] text-[#C8FF00] font-bold"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Triggers */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => router.push(`/projects/${umkm.id}`)}
                    className="btn-chaos-lime flex-1 py-2.5 flex items-center justify-center gap-1.5 text-xs"
                  >
                    <span>EXPLORE AUTOPSY</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={umkm.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-[#0A0A0A] border border-[#262626] text-[#F4F1E8] hover:border-[#FF3DCE] hover:text-[#FF3DCE] transition-colors"
                    title="Source Repository on GitHub"
                    aria-label="GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── DUAL ARTIFACTS ROW (AbsenKu + Portfolio) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Artifact 02: AbsenKu (GPS Attendance & Camera Verification) */}
            <div className="border-2 border-[#FF3DCE] bg-[#141414] p-6 sm:p-7 shadow-chaos-lime flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262626] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#FF3DCE] text-[#0A0A0A] font-black">
                      ARTIFACT // 02
                    </span>
                    <span className="text-[#38E8FF] font-bold">REAL-TIME GPS</span>
                  </div>
                  <span className="text-[#7E7E7E]">{absenku.year}</span>
                </div>

                <div
                  onClick={() => router.push(`/projects/${absenku.id}`)}
                  className="relative aspect-video border border-[#262626] bg-[#0A0A0A] overflow-hidden mb-4 cursor-pointer group/img"
                >
                  <img
                    src={absenku.heroImage}
                    alt={absenku.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#0A0A0A] text-[#FF3DCE] border border-[#FF3DCE] text-[10px] font-bold">
                    {absenku.category}
                  </div>
                </div>

                <h3
                  onClick={() => router.push(`/projects/${absenku.id}`)}
                  className="text-xl sm:text-2xl font-black uppercase text-[#F4F1E8] cursor-pointer hover:text-[#FF3DCE] transition-colors"
                >
                  {absenku.title}
                </h3>

                <p className="mt-2 font-sans text-xs sm:text-sm text-[#D4D1C8] leading-relaxed line-clamp-3">
                  {absenku.shortDesc}
                </p>

                {/* Tech chips */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {absenku.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 py-0.5 bg-[#0A0A0A] border border-[#262626] text-[10px] text-[#38E8FF] font-bold"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#262626] flex items-center gap-3">
                <button
                  onClick={() => router.push(`/projects/${absenku.id}`)}
                  className="btn-chaos-magenta flex-1 py-2 text-xs flex items-center justify-center gap-1.5"
                >
                  <span>INSPECT AUTOPSY</span>
                  <ArrowUpRight size={14} />
                </button>
                <a
                  href={absenku.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#0A0A0A] border border-[#262626] text-[#F4F1E8] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>

            {/* Artifact 03: Portfolio Architecture */}
            <div className="border-2 border-[#38E8FF] bg-[#141414] p-6 sm:p-7 shadow-chaos-magenta flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262626] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#38E8FF] text-[#0A0A0A] font-black">
                      ARTIFACT // 03
                    </span>
                    <span className="text-[#C8FF00] font-bold">NEXT.JS 16</span>
                  </div>
                  <span className="text-[#7E7E7E]">{portfolio.year}</span>
                </div>

                <div
                  onClick={() => router.push(`/projects/${portfolio.id}`)}
                  className="relative aspect-video border border-[#262626] bg-[#0A0A0A] overflow-hidden mb-4 cursor-pointer group/img"
                >
                  <img
                    src={portfolio.heroImage}
                    alt={portfolio.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#0A0A0A] text-[#38E8FF] border border-[#38E8FF] text-[10px] font-bold">
                    {portfolio.category}
                  </div>
                </div>

                <h3
                  onClick={() => router.push(`/projects/${portfolio.id}`)}
                  className="text-xl sm:text-2xl font-black uppercase text-[#F4F1E8] cursor-pointer hover:text-[#38E8FF] transition-colors"
                >
                  {portfolio.title}
                </h3>

                <p className="mt-2 font-sans text-xs sm:text-sm text-[#D4D1C8] leading-relaxed line-clamp-3">
                  {portfolio.shortDesc}
                </p>

                {/* Tech chips */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {portfolio.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 py-0.5 bg-[#0A0A0A] border border-[#262626] text-[10px] text-[#C8FF00] font-bold"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#262626] flex items-center gap-3">
                <button
                  onClick={() => router.push(`/projects/${portfolio.id}`)}
                  className="btn-chaos-lime flex-1 py-2 text-xs flex items-center justify-center gap-1.5"
                >
                  <span>INSPECT AUTOPSY</span>
                  <ArrowUpRight size={14} />
                </button>
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#0A0A0A] border border-[#262626] text-[#F4F1E8] hover:border-[#38E8FF] hover:text-[#38E8FF] transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
