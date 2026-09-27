import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const channels = [
    {
        title: "Gaming Sadu",
        description: "Our main gameplay channel. Daily streams featuring ranked pushes, squad matches, custom room events. This is where the grind happens.",
        videos: [
            { id: 1, title: "Grandmaster Push - Road to Global Top 100", date: "Oct 12, 2025" },
            { id: 2, title: "Epic 1v4 Clutch in Custom Room Tournament", date: "Oct 10, 2025" },
            { id: 3, title: "New Evo Gun Maxed Out! Full Review", date: "Oct 8, 2025" },
            { id: 4, title: "Playing with Subscribers - Funny Moments", date: "Oct 5, 2025" },
            { id: 5, title: "CS Ranked Grind - 50 Win Streak Challenge", date: "Oct 2, 2025" },
            { id: 6, title: "Unboxing New Elite Pass & Giveaways", date: "Sep 30, 2025" },
        ]
    },
    {
        title: "MR SADU FF",
        description: "Home of our organized tournaments and highlight reels. If you want to see the best plays from the community — or catch a tournament VOD you missed live — this is the channel.",
        videos: [
            { id: 1, title: "Weekly Scrims Grand Finals - VOD", date: "Oct 11, 2025" },
            { id: 2, title: "Top 10 Headshots of the Month", date: "Oct 9, 2025" },
            { id: 3, title: "Tournament Highlight Reel #15", date: "Oct 7, 2025" },
            { id: 4, title: "Pro Player Interview - Tips & Tricks", date: "Oct 4, 2025" },
            { id: 5, title: "Community Tournament Registration Opens", date: "Oct 1, 2025" },
            { id: 6, title: "Biggest Comeback in Finals History", date: "Sep 28, 2025" },
        ]
    }
];

export default function GamingChannels() {
    return (
        <section className="py-24 bg-white">
            <Container className="flex flex-col gap-24">
                <SectionTitle
                    eyebrow="Our Channels"
                    title="Our Gaming Channels"
                    className="text-center"
                />

                {channels.map((channel, i) => (
                    <div key={i} className="flex flex-col gap-10">
                        {/* Channel Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-gray-200">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">{channel.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {channel.description}
                                </p>
                            </div>
                            <Button href="#" variant="primary" external className="shrink-0">
                                Watch on YouTube &rarr;
                            </Button>
                        </div>

                        {/* Video Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {channel.videos.map((video, j) => (
                                <div key={j} className="bg-slate-50 border border-slate-200 rounded-2xl flex flex-col group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
                                    <img 
                                        src={`https://assets.prebuiltui.com/components/blog-sections/blogImg_${(j % 3) + 1}.png`} 
                                        alt={video.title} 
                                        className="w-full h-56 object-cover rounded-t-2xl rounded-b-none" 
                                    />
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span>
                                            <span className="text-sm font-medium text-slate-500">{video.date}</span>
                                        </div>
                                        <p className="text-lg font-semibold text-slate-900 mb-6 flex-1 line-clamp-2">
                                            {video.title}
                                        </p>
                                        <div>
                                            <button className="border border-slate-200 rounded-full px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]">
                                                Watch Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    );
}
