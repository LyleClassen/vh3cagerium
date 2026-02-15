import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex flex-row overflow-hidden rounded-[4px] border border-border-ornate",
      "bg-bg-panel p-0 shadow-card transition-all duration-250 ease-in-out",
      "min-h-[140px] cursor-default",
      "hover:bg-bg-panel-hover hover:border-accent-gold hover:shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_30px_rgba(242,162,65,0.2)] hover:-translate-y-0.5",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
