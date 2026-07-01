import React from 'react';
import Link from 'next/link';
import { getLogs } from '@/lib/mdx';

export default function LogsIndexPage() {
  const logs = getLogs();

  return (
    <div className="container mx-auto max-w-4xl px-6 py-16 font-mono text-primary">
      {/* Option 1: cd .. Breadcrumb */}
      <div className="mb-8 font-mono text-sm">
        <Link 
          href="/" 
          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 w-fit"
        >
          <span>cd ..</span> 
          <span className="text-muted-foreground/50">{"//"} RETURN_TO_ROOT</span>
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          SYSTEM_LOGS // RECENT_TRANSMISSIONS
        </h1>
        <div className="text-muted-foreground">
          FILTER: <span className="text-primary">[--ALL]</span> [--FRONTEND] [--SYSTEMS]
        </div>
      </div>

      <div className="flex flex-col gap-1 text-sm md:text-base">
        {logs.map((log, index) => {
          const isLast = index === logs.length - 1;
          const treeBranch = isLast ? '└──>' : '├──>';

          return (
            <div key={log.slug} className="group flex items-center justify-between hover:bg-muted/20 py-1 px-2 rounded-sm transition-colors">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground whitespace-nowrap shrink-0">
                  [ {log.frontmatter.date.replace(/-/g, '.')} ]
                </span>
                <span className="text-muted-foreground font-light shrink-0">
                  {treeBranch}
                </span>
                <Link 
                  href={`/logs/${log.slug}`}
                  className="font-semibold text-primary hover:underline hover:text-emerald-400 truncate"
                >
                  /logs/{log.slug}
                </Link>
              </div>
              
              <div className="hidden sm:flex text-muted-foreground group-hover:text-primary transition-colors">
                [ READ_TIME: {log.frontmatter.readTime} ]
              </div>
            </div>
          );
        })}
      </div>

      {/* Option 2: Command Prompt Return */}
      <div className="mt-12 font-mono text-sm flex items-center gap-1">
        <span className="text-primary">{`> `}</span>
        <Link 
          href="/" 
          className="text-muted-foreground hover:text-primary hover:border-b hover:border-primary/50 transition-all cursor-pointer"
        >
          [EXECUTE: RETURN_TO_DASHBOARD]
        </Link>
        <span className="text-primary animate-pulse font-bold">_</span>
      </div>
    </div>
  );
}
