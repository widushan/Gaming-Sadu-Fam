import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import { cn } from "@/lib/utils";

const channels = [
    {
        title: "Gaming Sadu",
        description: "Main gameplay channel — Daily streams, ranked pushes, and squad matches straight from the grind.",
        href: "https://youtube.com/@GamingSadu",
        linkText: "Visit Channel \u2192",
        color: "purple",
    },
    {
        title: "MR SADU FF",
        description: "gameplay channel — Daily streams, ranked pushes, and squad matches straight from the grind.",
        href: "https://youtube.com/@MrsaduFF",
        linkText: "Visit Channel \u2192",
        color: "purple",
    },
    {
        title: "Sandu & Tharu Vlogs",
        description: "Vlog channel - Behind the scenes life, challenges, and everyday moments with Sandu & Tharu.",
        href: "https://youtube.com/@SanduTharu",
        linkText: "Visit Channel \u2192",
        color: "purple",
    },
    {
        title: "Tharu Diamond Store",
        description: "Go to Free Fire top-up center — fast, safe diamond recharges at competitive rates.",
        href: "https://tharustore.com",
        linkText: "Visit Store \u2192",
        color: "cyan",
    },
    {
        title: "Duggy Store",
        description: "Free Fire account buy & sell platform — awesome accounts with negotiable prices.",
        href: "https://duggyffstore.com",
        linkText: "Visit Store \u2192",
        color: "cyan",
    },
];

export default function ChannelsSection() {
    return (
        <section className="bg-[var(--color-bg-section)] py-24">
            <Container className="flex flex-col gap-16">
                <SectionTitle
                    eyebrow="Our Network"
                    title="Explore Our Channels & Stores"
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {channels.map((item, i) => (
                        <div
                            key={i}
                            className="relative bg-white border border-[var(--color-border)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden flex flex-col"
                        >
                            {/* Left accent bar */}
                            <div
                                className={cn(
                                    "absolute left-0 top-0 bottom-0 w-1",
                                    item.color === "purple" ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)]"
                                )}
                            />

                            <h4 className="mb-2 pl-2">{item.title}</h4>
                            <p className="text-body-sm text-[var(--color-body)] mb-6 pl-2 flex-1">
                                {item.description}
                            </p>
                            <Link
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "font-medium text-sm pl-2 mt-auto",
                                    item.color === "purple" ? "text-[var(--color-primary)]" : "text-cyan-700"
                                )}
                            >
                                {item.linkText}
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
