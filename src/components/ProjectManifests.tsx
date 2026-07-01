"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ProjectManifestCard } from "./ProjectManifestCard";
import type { Project } from "@/data/projects";

interface ProjectManifestsProps {
  projects: Project[];
}

export function ProjectManifests({ projects }: ProjectManifestsProps) {
  const [activeFilter, setActiveFilter] = useState<'--all' | '--frontend' | '--fullstack'>('--all');
  const filters = ['--all', '--frontend', '--fullstack'] as const;

  const filteredProjects = projects.filter(project => {
    if (activeFilter === '--all') return true;
    if (activeFilter === '--frontend') {
      return project.slug === 'ai-weather-application';
    }
    if (activeFilter === '--fullstack') {
      return project.slug === 'critical-minerals-dashboard' || project.slug === 'job-hunt-agent';
    }
    return true;
  }).slice(0, 3); // Standardize on 3 projects for consistent grid layout

  const totalSlots = 3;
  const paddingCount = Math.max(0, totalSlots - filteredProjects.length);
  const items = [
    ...filteredProjects.map(p => ({ ...p, isVacant: false })),
    ...Array.from({ length: paddingCount }, (_, i) => ({
      id: `vacant-${i}`,
      isVacant: true,
    }))
  ];

  return (
    <>
      <div className="flex gap-2 border-b border-dashed border-border pb-4 text-xs font-mono mb-4 overflow-x-auto scrollbar-none items-center">
        <span className="text-muted-foreground mr-2">FILTER:</span>
        {filters.map(filter => (
          <button 
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 font-mono transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none whitespace-nowrap text-xs border ${
              activeFilter === filter 
                ? 'border-primary text-primary bloom bg-primary/10' 
                : 'border-border/30 text-muted-foreground hover:text-foreground hover:border-border/60'
            }`}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      <m.ul layout className="flex flex-col gap-8">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            if (item.isVacant) {
              return (
                <m.li 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0.25, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="border-l border-dashed border-muted-foreground/30 pl-4 py-2 select-none"
                >
                  <h2 className="text-base text-muted-foreground/50 font-mono mb-2 flex items-center gap-2">
                    <span>{`~ [ SECTION_VACANT_0${index + 1} ]`}</span>
                  </h2>
                  <div className="flex flex-col gap-2 text-xs font-mono mt-4 p-4 border border-dashed border-border/20 bg-muted/5">
                    <div className="text-muted-foreground/45 italic">
                      AWAITING_PROJECT_SPEC // ADDR_0x00FF{index}
                    </div>
                  </div>
                </m.li>
              );
            }
            return <ProjectManifestCard key={(item as Project).id} project={item as Project} />;
          })}
        </AnimatePresence>
      </m.ul>
    </>
  );
}
