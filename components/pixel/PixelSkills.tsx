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
import { Sparkles, Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "FRONTEND FRAMEWORKS",
    icon: Code2,
    skills: [
      { name: "Next.js 16", icon: SiNextdotjs, color: "#1D241E", tag: "App Router" },
      { name: "React 19", icon: SiReact, color: "#61DAFB", tag: "Core UI" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", tag: "Strict Types" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", tag: "Styling" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", tag: "ESNext" },
    ],
  },
  {
    title: "BACKEND & ARCHITECTURE",
    icon: Database,
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20", tag: "MVC Monolith" },
      { name: "PHP Runtime", icon: SiPhp, color: "#777BB4", tag: "Backend" },
      { name: "MySQL", icon: SiMysql, color: "#00758F", tag: "Relational DB" },
    ],
  },
  {
    title: "ENGINEERING TOOLCHAIN",
    icon: Wrench,
    skills: [
      { name: "Git Versioning", icon: SiGit, color: "#F05032", tag: "VCS" },
      { name: "Turbopack", icon: SiNextdotjs, color: "#1D241E", tag: "Bundler" },
      { name: "Clean Architecture", icon: Sparkles, color: "#F2C94C", tag: "System Design" },
    ],
  },
];

export default function PixelSkills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-8 md:px-14 relative font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-1.5 mb-10 border-b-2 border-[#1E3F31] pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-[#F2C94C] text-[#242B25] text-xs font-black uppercase tracking-wider border-2 border-[#242B25]">
              [03 // BADGE CASE]
            </span>
            <span className="text-xs text-[#A6CDBA] uppercase">
              TECHNICAL ARSENAL
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#F7F1D5] tracking-tight">
            SKILLS &amp; <span className="text-[#F2C94C]">TECHNOLOGIES</span>
          </h2>
        </div>

        {/* Inventory Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div
                key={category.title}
                className="pixel-card p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2 pb-3 mb-4 border-b-2 border-[#242B25]">
                    <CatIcon size={16} className="text-[#285943]" />
                    <h3 className="font-black text-xs uppercase text-[#242B25]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Items */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 bg-[#EAE0BC] border-2 border-[#242B25] hover:bg-[#F2C94C] transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon
                              size={18}
                              style={{ color: skill.color }}
                              className="shrink-0"
                            />
                            <span className="font-bold text-xs text-[#242B25]">
                              {skill.name}
                            </span>
                          </div>

                          <span className="text-[10px] px-1.5 py-0.5 bg-[#285943] text-[#F7F1D5] font-black border border-[#242B25]">
                            {skill.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D8CEAB] text-[10px] text-[#5A635B] flex justify-between">
                  <span>CAPACITY: VERIFIED</span>
                  <span className="text-[#285943] font-bold">READY</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
