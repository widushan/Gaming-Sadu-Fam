import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Gem, CheckCircle2 } from "lucide-react";
import ImageSlider from "./ImageSlider";

const sliderImages = [
    "/images/services/topUp1.jpg",
    "/images/services/topUp2.jpg",
];

const features = [
    "Instant or fast delivery",
    "Competitive pricing",
    "Trusted Customer support",
    "Simple, secure payment process",
];

export default function DiamondTopUp() {
    return (
        <section className="py-24 bg-white">
            <Container className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Slider */}
                <div className="w-full">
                    <ImageSlider images={sliderImages} />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary-soft)] flex items-center justify-center text-[var(--color-primary)]">
                        <Gem size={32} />
                    </div>
                    <h2 className="text-4xl font-bold text-[var(--color-heading)]">
                        Diamond Top-Up THARU Store
                    </h2>
                    <p className="text-lg text-[var(--color-body)] leading-relaxed">
                        "Running low on diamonds? Our store lets you top up Free Fire diamonds quickly and safely, at rates that keep more money in your pocket. No long waits, no sketchy middlemen — just a fast, reliable top-up service trusted by the Fam."
                    </p>

                    <div className="mt-4 w-full">
                        <h4 className="text-xl font-semibold mb-4 text-[var(--color-heading)]">Why choose us:</h4>
                        <ul className="flex flex-col gap-3">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-[var(--color-body)] font-medium">
                                    <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Button href="#" size="lg" variant="primary" className="mt-4">
                        Visit Diamond Store
                    </Button>
                </div>
            </Container>
        </section>
    );
}
