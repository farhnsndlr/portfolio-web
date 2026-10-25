"use client";

import { useState } from "react";
import {
  SiLaravel,
  SiPhp,
  SiMysql,
  SiGit,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { Terminal, Database, Cpu, ArrowUpRight, ExternalLink, Layers, Check } from "lucide-react";

export type TechCategory = "All" | "Frontend" | "Backend" | "Database" | "Tooling";

export interface TechItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tooling";
  scale: "lead" | "primary" | "secondary";
  tag: string;
  summary: string;
  docs: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  relatedProjects: { id: string; title: string }[];
}

const techItems: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    scale: "lead",
    tag: "Framework",
    summary:
      "Default React framework for server-side rendering, dynamic App Router architecture, and static generation. Used to build UMKM-i and this portfolio.",
    docs: "https://nextjs.org/docs",
    icon: SiNextdotjs,
    relatedProjects: [
      { id: "umkm-i", title: "UMKM-i Web App" },
      { id: "portfolio", title: "Portfolio Website" },
    ],
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "Backend",
    scale: "lead",
    tag: "Framework",
    summary:
      "PHP monolithic framework with MVC architecture, Eloquent ORM relationships, and role-based middleware. Backs the AbsenKu campus attendance system.",
    docs: "https://laravel.com/docs",
    icon: SiLaravel,
    relatedProjects: [{ id: "absenku", title: "AbsenKu Attendance System" }],
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    scale: "lead",
    tag: "UI Library",
    summary:
      "Component-driven library for building reactive user interfaces, managing client state, and rendering interactive frontends in UMKM-i and this portfolio.",
    docs: "https://react.dev/",
    icon: SiReact,
    relatedProjects: [
      { id: "umkm-i", title: "UMKM-i Web App" },
      { id: "portfolio", title: "Portfolio Website" },
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    scale: "primary",
    tag: "Language",
    summary:
      "Static type definitions and strict interface contracts across Next.js and React codebases to catch errors at compile time and document data structures.",
    docs: "https://www.typescriptlang.org/",
    icon: SiTypescript,
    relatedProjects: [
      { id: "umkm-i", title: "UMKM-i Web App" },
      { id: "portfolio", title: "Portfolio Website" },
    ],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    scale: "primary",
    tag: "Styling",
    summary:
      "Utility-first styling engine used for responsive layouts, custom neo-brutalist tokens, and high-contrast color themes across all projects.",
    docs: "https://tailwindcss.com/docs",
    icon: SiTailwindcss,
    relatedProjects: [
      { id: "umkm-i", title: "UMKM-i Web App" },
      { id: "absenku", title: "AbsenKu System" },
      { id: "portfolio", title: "Portfolio Website" },
    ],
  },
  {
    id: "php",
    name: "PHP",
    category: "Backend",
    scale: "primary",
    tag: "Language",
    summary:
      "Server-side runtime powering Laravel backend routing, database controllers, and request lifecycles in the AbsenKu attendance platform.",
    docs: "https://www.php.net/docs.php",
    icon: SiPhp,
    relatedProjects: [{ id: "absenku", title: "AbsenKu Attendance System" }],
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    scale: "primary",
    tag: "Relational DB",
    summary:
      "Relational database used for normalized database schemas, campus attendance records, foreign key cascades, and transactional query integrity.",
    docs: "https://dev.mysql.com/doc",
    icon: SiMysql,
    relatedProjects: [{ id: "absenku", title: "AbsenKu Attendance System" }],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    scale: "secondary",
    tag: "Language",
    summary:
      "Core language for DOM event manipulation, browser APIs, and asynchronous client communication across web projects.",
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: SiJavascript,
    relatedProjects: [
      { id: "umkm-i", title: "UMKM-i Web App" },
      { id: "absenku", title: "AbsenKu System" },
      { id: "portfolio", title: "Portfolio Website" },
    ],
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "Backend",
    scale: "secondary",
    tag: "Architecture",
    summary:
      "Standard JSON HTTP endpoints for client-server communication, resource routing, and structured status code handling.",
    docs: "https://restfulapi.net/",
    icon: Terminal,
    relatedProjects: [
      { id: "umkm-i", title: "UMKM-i Web App" },
      { id: "absenku", title: "AbsenKu System" },
    ],
  },
  {
    id: "git",
    name: "Git",
    category: "Tooling",
    scale: "secondary",
    tag: "Version Control",
    summary:
      "Source control for branch isolation, atomic commit history, non-destructive rebasing, and disciplined repository hygiene.",
    docs: "https://git-scm.com/doc",
    icon: SiGit,
    relatedProjects: [
      { id: "umkm-i", title: "UMKM-i Web App" },
      { id: "absenku", title: "AbsenKu System" },
      { id: "portfolio", title: "Portfolio Website" },
    ],
  },
  {
    id: "geofencing",
    name: "GPS Geofencing",
    category: "Tooling",
    scale: "secondary",
    tag: "Browser API",
    summary:
      "HTML5 Geolocation API integration in AbsenKu validating student coordinates against real campus radius boundaries.",
    docs: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API",
    icon: Cpu,
    relatedProjects: [{ id: "absenku", title: "AbsenKu Attendance System" }],
  },
  {
    id: "turbopack",
    name: "Turbopack",
    category: "Tooling",
    scale: "secondary",
    tag: "Bundler",
    summary:
      "Incremental Next.js bundler written in Rust, delivering sub-second hot module replacement and production asset builds.",
    docs: "https://turbo.build/pack",
    icon: SiNextdotjs,
    relatedProjects: [{ id: "portfolio", title: "Portfolio Website" }],
  },
];

