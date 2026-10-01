"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import { Trophy, PlaySquare } from "lucide-react";
import { useInView, animate } from "framer-motion";

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const nodeRef = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (isInView && node) {
            const controls = animate(0, value, {
                duration: 4,
                ease: "easeOut",
                onUpdate(v) {
                    node.textContent = Math.round(v).toString() + suffix;
                },
            });
            return () => controls.stop();
        }
    }, [isInView, value, suffix]);

    return <h3 ref={nodeRef} className="text-5xl font-black mb-2 text-white">0{suffix}</h3>;
}

export default function AchievementsSection() {
    return (
        <section className="py-16 bg-slate-900 text-white">
            <Container>
                <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700 text-center">
                    <div className="flex flex-col items-center justify-center p-8 gap-5">
                        <div className="p-5 bg-slate-800 rounded-full text-purple-400">
                            <Trophy className="w-10 h-10" />
                        </div>
                        <div className="text-white">
                            <Counter value={44} suffix="K+" />
                            <p className="text-slate-400 text-lg font-medium tracking-wide uppercase">Subscribers Reached</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 gap-5 pt-12 md:pt-8">
                        <div className="p-5 bg-slate-800 rounded-full text-blue-400">
                            <PlaySquare className="w-10 h-10" />
                        </div>
                        <div className="text-white">
                            <Counter value={150} suffix="+" />
                            <p className="text-slate-400 text-lg font-medium tracking-wide uppercase">Videos Uploaded</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
