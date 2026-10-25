"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  MAP_COLS,
  MAP_ROWS,
  TILE_SIZE,
  MAP_TILES,
  WORLD_ENTITIES,
  Entity,
} from "./worldData";
import { drawTile, drawPlayer, drawNPC } from "./pixelRenderer";
import DialogueBox from "./DialogueBox";
import RpgMenu from "./RpgMenu";
import { Menu, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Layout, Sparkles } from "lucide-react";

interface PixelWorldProps {
  onOpenDirectMode: (section?: string) => void;
}

export default function PixelWorld({ onOpenDirectMode }: PixelWorldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Player Grid Position & Movement State
  const playerRef = useRef({
    x: 4, // starting grid tile
    y: 4,
    px: 4 * TILE_SIZE,
    py: 4 * TILE_SIZE,
    facing: "down" as "down" | "up" | "left" | "right",
    isMoving: false,
    frame: 0,
    targetX: 4,
    targetY: 4,
  });

  const [dialogueEntity, setDialogueEntity] = useState<Entity | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState<string | null>(null);
  const [discoveredCount, setDiscoveredCount] = useState<number>(0);
  const discoveredSetRef = useRef<Set<string>>(new Set());

  // Input keys held
  const keysRef = useRef<{ [key: string]: boolean }>({});
  const animFrameRef = useRef<number | null>(null);
  const tickRef = useRef<number>(0);

  // Check collision against map tiles & entities
  const isSolid = useCallback((gx: number, gy: number): boolean => {
    // Boundary check
    if (gx < 0 || gx >= MAP_COLS || gy < 0 || gy >= MAP_ROWS) {
      return true;
    }

    // Tile solid checks
    const tile = MAP_TILES[gy]?.[gx];
    // Solid tiles: 1 (tree), 3 (water), 4 (building wall), 5 (roof), 8 (fence), 9 (signpost)
    if (tile === 1 || tile === 3 || tile === 4 || tile === 5 || tile === 8 || tile === 9) {
      return true;
    }

    // Entity collision check
    const entityOnTile = WORLD_ENTITIES.find((e) => e.x === gx && e.y === gy);
    if (entityOnTile) {
      return true;
    }

    return false;
  }, []);

  // Check what interactable entity is directly in front of the player
  const checkInteraction = useCallback(() => {
    const p = playerRef.current;
    let targetX = p.x;
    let targetY = p.y;

    if (p.facing === "down") targetY += 1;
    else if (p.facing === "up") targetY -= 1;
    else if (p.facing === "left") targetX -= 1;
    else if (p.facing === "right") targetX += 1;

    // Check entity match
    const entity = WORLD_ENTITIES.find((e) => e.x === targetX && e.y === targetY);
    if (entity) {
      return entity;
    }

    // Check building door interactions
    if (p.facing === "up" && MAP_TILES[targetY]?.[targetX] === 6) {
      // Interacting with a door
      if (targetX === 4 && targetY === 3) {
        return WORLD_ENTITIES.find((e) => e.id === "guide-oak") || null;
      }
      if (targetX === 11 && targetY === 3) {
        return WORLD_ENTITIES.find((e) => e.id === "project-researcher") || null;
      }
      if (targetX === 8 && targetY === 11) {
        return WORLD_ENTITIES.find((e) => e.id === "comm-officer") || null;
      }
    }

    return null;
  }, []);

  // Trigger dialogue interaction
  const triggerInteract = useCallback(() => {
    if (dialogueEntity) {
      // If already in dialogue, let the dialogue component advance
      return;
    }
    const targetEntity = checkInteraction();
    if (targetEntity) {
      // Face towards player
      const p = playerRef.current;
      if (p.facing === "up") targetEntity.facing = "down";
      else if (p.facing === "down") targetEntity.facing = "up";
      else if (p.facing === "left") targetEntity.facing = "right";
      else if (p.facing === "right") targetEntity.facing = "left";

      setDialogueEntity(targetEntity);

      // Track discovery
      if (!discoveredSetRef.current.has(targetEntity.id)) {
        discoveredSetRef.current.add(targetEntity.id);
        setDiscoveredCount(discoveredSetRef.current.size);
      }
    }
  }, [checkInteraction, dialogueEntity]);

  // Main Render Routine
  const renderWorld = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Draw Map Tiles
    for (let r = 0; r < MAP_ROWS; r++) {
      for (let c = 0; c < MAP_COLS; c++) {
        drawTile(ctx, MAP_TILES[r][c], c, r, tickRef.current);
      }
    }

    // 2. Draw Entities / NPCs
    for (const ent of WORLD_ENTITIES) {
      drawNPC(ctx, ent.x * TILE_SIZE, ent.y * TILE_SIZE, ent.sprite, ent.facing);
    }

    // 3. Draw Player Character
    const p = playerRef.current;
    drawPlayer(ctx, p.px, p.py, p.facing, p.frame);
  }, []);

  // Game Loop
  useEffect(() => {
    let lastTime = performance.now();
    const moveSpeed = 2; // px per tick (smooth interpolation)

    const loop = (currentTime: number) => {
      tickRef.current++;
      const p = playerRef.current;

      // Only process movement if not in dialogue or menu
      if (!dialogueEntity && !isMenuOpen) {
        if (!p.isMoving) {
          // Check key directions
          let nextDir: "down" | "up" | "left" | "right" | null = null;
          let dx = 0;
          let dy = 0;

          if (keysRef.current["ArrowUp"] || keysRef.current["w"] || keysRef.current["W"]) {
            nextDir = "up";
            dy = -1;
          } else if (keysRef.current["ArrowDown"] || keysRef.current["s"] || keysRef.current["S"]) {
            nextDir = "down";
            dy = 1;
          } else if (keysRef.current["ArrowLeft"] || keysRef.current["a"] || keysRef.current["A"]) {
            nextDir = "left";
            dx = -1;
          } else if (keysRef.current["ArrowRight"] || keysRef.current["d"] || keysRef.current["D"]) {
            nextDir = "right";
            dx = 1;
          }

          if (nextDir) {
            p.facing = nextDir;
            const targetX = p.x + dx;
            const targetY = p.y + dy;

            if (!isSolid(targetX, targetY)) {
              p.isMoving = true;
              p.targetX = targetX;
              p.targetY = targetY;
            }
          }

          // Check if interaction is available in current facing direction
          const facingEnt = checkInteraction();
          setActivePrompt(facingEnt ? `[SPACE / A] Talk to ${facingEnt.name}` : null);
        } else {
          // Interpolate player px, py toward target tile
          const targetPx = p.targetX * TILE_SIZE;
          const targetPy = p.targetY * TILE_SIZE;

          if (p.px < targetPx) p.px = Math.min(targetPx, p.px + moveSpeed);
          else if (p.px > targetPx) p.px = Math.max(targetPx, p.px - moveSpeed);

          if (p.py < targetPy) p.py = Math.min(targetPy, p.py + moveSpeed);
          else if (p.py > targetPy) p.py = Math.max(targetPy, p.py - moveSpeed);

          // Animate walk frame cycle
          p.frame = Math.floor(tickRef.current / 8) % 3;

          // Reached destination tile
          if (p.px === targetPx && p.py === targetPy) {
            p.x = p.targetX;
            p.y = p.targetY;
            p.isMoving = false;
            p.frame = 0;
          }
        }
      }

      renderWorld();
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [dialogueEntity, isMenuOpen, isSolid, checkInteraction, renderWorld]);

  // Keyboard Event Handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      // Never hijack keys if user is typing in form controls
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }

      if (e.key === " " || e.key === "Enter" || e.key === "z" || e.key === "Z") {
        e.preventDefault();
        triggerInteract();
        return;
      }

      if (e.key === "m" || e.key === "M" || e.key === "Escape") {
        if (!dialogueEntity) {
          e.preventDefault();
          setIsMenuOpen((prev) => !prev);
          return;
        }
      }

      keysRef.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [triggerInteract, dialogueEntity]);

  // Virtual D-Pad handlers for mobile
  const handleVirtualDirDown = (dirKey: string) => {
    keysRef.current[dirKey] = true;
  };
  const handleVirtualDirUp = (dirKey: string) => {
    keysRef.current[dirKey] = false;
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-6 px-2 sm:px-4 select-none font-mono">
      {/* Top Game Controls HUD */}
      <div className="w-full max-w-[800px] flex items-center justify-between px-3 py-2 bg-[#173F35] text-[#F7F1D5] border-2 border-[#242B25] shadow-md text-xs mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B8FF3B] animate-pulse" />
          <span className="font-bold text-[11px] sm:text-xs">
            PALLET_TOWN // NADLR_V2
          </span>
          <span className="hidden md:inline text-[#A6CDBA] text-[10px]">
            [DISCOVERED: {discoveredCount}/6 LANDMARKS]
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#242B25] text-[#F2C94C] hover:bg-[#F2C94C] hover:text-[#173F35] transition-colors cursor-pointer text-xs font-bold"
            aria-label="Open Game Start Menu"
          >
            <Menu size={13} />
            <span>START [M]</span>
          </button>

          {/* Switch to Direct Mode Button */}
          <button
            onClick={() => onOpenDirectMode()}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#F2C94C] text-[#173F35] font-bold text-xs hover:bg-[#F7F1D5] transition-colors cursor-pointer shadow-sm"
          >
            <Layout size={13} />
            <span className="hidden sm:inline">VIEW AS</span>
            <span>PORTFOLIO</span>
          </button>
        </div>
      </div>

      {/* Main Pixel Canvas Frame */}
      <div className="relative w-full max-w-[800px] aspect-[576/448] border-[4px] border-[#242B25] bg-[#68B86B] shadow-2xl overflow-hidden rounded-xs">
        {/* Pixel Canvas */}
        <canvas
          ref={canvasRef}
          width={MAP_COLS * TILE_SIZE}
          height={MAP_ROWS * TILE_SIZE}
          className="w-full h-full block"
          style={{ imageRendering: "pixelated" }}
        />

        {/* Live Interaction Cue Banner */}
        {activePrompt && !dialogueEntity && !isMenuOpen && (
          <div
            onClick={triggerInteract}
            className="absolute top-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 bg-[#242B25]/90 text-[#F2C94C] border border-[#F2C94C] text-xs font-bold shadow-lg animate-bounce cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles size={12} />
            <span>{activePrompt}</span>
          </div>
        )}

        {/* Dialogue Box */}
        <DialogueBox
          entity={dialogueEntity}
          onClose={() => setDialogueEntity(null)}
          onOpenDirectMode={onOpenDirectMode}
        />
      </div>

      {/* Mobile Touch Gamepad Controller (Visible on touch devices / small screens) */}
      <div className="w-full max-w-[800px] mt-4 flex items-center justify-between px-4 py-3 bg-[#173F35] text-[#F7F1D5] border-2 border-[#242B25] md:hidden">
        {/* 4-Way Virtual D-Pad */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Up */}
          <button
            onPointerDown={() => handleVirtualDirDown("ArrowUp")}
            onPointerUp={() => handleVirtualDirUp("ArrowUp")}
            onPointerLeave={() => handleVirtualDirUp("ArrowUp")}
            className="absolute top-0 w-9 h-9 bg-[#242B25] active:bg-[#F2C94C] active:text-[#173F35] text-[#F7F1D5] flex items-center justify-center font-bold border border-[#F7F1D5]/30"
            aria-label="Move Up"
          >
            <ArrowUp size={16} />
          </button>
          {/* Down */}
          <button
            onPointerDown={() => handleVirtualDirDown("ArrowDown")}
            onPointerUp={() => handleVirtualDirUp("ArrowDown")}
            onPointerLeave={() => handleVirtualDirUp("ArrowDown")}
            className="absolute bottom-0 w-9 h-9 bg-[#242B25] active:bg-[#F2C94C] active:text-[#173F35] text-[#F7F1D5] flex items-center justify-center font-bold border border-[#F7F1D5]/30"
            aria-label="Move Down"
          >
            <ArrowDown size={16} />
          </button>
          {/* Left */}
          <button
            onPointerDown={() => handleVirtualDirDown("ArrowLeft")}
            onPointerUp={() => handleVirtualDirUp("ArrowLeft")}
            onPointerLeave={() => handleVirtualDirUp("ArrowLeft")}
            className="absolute left-0 w-9 h-9 bg-[#242B25] active:bg-[#F2C94C] active:text-[#173F35] text-[#F7F1D5] flex items-center justify-center font-bold border border-[#F7F1D5]/30"
            aria-label="Move Left"
          >
            <ArrowLeft size={16} />
          </button>
          {/* Right */}
          <button
            onPointerDown={() => handleVirtualDirDown("ArrowRight")}
            onPointerUp={() => handleVirtualDirUp("ArrowRight")}
            onPointerLeave={() => handleVirtualDirUp("ArrowRight")}
            className="absolute right-0 w-9 h-9 bg-[#242B25] active:bg-[#F2C94C] active:text-[#173F35] text-[#F7F1D5] flex items-center justify-center font-bold border border-[#F7F1D5]/30"
            aria-label="Move Right"
          >
            <ArrowRight size={16} />
          </button>
          {/* Center */}
          <div className="w-9 h-9 bg-[#1E252B] border border-[#242B25]" />
        </div>

        {/* Action (A) and (B) Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-12 h-12 rounded-full bg-[#242B25] active:bg-[#F2C94C] active:text-[#173F35] text-[#F7F1D5] font-black text-xs border-2 border-[#F7F1D5] flex items-center justify-center shadow-md cursor-pointer"
            aria-label="Menu"
          >
            MENU
          </button>

          <button
            onClick={triggerInteract}
            className="w-14 h-14 rounded-full bg-[#D90429] active:bg-[#F2C94C] active:text-[#173F35] text-white font-black text-sm border-2 border-[#FFFFFF] flex items-center justify-center shadow-lg cursor-pointer"
            aria-label="Action Button"
          >
            (A)
          </button>
        </div>
      </div>

      {/* Desktop Controls Legend */}
      <div className="w-full max-w-[800px] hidden md:flex items-center justify-between px-3 py-1.5 mt-2 text-[11px] text-[#A6CDBA] bg-[#173F35]/80 border border-[#242B25]">
        <span>MOVE: [W, A, S, D] or [ARROWS]</span>
        <span>TALK / INTERACT: [SPACE] or [ENTER]</span>
        <span>MENU: [M] or [ESC]</span>
      </div>

      {/* Start / Pause Menu */}
      <RpgMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenDirectMode={onOpenDirectMode}
        onTriggerEntity={(id) => {
          const ent = WORLD_ENTITIES.find((e) => e.id === id);
          if (ent) setDialogueEntity(ent);
        }}
      />
    </section>
  );
}
