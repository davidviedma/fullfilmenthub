import { cn } from "@/lib/utils"

type IconProps = { className?: string }

const base = "size-6"

export function IconStorage({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(base, className)}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function IconPickPack({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(base, className)}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="7"
        width="18"
        height="14"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 7L12 3l9 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 13.5l2.5 2.5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconShipping({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(base, className)}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="12"
        height="14"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15 10h4l2 3v4a1 1 0 0 1-1 1h-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="19.5" r="1.5" fill="currentColor" />
      <circle cx="17" cy="19.5" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function IconReturns({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(base, className)}
      aria-hidden="true"
    >
      <rect
        x="4"
        y="9"
        width="16"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 4l-3 3 3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 7h7a5 5 0 0 1 5 5v1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconConnect({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(base, className)}
      aria-hidden="true"
    >
      <circle cx="5" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="19"
        cy="5"
        r="2.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="19"
        r="2.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.9 6.3L10.3 17.3M17.1 6.3L13.7 17.3M7.2 5h9.6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function IconNetwork({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(base, className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.8 10.2L5.5 6.3M14.2 10.2L18.5 6.3M9.8 13.8L5.5 17.7M14.2 13.8L18.5 17.7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(base, className)}
      aria-hidden="true"
    >
      <path
        d="M4 12h16M14 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
