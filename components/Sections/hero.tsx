"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { NodeFlow } from "@/components/node-flow"
import { IconArrowRight } from "@/components/icons"
import { Reveal } from "@/components/ui/reveal"
import { GridCoordinate } from "@/components/ui/grid-coordinate"
import { GlowOrb } from "@/components/ui/glow-orb"

const pillars = ["Reliability", "Visibility", "Speed", "Scalability"]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const node = sectionRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const mx = ((event.clientX - rect.left) / rect.width) * 100
    const my = ((event.clientY - rect.top) / rect.height) * 100
    node.style.setProperty("--mx", `${mx}%`)
    node.style.setProperty("--my", `${my}%`)
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative overflow-hidden bg-navy"
    >
      <div className="bg-node-grid absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/10 to-navy" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(20,110,245,0.18), transparent 60%)",
        }}
      />

      <GlowOrb tone="blue" className="-top-32 -right-24 size-96" />
      <GlowOrb tone="cyan" className="bottom-0 left-0 size-72" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-start lg:gap-24 lg:py-32">
        <div className="max-w-2xl lg:flex-1">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white/70 uppercase">
              Ecommerce fulfilment infrastructure
            </span>

            <h1 className="text-display-xl mt-6 font-bold text-white">
              Fulfilment that keeps up with your{" "}
              <span className="text-gradient-hub">growth</span>.
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Storage, pick &amp; pack, shipping and returns for ecommerce
              brands that need speed, visibility and reliability.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a href="#contact">
                  Get a fulfilment quote
                  <IconArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white"
              >
                <a href="#platform">See how it works</a>
              </Button>
            </div>

            <p className="mt-10 text-xs font-medium tracking-wide text-white/40 uppercase">
              Built for growing ecommerce brands
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={200}
          className="w-full max-w-sm lg:max-w-[300px] lg:shrink-0"
        >
          <div className="relative rounded-2xl border border-hub-blue/20 bg-white/[0.04] p-5 shadow-[0_0_50px_-12px_rgba(20,110,245,0.45)]">
            <div className="flex min-w-0 items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-hub-blue motion-safe:animate-ping motion-reduce:hidden" />
                  <span className="relative size-2 rounded-full bg-hub-blue" />
                </span>
                <span className="truncate text-xs font-medium tracking-wide text-white/70 uppercase">
                  Live tracking
                </span>
              </div>
              <GridCoordinate value="A01" className="shrink-0 text-white" />
            </div>

            <p className="mt-5 text-xs font-medium tracking-wide text-white/40 uppercase">
              How an order moves through the hub
            </p>

            <div className="mt-7">
              <NodeFlow />
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-sm text-white/70">
              {pillars.map((pillar) => (
                <li key={pillar} className="flex min-w-0 items-center gap-2">
                  <span className="size-1.5 shrink-0 rounded-full bg-hub-blue" />
                  <span className="truncate">{pillar}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
