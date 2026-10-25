"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X, FolderGit2, Cpu, User, FileText, Mail, Layout, ArrowRight } from "lucide-react";

interface RpgMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDirectMode: (section?: string) => void;
  onTriggerEntity: (id: string) => void;
}

export default function RpgMenu({
  isOpen,
  onClose,
  onOpenDirectMode,
  onTriggerEntity,
}: RpgMenuProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const menuItems = [
    {
      label: "PROJECTS",
      detail: "View 3 verified production apps",
      icon: FolderGit2,
      action: () => {
        onClose();
        onTriggerEntity("project-researcher");
      },
    },
    {
      label: "SKILLS",
      detail: "Inspect technical battle stats",
      icon: Cpu,
      action: () => {
        onClose();
        onTriggerEntity("skill-master");
      },
    },
    {
      label: "TRAINER CARD",
      detail: "About Farhan Sultan Nadlir",
      icon: User,
      action: () => {
        onClose();
        onTriggerEntity("guide-oak");
      },
    },
    {
      label: "RESUME / CV",
      detail: "Download PDF curriculum vitae",
      icon: FileText,
      action: () => {
        onClose();
        window.open("/CV_Farhan_Sultan_Nadlir.pdf", "_blank");
      },
    },
    {
      label: "COMMUNICATION",
      detail: "WhatsApp & message desk",
      icon: Mail,
      action: () => {
        onClose();
        onTriggerEntity("comm-officer");
      },
    },
    {
      label: "DIRECT PORTFOLIO",
      detail: "Switch to full document view",
      icon: Layout,
      action: () => {
        onClose();
        onOpenDirectMode();
      },
    },
  ];

  useEffect(() => {
    if (!isOpen) return;
    setSelectedIndex(0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % menuItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
      } else if (e.key === "Enter" || e.key === " " || e.key === "z") {
        e.preventDefault();
        menuItems[selectedIndex]?.action();
      } else if (e.key === "Escape" || e.key === "x" || e.key === "m" || e.key === "M") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, menuItems, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/50 flex items-start justify-end p-4 pt-16 sm:p-8 select-none font-mono"
      role="dialog"
      aria-label="RPG Start Menu"
    >
      {/* Menu Box (GBA Style) */}
      <div className="w-full max-w-xs border-[3px] border-[#242B25] bg-[#F7F1D5] text-[#1D241E] p-3 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-[#242B25]">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#173F35]">
            <span className="w-2 h-2 bg-[#F2C94C]" />
            <span>START_MENU // NADLR</span>
          </div>
          <button
            onClick={onClose}
            className="w-6 h-6 bg-[#242B25] text-[#F7F1D5] flex items-center justify-center hover:bg-[#E63946] transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={13} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-1.5">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = idx === selectedIndex;

            return (
              <button
                key={item.label}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between p-2 text-left border transition-colors cursor-pointer text-xs ${
                  isSelected
                    ? "bg-[#173F35] text-[#F7F1D5] border-[#242B25] font-bold"
                    : "bg-[#EAE0BC] text-[#1D241E] border-transparent hover:border-[#242B25]"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Icon size={14} className={isSelected ? "text-[#F2C94C]" : "text-[#5A635B]"} />
                  <div className="flex flex-col min-w-0">
                    <span className="truncate">{item.label}</span>
                    <span className={`text-[9px] truncate ${isSelected ? "text-[#A6CDBA]" : "text-[#777D76]"}`}>
                      {item.detail}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 ml-2">
                  {isSelected && <span className="text-[#F2C94C] font-bold">▶</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-3 pt-2 border-t border-[#D8CEAB] text-[10px] text-[#5A635B] flex justify-between">
          <span>UP/DOWN: CHOOSE</span>
          <span className="text-[#173F35] font-bold">ENTER: RUN</span>
        </div>
      </div>
    </div>
  );
}
