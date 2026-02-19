"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    document.body.style.transition = "opacity 0.25s ease";
    document.body.style.opacity = "0.4";
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        document.body.style.opacity = "1";
      }, 400);
    }, 150);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border border-foreground/20 bg-background/80 backdrop-blur-md text-foreground/60 hover:text-foreground hover:border-foreground/40 hover:bg-foreground/10 flex items-center justify-center transition-colors duration-300 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}