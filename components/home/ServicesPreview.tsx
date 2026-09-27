import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import { Video, Gem, Users, Film } from "lucide-react";

export default function ServicesPreview() {
    return (
        <section className="py-24">
            <Container className="flex flex-col gap-16">
                <SectionTitle
                    eyebrow="What We Offer"
                    title="Everything you need in one place"
                />

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <FeatureCard
                        title="Live FF Streaming"
                        description="Watch Sadu go live on Free Fire — ranked pushes, squad matches, and unscripted funny moments, streamed regularly on YouTube."
                        icon={Video}
                        href="/ff-gaming"
                    />
                    <FeatureCard
                        title="Diamond Top-Up Store"
                        description="Need diamonds fast? Our store gets you FF diamonds at competitive rates, delivered safely and quickly — no scams, no delays."
                        icon={Gem}
                        href="https://tharustore.com"
                    />
                    <FeatureCard
                        title="Account Marketplace"
                        description="Awesome Free Fire accounts, ready to own — with negotiable prices. Buy your next account or sell the one you've outgrown, safely and easily."
                        icon={Users}
                        href="https://duggyffstore.com"
                    />
                    <FeatureCard
                        title="Vlogs & Behind the Scenes"
                        description="Follow Sandu & Tharu's real life outside the game — now trusted by over 44K subscribers."
                        icon={Film}
                        href="/our-vlogs"
                    />
                </div>
            </Container>
        </section>
    );
}
