// components/layout/MobileMenu.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";

type NavLink = { href: string; label: string };

export default function MobileMenu({
    open,
    links,
    onClose,
}: {
    open: boolean;
    links: NavLink[];
    onClose: () => void;
}) {
    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="fixed left-0 right-0 top-[70px] z-[60] md:hidden overflow-y-auto"
            style={{
                background: "linear-gradient(to right, #4338ca, #8b5cf6)",
                maxHeight: "calc(100vh - 70px)",
            }}
        >
            <ul className="flex flex-col p-6 gap-1">
                {links.map((l) => (
                    <li key={l.href}>
                        <Link
                            href={l.href}
                            onClick={onClose}
                            className="block py-3 px-2 text-base text-white/90 hover:text-white border-b border-white/10"
                        >
                            {l.label}
                        </Link>
                    </li>
                ))}
                <li className="pt-4">
                    <Link
                        href="/contact-us"
                        onClick={onClose}
                        className="inline-flex h-11 items-center justify-center w-44 rounded-full bg-white text-[var(--color-primary)] font-medium text-sm active:scale-95 transition"
                    >
                        Join the Fam
                    </Link>
                </li>
            </ul>
        </div>
    );
}