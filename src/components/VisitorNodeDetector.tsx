"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { mockCities, mockOS, mockBrowsers } from "@/data/visitorNodes";

export function VisitorNodeDetector() {
  interface TelemetryNode {
    id: string;
    text: string;
    isCurrent?: boolean;
  }
  const [nodes, setNodes] = useState<TelemetryNode[]>([]);

  useEffect(() => {
    let mounted = true;

    // 1. Fetch Real Telemetry
    const fetchRealLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        
        if (!mounted) return;

        if (data.error) {
          setNodes([
            { id: "fallback-1", text: `[+] CURRENT_NODE DETECTED: 📍 Kolkata, IN — Windows 11 / Chrome`, isCurrent: true },
            { id: "fallback-2", text: `[+] NODE DETECTED: 📍 London, UK — macOS 14 / Safari` }
          ]);
          return;
        }
        
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
        
        const realNode = `[+] CURRENT_NODE DETECTED: 📍 ${city}, ${country} — ${osStr} / ${browserStr}`;
        
        setNodes([
          { id: "real-node-1", text: realNode, isCurrent: true },
          { id: "real-node-2", text: `[+] NODE DETECTED: 📍 London, UK — macOS 14 / Safari` }
        ]);
      } catch (err) {
        if (mounted) {
          setNodes([
            { id: "fallback-1", text: `[+] CURRENT_NODE DETECTED: 📍 Kolkata, IN — Windows 11 / Chrome`, isCurrent: true },
            { id: "fallback-2", text: `[+] NODE DETECTED: 📍 London, UK — macOS 14 / Safari` }
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
      
      const newNodeText = `[+] NODE DETECTED: 📍 ${city} — ${os} / ${browser}`;
      
      setNodes((prev) => {
        const currentNode = prev.find((n) => n.isCurrent);
        const mockNodes = prev.filter((n) => !n.isCurrent);
        const newMockNode = { id: Math.random().toString(), text: newNodeText };
        
        // Keep the latest 3 mock nodes since 1 slot is occupied by the pinned current node
        const updatedMockNodes = [newMockNode, ...mockNodes].slice(0, 3);
        
        return currentNode ? [currentNode, ...updatedMockNodes] : [newMockNode, ...mockNodes].slice(0, 4);
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
        {nodes.map((node) => (
          <m.div 
            key={node.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: node.isCurrent ? 1 : 0.5, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={node.isCurrent ? "text-primary bloom" : "text-muted-foreground"}
          >
            {node.text}
          </m.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
