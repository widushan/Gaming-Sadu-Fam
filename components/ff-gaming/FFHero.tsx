import Container from "@/components/ui/Container";
import Image from "next/image";

export default function FFHero() {
    return (
        <section className="relative pt-16 pb-20 bg-[url('/images/ff-gaming/ffHeroBg.jpg')] bg-cover bg-center bg-no-repeat">
            <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Images */}
                <div className="flex flex-col w-full max-w-lg mx-auto lg:max-w-none">
                    <div className="relative w-[85%] aspect-video rounded-3xl overflow-hidden shadow-2xl group z-10">
                        <Image
                            src="/images/ff-gaming/ffHero1.jpg"
                            alt="Free Fire Gameplay"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="relative w-[75%] aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl self-end -mt-16 md:-mt-20 z-20 group">
                        <Image
                            src="/images/ff-gaming/ffHero2.jpg"
                            alt="Free Fire Squad"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gray-900">
                        <span className="text-[var(--color-primary)] block">Free Fire</span>
                        Gaming
                    </h1>
                    <div className="flex flex-col gap-4 mt-6 text-gray-800">
                        <p className="text-xl md:text-2xl font-medium">
                            Free Fire, The Way It's Meant to Be Played
                        </p>
                        <p className="text-lg md:text-xl italic font-medium text-gray-600 border-l-4 border-[var(--color-primary)] pl-4">
                            "Streams. Tournaments. Highlights. All from the Gaming Sadu Fam squad."
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
