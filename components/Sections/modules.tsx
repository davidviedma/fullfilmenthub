import {
  IconStorage,
  IconPickPack,
  IconShipping,
  IconReturns,
} from "@/components/icons"

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
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-hub-blue uppercase">
            Store. Pack. Ship. Scale.
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Four operations. One partner. Zero guesswork.
          </h2>
        </div>

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
      </div>
    </section>
  )
}
