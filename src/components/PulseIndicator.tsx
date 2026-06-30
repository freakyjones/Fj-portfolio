"use client"

import * as React from "react"
import { m, LazyMotion, domAnimation } from "framer-motion"

export function PulseIndicator() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex items-center gap-2">
        <div className="relative flex h-2 w-2 items-center justify-center">
          <m.span
            animate={{ scale: [1, 2.5], opacity: [1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
          />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-primary/70">
          Comms_Channel_Secure
        </span>
      </div>
    </LazyMotion>
  )
}
