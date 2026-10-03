"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Counts up from 0 to the numeric value once it scrolls into view, easing
 * out like a live dashboard metric settling. Non-digit characters (commas)
 * are stripped to parse the target and reapplied via toLocaleString.
 * Skips the animation under prefers-reduced-motion, rendering the final
 * value immediately. Falls back to the raw string for non-numeric values.
 */
export function AnimatedCounter({ value }: { value: string }) {
  const target = Number(value.replace(/[^0-9.-]/g, ""))
  const isNumeric = Number.isFinite(target)
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(isNumeric ? 0 : target)

  useEffect(() => {
    if (!isNumeric) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      queueMicrotask(() => setDisplay(target))
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const duration = 900
        const start = performance.now()

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(target * eased))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [isNumeric, target])

  return <span ref={ref}>{isNumeric ? display.toLocaleString() : value}</span>
}
