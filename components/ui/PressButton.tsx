"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type Props = HTMLMotionProps<"button"> & {
  children: ReactNode;
  className?: string;
};

export function PressButton({ children, className, ...props }: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.93 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={className}
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

export function PressLink({ children, className, ...props }: LinkProps) {
  return (
    <motion.a
      whileTap={{ scale: 0.93 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}