"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import TextType from "@/components/ui/TextType";
import { Github, Linkedin, Instagram } from "lucide-react";
import { PressLink } from "@/components/ui/PressButton";

const LaptopModel = dynamic(() => import("@/components/ui/LaptopModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="h-screen flex items-center px-6 md:px-16"
      style={{ marginTop: "-150px" }}
    >
      <motion.div
        style={{ y, opacity }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full pt-16 md:pt-0"
      >
        {/* LEFT */}
        <motion.div
          className="flex flex-col justify-center space-y-5 md:space-y-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="text-foreground/70 uppercase tracking-widest text-sm"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground"
          >
            Farhan Sultan
            <br />
            Nadlir
          </motion.h1>
          <motion.div variants={item}>
            <TextType
              text={["Web Developer."]}
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              className="text-lg md:text-2xl text-foreground/80 font-medium"
            />
          </motion.div>
          <motion.div
            variants={item}
            className="flex gap-4 text-foreground/60 pt-1"
          >
            <PressLink href="https://github.com/farhnsndlr/" target="_blank">
              <Github size={20} className="hover:text-foreground transition" />
            </PressLink>
            <PressLink
              href="https://linkedin.com/in/farhansultan/"
              target="_blank"
            >
              <Linkedin
                size={20}
                className="hover:text-foreground transition"
              />
            </PressLink>
            <PressLink href="https://instagram.com/farhnsndlr/" target="_blank">
              <Instagram
                size={20}
                className="hover:text-foreground transition"
              />
            </PressLink>
          </motion.div>
          <motion.p
            variants={item}
            className="text-foreground/60 max-w-lg text-sm md:text-base"
          >
            I build modern and scalable web applications with performance and
            clean architecture in mind.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <PressLink
              href="#projects"
              className="px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-foreground text-background font-medium hover:opacity-80 transition text-sm md:text-base"
            >
              View Projects
            </PressLink>
            <PressLink
              href="#contact"
              className="px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-foreground/30 hover:bg-foreground/10 transition text-foreground text-sm md:text-base"
            >
              Contact Me
            </PressLink>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hidden sm:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <LaptopModel />
        </motion.div>
      </motion.div>
    </section>
  );
}
