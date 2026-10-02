import Link from "next/link";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
};

export default function FeatureCard({ title, description, icon: Icon, href }: FeatureCardProps) {
    return (
        // Outer shell: 2px padding = border thickness, light grey track behind the moving light
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-[var(--color-border)] p-[2px] transition-shadow duration-300 hover:shadow-card">
            {/* Running purple light (stops while the card is hovered) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                    className="aspect-square w-[160%] shrink-0 animate-spin group-hover:[animation-play-state:paused] motion-reduce:animate-none"
                    style={{
                        animationDuration: "4s",
                        background:
                            "conic-gradient(from 0deg, transparent 0%, transparent 60%, var(--color-primary) 100%)",
                    }}
                />
            </div>

            {/* Card content sits on top, leaving only the 2px edge visible */}
            <div className="relative flex flex-1 flex-col items-start rounded-[14px] bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-soft)] flex items-center justify-center mb-6">
                    <Icon className="text-[var(--color-primary)]" size={24} />
                </div>
                <h4 className="mb-3">{title}</h4>
                <p className="text-body-sm text-[var(--color-body)] mb-6 flex-1">
                    {description}
                </p>
                <Link href={href} className="font-medium text-sm hover:text-[var(--color-primary)] mt-auto">
                    Learn more &rarr;
                </Link>
            </div>
        </div>
    );
}