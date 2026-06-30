import * as React from "react"
import { KineticDecryptionText } from "./ui/KineticDecryptionText"

export interface SitrepLog {
  id: string
  timestamp: string
  action: string
  status: "ACTIVE" | "RESOLVED" | "DEPRECATED"
}

export function SitrepFeed({ logs }: { logs: SitrepLog[] }) {
  return (
    <div className="flex flex-col gap-4 font-mono text-xs">
      <div className="border-b border-dashed border-border pb-2 mb-2">
        <h3 className="text-muted-foreground uppercase tracking-widest font-bold">
          <KineticDecryptionText text="SITREP_LOG // OPERATOR_HISTORY" scrambleSpeed={20} />
        </h3>
      </div>
      
      <ul className="flex flex-col gap-3" aria-live="polite">
        {logs.map((log, i) => (
          <li key={log.id} className="flex flex-col gap-1 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex justify-between text-muted-foreground text-[10px]">
              <span className="tabular-nums">[{log.timestamp}]</span>
              <span className={
                log.status === 'ACTIVE' ? 'text-primary' :
                log.status === 'DEPRECATED' ? 'text-destructive' : 'text-muted-foreground'
              }>
                {log.status}
              </span>
            </div>
            <div className="pl-3 border-l border-primary/30 py-1 text-foreground">
              <span className="text-primary mr-2">&gt;</span>
              <KineticDecryptionText text={log.action} decryptDuration={800 + i * 200} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
