"use client";

import { useEffect, useState, useRef } from "react";
import { X, Sparkles } from "lucide-react";

export default function SecretMatrixMode() {
  const [isActive, setIsActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleToggle = () => setIsActive((prev) => !prev);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on Ctrl+Shift+X
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "x") {
        e.preventDefault();
        setIsActive((prev) => !prev);
      }
      if (e.key === "Escape" && isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener("toggle-matrix-mode", handleToggle);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("toggle-matrix-mode", handleToggle);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = "01NADLRFARHANSULTAN2026SYSTEMINFO1010101";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.fillStyle = "rgba(17, 19, 18, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#B8FF3B";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[999999] pointer-events-auto flex flex-col justify-between p-6 select-none">
      {/* Background Matrix Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Top HUD Info */}
      <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[#B8FF3B] bg-[#111312]/80 border border-[#B8FF3B]/30 px-4 py-2">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="animate-spin" />
          <span className="font-bold">[SECRET_VISUAL_SPECTRUM // MATRIX_STREAM: ACTIVE]</span>
        </div>
        <button
          onClick={() => setIsActive(false)}
          className="flex items-center gap-1.5 px-2.5 py-1 bg-[#B8FF3B] text-[#111312] font-bold text-[11px] hover:bg-white cursor-pointer"
        >
          <span>EXIT MATRIX (ESC)</span>
          <X size={13} />
        </button>
      </div>

      {/* Center Prompt */}
      <div className="relative z-10 text-center font-mono pointer-events-none">
        <p className="text-xl sm:text-2xl font-black text-[#B8FF3B] tracking-widest uppercase">
          YOU HAVE UNLOCKED THE SECRET RUNTIME LAYER
        </p>
        <p className="text-xs text-[#F3F4EF]/70 mt-1">
          Press ESC or toggle &apos;matrix&apos; in terminal to return to standard architecture.
        </p>
      </div>

      {/* Bottom Telemetry */}
      <div className="relative z-10 font-mono text-[10px] text-[#777D76] flex justify-between bg-[#111312]/80 border border-[#262D28] px-4 py-1.5">
        <span>DEV: FARHAN SULTAN NADLIR</span>
        <span className="text-[#B8FF3B]">PERFORMANCE: STREAMING 60FPS</span>
      </div>
    </div>
  );
}
