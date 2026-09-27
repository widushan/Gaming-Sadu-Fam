import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Image from "next/image";
import { Play, Diamond } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-5 pb-32 bg-[url('/images/home/homeHeroBg.jpg')] bg-cover bg-center bg-no-repeat">
            <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="flex flex-col items-center lg:items-start gap-8 text-center lg:text-left">
                    <Badge variant="purple" className="inline-flex items-center gap-3 rounded-full border border-gray-200 pl-2 pr-5 py-1.5 shadow-sm">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="relative w-7 h-7 rounded-full overflow-hidden ring-2 ring-white">
                                    <Image
                                        src={`/images/home/avatar-${i}.jpg`}
                                        alt="Community member"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-medium">Join community of 100K+ members</span>
                    </Badge>

                    <h1 className="flex flex-col gap-2">
                        <span>Welcome to</span>
                        <span className="text-[var(--color-primary)]">Gaming Sadu Fam</span>
                    </h1>

                    <p className="text-body-lg max-w-lg">
                        Sri Lanka's premier Free Fire community — home to live gameplay, competitive tournaments, a trusted diamond store, secure account marketplace, and real behind-the-scenes vlogs.
                    </p>

                    <div className="flex flex-col items-center gap-6 mt-4 w-full">
                        <div className="flex items-center justify-center gap-8 md:gap-12">
                            <Image
                                src="/images/home/saduLogo.png"
                                alt="Gaming Sadu"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                            <Image
                                src="/images/home/tharuLogo.png"
                                alt="Tharu Store"
                                width={55}
                                height={55}
                                className="object-contain"
                            />
                        </div>

                        <Button href="/about-us" size="lg" variant="primary" className="w-[220px] h-14 text-lg rounded-full">
                            Explore &rarr;
                        </Button>
                    </div>
                </div>

                {/* Right Column (Masonry Grid) */}
                <div className="grid grid-cols-2 gap-4 h-[600px] relative">
                    <div className="flex flex-col gap-4 mt-12">
                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft group">
                            <Image
                                src="/images/home/1hero.jpg"
                                alt="Gaming Sadu couple image 1"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-soft group">
                            <Image
                                src="/images/home/2hero.jpg"
                                alt="Gaming Sadu couple image 2"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-soft group">
                            <Image
                                src="/images/home/3hero.jpg"
                                alt="Gaming Sadu couple image 3"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft group">
                            <Image
                                src="/images/home/4hero.jpg"
                                alt="Gaming Sadu couple image 4"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
