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

const skillCategories = [
  {
    layer: "LAYER 01 // RUNTIME & FRONTEND",
    icon: Code2,
    accent: "text-[#C8FF00] border-[#C8FF00]",
    skills: [
      { name: "Next.js 16", icon: SiNextdotjs, color: "#F4F1E8", tag: "App Router" },
      { name: "React 19", icon: SiReact, color: "#61DAFB", tag: "Core UI" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", tag: "Strict Types" },
      { name: "Tailwind CSS v4", icon: SiTailwindcss, color: "#06B6D4", tag: "Engine" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", tag: "ESNext" },
    ],
  },
  {
    layer: "LAYER 02 // BACKEND & PERSISTENCE",
    icon: Database,
    accent: "text-[#FF3DCE] border-[#FF3DCE]",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20", tag: "MVC Monolith" },
      { name: "PHP Runtime", icon: SiPhp, color: "#777BB4", tag: "Backend" },
      { name: "MySQL", icon: SiMysql, color: "#00758F", tag: "Relational DB" },
      { name: "REST APIs", icon: Terminal, color: "#C8FF00", tag: "Endpoints" },
    ],
  },
  {
    layer: "LAYER 03 // ARCHITECTURE & TOOLING",
    icon: Cpu,
    accent: "text-[#38E8FF] border-[#38E8FF]",
    skills: [
      { name: "Git Versioning", icon: SiGit, color: "#F05032", tag: "VCS" },
      { name: "Turbopack", icon: SiNextdotjs, color: "#F4F1E8", tag: "Bundler" },
      { name: "GPS Geofencing", icon: Cpu, color: "#38E8FF", tag: "Hardware API" },
      { name: "Clean Architecture", icon: Terminal, color: "#C8FF00", tag: "Design Model" },
    ],
  },
];

export default function ChaosSkills() {
  return (
    <section id="system" className="py-24 px-4 sm:px-8 md:px-14 relative font-mono">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12 border-b-2 border-[#262626] pb-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 bg-[#38E8FF] text-[#0A0A0A] font-black uppercase">
              [04 // TECHNICAL_SYSTEM]
            </span>
            <span className="text-[#7E7E7E]">CAPABILITY &amp; DEPENDENCY MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#F4F1E8] tracking-tight">
            ENGINEERED <span className="text-[#C8FF00]">ARSENAL</span>
          </h2>
        </div>

        {/* Modular Tech Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.layer}
                className="border-2 border-[#262626] bg-[#141414] p-6 flex flex-col justify-between hover:border-[#C8FF00] transition-colors"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2 pb-3 mb-5 border-b border-[#262626]">
                    <CatIcon size={16} className="text-[#C8FF00]" />
                    <h3 className="font-black text-xs uppercase text-[#F4F1E8]">
                      {cat.layer}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-3 bg-[#0A0A0A] border border-[#262626] hover:border-[#FF3DCE] transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={18}
                              style={{ color: skill.color }}
                              className="shrink-0 group-hover:scale-110 transition-transform"
                            />
                            <span className="font-bold text-xs text-[#F4F1E8] group-hover:text-[#C8FF00] transition-colors">
                              {skill.name}
                            </span>
                          </div>

                          <span className="text-[10px] px-1.5 py-0.5 bg-[#141414] border border-[#262626] text-[#7E7E7E] group-hover:text-[#38E8FF] group-hover:border-[#38E8FF]">
                            {skill.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#262626] flex justify-between text-[10px] text-[#7E7E7E]">
                  <span>LAYER_STATUS: ACTIVE</span>
                  <span className="text-[#C8FF00]">PRODUCTION_READY</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
