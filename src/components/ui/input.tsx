import { focusRingStyles } from "./control-styles";
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "form-control flex min-h-11 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium",
          focusRingStyles,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
