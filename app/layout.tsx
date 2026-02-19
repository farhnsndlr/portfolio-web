"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import ClickSpark from "@/components/ui/ClickSpark";
import SplashScreen from "@/components/ui/SplashScreen";
import PageTransition from "@/components/ui/PageTransition";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <html lang="en" className="dark">
      <head>
        <title>NADLR | Personal Website</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground relative transition-colors duration-300`}
      >
        {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
        <div className="fixed inset-0 bg-background/60 -z-10 transition-colors duration-300" />
        <Navbar />
        <ClickSpark>
          <PageTransition>{children}</PageTransition>
        </ClickSpark>
        <BackToTop />
      </body>
    </html>
  );
}
