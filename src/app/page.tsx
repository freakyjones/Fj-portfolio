import { WireframePane } from "@/components/ui/WireframePane";
import { SynchronicityHub } from "@/components/SynchronicityHub";
import { CommsRelay } from "@/components/ui/CommsRelay";
import { SitrepFeed } from "@/components/SitrepFeed";
import { projects } from "@/data/projects";
import { getOperatorHistory } from "@/app/actions/github";

// Modularized Components
import { TerminalPrompt } from "@/components/ui/TerminalPrompt";
import { TelemetryGrid } from "@/components/ui/TelemetryGrid";
import { SkillsManifest } from "@/components/SkillsManifest";
import { VisitorNodeDetector } from "@/components/VisitorNodeDetector";
import { ProjectManifests } from "@/components/ProjectManifests";
import { CognitiveLoad } from "@/components/ui/CognitiveLoad";

export default async function Home() {
  const commitLogs = await getOperatorHistory();

  return (
    <main className="min-h-screen p-4 md:p-8 animate-flicker overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        
        {/* ROW 1: Tactical Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <WireframePane className="md:col-span-5 flex justify-between items-start" label="TACTICAL_HEADER">
            <div>
              <h1 className="text-xl text-primary bloom">IDENTITY: ABHILASH</h1>
              <div className="text-xs text-muted-foreground mt-1">
                STATUS: <span className="text-foreground">ACTIVE</span> {"//"} RANK: FULLSTACK_ENGINEER
              </div>
              <div className="text-xs text-muted-foreground mt-4 max-w-lg leading-relaxed">
                <span className="text-primary">{"//"} OBJECTIVE:</span> Frontend Engineer with 2.5+ years of professional experience building scalable web applications. Proficient in Next.js 15, React 19, and TypeScript. Skilled in AI-assisted development—leveraging agentic AI systems to prototype, architect, and ship production-grade code.
              </div>
            </div>
          </WireframePane>
          <WireframePane className="md:col-span-7 flex items-center" label="SYNCHRONICITY_HUB">
            <SynchronicityHub />
          </WireframePane>
        </div>

        {/* ROW 2: System Capabilities (Skills) */}
        <div className="grid grid-cols-1 gap-4">
          <SkillsManifest />
        </div>

        {/* ROW 3: Core Analysis Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Column A: Project Engine Manifests */}
          <WireframePane className="lg:col-span-8 flex flex-col gap-6" label="ENGINE_MANIFESTS">
            <ProjectManifests projects={projects} />
          </WireframePane>

          {/* Column B: Telemetry & SITREP Feed */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <WireframePane label="SITREP_FEED">
              <SitrepFeed logs={commitLogs} />
            </WireframePane>
            
            <WireframePane label="VISITOR_TELEMETRY">
              <VisitorNodeDetector />
            </WireframePane>

            <WireframePane label="SUBPROCESSES" className="flex-1">
              <CognitiveLoad />
            </WireframePane>
          </div>
        </div>

        {/* ROW 4: GitHub Telemetry */}
        <div className="grid grid-cols-1 gap-4">
          <TelemetryGrid />
        </div>

        {/* ROW 5: Infrastructure Footer & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <WireframePane className="lg:col-span-3 flex flex-col justify-end" label="COMMS">
            <CommsRelay />
          </WireframePane>
          <WireframePane className="lg:col-span-6 flex flex-col" label="TERMINAL" noPadding>
            <TerminalPrompt />
          </WireframePane>
          <WireframePane className="lg:col-span-3 flex items-center justify-end" label="INGESTION_NODE">
             <div className="text-xs text-muted-foreground tabular-nums text-right">
               22.5726° N, 88.3639° E<br/>
               {"//"} KOLKATA_WB
             </div>
          </WireframePane>
        </div>

      </div>
    </main>
  )
}
