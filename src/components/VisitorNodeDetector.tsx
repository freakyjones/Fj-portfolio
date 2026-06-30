"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { mockCities, mockOS, mockBrowsers } from "@/data/visitorNodes";

export function VisitorNodeDetector() {
  const [nodes, setNodes] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;

    // 1. Fetch Real Telemetry
    const fetchRealLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        
        if (!mounted) return;
        
        const ua = window.navigator.userAgent;
        let osStr = "Unknown OS";
        if (ua.includes("Win")) osStr = "Windows";
        else if (ua.includes("Mac")) osStr = "macOS";
        else if (ua.includes("Linux")) osStr = "Linux";
        
        let browserStr = "Unknown Browser";
        if (ua.includes("Chrome")) browserStr = "Chrome";
        else if (ua.includes("Safari")) browserStr = "Safari";
        else if (ua.includes("Firefox")) browserStr = "Firefox";

        const city = data.city || "Encrypted Node";
        const country = data.country || "UNKNOWN";
        
        const realNode = `[+] REAL_NODE DETECTED: 📍 ${city}, ${country} — ${osStr} / ${browserStr}`;
        
        setNodes([
          realNode,
          `[+] NODE DETECTED: 📍 London, UK — macOS 14 / Safari`
        ]);
      } catch (err) {
        if (mounted) {
          setNodes([
            `[+] NODE DETECTED: 📍 Kolkata, IN — Windows 11 / Chrome`,
            `[+] NODE DETECTED: 📍 London, UK — macOS 14 / Safari`
          ]);
        }
      }
    };

    fetchRealLocation();

    // 2. Mix in mock telemetry to simulate global traffic
    const interval = setInterval(() => {
      const city = mockCities[Math.floor(Math.random() * mockCities.length)];
      const os = mockOS[Math.floor(Math.random() * mockOS.length)];
      const browser = mockBrowsers[Math.floor(Math.random() * mockBrowsers.length)];
      
      const newNode = `[+] NODE DETECTED: 📍 ${city} — ${os} / ${browser}`;
      
      setNodes((prev) => {
        const newArr = [newNode, ...prev];
        return newArr.slice(0, 4); // Keep only the latest 4
      });
    }, 5000 + Math.random() * 8000); // Random interval between 5-13 seconds

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col space-y-1.5 font-mono text-xs mt-2 overflow-hidden min-h-[90px]">
      <AnimatePresence mode="popLayout">
        {nodes.map((node, i) => (
          <m.div 
            key={`${node}-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: i === 0 ? 1 : 0.5, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={i === 0 ? "text-primary bloom" : "text-muted-foreground"}
          >
            {node}
          </m.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
