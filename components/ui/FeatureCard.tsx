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
        <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 flex flex-col items-start hover:shadow-card transition-shadow duration-300">
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
    );
}
