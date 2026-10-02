"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
    images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full max-w-3xl overflow-hidden relative rounded-2xl shadow-lg aspect-video bg-[var(--color-bg-section)]">
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="flex items-center mt-5 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={cn(
                            "w-3 h-3 rounded-full transition-colors",
                            currentSlide === index ? "bg-[var(--color-primary)]" : "bg-black/20 hover:bg-black/40"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
