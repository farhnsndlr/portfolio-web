"use client";

import { useEffect, useState } from "react";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Index", href: "#hero", index: "01" },
  { label: "Works", href: "#works", index: "02" },
  { label: "About", href: "#about", index: "03" },
  { label: "Expertise", href: "#expertise", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

export default function ModernNavbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["hero", "works", "about", "expertise", "contact"];
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 bg-[#0A0B0D]/80 border-b border-white/5 text-[#F5F5F7] font-mono text-xs select-none backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <a href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-[#2D5BFF] group-hover:scale-125 transition-transform" />
          <span className="font-bold tracking-widest text-sm text-[#F5F5F7] group-hover:text-[#2D5BFF] transition-colors">
            NADLR
          </span>
          <span className="text-[11px] text-[#8A8D98] hidden sm:inline">
            / STUDIO
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141518]/60 p-1 rounded-full border border-white/8 backdrop-blur-xs">
          {navLinks.map(({ label, href, index }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
                className={`px-3.5 py-1 rounded-full transition-all text-xs ${
                  isActive
                    ? "bg-[#2D5BFF] text-white font-medium shadow-sm"
                    : "text-[#8A8D98] hover:text-[#F5F5F7]"
                }`}
              >
                <span className="text-[10px] opacity-60 mr-1">{index}</span>
                <span>{label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Direct Resume CTA */}
          <a
            href="/CV_Farhan_Sultan_Nadlir.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-[#F5F5F7] hover:text-white transition-colors text-xs font-medium"
          >
            <FileText size={13} />
            <span>RESUME</span>
            <ArrowUpRight size={11} className="opacity-60" />
          </a>

          {/* Theme Switcher */}
          <DarkModeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full border border-white/10 bg-[#141518] text-[#F5F5F7] hover:border-white/30 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#141518] border border-white/10 rounded-2xl shadow-2xl flex flex-col gap-2">
          {navLinks.map(({ label, href, index }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="flex items-center justify-between p-3 rounded-xl bg-[#0A0B0D] border border-white/5 text-left text-xs text-[#F5F5F7] hover:border-[#2D5BFF] hover:text-[#2D5BFF] transition-colors"
            >
              <span>{index}. {label.toUpperCase()}</span>
              <ArrowUpRight size={14} className="opacity-60" />
            </button>
          ))}
          <a
            href="/CV_Farhan_Sultan_Nadlir.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-[#2D5BFF] text-white font-bold text-xs mt-2"
          >
            <span>DOWNLOAD CURRICULUM VITAE</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
