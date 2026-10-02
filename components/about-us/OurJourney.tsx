import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type Milestone = {
    month?: string;
    year: string;
    title: string;
    description: string;
    href?: string;
};

// NOTE: months, descriptions and links are placeholders — replace with the real ones.
const milestones: Milestone[] = [
    {
        month: "January",
        year: "2018",
        title: "Channel launched with first Free Fire streams",
        description:
            "The Gaming Sadu channel went live with its first Free Fire streams — ranked pushes, squad matches, and plenty of funny moments.",
        href: "/ff-gaming",
    },
    {
        month: "June",
        year: "2019",
        title: "First community tournament hosted",
        description:
            "Our first community tournament brought the Fam together to compete on equal ground, with clear rules and no shortcuts.",
        href: "/ff-gaming",
    },
    {
        month: "March",
        year: "2021",
        title: "Diamond store & account marketplace launched",
        description:
            "The diamond top-up store and Free Fire account marketplace opened, built around safe, quick, scam-free deals.",
        href: "https://tharustore.com",
    },
    {
        month: "August",
        year: "2023",
        title: "Sandu & Tharu vlog channel hits 100K subscribers",
        description:
            "Our vlogs about real life outside the game grew into a channel the whole Fam follows.",
        href: "/our-vlogs",
    },
    {
        year: "Today",
        title: "Building the next chapter of Gaming Sadu Fam",
        description:
            "More streams, more tournaments, and more ways for the Fam to play, trade, and hang out together.",
    },
];

export default function OurJourney() {
    return (
        <section className="py-24 bg-[var(--color-bg-section)]">
            <Container className="flex flex-col gap-16 max-w-5xl">
                <SectionTitle eyebrow="Our Journey" title="Milestones" />

                <div className="relative">
                    {/* Vertical line: left edge on mobile, centre on desktop */}
                    <div
                        aria-hidden
                        className="absolute top-2 bottom-2 left-4 md:left-1/2 w-0.5 -translate-x-1/2 bg-[var(--color-primary-soft)]"
                    />

                    <div className="flex flex-col gap-12 md:gap-16">
                        {milestones.map((m, i) => {
                            const contentOnLeft = i % 2 === 1; // alternate sides on desktop
                            const dateLabel = m.month ? `${m.month} ${m.year}` : m.year;

                            return (
                                <div
                                    key={i}
                                    className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-16"
                                >
                                    {/* Dot on the line */}
                                    <span
                                        aria-hidden
                                        className="absolute left-4 md:left-1/2 top-[18px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-primary-soft)]"
                                    />

                                    {/* Date pill */}
                                    <div
                                        className={`mb-3 md:mb-0 md:row-start-1 ${contentOnLeft
                                                ? "md:col-start-2 md:justify-self-start"
                                                : "md:col-start-1 md:justify-self-end"
                                            }`}
                                    >
                                        <span className="inline-block rounded-full bg-gradient-to-r from-[var(--color-primary)] to-fuchsia-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/30">
                                            {dateLabel}
                                        </span>
                                    </div>

                                    {/* Title + card */}
                                    <div
                                        className={`md:row-start-1 md:pt-1 ${contentOnLeft
                                                ? "md:col-start-1 md:text-right"
                                                : "md:col-start-2"
                                            }`}
                                    >
                                        <h4 className="mb-3 text-xl font-bold leading-7 text-[var(--color-primary)]">
                                            {m.title}
                                        </h4>
                                        <div className="rounded-xl bg-white p-5 shadow-sm border border-[var(--color-border)] transition-shadow duration-300 hover:shadow-md">
                                            <p className="text-sm leading-relaxed text-[var(--color-body)]">
                                                {m.description}
                                            </p>
                                            {m.href && (
                                                <Link
                                                    href={m.href}
                                                    className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)] hover:underline"
                                                >
                                                    Visit &rsaquo;
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}