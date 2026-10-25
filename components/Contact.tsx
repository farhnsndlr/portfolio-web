"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Send,
  ArrowUpRight,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  Mail,
  Radio,
} from "lucide-react";

const contactLinks = [
  {
    label: "WhatsApp Direct",
    value: "+62 815 7402 9222",
    href: "https://wa.me/6281574029222",
    icon: MessageCircle,
    color: "#00E575",
    tag: "PRIMARY_CHANNEL",
  },
  {
    label: "GitHub Repositories",
    value: "github.com/farhnsndlr",
    href: "https://github.com/farhnsndlr",
    icon: Github,
    color: "#B8FF3B",
    tag: "OPEN_SOURCE",
  },
  {
    label: "LinkedIn Network",
    value: "linkedin.com/in/farhansultan",
    href: "https://linkedin.com/in/farhansultan",
    icon: Linkedin,
    color: "#00A0DC",
    tag: "PROFESSIONAL",
  },
  {
    label: "Instagram Dispatch",
    value: "@farhnsndlr",
    href: "https://instagram.com/farhnsndlr",
    icon: Instagram,
    color: "#FF5C93",
    tag: "UPDATES",
  },
];

type Toast = { type: "success" | "error"; message: string } | null;

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
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
      showToast("success", "Transmission dispatched! I'll respond promptly.");
      setFormState({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      showToast(
        "error",
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-8 md:px-14 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed bottom-6 right-4 left-4 md:left-auto md:right-8 z-[99999] max-w-md border border-[#B8FF3B] bg-[#141816] text-[#F3F4EF] p-4 shadow-2xl flex items-start gap-3 font-mono"
          >
            {toast.type === "success" ? (
              <CheckCircle size={20} className="text-[#B8FF3B] shrink-0 mt-0.5" />
            ) : (
              <XCircle size={20} className="text-[#FF453A] shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-xs">
              <span className="font-bold text-[#B8FF3B] block uppercase">
                {toast.type === "success" ? "TRANSMISSION_ACKNOWLEDGED" : "TRANSMISSION_ERROR"}
              </span>
              <p className="text-[#F3F4EF]/80 mt-0.5">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-[#B8FF3B] text-[#111312] font-mono text-xs font-bold uppercase tracking-wider">
              [04 // TRANSMISSION]
            </span>
            <span className="font-mono text-xs text-[#777D76] uppercase tracking-wider">
              COMMUNICATION DESK
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#F3F4EF] uppercase tracking-tight">
            CONNECT &amp;
            <br />
            <span className="text-[#B8FF3B]">COLLABORATE</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: INQUIRY FORM (7 Cols) */}
          <div className="lg:col-span-7 border border-[#262D28] bg-[#141816] p-6 sm:p-8 md:p-10 relative">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#262D28] font-mono text-xs">
              <div className="flex items-center gap-2 text-[#B8FF3B]">
                <Mail size={16} />
                <span className="font-bold text-[#F3F4EF]">DISPATCH DIRECT MESSAGE</span>
              </div>
              <span className="text-[#777D76]">ENCRYPTED // TLS</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-xs">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#777D76] uppercase font-bold tracking-wider">
                  NAME / SENDER IDENTITY <span className="text-[#B8FF3B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Turner"
                  className="w-full px-3.5 py-2.5 bg-[#181C1A] border border-[#262D28] text-[#F3F4EF] outline-none focus:border-[#B8FF3B] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#777D76] uppercase font-bold tracking-wider">
                  EMAIL ADDRESS <span className="text-[#B8FF3B]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-3.5 py-2.5 bg-[#181C1A] border border-[#262D28] text-[#F3F4EF] outline-none focus:border-[#B8FF3B] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#777D76] uppercase font-bold tracking-wider">
                  MESSAGE BODY <span className="text-[#B8FF3B]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe architectural inquiry, collaboration, or consultation..."
                  className="w-full px-3.5 py-2.5 bg-[#181C1A] border border-[#262D28] text-[#F3F4EF] outline-none focus:border-[#B8FF3B] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-laser mt-2 py-3.5 flex items-center justify-center gap-2 text-xs font-bold"
              >
                {sending ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-[#111312] border-t-transparent rounded-full animate-spin" />
                    <span>DISPATCHING VIA API...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>TRANSMIT MESSAGE NOW</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT: CHANNELS & TELEMETRY (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Location & Timezone HUD */}
            <div className="border border-[#262D28] bg-[#181C1A] p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#262D28]">
                <span className="text-[#B8FF3B] font-bold">RADAR // TELEMETRY</span>
                <Radio size={14} className="text-[#B8FF3B] animate-pulse" />
              </div>

              <div className="space-y-2 text-[11px] text-[#777D76]">
                <div className="flex items-center gap-2 text-[#F3F4EF]">
                  <MapPin size={14} className="text-[#B8FF3B] shrink-0" />
                  <span>LOCATION: INDONESIA (UTC+7 / WIB)</span>
                </div>
                <div className="flex items-center gap-2 text-[#F3F4EF]">
                  <Clock size={14} className="text-[#B8FF3B] shrink-0" />
                  <span>COMM HOURS: 09:00 - 22:00 WIB</span>
                </div>
                <p className="pt-2 text-[11px] text-[#777D76] leading-relaxed">
                  Open for full-stack engineering, system design, architectural modeling, and high-performance frontend builds.
                </p>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            {contactLinks.map(({ label, value, href, icon: Icon, tag }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 border border-[#262D28] bg-[#141816] hover:border-[#B8FF3B] transition-colors cursor-pointer font-mono text-xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 border border-[#262D28] bg-[#181C1A] flex items-center justify-center text-[#B8FF3B] group-hover:border-[#B8FF3B] transition-colors shrink-0">
                    <Icon size={16} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#F3F4EF] group-hover:text-[#B8FF3B] transition-colors truncate">
                        {label}
                      </span>
                      <span className="text-[9px] px-1 bg-[#181C1A] text-[#777D76] border border-[#262D28]">
                        {tag}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#777D76] truncate">
                      {value}
                    </span>
                  </div>
                </div>

                <ArrowUpRight size={14} className="text-[#777D76] group-hover:text-[#B8FF3B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>

        {/* Global Footer */}
        <div className="mt-20 pt-8 border-t border-[#262D28] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#777D76]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#B8FF3B]" />
            <span className="text-[#F3F4EF] font-bold">
              NADLR DIGITAL IDENTITY // 2026
            </span>
          </div>

          <p className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} Farhan Sultan Nadlir. Powered by Next.js &amp; Experimental Architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
