import { cn } from "@/lib/utils"

/**
 * FH isotype: F and H share a left spine and a crossbar; the detached
 * Hub Blue square is the "node" — the only non-navy element in the mark.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      fill="none"
      aria-hidden="true"
    >
      <rect x="9" y="8" width="4" height="16" className="fill-current" />
      <rect x="9" y="8" width="12" height="4" className="fill-current" />
      <rect x="9" y="15" width="9" height="4" className="fill-current" />
      <rect x="19" y="15" width="4" height="9" className="fill-current" />
      <rect x="23" y="8" width="5" height="5" fill="#146EF5" />
    </svg>
  )
}

export function Wordmark({
  tone = "navy",
  className,
}: {
  tone?: "navy" | "white"
  className?: string
}) {
  return (
    <span
      className={cn(
        "font-heading text-xl font-bold lowercase tracking-tight",
        tone === "white" ? "text-white" : "text-navy",
        className
      )}
    >
      fullfilment<span className="text-hub-blue">hub</span>
    </span>
  )
}

export function Logo({
  tone = "navy",
  className,
}: {
  tone?: "navy" | "white"
  className?: string
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Mark className={tone === "white" ? "text-white" : "text-navy"} />
      <Wordmark tone={tone} />
    </span>
  )
}
