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
  Sparkles,
} from "lucide-react";

type Toast = { type: "success" | "error"; message: string } | null;

export default function PixelContact() {
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
    <section id="contact" className="py-20 px-4 sm:px-8 md:px-14 relative font-mono">
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
              {toast.type === "success" ? "TRANSMISSION_CONFIRMED" : "TRANSMISSION_ERROR"}
            </span>
            <p className="mt-0.5 text-[#F7F1D5]/80">{toast.message}</p>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-1.5 mb-10 border-b-2 border-[#1E3F31] pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-[#F2C94C] text-[#242B25] text-xs font-black uppercase tracking-wider border-2 border-[#242B25]">
              [04 // POKÉ_COMM]
            </span>
            <span className="text-xs text-[#A6CDBA] uppercase">
              COMMUNICATION STATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#F7F1D5] tracking-tight">
            CONNECT &amp; <span className="text-[#F2C94C]">COLLABORATE</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Box (7 Cols) */}
          <div className="lg:col-span-7 pixel-card p-6 sm:p-8">
            <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-[#242B25] text-xs">
              <div className="flex items-center gap-1.5 font-black text-[#285943]">
                <Sparkles size={14} className="text-[#F2C94C]" />
                <span>DISPATCH INQUIRY MESSAGE</span>
              </div>
              <span className="text-[#5A635B] hidden sm:inline">ENCRYPTED // TLS</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#285943] font-black uppercase mb-1">
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
                <label className="block text-[#285943] font-black uppercase mb-1">
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
                <label className="block text-[#285943] font-black uppercase mb-1">
                  Message Body *
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
                className="pixel-btn-gold w-full py-3 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-[#242B25] border-t-transparent rounded-full animate-spin" />
                    <span>DISPATCHING MESSAGE...</span>
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

          {/* Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="pixel-card p-5 text-xs">
              <span className="font-black text-[#285943] block mb-2 uppercase">
                RADAR // AVAILABILITY:
              </span>
              <div className="space-y-1.5 text-[#4A544C]">
                <div className="flex items-center gap-1.5 font-bold">
                  <MapPin size={14} className="text-[#285943]" />
                  <span>Location: Indonesia (UTC+7 / WIB)</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold">
                  <Clock size={14} className="text-[#285943]" />
                  <span>Response Time: &lt; 24 hours</span>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Button */}
            <a
              href="https://wa.me/6285155399057"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 bg-[#79B86A] text-[#1D241E] border-[3px] border-[#242B25] font-black text-xs hover:bg-[#F2C94C] transition-colors shadow-md"
            >
              <div className="flex items-center gap-2">
                <MessageCircle size={18} />
                <span>WHATSAPP DIRECT (+62 815 7402 9222)</span>
              </div>
              <ArrowUpRight size={14} />
            </a>

            {/* Social Channels */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://github.com/farhnsndlr"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#EAE0BC] border-2 border-[#242B25] flex flex-col items-center gap-1 text-xs text-[#285943] hover:bg-[#285943] hover:text-[#F7F1D5] transition-colors shadow-sm"
              >
                <Github size={16} />
                <span className="text-[10px] font-black">GITHUB</span>
              </a>

              <a
                href="https://linkedin.com/in/farhansultan"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#EAE0BC] border-2 border-[#242B25] flex flex-col items-center gap-1 text-xs text-[#285943] hover:bg-[#285943] hover:text-[#F7F1D5] transition-colors shadow-sm"
              >
                <Linkedin size={16} />
                <span className="text-[10px] font-black">LINKEDIN</span>
              </a>

              <a
                href="https://instagram.com/farhnsndlr"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#EAE0BC] border-2 border-[#242B25] flex flex-col items-center gap-1 text-xs text-[#285943] hover:bg-[#285943] hover:text-[#F7F1D5] transition-colors shadow-sm"
              >
                <Instagram size={16} />
                <span className="text-[10px] font-black">INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <footer className="mt-20 pt-8 border-t-2 border-[#1E3F31] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A6CDBA]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#F2C94C]" />
            <span className="font-bold text-[#F7F1D5]">NADLR PIXEL PORTFOLIO V2 // 2026</span>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Farhan Sultan Nadlir. Built with Next.js &amp; Retro GBA Pixel Architecture.
          </p>
        </footer>
      </div>
    </section>
  );
}
