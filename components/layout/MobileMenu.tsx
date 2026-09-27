// components/layout/MobileMenu.tsx
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type Link = { href: string; label: string };

export default function MobileMenu({
    open,
    links,
    onClose,
}: {
    open: boolean;
    links: Link[];
    onClose: () => void;
}) {
    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div
            className={cn(
                "absolute top-[70px] left-0 w-full md:hidden",
                "bg-gradient-to-r from-indigo-700 to-violet-500",
                "origin-top transition-all duration-300",
                open
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-3 pointer-events-none"
            )}
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
                        className="inline-flex h-11 items-center justify-center w-44 rounded-full bg-white text-[--color-primary] font-medium text-sm active:scale-95 transition"
                    >
                        Join the Fam
                    </Link>
                </li>
            </ul>
        </div>
    );
}