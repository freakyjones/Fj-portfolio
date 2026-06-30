"use client";

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { cognitiveStreams } from "@/data/intel";
import { KineticDecryptionText } from "./KineticDecryptionText";

export function CognitiveLoad() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col font-mono text-xs w-full">
        <h3 className="text-primary/70 mb-3 uppercase tracking-widest border-b border-dashed border-border pb-2 bloom">
          [ COGNITIVE_LOAD ]
        </h3>
        
        <div className="flex flex-col gap-3">
          {cognitiveStreams.map((stream, index) => (
            <m.div 
              key={stream.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col gap-1"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">&gt;</span>
                <span className="uppercase opacity-80">
                  {stream.type === "READING" ? "INGESTING_LOG" : "ACTIVE_STREAM"}
                </span>
                <span className="opacity-50">::</span>
                <span className="truncate text-foreground/90 w-full overflow-hidden text-ellipsis whitespace-nowrap" title={stream.title}>
                  <KineticDecryptionText text={stream.title} />
                </span>
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                {stream.progress !== undefined ? (
                  <>
                    <div className="h-1 w-24 bg-muted overflow-hidden">
                      <div 
                        className="h-full bg-primary bloom" 
                        style={{ width: `${stream.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-primary tabular-nums">[{stream.progress}%]</span>
                  </>
                ) : (
                  <span className="text-[10px] text-primary/70 tracking-widest blink">
                    [ {stream.statusText || "PROCESSING..."} ]
                  </span>
                )}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </LazyMotion>
  );
}
