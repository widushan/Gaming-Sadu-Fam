import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { RefreshCw, CheckCircle2 } from "lucide-react";
import ImageSlider from "./ImageSlider";

const sliderImages = [
    "/images/services/accImg1.jpg",
    "/images/services/accImg2.jpg",
];

const features = [
    "Verified listings",
    "Safe transaction process",
    "Fair pricing for both buyers and sellers",
    "Backed by the Gaming Sadu community",
];

export default function AccountBuySell() {
    return (
        <section className="py-24 bg-[var(--color-bg-section)]">
            <Container className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Content */}
                <div className="flex flex-col items-start gap-6 order-2 lg:order-1">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary-soft)] flex items-center justify-center text-[var(--color-primary)]">
                        <RefreshCw size={32} />
                    </div>
                    <h2 className="text-4xl font-bold text-[var(--color-heading)]">
                        Account Marketplace - DUGGY FF
                    </h2>
                    <p className="text-lg text-[var(--color-body)] leading-relaxed">
                        "Looking to sell an account you've outgrown, or buy one that's already stacked with skins, ranks, and rewards? Our marketplace connects Free Fire buyers and sellers in a secure, straightforward way."
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

                    <Button href="https://duggyffstore.com/" size="lg" variant="primary" className="mt-4">
                        Visit Account Store
                    </Button>
                </div>

                {/* Right: Slider */}
                <div className="w-full order-1 lg:order-2">
                    <ImageSlider images={sliderImages} />
                </div>
            </Container>
        </section>
    );
}
