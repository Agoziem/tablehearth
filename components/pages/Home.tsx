import { FinalCtaSection } from "./home/final-cta-section"
import { HeroSection } from "./home/hero-section"
import { ProblemSection } from "./home/problem-section"
import { SiteFooter } from "./home/site-footer"
import { SiteHeader } from "./home/site-header"
import { SolutionSection } from "./home/solution-section"
import { WaitlistSection } from "./home/waitlist-section"

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-hearth-cream font-sans text-hearth-dark antialiased selection:bg-hearth-orange selection:text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WaitlistSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
