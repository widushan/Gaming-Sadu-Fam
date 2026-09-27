import ServicesHero from "@/components/our-services/ServicesHero";
import DiamondTopUp from "@/components/our-services/DiamondTopUp";
import AccountBuySell from "@/components/our-services/AccountBuySell";

export const metadata = {
    title: "Our Services | Gaming Sadu Fam",
    description: "Explore the services offered by Gaming Sadu Fam, including our Diamond Top-Up store and Account Marketplace.",
};

export default function OurServicesPage() {
    return (
        <main>
            <ServicesHero />
            <DiamondTopUp />
            <AccountBuySell />
        </main>
    );
}