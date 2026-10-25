"use client";

import { useRouter } from "next/navigation";
import { projects, techIcons } from "@/data/projects";
import { ArrowUpRight, Github, ExternalLink, Code2, Sparkles, Layers } from "lucide-react";

export default function ModernProjects() {
  const router = useRouter();

  const umkm = projects.find((p) => p.id === "umkm-i") || projects[0];
  const absenku = projects.find((p) => p.id === "absenku") || projects[1];
  const portfolio = projects.find((p) => p.id === "portfolio") || projects[2];

  return (
    <section id="works" className="py-28 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-white/8 pb-6 font-mono text-xs">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2D5BFF]" />
              <span className="text-[#8A8D98] uppercase tracking-wider">[02] SELECTED WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F5F7]">
              FEATURED <span className="text-[#2D5BFF]">PROJECTS</span>
            </h2>
          </div>

          <div className="text-[#8A8D98]">
            CURATED PRODUCTION ARCHITECTURES
          </div>
        </div>

        {/* Asymmetrical Editorial Projects Layout */}
        <div className="space-y-12">
          {/* ── PROJECT 01: UMKM-i (Full-Bleed Cinematic Showcase) ── */}
          <div className="editorial-card rounded-3xl p-6 sm:p-10 relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Media Viewport (7 Cols) */}
              <div
                onClick={() => router.push(`/projects/${umkm.id}`)}
                className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-[#0A0B0D] border border-white/5 cursor-pointer group/img"
              >
                <img
                  src={umkm.heroImage}
                  alt={umkm.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F5F5F7]">
                  {umkm.category}
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#2D5BFF] text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/img:translate-y-0 shadow-lg">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Project Metadata & Description (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#8A8D98] mb-3">
                    <span className="text-[#2D5BFF] font-medium">PROJECT 01</span>
                    <span>/</span>
                    <span>{umkm.year}</span>
                  </div>

                  <h3
                    onClick={() => router.push(`/projects/${umkm.id}`)}
                    className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7] cursor-pointer hover:text-[#2D5BFF] transition-colors leading-tight"
                  >
                    {umkm.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-[#8A8D98] font-normal leading-relaxed">
                    {umkm.shortDesc}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <span className="text-xs font-mono text-[#8A8D98] block mb-2">
                    TECHNOLOGIES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {umkm.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F5F5F7]"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Triggers */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => router.push(`/projects/${umkm.id}`)}
                    className="btn-editorial-primary flex items-center gap-2"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={umkm.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-[#2D5BFF] hover:text-[#2D5BFF] flex items-center justify-center text-[#F5F5F7] transition-all"
                    title="Source Repository on GitHub"
                    aria-label="GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── DUAL ASYMMETRIC PROJECTS ROW (AbsenKu & Portfolio) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Project 02: AbsenKu (7 Cols) */}
            <div className="lg:col-span-7 editorial-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 font-mono text-xs">
                  <span className="text-[#2D5BFF] font-medium">PROJECT 02 // GPS SYSTEM</span>
                  <span className="text-[#8A8D98]">{absenku.year}</span>
                </div>

                <div
                  onClick={() => router.push(`/projects/${absenku.id}`)}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-[#0A0B0D] border border-white/5 mb-6 cursor-pointer group/img"
                >
                  <img
                    src={absenku.heroImage}
                    alt={absenku.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F5F5F7]">
                    {absenku.category}
                  </div>
                </div>

                <h3
                  onClick={() => router.push(`/projects/${absenku.id}`)}
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7] cursor-pointer hover:text-[#2D5BFF] transition-colors"
                >
                  {absenku.title}
                </h3>

                <p className="mt-3 text-sm text-[#8A8D98] leading-relaxed line-clamp-3">
                  {absenku.shortDesc}
                </p>

                {/* Tech chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {absenku.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F5F5F7]"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => router.push(`/projects/${absenku.id}`)}
                  className="btn-editorial-primary text-xs flex items-center gap-1.5"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight size={13} />
                </button>

                <a
                  href={absenku.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:border-[#2D5BFF] hover:text-[#2D5BFF] flex items-center justify-center text-[#F5F5F7] transition-all"
                  aria-label="GitHub Repository"
                >
                  <Github size={15} />
                </a>
              </div>
            </div>

            {/* Project 03: Portfolio Architecture (5 Cols) */}
            <div className="lg:col-span-5 editorial-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 font-mono text-xs">
                  <span className="text-[#2D5BFF] font-medium">PROJECT 03 // ARCHITECTURE</span>
                  <span className="text-[#8A8D98]">{portfolio.year}</span>
                </div>

                <div
                  onClick={() => router.push(`/projects/${portfolio.id}`)}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-[#0A0B0D] border border-white/5 mb-6 cursor-pointer group/img"
                >
                  <img
                    src={portfolio.heroImage}
                    alt={portfolio.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F5F5F7]">
                    {portfolio.category}
                  </div>
                </div>

                <h3
                  onClick={() => router.push(`/projects/${portfolio.id}`)}
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7] cursor-pointer hover:text-[#2D5BFF] transition-colors"
                >
                  {portfolio.title}
                </h3>

                <p className="mt-3 text-sm text-[#8A8D98] leading-relaxed line-clamp-3">
                  {portfolio.shortDesc}
                </p>

                {/* Tech chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {portfolio.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F5F5F7]"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => router.push(`/projects/${portfolio.id}`)}
                  className="btn-editorial-primary text-xs flex items-center gap-1.5"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight size={13} />
                </button>

                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:border-[#2D5BFF] hover:text-[#2D5BFF] flex items-center justify-center text-[#F5F5F7] transition-all"
                  aria-label="GitHub Repository"
                >
                  <Github size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
