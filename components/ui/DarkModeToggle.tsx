"use client";

import { useState, useEffect, useRef } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const rippleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const startDark = saved ? saved === "dark" : prefersDark;

    setIsDark(startDark);
    document.documentElement.classList.toggle("dark", startDark);
  }, []);

  const toggle = () => {
    const newIsDark = !isDark;

    const btn = buttonRef.current;
    const ripple = rippleRef.current;
    if (!btn || !ripple) return;

    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const maxDim = Math.max(window.innerWidth, window.innerHeight);
    const size = maxDim * 2.5;

    ripple.style.cssText = `
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background-color: ${newIsDark ? "#171717" : "#F5F0E6"};
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
      display: block;
    `;

    ripple.getBoundingClientRect();

    ripple.style.transition = "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    ripple.style.transform = "translate(-50%, -50%) scale(1)";

    setTimeout(() => {
      document.documentElement.classList.toggle("dark", newIsDark);
      setIsDark(newIsDark);
      localStorage.setItem("theme", newIsDark ? "dark" : "light");
    }, 300);

    setTimeout(() => {
      ripple.style.transition = "opacity 0.25s ease";
      ripple.style.opacity = "0";
      setTimeout(() => {
        ripple.style.cssText = "display: none;";
      }, 250);
    }, 600);
  };

  return (
    <>
      {/* Ripple overlay */}
      <div ref={rippleRef} style={{ display: "none" }} />

      <button
        ref={buttonRef}
        onClick={toggle}
        className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 border-border bg-card text-foreground shadow-neo-sm hover:bg-[#FFE500] hover:text-[#171717] transition-all cursor-pointer"
        aria-label="Toggle color theme (Light / Dark)"
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {/* Moon icon */}
        <span
          className="absolute transition-all duration-300"
          style={{
            opacity: isDark ? 1 : 0,
            transform: isDark
              ? "rotate(0deg) scale(1)"
              : "rotate(90deg) scale(0.5)",
          }}
        >
          <MdDarkMode size={17} />
        </span>

        {/* Sun icon */}
        <span
          className="absolute transition-all duration-300"
          style={{
            opacity: isDark ? 0 : 1,
            transform: isDark
              ? "rotate(-90deg) scale(0.5)"
              : "rotate(0deg) scale(1)",
          }}
        >
          <MdLightMode size={17} />
        </span>
      </button>
    </>
  );
}
