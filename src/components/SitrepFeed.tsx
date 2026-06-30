import * as React from "react"
import { KineticDecryptionText } from "./ui/KineticDecryptionText"

import { GitHubCommit } from "@/app/actions/github"

export function SitrepFeed({ logs }: { logs: GitHubCommit[] }) {
  return (
    <div className="flex flex-col gap-4 font-mono text-xs">
      <div className="border-b border-dashed border-border pb-2 mb-2">
        <h3 className="text-muted-foreground uppercase tracking-widest font-bold">
          <KineticDecryptionText text="SYS_LOG // REMOTE_COMMIT_FEED" scrambleSpeed={20} />
        </h3>
      </div>
      
      <ul className="flex flex-col gap-3" aria-live="polite">
        {logs.map((log, i) => (
          <li key={log.hash} className="flex flex-col gap-1 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex justify-between text-muted-foreground text-[10px]">
              <span className="tabular-nums">[{log.timestamp}]</span>
              <span className="text-primary truncate ml-4 max-w-[150px]">
                {log.repo}
              </span>
            </div>
            <a 
              href={`https://github.com/freakyjones/${log.repo}/commit/${log.hash}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="pl-3 border-l border-primary/30 py-1 text-foreground hover:bg-primary/5 hover:border-primary block"
            >
              <span className="text-primary mr-2">&gt;</span>
              <KineticDecryptionText text={log.message} decryptDuration={800 + i * 200} />
            </a>
          </li>
        ))}
        {logs.length === 0 && (
          <li className="text-muted-foreground animate-pulse">
            [ NO_RECENT_COMMITS_FOUND ]
          </li>
        )}
      </ul>
    </div>
  )
}
