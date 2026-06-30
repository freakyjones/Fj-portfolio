"use client"

import * as React from "react"
import { m, useAnimationControls } from "framer-motion"
import { cn } from "@/lib/utils"

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"

interface KineticDecryptionTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  scrambleSpeed?: number
  decryptDuration?: number
}

export function KineticDecryptionText({
  text,
  scrambleSpeed = 30,
  decryptDuration = 1000,
  className,
  ...props
}: KineticDecryptionTextProps) {
  const [displayText, setDisplayText] = React.useState(text)
  const isMounted = React.useRef(false)

  React.useEffect(() => {
    isMounted.current = true
    let interval: ReturnType<typeof setInterval>

    const startDecryption = () => {
      let iteration = 0
      const maxIterations = decryptDuration / scrambleSpeed

      interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char, index) => {
              if (index < (iteration / maxIterations) * text.length) {
                return text[index]
              }
              if (text[index] === " ") return " "
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
            })
            .join("")
        )

        iteration++
        if (iteration >= maxIterations) {
          clearInterval(interval)
          setDisplayText(text)
        }
      }, scrambleSpeed)
    }

    startDecryption()

    return () => {
      isMounted.current = false
      clearInterval(interval)
    }
  }, [text, decryptDuration, scrambleSpeed])

  return (
    <span className={cn("inline-block", className)} {...props}>
      {displayText}
    </span>
  )
}
