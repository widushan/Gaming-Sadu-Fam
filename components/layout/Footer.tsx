// components/layout/Footer.tsx
import Container from "@/components/ui/Container";
import Link from "next/link";

const columns = [
    {
        title: "Quick Links",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            { label: "Our Services", href: "/our-services" },
            { label: "FF Gaming", href: "/ff-gaming" },
            { label: "Our Vlogs", href: "/our-vlogs" },
            { label: "Contact Us", href: "/contact-us" },
        ],
    },
    {
        title: "Services",
        links: [
            { label: "Diamond Top-Up", href: "https://tharustore.com" },
            { label: "Account Marketplace", href: "https://duggyffstore.com" },
            { label: "Tournaments", href: "/ff-gaming" },
            { label: "Vlogs", href: "/our-vlogs" },
        ],
    },
    {
        title: "Follow Us",
        links: [
            { label: "Facebook", href: "https://facebook.com/FreeFireSadu" },
            { label: "Instagram", href: "https://instagram.com/gaming__sadu" },
            { label: "TikTok", href: "https://tiktok.com/@gaming_sadu_official" },
            { label: "WhatsApp", href: "https://whatsapp.com/FreeFireSadu" },
            { label: "YouTube", href: "https://youtube.com/@GamingSadu" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="mt-20 bg-[--color-bg-section] border-t border-[--color-border]">
            <Container>
                <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2.5">
                            <div className="h-9 w-9 rounded-lg bg-[--color-primary]" />
                            <span className="text-sm font-bold uppercase tracking-wide text-[--color-heading]">
                                Gaming Sadu Fam
                            </span>
                        </div>
                        <p className="mt-5 max-w-sm text-sm text-[--color-body]">
                            Sri Lanka&apos;s Free Fire community — live streams, trusted diamond
                            top-ups, verified account marketplace, and real-life vlogs.
                        </p>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="mb-4 text-sm font-semibold text-[--color-heading]">
                                {col.title}
                            </h4>
                            <ul className="space-y-2 text-sm">
                                {col.links.map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="text-[--color-body] hover:text-[--color-primary] transition-colors"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-[--color-border] py-6 text-center text-xs text-[--color-muted]">
                    © {new Date().getFullYear()} Gaming Sadu Fam. All rights reserved. <br />
                    Designed and Developed by PASiNDU K.W
                </div>
            </Container>
        </footer>
    );
}