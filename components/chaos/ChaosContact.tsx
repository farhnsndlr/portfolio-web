"use client";

import { useState } from "react";
import {
  Send,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
  CheckCircle,
  XCircle,
  MapPin,
  Clock,
  Radio,
  Zap,
} from "lucide-react";

type Toast = { type: "success" | "error"; message: string } | null;

export default function ChaosContact() {
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
      showToast("success", "Signal transmitted successfully! Farhan will respond promptly.");
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
    <section id="transmit" className="py-24 px-4 sm:px-8 md:px-14 relative font-mono">
      {/* Toast Feedback */}
      {toast && (
        <div className="fixed bottom-6 right-4 left-4 md:left-auto md:right-8 z-[99999] max-w-md border-2 border-[#C8FF00] bg-[#0A0A0A] text-[#F4F1E8] p-4 shadow-chaos-magenta flex items-start gap-3">
          {toast.type === "success" ? (
            <CheckCircle size={20} className="text-[#C8FF00] shrink-0 mt-0.5" />
          ) : (
            <XCircle size={20} className="text-[#FF3B30] shrink-0 mt-0.5" />
          )}
          <div className="flex-1 text-xs">
            <span className="font-bold text-[#C8FF00] block uppercase">
              {toast.type === "success" ? "SIGNAL_TRANSMITTED" : "TRANSMISSION_ERROR"}
            </span>
            <p className="mt-0.5 text-[#D4D1C8]">{toast.message}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12 border-b-2 border-[#262626] pb-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 bg-[#C8FF00] text-[#0A0A0A] font-black uppercase">
              [05 // CONNECTION_TERMINAL]
            </span>
            <span className="text-[#7E7E7E]">ESTABLISH DIRECT LINK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#F4F1E8] tracking-tight">
            TRANSMIT &amp; <span className="text-[#C8FF00]">COLLABORATE</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Box (7 Cols) */}
          <div className="lg:col-span-7 border-2 border-[#262626] bg-[#141414] p-6 sm:p-8 shadow-chaos-lime">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#262626] text-xs">
              <div className="flex items-center gap-2 text-[#C8FF00] font-black">
                <Zap size={15} />
                <span>DIRECT INQUIRY DISPATCH</span>
              </div>
              <span className="text-[#7E7E7E]">ENCRYPTION: ACTIVE</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#C8FF00] font-bold uppercase mb-1">
                  SENDER IDENTITY / NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Turner"
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] text-[#F4F1E8] outline-none focus:border-[#C8FF00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#C8FF00] font-bold uppercase mb-1">
                  COMMUNICATION EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] text-[#F4F1E8] outline-none focus:border-[#C8FF00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#C8FF00] font-bold uppercase mb-1">
                  MESSAGE SIGNAL *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Inquire about architectural systems, web engineering, or collaborations..."
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] text-[#F4F1E8] outline-none focus:border-[#C8FF00] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-chaos-lime w-full py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 text-xs font-black"
              >
                {sending ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
                    <span>TRANSMITTING MESSAGE VIA API...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>DISPATCH SIGNAL NOW</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Direct Channels & Radar (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#262626] bg-[#141414] p-5 text-xs">
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#262626]">
                <span className="font-black text-[#C8FF00] uppercase">
                  RADAR // AVAILABILITY:
                </span>
                <Radio size={14} className="text-[#C8FF00] animate-pulse" />
              </div>

              <div className="space-y-1.5 text-[#7E7E7E]">
                <div className="flex items-center gap-2 text-[#F4F1E8]">
                  <MapPin size={14} className="text-[#C8FF00]" />
                  <span>Base: Indonesia (UTC+7 / WIB)</span>
                </div>
                <div className="flex items-center gap-2 text-[#F4F1E8]">
                  <Clock size={14} className="text-[#38E8FF]" />
                  <span>Response: Active &lt; 24h</span>
                </div>
                <p className="pt-2 text-xs text-[#7E7E7E] leading-relaxed">
                  Open for full-stack web architecture, system analysis, clean code refactoring, and high-performance digital projects.
                </p>
              </div>
            </div>

            {/* Instant WhatsApp Link */}
            <a
              href="https://wa.me/6285155399057"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 bg-[#0A0A0A] border-2 border-[#C8FF00] text-[#C8FF00] font-black text-xs hover:bg-[#C8FF00] hover:text-[#0A0A0A] transition-colors shadow-chaos-magenta"
            >
              <div className="flex items-center gap-2">
                <MessageCircle size={18} />
                <span>WHATSAPP DIRECT (+62 851 5539 9057)</span>
              </div>
              <ArrowUpRight size={15} />
            </a>

            {/* Social Channels */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://github.com/farhnsndlr"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#141414] border border-[#262626] flex flex-col items-center gap-1 text-xs text-[#F4F1E8] hover:border-[#FF3DCE] hover:text-[#FF3DCE] transition-colors"
              >
                <Github size={16} />
                <span className="text-[10px] font-black">GITHUB</span>
              </a>

              <a
                href="https://linkedin.com/in/farhansultan"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#141414] border border-[#262626] flex flex-col items-center gap-1 text-xs text-[#F4F1E8] hover:border-[#38E8FF] hover:text-[#38E8FF] transition-colors"
              >
                <Linkedin size={16} />
                <span className="text-[10px] font-black">LINKEDIN</span>
              </a>

              <a
                href="https://instagram.com/farhnsndlr"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#141414] border border-[#262626] flex flex-col items-center gap-1 text-xs text-[#F4F1E8] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors"
              >
                <Instagram size={16} />
                <span className="text-[10px] font-black">INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <footer className="mt-20 pt-8 border-t-2 border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7E7E7E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C8FF00]" />
            <span className="font-bold text-[#F4F1E8]">NADLR PIXEL CHAOS // 2026</span>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Farhan Sultan Nadlir. Powered by Next.js &amp; Experimental Digital Architecture.
          </p>
        </footer>
      </div>
    </section>
  );
}
