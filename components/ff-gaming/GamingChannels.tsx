import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const channels = [
    {
        title: "Gaming Sadu",
        description: "Our main gameplay channel. Daily streams featuring ranked pushes, squad matches, custom room events. This is where the grind happens.",
        link: "https://www.youtube.com/@GamingSadu",
        videos: [
            { id: 1, title: "IS THIS THE BEST ACCOUNT IN SRI LANKA?", date: "Aug 05, 2026", link: "https://www.youtube.com/watch?v=a_Vg1li5sdQ", image: "/images/ff-gaming/GamingSadu/1v.jpg" },
            { id: 2, title: "PLAYING ON A 1 MILLION RUPEE ACCOUNT!", date: "Jun 14, 2026", link: "https://www.youtube.com/watch?v=x_nmIcv8_d0", image: "/images/ff-gaming/GamingSadu/2v.jpg" },
            { id: 3, title: "WHY WAS THIS V-BADGE ACCOUNT BANNED? ", date: "Mar 25, 2026", link: "https://www.youtube.com/watch?v=RcMxc1V5kRs", image: "/images/ff-gaming/GamingSadu/3v.jpg" },
            { id: 4, title: "1 VS 4 CHALLENGE | CAN I CLUTCH THIS?", date: "Jun 19, 2026", link: "https://www.youtube.com/watch?v=ma0AOwc4mlc", image: "/images/ff-gaming/GamingSadu/4v.jpg" },
            { id: 5, title: "THE CRIMINAL BUNDLE IS FINALLY BACK! ", date: "Jun 7, 2026", link: "https://www.youtube.com/watch?v=u9SY2oGtLSM", image: "/images/ff-gaming/GamingSadu/5v.jpg" },
            { id: 6, title: "ISI SQUAD VS STR SQUAD | WHO WILL WIN?", date: "Apr 28, 2026", link: "https://www.youtube.com/watch?v=sAfEbSuQO9Q", image: "/images/ff-gaming/GamingSadu/6v.jpg" },
        ]
    },
    {
        title: "MR SADU FF",
        description: "Home of our organized tournaments and highlight reels. If you want to see the best plays from the community — or catch a tournament VOD you missed live — this is the channel.",
        link: "https://www.youtube.com/@MRSADUFF",
        videos: [
            { id: 1, title: "FLMG SQUAD VS S3H SQUAD | Custom Room Match", date: "Sep 4, 2026", link: "https://www.youtube.com/watch?v=2kF0iXm_NY0&pp=ygUKbXIgc2FkdSBmZg%3D%3D", image: "/images/ff-gaming/MrSaduFf/1vv.jpg" },
            { id: 2, title: "GAMING SADU SQUAD VS APEX GAMING SQUAD | Live Custom Match", date: "Sep 22, 2026", link: "https://www.youtube.com/watch?v=qAdHo0_buKs&pp=ygUKbXIgc2FkdSBmZg%3D%3D", image: "/images/ff-gaming/MrSaduFf/2vv.jpg" },
            { id: 3, title: "MR SADU FF 50K SPECIAL LIVE!", date: "Sep 27, 2026", link: "https://www.youtube.com/watch?v=XYtqhir8BhI&pp=ygUKbXIgc2FkdSBmZg%3D%3D", image: "/images/ff-gaming/MrSaduFf/3vv.jpg" },
            { id: 4, title: "LEGENDS ARENA SEASON 2 GRAND FINAL | Live Tournament", date: "Sep 24, 2026", link: "https://www.youtube.com/watch?v=uWUucl2Biv4&pp=ygUKbXIgc2FkdSBmZg%3D%3D", image: "/images/ff-gaming/MrSaduFf/4vv.jpg" },
            { id: 5, title: "FLMG RASAA INTERVIEW: Custom HUD & Sensitivity Settings", date: "Sep 20, 2026", link: "https://www.youtube.com/watch?v=XmMuazJe-4k&pp=ygUKbXIgc2FkdSBmZg%3D%3D", image: "/images/ff-gaming/MrSaduFf/5vv.jpg" },
            { id: 6, title: "S3H SQUAD VS MR x7 SQUAD | Who Is The Real King?", date: " Sep 3, 2026", link: "https://www.youtube.com/watch?v=DN79e2tpoiM&pp=ygUKbXIgc2FkdSBmZg%3D%3D", image: "/images/ff-gaming/MrSaduFf/6vv.jpg" },
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
                            <Button href={channel.link} variant="primary" external className="shrink-0">
                                Watch on YouTube &rarr;
                            </Button>
                        </div>

                        {/* Video Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {channel.videos.map((video, j) => (
                                <div key={j} className="bg-slate-50 border border-slate-200 rounded-2xl flex flex-col group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
                                    <Image
                                        src={video.image}
                                        alt={video.title}
                                        width={600}
                                        height={400}
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
                                            <a href={video.link} target="_blank" rel="noopener noreferrer" className="inline-block border border-slate-200 rounded-full px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]">
                                                Watch Now
                                            </a>
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
