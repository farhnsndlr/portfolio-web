"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Send,
  FileDown,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Globe2,
  Sparkles,
} from "lucide-react";

export default function ModernHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-32 pb-16 overflow-hidden bg-editorial-grid">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 border-b border-white/8 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#2D5BFF] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#2D5BFF] animate-pulse" />
              AVAILABLE FOR COLLABORATION
            </span>
            <span className="text-[#8A8D98] hidden sm:inline">•</span>
            <span className="text-[#8A8D98] hidden sm:inline">FARHAN SULTAN NADLIR</span>
          </div>

          <div className="flex items-center gap-4 text-[#8A8D98] text-[11px]">
            <span className="flex items-center gap-1">
              <Globe2 size={13} className="text-[#2D5BFF]" />
              INDONESIA [UTC+7 / WIB]
            </span>
            <span className="hidden md:inline">SYSTEM ARCHITECTURE</span>
          </div>
        </div>

        {/* Hero Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Expressive Headline & Intro (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#8A8D98] mb-6">
              <Sparkles size={13} className="text-[#2D5BFF]" />
              <span>SYSTEM INFORMATION STUDENT &amp; WEB ARCHITECT</span>
            </div>

            {/* Oversized Masked Typography */}
            <div className="space-y-1">
              <div className="mask-line-container">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black uppercase tracking-tight text-[#F5F5F7] leading-[0.88]"
                >
                  FARHAN
                </motion.h1>
              </div>

              <div className="mask-line-container">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black uppercase tracking-tight text-[#F5F5F7] leading-[0.88]"
                >
                  SULTAN
                </motion.h1>
              </div>

              <div className="mask-line-container">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black uppercase tracking-tight text-[#2D5BFF] leading-[0.88]"
                >
                  NADLIR.
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="mt-8 text-base sm:text-lg text-[#8A8D98] max-w-xl font-normal leading-relaxed"
            >
              I build modern, scalable digital solutions with clean architecture, performance optimization, and structured system design. Transforming ideas into reliable web applications with technical precision.
            </motion.p>

            {/* CTAs Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pt-8"
            >
              <button
                onClick={() => scrollTo("works")}
                className="btn-editorial-primary flex items-center gap-2"
              >
                <span>EXPLORE WORKS</span>
                <ArrowDownRight size={15} />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="btn-editorial-secondary flex items-center gap-2"
              >
                <span>GET IN TOUCH</span>
                <Send size={13} />
              </button>

              <a
                href="/CV_Farhan_Sultan_Nadlir.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-secondary flex items-center gap-2 text-xs"
              >
                <FileDown size={14} />
                <span>DOWNLOAD CV</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Architectural Metadata Card (4 Cols) */}
          <div className="lg:col-span-4 w-full flex flex-col gap-4">
            <div className="editorial-card p-6 rounded-2xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5 font-mono text-xs">
                <span className="text-[#8A8D98]">SPECIFICATION</span>
                <span className="text-[#2D5BFF] font-medium">INDEX 2026</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#8A8D98]">DISCIPLINE:</span>
                  <span className="text-[#F5F5F7] font-medium text-right">System Analysis &amp; Web</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#8A8D98]">FRAMEWORKS:</span>
                  <span className="text-[#F5F5F7] font-medium">Next.js 16 / React 19</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#8A8D98]">BACKEND:</span>
                  <span className="text-[#F5F5F7] font-medium">Laravel / MySQL</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#8A8D98]">ARCHITECTURE:</span>
                  <span className="text-[#2D5BFF] font-medium">Clean &amp; Modular</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Pills */}
            <div className="p-4 rounded-2xl bg-[#141518]/60 border border-white/5 flex items-center justify-between">
              <span className="font-mono text-xs text-[#8A8D98]">
                CHANNELS:
              </span>
              <div className="flex items-center gap-2">
                {[
                  {
                    icon: MessageCircle,
                    href: "https://wa.me/6281574029222",
                    label: "WhatsApp",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/farhnsndlr",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/farhansultan",
                    label: "LinkedIn",
                  },
                  {
                    icon: Instagram,
                    href: "https://instagram.com/farhnsndlr",
                    label: "Instagram",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    title={label}
                    className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:border-[#2D5BFF] hover:text-[#2D5BFF] flex items-center justify-center text-[#F5F5F7] transition-all"
                    aria-label={label}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section Transition Marquee Ticker */}
        <div className="mt-16 w-full overflow-hidden border-y border-white/5 py-3 text-xs font-mono select-none">
          <div className="editorial-ticker-track text-[#8A8D98]">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center whitespace-nowrap gap-8">
                <span className="text-[#F5F5F7]">FARHAN SULTAN NADLIR</span>
                <span>/</span>
                <span className="text-[#2D5BFF]">FULL-STACK WEB ARCHITECTURE</span>
                <span>/</span>
                <span>SYSTEM INFORMATION</span>
                <span>/</span>
                <span className="text-[#F5F5F7]">NEXT.JS 16 &amp; REACT 19</span>
                <span>/</span>
                <span>LARAVEL &amp; MYSQL MONOLITHS</span>
                <span>/</span>
                <span className="text-[#2D5BFF]">HIGH-PERFORMANCE MOTION</span>
                <span>/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
