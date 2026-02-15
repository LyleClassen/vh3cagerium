import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full rounded-[4px] border border-border-ornate bg-bg-deep",
        "px-5 py-[0.9rem] pl-11 font-inter text-[0.95rem] text-text-primary",
        "outline-none transition-[border-color,box-shadow] duration-250 ease-in-out",
        "placeholder:text-text-secondary placeholder:font-light",
        "focus:border-accent-gold focus:shadow-[0_0_12px_rgba(242,162,65,0.2),inset_0_0_4px_rgba(242,162,65,0.05)]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
