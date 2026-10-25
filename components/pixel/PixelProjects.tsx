"use client";

import { useRouter } from "next/navigation";
import { projects, techIcons } from "@/data/projects";
import { ArrowUpRight, Github, ExternalLink, Code2, Sparkles } from "lucide-react";

export default function PixelProjects() {
  const router = useRouter();

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 md:px-14 relative font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b-2 border-[#1E3F31] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 bg-[#F2C94C] text-[#242B25] text-xs font-black uppercase tracking-wider border-2 border-[#242B25]">
                [02 // QUEST LOG]
              </span>
              <span className="text-xs text-[#A6CDBA] uppercase">
                PRODUCTION REPOSITORIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#F7F1D5] tracking-tight">
              FEATURED <span className="text-[#F2C94C]">PROJECTS</span>
            </h2>
          </div>

          <span className="text-xs text-[#A6CDBA]">
            COUNT: 3 VERIFIED APPLICATIONS
          </span>
        </div>

        {/* 3-Column Project Card Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="pixel-card flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Card Header Top */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-[#204B38] text-[#F7F1D5] text-[11px] font-black border-b-2 border-[#242B25]">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={11} className="text-[#F2C94C]" />
                    <span>MISSION #0{idx + 1}</span>
                  </div>
                  <span className="text-[#F2C94C]">YEAR // {project.year}</span>
                </div>

                {/* Media Preview Viewport */}
                <div
                  onClick={() => router.push(`/projects/${project.id}`)}
                  className="relative w-full aspect-video border-b-2 border-[#242B25] bg-[#1E2E25] overflow-hidden cursor-pointer group"
                >
                  {project.heroImage ? (
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#A6CDBA]">
                      <ExternalLink size={28} />
                      <span className="text-xs">No preview available</span>
                    </div>
                  )}

                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#F2C94C] text-[#242B25] text-[10px] font-black border border-[#242B25]">
                    {project.category}
                  </div>

                  <div className="absolute top-2 right-2 w-7 h-7 bg-[#242B25] text-[#F2C94C] border border-[#F2C94C] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 space-y-3">
                  <h3
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="text-xl font-black uppercase text-[#242B25] cursor-pointer hover:text-[#285943] transition-colors"
                  >
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#4A544C] leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Tech stack badge pills */}
                  <div className="pt-1">
                    <div className="flex items-center gap-1 text-[10px] text-[#4A544C] font-bold uppercase mb-1.5">
                      <Code2 size={12} className="text-[#285943]" />
                      <span>STACK DEPLOYED:</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => {
                        const iconUrl = techIcons[tech.name];
                        return (
                          <span
                            key={tech.name}
                            className="flex items-center gap-1 px-2 py-0.5 bg-[#EAE0BC] text-[#242B25] border border-[#242B25] text-[10px] font-bold"
                          >
                            {iconUrl && (
                              <img
                                src={iconUrl}
                                alt={tech.name}
                                className="w-3 h-3 object-contain"
                              />
                            )}
                            <span>{tech.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => router.push(`/projects/${project.id}`)}
                  className="flex-1 py-2.5 bg-[#285943] text-[#F7F1D5] hover:bg-[#F2C94C] hover:text-[#242B25] transition-colors border-2 border-[#242B25] font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight size={14} />
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-[#242B25] text-[#F7F1D5] hover:bg-[#F2C94C] hover:text-[#242B25] transition-colors border-2 border-[#242B25]"
                  title="Source Repository on GitHub"
                  aria-label={`View ${project.title} repository`}
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
