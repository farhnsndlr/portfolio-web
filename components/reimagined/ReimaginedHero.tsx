"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  FileDown,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function ReimaginedHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-28 pb-16 overflow-hidden font-mono bg-background text-foreground">
      <div className="max-w-7xl mx-auto w-full">
        {/* Massive Typographic Headline */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-[#FFE500] text-[#171717] font-black text-xs uppercase border-2 border-border shadow-neo-sm mb-4">
            Information Systems Student &amp; Web Developer
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black uppercase tracking-tight leading-[0.88] text-foreground"
          >
            FARHAN SULTAN <br />
            <span className="bg-[#FFE500] text-[#171717] px-2 inline-block mt-1">NADLIR.</span>
          </motion.h1>
        </div>

        {/* Asymmetrical 2-Column Split: Human Intro + Graphic Portrait Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Natural Bio & Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg md:text-xl font-sans font-medium text-foreground/85 leading-relaxed max-w-2xl">
              I design and build full-stack web applications, mostly with Next.js, React, TypeScript, and Laravel. I care about solid system architecture, clean relational databases, and snappy user interfaces.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollTo("works")}
                className="neo-btn-yellow flex items-center gap-2 text-xs font-black shadow-neo"
              >
                <span>View Projects</span>
                <ArrowDown size={15} />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="neo-btn-black flex items-center gap-2 text-xs font-black shadow-neo"
              >
                <span>Contact Me</span>
                <ArrowUpRight size={15} />
              </button>

              <a
                href="/CV_Farhan_Sultan_Nadlir.pdf"
                target="_blank"
                rel="noreferrer"
                className="neo-btn-white flex items-center gap-2 text-xs font-bold shadow-neo"
              >
                <FileDown size={14} />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Direct Human Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4 text-xs font-bold text-muted-foreground">
              <span>Find me on:</span>
              <a
                href="https://github.com/farhnsndlr"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 bg-card border border-border text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm flex items-center gap-1.5"
              >
                <Github size={13} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/farhansultan"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 bg-card border border-border text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm flex items-center gap-1.5"
              >
                <Linkedin size={13} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/6285155399057"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 bg-card border border-border text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm flex items-center gap-1.5"
              >
                <MessageCircle size={13} />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/farhnsndlr"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 bg-card border border-border text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm flex items-center gap-1.5"
              >
                <Instagram size={13} />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait Anchor (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start lg:items-end">
            <div className="relative">
              {/* Graphic Yellow Backdrop Slab */}
              <div className="absolute -inset-3 bg-[#FFE500] border-[3px] border-border shadow-neo-xl rotate-2" />

              {/* Real Portrait Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 border-[3.5px] border-border bg-card overflow-hidden p-1 shadow-neo-lg -rotate-1 hover:rotate-0 transition-transform">
                <img
                  src="/avatar.png"
                  alt="Farhan Sultan Nadlir"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-[#171717] text-[#FFE500] text-[10px] font-black border border-white flex items-center gap-1.5">
                  <MapPin size={11} />
                  <span>INDONESIA [UTC+7]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
