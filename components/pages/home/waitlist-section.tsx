import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { WAITLIST_URL, waitlistCards, waitlistNotes } from "./constants"
import { Reveal } from "./reveal"

export function WaitlistSection() {
  return (
    <section className="bg-hearth-orange px-0 py-[120px] text-center text-white">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <Reveal>
          <Badge className="mb-3.5 h-auto rounded-none border-0 bg-transparent px-0 py-0 text-[11.5px] font-semibold tracking-[0.16em] text-white/80 uppercase shadow-none hover:bg-transparent">
            Founding Cohort
          </Badge>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mb-[60px] font-serif text-[36px] font-medium tracking-tight text-white md:text-[46px]">
            Be a founding builder.
          </h2>
        </Reveal>

        <div className="mb-14 grid gap-4 text-left md:grid-cols-3">
          {waitlistCards.map((card, index) => (
            <Reveal key={card.tag} delay={(index as 0 | 1 | 2) ?? 0}>
              <Card className="gap-0 rounded-[22px] border border-white/22 bg-white/10 py-0 text-white shadow-none ring-0 backdrop-blur-[6px]">
                <CardHeader className="px-[26px] pt-[30px]">
                  <Badge className="mb-3.5 h-auto rounded-none border-0 bg-transparent px-0 py-0 text-[11px] font-bold tracking-widest text-[#FFE1C7] uppercase shadow-none hover:bg-transparent">
                    {card.tag}
                  </Badge>
                  <CardTitle className="font-serif text-[19px] font-medium text-white">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-[26px] pb-[30px]">
                  <CardDescription
                    className={
                      card.highlight
                        ? "text-[13.5px] font-semibold text-[#FFE1C7]"
                        : "text-sm text-white/82"
                    }
                  >
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <p className="mb-[30px] text-[13px] text-white/72">
            {waitlistNotes.map((note, index) => (
              <span key={note}>
                {note}
                {index < waitlistNotes.length - 1 && (
                  <span className="mx-1" aria-hidden>
                    ·
                  </span>
                )}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={3}>
          <Button
            asChild
            size="lg"
            className="h-auto rounded-full border-0 bg-white px-8 py-[17px] text-[15.5px] font-semibold text-hearth-orange shadow-[0_16px_34px_-14px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:bg-hearth-cream"
          >
            <Link href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
              Join Waitlist
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
