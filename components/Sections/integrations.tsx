import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { Reveal } from "@/components/ui/reveal"
import { GridCoordinate } from "@/components/ui/grid-coordinate"
import { IconConnect } from "@/components/icons"

const platforms = [
  "Shopify",
  "WooCommerce",
  "Amazon",
  "TikTok Shop",
  "Etsy",
  "eBay",
]

// Even horizontal spacing, zigzagging top/bottom, all converging toward a
// single point at the right edge of the viewBox — the fan the six channels
// make on their way into the hub.
const nodes = platforms.map((platform, index) => ({
  platform,
  x: 30 + index * (500 / (platforms.length - 1)),
  y: index % 2 === 0 ? 25 : 85,
}))
const convergeX = 600
const convergeY = 55

export function Integrations() {
  return (
    <section id="integrations" className="bg-white py-24">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Built for ecommerce</SectionLabel>
            <h2 className="text-display-lg mt-3 text-navy">
              Connects with the platforms you already sell on.
            </h2>
            <p className="mt-4 text-steel">
              Orders sync automatically, inventory stays accurate across every
              channel, and nothing needs re-entering by hand.
            </p>
          </div>
        </Reveal>

        {/* Six channels, one hub: the platforms fan in from the left along
            dashed routes and land on the hub panel — composing the idea
            instead of six identical boxes. */}
        <Reveal delay={100}>
          <div className="mt-14 flex flex-col overflow-hidden rounded-2xl bg-navy lg:flex-row">
            <div className="min-w-0 flex-1 p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-medium tracking-wide text-white/40 uppercase">
                Your sales channels
              </p>

              {/* Contained horizontal scroll on narrow screens: the fan
                  keeps every label intact rather than clipping or silently
                  overflowing the page. */}
              <div className="mt-6 overflow-x-auto">
                <div className="min-w-[540px]">
                  <svg
                    viewBox="0 0 600 110"
                    className="w-full"
                    aria-hidden="true"
                  >
                    {nodes.map((node) => (
                      <line
                        key={`line-${node.platform}`}
                        x1={node.x}
                        y1={node.y}
                        x2={convergeX}
                        y2={convergeY}
                        stroke="#146EF5"
                        strokeWidth="1.25"
                        strokeDasharray="2 6"
                        strokeLinecap="round"
                        opacity="0.7"
                      />
                    ))}
                    <line
                      x1={convergeX - 22}
                      y1={convergeY}
                      x2={convergeX}
                      y2={convergeY}
                      stroke="#146EF5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {nodes.map((node) => (
                      <circle
                        key={`node-${node.platform}`}
                        cx={node.x}
                        cy={node.y}
                        r="6"
                        fill="#071C33"
                        stroke="#146EF5"
                        strokeWidth="1.5"
                      />
                    ))}
                  </svg>

                  <div className="mt-4 flex justify-between gap-3">
                    {platforms.map((platform, index) => (
                      <div
                        key={platform}
                        className="flex flex-col items-center gap-1.5 text-center"
                      >
                        <span className="text-xs font-medium text-white/75 transition-colors duration-200 hover:text-white sm:text-sm">
                          {platform}
                        </span>
                        <GridCoordinate
                          value={`${index < 3 ? "A" : "B"}0${(index % 3) + 1}`}
                          className="text-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t border-white/10 bg-hub-blue/[0.08] p-6 sm:p-8 lg:w-64 lg:flex-col lg:justify-center lg:border-t-0 lg:border-l lg:p-10 lg:text-center">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-hub-blue/[0.15] text-hub-blue">
                <IconConnect className="size-6" />
              </div>
              <div className="min-w-0">
                <SectionLabel className="block">FULLFILMENTHUB</SectionLabel>
                <p className="mt-1 text-sm text-white/55">
                  All channels, one hub.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
