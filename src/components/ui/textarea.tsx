import { focusRingStyles } from "./control-styles";
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full resize-none rounded-md border border-border bg-surface px-3 py-2 text-sm shadow-sm placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        focusRingStyles,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
