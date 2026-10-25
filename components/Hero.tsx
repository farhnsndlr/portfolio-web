"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import TextType from "@/components/ui/TextType";
import { Github, Linkedin, Instagram, ArrowDownRight, ArrowUpRight, Terminal } from "lucide-react";

const LaptopModel = dynamic(() => import("@/components/ui/LaptopModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[350px] flex flex-col items-center justify-center gap-3 bg-[#E5DDCB] dark:bg-[#1A1A1A] border-2 border-[#171717] dark:border-[#FFE500]">
      <div className="w-10 h-10 border-[3px] border-[#171717] dark:border-[#FFE500] border-t-transparent rounded-full animate-spin" />
      <span className="font-mono text-xs font-black uppercase tracking-widest text-[#171717] dark:text-[#FFE500]">
        INITIALIZING 3D CANVAS
      </span>
    </div>
  ),
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, skewY: 1.5 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-8 md:px-14 pt-24 md:pt-32 pb-16 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* LEFT COLUMN: HERO EDITORIAL CONTENT (7 Cols) */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge Pills */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFE500] text-[#171717] border-2 border-[#171717] font-mono text-xs font-extrabold uppercase tracking-wider shadow-brutal-sm">
              <span className="w-2.5 h-2.5 bg-[#00D26A] border border-[#171717] rounded-full animate-pulse" />
              SYSTEM.STATUS // ONLINE
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-gray-200 border-2 border-[#171717] dark:border-[#FFE500] font-mono text-xs font-bold uppercase tracking-wider shadow-brutal-sm">
              INDONESIA [UTC+7]
            </span>
          </motion.div>

          {/* Main Giant Headline */}
          <motion.div variants={item} className="w-full">
            <p className="font-mono text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#171717]/60 dark:text-[#FFE500]/70 mb-1">
              HELLO WORLD, I AM
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#171717] dark:text-white leading-[0.88] select-none">
              FARHAN
              <br />
              SULTAN
              <br />
              <span className="text-[#171717] dark:text-[#FFE500] underline decoration-[#FFE500] dark:decoration-white decoration-wavy decoration-4 underline-offset-8">
                NADLIR
              </span>
            </h1>
          </motion.div>

          {/* Subtitle with Typewriter */}
          <motion.div
            variants={item}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1A1A1A] border-2 border-[#171717] dark:border-[#FFE500] shadow-brutal-sm w-full sm:w-auto"
          >
            <Terminal size={18} className="text-[#171717] dark:text-[#FFE500] shrink-0" />
            <TextType
              text={[
                "Web Developer.",
                "System Information Student.",
                "Full-Stack Solution Architect.",
                "Clean Code Enthusiast.",
              ]}
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={1600}
              showCursor
              cursorCharacter="█"
              className="font-mono text-sm sm:text-base font-extrabold text-[#171717] dark:text-[#FFE500]"
            />
          </motion.div>

          {/* Bio statement */}
          <motion.p
            variants={item}
            className="text-sm sm:text-base font-medium text-[#171717]/80 dark:text-gray-300 max-w-xl leading-relaxed"
          >
            Passionate about building scalable digital solutions with clean
            architecture, performance optimization, and structured system
            design. Bridging reliable backend engineering with expressive,
            high-fidelity frontend interfaces.
          </motion.p>

          {/* Social Icons Bar */}
          <motion.div variants={item} className="flex items-center gap-3">
            {[
              {
                icon: Github,
                href: "https://github.com/farhnsndlr/",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/farhansultan/",
                label: "LinkedIn",
              },
              {
                icon: Instagram,
                href: "https://instagram.com/farhnsndlr/",
                label: "Instagram",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border-2 border-[#171717] dark:border-[#FFE500] bg-white dark:bg-[#1A1A1A] text-[#171717] dark:text-[#FFE500] shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal hover:bg-[#FFE500] hover:text-[#171717] dark:hover:bg-[#FFE500] dark:hover:text-[#171717] transition-all cursor-pointer"
                aria-label={`Visit Farhan's ${label}`}
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="font-mono text-[11px] text-[#171717]/50 dark:text-gray-400 font-bold ml-1">
              // CONNECT
            </span>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="neo-btn px-6 py-3.5 bg-[#FFE500] text-[#171717] text-sm sm:text-base font-black shadow-brutal border-2 border-[#171717] flex items-center gap-2"
            >
              <span>EXPLORE WORK</span>
              <ArrowDownRight size={18} strokeWidth={2.5} />
            </a>

            <a
              href="#contact"
              className="neo-btn px-6 py-3.5 bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-[#FFE500] text-sm sm:text-base font-black shadow-brutal border-2 border-[#171717] dark:border-[#FFE500] flex items-center gap-2"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: 3D LAPTOP CANVAS VIEWPORT (5 Cols) */}
        <motion.div
          className="lg:col-span-5 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full max-w-lg border-[3px] border-[#171717] dark:border-[#FFE500] bg-white dark:bg-[#181818] shadow-brutal-xl overflow-hidden relative">
            {/* Viewport Window Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#FFE500] dark:bg-[#202020] border-b-2 border-[#171717] dark:border-[#FFE500] select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF4B4B] border border-[#171717]" />
                <span className="w-3 h-3 rounded-full bg-[#FFE500] border border-[#171717]" />
                <span className="w-3 h-3 rounded-full bg-[#00D26A] border border-[#171717]" />
              </div>
              <span className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#171717] dark:text-[#FFE500]">
                DEVICE_VIEWPORT // 3D_RENDER
              </span>
              <span className="font-mono text-[10px] font-bold text-[#171717]/60 dark:text-gray-400">
                [LIVE]
              </span>
            </div>

            {/* Canvas Container */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-[#F5F0E6] dark:bg-[#121212] bg-grid-dots">
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-[10px] text-[#171717]/40 dark:text-[#FFE500]/50 select-none pointer-events-none">
                + (0,0)
              </div>
              <div className="absolute top-2 right-2 font-mono text-[10px] text-[#171717]/40 dark:text-[#FFE500]/50 select-none pointer-events-none">
                GRID.4X +
              </div>
              <div className="absolute bottom-2 left-2 font-mono text-[10px] text-[#171717]/40 dark:text-[#FFE500]/50 select-none pointer-events-none">
                DRAG TO ROTATE
              </div>
              <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[#171717]/40 dark:text-[#FFE500]/50 select-none pointer-events-none">
                OBJ: LAPTOP.GLB
              </div>

              <LaptopModel />
            </div>

            {/* Bottom status strip */}
            <div className="px-3 py-1.5 bg-white dark:bg-[#1A1A1A] border-t-2 border-[#171717] dark:border-[#FFE500] flex items-center justify-between font-mono text-[10px] text-[#171717]/70 dark:text-gray-300 font-bold">
              <span>INTERACTIVE WEBGL</span>
              <span className="text-[#171717] dark:text-[#FFE500]">60 FPS</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
