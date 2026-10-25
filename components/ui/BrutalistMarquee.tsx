"use client";

interface BrutalistMarqueeProps {
  items?: string[];
  reverse?: boolean;
  className?: string;
}

const defaultItems = [
  "FARHAN SULTAN NADLIR",
  "FULL-STACK WEB ARCHITECT",
  "SYSTEM INFORMATION",
  "NEXT.JS 16 & REACT 19",
  "LARAVEL & PHP BACKEND",
  "CLEAN ARCHITECTURE",
  "PERFORMANCE DRIVEN",
  "INTERACTIVE RUNTIME V2",
  "INDONESIA // UTC+7",
];

export default function BrutalistMarquee({
  items = defaultItems,
  reverse = false,
  className = "",
}: BrutalistMarqueeProps) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden select-none border-y border-[#262D28] bg-[#141816] text-[#B8FF3B] py-2 font-mono text-xs font-bold tracking-wider ${className}`}
      role="region"
      aria-label="Technology and skills ticker"
    >
      <div className={reverse ? "marquee-track-reverse" : "marquee-tech-track"}>
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center whitespace-nowrap px-4">
            <span className="text-[#F3F4EF] hover:text-[#B8FF3B] transition-colors">{item}</span>
            <span className="mx-4 text-[#B8FF3B] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
