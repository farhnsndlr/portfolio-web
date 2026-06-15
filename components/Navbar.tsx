"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClickSpark from "@/components/ui/ClickSpark";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import { useScrollTransition } from "@/hooks/useScrollTransition";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useScrollTransition();

  useEffect(() => {
    const sectionIds = ["about", "projects", "contact"];
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }
      let current = "",
        minDistance = Infinity;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 3);
        if (rect.top <= window.innerHeight / 2 && distance < minDistance) {
          minDistance = distance;
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeIndex = navLinks.findIndex((l) => l.id === activeSection);
    if (activeIndex === -1 || !navRef.current) {
      setUnderlineStyle({ left: 0, width: 0 });
      return;
    }
    const linkEl = linkRefs.current[activeIndex];
    const navEl = navRef.current;
    if (!linkEl) return;
    const navRect = navEl.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();
    setUnderlineStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
    });
  }, [activeSection]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMobileNav = (id: string) => {
    setSidebarOpen(false);
    setTimeout(() => scrollTo(id), 300);
  };

  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2
          backdrop-blur-md bg-background/80
          border border-border
          px-8 py-3 rounded-full
          hidden md:flex items-center gap-16
          w-auto z-50"
      >
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="font-bold tracking-[0.25em] text-sm text-foreground"
        >
          <ClickSpark>
            <motion.a
              href="/"
              whileTap={{ scale: 0.93 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="block"
            >
              NADLR
            </motion.a>
          </ClickSpark>
        </motion.span>

        <div
          ref={navRef}
          className="relative flex items-center gap-8 text-sm tracking-widest text-foreground"
        >
          {navLinks.map(({ label, id }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35 + i * 0.08,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <ClickSpark>
                <motion.button
                  ref={(el) => {
                    linkRefs.current[i] = el;
                  }}
                  onClick={() => scrollTo(id)}
                  whileTap={{ scale: 0.93 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="relative transition-colors duration-300 cursor-pointer bg-transparent border-none px-0 py-0"
                  style={{
                    color:
                      activeSection === id
                        ? "var(--foreground)"
                        : hoveredIndex === i
                          ? "color-mix(in oklch, var(--foreground) 80%, transparent)"
                          : "color-mix(in oklch, var(--foreground) 50%, transparent)",
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.span
                    className="absolute inset-0 -mx-3 -my-1 rounded-full bg-foreground/8 blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0,
                      scale: hoveredIndex === i ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="relative">{label}</span>
                </motion.button>
              </ClickSpark>
            </motion.div>
          ))}
          <motion.span
            className="absolute -bottom-1 h-[1.5px] bg-foreground rounded-full"
            animate={{
              left: underlineStyle.left,
              width: activeSection ? underlineStyle.width : 0,
              opacity: activeSection ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
        >
          <DarkModeToggle />
        </motion.div>
      </motion.nav>

      {/* ── MOBILE TOPBAR ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-5 py-4 backdrop-blur-md bg-background/80 border-b border-border"
      >
        <a
          href="/"
          className="font-bold tracking-[0.25em] text-sm text-foreground"
        >
          NADLR
        </a>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <motion.button
            onClick={() => setSidebarOpen(true)}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-foreground/15 text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-all cursor-pointer"
          >
            <Menu size={16} />
          </motion.button>
        </div>
      </motion.div>

      {/* ── MOBILE SIDEBAR ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar panel */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-70 w-72 bg-background border-l border-foreground/10 flex flex-col md:hidden"
            >
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-foreground/10">
                <span className="font-bold tracking-[0.25em] text-sm text-foreground">
                  NADLR
                </span>
                <motion.button
                  onClick={() => setSidebarOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-foreground/15 text-foreground/60 hover:text-foreground transition-all cursor-pointer"
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map(({ label, id }, i) => (
                  <motion.button
                    key={id}
                    onClick={() => handleMobileNav(id)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.07,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="flex items-center justify-between px-4 py-4 rounded-xl text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-300 cursor-pointer group bg-transparent border-none text-left w-full"
                    style={{
                      color:
                        activeSection === id
                          ? "var(--foreground)"
                          : undefined,
                      background:
                        activeSection === id
                          ? "color-mix(in oklch, var(--foreground) 6%, transparent)"
                          : undefined,
                    }}
                  >
                    <span className="text-sm tracking-widest uppercase">
                      {label}
                    </span>
                    {activeSection === id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Footer */}
              <div className="px-6 py-5 border-t border-foreground/10">
                <p className="text-xs text-foreground/25 tracking-wider">
                  © 2025 Farhan Sultan Nadlir
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
