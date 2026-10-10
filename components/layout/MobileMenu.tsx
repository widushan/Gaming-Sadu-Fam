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
                "absolute top-[70px] left-0 w-full md:hidden z-40 transition-opacity duration-300",
                "bg-[linear-gradient(to_right,#4338ca,#8b5cf6)] max-h-[calc(100dvh-70px)] overflow-y-auto",
                open ? "opacity-100 visible" : "opacity-0 invisible"
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