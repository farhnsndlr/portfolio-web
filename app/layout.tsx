"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { motion, useScroll, useSpring } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import BackToTop from "@/components/ui/BackToTop";
import ReimaginedCommandPalette from "@/components/reimagined/ReimaginedCommandPalette";
import ReimaginedNavbar from "@/components/reimagined/ReimaginedNavbar";
import NadlrSplashScreen from "@/components/brand/NadlrSplashScreen";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <title>NADLR.</title>
        <meta
          name="description"
          content="Official portfolio of NADLR. (Farhan Sultan Nadlir), an Information Systems student and developer based in Indonesia building web applications with Next.js, React, and Laravel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground relative transition-colors duration-150 antialiased min-h-screen selection:bg-[#FFE500] selection:text-[#171717]`}
      >
        {/* Initial First-Load Brand Splash Animation (Session-Aware) */}
        <NadlrSplashScreen />

        {/* Top Reading Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[3.5px] bg-[#FFE500] origin-left z-[9999]"
        />

        {/* Persistent Sticky / Fixed Navbar (always accessible across viewport and routes) */}
        <ReimaginedNavbar />

        {/* Global Command Palette (Cmd+K / Ctrl+K) */}
        <ReimaginedCommandPalette />

        <PageTransition>{children}</PageTransition>
        <BackToTop />
      </body>
    </html>
  );
}
