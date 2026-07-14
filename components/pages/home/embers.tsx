"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type Ember = {
  id: number
  left: string
  delay: string
  duration: string
  drift: string
}

type EmbersProps = {
  count?: number
  className?: string
  variant?: "hero" | "final"
}

export function Embers({
  count = 10,
  className,
  variant = "hero",
}: EmbersProps) {
  const [embers, setEmbers] = useState<Ember[]>([])

  useEffect(() => {
    setEmbers(
      Array.from({ length: count }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 12}s`,
        duration: `${9 + Math.random() * 7}s`,
        drift: `${Math.random() * 60 - 30}px`,
      }))
    )
  }, [count])

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {embers.map((ember) => (
        <span
          key={ember.id}
          className={cn(
            "absolute bottom-[-10px] size-1 animate-hearth-rise rounded-full opacity-0",
            variant === "final" ? "bg-[#F0894C]" : "bg-hearth-orange"
          )}
          style={
            {
              left: ember.left,
              animationDelay: ember.delay,
              animationDuration: ember.duration,
              "--drift": ember.drift,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
