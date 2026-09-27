import Container from "@/components/ui/Container";
import Image from "next/image";

export default function ServicesHero() {
    return (
        <section className="relative pt-16 pb-20 bg-[url('/images/services/servicesHeroBg.jpg')] bg-cover bg-center bg-no-repeat">
            <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gray-900">
                        <span className="text-[var(--color-primary)]">Our</span> Services
                    </h1>
                    <div className="flex flex-col gap-4 mt-6 text-gray-800">
                        <p className="text-xl md:text-2xl font-medium">
                            What We Offer -
                        </p>
                        <p className="text-lg md:text-xl italic font-medium text-gray-600 border-l-4 border-[var(--color-primary)] pl-4">
                            "Top Ups, diamonds, accounts — everything a Free Fire player needs, in one place."
                        </p>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative w-full aspect-square md:aspect-[4/3] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl group order-1 lg:order-2">
                    <Image
                        src="/images/services/servicesHeroImg.jpg"
                        alt="Our Services"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </Container>
        </section>
    );
}
