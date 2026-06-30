"use client";

import React, { useEffect, useState } from "react";
import { m } from "framer-motion";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

export function TelemetryGrid() {
  const [cells, setCells] = useState<number[]>([]);
  const [totalCommits, setTotalCommits] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const fetchTelemetry = async () => {
      try {
        const res = await fetch('/api/github');
        const data = await res.json();
        
        if (data.error || !data.weeks || data.weeks.length === 0) {
          setError(true);
          // Fallback to mock data if API fails or token is missing
          generateMockData();
          return;
        }

        setTotalCommits(data.totalCommits);
        
        // Flatten weeks into a single array of contribution counts
        const flatDays = data.weeks.flatMap((week: Week) => 
          week.contributionDays.map(day => day.contributionCount)
        );
        
        // If we have less than 52*7 days (364 days), pad it, or if more, slice it.
        // Usually GitHub returns 365 or 366 days. We just want a neat grid.
        setCells(flatDays.slice(-364));
      } catch (err) {
        setError(true);
        generateMockData();
      }
    };

    fetchTelemetry();
  }, []);

  const generateMockData = () => {
    // Generate 52 weeks * 7 days of random mock data for the heatmap as fallback
    const mockCells = Array.from({ length: 52 * 7 }).map(() => {
      const activityLevel = Math.random();
      if (activityLevel > 0.95) return 10; 
      if (activityLevel > 0.8) return 5;
      if (activityLevel > 0.5) return 2;
      if (activityLevel > 0.2) return 1;
      return 0;
    });
    setCells(mockCells);
    setTotalCommits(1432); // Mock total
  };

  const getIntensityClass = (count: number) => {
    if (count === 0) return 'bg-muted/10'; // Dark baseline
    if (count < 3) return 'bg-primary/20 text-primary/30';
    if (count < 6) return 'bg-primary/50';
    if (count < 9) return 'bg-primary/80';
    return 'bg-primary shadow-[0_0_8px_rgba(16,185,129,0.5)] bloom'; // Hot blocks
  };

  // Pre-fill with empty cells for SSR to avoid layout shift
  const displayCells = cells.length > 0 ? cells : Array.from({ length: 52 * 7 }).fill(0) as number[];

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 p-4 border border-dashed border-border bg-muted/5">
      <div className="flex-1 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
        <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-4 flex items-center justify-between">
          <span>GITHUB_TELEMETRY // YTD_ACTIVITY</span>
          {error && <span className="text-destructive animate-pulse">[API_OFFLINE - USING_MOCK_DATA]</span>}
        </h3>
        <div className="grid grid-flow-col grid-rows-7 gap-[2px] min-w-[700px] opacity-90">
          {displayCells.map((count, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={isMounted ? { delay: (i % 52) * 0.005 + Math.random() * 0.1, duration: 0.3 } : { duration: 0 }}
              className={`w-3 h-3 rounded-[1px] relative ${getIntensityClass(count)}`}
            />
          ))}
        </div>
      </div>
      
      <div className="flex flex-row md:flex-col justify-between md:justify-center min-w-[150px] md:border-l border-dashed border-border md:pl-6 space-y-0 md:space-y-4 pt-4 md:pt-0 border-t md:border-t-0">
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">TOTAL_COMMITS</div>
          <m.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-foreground tabular-nums bloom-white"
          >
            {isMounted ? totalCommits.toLocaleString() : '---'}
          </m.div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">TARGET_NODE</div>
          <m.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="text-sm font-bold text-primary bloom hover:underline cursor-pointer"
            onClick={() => window.open('https://github.com/freakyjones', '_blank')}
          >
            &gt; freakyjones
          </m.div>
        </div>
      </div>
    </div>
  );
}
