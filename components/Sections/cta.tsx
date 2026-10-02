import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { Reveal } from "@/components/ui/reveal"

const pillars = ["Reliability", "Visibility", "Speed", "Scalability"]

export function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-24 text-white"
    >
      <div className="bg-node-grid absolute inset-0 opacity-50" />
      <Container className="relative max-w-4xl text-center">
        <Reveal>
          <SectionLabel tone="secondary">
            Ready to scale your fulfilment?
          </SectionLabel>
          <h2 className="text-display-lg mt-4 font-bold">
            Your logistics shouldn&apos;t limit your growth.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Tell us about your order volume and current setup. We&apos;ll show
            you exactly how FULLFILMENTHUB would run your fulfilment.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {pillars.map((pillar, index) => (
              <li key={pillar} className="flex items-center gap-2">
                <span className="text-xs font-medium tracking-[0.15em] text-white/50 uppercase">
                  {pillar}
                </span>
                {index < pillars.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="size-1 rounded-full bg-hub-blue/60"
                  />
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:hello@fullfilmenthub.com">Talk to our team</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white">
              <a href="mailto:hello@fullfilmenthub.com">
                Get a fulfilment quote
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
