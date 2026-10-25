"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { projects, Project, techIcons } from "@/data/projects";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  X,
  Eye,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function ReimaginedProjects() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [quickViewProject, setQuickViewProject] = useState<Project | null>(null);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const activeProject = projects[selectedIndex] || projects[0];

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  }, []);

  // Keyboard navigation for previous/next and numbers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }

      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key >= "1" && e.key <= String(projects.length)) {
        const idx = parseInt(e.key, 10) - 1;
        if (idx >= 0 && idx < projects.length) {
          setSelectedIndex(idx);
        }
      }

      if (e.key === "Escape" && quickViewProject) {
        setQuickViewProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, quickViewProject]);

  // Skill-to-Project exploration listener
  useEffect(() => {
    const handleFilterEvent = (e: CustomEvent<{ tech: string }>) => {
      if (e.detail?.tech) {
        const techName = e.detail.tech.toLowerCase();
        const foundIndex = projects.findIndex((p) =>
          p.techStack.some((t) => t.name.toLowerCase() === techName)
        );
        if (foundIndex !== -1) {
          setSelectedIndex(foundIndex);
          const worksEl = document.getElementById("works");
          if (worksEl) {
            worksEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    window.addEventListener(
      "filter-projects-by-tech",
      handleFilterEvent as EventListener
    );
    return () => {
      window.removeEventListener(
        "filter-projects-by-tech",
        handleFilterEvent as EventListener
      );
    };
  }, []);

  return (
    <section
      id="works"
      className="py-24 px-4 sm:px-8 md:px-14 relative font-mono bg-background text-foreground scroll-mt-24"
    >
      {/* Quick View Modal */}
      {quickViewProject && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs select-none"
          role="dialog"
          aria-modal="true"
          aria-label={`${quickViewProject.title} Quick View`}
          onClick={() => setQuickViewProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-card border-[3.5px] border-border text-foreground p-6 sm:p-8 shadow-neo-xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-border text-xs font-black">
              <span className="bg-[#FFE500] text-[#171717] px-2 py-0.5 uppercase">
                {quickViewProject.category} // {quickViewProject.year}
              </span>
              <button
                type="button"
                onClick={() => setQuickViewProject(null)}
                className="p-1 hover:bg-[#FFE500] hover:text-[#171717] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative aspect-video border-2 border-border bg-background overflow-hidden mb-6 shadow-neo">
              <img
                src={quickViewProject.heroImage}
                alt={quickViewProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground mb-3">
              {quickViewProject.title}
            </h3>

            <p className="text-xs sm:text-sm font-sans font-medium text-foreground/85 leading-relaxed mb-6">
              {quickViewProject.description}
            </p>

            <div className="mb-6 pt-4 border-t-2 border-border">
              <span className="text-[11px] font-black uppercase text-muted-foreground block mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickViewProject.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-2.5 py-1 bg-secondary text-foreground border border-border text-xs font-bold"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setQuickViewProject(null);
                  router.push(`/projects/${quickViewProject.id}`);
                }}
                className="neo-btn-yellow flex-1 flex items-center justify-center gap-2 text-xs font-black shadow-neo cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight size={15} />
              </button>

              <a
                href={quickViewProject.github}
                target="_blank"
                rel="noreferrer"
                className="neo-btn-white flex items-center gap-2 text-xs font-bold shadow-neo"
              >
                <Github size={15} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b-[2.5px] border-border pb-5">
          <div>
            <span className="text-xs font-black text-muted-foreground uppercase tracking-widest block mb-1">
              Curated Work &amp; Case Studies
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-foreground tracking-tight leading-none">
              PROJECT <span className="bg-[#FFE500] text-[#171717] px-2.5 inline-block">EXHIBITION</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-xs font-mono font-bold text-muted-foreground">
              {`EXHIBIT 0${selectedIndex + 1} OF 0${projects.length}`}
            </span>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-black text-foreground hover:text-[#FFE500] hover:underline"
            >
              <span>{`View All Projects (${projects.length})`}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Interactive Project Selector Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 p-2.5 bg-card border-2 border-border shadow-neo-sm">
          {/* Project Tabs */}
          <div
            className="flex items-center gap-2 flex-wrap"
            role="tablist"
            aria-label="Project exhibition exhibits"
          >
            {projects.map((project, idx) => {
              const isCurrent = idx === selectedIndex;
              return (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  aria-controls={`stage-panel-${project.id}`}
                  onClick={() => setSelectedIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-black uppercase border-2 transition-all cursor-pointer flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#FFE500] ${
                    isCurrent
                      ? "bg-[#FFE500] text-[#171717] border-border shadow-neo-sm -translate-y-0.5"
                      : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-[#FFE500]"
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">
                    {`0${idx + 1}`}
                  </span>
                  <span>{project.title}</span>
                  <span className="hidden sm:inline-block text-[10px] px-1 py-0.2 bg-black/10 text-inherit font-mono">
                    {project.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrev}
              className="p-1.5 bg-background border-2 border-border text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors cursor-pointer shadow-neo-sm"
              aria-label="Previous exhibit (Arrow Left)"
              title="Previous exhibit (Arrow Left)"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-1.5 bg-background border-2 border-border text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors cursor-pointer shadow-neo-sm"
              aria-label="Next exhibit (Arrow Right)"
              title="Next exhibit (Arrow Right)"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Single Prominent Exhibition Stage (Asymmetrical 12-Column Spread) */}
        <div
          id={`stage-panel-${activeProject.id}`}
          role="tabpanel"
          aria-label={`${activeProject.title} Exhibition Stage`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12"
        >
          {/* Left Column: Dominant Visual Preview (7 Cols) */}
          <div className="lg:col-span-7">
            <div
              onClick={() => setQuickViewProject(activeProject)}
              className="border-[3.5px] border-border bg-card overflow-hidden shadow-neo-xl relative group aspect-[3/2] w-full cursor-pointer"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="relative w-full h-full"
                >
                  <img
                    src={activeProject.heroImage}
                    alt={activeProject.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#171717] text-[#FFE500] border-2 border-border shadow-neo-sm text-xs font-black flex items-center gap-1.5">
                    <span>{`EXHIBIT 0${selectedIndex + 1}`}</span>
                    <span>·</span>
                    <span className="uppercase">{activeProject.category}</span>
                  </div>

                  {/* Quick Preview Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickViewProject(activeProject);
                    }}
                    className="absolute top-4 right-4 px-3 py-1 bg-[#FFE500] text-[#171717] border-2 border-border shadow-neo-sm text-xs font-black flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
                    aria-label={`Open quick preview for ${activeProject.title}`}
                  >
                    <Eye size={13} />
                    <span>Quick Preview</span>
                  </button>

                  {/* On-Stage Steppers */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-4 right-4 flex items-center gap-1.5"
                  >
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="p-2 bg-background/90 backdrop-blur-xs text-foreground border-2 border-border shadow-neo-sm hover:bg-[#FFE500] hover:text-[#171717] transition-colors cursor-pointer"
                      aria-label="Previous exhibit"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="p-2 bg-background/90 backdrop-blur-xs text-foreground border-2 border-border shadow-neo-sm hover:bg-[#FFE500] hover:text-[#171717] transition-colors cursor-pointer"
                      aria-label="Next exhibit"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Curated Specification & Contribution (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-[3.5px] border-border bg-card p-6 sm:p-7 shadow-neo-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 8 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -8 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-4"
              >
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-2.5 border-b-2 border-border text-xs font-black">
                  <span className="bg-[#FFE500] text-[#171717] px-2 py-0.5 uppercase">
                    {activeProject.category} // {activeProject.year}
                  </span>
                  <span className="text-muted-foreground font-mono">
                    {`SPEC 0${selectedIndex + 1}`}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    onClick={() => router.push(`/projects/${activeProject.id}`)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-foreground hover:underline cursor-pointer tracking-tight"
                  >
                    {activeProject.title}
                  </h3>
                </div>

                {/* Factual Short Description Callout */}
                <div className="p-3 bg-background border-2 border-border shadow-neo-sm">
                  <strong className="block text-[11px] font-black uppercase text-muted-foreground mb-0.5">
                    Project Focus:
                  </strong>
                  <p className="text-xs sm:text-sm font-sans font-medium text-foreground leading-relaxed">
                    {activeProject.shortDesc}
                  </p>
                </div>

                {/* Complete Factual Description — No line-clamp or truncation */}
                <p className="font-sans text-xs sm:text-sm text-foreground/85 leading-relaxed">
                  {activeProject.summary || activeProject.description}
                </p>

                {/* Technologies List */}
                <div>
                  <span className="text-[11px] font-black text-muted-foreground uppercase block mb-1.5">
                    Technologies Implemented:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2 py-0.5 bg-secondary text-foreground border border-border text-[11px] font-bold shadow-neo-sm"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Actions */}
                <div className="pt-3 border-t-2 border-border space-y-2">
                  <Link
                    href={`/projects/${activeProject.id}`}
                    className="neo-btn-yellow w-full flex items-center justify-center gap-2 text-xs font-black shadow-neo"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={14} />
                  </Link>

                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-btn-white w-full flex items-center justify-center gap-2 text-xs font-bold shadow-neo-sm"
                  >
                    <Github size={14} />
                    <span>View Repository on GitHub</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scalable Archive Callout */}
        <div className="border-[3.5px] border-border bg-card p-6 sm:p-8 shadow-neo-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="bg-[#FFE500] text-[#171717] px-2 py-0.5 text-[11px] font-black uppercase">
              COMPLETE REPOSITORY ARCHIVE
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
              Looking for more projects?
            </h4>
            <p className="text-xs font-sans text-muted-foreground leading-relaxed">
              Explore the dedicated project archive to search by title, filter by domain (Web App, Frontend), filter by stack, or view as a compact index table.
            </p>
          </div>

          <Link
            href="/projects"
            className="neo-btn-yellow px-5 py-3.5 flex items-center gap-2.5 text-xs font-black shadow-neo shrink-0"
          >
            <span>{`View All Projects (${projects.length})`}</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
