import FFHero from "@/components/ff-gaming/FFHero";
import GamingChannels from "@/components/ff-gaming/GamingChannels";

export const metadata = {
    title: "Free Fire Gaming | Gaming Sadu Fam",
    description: "Explore our Free Fire gaming channels, tournaments, and highlights.",
};

export default function FFGamingPage() {
    return (
        <main>
            <FFHero />
            <GamingChannels />
        </main>
    );
}