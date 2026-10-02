import { cn } from "@/lib/utils"

const toneClass = {
  primary: "text-hub-blue",
  secondary: "text-cyan",
  muted: "text-steel",
  light: "text-white/70",
} as const

export function SectionLabel({
  children,
  className,
  tone = "primary",
}: {
  children: React.ReactNode
  className?: string
  tone?: keyof typeof toneClass
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs font-semibold tracking-[0.2em] uppercase",
        toneClass[tone],
        className
      )}
    >
      {children}
    </p>
  )
}
