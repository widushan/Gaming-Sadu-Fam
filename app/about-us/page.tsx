import AboutHero from "@/components/about-us/AboutHero";
import OurStory from "@/components/about-us/OurStory";
import ImageGrid from "@/components/about-us/ImageGrid";
import OurMission from "@/components/about-us/OurMission";
import OurValues from "@/components/about-us/OurValues";
import OurJourney from "@/components/about-us/OurJourney";

export const metadata = {
    title: "About Us | Gaming Sadu Fam",
    description: "Learn about the story behind Gaming Sadu Fam, our mission, values, and journey.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <OurStory />
            <ImageGrid />
            <OurMission />
            <OurValues />
            <OurJourney />
        </main>
    );
}