import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center font-inter text-[0.65rem] px-2 py-[2px] rounded-[2px] uppercase font-bold tracking-[0.05em]",
  {
    variants: {
      variant: {
        rare: "text-accent-red bg-[rgba(231,76,60,0.1)] border border-[rgba(231,76,60,0.2)]",
        common:
          "text-accent-green bg-[rgba(39,174,96,0.1)] border border-[rgba(39,174,96,0.2)]",
      },
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
