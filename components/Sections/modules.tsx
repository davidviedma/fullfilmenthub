import {
  IconStorage,
  IconPickPack,
  IconShipping,
  IconReturns,
} from "@/components/icons"
import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { Reveal } from "@/components/ui/reveal"
import { NodeFlow } from "@/components/node-flow"
import { GridCoordinate } from "@/components/ui/grid-coordinate"
import { GlowOrb } from "@/components/ui/glow-orb"

const modules = [
  {
    icon: IconStorage,
    title: "Warehousing",
    description:
      "Inventory stored, organised and ready to move the moment an order comes in.",
  },
  {
    icon: IconPickPack,
    title: "Pick & Pack",
    description:
      "Every order picked, packed and checked before it leaves the hub.",
  },
  {
    icon: IconShipping,
    title: "Shipping",
    description:
      "Domestic and international dispatch, tracked from the first scan.",
  },
  {
    icon: IconReturns,
    title: "Returns",
    description:
      "Returns received, inspected and restocked without the back-and-forth.",
  },
]

export function Modules() {
  return (
    <section id="solutions" className="bg-cloud py-24">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Store. Pack. Ship. Scale.</SectionLabel>
            <h2 className="text-display-lg mt-3 text-navy">
              Four operations. One partner. Zero guesswork.
            </h2>
          </div>
        </Reveal>

        {/* One connected route: the same four stops as a line, then as
            detail cards beneath it — so the grid below reads as a
            sequence, not four unrelated features. */}
        <Reveal delay={100}>
          <div className="relative mt-14 overflow-hidden rounded-2xl bg-navy">
            <GlowOrb tone="blue" className="-top-20 -left-24 size-96" />
            <div className="relative z-10">
              <div className="border-b border-white/10 px-6 py-7 sm:px-10 sm:py-8">
                <p className="text-xs font-medium tracking-wide text-white/40 uppercase">
                  One route, four stops
                </p>
                {/* Contained horizontal scroll on narrow screens: the route
                    keeps its label text intact rather than clipping or
                    silently overflowing the page. */}
                <div className="mt-6 overflow-x-auto">
                  <div className="max-w-3xl min-w-[440px]">
                    <NodeFlow steps={modules.map((module) => module.title)} />
                  </div>
                </div>
              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {modules.map(({ icon: Icon, title, description }, index) => (
                  <div
                    key={title}
                    className="group flex flex-col gap-4 bg-navy p-7 transition-colors duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-hub-blue transition-shadow duration-300 group-hover:shadow-[0_0_20px_-2px_rgba(20,110,245,0.6)]">
                        <Icon className="size-5" />
                      </div>
                      <GridCoordinate
                        value={`A0${index + 1}`}
                        className="text-white"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/60">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
