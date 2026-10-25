"use client";

import { FileDown, ArrowUpRight, GraduationCap, MapPin, Code2, Database } from "lucide-react";

export default function ReimaginedAbout() {
  const timeline = [
    {
      year: "2023 — 2024",
      title: "Systems Analysis & Database Modeling",
      description:
        "University coursework in Information Systems: business process modeling, relational database theory (MySQL), and systems architecture.",
    },
    {
      year: "2024 — 2025",
      title: "Backend Development with Laravel",
      description:
        "Built full-stack monolithic applications in PHP and Laravel, integrating browser Geolocation APIs and Cloudinary asset management in AbsenKu.",
    },
    {
      year: "2025 — Present",
      title: "Modern React & Next.js Ecosystem",
      description:
        "Building responsive, strictly typed web applications with React 19, Next.js, and TypeScript, focusing on performance and accessible UI craft.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 md:px-14 relative font-mono bg-background text-foreground scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 border-b-[2.5px] border-border pb-5">
          <div>
            <span className="text-xs font-black text-muted-foreground uppercase block mb-1">
              Background &amp; Profile
            </span>
            <h2 className="text-display-section text-foreground leading-none">
              About <span className="bg-[#FFE500] text-[#171717] px-2">Farhan</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-sans text-muted-foreground max-w-md">
            Information Systems student and web developer based in Indonesia, balancing database analysis with frontend engineering.
          </p>
        </div>

        {/* Asymmetrical 2-Column Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Big Pull-Quote & Fast Facts (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#FFE500] text-[#171717] border-[3px] border-border shadow-neo-xl">
              <span className="text-[10px] font-black uppercase tracking-wider block mb-2 opacity-80">
                Philosophy
              </span>
              <blockquote className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-snug">
                &ldquo;Building software that balances structured database foundations with responsive, enjoyable interfaces.&rdquo;
              </blockquote>
            </div>

            {/* Quick Human Facts */}
            <div className="p-5 border-2 border-border bg-card shadow-neo-sm space-y-3 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-border/20">
                <span className="text-muted-foreground font-bold">Field:</span>
                <span className="font-bold text-foreground">Information Systems (Sistem Informasi)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/20">
                <span className="text-muted-foreground font-bold">Location:</span>
                <span className="font-bold text-foreground">Indonesia (WIB / UTC+7)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/20">
                <span className="text-muted-foreground font-bold">Core Stack:</span>
                <span className="font-bold text-[#171717] bg-[#FFE500] px-1.5 py-0.5">Next.js · React · Laravel</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-muted-foreground font-bold">Status:</span>
                <span className="font-bold text-foreground">Open to opportunities</span>
              </div>
            </div>

            {/* Direct CV Download Link */}
            <div>
              <a
                href="/CV_Farhan_Sultan_Nadlir.pdf"
                target="_blank"
                rel="noreferrer"
                className="neo-btn-yellow w-full flex items-center justify-center gap-2 text-xs font-black shadow-neo"
              >
                <FileDown size={15} />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Natural Narrative & Real Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Real Personal Story */}
            <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-foreground/85">
              <p>
                I am an Information Systems student in Indonesia with a genuine interest in how business requirements turn into clean, reliable web applications. My studies give me a strong foundation in systems analysis, process workflows, and relational database normalization.
              </p>
              <p>
                On the engineering side, I started by building applications in PHP and Laravel, learning how to handle server-side routing, database migrations, and authentication. Later, I expanded into the modern JavaScript ecosystem, focusing on Next.js, React, and TypeScript.
              </p>
              <p>
                Whether designing a local small-business catalog or a campus attendance verification tool, I prefer straightforward architectures, clean code, and fast page loads over unnecessary complexity.
              </p>
            </div>

            {/* Chronological Learning Timeline */}
            <div className="space-y-4 pt-4 border-t-2 border-border">
              <span className="text-xs font-black uppercase text-muted-foreground tracking-wider block mb-4">
                Chronological Milestones
              </span>

              <div className="space-y-6">
                {timeline.map((item) => (
                  <div
                    key={item.year}
                    className="relative pl-6 border-l-2 border-[#FFE500] space-y-1 group"
                  >
                    <div className="absolute -left-[7px] top-1 w-3 h-3 bg-[#FFE500] border-2 border-border" />
                    <span className="text-[11px] font-black text-muted-foreground block">
                      {item.year}
                    </span>
                    <h4 className="text-sm font-black uppercase text-foreground">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
