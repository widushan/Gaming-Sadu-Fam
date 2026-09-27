// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-services", label: "Our Services" },
    { href: "/ff-gaming", label: "FF Gaming" },
    { href: "/our-vlogs", label: "Our Vlogs" },
    { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => setOpen(false), [pathname]);

    return (
        <header className="sticky top-0 z-50">
            <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-gradient-to-r from-indigo-700 to-violet-500">
                <Logo />

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-10">
                    {links.map((l) => {
                        const active =
                            l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                        return (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className={cn(
                                        "text-sm font-medium text-white/85 hover:text-white transition relative",
                                        active && "text-white"
                                    )}
                                >
                                    {l.label}
                                    {active && (
                                        <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-white/90" />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile menu button */}
                <button
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-white active:scale-90 transition"
                >
                    <svg width="26" height="26" viewBox="0 0 30 30" fill="currentColor" aria-hidden>
                        {open ? (
                            <path d="M8 8l14 14M22 8L8 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                        ) : (
                            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
                        )}
                    </svg>
                </button>
            </nav>

            <MobileMenu open={open} links={links} onClose={() => setOpen(false)} />
        </header>
    );
}