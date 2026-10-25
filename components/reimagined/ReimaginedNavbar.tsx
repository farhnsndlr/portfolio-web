"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import NadlrLogo from "@/components/brand/NadlrLogo";
import { Menu, X, FileText, ArrowUpRight, Search } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#works" },
  { label: "Tech Stack", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function ReimaginedNavbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["works", "skills", "about", "contact"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = "";
      let minDistance = Infinity;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 120);
        if (rect.top <= 200 && distance < minDistance) {
          minDistance = distance;
          current = "#" + id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard escape listener to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      if (window.location.pathname !== "/") {
        window.location.href = "/" + href;
        return;
      }
      const target = document.querySelector(href) as HTMLElement;
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const triggerPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 font-mono text-xs select-none transition-all duration-200 border-b-[2.5px] border-border ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-neo-sm"
          : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Official Brand Logo: NADLR. */}
        <div className="flex items-center">
          <NadlrLogo variant="full" size="sm" href="/" />
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1.5 p-1 bg-card border-2 border-border shadow-neo-sm"
          aria-label="Primary navigation"
        >
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
                className={`px-3 py-1 transition-all text-xs font-bold border-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FFE500] ${
                  isActive
                    ? "border-border bg-[#FFE500] text-[#171717] shadow-neo-sm -translate-y-0.5 font-black"
                    : "border-transparent text-muted-foreground hover:border-border hover:bg-[#FFE500] hover:text-[#171717]"
                }`}
              >
                <span>{label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Command Palette Trigger */}
          <button
            type="button"
            onClick={triggerPalette}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#FFE500] text-[#171717] border-2 border-border shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer text-xs font-black focus-visible:outline-2 focus-visible:outline-[#FFE500]"
            title="Search projects and navigate (Cmd+K)"
          >
            <Search size={13} className="text-[#171717]" />
            <span>Search</span>
            <kbd className="text-[9px] px-1 bg-white/80 text-[#171717] border border-border font-bold">
              ⌘K
            </kbd>
          </button>

          {/* Direct Resume Download */}
          <a
            href="/CV_Farhan_Sultan_Nadlir.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 bg-card text-foreground border-2 border-border shadow-neo-sm font-black text-xs hover:bg-[#FFE500] hover:text-[#171717] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
            title="Download Farhan's Curriculum Vitae"
          >
            <FileText size={13} />
            <span>CV</span>
            <ArrowUpRight size={12} />
          </a>

          {/* Theme Toggle Button */}
          <DarkModeToggle />

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-1.5 border-2 border-border bg-card shadow-neo-sm text-foreground hover:bg-[#FFE500] hover:text-[#171717] cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-3 p-4 bg-card border-2 border-border shadow-neo-lg flex flex-col gap-2"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href;
            return (
              <button
                key={href}
                type="button"
                onClick={() => scrollTo(href)}
                className={`flex items-center justify-between p-3 border-2 text-left text-xs font-bold transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#FFE500] text-[#171717] border-border font-black"
                    : "bg-background border-border text-foreground hover:bg-[#FFE500] hover:text-[#171717]"
                }`}
              >
                <span>{label}</span>
                <ArrowUpRight size={14} />
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setTimeout(triggerPalette, 150);
            }}
            className="flex items-center justify-between p-3 bg-[#FFE500] text-[#171717] border-2 border-border font-black text-xs mt-1 shadow-neo-sm cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Search size={14} />
              <span>COMMAND PALETTE (⌘K)</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 bg-white text-[#171717] border border-border font-bold">
              OPEN
            </span>
          </button>

          <a
            href="/CV_Farhan_Sultan_Nadlir.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3 bg-card text-foreground border-2 border-border font-black text-xs mt-1 shadow-neo-sm hover:bg-[#FFE500] hover:text-[#171717]"
          >
            <span>DOWNLOAD CV (PDF)</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
