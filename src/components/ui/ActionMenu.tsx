"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";

export function ActionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Abhilash_Pandey_Resume_revise.pdf";
    link.download = "Abhilash_Pandey_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const sendEmail = () => {
    window.location.href = "mailto:abhilashpandey8170@gmail.com";
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-mono">
      <AnimatePresence>
        {isOpen && (
          <m.div
            key="action-menu"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-2 items-end"
          >
            <button
              onClick={sendEmail}
              className="bg-background/90 backdrop-blur border border-primary/50 text-foreground px-4 py-2 text-sm uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all bloom-hover"
            >
              [INITIATE_COMMS]
            </button>
            <button
              onClick={downloadResume}
              className="bg-primary/10 backdrop-blur border border-primary text-primary px-4 py-2 text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all bloom shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              [DOWNLOAD_RESUME]
            </button>
          </m.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
          isOpen 
            ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(16,185,129,0.5)]" 
            : "bg-background/80 backdrop-blur text-primary border-primary/50 hover:bg-primary/20 hover:border-primary bloom-hover"
        }`}
        aria-label="Toggle Quick Actions"
      >
        <span className="text-xl leading-none">
          {isOpen ? "×" : "⚡"}
        </span>
      </button>
    </div>
  );
}
