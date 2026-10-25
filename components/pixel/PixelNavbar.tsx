"use client";

import { useEffect, useState } from "react";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import { Menu, X, FileText, ArrowUpRight, Sparkles } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about", id: "01" },
  { label: "Projects", href: "#projects", id: "02" },
  { label: "Skills", href: "#skills", id: "03" },
  { label: "Contact", href: "#contact", id: "04" },
];

export default function PixelNavbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["about", "projects", "skills", "contact"];
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
          current = "#" + id;
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
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-2.5 bg-[#204B38]/95 border-b-[3px] border-[#242B25] text-[#F7F1D5] font-mono text-xs select-none shadow-md backdrop-blur-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand badge */}
        <a href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-3 h-3 bg-[#F2C94C] border-2 border-[#242B25] rotate-45 group-hover:scale-125 transition-transform" />
          <span className="font-black text-sm tracking-widest text-[#F7F1D5] group-hover:text-[#F2C94C] transition-colors">
            NADLR
          </span>
          <span className="text-[10px] text-[#A6CDBA] hidden sm:inline">
            // DEV.TRAINER
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5">
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
                className={`px-3 py-1.5 transition-colors border-2 ${
                  isActive
                    ? "border-[#242B25] bg-[#F2C94C] text-[#242B25] font-black shadow-sm"
                    : "border-transparent text-[#A6CDBA] hover:text-[#F7F1D5] hover:border-[#242B25] hover:bg-[#1B3B2C]"
                }`}
              >
                <span className="text-[10px] opacity-70 mr-1">[{id}]</span>
                <span>{label.toUpperCase()}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume Shortcut */}
          <a
            href="/CV_Farhan_Sultan_Nadlir.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#F2C94C] text-[#242B25] border-2 border-[#242B25] font-black text-xs hover:bg-[#F7F1D5] transition-colors shadow-sm"
          >
            <FileText size={13} />
            <span>RESUME</span>
            <ArrowUpRight size={11} />
          </a>

          {/* Theme Toggle */}
          <DarkModeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-1.5 bg-[#1B3B2C] border-2 border-[#242B25] text-[#F7F1D5] hover:bg-[#F2C94C] hover:text-[#242B25] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-3 bg-[#1B3B2C] border-2 border-[#242B25] shadow-xl flex flex-col gap-2">
          {navLinks.map(({ label, href, id }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="flex items-center justify-between p-2.5 bg-[#204B38] border border-[#242B25] text-left text-xs font-bold text-[#F7F1D5] hover:bg-[#F2C94C] hover:text-[#242B25]"
            >
              <span>[{id}] {label.toUpperCase()}</span>
              <Sparkles size={12} className="text-[#F2C94C]" />
            </button>
          ))}
          <a
            href="/CV_Farhan_Sultan_Nadlir.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2.5 bg-[#F2C94C] text-[#242B25] border-2 border-[#242B25] font-black text-xs"
          >
            <span>DOWNLOAD RESUME (PDF)</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
