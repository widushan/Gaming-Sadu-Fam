"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import { useInView, animate } from "framer-motion";

const stats = [
    { label: "Subscribers", value: 500, suffix: "K+" },
    { label: "Vlogs Creation", value: 100, suffix: "+" },
    { label: "Account Buy & Sell", value: 10, suffix: "K+" },
    { label: "Topup Transactions", value: 1, suffix: "M+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (isInView && node) {
            const controls = animate(0, value, {
                duration: 10,
                ease: "easeOut",
                onUpdate(v) {
                    node.textContent = Math.round(v).toString() + suffix;
                },
            });
            return () => controls.stop();
        }
    }, [isInView, value, suffix]);

    return <span ref={nodeRef} className="text-4xl md:text-5xl font-bold tracking-tight">0{suffix}</span>;
}

export default function StatsSection() {
    return (
        <section className="py-20 bg-[linear-gradient(to_right,#651fff,#4da3ff)] text-white">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-2 px-4 border-l-0 first:border-l-0 md:border-l">
                            <Counter value={stat.value} suffix={stat.suffix} />
                            <span className="text-sm md:text-base font-medium text-white/90">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
