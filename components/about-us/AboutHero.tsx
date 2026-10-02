import Container from "@/components/ui/Container";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative pt-16 pb-20 bg-[url('/images/about-us/aboutUsHeroBg.jpg')] bg-cover bg-center bg-no-repeat">
            <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Image */}
                <div className="relative w-full aspect-square md:aspect-[4/3] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                        src="/images/about-us/aboutUs.jpg"
                        alt="Sandu and Tharu"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gray-900">
                        About <span className="text-[var(--color-primary)]">Us</span>
                    </h1>
                    <div className="flex flex-col gap-4 mt-6 text-gray-800">
                        <p className="text-xl md:text-2xl font-medium">
                            The Story Behind Gaming Sadu Fam -
                        </p>
                        <p className="text-lg md:text-xl italic font-medium text-gray-600 border-l-4 border-[var(--color-primary)] pl-4">
                            "How a shared love for Free Fire turned into the Gaming Sadu Fam."
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
