"use client";

import { useState, useEffect } from "react";
import PixelWorld from "./PixelWorld";
import DirectPortfolio from "./DirectPortfolio";
import { Gamepad2, Layout } from "lucide-react";

export default function RpgApp() {
  const [mode, setMode] = useState<"explore" | "direct">("explore");

  useEffect(() => {
    const saved = localStorage.getItem("nadlr_rpg_mode");
    if (saved === "direct" || saved === "explore") {
      setMode(saved);
    }
  }, []);

  const handleSwitchMode = (newMode: "explore" | "direct", targetSection?: string) => {
    setMode(newMode);
    localStorage.setItem("nadlr_rpg_mode", newMode);

    if (newMode === "direct" && targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <main className="min-h-screen bg-[#173F35] text-[#F7F1D5] flex flex-col font-mono">
      {/* ── Persistent Retro GBA Header Bar ── */}
      <header className="w-full bg-[#122A23] border-b-2 border-[#242B25] px-4 sm:px-8 py-2.5 flex items-center justify-between text-xs z-30 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#F2C94C] border border-[#242B25] rotate-45" />
          <span className="font-black text-sm tracking-widest text-[#F7F1D5]">
            NADLR // PIXEL_WORLD
          </span>
          <span className="text-[10px] text-[#A6CDBA] hidden sm:inline">
            [GBA EDITION]
          </span>
        </div>

        {/* Mode Switch Tabs */}
        <div className="flex items-center gap-1 bg-[#1A382F] p-0.5 border border-[#242B25]">
          <button
            onClick={() => handleSwitchMode("explore")}
            className={`flex items-center gap-1.5 px-3 py-1.5 font-bold transition-colors cursor-pointer text-xs ${
              mode === "explore"
                ? "bg-[#F2C94C] text-[#173F35] shadow-sm"
                : "text-[#A6CDBA] hover:text-[#F7F1D5]"
            }`}
            aria-label="Switch to Explore Mode (Pixel Overworld Game)"
          >
            <Gamepad2 size={14} />
            <span>EXPLORE GAME</span>
          </button>

          <button
            onClick={() => handleSwitchMode("direct")}
            className={`flex items-center gap-1.5 px-3 py-1.5 font-bold transition-colors cursor-pointer text-xs ${
              mode === "direct"
                ? "bg-[#F2C94C] text-[#173F35] shadow-sm"
                : "text-[#A6CDBA] hover:text-[#F7F1D5]"
            }`}
            aria-label="Switch to Direct Portfolio Mode (Fast Document View)"
          >
            <Layout size={14} />
            <span>DIRECT PORTFOLIO</span>
          </button>
        </div>
      </header>

      {/* ── Content View ── */}
      {mode === "explore" ? (
        <div className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4">
          <PixelWorld
            onOpenDirectMode={(section) => handleSwitchMode("direct", section)}
          />
        </div>
      ) : (
        <DirectPortfolio
          onReturnToGame={() => handleSwitchMode("explore")}
        />
      )}
    </main>
  );
}
