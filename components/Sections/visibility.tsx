import { cn } from "@/lib/utils"

const metrics = [
  { label: "Orders today", value: "1,248" },
  { label: "Dispatched", value: "1,196" },
  { label: "Pending", value: "52" },
  { label: "Low stock SKUs", value: "7" },
]

const sidebarItems = [
  "Orders",
  "Inventory",
  "Shipments",
  "Returns",
  "Analytics",
  "Integrations",
]

export function Visibility() {
  return (
    <section id="platform" className="bg-cloud py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-hub-blue uppercase">
            One system. Full visibility.
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Know what&apos;s happening, before you have to ask.
          </h2>
          <p className="mt-4 text-steel">
            Real-time inventory, order status and shipment tracking in a
            single dashboard — not a weekly spreadsheet.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-xl shadow-navy/5">
          <p className="border-b border-navy/10 bg-white px-6 py-3 text-xs font-medium tracking-wide text-steel uppercase">
            Dashboard preview
          </p>
          <div className="flex">
            <div className="hidden w-48 flex-col gap-1 bg-navy p-4 sm:flex">
              {sidebarItems.map((item, i) => (
                <div
                  key={item}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm",
                    i === 0 ? "bg-white/10 text-white" : "text-white/50"
                  )}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex-1 p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-navy/10 p-4"
                  >
                    <p className="text-xs text-steel">{metric.label}</p>
                    <p className="mt-1 text-2xl font-bold text-navy">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-navy/10 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-navy">
                    Dispatch SLA
                  </p>
                  <span className="text-xs font-medium text-emerald-600">
                    On track
                  </span>
                </div>
                <svg viewBox="0 0 400 80" className="mt-4 w-full">
                  <polyline
                    points="0,60 40,55 80,58 120,40 160,45 200,28 240,34 280,20 320,24 360,12 400,16"
                    fill="none"
                    stroke="#146EF5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
