"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Entity } from "./worldData";
import { X, CornerDownLeft, ExternalLink, FileDown, ArrowRight } from "lucide-react";

interface DialogueBoxProps {
  entity: Entity | null;
  onClose: () => void;
  onOpenDirectMode?: (section?: string) => void;
}

export default function DialogueBox({
  entity,
  onClose,
  onOpenDirectMode,
}: DialogueBoxProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const router = useRouter();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLineIndex(0);
    boxRef.current?.focus();
  }, [entity]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!entity) return;

      // Advance dialogue on Space or Enter
      if (e.key === "Enter" || e.key === " " || e.key === "z" || e.key === "Z") {
        e.preventDefault();
        advanceDialogue();
      }

      // Close on Escape or Backspace
      if (e.key === "Escape" || e.key === "x" || e.key === "X") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (!entity) return null;

  const totalLines = entity.dialogue.length;
  const isLastLine = lineIndex >= totalLines - 1;

  const advanceDialogue = () => {
    if (!isLastLine) {
      setLineIndex((prev) => prev + 1);
    } else if (!entity.actions || entity.actions.length === 0) {
      onClose();
    }
  };

  const handleAction = (action: {
    label: string;
    actionType: "link" | "route" | "form" | "download" | "custom";
    payload: string;
  }) => {
    onClose();
    if (action.actionType === "route") {
      router.push(action.payload);
    } else if (action.actionType === "download") {
      window.open(action.payload, "_blank");
    } else if (action.actionType === "link") {
      if (action.payload.startsWith("#")) {
        onOpenDirectMode?.(action.payload.replace("#", ""));
      } else {
        window.open(action.payload, "_blank");
      }
    } else if (action.actionType === "form") {
      onOpenDirectMode?.("contact");
    }
  };

  return (
    <div
      ref={boxRef}
      tabIndex={0}
      className="absolute bottom-3 left-3 right-3 z-30 select-none outline-none font-mono"
      role="dialog"
      aria-modal="true"
      aria-label={`Dialogue with ${entity.name}`}
    >
      {/* Outer GBA Frame (Double Border) */}
      <div className="border-[3px] border-[#242B25] bg-[#F7F1D5] text-[#1D241E] p-4 shadow-2xl relative rounded-xs">
        {/* Inner Border Trim */}
        <div className="absolute inset-1 border border-[#D8CEAB] pointer-events-none" />

        {/* Speaker Nameplate Tag */}
        <div className="absolute -top-4 left-4 px-3 py-1 bg-[#173F35] text-[#F7F1D5] border-2 border-[#242B25] text-xs font-bold tracking-wider flex items-center gap-2 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#F2C94C]" />
          <span>{entity.name}</span>
          <span className="text-[10px] text-[#A6CDBA] hidden sm:inline">
            // {entity.role}
          </span>
        </div>

        {/* Close Button Top-Right */}
        <button
          onClick={onClose}
          className="absolute -top-3 right-4 w-7 h-7 bg-[#242B25] text-[#F7F1D5] border border-[#F7F1D5] flex items-center justify-center hover:bg-[#E63946] transition-colors cursor-pointer text-xs"
          aria-label="Close dialogue"
        >
          <X size={14} />
        </button>

        {/* Dialogue Text Content */}
        <div className="pt-2 pb-1 min-h-[56px] flex flex-col justify-between cursor-pointer" onClick={advanceDialogue}>
          <p className="text-xs sm:text-sm md:text-base font-bold leading-relaxed text-[#1D241E]">
            {entity.dialogue[lineIndex]}
          </p>

          {/* Advance Prompt / Indicator */}
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#D8CEAB] text-[11px] text-[#5A635B]">
            <span>LINE {lineIndex + 1} OF {totalLines}</span>
            <div className="flex items-center gap-1.5 text-[#173F35] font-bold">
              <span>{isLastLine ? "DISMISS [ESC/SPACE]" : "ADVANCE [SPACE]"}</span>
              <span className="animate-bounce inline-block text-[#D90429] font-black">▼</span>
            </div>
          </div>
        </div>

        {/* Interactive Action Menu when on the last line */}
        {isLastLine && entity.actions && entity.actions.length > 0 && (
          <div className="mt-3 pt-3 border-t-2 border-[#242B25] grid grid-cols-1 sm:grid-cols-2 gap-2">
            {entity.actions.map((act, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAction(act);
                }}
                className="flex items-center justify-between p-2.5 bg-[#173F35] text-[#F7F1D5] border-2 border-[#242B25] hover:bg-[#F2C94C] hover:text-[#173F35] transition-colors text-xs font-bold cursor-pointer"
              >
                <span>{act.label}</span>
                {act.actionType === "route" ? (
                  <ArrowRight size={14} />
                ) : act.actionType === "download" ? (
                  <FileDown size={14} />
                ) : (
                  <ExternalLink size={14} />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
