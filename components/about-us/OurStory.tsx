import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function OurStory() {
    return (
        <section className="py-24 bg-white">
            <Container className="max-w-4xl text-center">
                <SectionTitle
                    eyebrow="The Beginning"
                    title="Our Story"
                    className="mb-10"
                />
                <div className="flex flex-col gap-6 text-lg md:text-xl text-[var(--color-body)] leading-relaxed text-left md:text-center">
                    <p>
                        Gaming Sadu Fam started with a simple idea — Couple Sandu and Tharu, playing Free Fire and sharing it online. What began as casual gameplay streaming quickly turned into something bigger. As the community grew, so did the vision: not just to stream, but to build a space where Free Fire players in Sri Lanka could watch, compete, connect, and even get their diamonds — all in one place.
                    </p>
                    <p>
                        Today, Gaming Sadu Fam is a full ecosystem: live streaming channels, community tournaments, a trusted diamond top-up store, an account marketplace, and a vlog channel that has crossed 100,000 subscribers. But at its core, it's still what it always was — a Fam, built by gamers, for gamers.
                    </p>
                </div>
            </Container>
        </section>
    );
}