const categories: TechCategory[] = ["All", "Frontend", "Backend", "Database", "Tooling"];

export default function ReimaginedSkills() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("All");
  const [selectedTechId, setSelectedTechId] = useState<string>("nextjs");

  const filteredTech = techItems.filter((item) =>
    activeCategory === "All" ? true : item.category === activeCategory
  );

  const selectedTech =
    filteredTech.find((t) => t.id === selectedTechId) ||
    filteredTech[0] ||
    techItems[0];

  const handleCategorySelect = (category: TechCategory) => {
    setActiveCategory(category);
    // If current selected tech is outside the newly filtered category, select the first match
    const matching = techItems.filter((t) =>
      category === "All" ? true : t.category === category
    );
    if (!matching.some((t) => t.id === selectedTechId) && matching.length > 0) {
      setSelectedTechId(matching[0].id);
    }
  };

  const filterProjects = (techName: string) => {
    window.dispatchEvent(
      new CustomEvent("filter-projects-by-tech", { detail: { tech: techName } })
    );
    const worksEl = document.getElementById("works");
    if (worksEl) worksEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 md:px-14 relative font-mono bg-background text-foreground scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Bold & Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b-[2.5px] border-border pb-6">
          <div>
            <span className="text-xs font-black text-muted-foreground uppercase tracking-widest block mb-2">
              Capabilities &amp; Stack
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-foreground tracking-tight leading-none">
              TECH <span className="bg-[#FFE500] text-[#171717] px-2.5 inline-block">STACK</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-sans text-muted-foreground max-w-md leading-relaxed">
            A typography-led index of technologies I build with. Select any name to inspect where and how it was implemented across my work.
          </p>
        </div>

        {/* Category Navigation Bar (Part 2) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b-2 border-border/40 text-xs">
          <span className="font-bold text-muted-foreground mr-1 hidden sm:inline">
            FILTER BY DOMAIN:
          </span>
          {categories.map((cat) => {
            const isCurrent = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3 py-1.5 font-black uppercase transition-all cursor-pointer border-2 ${
                  isCurrent
                    ? "bg-[#FFE500] text-[#171717] border-border shadow-neo-sm -translate-y-0.5"
                    : "bg-transparent text-muted-foreground border-transparent hover:border-border hover:text-foreground"
                }`}
                aria-pressed={isCurrent}
              >
                {`[${cat.toUpperCase()}]`}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Part 1: Technology Index (Oversized Typographic Arrangement) */}
          <div className="lg:col-span-7 flex flex-wrap items-baseline gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4">
            {filteredTech.map((item, index) => {
              const isSelected = item.id === selectedTech.id;

              // Typographic scale mappings based on architectural visual hierarchy
              const sizeClasses =
                item.scale === "lead"
                  ? "text-3xl sm:text-5xl md:text-6xl font-black tracking-tight"
                  : item.scale === "primary"
                  ? "text-2xl sm:text-3xl md:text-4xl font-black tracking-tight"
                  : "text-lg sm:text-xl md:text-2xl font-bold tracking-tight";

              return (
                <div key={item.id} className="inline-flex items-baseline gap-2">
                  <button
                    onClick={() => setSelectedTechId(item.id)}
                    className={`group text-left transition-all select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FFE500] ${sizeClasses} ${
                      isSelected
                        ? "bg-[#FFE500] text-[#171717] px-2.5 py-0.5 shadow-neo-sm scale-100"
                        : "text-foreground/75 hover:text-foreground hover:bg-[#FFE500]/30 px-1 py-0.5"
                    }`}
                    aria-selected={isSelected}
                    role="button"
                    tabIndex={0}
                  >
                    <span>{item.name}</span>
                    <span className="text-[10px] font-mono align-top ml-1 text-muted-foreground group-hover:text-foreground">
                      0{index + 1}
                    </span>
                  </button>

                  {/* Editorial separator slash */}
                  {index < filteredTech.length - 1 && (
                    <span className="text-muted-foreground/40 font-mono text-lg sm:text-2xl select-none">
                      /
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Part 3: Integrated Context Panel */}
          <div className="lg:col-span-5 border-[3px] border-border bg-card p-6 sm:p-8 shadow-neo-xl space-y-6">
            {/* Panel Top Meta */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-border text-xs font-black">
              <span className="bg-[#FFE500] text-[#171717] px-2 py-0.5 uppercase">
                {selectedTech.category} // {selectedTech.tag}
              </span>
              <span className="text-muted-foreground font-mono">
                SPEC 0{filteredTech.findIndex((t) => t.id === selectedTech.id) + 1}
              </span>
            </div>

            {/* Selected Technology Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <selectedTech.icon
                  size={32}
                  className="text-foreground shrink-0"
                />
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
                  {selectedTech.name}
                </h3>
              </div>
              <span className="text-xs font-bold text-muted-foreground uppercase">
                Role in Farhan&apos;s Applications
              </span>
            </div>

            {/* Plain Factual Description */}
            <div className="p-4 bg-background border-2 border-border shadow-neo-sm">
              <p className="text-xs sm:text-sm font-sans font-medium text-foreground/85 leading-relaxed">
                {selectedTech.summary}
              </p>
            </div>

            {/* Connected Projects */}
            <div className="space-y-2">
              <span className="text-xs font-black text-muted-foreground uppercase block">
                Projects Using {selectedTech.name}:
              </span>

              {selectedTech.relatedProjects.length === 0 ? (
                <p className="text-xs text-muted-foreground font-sans">
                  Used in general codebase tooling and developer workflow.
                </p>
              ) : (
                <div className="space-y-2">
                  {selectedTech.relatedProjects.map((p) => (
                    <a
                      key={p.id}
                      href={`/projects/${p.id}`}
                      className="flex items-center justify-between p-3 bg-secondary text-foreground border border-border text-xs font-bold hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm group"
                    >
                      <span className="group-hover:underline">{p.title}</span>
                      <ArrowUpRight size={14} className="shrink-0" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Context Actions */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={() => filterProjects(selectedTech.name)}
                className="neo-btn-yellow w-full flex items-center justify-center gap-2 text-xs font-black shadow-neo"
              >
                <span>Filter Projects for {selectedTech.name}</span>
                <ArrowUpRight size={14} />
              </button>

              <a
                href={selectedTech.docs}
                target="_blank"
                rel="noreferrer"
                className="neo-btn-white w-full flex items-center justify-center gap-2 text-xs font-bold shadow-neo-sm"
              >
                <span>Official Documentation</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
