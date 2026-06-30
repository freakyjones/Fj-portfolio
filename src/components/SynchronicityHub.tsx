"use client"

import * as React from "react"

const timezones = [
  { label: "IST", timeZone: "Asia/Kolkata" },
  { label: "GMT", timeZone: "Europe/London" },
  { label: "EST", timeZone: "America/New_York" },
  { label: "PST", timeZone: "America/Los_Angeles" },
]

export function SynchronicityHub() {
  const [mounted, setMounted] = React.useState(false)
  const [times, setTimes] = React.useState<string[]>(Array(4).fill("--:--:--"))

  React.useEffect(() => {
    setMounted(true)
    const updateTimes = () => {
      const now = new Date()
      const newTimes = timezones.map((tz) =>
        new Intl.DateTimeFormat("en-GB", {
          timeZone: tz.timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now)
      )
      setTimes(newTimes)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="flex flex-wrap gap-4 font-mono text-xs text-muted-foreground"
      aria-hidden="true"
    >
      {timezones.map((tz, i) => (
        <div key={tz.label} className="flex gap-2">
          <span className="text-primary/70">{tz.label}</span>
          <span className="tabular-nums opacity-80 w-[60px] inline-block text-right">
            {mounted ? times[i] : "--:--:--"}
          </span>
        </div>
      ))}
    </div>
  )
}
