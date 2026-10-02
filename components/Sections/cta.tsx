import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-24 text-white"
    >
      <div className="bg-node-grid absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold tracking-wide text-cyan uppercase">
          Ready to scale your fulfilment?
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Your logistics shouldn&apos;t limit your growth.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/70">
          Tell us about your order volume and current setup. We&apos;ll show
          you exactly how FULLFILMENTHUB would run your fulfilment.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="mailto:hello@fullfilmenthub.com">Talk to our team</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white"
          >
            <a href="mailto:hello@fullfilmenthub.com">
              Get a fulfilment quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
