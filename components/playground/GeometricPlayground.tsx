"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, RefreshCw, Layers, Compass, ToggleLeft, ToggleRight, Grid, Zap } from "lucide-react";

export default function GeometricPlayground() {
  // Playground state
  const [starRotation, setStarRotation] = useState<number>(0);
  const [stampIndex, setStampIndex] = useState<number>(0);
  const [toggleActive, setToggleActive] = useState<boolean>(true);
  const [interactionCount, setInteractionCount] = useState<number>(0);
  const [activeShape, setActiveShape] = useState<string>("STAR");
  const [gridState, setGridState] = useState<number[]>([1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1]);

  const stamps = [
    { title: "CLEAN ARCHITECTURE", subtitle: "SOLID PRINCIPLES", color: "bg-[#FFE500] text-[#171717]" },
    { title: "TURBOPACK SPEED", subtitle: "10X FAST COMPILER", color: "bg-[#171717] text-[#FFE500]" },
    { title: "STRICT TYPESCRIPT", subtitle: "ZERO RUNTIME ERRORS", color: "bg-card text-foreground" },
    { title: "GEOFENCING CORE", subtitle: "GPS HARDWARE API", color: "bg-[#FFE500] text-[#171717]" },
  ];

  const triggerInteraction = (shapeName: string) => {
    setInteractionCount((prev) => prev + 1);
    setActiveShape(shapeName);
  };

  const handleStarClick = () => {
    setStarRotation((prev) => prev + 90);
    triggerInteraction("STAR");
  };

  const handleStampCycle = () => {
    setStampIndex((prev) => (prev + 1) % stamps.length);
    triggerInteraction("STAMP");
  };

  const handleToggle = () => {
    setToggleActive((prev) => !prev);
    triggerInteraction("SWITCH");
  };

  const handleGridCellClick = (index: number) => {
    setGridState((prev) => {
      const copy = [...prev];
      copy[index] = copy[index] === 1 ? 0 : 1;
      return copy;
    });
    triggerInteraction(`CELL_${index + 1}`);
  };

  const currentStamp = stamps[stampIndex];

  return (
    <section id="playground" className="py-24 px-4 sm:px-8 md:px-14 relative font-mono bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b-[2.5px] border-border pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs mb-2">
              <span className="px-2.5 py-0.5 bg-[#FFE500] text-[#171717] font-black uppercase border-2 border-border shadow-neo-sm">
                [03 // PLAYGROUND_LAB]
              </span>
              <span className="text-muted-foreground font-bold">INTERACTIVE GEOMETRIC WORKSHOP</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight">
              BRUTAL <span className="bg-[#FFE500] text-[#171717] px-2">PLAYGROUND</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card border-2 border-border shadow-neo-sm">
              <Zap size={14} className="text-[#FFE500]" />
              <span>INTERACTIONS:</span>
              <span className="font-black bg-[#FFE500] text-[#171717] px-1.5 py-0.5">{interactionCount}</span>
            </div>

            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-secondary border-2 border-border">
              <span>FOCUS:</span>
              <span className="font-black text-[#FFE500] bg-[#171717] px-1.5 py-0.5">{activeShape}</span>
            </div>
          </div>
        </div>

        {/* Playground Grid of Kinetic Modules */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Toy 1: The Rotating Starburst (4 Cols) */}
          <div className="md:col-span-4 border-[3px] border-border bg-card p-6 shadow-neo-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-border text-xs font-black">
                <span className="bg-[#FFE500] text-[#171717] px-1.5 py-0.5">TOY 01 // ROTATION MATRIX</span>
                <span className="text-muted-foreground">CLICK TO ROTATE</span>
              </div>

              <p className="text-xs text-muted-foreground mb-6">
                Test kinetic spring angular momentum. Click the Neo Star to rotate 90 degrees with zero CPU idle overhead.
              </p>

              <div className="flex justify-center my-6">
                <motion.button
                  onClick={handleStarClick}
                  animate={{ rotate: starRotation }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-32 h-32 bg-[#FFE500] text-[#171717] border-[3px] border-border shadow-neo-lg flex items-center justify-center cursor-pointer select-none font-black text-4xl"
                  title="Click to rotate starburst"
                  aria-label="Click to rotate geometric star"
                >
                  ★
                </motion.button>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-border flex justify-between text-[11px] font-bold text-muted-foreground">
              <span>CURRENT ANGLE:</span>
              <span className="text-foreground font-black">{starRotation}°</span>
            </div>
          </div>

          {/* Toy 2: Kinetic Architectural Stamp (4 Cols) */}
          <div className="md:col-span-4 border-[3px] border-border bg-card p-6 shadow-neo-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-border text-xs font-black">
                <span className="bg-[#FFE500] text-[#171717] px-1.5 py-0.5">TOY 02 // SPEC STAMPER</span>
                <span className="text-muted-foreground">CLICK TO CYCLE</span>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                Cycle through architectural philosophies stamped with physical offset box shadows.
              </p>

              <div
                onClick={handleStampCycle}
                className={`p-5 border-[3px] border-border ${currentStamp.color} shadow-neo cursor-pointer select-none transition-transform active:scale-95 hover:-translate-y-1 my-4`}
                title="Click to stamp new specification"
              >
                <div className="flex justify-between items-center text-[10px] font-black mb-2">
                  <span>[SPEC 0{stampIndex + 1}]</span>
                  <div className="flex items-center gap-1">
                    <RefreshCw size={11} className="animate-spin" />
                    <span>NEXT</span>
                  </div>
                </div>
                <div className="text-base font-black uppercase tracking-tight">
                  {currentStamp.title}
                </div>
                <div className="text-xs font-bold opacity-80 mt-1">
                  {currentStamp.subtitle}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-border flex justify-between text-[11px] font-bold text-muted-foreground">
              <span>STAMP DECK:</span>
              <span className="text-foreground font-black">{stampIndex + 1} OF {stamps.length}</span>
            </div>
          </div>

          {/* Toy 3: Interactive Pixel Grid Matrix (4 Cols) */}
          <div className="md:col-span-4 border-[3px] border-border bg-card p-6 shadow-neo-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-border text-xs font-black">
                <span className="bg-[#FFE500] text-[#171717] px-1.5 py-0.5">TOY 03 // TACTILE 4x4 MATRIX</span>
                <span className="text-muted-foreground">TOGGLE TILES</span>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                Draw binary patterns by toggling tiles between Neo Yellow and ink surfaces.
              </p>

              <div className="grid grid-cols-4 gap-2 my-2">
                {gridState.map((val, i) => (
                  <button
                    key={i}
                    onClick={() => handleGridCellClick(i)}
                    className={`aspect-square border-2 border-border transition-all cursor-pointer font-black text-xs flex items-center justify-center ${
                      val === 1
                        ? "bg-[#FFE500] text-[#171717] shadow-neo-sm scale-100"
                        : "bg-background text-muted-foreground hover:bg-secondary"
                    }`}
                    aria-label={`Toggle matrix cell ${i + 1}`}
                  >
                    {val === 1 ? "✦" : "·"}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t-2 border-border flex justify-between text-[11px] font-bold text-muted-foreground">
              <span>ACTIVE CELLS:</span>
              <span className="text-foreground font-black">
                {gridState.filter((v) => v === 1).length} / 16
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Banner Strip */}
        <div className="mt-12 p-4 bg-[#FFE500] text-[#171717] border-[2.5px] border-border shadow-neo flex flex-col sm:flex-row items-center justify-between gap-4 font-black text-xs">
          <div className="flex items-center gap-2">
            <Compass size={18} />
            <span>PLAYGROUND PRINCIPLE: INTERACTION IS A FIRST-CLASS DESIGN MATERIAL.</span>
          </div>
          <span className="bg-[#171717] text-[#FFE500] px-3 py-1 border border-border">
            100% HARDWARE ACCELERATED
          </span>
        </div>
      </div>
    </section>
  );
}
