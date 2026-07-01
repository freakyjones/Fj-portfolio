"use client";

import React from "react";
import { m } from "framer-motion";
import { KineticDecryptionText } from "@/components/ui/KineticDecryptionText";
import type { Project } from "@/data/projects";

interface ProjectManifestCardProps {
  project: Project;
}

export function ProjectManifestCard({ project }: ProjectManifestCardProps) {
  return (
    <m.li 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="border-l border-primary/20 pl-4 py-2"
    >
      <h2 className="text-lg text-accent bloom-white aberration mb-2 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <div className="flex-1 w-full truncate">
          <KineticDecryptionText text={`> ${project.title}`} />
        </div>
        {(project.liveUrl || project.githubUrl) && (
          <span className="flex items-center gap-3 text-xs font-mono w-full sm:w-auto mt-1 sm:mt-0">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                [LIVE_NODE]
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                [SOURCE_CODE]
              </a>
            )}
          </span>
        )}
      </h2>
      
      <div className="flex flex-col gap-4 text-sm font-mono mt-4 bg-muted/5 p-4 border border-dashed border-border/50">
        <div>
          <h3 className="text-foreground/75 mb-1 uppercase tracking-wider text-xs">Ingestion Spec</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.ingestionSpec.map((tech, i) => (
              <span key={i} className="text-[10px] bg-primary/10 text-primary px-3 py-1 border border-primary/30 font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-foreground/75 mb-1 uppercase tracking-wider text-xs">The Intent</h3>
          <p className="text-foreground leading-relaxed">{project.intent}</p>
        </div>
        <div>
          <h3 className="text-primary/80 mb-1 uppercase tracking-wider text-xs bloom">The Performance</h3>
          <p className="text-accent font-semibold leading-relaxed bloom-white">{project.performance}</p>
        </div>
        <div>
          <h3 className="text-foreground/75 mb-1 uppercase tracking-wider text-xs">Infrastructure</h3>
          <p className="text-primary leading-relaxed font-semibold bloom">{project.infrastructure}</p>
        </div>
      </div>
    </m.li>
  );
}
