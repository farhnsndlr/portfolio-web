"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NadlrMonogram } from "./NadlrLogo";

const SESSION_KEY = "nadlr_splash_shown";

export default function NadlrSplashScreen() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"in" | "active" | "out">("in");
  const shouldReduceMotion = useReducedMotion();

  const handleFinish = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Ignore storage errors in private/incognito modes
    }
    setPhase("out");
    setTimeout(() => {
      setVisible(false);
      // Ensure body scrolling is unrestricted
      document.body.style.overflow = "";
    }, 400);
  }, []);

  useEffect(() => {
    // If reduced motion is requested, immediately skip
    if (shouldReduceMotion) {
      return;
    }

    // Check if splash has already been shown in this browser session
    try {
      const alreadyShown = sessionStorage.getItem(SESSION_KEY);
      if (alreadyShown === "1") {
        return;
      }
    } catch {
      // In case sessionStorage is blocked, show once per page load
    }

    // First visit in session: show splash
    setVisible(true);

    // Lock scrolling briefly during the intro
    document.body.style.overflow = "hidden";

    // Sequence timing:
    // 0ms: "in" - initial reveal
    // 400ms: "active" - brand glow and progress wipe
    // 1100ms: trigger exit
    const t1 = setTimeout(() => setPhase("active"), 400);
    const t2 = setTimeout(() => handleFinish(), 1150);

    // Safety fallback: guaranteed exit after 1600ms
    const safetyTimeout = setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
    }, 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = "";
    };
  }, [shouldReduceMotion, handleFinish]);

  if (!visible) return null;

  return (
    <AnimatePresence mode="wait">
      {phase !== "out" && (
        <motion.div
          key="nadlr-splash-screen"
          role="status"
          aria-live="polite"
          aria-label="Loading NADLR. portfolio"
          initial={{ opacity: 1, y: 0 }}
          exit={{ y: "-100%", opacity: 0.95 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999999] bg-[#171717] text-[#F5F0E6] flex flex-col items-center justify-center p-4 sm:p-6 select-none font-mono"
        >
          {/* Top & Bottom Technical Header Lines */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between text-[11px] font-bold text-muted-foreground/75 tracking-wider border-b border-white/10 pb-3">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFE500] animate-pulse inline-block" />
              <span>BOOT // 01</span>
            </span>
            <span>RUNTIME_V2.0 // UTC+7</span>
          </div>

          {/* Center Brand Slab */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm sm:max-w-md border-[3.5px] border-[#FFE500] bg-[#171717] p-6 sm:p-8 shadow-neo-yellow-xl relative"
          >
            {/* Corner Decorative Accent */}
            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-[#FFE500] text-[#171717] font-black text-[10px] uppercase shadow-neo-sm">
              SYS.OK
            </div>

            {/* Monogram + Wordmark Lockup */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 relative">
                <div className="absolute -inset-1 bg-[#FFE500] rotate-3 opacity-90" />
                <div className="relative border-2 border-border bg-[#171717] p-2 shadow-neo-sm">
                  <NadlrMonogram size={48} />
                </div>
              </div>

              {/* Bold Primary Brand Name */}
              <div className="flex items-baseline mb-1">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase font-mono">
                  NADLR
                </span>
                <span className="text-4xl sm:text-5xl font-black text-[#FFE500] font-mono">
                  .
                </span>
              </div>

              <p className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">
                Farhan Sultan Nadlir // Portfolio
              </p>

              {/* Kinetic Neo Yellow Progress Line */}
              <div className="w-full mt-6 h-2 border-2 border-white/20 bg-black/40 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-[#FFE500]"
                />
              </div>

              {/* Status Footer */}
              <div className="w-full flex justify-between mt-3 text-[10px] font-bold text-muted-foreground/80 tracking-wider">
                <span>INITIALIZING SYSTEM</span>
                <span className="text-[#FFE500]">READY</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between text-[11px] font-bold text-muted-foreground/75 tracking-wider border-t border-white/10 pt-3">
            <span>FULL-STACK WEB ARCHITECTURE</span>
            <span className="text-[#FFE500]">© {new Date().getFullYear()}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
