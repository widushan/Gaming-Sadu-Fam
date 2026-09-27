// components/ui/Badge.tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "purple" | "cyan" | "neutral";

const variants: Record<Variant, string> = {
    purple: "bg-[--color-primary-soft] text-[--color-primary]",
    cyan: "bg-[--color-secondary-soft] text-cyan-700",
    neutral: "bg-slate-100 text-slate-700",
};

export default function Badge({
    children,
    variant = "purple",
    className,
}: {
    children: ReactNode;
    variant?: Variant;
    className?: string;
}) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}