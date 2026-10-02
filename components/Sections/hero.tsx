import { Button } from "@/components/ui/button"
import { NodeFlow } from "@/components/node-flow"
import { IconArrowRight } from "@/components/icons"

const pillars = ["Reliability", "Visibility", "Speed", "Scalability"]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="bg-node-grid absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/10 to-navy" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center lg:py-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white/70 uppercase">
            Ecommerce fulfilment infrastructure
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Fulfilment that keeps up with your growth.
          </h1>

          <p className="mt-6 text-lg text-white/70">
            Storage, pick &amp; pack, shipping and returns for ecommerce
            brands that need speed, visibility and reliability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#contact">
                Get a fulfilment quote
                <IconArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white">
              <a href="#platform">See how it works</a>
            </Button>
          </div>

          <p className="mt-10 text-xs font-medium tracking-wide text-white/40 uppercase">
            Built for growing ecommerce brands
          </p>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:ml-auto">
          <p className="text-xs font-medium tracking-wide text-white/40 uppercase">
            How an order moves through the hub
          </p>
          <div className="mt-8">
            <NodeFlow />
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm text-white/70">
            {pillars.map((pillar) => (
              <li key={pillar} className="flex items-center gap-2">
                <span className="size-1.5 shrink-0 rounded-full bg-hub-blue" />
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
