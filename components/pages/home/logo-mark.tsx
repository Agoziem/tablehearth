import Image from "next/image"

import { cn } from "@/lib/utils"

type LogoMarkProps = {
  className?: string
  priority?: boolean
  onDarkBackground?: boolean
}

export function LogoMark({
  className,
  priority = false,
  onDarkBackground = false,
}: LogoMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center",
        onDarkBackground &&
          "rounded-lg bg-hearth-cream/95 px-2.5 py-1.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.35)] backdrop-blur-sm",
        className
      )}
    >
      <Image
        src="/assets/phone_hearth_logo_main.png"
        alt="TableHearth"
        width={1536}
        height={1024}
        priority={priority}
        className="h-auto w-32 max-w-none object-contain"
      />
    </span>
  )
}
