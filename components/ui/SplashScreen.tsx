"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("out"), 1400);
    const t3 = setTimeout(() => onComplete(), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "out" ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[99999] bg-[#F5F0E6] dark:bg-[#111111] bg-grid-dots flex items-center justify-center p-4 select-none"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-full max-w-md border-[3px] border-[#171717] dark:border-[#FFE500] bg-white dark:bg-[#1A1A1A] p-6 sm:p-8 shadow-brutal-xl relative"
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {/* Corner crosshairs decoration */}
            <div className="absolute top-2 left-2 font-mono text-[10px] text-[#171717]/60 dark:text-[#FFE500]/70 font-bold">
              + 01 // BOOT
            </div>
            <div className="absolute top-2 right-2 font-mono text-[10px] text-[#171717]/60 dark:text-[#FFE500]/70 font-bold">
              SYS.OK +
            </div>

            <div className="flex flex-col items-center text-center mt-3">
              <div className="inline-block bg-[#FFE500] text-[#171717] px-3 py-1 border-2 border-[#171717] font-mono text-xs font-black uppercase tracking-widest mb-3 shadow-brutal-sm">
                INITIALIZING V2
              </div>

              <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-[#171717] dark:text-white uppercase leading-none">
                NADLR
              </h1>

              <p className="mt-2 text-xs sm:text-sm font-mono font-bold tracking-wider text-[#171717]/70 dark:text-gray-300 uppercase">
                Farhan Sultan Nadlir // Portfolio
              </p>

              {/* Neobrutalist Progress Bar */}
              <div className="w-full mt-6 h-5 border-2 border-[#171717] dark:border-[#FFE500] bg-[#E5DDCB] dark:bg-[#2A2A2A] p-0.5 overflow-hidden">
                <motion.div
                  className="h-full bg-[#FFE500] border-r-2 border-[#171717]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </div>

              <div className="w-full flex justify-between mt-2 font-mono text-[11px] text-[#171717]/60 dark:text-gray-400 font-bold">
                <span>LOADING ASSETS</span>
                <span>100% READY</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
