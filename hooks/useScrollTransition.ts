"use client";
import { useCallback } from "react";

export function useScrollTransition() {
  const scrollTo = useCallback((href: string) => {
    if (!href.startsWith("#")) {
      window.location.href = href;
      return;
    }

    const target = document.querySelector(href) as HTMLElement;
    if (!target) return;

    document.body.style.transition = "opacity 0.25s ease";
    document.body.style.opacity = "0.4";

    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth" });
      
      setTimeout(() => {
        document.body.style.opacity = "";
        document.body.style.transition = "";
      }, 400);
    }, 150);
  }, []);

  return { scrollTo };
}