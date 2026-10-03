import {
  IconStorage,
  IconPickPack,
  IconShipping,
  IconReturns,
  IconConnect,
  IconNetwork,
} from "@/components/icons"
import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { Reveal } from "@/components/ui/reveal"
import { GridCoordinate } from "@/components/ui/grid-coordinate"
import { NodeFlow } from "@/components/node-flow"
import { GlowOrb } from "@/components/ui/glow-orb"

const hubs = [
  {
    coordinate: "A01",
    icon: IconStorage,
    name: "Hub Storage",
    description: "Warehousing & inventory management.",
  },
  {
    coordinate: "A02",
    icon: IconPickPack,
    name: "Hub Fulfilment",
    description: "Pick, pack & dispatch.",
  },
  {
    coordinate: "A03",
    icon: IconShipping,
    name: "Hub Shipping",
    description: "Domestic & international shipping.",
  },
  {
    coordinate: "B01",
    icon: IconReturns,
    name: "Hub Returns",
    description: "Returns management.",
  },
  {
    coordinate: "B02",
    icon: IconConnect,
    name: "Hub Connect",
    description: "Ecommerce & platform integrations.",
  },
]

const anchorHub = {
  coordinate: "B03",
  icon: IconNetwork,
  name: "Hub Network",
  description: "A growing network of fulfilment centres.",
}

const networkSteps = ["", "", "", "+ More"]

const pillars = [
  {
    name: "Reliability",
    description: "Every order leaves correctly, and on time.",
  },
  {
    name: "Visibility",
    description: "You know what's in stock, what's shipped, and what's next.",
  },
  {
    name: "Speed",
    description: "Operations built to shorten order-to-dispatch time.",
  },
  {
    name: "Scalability",
    description: "Infrastructure that holds up at 100 orders or 10,000.",
  },
]

export function Services() {
  return (
    <section id="system" className="bg-navy py-24 text-white">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel tone="secondary">The hub system</SectionLabel>
            <h2 className="text-display-lg mt-3">
              A hub for every part of fulfilment.
            </h2>
            <p className="mt-4 text-white/70">
              Six connected services. One system that scales with your order
              volume.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="relative h-full overflow-hidden rounded-2xl bg-hub-blue/[0.08] shadow-[0_0_60px_-20px_rgba(20,110,245,0.35)]">
              <GlowOrb tone="blue" className="-right-16 -bottom-16 size-72" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-10 p-7 sm:p-8 lg:p-10">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <anchorHub.icon className="size-8 text-hub-blue" />
                    <GridCoordinate
                      value={anchorHub.coordinate}
                      className="shrink-0 text-white"
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
                    {anchorHub.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-base text-white/70">
                    {anchorHub.description}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium tracking-wide text-white/40 uppercase">
                    Built to expand
                  </p>
                  <div className="mt-5">
                    <NodeFlow steps={networkSteps} hubIndex={3} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {hubs.map(({ coordinate, icon: Icon, name, description }, index) => (
            <Reveal key={name} delay={index * 60}>
              <div className="h-full rounded-2xl bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:shadow-[0_0_24px_-8px_rgba(20,110,245,0.4)]">
                <div className="flex items-center justify-between">
                  <Icon className="size-6 text-hub-blue" />
                  <GridCoordinate value={coordinate} className="text-white" />
                </div>
                <h3 className="mt-5 font-semibold">{name}</h3>
                <p className="mt-1.5 text-sm text-white/60">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 border-t border-white/10 pt-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-0 sm:divide-x sm:divide-white/10">
              {pillars.map((pillar) => (
                <div
                  key={pillar.name}
                  className="min-w-0 flex-1 sm:px-8 sm:first:pl-0 sm:last:pr-0"
                >
                  <h4 className="text-xs font-semibold tracking-[0.15em] text-hub-blue uppercase">
                    {pillar.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
