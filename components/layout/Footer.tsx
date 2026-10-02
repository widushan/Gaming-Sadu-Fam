// components/layout/Footer.tsx
import Container from "@/components/ui/Container";
import Link from "next/link";
import Logo from "./Logo";

const columns = [
    {
        title: "Quick Links",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            { label: "Our Services", href: "/our-services" },
            { label: "Contact Us", href: "/contact-us" },
        ],
    },
    {
        title: "Need Help?",
        links: [
            { label: "Diamond Top-Up", href: "https://tharustore.com" },
            { label: "Account Marketplace", href: "https://duggyffstore.com" },
            { label: "Tournaments", href: "/ff-gaming" },
            { label: "Vlogs", href: "/our-vlogs" },
        ],
    },
    {
        title: "Follow Us",
        links: [
            { label: "Facebook", href: "https://facebook.com/FreeFireSadu" },
            { label: "Instagram", href: "https://instagram.com/gaming__sadu" },
            { label: "TikTok", href: "https://tiktok.com/@gaming_sadu_official" },
            { label: "YouTube", href: "https://youtube.com/@GamingSadu" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="mt-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-[--color-bg-section]">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-300 text-gray-500">
                <div className="md:w-1/3">
                    <Logo variant="dark" />
                    <p className="max-w-[410px] mt-6 text-sm">
                        Gaming Sadu Fam is a community built — live gameplay, competitive and trusted diamond store with free fire account buy and sell platform and real behind-the-scenes vlogs.
                    </p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[60%] gap-5">
                    {columns.map((col) => (
                        <div key={col.title}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                                {col.title}
                            </h3>
                            <ul className="text-sm space-y-2">
                                {col.links.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="hover:underline hover:text-[--color-primary] transition-colors">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-600">
                Copyright {new Date().getFullYear()} © Gaming Sadu Fam. All Right Reserved. <br />
                Designed and Developed by PASiNDU K.W
            </p>
        </footer>
    );
}