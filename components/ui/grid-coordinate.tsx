import { cn } from "@/lib/utils"

/**
 * Small warehouse-location-style coordinate tag (e.g. "A01"), echoing the
 * brand's locations-grid motif. A decorative detail, not a data value —
 * use it sparingly (one per card, a corner of a section) the way a rack
 * aisle label reads: present, legible, never decorative noise.
 */
export function GridCoordinate({
  value,
  className,
}: {
  value: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] font-medium tracking-wider opacity-40",
        className
      )}
      aria-hidden="true"
    >
      {value}
    </span>
  )
}
