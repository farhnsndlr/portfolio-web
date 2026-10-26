"use client";

import {
  ArrowDownRight,
  Send,
  FileDown,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Sparkles,
  Cpu,
} from "lucide-react";

export default function PixelHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-28 pb-16 overflow-hidden bg-pixel-tile font-mono">
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Trainer Status HUD */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#204B38] text-[#F7F1D5] border-2 border-[#242B25] text-xs font-bold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#F2C94C] animate-pulse" />
          <span>TRAINER // FARHAN SULTAN NADLIR</span>
          <span className="text-[#A6CDBA] hidden sm:inline">•</span>
          <span className="text-[#F2C94C] hidden sm:inline">HP: 100% // ONLINE</span>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic & Profile Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-black text-[#A6CDBA] uppercase tracking-widest mb-2">
              SYSTEM INFORMATION STUDENT &amp; WEB ARCHITECT
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F7F1D5] leading-[0.92] select-none">
              FARHAN
              <br />
              SULTAN
              <br />
              <span className="text-[#F2C94C]">NADLIR.</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base font-sans font-medium text-[#D8E6DE] leading-relaxed max-w-xl">
              I build modern and scalable digital solutions with clean architecture, performance optimization, and structured system design. Transforming ideas into reliable web applications with precision.
            </p>

            {/* CTAs Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <button
                onClick={() => scrollTo("projects")}
                className="pixel-btn-gold flex items-center gap-2 cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDownRight size={15} />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="pixel-btn flex items-center gap-2 cursor-pointer"
              >
                <span>CONTACT ME</span>
                <Send size={13} />
              </button>

              <a
                href="/CV_Farhan_Sultan_Nadlir.pdf"
                target="_blank"
                rel="noreferrer"
                className="pixel-btn flex items-center gap-2 cursor-pointer bg-[#1B3B2C]"
              >
                <FileDown size={14} />
                <span>RESUME (PDF)</span>
              </a>
            </div>

            {/* Direct Social Slots */}
            <div className="flex items-center gap-2 pt-6 mt-2">
              <span className="text-[11px] text-[#A6CDBA] font-bold mr-1">
                COMM_SLOTS:
              </span>
              {[
                {
                  icon: MessageCircle,
                  href: "https://wa.me/6281574029222",
                  label: "WhatsApp",
                  highlight: true,
                },
                {
                  icon: Github,
                  href: "https://github.com/farhnsndlr",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/farhansultan",
                  label: "LinkedIn",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/farhnsndlr",
                  label: "Instagram",
                },
              ].map(({ icon: Icon, href, label, highlight }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className={`w-9 h-9 border-2 border-[#242B25] flex items-center justify-center transition-colors shadow-sm ${
                    highlight
                      ? "bg-[#79B86A] text-[#1D241E] hover:bg-[#F2C94C]"
                      : "bg-[#204B38] text-[#F7F1D5] hover:bg-[#F2C94C] hover:text-[#242B25]"
                  }`}
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Retro GBA Pixel-Art Diorama Illustration (5 Cols) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-md border-[4px] border-[#242B25] bg-[#79B86A] p-2 shadow-2xl relative overflow-hidden">
              {/* Diorama Header Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-[#204B38] text-[#F7F1D5] border-b-2 border-[#242B25] text-[11px] font-bold mb-2">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={12} className="text-[#F2C94C]" />
                  <span>OVERWORLD_VIEWPORT</span>
                </div>
                <span className="text-[#F2C94C]">PALLET_STUDIO</span>
              </div>

              {/* Crisp SVG Pixel-Art Scene */}
              <div className="relative w-full aspect-[4/3] bg-[#68B86B] border-2 border-[#242B25] overflow-hidden select-none pixelated">
                <svg
                  viewBox="0 0 200 150"
                  className="w-full h-full block"
                  shapeRendering="crispEdges"
                >
                  {/* Sky & Pixel Clouds */}
                  <rect x="0" y="0" width="200" height="70" fill="#68AFC5" />
                  {/* Cloud 1 */}
                  <g className="animate-cloud-drift">
                    <rect x="20" y="16" width="36" height="10" fill="#FFFFFF" />
                    <rect x="26" y="10" width="22" height="6" fill="#FFFFFF" />
                    <rect x="22" y="24" width="30" height="4" fill="#E2F1F8" />
                  </g>
                  {/* Cloud 2 */}
                  <g className="animate-cloud-drift" style={{ animationDelay: "4s" }}>
                    <rect x="130" y="24" width="44" height="12" fill="#FFFFFF" />
                    <rect x="140" y="16" width="26" height="8" fill="#FFFFFF" />
                    <rect x="134" y="34" width="34" height="4" fill="#E2F1F8" />
                  </g>

                  {/* Distant Hills */}
                  <polygon points="0,70 40,42 90,70" fill="#204B38" />
                  <polygon points="70,70 120,38 170,70" fill="#285943" />
                  <polygon points="140,70 180,48 200,70" fill="#204B38" />

                  {/* Ground & Grass Plains */}
                  <rect x="0" y="70" width="200" height="80" fill="#68B86B" />

                  {/* Dirt / Cobble Path */}
                  <polygon points="60,150 140,150 115,70 85,70" fill="#F7F1D5" />
                  <rect x="90" y="90" width="8" height="4" fill="#E8DEB7" />
                  <rect x="105" y="115" width="10" height="5" fill="#E8DEB7" />
                  <rect x="78" y="130" width="12" height="6" fill="#E8DEB7" />

                  {/* Pine Trees (Left & Right) */}
                  {/* Left Pine */}
                  <rect x="16" y="86" width="6" height="16" fill="#5A331E" />
                  <polygon points="19,45 6,75 32,75" fill="#173F35" />
                  <polygon points="19,55 8,82 30,82" fill="#1E5245" />
                  <polygon points="19,65 10,90 28,90" fill="#285943" />

                  {/* Right Pine */}
                  <rect x="172" y="90" width="6" height="16" fill="#5A331E" />
                  <polygon points="175,50 162,80 188,80" fill="#173F35" />
                  <polygon points="175,60 164,88 186,88" fill="#1E5245" />

                  {/* Wooden Fence */}
                  <rect x="35" y="88" width="40" height="3" fill="#7A4C2E" />
                  <rect x="35" y="94" width="40" height="3" fill="#7A4C2E" />
                  <rect x="40" y="84" width="4" height="16" fill="#59341C" />
                  <rect x="55" y="84" width="4" height="16" fill="#59341C" />
                  <rect x="70" y="84" width="4" height="16" fill="#59341C" />

                  {/* Outdoor Workstation Desk */}
                  <rect x="85" y="105" width="30" height="12" fill="#8B5731" />
                  <rect x="87" y="117" width="4" height="14" fill="#5A331E" />
                  <rect x="109" y="117" width="4" height="14" fill="#5A331E" />

                  {/* Retro Laptop / Terminal on Desk */}
                  <polygon points="95,105 105,105 107,96 93,96" fill="#242B25" />
                  <rect x="95" y="98" width="10" height="6" fill="#F2C94C" />
                  <rect x="94" y="104" width="12" height="2" fill="#4A544C" />

                  {/* Character Sprite (Farhan sitting/standing behind desk) */}
                  {/* Cap & Hair */}
                  <rect x="94" y="78" width="12" height="6" fill="#285943" />
                  <rect x="93" y="81" width="14" height="3" fill="#F2C94C" />
                  {/* Face */}
                  <rect x="95" y="84" width="10" height="7" fill="#FAD0A5" />
                  {/* Eyes */}
                  <rect x="97" y="86" width="2" height="2" fill="#242B25" />
                  <rect x="101" y="86" width="2" height="2" fill="#242B25" />
                  {/* Jacket */}
                  <rect x="93" y="91" width="14" height="14" fill="#285943" />
                  <rect x="98" y="91" width="4" height="14" fill="#F7F1D5" />

                  {/* Flower Sprites */}
                  <rect x="42" y="118" width="3" height="3" fill="#E63946" />
                  <rect x="48" y="128" width="3" height="3" fill="#F2C94C" />
                  <rect x="145" y="110" width="3" height="3" fill="#E63946" />
                  <rect x="155" y="122" width="3" height="3" fill="#F2C94C" />
                </svg>

                {/* Floating Status Badge */}
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#242B25]/90 text-[#F2C94C] border border-[#F2C94C] text-[10px] font-bold">
                  FARHAN SULTAN NADLIR // LVL.2026
                </div>
              </div>

              {/* Bottom Specs Strip */}
              <div className="mt-2 pt-2 border-t-2 border-[#242B25] flex items-center justify-between text-[10px] text-[#242B25] font-black px-1">
                <span className="flex items-center gap-1">
                  <Cpu size={12} />
                  <span>CLEAN ARCHITECTURE</span>
                </span>
                <span className="text-[#204B38]">INDONESIA [UTC+7]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
