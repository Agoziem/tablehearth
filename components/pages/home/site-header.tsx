"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { WAITLIST_URL } from "./constants"
import { LogoMark } from "./logo-mark"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 py-5 transition-[background,padding,box-shadow] duration-500 ease-hearth",
        scrolled &&
          "border-b border-hearth-line bg-hearth-cream/88 py-3.5 shadow-none backdrop-blur-[14px] backdrop-saturate-110"
      )}
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 md:px-10">
        <LogoMark priority onDarkBackground={!scrolled} />
        <Button
          asChild
          variant="outline"
          size="sm"
          className={cn(
            "rounded-full border px-[18px] py-2 text-[13px] font-semibold transition-all duration-400 ease-hearth",
            scrolled
              ? "border-hearth-dark text-hearth-dark hover:border-hearth-orange hover:bg-hearth-orange hover:text-white"
              : "border-white/55 bg-transparent text-white hover:border-hearth-orange hover:bg-hearth-orange hover:text-white"
          )}
        >
          <Link
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Waitlist
          </Link>
        </Button>
      </div>
    </header>
  )
}
