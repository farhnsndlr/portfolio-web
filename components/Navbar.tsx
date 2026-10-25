"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import { Menu, X, Search, FileText, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Constellation", href: "#constellation", id: "01" },
  { label: "Terminal", href: "#terminal", id: "02" },
  { label: "Dossier", href: "#about", id: "03" },
  { label: "Contact", href: "#contact", id: "04" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["constellation", "terminal", "about", "contact"];
    const handleScroll = () => {
      let current = "";
      let minDistance = Infinity;
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

  const scrollTo = (href: string) => {
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileNav = (id: string) => {
    setSidebarOpen(false);
    setTimeout(() => scrollTo(id), 200);
  };

  const triggerPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <>
      {/* ── DESKTOP HUD NAVIGATION ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 md:px-14 py-3 bg-[#111312]/85 dark:bg-[#111312]/85 backdrop-blur-md border-b border-[#262D28] text-[#F3F4EF] select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          {/* Logo Brand Stamp */}
          <a
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-2.5 h-2.5 bg-[#B8FF3B] group-hover:scale-125 transition-transform" />
            <span className="font-black text-sm tracking-widest text-[#F3F4EF] group-hover:text-[#B8FF3B] transition-colors">
              NADLR
            </span>
            <span className="text-[10px] text-[#777D76] hidden sm:inline">
              // RUNTIME_V2.0
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href, id }) => {
              const isActive = activeSection === href;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(href);
                  }}
                  className={`px-3 py-1.5 transition-colors border ${
                    isActive
                      ? "border-[#B8FF3B] bg-[#B8FF3B]/10 text-[#B8FF3B] font-bold"
                      : "border-transparent text-[#777D76] hover:text-[#F3F4EF] hover:border-[#262D28]"
                  }`}
                >
                  <span className="text-[10px] opacity-60 mr-1.5">[{id}]</span>
                  <span>{label.toUpperCase()}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Command Palette Launcher */}
            <button
              onClick={triggerPalette}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 bg-[#181C1A] border border-[#262D28] text-[#777D76] hover:border-[#B8FF3B] hover:text-[#B8FF3B] transition-colors cursor-pointer text-xs"
              title="Open Command Palette"
            >
              <Search size={13} className="text-[#B8FF3B]" />
              <span>SEARCH</span>
              <kbd className="text-[9px] px-1 bg-[#111312] border border-[#262D28] text-[#B8FF3B]">
                ⌘K
              </kbd>
            </button>

            {/* Resume Link */}
            <a
              href="/CV_Farhan_Sultan_Nadlir.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 border border-[#262D28] text-[#777D76] hover:text-[#F3F4EF] hover:border-[#B8FF3B] transition-colors text-xs"
            >
              <FileText size={13} />
              <span>CV</span>
              <ArrowUpRight size={11} />
            </a>

            {/* Theme Switcher */}
            <DarkModeToggle />

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 border border-[#262D28] bg-[#181C1A] text-[#F3F4EF] hover:border-[#B8FF3B] cursor-pointer"
              aria-label="Open mobile navigation"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE HUD DRAWER ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xs md:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-4/5 max-w-xs bg-[#111312] border-l border-[#B8FF3B]/30 flex flex-col md:hidden font-mono text-xs select-none shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#262D28] bg-[#181C1A]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B8FF3B]" />
                  <span className="font-bold text-[#F3F4EF]">SYS_NAV // MOBILE</span>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 border border-[#262D28] text-[#777D76] hover:text-[#B8FF3B] cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Navigation Actions */}
              <nav className="flex flex-col gap-2 p-4 flex-1 overflow-y-auto">
                {navLinks.map(({ label, href, id }) => {
                  const isActive = activeSection === href;
                  return (
                    <button
                      key={href}
                      onClick={() => handleMobileNav(href)}
                      className={`flex items-center justify-between p-3 border text-left transition-colors cursor-pointer ${
                        isActive
                          ? "border-[#B8FF3B] bg-[#B8FF3B]/10 text-[#B8FF3B] font-bold"
                          : "border-[#262D28] bg-[#141816] text-[#F3F4EF] hover:border-[#B8FF3B]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[#777D76]">[{id}]</span>
                        <span>{label.toUpperCase()}</span>
                      </div>
                      <ArrowUpRight size={14} className="text-[#777D76]" />
                    </button>
                  );
                })}

                <button
                  onClick={() => {
                    setSidebarOpen(false);
                    setTimeout(triggerPalette, 200);
                  }}
                  className="flex items-center justify-between p-3 border border-[#262D28] bg-[#141816] text-[#B8FF3B] hover:border-[#B8FF3B] mt-2 cursor-pointer"
                >
                  <div className="flex items-center gap-2 font-bold">
                    <Search size={14} />
                    <span>LAUNCH COMMAND BAR</span>
                  </div>
                  <span className="text-[10px] px-1 bg-[#181C1A] text-[#777D76]">⌘K</span>
                </button>

                <a
                  href="/CV_Farhan_Sultan_Nadlir.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 border border-[#B8FF3B] bg-[#B8FF3B] text-[#111312] font-bold mt-2"
                >
                  <div className="flex items-center gap-2">
                    <FileText size={14} />
                    <span>DOWNLOAD RESUME (PDF)</span>
                  </div>
                  <ArrowUpRight size={14} />
                </a>
              </nav>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-[#262D28] bg-[#141816] text-[11px] text-[#777D76]">
                <p className="font-bold text-[#F3F4EF]">FARHAN SULTAN NADLIR</p>
                <p>System Information // Web Architect</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
