"use client";

import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { m } from "framer-motion";

export function LogModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "q" || e.key === "Q") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  return (
    <>
      {/* Backdrop */}
      <m.div
        role="presentation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Terminal Window Overlay */}
      <m.div
        role="dialog"
        aria-modal="true"
        aria-label="System Log Pager"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 z-50 w-full md:w-[70%] lg:w-[60%] border-l border-emerald-500 bg-background shadow-2xl overflow-y-auto"
      >
        <div className="relative min-h-full flex flex-col">
          {/* Header Bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/90 px-4 py-2 backdrop-blur-sm font-mono text-xs text-muted-foreground">
            <span>[ SYSTEM_LOG_PAGER ]</span>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close system log modal"
              className="hover:text-emerald-500 transition-colors focus-visible:ring-1 focus-visible:ring-primary outline-none"
            >
              [X]
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 sm:p-10">
            {children}
          </div>

          {/* Footer */}
          <div className="border-t border-border p-4 text-center font-mono text-sm text-emerald-500/70 bg-background/90">
            [ Press 'q' or 'ESC' to close ]
          </div>
        </div>
      </m.div>
    </>
  );
}
