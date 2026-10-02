"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type RevealImageProps = {
    src: string;
    alt: string;
    /** Sizing classes for the frame, e.g. "h-[500px]" */
    className?: string;
};

export default function RevealImage({ src, alt, className = "" }: RevealImageProps) {
    const frameRef = useRef<HTMLDivElement>(null);
    const layerRef = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const frame = frameRef.current;
        if (!frame) return;

        // Reduced motion: show the image straight away, no reveal or parallax
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setShown(true);
            return;
        }

        // 1) Reveal once, when the image scrolls into view
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        io.observe(frame);

        // 2) Parallax: the photo drifts slower than its frame while scrolling
        let raf = 0;
        const update = () => {
            raf = 0;
            const layer = layerRef.current;
            if (!layer) return;
            const r = frame.getBoundingClientRect();
            const vh = window.innerHeight;
            const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // +1 → -1
            const clamped = Math.max(-1, Math.min(1, p));
            layer.style.transform = `translate3d(0, ${-clamped * 8}%, 0)`;
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            io.disconnect();
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div ref={frameRef} className={`relative w-full ${className}`}>
            {/* Offset outline that slides out from behind the photo */}
            <div
                aria-hidden
                className="absolute inset-0 rounded-2xl border-2 border-[var(--color-primary)] transition-all duration-1000 ease-out"
                style={{
                    opacity: shown ? 0.4 : 0,
                    transform: shown ? "translate(14px, 14px)" : "translate(0, 0)",
                    transitionDelay: shown ? "500ms" : "0ms",
                }}
            />

            {/* Shadow (kept separate so the reveal mask doesn't clip it) */}
            <div
                aria-hidden
                className="absolute inset-0 rounded-2xl shadow-card transition-opacity duration-700"
                style={{ opacity: shown ? 1 : 0, transitionDelay: shown ? "600ms" : "0ms" }}
            />

            {/* Photo: wipes in from the bottom, then parallaxes on scroll */}
            <div
                className="absolute inset-0 overflow-hidden rounded-2xl"
                style={{
                    clipPath: shown
                        ? "inset(0% 0% 0% 0% round 1rem)"
                        : "inset(100% 0% 0% 0% round 1rem)",
                    transition: "clip-path 1200ms cubic-bezier(0.77, 0, 0.18, 1)",
                }}
            >
                {/* Taller than the frame so there's room to drift */}
                <div ref={layerRef} className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}