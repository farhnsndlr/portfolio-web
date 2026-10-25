"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2, Trash2 } from "lucide-react";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export default function IdentityTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Initial welcome message
  useEffect(() => {
    setEntries([
      {
        command: "init --runtime=identity",
        output: (
          <div className="space-y-1 text-xs">
            <p className="text-[#B8FF3B] font-bold">
              [SYSTEM] NADLR Digital Identity Runtime v2.0 initialized.
            </p>
            <p className="text-[#F3F4EF]/70">
              Welcome to the interactive console of Farhan Sultan Nadlir.
            </p>
            <p className="text-[#777D76]">
              Type <span className="text-[#B8FF3B] font-bold">help</span> or tap quick commands below to explore.
            </p>
          </div>
        ),
      },
    ]);
  }, []);

  // Auto scroll to bottom of terminal output
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-[#F3F4EF]">
            <p className="text-[#B8FF3B] font-bold">// EXECUTABLE COMMAND CATALOG:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 font-mono">
              <div><span className="text-[#B8FF3B] font-bold">about</span> - Identity dossier &amp; background</div>
              <div><span className="text-[#B8FF3B] font-bold">projects</span> - Project registry &amp; deep links</div>
              <div><span className="text-[#B8FF3B] font-bold">skills</span> - Technical competencies matrix</div>
              <div><span className="text-[#B8FF3B] font-bold">contact</span> - Direct connection channels</div>
              <div><span className="text-[#B8FF3B] font-bold">theme</span> - Toggle visual spectrum (Dark/Light)</div>
              <div><span className="text-[#B8FF3B] font-bold">matrix</span> - Activate secret data stream</div>
              <div><span className="text-[#B8FF3B] font-bold">clear</span> - Flush terminal screen buffer</div>
            </div>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-2 text-xs text-[#F3F4EF]">
            <p className="text-[#B8FF3B] font-bold">[IDENTITY_DOSSIER: FARHAN SULTAN NADLIR]</p>
            <p className="text-[#F3F4EF]/90 leading-relaxed">
              System Information student passionate about building scalable, high-performance digital architectures. Focuses on clean system design, database modeling, and fluid, accessible user interfaces.
            </p>
            <div className="p-2 bg-[#121513] border border-[#262D28] text-[11px] font-mono space-y-0.5">
              <p><span className="text-[#777D76]">DISCIPLINE:</span> System Analysis &amp; Full-Stack Web Development</p>
              <p><span className="text-[#777D76]">LOCATION:</span> Indonesia (UTC+7 / WIB)</p>
              <p><span className="text-[#777D76]">STATUS:</span> Available for Engineering Collaborations</p>
            </div>
            <button
              onClick={() => window.open("/CV_Farhan_Sultan_Nadlir.pdf", "_blank")}
              className="mt-1 px-3 py-1 bg-[#B8FF3B] text-[#111312] font-mono font-bold text-[11px] hover:bg-[#F3F4EF] cursor-pointer inline-block"
            >
              DOWNLOAD RESUME (PDF) ↗
            </button>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs text-[#F3F4EF]">
            <p className="text-[#B8FF3B] font-bold">[VERIFIED PRODUCTION REPOSITORIES]:</p>
            <div className="space-y-2 pt-1">
              <div className="p-2 bg-[#121513] border border-[#262D28]">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#F3F4EF]">01. UMKM-i</span>
                  <span className="text-[10px] text-[#B8FF3B]">Web App // 2025</span>
                </div>
                <p className="text-[11px] text-[#777D76]">Interactive product &amp; service catalog with dynamic routing and Framer Motion.</p>
                <div className="flex gap-2 mt-1.5">
                  <button
                    onClick={() => router.push("/projects/umkm-i")}
                    className="text-[10px] text-[#B8FF3B] underline cursor-pointer"
                  >
                    View Autopsy →
                  </button>
                  <a
                    href="https://github.com/farhnsndlr/umkm-app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-[#777D76] hover:text-[#F3F4EF]"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="p-2 bg-[#121513] border border-[#262D28]">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#F3F4EF]">02. AbsenKu</span>
                  <span className="text-[10px] text-[#B8FF3B]">Web App // 2025</span>
                </div>
                <p className="text-[11px] text-[#777D76]">Real-time campus attendance with GPS geofencing &amp; facial snapshot verification.</p>
                <div className="flex gap-2 mt-1.5">
                  <button
                    onClick={() => router.push("/projects/absenku")}
                    className="text-[10px] text-[#B8FF3B] underline cursor-pointer"
                  >
                    View Autopsy →
                  </button>
                  <a
                    href="https://github.com/farhnsndlr/absenku-web"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-[#777D76] hover:text-[#F3F4EF]"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="p-2 bg-[#121513] border border-[#262D28]">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#F3F4EF]">03. Portfolio Architecture</span>
                  <span className="text-[10px] text-[#B8FF3B]">Frontend // 2025</span>
                </div>
                <p className="text-[11px] text-[#777D76]">Next.js, TypeScript, Tailwind CSS, Motion system, and interactive CLI.</p>
                <div className="flex gap-2 mt-1.5">
                  <button
                    onClick={() => router.push("/projects/portfolio")}
                    className="text-[10px] text-[#B8FF3B] underline cursor-pointer"
                  >
                    View Autopsy →
                  </button>
                  <a
                    href="https://github.com/farhnsndlr/portfolio-web"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-[#777D76] hover:text-[#F3F4EF]"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1.5 text-xs text-[#F3F4EF]">
            <p className="text-[#B8FF3B] font-bold">[TECHNICAL CAPABILITY MATRIX]:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
              <div className="p-2 bg-[#121513] border border-[#262D28]">
                <span className="text-[#B8FF3B] font-bold block mb-1">FRONTEND ARCHITECTURE:</span>
                <p className="text-[#F3F4EF]/80">Next.js, React 19, TypeScript, Tailwind CSS v4, Motion, GSAP</p>
              </div>
              <div className="p-2 bg-[#121513] border border-[#262D28]">
                <span className="text-[#B8FF3B] font-bold block mb-1">BACKEND &amp; SYSTEMS:</span>
                <p className="text-[#F3F4EF]/80">Laravel, PHP, REST APIs, Microservices, System Modeling</p>
              </div>
              <div className="p-2 bg-[#121513] border border-[#262D28]">
                <span className="text-[#B8FF3B] font-bold block mb-1">DATA &amp; INFRA:</span>
                <p className="text-[#F3F4EF]/80">MySQL, Cloudinary, Geofencing, Browser Hardware APIs</p>
              </div>
              <div className="p-2 bg-[#121513] border border-[#262D28]">
                <span className="text-[#B8FF3B] font-bold block mb-1">ENGINEERING TOOLCHAIN:</span>
                <p className="text-[#F3F4EF]/80">Git, GitHub Actions, Turbopack, ESLint, Node.js</p>
              </div>
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-2 text-xs text-[#F3F4EF]">
            <p className="text-[#B8FF3B] font-bold">[DIRECT TRANSMISSION CHANNELS]:</p>
            <div className="p-2.5 bg-[#121513] border border-[#262D28] space-y-1.5 font-mono text-xs">
              <p>
                <span className="text-[#777D76]">WHATSAPP:</span>{" "}
                <a
                  href="https://wa.me/6285155399057"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#B8FF3B] hover:underline font-bold"
                >
                  +62 815 7402 9222 ↗
                </a>
              </p>
              <p>
                <span className="text-[#777D76]">GITHUB:</span>{" "}
                <a
                  href="https://github.com/farhnsndlr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F3F4EF] hover:text-[#B8FF3B]"
                >
                  github.com/farhnsndlr ↗
                </a>
              </p>
              <p>
                <span className="text-[#777D76]">LINKEDIN:</span>{" "}
                <a
                  href="https://linkedin.com/in/farhansultan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F3F4EF] hover:text-[#B8FF3B]"
                >
                  linkedin.com/in/farhansultan ↗
                </a>
              </p>
              <p>
                <span className="text-[#777D76]">INSTAGRAM:</span>{" "}
                <a
                  href="https://instagram.com/farhnsndlr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F3F4EF] hover:text-[#B8FF3B]"
                >
                  @farhnsndlr ↗
                </a>
              </p>
            </div>
          </div>
        );
        break;

      case "theme": {
        const isDark = document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", !isDark);
        localStorage.setItem("theme", !isDark ? "dark" : "light");
        output = (
          <p className="text-xs text-[#B8FF3B]">
            [SYSTEM] Visual spectrum toggled to {!isDark ? "DARK" : "LIGHT"} mode.
          </p>
        );
        break;
      }

      case "matrix":
      case "secret":
        window.dispatchEvent(new CustomEvent("toggle-matrix-mode"));
        output = (
          <p className="text-xs text-[#B8FF3B] font-bold">
            [SYS::OVERRIDE] Secret matrix data stream mode toggled.
          </p>
        );
        break;

      case "clear":
        setEntries([]);
        return;

      default:
        output = (
          <p className="text-xs text-[#FF453A]">
            Command not recognized: &quot;{rawCmd}&quot;. Type <span className="text-[#B8FF3B]">help</span> for catalog.
          </p>
        );
    }

    setEntries((prev) => [...prev, { command: rawCmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandHistory[nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx] || "");
      }
    }
  };

  const quickCommands = ["help", "about", "projects", "skills", "contact", "clear"];

  return (
    <section id="terminal" className="py-12 px-4 sm:px-8 md:px-14">
      <div className="max-w-5xl mx-auto">
        {/* Terminal Frame */}
        <div
          className={`border border-[#B8FF3B]/30 bg-[#141816] text-[#F3F4EF] shadow-2xl transition-all duration-300 ${
            isExpanded ? "h-[560px]" : "h-[420px]"
          } flex flex-col font-mono relative overflow-hidden`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0E1110] border-b border-[#262D28] select-none text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF453A] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFE500] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8FF3B] inline-block" />
              <span className="text-[#777D76] ml-2 font-bold hidden sm:inline">
                NADLR_SHELL // INTERACTIVE_RUNTIME
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setEntries([])}
                className="p-1 text-[#777D76] hover:text-[#B8FF3B] cursor-pointer"
                title="Clear buffer"
                aria-label="Clear buffer"
              >
                <Trash2 size={13} />
              </button>
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="p-1 text-[#777D76] hover:text-[#B8FF3B] cursor-pointer"
                title={isExpanded ? "Minimize" : "Expand"}
                aria-label={isExpanded ? "Minimize terminal" : "Expand terminal"}
              >
                {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
              </button>
            </div>
          </div>

          {/* Quick Command Chips */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#121513] border-b border-[#262D28] overflow-x-auto text-[11px]">
            <span className="text-[#777D76] shrink-0 font-bold">QUICK RUN:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 border border-[#262D28] bg-[#181C1A] text-[#F3F4EF]/80 hover:border-[#B8FF3B] hover:text-[#B8FF3B] hover:bg-[#B8FF3B]/5 transition-colors cursor-pointer shrink-0 font-mono text-[10px]"
              >
                {`$${cmd}`}
              </button>
            ))}
          </div>

          {/* Buffer Output */}
          <div
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
            className="flex-1 p-4 overflow-y-auto space-y-4 scanlines cursor-text"
          >
            {entries.map((entry, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-[#B8FF3B]">
                  <span className="opacity-60">nadlr@digital-id:~$</span>
                  <span className="text-[#F3F4EF] font-bold">{entry.command}</span>
                </div>
                <div className="pl-4">{entry.output}</div>
              </div>
            ))}
          </div>

          {/* Input Prompt */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#0E1110] border-t border-[#262D28]"
          >
            <span className="text-[#B8FF3B] text-xs shrink-0 font-bold">
              nadlr@digital-id:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command here (e.g. 'projects', 'about', 'help')..."
              className="flex-1 bg-transparent text-xs text-[#F3F4EF] outline-none font-mono placeholder-[#777D76]"
            />
            <button
              type="submit"
              className="px-2 py-1 bg-[#B8FF3B] text-[#111312] text-[10px] font-bold uppercase hover:bg-white cursor-pointer flex items-center gap-1 shrink-0"
              aria-label="Submit command"
            >
              <span>RUN</span>
              <CornerDownLeft size={10} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
