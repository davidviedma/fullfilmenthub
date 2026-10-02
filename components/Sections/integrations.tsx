const platforms = [
  "Shopify",
  "WooCommerce",
  "Amazon",
  "TikTok Shop",
  "Etsy",
  "eBay",
]

export function Integrations() {
  return (
    <section id="integrations" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-hub-blue uppercase">
            Built for ecommerce
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Connects with the platforms you already sell on.
          </h2>
          <p className="mt-4 text-steel">
            Orders sync automatically, inventory stays accurate across every
            channel, and nothing needs re-entering by hand.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {platforms.map((platform) => (
            <div
              key={platform}
              className="flex h-20 items-center justify-center rounded-xl border border-navy/10 bg-cloud px-4 text-center text-sm font-semibold text-navy/70"
            >
              {platform}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
