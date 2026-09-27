// components/ui/Button.tsx
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
    primary:
        "bg-[--color-primary] text-white hover:bg-[--color-primary-hover] shadow-sm hover:shadow-md",
    secondary:
        "bg-white text-[--color-primary] border border-[--color-primary] hover:bg-[--color-primary-soft]",
    ghost:
        "bg-transparent text-[--color-heading] hover:bg-[--color-bg-section]",
    link:
        "bg-transparent text-[--color-primary] hover:underline px-0",
};

const sizes: Record<Size, string> = {
    sm: "h-9  px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-13 px-8 text-base",
};

type ButtonProps = {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    className?: string;
    href?: string;
    external?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    href,
    external,
    ...rest
}: ButtonProps) {
    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
        return external ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                {children}
            </a>
        ) : (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}