import { cn } from "@/lib/utils"

const defaultNodes = ["Warehouse", "Fulfilment", "Carrier", "Customer"]

export function NodeFlow({
  className,
  steps = defaultNodes,
  hubIndex = 1,
}: {
  className?: string
  /** Custom step labels — reuse this component's visual language anywhere
   * a connected-node/route motif fits (hero, a process band, etc). */
  steps?: string[]
  /** Which node renders as the larger "hub" node. */
  hubIndex?: number
}) {
  const nodes = steps
  return (
    <div className={cn("w-full", className)}>
      <svg
        viewBox="0 0 400 24"
        className="w-full overflow-visible"
        aria-hidden="true"
      >
        <line
          x1="20"
          y1="12"
          x2="380"
          y2="12"
          stroke="#146EF5"
          strokeWidth="1.5"
          className="route-flow"
        />
        {nodes.map((node, i) => {
          const x = 20 + i * (360 / (nodes.length - 1))
          const isHub = i === hubIndex
          return (
            <g key={i}>
              {isHub && (
                <circle
                  cx={x}
                  cy="12"
                  r="7"
                  fill="#146EF5"
                  opacity="0.35"
                  className="motion-safe:animate-ping motion-reduce:hidden"
                />
              )}
              <circle
                cx={x}
                cy="12"
                r={isHub ? 7 : 5}
                fill={isHub ? "#146EF5" : "#071C33"}
                stroke="#146EF5"
                strokeWidth="1.5"
              />
            </g>
          )
        })}
      </svg>
      <div className="mt-3 flex justify-between text-xs text-white/50">
        {nodes.map((node, i) => (
          <span key={i}>{node}</span>
        ))}
      </div>
    </div>
  )
}
