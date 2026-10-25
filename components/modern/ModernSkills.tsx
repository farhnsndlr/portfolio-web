"use client";

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
import { Terminal, Database, Code2, Cpu } from "lucide-react";

const skillClusters = [
  {
    category: "01 / CLIENT-SIDE RUNTIME",
    icon: Code2,
    description: "Component systems, state machines, and performant web interfaces.",
    skills: [
      { name: "Next.js 16", icon: SiNextdotjs, tag: "App Router / Turbopack" },
      { name: "React 19", icon: SiReact, tag: "Concurrent Core" },
      { name: "TypeScript", icon: SiTypescript, tag: "Strict Static Typing" },
      { name: "Tailwind CSS v4", icon: SiTailwindcss, tag: "Utility Engine" },
      { name: "JavaScript", icon: SiJavascript, tag: "Modern ESNext" },
    ],
  },
  {
    category: "02 / SERVER & DATA PERSISTENCE",
    icon: Database,
    description: "Relational modeling, robust backend APIs, and monolithic architectures.",
    skills: [
      { name: "Laravel", icon: SiLaravel, tag: "MVC Architecture" },
      { name: "PHP Runtime", icon: SiPhp, tag: "Backend Services" },
      { name: "MySQL", icon: SiMysql, tag: "Relational Schemas" },
      { name: "RESTful APIs", icon: Terminal, tag: "Clean Endpoints" },
    ],
  },
  {
    category: "03 / SYSTEM DESIGN & WORKFLOW",
    icon: Cpu,
    description: "Version control, automated pipelines, and hardware browser APIs.",
    skills: [
      { name: "Git Versioning", icon: SiGit, tag: "Source Control" },
      { name: "GPS Geofencing", icon: Cpu, tag: "Browser Location API" },
      { name: "Clean Architecture", icon: Terminal, tag: "Modular Structure" },
      { name: "System Analysis", icon: Code2, tag: "Database Modeling" },
    ],
  },
];

export default function ModernSkills() {
  return (
    <section id="expertise" className="py-28 px-4 sm:px-8 md:px-14 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-white/8 pb-6 font-mono text-xs">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2D5BFF]" />
              <span className="text-[#8A8D98] uppercase tracking-wider">[04] TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F5F7]">
              EXPERTISE &amp; <span className="text-[#2D5BFF]">SYSTEMS</span>
            </h2>
          </div>

          <div className="text-[#8A8D98]">
            VERIFIED TECHNOLOGY STACK
          </div>
        </div>

        {/* 3-Column Editorial Clusters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {skillClusters.map((cluster) => {
            const ClusterIcon = cluster.icon;
            return (
              <div
                key={cluster.category}
                className="editorial-card rounded-3xl p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Cluster Header */}
                  <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/5 font-mono text-xs">
                    <ClusterIcon size={16} className="text-[#2D5BFF]" />
                    <h3 className="font-medium text-[#F5F5F7]">
                      {cluster.category}
                    </h3>
                  </div>

                  <p className="text-xs text-[#8A8D98] font-sans mb-6 leading-relaxed">
                    {cluster.description}
                  </p>

                  {/* Skills Rows */}
                  <div className="space-y-3">
                    {cluster.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={18}
                              className="text-[#8A8D98] group-hover:text-[#2D5BFF] transition-colors shrink-0"
                            />
                            <span className="font-medium text-xs text-[#F5F5F7] group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>

                          <span className="text-[10px] font-mono text-[#8A8D98]">
                            {skill.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex justify-between font-mono text-[11px] text-[#8A8D98]">
                  <span>LAYER STATUS</span>
                  <span className="text-[#2D5BFF]">PRODUCTION TESTED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
