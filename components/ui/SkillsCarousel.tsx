"use client";
import { useState } from "react";
import {
  SiLaravel,
  SiPhp,
  SiMysql,
  SiGit,
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiLinux,
  SiDocker,
} from "react-icons/si";

export default function SkillsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "MySQL", icon: SiMysql, color: "#00758F" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
  ];

  const duplicated = [...skills, ...skills];

  return (
    <section className="py-10 overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative flex justify-center">
        <div className="relative overflow-hidden w-full max-w-5xl px-14 py-5 rounded-full border border-foreground/10 backdrop-blur-2xl bg-foreground/5">
          <div
            className={`marquee-track flex w-max items-center ${
              hoveredIndex !== null ? "paused" : ""
            }`}
          >
            {duplicated.map((skill, index) => {
              const Icon = skill.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="mx-10 flex items-center gap-3 transition-all duration-300 cursor-default select-none"
                  style={{
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    color: isHovered
                      ? skill.color
                      : "color-mix(in oklch, currentColor 50%, transparent)",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Icon
                    className="text-xl transition-all duration-300"
                    style={{ color: "inherit" }}
                  />
                  <span className="text-lg font-medium transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
