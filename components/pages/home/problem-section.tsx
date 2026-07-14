import { BookOpen, Heart, MessageCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { problemCards } from "./constants"
import { Reveal } from "./reveal"

const iconMap = {
  message: MessageCircle,
  heart: Heart,
  book: BookOpen,
} as const

export function ProblemSection() {
  return (
    <section className="bg-hearth-cream px-0 py-[110px] text-center">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <Reveal>
          <Badge className="mb-3.5 h-auto rounded-none border-0 bg-transparent px-0 py-0 text-[11.5px] font-semibold tracking-[0.16em] text-hearth-orange uppercase shadow-none hover:bg-transparent">
            The Problem
          </Badge>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mx-auto mb-[18px] max-w-[560px] font-serif text-[32px] leading-snug font-medium tracking-tight text-hearth-dark md:text-[40px]">
            WhatsApp groups are scattered.
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mx-auto mb-16 max-w-[520px] text-[15.5px] text-hearth-ink-soft">
            Builders share progress, prayer requests and testimonies every day —
            but those moments disappear into endless chats.
          </p>
        </Reveal>

        <div className="grid gap-4 text-left md:grid-cols-3">
          {problemCards.map((card, index) => {
            const Icon = iconMap[card.icon]
            return (
              <Reveal key={card.title} delay={(index as 0 | 1 | 2) ?? 0}>
                <Card className="gap-0 rounded-[22px] border-0 bg-white py-0 shadow-hearth-card ring-0">
                  <CardHeader className="px-[26px] pt-[30px]">
                    <div className="mb-5 flex size-[42px] items-center justify-center rounded-xl bg-hearth-orange/9">
                      <Icon className="size-5 text-hearth-orange" strokeWidth={1.6} />
                    </div>
                    <CardTitle className="font-serif text-[17.5px] font-medium text-hearth-dark">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-[26px] pb-[30px]">
                    <CardDescription className="text-sm text-hearth-ink-soft">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
