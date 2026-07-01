"use client";

import { Project } from "@/data/projects";
import Link from "next/link";
import { m } from "framer-motion";
import { WireframePane } from "@/components/ui/WireframePane";
import { KineticDecryptionText } from "@/components/ui/KineticDecryptionText";

interface ProjectClientPageProps {
  project: Project;
}

export default function ProjectDetailClientPage({
  project,
}: ProjectClientPageProps) {
  return (
    <div className="bg-background text-foreground min-h-screen p-4 md:p-8 animate-flicker">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        
        {/* Header */}
        <WireframePane className="flex justify-between items-end" label="ENGINE_CONTROL">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest focus-visible:ring-2 focus-visible:ring-primary inline-flex items-center gap-2">
              &lt; ABORT_AND_RETURN
            </Link>
          </m.div>
        </WireframePane>

        <WireframePane label="DETAILED_MANIFEST">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 border-l border-primary/20 pl-4 py-2"
          >
            <h1 className="text-3xl text-accent bloom-white aberration mb-2">
              <KineticDecryptionText text={project.title} />
            </h1>
            <div className="text-xs text-muted-foreground font-mono">
              ENGINE_ID: {project.slug.toUpperCase()} {"//"} STATUS: DEPLOYED
            </div>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm">
            
            <div className="space-y-6">
              <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <h3 className="text-muted-foreground mb-2 underline decoration-dashed underline-offset-4 uppercase tracking-widest">THE INTENT</h3>
                <p className="text-foreground leading-relaxed">{project.intent}</p>
              </m.div>

              <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <h3 className="text-muted-foreground mb-2 underline decoration-dashed underline-offset-4 uppercase tracking-widest">INGESTION SPEC</h3>
                <div className="flex flex-col gap-2">
                  {project.ingestionSpec.map((tech, i) => (
                    <div key={i} className="text-xs bg-primary/10 text-primary px-3 py-1.5 border border-primary/30 inline-block w-fit font-bold">
                      &gt; {tech}
                    </div>
                  ))}
                </div>
              </m.div>
            </div>

            <div className="space-y-6">
              <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <h3 className="text-primary mb-2 underline decoration-dashed underline-offset-4 uppercase tracking-widest bloom">THE PERFORMANCE</h3>
                <p className="text-accent font-semibold leading-relaxed bloom-white">{project.performance}</p>
              </m.div>

              <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <h3 className="text-muted-foreground mb-2 underline decoration-dashed underline-offset-4 uppercase tracking-widest">INFRASTRUCTURE</h3>
                <p className="text-primary font-semibold leading-relaxed bloom">{project.infrastructure}</p>
              </m.div>

              <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="pt-4 space-y-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block text-xs text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary w-fit">
                    [ ACCESS_LIVE_NODE ]
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block text-xs text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary w-fit">
                    [ VIEW_SOURCE_CODE ]
                  </a>
                )}
              </m.div>
            </div>

          </div>
        </WireframePane>

      </div>
    </div>
  );
}
