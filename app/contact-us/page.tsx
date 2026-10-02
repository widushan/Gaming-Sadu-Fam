import { Metadata } from "next";
import ContactHero from "@/components/contact-us/ContactHero";
import ContactSection from "@/components/contact-us/ContactSection";
import FAQSection from "@/components/contact-us/FAQSection";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Gaming Sadu Fam. Reach out for sponsorships, streaming inquiries, or just to say hi.",
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactSection />
            <FAQSection />
        </>
    );
}