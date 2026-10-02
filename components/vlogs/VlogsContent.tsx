import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Video, PartyPopper, Clapperboard, Smile } from "lucide-react";

// Full class names are written out so Tailwind can detect them
const items = [
    {
        title: "Day-in-the-life content",
        description: "Experience our daily routines and special moments.",
        icon: Video,
        tile: "bg-purple-50 text-purple-600",
        bar: "bg-purple-500",
    },
    {
        title: "Challenges and events",
        description: "Fun community events and crazy challenges we do together.",
        icon: PartyPopper,
        tile: "bg-blue-50 text-blue-600",
        bar: "bg-blue-500",
    },
    {
        title: "Behind-the-scenes",
        description: "See what happens behind the camera during streams and tournaments.",
        icon: Clapperboard,
        tile: "bg-orange-50 text-orange-600",
        bar: "bg-orange-500",
    },
    {
        title: "Unfiltered, real moments",
        description: "Authentic experiences and interactions with the Fam.",
        icon: Smile,
        tile: "bg-green-50 text-green-600",
        bar: "bg-green-500",
    },
];

export default function VlogsContent() {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <SectionTitle
                        eyebrow="Content"
                        title="What You'll Find"
                        className="text-center mb-16"
                    />
                    <div className="grid md:grid-cols-2 gap-8">
                        {items.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="group relative overflow-hidden flex items-start gap-5 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md"
                                >
                                    {/* Icon tile: playful tilt on hover */}
                                    <div
                                        className={`p-4 rounded-2xl shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-12 motion-reduce:transform-none ${item.tile}`}
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                    </div>

                                    {/* Accent bar in the icon's color sweeps in along the bottom edge */}
                                    <span
                                        aria-hidden
                                        className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none ${item.bar}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}