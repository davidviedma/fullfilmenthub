import { cn } from "@/lib/utils"

export function Metric({
  value,
  label,
  tone = "light",
  className,
}: {
  value: string
  label: string
  tone?: "light" | "dark"
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span
        className={cn(
          "font-mono text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl",
          tone === "light" ? "text-white" : "text-navy"
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "text-sm leading-snug",
          tone === "light" ? "text-white/60" : "text-steel"
        )}
      >
        {label}
      </span>
    </div>
  )
}
