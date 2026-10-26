"use client";

import { useState } from "react";
import {
  Send,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight,
  CheckCircle,
  XCircle,
  MapPin,
} from "lucide-react";
import NadlrLogo from "@/components/brand/NadlrLogo";

type Toast = { type: "success" | "error"; message: string } | null;

export default function ReimaginedContact() {
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
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      showToast("success", "Message received! I will get back to you soon.");
      setFormState({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      showToast(
        "error",
        err instanceof Error ? err.message : "Something went wrong. Please reach out via WhatsApp or email directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 md:px-14 relative font-mono bg-background text-foreground scroll-mt-24">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-4 left-4 md:left-auto md:right-8 z-[99999] max-w-md border-[2.5px] border-border bg-card text-foreground p-4 shadow-neo-xl flex items-start gap-3">
          {toast.type === "success" ? (
            <CheckCircle size={20} className="text-[#FFE500] shrink-0 mt-0.5" />
          ) : (
            <XCircle size={20} className="text-destructive shrink-0 mt-0.5" />
          )}
          <div className="flex-1 text-xs font-sans">
            <span className="font-bold text-foreground block font-mono">
              {toast.type === "success" ? "Message Sent" : "Sending Failed"}
            </span>
            <p className="mt-0.5 text-muted-foreground">{toast.message}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Bold Neo Yellow Heading Block */}
        <div className="p-8 sm:p-12 bg-[#FFE500] text-[#171717] border-[3.5px] border-border shadow-neo-xl mb-12">
          <span className="text-meta-badge block mb-2 opacity-80">
            Contact Farhan
          </span>
          <h2 className="text-display-section leading-tight mb-4 tracking-tight">
            Have a project in mind, or just want to say hi?
          </h2>
          <p className="text-body-lead max-w-2xl">
            I am always open to discussing new projects, internship opportunities, or frontend/backend architecture questions. Send a note below or reach out directly on WhatsApp.
          </p>
        </div>

        {/* 2-Column Split: Direct Contacts + Clean Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Human Contact Options (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase text-muted-foreground tracking-wider block">
                Direct Channels
              </span>

              {/* Direct WhatsApp Action */}
              <a
                href="https://wa.me/6281574029222"
                target="_blank"
                rel="noreferrer"
                className="neo-btn-black w-full flex items-center justify-between text-xs font-black p-4 shadow-neo"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle size={16} />
                  <span>WhatsApp (+62 815 7402 9222)</span>
                </div>
                <ArrowUpRight size={15} />
              </a>

              {/* Direct Email */}
              <a
                href="mailto:sultannadlir.11@gmail.com"
                className="p-3.5 bg-card border-2 border-border text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors flex items-center justify-between text-xs font-bold shadow-neo-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Mail size={15} />
                  <span>sultannadlir.11@gmail.com</span>
                </div>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-black uppercase text-muted-foreground tracking-wider block">
                Profiles
              </span>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://github.com/farhnsndlr"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-card border-2 border-border text-center text-xs font-bold text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/farhansultan"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-card border-2 border-border text-center text-xs font-bold text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/farhnsndlr"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-card border-2 border-border text-center text-xs font-bold text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Location Note */}
            <div className="p-4 border-2 border-border bg-card shadow-neo-sm text-xs text-muted-foreground flex items-center gap-2">
              <MapPin size={14} className="text-[#FFE500] shrink-0" />
              <span>Based in Indonesia · UTC+7 (Western Indonesia Time)</span>
            </div>
          </div>

          {/* Right Column: Straightforward Message Form (7 Cols) */}
          <div className="lg:col-span-7 border-[3px] border-border bg-card p-6 sm:p-8 shadow-neo-xl">
            <h3 className="text-lg font-black uppercase tracking-tight text-foreground mb-4">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-foreground font-bold uppercase mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex"
                  className="w-full px-3.5 py-2.5 bg-background border-2 border-border text-foreground outline-none focus:border-[#FFE500] shadow-neo-sm transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-foreground font-bold uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-3.5 py-2.5 bg-background border-2 border-border text-foreground outline-none focus:border-[#FFE500] shadow-neo-sm transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-foreground font-bold uppercase mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="What would you like to discuss?"
                  className="w-full px-3.5 py-2.5 bg-background border-2 border-border text-foreground outline-none focus:border-[#FFE500] shadow-neo-sm transition-all resize-none font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="neo-btn-yellow w-full py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 text-xs font-black shadow-neo"
              >
                {sending ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Clean Human Footer with Official NADLR. Brand */}
        <footer className="mt-24 pt-8 border-t-[2.5px] border-border flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-muted-foreground font-bold">
          <div className="flex items-center gap-3">
            <NadlrLogo variant="full" size="sm" href="/" />
            <span className="text-muted-foreground/60 hidden sm:inline">|</span>
            <span className="text-xs">nadlr.my.id</span>
          </div>

          <p className="text-center sm:text-right text-xs">
            &copy; {new Date().getFullYear()} Farhan Sultan Nadlir. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
