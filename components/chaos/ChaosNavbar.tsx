"use client";

import { useEffect, useState } from "react";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import { Menu, X, FileText, ArrowUpRight, Zap, Radio } from "lucide-react";

const navLinks = [
  { label: "Signal", href: "#signal", code: "01" },
  { label: "Identity", href: "#identity", code: "02" },
  { label: "Artifacts", href: "#artifacts", code: "03" },
  { label: "System", href: "#system", code: "04" },
  { label: "Transmit", href: "#transmit", code: "05" },
];

export default function ChaosNavbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["signal", "identity", "artifacts", "system", "transmit"];
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 bg-[#0A0A0A]/90 border-b-2 border-[#262626] text-[#F4F1E8] font-mono text-xs select-none backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Glitch Logo */}
        <a href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-3 h-3 bg-[#C8FF00] group-hover:bg-[#FF3DCE] transition-colors" />
          <span className="font-black text-sm tracking-widest text-[#F4F1E8] glitch-hover">
            NADLR
          </span>
          <span className="text-[10px] text-[#C8FF00] border border-[#C8FF00]/40 px-1 py-0.2 hidden sm:inline">
            SPECULATIVE_V2
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href, code }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
                className={`px-3 py-1.5 transition-all border ${
                  isActive
                    ? "border-[#C8FF00] bg-[#C8FF00] text-[#0A0A0A] font-black shadow-chaos-magenta -translate-y-0.5"
                    : "border-transparent text-[#7E7E7E] hover:text-[#C8FF00] hover:border-[#262626]"
                }`}
              >
                <span className="text-[10px] opacity-60 mr-1">[{code}]</span>
                <span>{label.toUpperCase()}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Telemetry Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-[10px] text-[#7E7E7E] mr-2">
            <Radio size={12} className="text-[#C8FF00] animate-pulse" />
            <span>FREQ: 144HZ</span>
          </div>

          {/* Resume Download CTA */}
          <a
            href="/CV_Farhan_Sultan_Nadlir.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#FF3DCE] text-[#0A0A0A] border border-[#0A0A0A] font-black text-xs hover:bg-[#C8FF00] transition-colors shadow-chaos-lime"
          >
            <FileText size={13} />
            <span>CV.PDF</span>
            <ArrowUpRight size={11} />
          </a>

          {/* Theme Switcher */}
          <DarkModeToggle />

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-1.5 border border-[#262626] bg-[#141414] text-[#C8FF00] hover:bg-[#C8FF00] hover:text-[#0A0A0A] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#141414] border-2 border-[#C8FF00] shadow-chaos-magenta flex flex-col gap-2">
          {navLinks.map(({ label, href, code }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="flex items-center justify-between p-2.5 bg-[#0A0A0A] border border-[#262626] text-left text-xs font-bold text-[#F4F1E8] hover:border-[#C8FF00] hover:text-[#C8FF00]"
            >
              <span>[{code}] {label.toUpperCase()}</span>
              <Zap size={14} className="text-[#C8FF00]" />
            </button>
          ))}
          <a
            href="/CV_Farhan_Sultan_Nadlir.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2.5 bg-[#C8FF00] text-[#0A0A0A] font-black text-xs mt-2"
          >
            <span>DOWNLOAD CV (PDF)</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
