"use client";
import { useCallback } from "react";

export function useScrollTransition() {
  const scrollTo = useCallback((target: string) => {
    // Handle full URLs
    if (target.startsWith("http")) {
      window.location.href = target;
      return;
    }

    // Handle section IDs (with or without #)
    const sectionId = target.startsWith("#") ? target.slice(1) : target;
    const element = document.getElementById(sectionId) as HTMLElement;
    if (!element) return;

    document.body.style.transition = "opacity 0.25s ease";
    document.body.style.opacity = "0.4";

    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
      
      setTimeout(() => {
        document.body.style.opacity = "";
        document.body.style.transition = "";
      }, 400);
    }, 150);
  }, []);

  return { scrollTo };
}