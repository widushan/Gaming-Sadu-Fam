import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutVlogs() {
    return (
        <section className="py-24 bg-white relative z-20">
            <Container className="max-w-3xl text-center flex flex-col items-center">
                <SectionTitle
                    eyebrow="About the Vlog Channel"
                    title="Real Life, Unscripted"
                    className="mb-8"
                />
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                    Beyond the Free Fire streams, there's another side to Gaming Sadu Fam — real life, unscripted. Our vlog channel follows Sandu and Tharu through everyday moments, challenges, behind-the-scenes content, and everything that happens off-screen. It's the story of the people behind the gameplay.
                </p>
                <Button href="https://www.youtube.com/@sanduandtharu100k" variant="primary" external>
                    Watch on YouTube &rarr;
                </Button>
            </Container>
        </section>
    );
}
