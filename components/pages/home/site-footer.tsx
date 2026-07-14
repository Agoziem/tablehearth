import { LogoMark } from "./logo-mark"

export function SiteFooter() {
  return (
    <footer className="border-t border-hearth-line bg-hearth-cream px-0 py-11 text-center">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <LogoMark className="mx-auto flex w-fit justify-center" />
        <p className="mb-3.5 text-[13px] text-hearth-ink-soft">
          Faithfulness over fame.
        </p>
        <p className="text-xs text-hearth-ink-faint">
          TableHearth Ltd. © 2026
        </p>
      </div>
    </footer>
  )
}
