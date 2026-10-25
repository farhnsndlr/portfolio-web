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

const skills = [
  { name: "Next.js 16", icon: SiNextdotjs, color: "#F3F4EF", tag: "FRONTEND" },
  { name: "React 19", icon: SiReact, color: "#61DAFB", tag: "FRONTEND" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", tag: "LANGUAGE" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", tag: "STYLING" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20", tag: "BACKEND" },
  { name: "PHP", icon: SiPhp, color: "#777BB4", tag: "BACKEND" },
  { name: "MySQL", icon: SiMysql, color: "#00758F", tag: "DATABASE" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", tag: "LANGUAGE" },
  { name: "Git", icon: SiGit, color: "#F05032", tag: "VERSIONING" },
];

export default function SkillsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const duplicated = [...skills, ...skills, ...skills];

  return (
    <div
      className="w-full overflow-hidden select-none py-2"
      role="region"
      aria-label="Technical skills registry"
    >
      <div className="relative flex justify-center w-full">
        <div className="w-full overflow-hidden">
          <div
            className={`marquee-tech-track flex w-max items-center py-2 gap-3 ${
              hoveredIndex !== null ? "paused" : ""
            }`}
          >
            {duplicated.map((skill, index) => {
              const Icon = skill.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-2.5 px-4 py-2 border transition-colors cursor-pointer font-mono text-xs ${
                    isHovered
                      ? "border-[#B8FF3B] bg-[#1F2621] text-[#B8FF3B]"
                      : "border-[#262D28] bg-[#141816] text-[#F3F4EF]"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Icon
                    className="text-base shrink-0 transition-transform duration-200"
                    style={{
                      color: isHovered ? "#B8FF3B" : skill.color,
                      transform: isHovered ? "scale(1.15)" : "scale(1)",
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="font-bold uppercase tracking-wider">
                      {skill.name}
                    </span>
                    <span className="text-[9px] text-[#777D76]">
                      [{skill.tag}]
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
