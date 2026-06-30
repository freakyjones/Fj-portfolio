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
    if (activeFilter === '--frontend') return project.tech.some(tech => tech.includes('REACT') || tech.includes('NEXT') || tech.includes('FRONTEND'));
    if (activeFilter === '--fullstack') return project.tech.some(tech => tech.includes('NODE') || tech.includes('BACKEND') || tech.includes('POSTGRESQL'));
    return true;
  }).slice(0, 3); // Keep it to max 3 for the dashboard

  return (
    <>
      <div className="flex gap-4 border-b border-dashed border-border pb-2 text-xs font-mono mb-2 overflow-x-auto scrollbar-none">
        <span className="text-muted-foreground">FILTER:</span>
        {filters.map(filter => (
          <button 
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative px-2 transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none whitespace-nowrap ${activeFilter === filter ? 'text-primary bloom' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {activeFilter === filter && (
              <m.div 
                layoutId="active-filter-bg"
                className="absolute inset-0 bg-primary/10 border-b border-primary z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </div>

      <m.ul layout className="flex flex-col gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectManifestCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </m.ul>
    </>
  );
}
