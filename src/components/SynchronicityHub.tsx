"use client"

import * as React from "react"
import { m } from "framer-motion"

interface Timezone {
  label: string
  timeZone: string
  offset: number // relative to GMT
}

const timezones: Timezone[] = [
  { label: "IST", timeZone: "Asia/Kolkata", offset: 5.5 },
  { label: "GMT", timeZone: "Europe/London", offset: 0 },
  { label: "EST", timeZone: "America/New_York", offset: -5 },
  { label: "PST", timeZone: "America/Los_Angeles", offset: -8 },
]

export function SynchronicityHub() {
  const [mounted, setMounted] = React.useState(false)
  const [times, setTimes] = React.useState<string[]>(Array(4).fill("--:--:--"))
  const [activeIdx, setActiveIdx] = React.useState<number>(0) // Default to IST (index 0)

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

  // Calculate basis offsets
  const activeTz = timezones[activeIdx]
  const diff = activeTz.offset - timezones[0].offset // diff relative to IST

  // Matrix Transformation calculations
  const theta = (diff * 6 * Math.PI) / 180
  const scale = 1 - Math.abs(diff) * 0.02
  const skewX = diff * 3
  const rotate = diff * 5

  const a = Math.cos(theta) * scale
  const b = -Math.sin(theta) * scale + Math.sin((skewX * Math.PI) / 180)
  const c = Math.sin(theta) * scale
  const d = Math.cos(theta) * scale
  const det = a * d - b * c

  // Simple complex/real eigenvalue representations for aesthetic telemetry
  const trace = a + d
  const disc = trace * trace - 4 * det
  let eigen1 = "1.00"
  let eigen2 = "1.00"
  if (disc >= 0) {
    eigen1 = ((trace + Math.sqrt(disc)) / 2).toFixed(2)
    eigen2 = ((trace - Math.sqrt(disc)) / 2).toFixed(2)
  } else {
    const real = (trace / 2).toFixed(2)
    const imag = (Math.sqrt(-disc) / 2).toFixed(2)
    eigen1 = `${real}+${imag}i`
    eigen2 = `${real}-${imag}i`
  }

  // Calculate analog clock hand angles for the active timezone
  const activeTimeStr = times[activeIdx]
  let hh = 0
  let mm = 0
  let ss = 0
  if (activeTimeStr && activeTimeStr !== "--:--:--") {
    const [h, m, s] = activeTimeStr.split(":").map(Number)
    hh = h
    mm = m
    ss = s
  }

  const minAngle = (mm / 60) * 360 + (ss / 60) * 6
  const hourAngle = ((hh % 12) / 12) * 360 + (mm / 60) * 30

  // Analog hands endpoint coordinates (centered at 50,50)
  const minRad = (minAngle - 90) * (Math.PI / 180)
  const hourRad = (hourAngle - 90) * (Math.PI / 180)

  const mx = 50 + 20 * Math.cos(minRad)
  const my = 50 + 20 * Math.sin(minRad)
  const hx = 50 + 13 * Math.cos(hourRad)
  const hy = 50 + 13 * Math.sin(hourRad)

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] xl:grid-cols-[1.5fr_1fr_1.5fr] gap-4 lg:gap-6 w-full font-mono text-[10px] items-center justify-items-center xl:justify-items-stretch">
      
      {/* Column 1: Timezone Clocks Grid */}
      <div className="grid grid-cols-2 gap-3 w-full md:col-span-2 xl:col-span-1">
        {timezones.map((tz, i) => {
          const isActive = activeIdx === i
          return (
            <button
              key={tz.label}
              onMouseEnter={() => setActiveIdx(i)}
              onClick={() => setActiveIdx(i)}
              className={`border p-2 md:p-3 flex flex-col justify-between min-h-[75px] w-full text-left transition-all focus-visible:ring-2 focus-visible:ring-primary outline-none cursor-pointer overflow-hidden ${
                isActive 
                  ? "border-primary bg-primary/10 text-primary" 
                  : "border-border/30 bg-muted/5 text-muted-foreground hover:border-border/60 hover:text-foreground"
              }`}
            >
              <span className={`uppercase tracking-widest text-[7px] sm:text-[8px] truncate w-full ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                {tz.label} {"//"} NODE_{i}
              </span>
              <span className={`text-[13px] sm:text-sm md:text-base font-bold tabular-nums mt-1 leading-none tracking-tight sm:tracking-normal ${isActive ? 'bloom' : ''}`}>
                {mounted ? times[i] : "--:--:--"}
              </span>
              <span className="text-[7px] sm:text-[8px] opacity-70 tracking-wider truncate w-full">
                {isActive ? "[ ACTIVE_BASIS ]" : `[ UTC${tz.offset >= 0 ? `+${tz.offset}` : tz.offset} ]`}
              </span>
            </button>
          )
        })}
      </div>
      
      {/* Column 2: SVG Vector space & Clock Visualizer */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 border border-border/20 bg-background flex items-center justify-center overflow-hidden aspect-square flex-shrink-0 md:justify-self-end">
        {/* Static Center Grid Cross */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-full h-[1px] bg-foreground" />
          <div className="h-full w-[1px] bg-foreground absolute" />
        </div>

        <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-90">
          {/* Animated Transformation Grid */}
          <m.g
            animate={{ rotate, skewX, scale }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            style={{ originX: "50px", originY: "50px" }}
          >
            {/* Grid Lines */}
            <line x1="10" y1="50" x2="90" y2="50" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="10" y1="30" x2="90" y2="30" stroke="var(--color-border)" strokeWidth="0.25" strokeDasharray="1,2" className="opacity-50" />
            <line x1="10" y1="70" x2="90" y2="70" stroke="var(--color-border)" strokeWidth="0.25" strokeDasharray="1,2" className="opacity-50" />
            <line x1="30" y1="10" x2="30" y2="90" stroke="var(--color-border)" strokeWidth="0.25" strokeDasharray="1,2" className="opacity-50" />
            <line x1="70" y1="10" x2="70" y2="90" stroke="var(--color-border)" strokeWidth="0.25" strokeDasharray="1,2" className="opacity-50" />

            {/* Basis Vector 1 - X axis (dimmed green/cyan) */}
            <line x1="50" y1="50" x2="80" y2="50" stroke="var(--color-foreground)" strokeWidth="1.5" strokeLinecap="round" className="opacity-60" />
            <polygon points="80,50 76,48 76,52" fill="var(--color-foreground)" className="opacity-60" />
            
            {/* Basis Vector 2 - Y axis (cyan) */}
            <line x1="50" y1="50" x2="50" y2="20" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
            <polygon points="50,20 48,24 52,24" fill="var(--color-primary)" />

            {/* Analog Time Dial Clock face (sheared/rotated dynamically) */}
            <circle cx="50" cy="50" r="23" stroke="var(--color-primary)" strokeWidth="0.5" fill="none" strokeDasharray="2,3" className="opacity-40 animate-pulse" />
            
            {/* Hour hand */}
            <line x1="50" y1="50" x2={hx} y2={hy} stroke="var(--color-foreground)" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Minute hand */}
            <line x1="50" y1="50" x2={mx} y2={my} stroke="var(--color-primary)" strokeWidth="1" strokeLinecap="round" className="bloom" />
          </m.g>
        </svg>
        <div className="absolute bottom-1 right-2 text-[7px] text-muted-foreground opacity-60">
          R^2_SPACE
        </div>
      </div>
      
      {/* Column 3: Live Matrix Telemetry Logs */}
      <div className="text-[9px] text-muted-foreground w-full max-w-sm opacity-90 border-t md:border-t-0 md:border-l border-dashed border-border/20 pt-4 md:pt-0 md:pl-4 xl:pl-6 md:justify-self-start">
        <span className="text-primary font-bold tracking-widest block mb-4">L_TRANSFORM :: ACTIVE</span>
        
        {/* CSS-based Matrix Layout (Responsive, No Overflow) */}
        <div className="flex items-center gap-2 md:gap-3 mb-4 font-mono select-none">
          
          {/* 2x2 Transformation Matrix */}
          <div className="flex flex-col relative px-1.5 py-0.5">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 border-l border-t border-b border-muted-foreground/40" />
            <div className="absolute right-0 top-0 bottom-0 w-1.5 border-r border-t border-b border-muted-foreground/40" />
            <div className="flex justify-between gap-3 px-1">
              <span className="w-8 text-right tabular-nums">{a.toFixed(3)}</span>
              <span className="w-8 text-right tabular-nums">{b.toFixed(3)}</span>
            </div>
            <div className="flex justify-between gap-3 px-1 mt-1">
              <span className="w-8 text-right tabular-nums">{c.toFixed(3)}</span>
              <span className="w-8 text-right tabular-nums">{d.toFixed(3)}</span>
            </div>
          </div>

          {/* 2x1 Input Vector */}
          <div className="flex flex-col relative px-1.5 py-0.5">
            <div className="absolute left-0 top-0 bottom-0 w-1 border-l border-t border-b border-muted-foreground/40" />
            <div className="absolute right-0 top-0 bottom-0 w-1 border-r border-t border-b border-muted-foreground/40" />
            <span className="px-1 text-center font-bold">x</span>
            <span className="px-1 text-center font-bold mt-1">y</span>
          </div>

          <span className="text-muted-foreground/50 font-bold mx-1">=</span>

          {/* 2x1 Output Vector */}
          <div className="flex flex-col relative px-1.5 py-0.5">
            <div className="absolute left-0 top-0 bottom-0 w-1 border-l border-t border-b border-muted-foreground/40" />
            <div className="absolute right-0 top-0 bottom-0 w-1 border-r border-t border-b border-muted-foreground/40" />
            <span className="px-1 text-center font-bold">IST</span>
            <span className="px-1 text-center font-bold mt-1 text-primary">{activeTz.label}</span>
          </div>
        </div>
        
        {/* Eigenvalues */}
        <div className="flex flex-col gap-1 mt-2 text-[9px] font-mono opacity-80">
          <span>Det(A) = {det.toFixed(3)}</span>
          <span className="flex items-center gap-1.5">
            λ₁ = {eigen1} <span className="opacity-30">{"//"}</span> λ₂ = {eigen2}
          </span>
        </div>
      </div>
      
    </div>
  )
}
