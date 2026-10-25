"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { projects, techIcons } from "@/data/projects";
import {
  Gamepad2,
  FileDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Send,
  CheckCircle,
  XCircle,
  Code2,
  Database,
  Layers,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

interface DirectPortfolioProps {
  onReturnToGame: () => void;
}

type Toast = { type: "success" | "error"; message: string } | null;

export default function DirectPortfolio({ onReturnToGame }: DirectPortfolioProps) {
  const router = useRouter();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to dispatch message");
      showToast("success", "Message transmitted! Farhan will get back to you soon.");
      setFormState({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      showToast(
        "error",
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="w-full bg-[#173F35] text-[#F7F1D5] font-mono selection:bg-[#F2C94C] selection:text-[#173F35] pb-24">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-4 left-4 md:left-auto md:right-8 z-[99999] max-w-md border-2 border-[#F2C94C] bg-[#242B25] text-[#F7F1D5] p-4 shadow-2xl flex items-start gap-3">
          {toast.type === "success" ? (
            <CheckCircle size={20} className="text-[#F2C94C] shrink-0 mt-0.5" />
          ) : (
            <XCircle size={20} className="text-[#FF453A] shrink-0 mt-0.5" />
          )}
          <div className="flex-1 text-xs">
            <span className="font-bold text-[#F2C94C] block uppercase">
              {toast.type === "success" ? "DISPATCH_CONFIRMED" : "DISPATCH_ERROR"}
            </span>
            <p className="mt-0.5 text-[#F7F1D5]/80">{toast.message}</p>
          </div>
        </div>
      )}

      {/* Top Direct Mode Bar */}
      <div className="w-full border-b-2 border-[#242B25] bg-[#122A23] px-4 sm:px-8 md:px-14 py-3 flex items-center justify-between text-xs sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#F2C94C] rounded-full animate-pulse" />
          <span className="font-bold">DIRECT_PORTFOLIO // RECRUITER_MODE</span>
        </div>

        <button
          onClick={onReturnToGame}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#F2C94C] text-[#173F35] font-black text-xs hover:bg-[#F7F1D5] transition-colors cursor-pointer shadow-sm"
        >
          <Gamepad2 size={15} />
          <span>PLAY OVERWORLD GAME</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 space-y-16">
        {/* ── SECTION 1: TRAINER CARD / PROFILE ── */}
        <section id="about" className="border-[3px] border-[#242B25] bg-[#F7F1D5] text-[#1D241E] p-6 sm:p-8 md:p-10 shadow-2xl relative">
          <div className="absolute -top-4 left-6 px-3 py-1 bg-[#173F35] text-[#F7F1D5] border-2 border-[#242B25] text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <Sparkles size={12} className="text-[#F2C94C]" />
            <span>TRAINER CARD // DEVELOPER DOSSIER</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
            {/* Avatar Profile Frame */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="w-44 h-48 border-[3px] border-[#242B25] bg-[#E5DDCB] p-1 shadow-md relative overflow-hidden">
                <img
                  src="/avatar.png"
                  alt="Farhan Sultan Nadlir"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-[#F2C94C] text-[#173F35] text-[9px] font-black border border-[#242B25]">
                  DEV_CERTIFIED
                </div>
              </div>
              <h3 className="mt-3 font-black text-base uppercase text-[#1D241E]">
                Farhan Sultan Nadlir
              </h3>
              <p className="text-xs font-bold text-[#173F35]">
                System Information Student
              </p>
            </div>

            {/* Bio & Details */}
            <div className="md:col-span-8 space-y-4">
              <div className="space-y-3">
                <p className="text-base sm:text-lg font-bold leading-relaxed text-[#1D241E]">
                  I&apos;m <span className="bg-[#173F35] text-[#F7F1D5] px-1.5 py-0.5">Farhan Sultan Nadlir</span>, a System Information student passionate about building modern and scalable digital solutions. I focus on clean architecture, performance optimization, and structured system design.
                </p>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#4A544C]">
                  With a strong background in system analysis and development, I enjoy transforming ideas into reliable applications that balance usability and technical precision.
                </p>
              </div>

              {/* Core Competencies Pods */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3 bg-[#EAE0BC] border border-[#242B25]">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-[#173F35] mb-1">
                    <Code2 size={14} />
                    <span>FRONTEND</span>
                  </div>
                  <p className="text-[11px] text-[#4A544C]">Next.js 16, React 19, TypeScript, Tailwind CSS</p>
                </div>

                <div className="p-3 bg-[#EAE0BC] border border-[#242B25]">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-[#173F35] mb-1">
                    <Database size={14} />
                    <span>BACKEND</span>
                  </div>
                  <p className="text-[11px] text-[#4A544C]">Laravel, PHP, MySQL, REST APIs</p>
                </div>

                <div className="p-3 bg-[#EAE0BC] border border-[#242B25]">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-[#173F35] mb-1">
                    <Layers size={14} />
                    <span>SYSTEMS</span>
                  </div>
                  <p className="text-[11px] text-[#4A544C]">Clean Architecture, DB Design, GPS Geofencing</p>
                </div>
              </div>

              {/* Download CV CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/CV_Farhan_Sultan_Nadlir.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-[#173F35] text-[#F7F1D5] border-2 border-[#242B25] hover:bg-[#F2C94C] hover:text-[#173F35] transition-colors font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <FileDown size={15} />
                  <span>DOWNLOAD CURRICULUM VITAE (PDF)</span>
                </a>
                <span className="text-xs text-[#4A544C]">
                  [VERIFIED ASSET // 2026]
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: PRODUCTION PROJECTS ── */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b-2 border-[#242B25] pb-4">
            <div>
              <span className="text-xs font-bold text-[#F2C94C] block uppercase">
                [PROJECT QUEST LOG]
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#F7F1D5]">
                VERIFIED PRODUCTION APPS
              </h2>
            </div>
            <span className="text-xs text-[#A6CDBA]">
              COUNT: 3 PRODUCTION APPLICATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="border-[3px] border-[#242B25] bg-[#F7F1D5] text-[#1D241E] flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Card Header */}
                  <div className="px-3 py-1.5 bg-[#173F35] text-[#F7F1D5] flex items-center justify-between text-[11px] font-bold">
                    <span>QUEST #0{idx + 1}</span>
                    <span className="text-[#F2C94C]">{project.year}</span>
                  </div>

                  {/* Thumbnail */}
                  <div
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="relative w-full aspect-video border-b-2 border-[#242B25] bg-[#242B25] overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#F2C94C] text-[#173F35] text-[10px] font-bold">
                      {project.category}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4 space-y-3">
                    <h3
                      onClick={() => router.push(`/projects/${project.id}`)}
                      className="text-lg font-black uppercase text-[#1D241E] cursor-pointer hover:text-[#173F35]"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#4A544C] leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech.name}
                          className="px-2 py-0.5 bg-[#EAE0BC] text-[#173F35] border border-[#242B25] text-[10px] font-bold"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-4 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="flex-1 py-2 bg-[#173F35] text-[#F7F1D5] hover:bg-[#F2C94C] hover:text-[#173F35] transition-colors text-xs font-bold flex items-center justify-center gap-1 cursor-pointer border border-[#242B25]"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight size={13} />
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-[#242B25] text-[#F7F1D5] hover:bg-[#F2C94C] hover:text-[#173F35] transition-colors border border-[#242B25]"
                    title="Source Repository on GitHub"
                    aria-label="GitHub Repo"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: SKILLS GYM ── */}
        <section id="skills" className="border-[3px] border-[#242B25] bg-[#F7F1D5] text-[#1D241E] p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#242B25]">
            <div>
              <span className="text-xs font-bold text-[#173F35] block uppercase">
                [SKILL ARSENAL // TECH GYM]
              </span>
              <h2 className="text-2xl font-black uppercase text-[#1D241E]">
                TECHNICAL BATTLE STATS
              </h2>
            </div>
            <span className="text-xs text-[#5A635B] hidden sm:inline">
              STACK MATURITY: HIGH
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-[#EAE0BC] border border-[#242B25]">
              <span className="font-black text-[#173F35] block mb-2">// FRONTEND</span>
              <ul className="space-y-1 text-[#4A544C]">
                <li>• Next.js 16 (App Router)</li>
                <li>• React 19</li>
                <li>• TypeScript (Strict)</li>
                <li>• Tailwind CSS v4</li>
                <li>• Motion &amp; GSAP</li>
              </ul>
            </div>

            <div className="p-4 bg-[#EAE0BC] border border-[#242B25]">
              <span className="font-black text-[#173F35] block mb-2">// BACKEND</span>
              <ul className="space-y-1 text-[#4A544C]">
                <li>• Laravel Framework</li>
                <li>• PHP Runtime</li>
                <li>• RESTful API Design</li>
                <li>• Microservices</li>
                <li>• Clean Architecture</li>
              </ul>
            </div>

            <div className="p-4 bg-[#EAE0BC] border border-[#242B25]">
              <span className="font-black text-[#173F35] block mb-2">// DATA &amp; INFRA</span>
              <ul className="space-y-1 text-[#4A544C]">
                <li>• MySQL Database</li>
                <li>• GPS Geofencing</li>
                <li>• Cloudinary Storage</li>
                <li>• Browser Geolocation API</li>
                <li>• Camera API Integration</li>
              </ul>
            </div>

            <div className="p-4 bg-[#EAE0BC] border border-[#242B25]">
              <span className="font-black text-[#173F35] block mb-2">// DEV TOOLCHAIN</span>
              <ul className="space-y-1 text-[#4A544C]">
                <li>• Git &amp; GitHub</li>
                <li>• Turbopack Engine</li>
                <li>• ESLint &amp; Prettier</li>
                <li>• Automated CI Pipeline</li>
                <li>• System Modeling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: DIRECT TRANSMISSION & CONTACT ── */}
        <section id="contact" className="border-[3px] border-[#242B25] bg-[#F7F1D5] text-[#1D241E] p-6 sm:p-8 md:p-10 shadow-2xl relative">
          <div className="absolute -top-4 left-6 px-3 py-1 bg-[#173F35] text-[#F7F1D5] border-2 border-[#242B25] text-xs font-bold uppercase tracking-wider">
            COMMUNICATION STATION // DIRECT DISPATCH
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            {/* Form */}
            <div className="lg:col-span-7">
              <h3 className="font-black text-lg uppercase text-[#1D241E] mb-1">
                Send Direct Message
              </h3>
              <p className="text-xs text-[#4A544C] mb-4">
                Message will be dispatched directly to Farhan via Resend API.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[#173F35] font-bold uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Turner"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border-2 border-[#242B25] text-[#1D241E] outline-none focus:bg-[#FFFDF5] text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[#173F35] font-bold uppercase mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border-2 border-[#242B25] text-[#1D241E] outline-none focus:bg-[#FFFDF5] text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[#173F35] font-bold uppercase mb-1">
                    Message Content *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Discuss project requirements, hiring, or collaborations..."
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border-2 border-[#242B25] text-[#1D241E] outline-none focus:bg-[#FFFDF5] text-xs font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="px-6 py-3 bg-[#173F35] text-[#F7F1D5] hover:bg-[#F2C94C] hover:text-[#173F35] transition-colors border-2 border-[#242B25] font-black text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-[#F7F1D5] border-t-transparent rounded-full animate-spin" />
                      <span>TRANSMITTING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>DISPATCH MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Direct Channels */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 bg-[#EAE0BC] border border-[#242B25] text-xs">
                <span className="font-bold text-[#173F35] block mb-2">AVAILABILITY RADAR:</span>
                <div className="space-y-1.5 text-[#4A544C]">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#173F35]" />
                    <span>Location: Indonesia (UTC+7 / WIB)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#173F35]" />
                    <span>Response Time: &lt; 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Link */}
              <a
                href="https://wa.me/6285155399057"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 bg-[#68B86B] text-[#1D241E] border-2 border-[#242B25] font-bold text-xs hover:bg-[#F2C94C] transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  <span>WHATSAPP DIRECT (+62 851 5539 9057)</span>
                </div>
                <ArrowUpRight size={14} />
              </a>

              {/* Social Channels */}
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://github.com/farhnsndlr"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#EAE0BC] border border-[#242B25] flex flex-col items-center gap-1 text-xs text-[#173F35] hover:bg-[#173F35] hover:text-[#F7F1D5] transition-colors"
                >
                  <Github size={16} />
                  <span className="text-[10px] font-bold">GITHUB</span>
                </a>

                <a
                  href="https://linkedin.com/in/farhansultan"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#EAE0BC] border border-[#242B25] flex flex-col items-center gap-1 text-xs text-[#173F35] hover:bg-[#173F35] hover:text-[#F7F1D5] transition-colors"
                >
                  <Linkedin size={16} />
                  <span className="text-[10px] font-bold">LINKEDIN</span>
                </a>

                <a
                  href="https://instagram.com/farhnsndlr"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-[#EAE0BC] border border-[#242B25] flex flex-col items-center gap-1 text-xs text-[#173F35] hover:bg-[#173F35] hover:text-[#F7F1D5] transition-colors"
                >
                  <Instagram size={16} />
                  <span className="text-[10px] font-bold">INSTAGRAM</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="pt-8 border-t-2 border-[#242B25] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A6CDBA]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#F2C94C]" />
            <span className="font-bold text-[#F7F1D5]">NADLR PIXEL RPG V2 // 2026</span>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Farhan Sultan Nadlir. Built with Next.js &amp; Retro RPG Architecture.
          </p>
        </footer>
      </div>
    </div>
  );
}
