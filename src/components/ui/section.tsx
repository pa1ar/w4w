import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "hero" | "map" | "highlights" | "cta";
}

export function Section({
  className,
  children,
  variant = "default",
  ...props
}: SectionProps) {
  const variants = {
    default: "py-16 bg-white",
    hero: "relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20",
    map: "py-16 bg-white",
    highlights: "py-16 bg-gray-50",
    cta: "py-16 bg-blue-600 text-white",
  };

  return (
    <section className={cn(variants[variant], className)} {...props}>
      {children}
    </section>
  );
}
