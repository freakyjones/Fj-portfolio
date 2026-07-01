"use client";

import React, { useState, useRef } from "react";
import { m } from "framer-motion";

export function TerminalPrompt() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleLinkClick = (e: React.MouseEvent, cmd: string, response: string) => {
    e.stopPropagation();
    setHistory((prev) => [...prev, `> ${cmd}`, response]);
  };

  const executeCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;
    
    let response = "";
    if (cmd === "1" || cmd === "resume" || cmd === "download resume") {
      response = "Downloading RESUME.pdf... [DONE]";
      // Trigger download
      const link = document.createElement("a");
      link.href = "/Abhilash_Pandey_Resume_revise.pdf";
      link.download = "Abhilash_Pandey_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (cmd === "2" || cmd === "email" || cmd === "send email") {
      response = "Opening secure mail protocol... [DONE]";
      window.location.href = "mailto:abhilashpandey8170@gmail.com";
    } else if (cmd === "3" || cmd === "github" || cmd === "view github") {
      response = "Routing to GitHub mainframe... [DONE]";
      window.open("https://github.com/freakyjones", "_blank");
    } else if (cmd === "help") {
      response = "Available commands:\n1/resume: Download Resume\n2/email: Send Email\n3/github: View GitHub\nmatrix: System Telemetry specs\nskills: Operator capabilities\nclear: Reset terminal log";
    } else if (cmd === "matrix") {
      response = "SYSTEM TELEMETRY SPECS:\n- CORE: Next.js 15.5.9 (App Router)\n- ENGINE: React 19.1.0\n- DESIGN: Tailwind CSS v4\n- MOTION: Framer Motion\n- COMPILER: Turbopack";
    } else if (cmd === "skills") {
      response = "OPERATOR CAPABILITIES:\n- FRONTEND: React 19, Next.js 15, TypeScript, Tailwind CSS, Framer Motion\n- STATE/DATA: Zustand, Zod\n- VIZ: Recharts, React-Leaflet\n- BACKEND/AUTOMATION: Supabase, Playwright, Gemini AI API";
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else {
      response = `Command not recognized: "${cmd}". Type "help" to view available commands.`;
    }

    setHistory((prev) => [...prev, `> ${cmdStr}`, response]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(input);
    }
  };

  return (
    <div 
      className="p-4 min-h-[160px] w-full h-full font-mono text-sm bg-muted/10 transition-colors overflow-hidden cursor-text flex flex-col justify-end group"
      onClick={handleContainerClick}
      data-slot="terminal-prompt"
    >
      <div className="mb-4 text-xs text-muted-foreground">
        -- HANDSHAKE_PROTOCOL_INITIALIZED --<br/>
        Available commands:<br/>
        <a 
          href="/Abhilash_Pandey_Resume_revise.pdf" 
          download="Abhilash_Pandey_Resume.pdf"
          onClick={(e) => handleLinkClick(e, "1", "Downloading RESUME.pdf... [DONE]")} 
          className="hover:text-primary transition-colors text-left block w-fit focus-visible:ring-1 focus-visible:ring-primary outline-none"
        >
          [1] Download Resume
        </a>
        <a 
          href="mailto:abhilashpandey8170@gmail.com" 
          onClick={(e) => handleLinkClick(e, "2", "Opening secure mail protocol... [DONE]")} 
          className="hover:text-primary transition-colors text-left block w-fit focus-visible:ring-1 focus-visible:ring-primary outline-none"
        >
          [2] Send Email
        </a>
        <a 
          href="https://github.com/freakyjones" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => handleLinkClick(e, "3", "Routing to GitHub mainframe... [DONE]")} 
          className="hover:text-primary transition-colors text-left block w-fit focus-visible:ring-1 focus-visible:ring-primary outline-none"
        >
          [3] View GitHub
        </a>
      </div>
      
      <div className="flex flex-col gap-2 mb-2 max-h-[120px] overflow-y-auto scrollbar-none">
        {history.map((line, i) => (
          <m.div 
            key={i} 
            layout 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }}
            className={line.startsWith(">") ? "text-primary" : "text-foreground opacity-90 whitespace-pre-wrap"}
          >
            {line}
          </m.div>
        ))}
      </div>

      <div className="flex items-center gap-2 relative">
        <span className="text-primary font-bold select-none bloom">&gt;</span>
        <span className="text-foreground min-h-[20px] whitespace-pre-wrap">{input}</span>
        
        {/* Blinking Cursor */}
        <m.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className={`inline-block w-2.5 h-4 bg-primary ${isFocused ? 'block' : 'hidden'}`}
        />
        {!isFocused && <span className="inline-block w-2.5 h-4 bg-muted" />}

        {/* Hidden Input for mobile/a11y */}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="absolute inset-0 opacity-0 cursor-text h-full w-full"
          aria-label="Terminal input"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
