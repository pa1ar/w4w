import { cn } from "@/lib/utils";

interface SpacingProps {
  children: React.ReactNode;
  className?: string;
}

// Consistent spacing components using shadcn design tokens
export function Spacing({ children, className }: SpacingProps) {
  return <div className={cn("space-y-6", className)}>{children}</div>;
}

export function SpacingLarge({ children, className }: SpacingProps) {
  return <div className={cn("space-y-8", className)}>{children}</div>;
}

export function SpacingXL({ children, className }: SpacingProps) {
  return <div className={cn("space-y-12", className)}>{children}</div>;
}

// Section spacing variants
export function SectionSpacing({ children, className }: SpacingProps) {
  return <div className={cn("py-16", className)}>{children}</div>;
}

export function HeroSpacing({ children, className }: SpacingProps) {
  return <div className={cn("py-20", className)}>{children}</div>;
}

// Container spacing
export function ContainerSpacing({ children, className }: SpacingProps) {
  return <div className={cn("px-6", className)}>{children}</div>;
}
