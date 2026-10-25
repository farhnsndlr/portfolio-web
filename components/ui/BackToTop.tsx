"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 15, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.85 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.15 }}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 border-2 border-border bg-card text-foreground hover:bg-[#FFE500] hover:text-[#171717] shadow-neo flex items-center justify-center cursor-pointer transition-all"
          aria-label="Back to top of page"
          title="Return to top"
        >
          <ArrowUp size={16} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
