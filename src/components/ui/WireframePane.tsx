import * as React from "react"
import { cn } from "@/lib/utils"

export interface WireframePaneProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  label?: string
  noPadding?: boolean
}

const WireframePane = React.forwardRef<HTMLDivElement, WireframePaneProps>(
  ({ className, children, label, noPadding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative border border-dashed border-border bg-background/50",
          className
        )}
        data-slot="pane"
        {...props}
      >
        {label && (
          <div className="absolute -top-3 left-2 bg-background px-1 text-xs text-muted-foreground uppercase tracking-widest font-bold z-10">
            {label}
          </div>
        )}
        <div className={cn(noPadding ? "" : "p-4")}>{children}</div>
      </div>
    )
  }
)
WireframePane.displayName = "WireframePane"

export { WireframePane }
