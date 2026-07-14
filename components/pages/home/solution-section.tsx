import Image from "next/image"

import { Badge } from "@/components/ui/badge"

import { showcaseItems } from "./constants"
import { Reveal } from "./reveal"

export function SolutionSection() {
  return (
    <section className="bg-white px-0 py-[120px] text-center">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <div className="mb-[90px]">
          <Reveal>
            <Badge className="mb-2.5 h-auto rounded-none border-0 bg-transparent px-0 py-0 text-[11.5px] font-semibold tracking-[0.16em] text-hearth-orange uppercase shadow-none hover:bg-transparent">
              The Solution
            </Badge>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mb-2.5 font-serif text-[34px] font-medium tracking-tight text-hearth-dark md:text-[44px]">
              The Table is set.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-base text-hearth-ink-soft md:text-lg">
              Where needs meet family.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-[110px]">
          {showcaseItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center"
            >
              <Reveal>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={280}
                  height={560}
                  className="mb-[34px] h-auto w-[240px] rounded-[30px] shadow-[0_40px_70px_-30px_rgba(26,26,26,0.28)] md:w-[280px]"
                />
              </Reveal>
              <Reveal delay={1}>
                <Badge className="mb-2.5 h-auto rounded-none border-0 bg-transparent px-0 py-0 text-[11.5px] font-semibold tracking-[0.16em] text-hearth-orange uppercase shadow-none hover:bg-transparent">
                  {item.eyebrow}
                </Badge>
              </Reveal>
              <Reveal delay={1}>
                <h3 className="mb-2 font-serif text-[25px] font-medium tracking-tight text-hearth-dark md:text-[30px]">
                  {item.title}
                </h3>
              </Reveal>
              <Reveal delay={1}>
                <p className="mb-[22px] text-[13px] font-semibold tracking-[0.04em] text-hearth-ink-faint uppercase">
                  {item.caption}
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="mx-auto mb-4 max-w-[380px] font-serif text-[19px] leading-normal font-normal text-hearth-dark italic">
                  &ldquo;
                  {item.quote.split("\n").map((line, lineIndex) => (
                    <span key={line}>
                      {lineIndex > 0 && <br />}
                      {line}
                    </span>
                  ))}
                  &rdquo;
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="mx-auto max-w-[320px] text-[13.5px] leading-loose text-hearth-ink-soft">
                  {item.micro}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
