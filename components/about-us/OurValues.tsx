import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Users, Scale, Rocket, Smile } from "lucide-react";

const values = [
    {
        title: "Community First",
        description: "Every decision we make starts with what's best for the Fam — our viewers, players, and customers.",
        icon: Users,
    },
    {
        title: "Fair Play",
        description: "Our tournaments and matches are run with clear rules and no shortcuts. Everyone competes on equal ground.",
        icon: Scale,
    },
    {
        title: "Growth & Consistency",
        description: "From daily streams to regular tournaments, we show up consistently — because that's how real communities are built.",
        icon: Rocket,
    },
    {
        title: "Fun Above All",
        description: "At the end of the day, it's a game. We keep things fun, light, and welcoming for everyone in the Fam.",
        icon: Smile,
    },
];

export default function OurValues() {
    return (
        <section className="py-24 bg-white">
            <Container className="flex flex-col gap-16">
                <SectionTitle
                    eyebrow="Our Values"
                    title="What We Stand For"
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, i) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={i}
                                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-[var(--color-bg-section)] transition-all duration-300 hover:-translate-y-2 hover:shadow-card motion-reduce:transform-none"
                            >
                                {/* Icon circle fills with the brand color on hover */}
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                                    <Icon size={32} />
                                </div>
                                <h4 className="mb-3">{value.title}</h4>
                                <p className="text-[var(--color-body)] text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}