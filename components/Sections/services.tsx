import {
  IconStorage,
  IconPickPack,
  IconShipping,
  IconReturns,
  IconConnect,
  IconNetwork,
} from "@/components/icons"

const hubs = [
  {
    code: "01",
    icon: IconStorage,
    name: "Hub Storage",
    description: "Warehousing & inventory management.",
  },
  {
    code: "02",
    icon: IconPickPack,
    name: "Hub Fulfilment",
    description: "Pick, pack & dispatch.",
  },
  {
    code: "03",
    icon: IconShipping,
    name: "Hub Shipping",
    description: "Domestic & international shipping.",
  },
  {
    code: "04",
    icon: IconReturns,
    name: "Hub Returns",
    description: "Returns management.",
  },
  {
    code: "05",
    icon: IconConnect,
    name: "Hub Connect",
    description: "Ecommerce & platform integrations.",
  },
  {
    code: "06",
    icon: IconNetwork,
    name: "Hub Network",
    description: "A growing network of fulfilment centres.",
  },
]

const pillars = [
  {
    name: "Reliability",
    description: "Every order leaves correctly, and on time.",
  },
  {
    name: "Visibility",
    description:
      "You know what's in stock, what's shipped, and what's next.",
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
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-cyan uppercase">
            The hub system
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A hub for every part of fulfilment.
          </h2>
          <p className="mt-4 text-white/70">
            Six connected services. One system that scales with your order
            volume.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hubs.map(({ code, icon: Icon, name, description }) => (
            <div
              key={code}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center justify-between">
                <Icon className="size-6 text-hub-blue" />
                <span className="font-mono text-xs text-white/30">
                  {code}
                </span>
              </div>
              <h3 className="mt-5 font-semibold">{name}</h3>
              <p className="mt-1.5 text-sm text-white/60">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 border-t border-white/10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.name}>
              <h4 className="text-sm font-semibold text-hub-blue">
                {pillar.name}
              </h4>
              <p className="mt-2 text-sm text-white/60">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
