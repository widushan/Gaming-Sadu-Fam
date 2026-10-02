"use client";

import { useEffect, useRef, type ReactNode, type PointerEvent } from "react";

type TiltCardProps = {
    children: ReactNode;
    /** Sizing/layout classes for the outer box, e.g. "h-64" */
    className?: string;
    /** Maximum hover tilt angle in degrees */
    max?: number;
    /** Position in the grid; offsets each card's idle animation so they don't move in sync */
    index?: number;
    /** Turn the automatic idle sway on/off */
    auto?: boolean;
};

export default function TiltCard({
    children,
    className = "",
    max = 12,
    index = 0,
    auto = true,
}: TiltCardProps) {
    const swayRef = useRef<HTMLDivElement>(null);
    const tiltRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<Animation | null>(null);

    // Automatic sway: a slow, looping 3D orbit that runs without any interaction
    useEffect(() => {
        const el = swayRef.current;
        if (!auto || !el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ease = "ease-in-out";
        const anim = el.animate(
            [
                { transform: "rotateX(5deg) rotateY(-9deg)", easing: ease },
                { transform: "rotateX(-4deg) rotateY(-3deg)", easing: ease },
                { transform: "rotateX(-5deg) rotateY(9deg)", easing: ease },
                { transform: "rotateX(4deg) rotateY(3deg)", easing: ease },
                { transform: "rotateX(5deg) rotateY(-9deg)" },
            ],
            {
                duration: 7000 + index * 600,
                delay: -index * 1700, // negative delay = start part-way through the loop
                iterations: Infinity,
            }
        );
        animRef.current = anim;
        return () => anim.cancel();
    }, [auto, index]);

    const handleEnter = (e: PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "mouse" || !tiltRef.current) return;
        animRef.current?.pause(); // hand control to the cursor
        tiltRef.current.style.transition = "transform 120ms ease-out, box-shadow 300ms";
    };

    const handleMove = (e: PointerEvent<HTMLDivElement>) => {
        const el = tiltRef.current;
        if (!el || e.pointerType !== "mouse") return;

        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width; // 0 → 1
        const py = (e.clientY - r.top) / r.height; // 0 → 1

        el.style.setProperty("--ry", `${(px - 0.5) * 2 * max}deg`);
        el.style.setProperty("--rx", `${-(py - 0.5) * 2 * max}deg`);
        el.style.setProperty("--gx", `${px * 100}%`);
        el.style.setProperty("--gy", `${py * 100}%`);
    };

    const handleLeave = (e: PointerEvent<HTMLDivElement>) => {
        const el = tiltRef.current;
        if (!el) return;
        el.style.transition = "transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 300ms";
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
        if (e.pointerType === "mouse") animRef.current?.play(); // resume the idle sway
    };

    return (
        // Outer box: layout size + 3D perspective
        <div className={`relative ${className}`} style={{ perspective: "900px" }}>
            {/* Middle layer: automatic sway */}
            <div
                ref={swayRef}
                className="h-full w-full will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Inner layer: hover tilt + the visible card */}
                <div
                    ref={tiltRef}
                    onPointerEnter={handleEnter}
                    onPointerMove={handleMove}
                    onPointerLeave={handleLeave}
                    className="group relative h-full w-full rounded-2xl overflow-hidden shadow-soft hover:shadow-xl"
                    style={{ transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))" }}
                >
                    {children}

                    {/* Soft light that follows the cursor */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                            background:
                                "radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.28), transparent 55%)",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}