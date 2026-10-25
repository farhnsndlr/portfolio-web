"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { projects, techIcons } from "@/data/projects";
import { ArrowUpRight, Github, LayoutGrid, Network, Cpu, Code2, Eye } from "lucide-react";

interface NodePosition {
  x: number; // percentage in SVG viewBox
  y: number;
  label: string;
}

const nodePositions: Record<string, NodePosition> = {
  "umkm-i": { x: 22, y: 35, label: "NODE_ALPHA" },
  "absenku": { x: 75, y: 30, label: "NODE_BETA" },
  "portfolio": { x: 48, y: 72, label: "NODE_GAMMA" },
};

export default function ProjectConstellation() {
  const [activeProjectId, setActiveProjectId] = useState<string>("umkm-i");
  const [viewMode, setViewMode] = useState<"constellation" | "grid">("constellation");
  const router = useRouter();

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section id="constellation" className="py-20 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 bg-[#B8FF3B] text-[#111312] font-mono text-[11px] font-bold tracking-wider">
                NODE_GRAPH // V2.0
              </span>
              <span className="font-mono text-xs text-[#777D76] uppercase">
                PRODUCTION REPOSITORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F3F4EF]">
              PROJECT <span className="text-[#B8FF3B]">CONSTELLATION</span>
            </h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-[#181C1A] border border-[#262D28] self-start sm:self-auto font-mono text-xs">
            <button
              onClick={() => setViewMode("constellation")}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors cursor-pointer ${
                viewMode === "constellation"
                  ? "bg-[#B8FF3B] text-[#111312] font-bold"
                  : "text-[#777D76] hover:text-[#F3F4EF]"
              }`}
              aria-label="Switch to Constellation graph view"
            >
              <Network size={14} />
              <span className="hidden sm:inline">CONSTELLATION</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#B8FF3B] text-[#111312] font-bold"
                  : "text-[#777D76] hover:text-[#F3F4EF]"
              }`}
              aria-label="Switch to System grid view"
            >
              <LayoutGrid size={14} />
              <span className="hidden sm:inline">SYSTEM GRID</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Interactive SVG Constellation Network */}
        {viewMode === "constellation" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* SVG Interactive Canvas (7 Cols) */}
            <div className="lg:col-span-7 border border-[#262D28] bg-[#141816] bg-blueprint p-4 sm:p-6 relative min-h-[360px] sm:min-h-[460px] flex flex-col justify-between overflow-hidden">
              {/* Corner Telemetry Tags */}
              <div className="flex justify-between items-center text-[10px] font-mono text-[#777D76] select-none">
                <span>COORD // (LAT.00, LON.00)</span>
                <span className="text-[#B8FF3B] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF3B] animate-ping" />
                  NETWORK ACTIVE [3 NODES]
                </span>
              </div>

              {/* The SVG Network Diagram */}
              <div className="relative w-full h-[280px] sm:h-[350px] my-auto">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full overflow-visible select-none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B8FF3B" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#777D76" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#B8FF3B" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Network Lines */}
                  <line
                    x1={nodePositions["umkm-i"].x}
                    y1={nodePositions["umkm-i"].y}
                    x2={nodePositions["absenku"].x}
                    y2={nodePositions["absenku"].y}
                    stroke="url(#lineGrad)"
                    strokeWidth="0.6"
                    strokeDasharray="2, 2"
                  />
                  <line
                    x1={nodePositions["absenku"].x}
                    y1={nodePositions["absenku"].y}
                    x2={nodePositions["portfolio"].x}
                    y2={nodePositions["portfolio"].y}
                    stroke="url(#lineGrad)"
                    strokeWidth="0.6"
                    strokeDasharray="2, 2"
                  />
                  <line
                    x1={nodePositions["portfolio"].x}
                    y1={nodePositions["portfolio"].y}
                    x2={nodePositions["umkm-i"].x}
                    y2={nodePositions["umkm-i"].y}
                    stroke="url(#lineGrad)"
                    strokeWidth="0.6"
                    strokeDasharray="2, 2"
                  />

                  {/* Center Signal Hub */}
                  <circle cx="48" cy="46" r="3" fill="#181C1A" stroke="#B8FF3B" strokeWidth="0.5" />
                  <circle cx="48" cy="46" r="1" fill="#B8FF3B" className="pulse-laser" />
                  <text
                    x="48"
                    y="53"
                    textAnchor="middle"
                    fill="#777D76"
                    fontSize="3"
                    fontFamily="monospace"
                  >
                    CORE_RUNTIME
                  </text>
                </svg>

                {/* Interactive Node Anchors (HTML Overlay for Touch/Keyboard Reliability) */}
                {projects.map((project) => {
                  const pos = nodePositions[project.id];
                  const isActive = project.id === activeProjectId;

                  return (
                    <button
                      key={project.id}
                      onClick={() => setActiveProjectId(project.id)}
                      onMouseEnter={() => setActiveProjectId(project.id)}
                      onFocus={() => setActiveProjectId(project.id)}
                      style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      className={`absolute z-10 flex flex-col items-center p-2 rounded-sm transition-transform cursor-pointer outline-none ${
                        isActive ? "scale-110" : "hover:scale-105 opacity-80"
                      }`}
                      aria-label={`Inspect ${project.title}`}
                    >
                      {/* Node Icon Circle */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                          isActive
                            ? "border-[#B8FF3B] bg-[#111312] text-[#B8FF3B] shadow-[0_0_20px_rgba(184,255,59,0.5)]"
                            : "border-[#777D76] bg-[#181C1A] text-[#F3F4EF]"
                        }`}
                      >
                        <Cpu size={18} />
                      </div>

                      {/* Node Label Chip */}
                      <div
                        className={`mt-1.5 px-2 py-0.5 font-mono text-[10px] font-bold uppercase transition-colors ${
                          isActive
                            ? "bg-[#B8FF3B] text-[#111312]"
                            : "bg-[#181C1A] text-[#F3F4EF] border border-[#262D28]"
                        }`}
                      >
                        <span className="opacity-70 mr-1">[{pos.label}]</span>
                        <span>{project.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Instructions */}
              <div className="flex justify-between items-center text-[10px] font-mono text-[#777D76]">
                <span>SELECT ANY NODE TO INSPECT TELEMETRY</span>
                <span>SYSTEM STACK: 3 MODULES</span>
              </div>
            </div>

            {/* Live Node Telemetry Card (5 Cols) */}
            <div className="lg:col-span-5 border border-[#262D28] bg-[#181C1A] p-6 flex flex-col justify-between relative overflow-hidden">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262D28] font-mono text-xs">
                  <span className="text-[#B8FF3B] font-bold">
                    [INSPECTOR // {activeProject.id.toUpperCase()}]
                  </span>
                  <span className="text-[#777D76]">
                    YEAR // {activeProject.year}
                  </span>
                </div>

                {/* Project Image Preview */}
                <div
                  onClick={() => router.push(`/projects/${activeProject.id}`)}
                  className="relative w-full aspect-video border border-[#262D28] bg-[#111312] overflow-hidden mb-4 group cursor-pointer"
                >
                  <img
                    src={activeProject.heroImage}
                    alt={activeProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111312] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#B8FF3B] text-[#111312] font-mono text-[10px] font-bold uppercase">
                    {activeProject.category}
                  </div>
                  <div className="absolute top-2 right-2 p-1.5 bg-[#111312] text-[#B8FF3B] border border-[#B8FF3B]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye size={14} />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-black uppercase text-[#F3F4EF] tracking-tight">
                  {activeProject.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-medium text-[#777D76] leading-relaxed">
                  {activeProject.shortDesc}
                </p>

                {/* Deployed Stack */}
                <div className="mt-4 pt-3 border-t border-[#262D28]">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#777D76] font-bold uppercase mb-2">
                    <Code2 size={12} className="text-[#B8FF3B]" />
                    <span>DEPLOYED TECHNOLOGIES:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => {
                      const iconUrl = techIcons[tech.name];
                      return (
                        <span
                          key={tech.name}
                          className="flex items-center gap-1 px-2 py-0.5 bg-[#141816] border border-[#262D28] text-[10px] font-mono text-[#F3F4EF]"
                        >
                          {iconUrl && (
                            <img src={iconUrl} alt={tech.name} className="w-3 h-3 object-contain" />
                          )}
                          <span>{tech.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-6 mt-6 border-t border-[#262D28]">
                <button
                  onClick={() => router.push(`/projects/${activeProject.id}`)}
                  className="btn-laser flex-1 flex items-center justify-center gap-1.5"
                >
                  <span>LAUNCH CASE AUTOPSY</span>
                  <ArrowUpRight size={14} />
                </button>
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 border border-[#262D28] bg-[#141816] text-[#F3F4EF] hover:border-[#B8FF3B] hover:text-[#B8FF3B] transition-colors"
                  title="Source Repository on GitHub"
                  aria-label="View on GitHub"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: System Grid (Fallback List / Accessible Grid) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="border border-[#262D28] bg-[#181C1A] p-5 flex flex-col justify-between hover:border-[#B8FF3B] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#777D76] mb-3">
                    <span className="text-[#B8FF3B]">NODE_0{i + 1}</span>
                    <span>{project.year}</span>
                  </div>

                  <div
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="relative w-full aspect-video border border-[#262D28] bg-[#111312] overflow-hidden mb-3 cursor-pointer"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-xl font-bold uppercase text-[#F3F4EF]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#777D76] line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 mt-4 border-t border-[#262D28]">
                  <button
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="btn-laser flex-1 py-2 text-[11px]"
                  >
                    EXPLORE AUTOPSY
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border border-[#262D28] text-[#777D76] hover:text-[#B8FF3B]"
                    aria-label="GitHub Repository"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
