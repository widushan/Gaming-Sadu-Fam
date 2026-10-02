import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

const latestVlogs = [
    {
        id: 1,
        title: "FLYING FROM OITA TO TOKYO! ",
        date: "Sep 26, 2026",
        link: "https://www.youtube.com/watch?v=MQf4B7Z2kYE",
        image: "/images/vlogs/vlog1.jpg"
    },
    {
        id: 2,
        title: "THE MOST BEAUTIFUL BEACH IN JAPAN",
        date: "Sep 21, 2026",
        link: "https://www.youtube.com/watch?v=9cIpBPvM_7Q",
        image: "/images/vlogs/vlog2.jpg"
    },
    {
        id: 3,
        title: "TRAVELING 1300+ KM TO TAKACHIHO GORGE",
        date: "Sep 16, 2026",
        link: "https://www.youtube.com/watch?v=Uxt4CyQjI54&pp=0gcJCS4MAYcqIYzv",
        image: "/images/vlogs/vlog3.jpg"
    },
    {
        id: 4,
        title: " INSIDE THE HELLO KITTY FAIRY TALE WORLD! ",
        date: " Sep 9, 2026",
        link: "https://www.youtube.com/watch?v=mU5-0sg8pHg",
        image: "/images/vlogs/vlog4.jpg"
    },
    {
        id: 5,
        title: "UNLIMITED BBQ CHALLENGE IN JAPAN! ",
        date: "Sep 6, 2026",
        link: "https://www.youtube.com/watch?v=nMasSLIGtrY",
        image: "/images/vlogs/vlog5.jpg"
    },
    {
        id: 6,
        title: "THE CRAZIEST SAFARI IN JAPAN!",
        date: "Sep 2, 2026",
        link: "https://www.youtube.com/watch?v=WoQdF45bcSw",
        image: "/images/vlogs/vlog6.jpg"
    }
];

export default function LatestVlogs() {
    return (
        <section className="py-24 bg-white">
            <Container className="flex flex-col gap-12 items-center">
                <SectionTitle
                    eyebrow="Recent Videos"
                    title="Latest Vlogs"
                    className="text-center"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {latestVlogs.map((video) => (
                        <div key={video.id} className="bg-slate-50 border border-slate-200 rounded-2xl flex flex-col group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-sm">
                            <Image
                                src={video.image}
                                alt={video.title}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover rounded-t-2xl rounded-b-none transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="p-6 flex flex-col flex-1 relative bg-slate-50 z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="size-1.5 rounded-full bg-[var(--color-primary)]"></span>
                                    <span className="text-sm text-slate-600">{video.date}</span>
                                </div>
                                <p className="text-lg font-semibold text-slate-800 mb-6 flex-1 line-clamp-2">
                                    {video.title}
                                </p>
                                <div>
                                    <a href={video.link} target="_blank" rel="noopener noreferrer" className="inline-block border border-slate-200 rounded-full px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]">
                                        Watch Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Button href="https://www.youtube.com/@sanduandtharu100k" variant="primary" external>
                    View Channel on YouTube &rarr;
                </Button>
            </Container>
        </section>
    );
}
