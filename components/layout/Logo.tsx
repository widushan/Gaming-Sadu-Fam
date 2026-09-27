// components/layout/Logo.tsx
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({
    variant = "light",
    className,
}: {
    variant?: "light" | "dark";
    className?: string;
}) {
    const textColor = variant === "light" ? "text-white" : "text-[--color-heading]";

    return (
        <Link href="/" className={cn("flex items-center gap-2.5 shrink-0", className)}>
            <div className="relative h-18 w-18">
                {/* Replace /images/logo.png with your actual logo file */}
                <Image
                    src="/images/Gaming_Sadu_Fam_logo.png"
                    alt="Gaming Sadu Fam"
                    fill
                    sizes="72px"
                    className="object-contain p-0.5"
                />
            </div>
            <span className={cn("text-sm font-bold tracking-wide uppercase", textColor)}>
                Gaming Sadu Fam
            </span>
        </Link>
    );
}