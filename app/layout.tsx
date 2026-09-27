// app/layout.tsx
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gaming Sadu Fam — Sri Lanka's Free Fire Community",
    template: "%s | Gaming Sadu Fam",
  },
  description:
    "Live Free Fire streams, tournaments, trusted diamond top-ups, account marketplace, and vlogs — Sri Lanka's home for the Free Fire Fam.",
  metadataBase: new URL("https://gamingsadufam.com"),
  openGraph: {
    title: "Gaming Sadu Fam",
    description: "Sri Lanka's Free Fire community — streams, top-ups, accounts, vlogs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body className="min-h-screen flex flex-col bg-[--color-bg-main] text-[--color-body]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}