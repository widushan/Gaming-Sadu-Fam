// app/our-vlogs/page.tsx
import VlogsHero from "@/components/vlogs/VlogsHero";
import AboutVlogs from "@/components/vlogs/AboutVlogs";
import VlogGallery from "@/components/vlogs/VlogGallery";
import VlogsContent from "@/components/vlogs/VlogsContent";
import LatestVlogs from "@/components/vlogs/LatestVlogs";
import AchievementsSection from "@/components/vlogs/AchievementsSection";
import VlogsCTA from "@/components/vlogs/VlogsCTA";

export default function VlogsPage() {
    return (
        <div className="bg-white">
            <VlogsHero />
            <AboutVlogs />
            <section className="py-12 bg-white">
                <VlogGallery />
            </section>
            <VlogsContent />
            <LatestVlogs />
            <AchievementsSection />
            <VlogsCTA />
        </div>
    );
}