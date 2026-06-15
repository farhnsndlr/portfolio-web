"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PressButton } from "@/components/ui/PressButton";
import {
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Send,
  ArrowUpRight,
  CheckCircle,
  XCircle,
} from "lucide-react";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/farhnsndlr",
    href: "https://github.com/farhnsndlr",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/farhansultan",
    href: "https://linkedin.com/in/farhansultan",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    value: "@farhnsndlr",
    href: "https://instagram.com/farhnsndlr",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    value: "+62 815 7402 9222",
    href: "https://wa.me/6281574029222",
    icon: MessageCircle,
  },
];

type Toast = { type: "success" | "error"; message: string } | null;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
      if (!res.ok) throw new Error(data.error || "Failed");
      showToast("success", "Message sent! I'll get back to you soon.");
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
    <section id="contact" className="py-24 md:py-32 px-6 md:px-16" ref={ref}>
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed bottom-6 right-4 left-4 md:left-auto md:right-6 md:w-auto z-[9998] flex items-center gap-3 px-5 py-3.5 rounded-2xl border backdrop-blur-xl shadow-lg"
            style={{
              backgroundColor:
                toast.type === "success"
                  ? "color-mix(in oklch, var(--foreground) 5%, transparent)"
                  : "color-mix(in oklch, #ef4444 8%, transparent)",
              borderColor:
                toast.type === "success"
                  ? "color-mix(in oklch, var(--foreground) 15%, transparent)"
                  : "color-mix(in oklch, #ef4444 25%, transparent)",
            }}
          >
            {toast.type === "success" ? (
              <CheckCircle size={17} className="text-emerald-500 shrink-0" />
            ) : (
              <XCircle size={17} className="text-red-500 shrink-0" />
            )}
            <span className="text-sm text-foreground/80">{toast.message}</span>
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] rounded-full"
              style={{
                backgroundColor:
                  toast.type === "success" ? "#10b981" : "#ef4444",
              }}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.div
        className="flex flex-col items-center gap-3 mb-10 md:mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <p className="text-foreground/40 uppercase tracking-[0.3em] text-xs">
          Get in Touch
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          Contact
        </h2>
        <div className="w-12 h-[2px] bg-foreground/20 rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="backdrop-blur-xl bg-foreground/5 border border-foreground/10 rounded-2xl p-6 md:p-8 flex flex-col gap-5"
        >
          <div className="mb-1">
            <h3 className="text-lg font-semibold text-foreground">
              Send a message
            </h3>
            <p className="text-foreground/50 text-sm mt-1">
              I'll get back to you as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              {
                label: "Name",
                type: "text",
                key: "name",
                placeholder: "John Doe",
              },
              {
                label: "Email",
                type: "email",
                key: "email",
                placeholder: "johndoe@email.com",
              },
            ].map(({ label, type, key, placeholder }) => (
              <div key={key} className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-foreground/40">
                  {label}
                </label>
                <input
                  type={type}
                  required
                  value={formState[key as keyof typeof formState]}
                  onChange={(e) =>
                    setFormState({ ...formState, [key]: e.target.value })
                  }
                  placeholder={placeholder}
                  className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-foreground/25 text-sm outline-none focus:border-foreground/30 focus:bg-foreground/8 transition-all duration-300"
                />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-foreground/40">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                placeholder="Hey, I'd like to talk about..."
                className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder:text-foreground/25 text-sm outline-none focus:border-foreground/30 focus:bg-foreground/8 transition-all duration-300 resize-none"
              />
            </div>
            <PressButton
              type="submit"
              disabled={sending}
              className="mt-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-all duration-300 disabled:opacity-60 cursor-pointer"
            >
              {sending ? (
                <>
                  <span className="w-4 h-4 border-2 border-background/40 border-t-background rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </PressButton>
          </form>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col justify-center gap-4"
        >
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-foreground">
              Let's connect
            </h3>
            <p className="text-foreground/50 text-sm mt-1 leading-relaxed">
              Open for freelance projects, collaborations, or just a friendly
              chat.
            </p>
          </div>
          {contactLinks.map(({ label, value, href, icon: Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3 + i * 0.07,
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="group flex items-center justify-between px-4 md:px-5 py-3 md:py-4 rounded-xl border border-foreground/10 bg-foreground/5 hover:border-foreground/25 hover:bg-foreground/8 transition-all duration-300"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-foreground/15 bg-foreground/5 flex items-center justify-center text-foreground/50 group-hover:text-foreground group-hover:border-foreground/30 transition-all duration-300 shrink-0">
                  <Icon size={15} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs uppercase tracking-widest text-foreground/35">
                    {label}
                  </span>
                  <span className="text-xs md:text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-300 truncate">
                    {value}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                size={14}
                className="text-foreground/25 group-hover:text-foreground/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-2"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center text-foreground/25 text-xs mt-16 md:mt-20 tracking-wider"
      >
        © {new Date().getFullYear()} Farhan Sultan Nadlir. All rights reserved.
      </motion.p>
    </section>
  );
}
