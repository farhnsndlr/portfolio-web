"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects, techIcons } from "@/data/projects";
import { ArrowUpRight, Github, ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const router = useRouter();

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-8 md:px-14 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#FFE500] text-[#171717] border-2 border-[#171717] font-mono text-xs font-black uppercase tracking-widest shadow-brutal-sm">
                [02 // WORK INDEX]
              </span>
              <span className="font-mono text-xs font-bold text-[#171717]/60 dark:text-gray-400 uppercase tracking-widest">
                VERIFIED PRODUCTION APPS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#171717] dark:text-white uppercase tracking-tight">
              FEATURED
              <br />
              <span className="bg-[#FFE500] text-[#171717] px-2 border-2 border-[#171717] inline-block shadow-brutal-sm mt-1">
                PROJECTS
              </span>
            </h2>
          </div>

          <div className="font-mono text-xs text-[#171717]/70 dark:text-gray-300 font-bold max-w-xs">
            // SELECTED WORK COMPRISING FULL-STACK ARCHITECTURES, REAL-TIME GEOLOCATION, AND COMPONENT LIBRARIES.
          </div>
        </motion.div>

        {/* 3-Column Neobrutalist Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.12,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col h-full"
            >
              <div className="group relative flex flex-col h-full border-[3px] border-[#171717] dark:border-[#FFE500] bg-white dark:bg-[#1A1A1A] shadow-brutal-lg hover:shadow-brutal-xl transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1">
                {/* Card Top Utility Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#F5F0E6] dark:bg-[#202020] border-b-2 border-[#171717] dark:border-[#FFE500] font-mono text-xs font-black select-none">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#FFE500] text-[#171717] border border-[#171717] uppercase text-[10px]">
                      {project.category}
                    </span>
                    <span className="text-[#171717]/60 dark:text-gray-400 text-[10px]">
                      [0{i + 1}]
                    </span>
                  </div>
                  <span className="text-[#171717] dark:text-[#FFE500] text-[10px]">
                    YEAR // {project.year}
                  </span>
                </div>

                {/* Media Preview Viewport */}
                <div
                  onClick={() => router.push(`/projects/${project.id}`)}
                  className="relative w-full aspect-video overflow-hidden border-b-2 border-[#171717] dark:border-[#FFE500] bg-[#E5DDCB] dark:bg-[#121212] cursor-pointer"
                >
                  {project.heroImage ? (
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#171717]/40 dark:text-gray-600">
                      <ExternalLink size={28} />
                      <span className="font-mono text-xs uppercase font-bold">Preview not available</span>
                    </div>
                  )}

                  {/* Corner Inspect Cue */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-[#FFE500] text-[#171717] border-2 border-[#171717] flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-brutal-sm">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <h3
                      onClick={() => router.push(`/projects/${project.id}`)}
                      className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717] dark:text-white cursor-pointer hover:text-[#171717] dark:hover:text-[#FFE500] transition-colors leading-tight"
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm font-medium text-[#171717]/75 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tech stack badge pills */}
                  <div>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#171717]/60 dark:text-gray-400 font-bold uppercase mb-2">
                      <Code2 size={12} />
                      <span>STACK DEPLOYED:</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => {
                        const iconUrl = techIcons[tech.name];
                        return (
                          <div
                            key={tech.name}
                            title={tech.name}
                            className="flex items-center gap-1.5 px-2 py-1 border border-[#171717] dark:border-gray-700 bg-[#F5F0E6] dark:bg-[#252525] font-mono text-[10px] font-bold text-[#171717] dark:text-gray-200"
                          >
                            {iconUrl && (
                              <img
                                src={iconUrl}
                                alt={tech.name}
                                className="w-3 h-3 object-contain"
                              />
                            )}
                            <span>{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 border-t border-dashed border-[#171717]/20 dark:border-gray-800 flex items-center gap-2">
                    <button
                      onClick={() => router.push(`/projects/${project.id}`)}
                      className="neo-btn flex-1 py-2.5 bg-[#FFE500] text-[#171717] font-mono text-xs font-black shadow-brutal-sm border-2 border-[#171717] flex items-center justify-center gap-1.5"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn px-3 py-2.5 bg-white dark:bg-[#252525] text-[#171717] dark:text-white font-mono text-xs font-bold shadow-brutal-sm border-2 border-[#171717] dark:border-[#FFE500] flex items-center justify-center hover:bg-[#171717] hover:text-[#FFE500]"
                      aria-label={`View ${project.title} source code on GitHub`}
                      title="GitHub Repository"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
