import { Logo } from "@/components/logo"

const serviceLinks = [
  "Hub Storage",
  "Hub Fulfilment",
  "Hub Shipping",
  "Hub Returns",
  "Hub Connect",
]

const companyLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Platform", href: "#platform" },
  { label: "Integrations", href: "#integrations" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Logo tone="white" />
            <p className="mt-4 text-sm text-white/60">
              Built to ship. Ready to scale.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-sm font-semibold text-white/40 uppercase">
                Services
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                {serviceLinks.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/40 uppercase">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} FULLFILMENTHUB. All rights reserved.
          </p>
          <a
            href="mailto:hello@fullfilmenthub.com"
            className="hover:text-white"
          >
            hello@fullfilmenthub.com
          </a>
        </div>
      </div>
    </footer>
  )
}
