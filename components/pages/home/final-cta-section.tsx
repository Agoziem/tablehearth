import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { WAITLIST_URL } from "./constants"
import { Embers } from "./embers"
import { Reveal } from "./reveal"

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-hearth-dark px-0 py-[130px] pb-[110px] text-center text-white">
      <Embers count={8} variant="final" />
      <div className="relative z-2 mx-auto max-w-[1120px] px-6 md:px-10">
        <Reveal>
          <Badge className="mb-3.5 h-auto rounded-none border-0 bg-transparent px-0 py-0 text-[11.5px] font-semibold tracking-[0.16em] text-[#F5A469] uppercase shadow-none hover:bg-transparent">
            TableHearth
          </Badge>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mb-4 font-serif text-[40px] font-medium tracking-tight text-white md:text-[52px]">
            Your Seat is waiting.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mb-[34px] text-[15.5px] text-white/68">
            One private home. No scattered chats. Join free.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <Button
            asChild
            size="lg"
            className="h-auto rounded-full border-0 bg-hearth-orange px-8 py-[17px] text-[15.5px] font-semibold text-white shadow-[0_16px_34px_-10px_var(--hearth-orange-glow)] hover:-translate-y-0.5 hover:bg-hearth-orange-deep hover:shadow-[0_22px_42px_-8px_var(--hearth-orange-glow)]"
          >
            <Link href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
              Join Waitlist
            </Link>
          </Button>
        </Reveal>
        <Reveal delay={3}>
          <p className="mt-[22px] text-[13px] text-white/50">
            No pressure. Just presence.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
