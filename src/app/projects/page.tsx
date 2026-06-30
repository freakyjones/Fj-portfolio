"use client";

import { projects } from "@/data/projects";
import { m } from "framer-motion";
import Link from "next/link";
import { WireframePane } from "@/components/ui/WireframePane";
import { KineticDecryptionText } from "@/components/ui/KineticDecryptionText";

export default function AllProjectsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen p-4 md:p-8 animate-flicker">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        
        {/* Header */}
        <WireframePane className="flex justify-between items-end" label="GLOBAL_REGISTRY">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest focus-visible:ring-2 focus-visible:ring-primary inline-flex items-center gap-2">
              &lt; RETURN_TO_DASHBOARD
            </Link>
          </m.div>
        </WireframePane>

        <WireframePane label="DEPLOYED_ENGINES">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 border-b border-dashed border-border pb-4"
          >
            <h1 className="text-3xl text-primary bloom aberration mb-2">
              <KineticDecryptionText text="ALL_DEPLOYED_ENGINES" />
            </h1>
            <div className="text-xs text-muted-foreground font-mono">
              QUERY_RESULT: {projects.length} NODES FOUND
            </div>
          </m.div>

          <div className="flex flex-col gap-8 font-mono text-sm">
            {projects.map((project, index) => (
              <m.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l border-primary/20 pl-4 py-2 hover:bg-primary/5 transition-colors group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-primary text-lg font-bold group-hover:bloom transition-all">
                    <Link href={`/projects/${project.slug}`} className="focus-visible:ring-2 focus-visible:ring-primary">
                      &gt; {project.title}
                    </Link>
                  </h3>
                  <span className="text-xs text-muted-foreground tabular-nums">ID:{project.id}</span>
                </div>
                
                <p className="text-foreground opacity-90 mb-3 text-xs md:text-sm">{project.function}</p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </WireframePane>

      </div>
    </div>
  );
}
