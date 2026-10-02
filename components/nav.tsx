"use client"

import { useState } from "react"
import Link from "next/link"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#platform", label: "Platform" },
  { href: "#integrations", label: "Integrations" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cloud/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="FULLFILMENTHUB home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#contact">Get a fulfilment quote</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-navy md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-6">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-navy/10 bg-cloud transition-[max-height] duration-300 md:hidden",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-navy/80 hover:bg-navy/5"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2" size="sm">
            <a href="#contact" onClick={() => setOpen(false)}>
              Get a fulfilment quote
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
