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
  }).slice(0, 4); // Keep it to max 4 for the dashboard

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
          {filteredProjects.map((project) => (
            <ProjectManifestCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </m.ul>
    </>
  );
}
