import * as React from "react";
import { cn } from "@/lib/utils";

const Tabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    onValueChange?: (value: string) => void;
  }
>(({ className, value, onValueChange, children, ...props }, ref) => {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
});
Tabs.displayName = "Tabs";

const TabsContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
}>({});

const useTabsContext = () => React.useContext(TabsContext);

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-wrap gap-3", className)}
    role="tablist"
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  const ctx = useTabsContext();
  const isActive = ctx.value === value;

  return (
    <button
      ref={ref}
      role="tab"
      aria-selected={isActive}
      aria-pressed={isActive}
      onClick={() => ctx.onValueChange?.(value)}
      className={cn(
        "inline-flex items-center gap-2 rounded-[3px] border px-[1.4rem] py-[0.7rem]",
        "font-cinzel text-[0.85rem] font-semibold uppercase tracking-[0.06em]",
        "cursor-pointer transition-all duration-250 ease-in-out",
        "border-border-ornate bg-transparent text-text-secondary",
        "hover:bg-[rgba(242,162,65,0.06)] hover:border-accent-gold-dim hover:text-text-primary",
        isActive && [
          "bg-linear-to-b from-accent-gold to-[#d4973a]",
          "border-accent-gold text-bg-deep shadow-gold font-bold",
          "[&_svg]:text-bg-deep",
        ],
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

export { Tabs, TabsList, TabsTrigger };
