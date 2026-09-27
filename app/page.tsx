// app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import ChannelsSection from "@/components/home/ChannelsSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ChannelsSection />
      <StatsSection />
      <CTASection />
    </>
  );
}