"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Terminal,
  FolderGit2,
  User,
  Mail,
  FileText,
  Moon,
  Sun,
  X,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface CommandItem {
  id: string;
  category: "Navigation" | "Projects" | "Actions" | "Experimental";
  label: string;
  detail?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Listen for global custom event or keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle palette on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        const target = e.target as HTMLElement;
        if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
          // If in an input, do not hijack unless it is the palette itself
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
      setTimeout(() => inputRef.current?.focus(), 50);
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
      id: "nav-terminal",
      category: "Navigation",
      label: "Jump to Identity Terminal",
      detail: "Interactive command console",
      icon: Terminal,
      action: () => scrollTo("terminal"),
      shortcut: "T",
    },
    {
      id: "nav-constellation",
      category: "Navigation",
      label: "Explore Project Constellation",
      detail: "Interactive network map",
      icon: FolderGit2,
      action: () => scrollTo("constellation"),
      shortcut: "P",
    },
    {
      id: "nav-about",
      category: "Navigation",
      label: "View Developer Dossier",
      detail: "Background & system analysis",
      icon: User,
      action: () => scrollTo("about"),
      shortcut: "A",
    },
    {
      id: "nav-contact",
      category: "Navigation",
      label: "Open Transmission Desk",
      detail: "Send direct message or inquiry",
      icon: Mail,
      action: () => scrollTo("contact"),
      shortcut: "C",
    },

    // Projects
    {
      id: "proj-umkm",
      category: "Projects",
      label: "UMKM-i: Interactive Web Catalog",
      detail: "React, TypeScript, Next.js, Framer Motion",
      icon: FolderGit2,
      action: () => {
        setIsOpen(false);
        router.push("/projects/umkm-i");
      },
    },
    {
      id: "proj-absenku",
      category: "Projects",
      label: "AbsenKu: Real-Time GPS Attendance",
      detail: "Laravel, PHP, MySQL, Geofencing",
      icon: FolderGit2,
      action: () => {
        setIsOpen(false);
        router.push("/projects/absenku");
      },
    },
    {
      id: "proj-portfolio",
      category: "Projects",
      label: "NADLR Portfolio Architecture",
      detail: "Next.js, Tailwind v4, Motion Runtime",
      icon: FolderGit2,
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
      detail: "Verified credentials & experience",
      icon: FileText,
      action: () => {
        setIsOpen(false);
        window.open("/CV_Farhan_Sultan_Nadlir.pdf", "_blank");
      },
    },
    {
      id: "act-theme",
      category: "Actions",
      label: "Toggle Visual Spectrum (Dark/Light)",
      detail: "Switch theme runtime",
      icon: Moon,
      action: () => {
        toggleTheme();
        setIsOpen(false);
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
    {
      id: "act-whatsapp",
      category: "Actions",
      label: "Dispatch WhatsApp Message",
      detail: "+62 851 5539 9057",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open("https://wa.me/6285155399057", "_blank");
      },
    },

    // Secret
    {
      id: "exp-matrix",
      category: "Experimental",
      label: "Toggle Secret Matrix Mode",
      detail: "Activate CRT green scanline data stream",
      icon: Sparkles,
      action: () => {
        setIsOpen(false);
        window.dispatchEvent(new CustomEvent("toggle-matrix-mode"));
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const s = `${cmd.label} ${cmd.detail || ""} ${cmd.category}`.toLowerCase();
    return s.includes(query.toLowerCase());
  });

  const handleItemClick = (cmd: CommandItem) => {
    cmd.action();
  };

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100000] flex items-start justify-center p-4 pt-16 sm:pt-24 select-none"
          role="dialog"
          aria-modal="true"
          aria-label="System Command Palette"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#0B0D0C]/80 backdrop-blur-xs"
          />

          {/* Palette Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-[#181C1A] text-[#F3F4EF] border border-[#B8FF3B]/40 shadow-2xl overflow-hidden flex flex-col font-mono"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#121513] border-b border-[#262D28] text-xs text-[#777D76]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8FF3B] animate-pulse" />
                <span className="text-[#B8FF3B] font-bold">SYSTEM_COMMAND // PALETTE</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline">ESC TO CLOSE</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:text-[#B8FF3B] text-gray-400 cursor-pointer"
                  aria-label="Close Command Palette"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Input search */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#181C1A] border-b border-[#262D28]">
              <Search size={18} className="text-[#B8FF3B] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyNavigation}
                placeholder="Type command, section name, or project..."
                className="w-full bg-transparent text-sm sm:text-base text-[#F3F4EF] outline-none placeholder-[#777D76] font-mono"
              />
              <span className="text-[10px] px-1.5 py-0.5 bg-[#202622] text-[#B8FF3B] border border-[#B8FF3B]/30 hidden sm:inline">
                ⌘K
              </span>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#202622]/50">
              {filteredCommands.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#777D76]">
                  No matching runtime commands found for &quot;{query}&quot;.
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={cmd.id}
                      onClick={() => handleItemClick(cmd)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-sm cursor-pointer transition-colors text-xs ${
                        isSelected
                          ? "bg-[#B8FF3B] text-[#111312] font-bold"
                          : "text-[#F3F4EF] hover:bg-[#202622]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon
                          size={15}
                          className={`shrink-0 ${
                            isSelected ? "text-[#111312]" : "text-[#B8FF3B]"
                          }`}
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="truncate">{cmd.label}</span>
                          {cmd.detail && (
                            <span
                              className={`text-[10px] truncate ${
                                isSelected ? "text-[#111312]/80" : "text-[#777D76]"
                              }`}
                            >
                              {cmd.detail}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <span
                          className={`text-[9px] uppercase px-1 py-0.5 border ${
                            isSelected
                              ? "border-[#111312] text-[#111312]"
                              : "border-[#262D28] text-[#777D76]"
                          }`}
                        >
                          {cmd.category}
                        </span>
                        <ArrowRight
                          size={13}
                          className={isSelected ? "text-[#111312]" : "opacity-0"}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-[#121513] border-t border-[#262D28] flex items-center justify-between text-[10px] text-[#777D76]">
              <span>USE ARROWS ↑↓ TO NAVIGATE, ENTER TO RUN</span>
              <span className="text-[#B8FF3B]">RUNTIME: READY</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
