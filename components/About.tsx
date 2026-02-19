"use client";
import SkillsCarousel from "@/components/ui/SkillsCarousel";
import { PressButton } from "@/components/ui/PressButton";
import HoloCard from "@/components/ui/HoloCard";

export default function About() {
  return (
    <section id="about" className="pt-24 md:pt-40 pb-24 px-6 md:px-16">
      <div className="w-full max-w-6xl mx-auto backdrop-blur-xl bg-foreground/5 border border-foreground/10 rounded-3xl p-6 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* LEFT - HOLO CARD */}
        <div className="flex items-center justify-center">
          <HoloCard
            avatarUrl="/avatar.png"
            name="Farhan Sultan Nadlir"
            title="Web Developer"
          />
        </div>

        {/* RIGHT - TEXT */}
        <div className="flex flex-col justify-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
            I'm Farhan Sultan Nadlir, a System Information student passionate
            about building modern and scalable digital solutions. I focus on
            clean architecture, performance optimization, and structured system
            design.
          </p>
          <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
            With a strong background in system analysis and development, I enjoy
            transforming ideas into reliable applications that balance usability
            and technical precision.
          </p>
          <div className="pt-2">
            <PressButton
              onClick={() => window.open("/CV_Farhan_Sultan_Nadlir.pdf", "_blank")}
              className="px-6 py-3 rounded-full border border-foreground/30 hover:bg-foreground/10 transition text-foreground cursor-pointer text-sm md:text-base"
            >
              Download CV
            </PressButton>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="mt-12 md:mt-16">
        <div className="flex flex-col items-center gap-3 mb-4">
          <p className="text-foreground/40 uppercase tracking-[0.3em] text-xs">
            Tech Stack
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Skills & Tools
          </h2>
          <div className="w-12 h-[2px] bg-foreground/20 rounded-full" />
        </div>
        <SkillsCarousel />
      </div>
    </section>
  );
}
