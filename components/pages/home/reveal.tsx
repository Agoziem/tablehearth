"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3
  immediate?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(immediate)

  useEffect(() => {
    if (immediate) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [immediate])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-1000 ease-hearth motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        delay === 1 && "delay-100",
        delay === 2 && "delay-200",
        delay === 3 && "delay-300",
        className
      )}
    >
      {children}
    </div>
  )
}
