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
  Mail,
  Sparkles,
} from "lucide-react";

type Toast = { type: "success" | "error"; message: string } | null;

export default function ModernContact() {
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
      showToast("success", "Message transmitted successfully! Farhan will respond promptly.");
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
    <section id="contact" className="py-28 px-4 sm:px-8 md:px-14 relative">
      {/* Toast Feedback */}
      {toast && (
        <div className="fixed bottom-6 right-4 left-4 md:left-auto md:right-8 z-[99999] max-w-md border border-white/20 bg-[#141518] text-[#F5F5F7] p-4 rounded-2xl shadow-2xl flex items-start gap-3 backdrop-blur-md">
          {toast.type === "success" ? (
            <CheckCircle size={20} className="text-[#2D5BFF] shrink-0 mt-0.5" />
          ) : (
            <XCircle size={20} className="text-[#FF453A] shrink-0 mt-0.5" />
          )}
          <div className="flex-1 text-xs font-mono">
            <span className="font-bold text-[#F5F5F7] block uppercase">
              {toast.type === "success" ? "MESSAGE DELIVERED" : "TRANSMISSION ERROR"}
            </span>
            <p className="mt-0.5 text-[#8A8D98]">{toast.message}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-white/8 pb-6 font-mono text-xs">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2D5BFF]" />
              <span className="text-[#8A8D98] uppercase tracking-wider">[05] TRANSMISSION DESK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F5F7]">
              LET&apos;S <span className="text-[#2D5BFF]">COLLABORATE</span>
            </h2>
          </div>

          <div className="text-[#8A8D98]">
            DIRECT INQUIRY &amp; COMMUNICATIONS
          </div>
        </div>

        {/* Editorial Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 editorial-card rounded-3xl p-6 sm:p-10">
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/5 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#2D5BFF]">
                <Mail size={16} />
                <span className="font-medium text-[#F5F5F7]">DISPATCH INQUIRY</span>
              </div>
              <span className="text-[#8A8D98]">TLS ENCRYPTED</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono">
              <div>
                <label className="block text-[#8A8D98] uppercase tracking-wider mb-2 font-medium">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Turner"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[#F5F5F7] outline-none focus:border-[#2D5BFF] focus:bg-white/[0.05] transition-all font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-[#8A8D98] uppercase tracking-wider mb-2 font-medium">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[#F5F5F7] outline-none focus:border-[#2D5BFF] focus:bg-white/[0.05] transition-all font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-[#8A8D98] uppercase tracking-wider mb-2 font-medium">
                  MESSAGE BODY *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Discuss project requirements, hiring, or architectural collaborations..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[#F5F5F7] outline-none focus:border-[#2D5BFF] focus:bg-white/[0.05] transition-all font-sans text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-editorial-primary w-full py-4 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 text-xs font-mono font-bold"
              >
                {sending ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>DISPATCHING VIA API...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>TRANSMIT INQUIRY</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct Channels & Telemetry (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="editorial-card rounded-3xl p-6 font-mono text-xs">
              <span className="text-[#2D5BFF] font-medium block mb-3 uppercase tracking-wider">
                AVAILABILITY RADAR
              </span>

              <div className="space-y-2 text-[#8A8D98]">
                <div className="flex items-center gap-2 text-[#F5F5F7]">
                  <MapPin size={15} className="text-[#2D5BFF]" />
                  <span>Base: Indonesia (UTC+7 / WIB)</span>
                </div>
                <div className="flex items-center gap-2 text-[#F5F5F7]">
                  <Clock size={15} className="text-[#2D5BFF]" />
                  <span>Response: Active &lt; 24h</span>
                </div>
                <p className="pt-3 font-sans text-sm text-[#8A8D98] leading-relaxed">
                  Open for full-stack engineering, web architecture, and clean code refactoring projects.
                </p>
              </div>
            </div>

            {/* Instant WhatsApp Channel */}
            <a
              href="https://wa.me/6285155399057"
              target="_blank"
              rel="noreferrer"
              className="editorial-card rounded-2xl p-5 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center border border-[#25D366]/20">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#F5F5F7] group-hover:text-[#2D5BFF] transition-colors block">
                    WhatsApp Direct
                  </span>
                  <span className="font-mono text-xs text-[#8A8D98]">
                    +62 851 5539 9057
                  </span>
                </div>
              </div>

              <ArrowUpRight size={16} className="text-[#8A8D98] group-hover:text-[#2D5BFF] transition-colors" />
            </a>

            {/* Social Channels */}
            <div className="grid grid-cols-3 gap-3 font-mono text-xs">
              <a
                href="https://github.com/farhnsndlr"
                target="_blank"
                rel="noreferrer"
                className="editorial-card rounded-2xl p-4 flex flex-col items-center gap-2 text-[#F5F5F7] hover:border-[#2D5BFF] hover:text-[#2D5BFF] transition-all"
              >
                <Github size={18} />
                <span className="text-[11px]">GITHUB</span>
              </a>

              <a
                href="https://linkedin.com/in/farhansultan"
                target="_blank"
                rel="noreferrer"
                className="editorial-card rounded-2xl p-4 flex flex-col items-center gap-2 text-[#F5F5F7] hover:border-[#2D5BFF] hover:text-[#2D5BFF] transition-all"
              >
                <Linkedin size={18} />
                <span className="text-[11px]">LINKEDIN</span>
              </a>

              <a
                href="https://instagram.com/farhnsndlr"
                target="_blank"
                rel="noreferrer"
                className="editorial-card rounded-2xl p-4 flex flex-col items-center gap-2 text-[#F5F5F7] hover:border-[#2D5BFF] hover:text-[#2D5BFF] transition-all"
              >
                <Instagram size={18} />
                <span className="text-[11px]">INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>

        {/* Global Architectural Footer */}
        <footer className="mt-24 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8A8D98]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D5BFF]" />
            <span className="font-medium text-[#F5F5F7]">NADLR DIGITAL STUDIO // 2026</span>
          </div>

          <p className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} Farhan Sultan Nadlir. Engineered with Next.js &amp; Modern Motion Design.
          </p>
        </footer>
      </div>
    </section>
  );
}
