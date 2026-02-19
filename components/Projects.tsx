"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects, techIcons } from "@/data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  return (
    <section id="projects" className="py-24 md:py-55 px-6 md:px-16" ref={ref}>
      <motion.div
        className="flex flex-col items-center gap-3 mb-10 md:mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <p className="text-foreground/40 uppercase tracking-[0.3em] text-xs">
          Work
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          Projects
        </h2>
        <div className="w-12 h-[2px] bg-foreground/20 rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.1 + i * 0.12,
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
            }}
            onClick={() => router.push(`/projects/${project.id}`)}
            className="group cursor-pointer h-full"
          >
            <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-500 hover:border-foreground/25 hover:shadow-lg hover:-translate-y-1">
              <div className="relative w-full aspect-video overflow-hidden bg-foreground/8">
                {project.heroImage ? (
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-foreground/20">
                    <ExternalLink size={28} />
                    <span className="text-xs tracking-wider">No preview</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 left-3 text-[10px] px-2.5 py-1 rounded-full border border-foreground/20 bg-background/60 backdrop-blur-sm text-foreground/60 tracking-widest uppercase">
                  {project.category}
                </span>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm md:text-base font-semibold text-foreground leading-snug">
                    {project.title}
                  </h3>
                  <span className="text-xs text-foreground/30 shrink-0 mt-0.5">
                    {project.year}
                  </span>
                </div>
                <p className="text-foreground/55 text-xs md:text-sm leading-relaxed line-clamp-2">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.slice(0, 4).map((tech) => {
                    const iconUrl = techIcons[tech.name];
                    return (
                      <div
                        key={tech.name}
                        title={tech.name}
                        className="w-7 h-7 rounded-lg border border-foreground/10 bg-foreground/5 flex items-center justify-center p-1.5"
                      >
                        {iconUrl ? (
                          <img
                            src={iconUrl}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-[9px] text-foreground/50 font-medium">
                            {tech.name.slice(0, 2)}
                          </span>
                        )}
                      </div>
                    );
                  })}
                  {project.techStack.length > 4 && (
                    <div className="w-7 h-7 rounded-lg border border-foreground/10 bg-foreground/5 flex items-center justify-center">
                      <span className="text-[9px] text-foreground/40">
                        +{project.techStack.length - 4}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
