import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function OurMission() {
    return (
        <section className="py-24 bg-[var(--color-bg-section)] relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-5 blur-3xl pointer-events-none" />
            
            <Container className="relative z-10 max-w-4xl text-center">
                <SectionTitle
                    eyebrow="Our Mission"
                    title="Why We Do It"
                    className="mb-10"
                />
                <p className="text-2xl md:text-3xl font-semibold text-[var(--color-heading)] leading-snug">
                    "To build Sri Lanka's most active and trusted Free Fire community — a place where players can watch great content, compete fairly, top up safely, and feel like they're part of something bigger than just a game."
                </p>
            </Container>
        </section>
    );
}
