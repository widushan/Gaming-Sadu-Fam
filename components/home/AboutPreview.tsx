import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function AboutPreview() {
    return (
        <section className="bg-[--color-bg-section] py-24">
            <Container className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Image */}
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-card group">
                    <Image
                        src="/images/home/about-preview.jpg"
                        alt="Gaming Sadu Community"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col items-start gap-6">
                    <SectionTitle
                        eyebrow="Who We Are"
                        title="Built by gamers, for gamers"
                        align="left"
                    />
                    <p className="text-body-lg text-[--color-body]">
                        Gaming Sadu Fam is a community built — live gameplay, competitive and trusted diamond store with free fire account buy and sell platform and real behind-the-scenes vlogs. Whether you're here to watch, compete, top up, or just vibe with the squad, you're part of the Fam now.
                    </p>
                    <Button href="/about-us" variant="ghost" className="mt-2 text-[var(--color-primary)]">
                        Learn More &rarr;
                    </Button>
                </div>
            </Container>
        </section>
    );
}
