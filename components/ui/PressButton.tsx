"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type Props = HTMLMotionProps<"button"> & {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "neutral" | "ghost";
};

export function PressButton({ children, className = "", variant = "neutral", ...props }: Props) {
  return (
    <motion.button
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 2, y: 2 }}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
      className={`cursor-pointer select-none font-bold uppercase transition-colors ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

type LinkProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function PressLink({ children, className = "", ...props }: LinkProps) {
  return (
    <motion.a
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 2, y: 2 }}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
      className={`cursor-pointer select-none font-bold uppercase transition-colors ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
