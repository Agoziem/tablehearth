import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { heroMicro, WAITLIST_URL } from "./constants"
import { Embers } from "./embers"
import { Reveal } from "./reveal"

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden px-0 py-[150px] pb-[90px] text-center">
      <div
        className="absolute inset-[-4%] scale-[1.12] bg-cover bg-[center_18%] blur-[18px] saturate-[1.15]"
        style={{ backgroundImage: "url(/assets/phone_table.png)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-[rgba(20,15,10,0.72)] via-[rgba(18,13,9,0.82)] to-[rgba(15,11,8,0.92)]"
        aria-hidden
      />
      <div
        className="absolute top-[8%] left-1/2 size-[520px] -translate-x-1/2 animate-hearth-breathe rounded-full bg-[radial-gradient(circle,var(--hearth-orange-glow)_0%,rgba(232,93,4,0)_70%)] blur-[10px]"
        aria-hidden
      />
      <Embers count={10} />

      <div className="relative z-2 mx-auto max-w-[1120px] px-6 text-white md:px-10">
        <Reveal immediate>
          <Badge className="mb-5 h-auto rounded-none border-0 bg-transparent px-0 py-0 text-[11.5px] font-semibold tracking-[0.2em] text-[#F5A469] uppercase shadow-none hover:bg-transparent">
            TableHearth
          </Badge>
        </Reveal>
        <Reveal immediate delay={1}>
          <h1 className="mx-auto mb-[22px] max-w-[640px] font-serif text-[42px] leading-[1.16] font-medium tracking-tight text-white md:text-[62px]">
            Faithfulness <em className="font-medium text-hearth-orange italic">over</em>{" "}
            fame.
          </h1>
        </Reveal>
        <Reveal immediate delay={2}>
          <p className="mx-auto mb-9 max-w-[460px] text-base text-white/78 md:max-w-[540px] md:text-lg">
            A private digital home for faith-driven builders to document daily
            progress, meet real needs, and track God&apos;s faithfulness.
          </p>
        </Reveal>
        <Reveal immediate delay={3}>
          <div className="mb-[22px]">
            <Button
              asChild
              size="lg"
              className="h-auto rounded-full border-0 bg-hearth-orange px-8 py-[17px] text-[15.5px] font-semibold text-white shadow-[0_16px_34px_-10px_var(--hearth-orange-glow)] hover:-translate-y-0.5 hover:bg-hearth-orange-deep hover:shadow-[0_22px_42px_-8px_var(--hearth-orange-glow)]"
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
        </Reveal>
        <Reveal immediate delay={3}>
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 text-[12.5px] tracking-wide text-white/55">
            {heroMicro.map((item, index) => (
              <span key={item} className="flex items-center gap-3.5">
                {item}
                {index < heroMicro.length - 1 && (
                  <span className="text-white/35" aria-hidden>
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
