import { Manrope, Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const siteUrl = "https://fullfilmenthub.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FULLFILMENTHUB — Logistics infrastructure built for ecommerce growth",
  description:
    "FULLFILMENTHUB is a modern 3PL built for growing ecommerce brands. We handle storage, inventory, pick & pack, shipping and returns so brands can scale without logistics becoming the bottleneck.",
  keywords: [
    "ecommerce fulfilment",
    "3PL",
    "order fulfilment",
    "warehousing",
    "pick and pack",
    "ecommerce logistics",
    "returns management",
    "Shopify fulfilment",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "FULLFILMENTHUB — Built to ship. Ready to scale.",
    description:
      "Storage, pick & pack, shipping and returns for ecommerce brands that need speed, visibility and reliability.",
    url: siteUrl,
    siteName: "FULLFILMENTHUB",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FULLFILMENTHUB — Built to ship. Ready to scale.",
    description:
      "Storage, pick & pack, shipping and returns for ecommerce brands that need speed, visibility and reliability.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        manrope.variable,
        inter.variable,
        "font-sans"
      )}
    >
      <body>{children}</body>
    </html>
  )
}
