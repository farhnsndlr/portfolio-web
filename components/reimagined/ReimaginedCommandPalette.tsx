"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FolderGit2,
  User,
  Mail,
  FileText,
  Moon,
  X,
  ArrowRight,
  ExternalLink,
  Cpu,
  Layers,
} from "lucide-react";

interface CommandItem {
  id: string;
  category: "Navigation" | "Projects" | "Actions";
  label: string;
  detail?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  action: () => void;
}

export default function ReimaginedCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle palette on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        const target = e.target as HTMLElement;
        if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
          if (target !== inputRef.current) return;
        }
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-works",
      category: "Navigation",
      label: "Jump to Featured Projects",
      detail: "Curated web applications showcase",
      icon: FolderGit2,
      action: () => scrollTo("works"),
    },
    {
      id: "nav-archive",
      category: "Navigation",
      label: "Open Full Project Archive",
      detail: "Complete catalogue of all web applications with filters",
      icon: FolderGit2,
      action: () => {
        setIsOpen(false);
        router.push("/projects");
      },
    },
    {
      id: "nav-skills",
      category: "Navigation",
      label: "Jump to Technology Index",
      detail: "Next.js, Laravel, TypeScript, MySQL & cross-reference",
      icon: Cpu,
      action: () => scrollTo("skills"),
    },
    {
      id: "nav-about",
      category: "Navigation",
      label: "Jump to About Section",
      detail: "Educational background and development timeline",
      icon: User,
      action: () => scrollTo("about"),
    },
    {
      id: "nav-contact",
      category: "Navigation",
      label: "Jump to Contact Section",
      detail: "Send a message or connect directly on WhatsApp",
      icon: Mail,
      action: () => scrollTo("contact"),
    },

    // Projects
    {
      id: "proj-umkm",
      category: "Projects",
      label: "UMKM-i: Interactive Web Catalog",
      detail: "Next.js, React, TypeScript, Framer Motion",
      icon: Layers,
      action: () => {
        setIsOpen(false);
        router.push("/projects/umkm-i");
      },
    },
    {
      id: "proj-absenku",
      category: "Projects",
      label: "AbsenKu: Real-Time GPS Attendance",
      detail: "Laravel, MySQL, PHP, Geofencing, Cloudinary",
      icon: Layers,
      action: () => {
        setIsOpen(false);
        router.push("/projects/absenku");
      },
    },
    {
      id: "proj-portfolio",
      category: "Projects",
      label: "Portfolio Website Architecture",
      detail: "Next.js, TypeScript, Tailwind, Motion",
      icon: Layers,
      action: () => {
        setIsOpen(false);
        router.push("/projects/portfolio");
      },
    },

    // Actions
    {
      id: "act-resume",
      category: "Actions",
      label: "Download Curriculum Vitae (PDF)",
      detail: "Official verified resume document",
      icon: FileText,
      action: () => {
        setIsOpen(false);
        window.open("/CV_Farhan_Sultan_Nadlir.pdf", "_blank");
      },
    },
    {
      id: "act-theme",
      category: "Actions",
      label: "Toggle Color Theme (Light / Dark)",
      detail: "Switch between warm cream and ink black",
      icon: Moon,
      action: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      id: "act-whatsapp",
      category: "Actions",
      label: "Dispatch WhatsApp Message",
      detail: "+62 815 7402 9222",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open("https://wa.me/6281574029222", "_blank");
      },
    },
    {
      id: "act-github",
      category: "Actions",
      label: "Open GitHub Profile",
      detail: "github.com/farhnsndlr",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open("https://github.com/farhnsndlr", "_blank");
      },
    },
  ];

  const filtered = commands.filter((cmd) => {
    const text = `${cmd.label} ${cmd.detail || ""} ${cmd.category}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100000] flex items-start justify-center p-4 pt-16 sm:pt-24 select-none font-mono"
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Palette Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-card border-[3px] border-border text-foreground shadow-neo-xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#FFE500] text-[#171717] border-b-2 border-border text-xs">
              <div className="flex items-center gap-2 font-black">
                <span className="w-2.5 h-2.5 bg-[#171717] border border-border" />
                <span>NADLR. // COMMAND_CENTER</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:text-[#171717] cursor-pointer text-[#171717]"
                aria-label="Close command palette"
              >
                <X size={16} />
              </button>
            </div>

            {/* Input search field */}
            <div className="flex items-center gap-3 px-5 py-3.5 bg-card border-b-2 border-border">
              <Search size={18} className="text-[#FFE500] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyNavigation}
                placeholder="Search commands, projects, sections, actions..."
                className="w-full bg-transparent text-sm text-foreground outline-none font-mono placeholder:text-muted-foreground"
              />
              <span className="text-[10px] px-2.5 py-0.5 bg-[#FFE500] text-[#171717] font-black border border-border hidden sm:inline shadow-neo-sm">
                ESC TO CLOSE
              </span>
            </div>

            {/* Command items list */}
            <div className="max-h-80 overflow-y-auto p-3 divide-y divide-border/20">
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-xs text-muted-foreground font-bold">
                  No matching commands found for &quot;{query}&quot;.
                </div>
              ) : (
                filtered.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={cmd.id}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-all text-xs ${
                        isSelected
                          ? "bg-[#FFE500] text-[#171717] font-black shadow-neo-sm -translate-y-0.5"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon
                          size={16}
                          className={`shrink-0 ${
                            isSelected ? "text-[#171717]" : "text-[#FFE500]"
                          }`}
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="truncate">{cmd.label}</span>
                          {cmd.detail && (
                            <span
                              className={`text-[10px] truncate ${
                                isSelected ? "text-[#171717]/80" : "text-muted-foreground"
                              }`}
                            >
                              {cmd.detail}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <span
                          className={`text-[9px] uppercase px-2 py-0.5 border border-border font-bold ${
                            isSelected
                              ? "bg-black text-[#FFE500]"
                              : "text-muted-foreground bg-background"
                          }`}
                        >
                          {cmd.category}
                        </span>
                        <ArrowRight
                          size={13}
                          className={isSelected ? "text-[#171717]" : "opacity-0"}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-2.5 bg-secondary border-t-2 border-border flex items-center justify-between text-[10px] text-muted-foreground font-bold">
              <span>USE ARROWS ↑↓ TO NAVIGATE, ENTER TO RUN</span>
              <span className="text-[#FFE500] font-black bg-[#171717] px-1.5 py-0.5">NADLR V2</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
