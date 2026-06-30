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
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else {
      response = `Command not recognized: ${cmd}. Available commands: 1 (Resume), 2 (Email), 3 (GitHub)`;
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
        <button onClick={(e) => { e.stopPropagation(); executeCommand("1"); }} className="hover:text-primary transition-colors text-left w-full sm:w-auto">
          [1] Download Resume
        </button><br/>
        <button onClick={(e) => { e.stopPropagation(); executeCommand("2"); }} className="hover:text-primary transition-colors text-left w-full sm:w-auto">
          [2] Send Email
        </button><br/>
        <button onClick={(e) => { e.stopPropagation(); executeCommand("3"); }} className="hover:text-primary transition-colors text-left w-full sm:w-auto">
          [3] View GitHub
        </button><br/>
      </div>
      
      <div className="flex flex-col gap-2 mb-2">
        {history.map((line, i) => (
          <m.div 
            key={i} 
            layout 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }}
            className={line.startsWith(">") ? "text-primary" : "text-foreground opacity-90"}
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
