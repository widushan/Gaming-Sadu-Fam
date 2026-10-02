import Container from "@/components/ui/Container";

export default function ContactHero() {
    return (
        <section className="relative pt-24 pb-32 bg-[url('/images/contact/contactHeroBg.jpg')] bg-cover bg-center bg-no-repeat">
            <Container className="relative z-10 flex flex-col items-center text-center gap-6">
                <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gray-900 drop-shadow-sm">
                    <span className="text-[var(--color-primary)]">Contact</span> Us
                </h1>
                <div className="flex flex-col gap-4 mt-4 text-gray-800 items-center">
                    <p className="text-xl md:text-2xl font-medium">
                        Get in Touch -
                    </p>
                    <p className="text-lg md:text-xl italic font-medium text-gray-700 max-w-2xl px-4">
                        Questions, sponsorships, streaming inquiries, or just want to say hi? We'd love to hear from you.
                    </p>
                </div>
            </Container>
        </section>
    );
}
