import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { Reveal } from "@/components/ui/reveal"

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
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Built for ecommerce</SectionLabel>
            <h2 className="mt-3 text-display-lg text-navy">
              Connects with the platforms you already sell on.
            </h2>
            <p className="mt-4 text-steel">
              Orders sync automatically, inventory stays accurate across every
              channel, and nothing needs re-entering by hand.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {platforms.map((platform, index) => (
            <Reveal key={platform} delay={(index % 3) * 60}>
              <div className="flex h-20 items-center justify-center rounded-xl border border-navy/10 bg-cloud px-4 text-center text-sm font-semibold text-navy/70 transition-colors duration-200 hover:border-hub-blue/30 hover:bg-hub-blue/5 hover:text-navy">
                {platform}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
