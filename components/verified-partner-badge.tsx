import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface VerifiedPartnerBadgeProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function VerifiedPartnerBadge({ className, size = "md" }: VerifiedPartnerBadgeProps) {
  const sizeClasses = {
    sm: "text-xs py-0.5 px-1.5",
    md: "text-sm py-1 px-2",
    lg: "text-base py-1.5 px-3",
  }

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1 bg-green-50 text-green-700 rounded-full font-medium",
        sizeClasses[size],
        className,
      )}
    >
      <CheckCircle className={iconSizes[size]} />
      {size !== "sm" && <span>Verified Partner</span>}
    </div>
  )
}
