import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[0.6rem] rounded-[4px] border cursor-pointer font-cinzel text-[0.85rem] font-semibold transition-all duration-250 ease-in-out",
  {
    variants: {
      variant: {
        default:
          "border-border-ornate bg-bg-surface text-text-secondary hover:bg-bg-panel-hover hover:border-accent-gold-dim hover:text-text-primary",
        sort: "border-border-ornate bg-bg-surface text-text-secondary hover:bg-bg-panel-hover hover:border-accent-gold-dim hover:text-text-primary min-w-[140px]",
        sortActive:
          "border-accent-gold bg-[rgba(242,162,65,0.08)] text-accent-gold shadow-[0_0_15px_rgba(242,162,65,0.1)] min-w-[140px]",
      },
      size: {
        default: "px-[1.2rem] py-[0.6rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
