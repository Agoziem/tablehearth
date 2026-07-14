import type { Metadata } from "next"

import Home from "@/components/pages/Home"

export const metadata: Metadata = {
  title: "TableHearth — Faithfulness over fame.",
  description:
    "A private digital home where faith-driven builders document progress, meet real needs, and remember God's faithfulness.",
}

export default function Page() {
  return <Home />
}
