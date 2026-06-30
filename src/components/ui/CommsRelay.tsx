"use client";

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { commsData } from "@/data/intel";

export function CommsRelay() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col font-mono text-xs w-full overflow-hidden">
        
        {/* Header Pulse */}
        <div className="flex items-center gap-2 mb-2">
          <div className="relative flex h-2 w-2 items-center justify-center">
            <m.span
              animate={{ scale: [1, 2.5], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
            />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
          <span className="text-primary/70 tracking-widest bloom">COMMS_CHANNEL_SECURE</span>
        </div>

        {/* ASCII Tree */}
        <div className="flex flex-col text-muted-foreground whitespace-pre font-mono">
          {commsData.map((link, index) => {
            const isLast = index === commsData.length - 1;
            const branch = isLast ? "└──" : "├──";
            
            return (
              <div key={link.id} className="flex items-center hover:text-primary transition-colors group">
                <span className="opacity-50 group-hover:opacity-100">{branch} [ </span>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold tracking-widest group-hover:bloom focus-visible:ring-1 focus-visible:ring-primary outline-none"
                >
                  {link.label}
                </a>
                <span className="opacity-50 group-hover:opacity-100"> ] ──&gt; </span>
                <span className="text-foreground/70 group-hover:text-primary transition-colors truncate">
                  {link.id === 'email' ? "op_contact" : new URL(link.url).pathname}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </LazyMotion>
  );
}
