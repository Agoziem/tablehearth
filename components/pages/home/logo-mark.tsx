import { cn } from "@/lib/utils"

type LogoMarkProps = {
  className?: string
  light?: boolean
}

export function LogoMark({ className, light = false }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-serif text-xl font-medium tracking-tight",
        light ? "text-white" : "text-hearth-dark",
        className
      )}
    >
      Table
      <span className="text-hearth-orange italic">Hearth</span>
      <span className="mb-2 ml-0.5 size-1.5 animate-hearth-flicker rounded-full bg-hearth-orange" />
    </span>
  )
}
