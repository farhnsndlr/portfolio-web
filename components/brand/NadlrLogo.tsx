"use client";

import React from "react";
import Link from "next/link";

interface NadlrLogoProps {
  variant?: "full" | "wordmark" | "monogram";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  className?: string;
  asLink?: boolean;
}

export function NadlrMonogram({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer brutalist box with border */}
      <rect
        x="3"
        y="3"
        width="58"
        height="58"
        className="fill-[#171717] dark:fill-[#FFE500] stroke-current"
        strokeWidth="3.5"
      />
      {/* Geometric N letter */}
      <polygon
        points="14,16 22,16 34,38 34,16 42,16 42,48 34,48 22,26 22,48 14,48"
        className="fill-[#F5F0E6] dark:fill-[#171717]"
      />
      {/* Signature Period in contrasting Neo Yellow / Ink Black */}
      <rect
        x="46"
        y="40"
        width="8"
        height="8"
        className="fill-[#FFE500] dark:fill-[#171717]"
      />
    </svg>
  );
}

export default function NadlrLogo({
  variant = "full",
  size = "md",
  href = "/",
  className = "",
  asLink = true,
}: NadlrLogoProps) {
  const monogramSizes = {
    sm: 24,
    md: 30,
    lg: 40,
    xl: 56,
  };

  const textSizes = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl",
    lg: "text-3xl sm:text-4xl",
    xl: "text-5xl sm:text-6xl",
  };

  const content = (
    <div
      className={`inline-flex items-center gap-2.5 font-mono select-none group ${className}`}
    >
      {/* Monogram emblem */}
      {variant !== "wordmark" && (
        <div className="relative">
          <div className="absolute -inset-0.5 bg-[#FFE500] border border-border shadow-neo-sm group-hover:rotate-6 transition-transform" />
          <div className="relative border-2 border-border bg-[#171717] dark:bg-[#FFE500] p-1 shadow-neo-sm">
            <NadlrMonogram size={monogramSizes[size]} />
          </div>
        </div>
      )}

      {/* Primary Wordmark: NADLR. */}
      {variant !== "monogram" && (
        <div className="flex items-baseline">
          <span
            className={`font-black tracking-tight uppercase text-foreground leading-none font-mono ${textSizes[size]}`}
          >
            NADLR
          </span>
          <span
            className={`font-black text-[#FFE500] font-mono leading-none ${textSizes[size]}`}
          >
            .
          </span>
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        href={href}
        className="cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FFE500] inline-block"
        aria-label="NADLR. — Return to homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
}
