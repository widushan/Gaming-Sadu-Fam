import Container from "@/components/ui/Container";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const socials = [
    {
        name: "Facebook",
        handle: "FreeFireSadu",
        href: "https://facebook.com/FreeFireSadu",
        icon: FaFacebook,
    },
    {
        name: "Instagram",
        handle: "@gaming__sadu",
        href: "https://instagram.com/gaming__sadu",
        icon: FaInstagram,
    },
    {
        name: "TikTok",
        handle: "@gaming_sadu_official",
        href: "https://tiktok.com/@gaming_sadu_official",
        icon: FaTiktok, // Substitute for TikTok
    },
    {
        name: "WhatsApp",
        handle: "FreeFireSadu",
        href: "https://whatsapp.com/FreeFireSadu",
        icon: FaWhatsapp, // Substitute for WhatsApp
    },
];

export default function CTASection() {
    return (
        <section className="py-24">
            <Container>
                <div className="relative rounded-3xl overflow-hidden bg-[linear-gradient(to_right,#111827,#7C3AED)] text-white py-16 px-6 md:px-12">
                    {/* Decorative blobs */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h2 className="text-white mb-12">Ready to join the Community?</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <div className="text-center">
                                            <div className="font-semibold text-sm">{social.name}</div>
                                            <div className="text-white/70 text-xs mt-1">{social.handle}</div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
