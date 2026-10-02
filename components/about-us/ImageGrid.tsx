import Container from "@/components/ui/Container";
import Image from "next/image";

const images = [
    "/images/about-us/gallery-1.jpg",
    "/images/about-us/gallery-2.jpg",
    "/images/about-us/gallery-3.jpg",
    "/images/about-us/gallery-4.jpg",
    "/images/about-us/gallery-5.jpg",
    "/images/about-us/gallery-6.jpg",
];

export default function ImageGrid() {
    return (
        <section className="pb-24 bg-white overflow-hidden">
            <Container>
                <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mx-auto">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="relative group flex-grow transition-all w-16 sm:w-24 md:w-32 lg:w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-[150%] md:hover:w-full"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${i + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover object-center"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
