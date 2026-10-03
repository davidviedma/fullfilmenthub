import { cn } from "@/lib/utils"

const toneClass = {
  blue: "bg-hub-blue/25",
  cyan: "bg-cyan/20",
} as const

/**
 * Soft blurred ambient glow blob — decorative atmosphere for dark
 * sections. Position and size via className; the parent needs `relative
 * overflow-hidden` so the blur doesn't bleed into neighbouring sections.
 */
export function GlowOrb({
  tone = "blue",
  className,
}: {
  tone?: keyof typeof toneClass
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-aurora pointer-events-none absolute rounded-full blur-3xl",
        toneClass[tone],
        className
      )}
    />
  )
}
