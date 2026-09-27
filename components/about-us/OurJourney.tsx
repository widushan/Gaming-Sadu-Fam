import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle2 } from "lucide-react";

const milestones = [
    {
        year: "2018",
        title: "Channel launched with first Free Fire streams",
    },
    {
        year: "2019",
        title: "First community tournament hosted",
    },
    {
        year: "2021",
        title: "Diamond store & account marketplace launched",
    },
    {
        year: "2023",
        title: "Sandu & Tharu vlog channel hits 100K subscribers",
    },
    {
        year: "Today",
        title: "Building the next chapter of Gaming Sadu Fam",
    },
];

export default function OurJourney() {
    return (
        <section className="py-24 bg-[var(--color-bg-section)]">
            <Container className="flex flex-col gap-16 max-w-3xl">
                <SectionTitle
                    eyebrow="Our Journey"
                    title="Milestones"
                />

                <div className="relative border-l-2 border-[var(--color-primary-soft)] ml-4 md:ml-8">
                    {milestones.map((milestone, i) => (
                        <div key={i} className="mb-10 ml-8 relative group">
                            {/* Dot / Checkmark */}
                            <span className="absolute -left-[43px] flex items-center justify-center w-8 h-8 bg-white rounded-full text-[var(--color-primary)] ring-4 ring-[var(--color-bg-section)]">
                                <CheckCircle2 size={20} className="fill-[var(--color-primary-soft)]" />
                            </span>
                            
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-border)] group-hover:border-[var(--color-primary)] group-hover:shadow-md transition-all">
                                <h3 className="flex items-center mb-1 text-xl font-bold text-[var(--color-primary)]">
                                    {milestone.year}
                                </h3>
                                <p className="text-[var(--color-heading)] font-medium">
                                    {milestone.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
