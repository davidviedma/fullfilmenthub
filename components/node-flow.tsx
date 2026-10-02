import { cn } from "@/lib/utils"

const nodes = ["Warehouse", "Fulfilment", "Carrier", "Customer"]

export function NodeFlow({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <svg viewBox="0 0 400 24" className="w-full" aria-hidden="true">
        <line
          x1="20"
          y1="12"
          x2="380"
          y2="12"
          stroke="#146EF5"
          strokeWidth="1.5"
          strokeDasharray="2 6"
        />
        {nodes.map((node, i) => {
          const x = 20 + i * (360 / (nodes.length - 1))
          const isHub = i === 1
          return (
            <circle
              key={node}
              cx={x}
              cy="12"
              r={isHub ? 7 : 5}
              fill={isHub ? "#146EF5" : "#071C33"}
              stroke="#146EF5"
              strokeWidth="1.5"
            />
          )
        })}
      </svg>
      <div className="mt-3 flex justify-between text-xs text-white/50">
        {nodes.map((node) => (
          <span key={node}>{node}</span>
        ))}
      </div>
    </div>
  )
}
