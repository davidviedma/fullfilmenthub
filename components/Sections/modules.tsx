import {
  IconStorage,
  IconPickPack,
  IconShipping,
  IconReturns,
} from "@/components/icons"
import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { Reveal } from "@/components/ui/reveal"

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
            <h2 className="mt-3 text-display-lg text-navy">
              Four operations. One partner. Zero guesswork.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-4 bg-white p-7">
                <div className="flex size-11 items-center justify-center rounded-lg bg-navy text-white">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-steel">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
