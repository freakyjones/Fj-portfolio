import Link from "next/link";
import { WireframePane } from "@/components/ui/WireframePane";

export const metadata = {
  title: "404 // NODE_NOT_FOUND",
  description: "The requested telemetry node or log packet was not located on this host.",
};

export default function NotFound() {
  return (
    <div className="bg-background text-foreground min-h-screen p-4 md:p-8 flex items-center justify-center font-mono">
      <div className="w-full max-w-2xl">
        <WireframePane label="SYSTEM_FAULT // ERR_404">
          <div className="flex flex-col gap-6 py-6 px-2">
            <div className="border-b border-dashed border-destructive/40 pb-4">
              <h1 className="text-3xl text-destructive font-bold tracking-tight mb-2">
                [!] SECTOR_NOT_FOUND: 404
              </h1>
              <p className="text-xs text-muted-foreground">
                SIGNAL_STATUS: PACKET_DROPPED {"//"} TARGET_NODE_UNAVAILABLE
              </p>
            </div>

            <div className="text-sm text-foreground/90 space-y-2 bg-muted/10 p-4 border border-border/40">
              <p>
                <span className="text-primary font-bold">&gt; DIAGNOSTIC:</span> The requested route or system resource does not exist in the active memory registry.
              </p>
              <p className="text-xs text-muted-foreground">
                <span className="text-destructive font-bold">&gt; ORIGIN:</span> Localhost gateway verified. Node lookup failed.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
              <Link
                href="/"
                className="px-4 py-2 border border-primary text-primary hover:bg-primary/10 transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
              >
                [ RETURN_TO_DASHBOARD ]
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
              >
                [ QUERY_ALL_ENGINES ]
              </Link>
              <Link
                href="/logs"
                className="px-4 py-2 border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
              >
                [ VIEW_SYSTEM_LOGS ]
              </Link>
            </div>
          </div>
        </WireframePane>
      </div>
    </div>
  );
}
