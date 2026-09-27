// components/ui/SectionTitle.tsx
import { cn } from "@/lib/utils";

type Props = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
};

export default function SectionTitle({
    eyebrow,
    title,
    subtitle,
    align = "center",
    className,
}: Props) {
    return (
        <div
            className={cn(
                "flex flex-col gap-3",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            {eyebrow && (
                <span className="text-caption font-semibold uppercase tracking-[0.18em] text-[--color-primary]">
                    {eyebrow}
                </span>
            )}
            <h2 className="max-w-3xl">{title}</h2>
            {subtitle && (
                <p className="max-w-2xl text-body-lg text-[--color-body]">{subtitle}</p>
            )}
            <span
                aria-hidden
                className="mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-[--color-primary] to-[--color-secondary]"
            />
        </div>
    );
}