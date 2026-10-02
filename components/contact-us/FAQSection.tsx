"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const faqs = [
    {
        q: "How do I join a tournament?",
        a: "Check the FF Gaming page for upcoming tournaments and registration links, or reach out via Contact Us."
    },
    {
        q: "How long does diamond top-up take?",
        a: "Visit our store at tharustore.com for current delivery times and process."
    },
    {
        q: "Is the account marketplace safe?",
        a: "Yes — all listings go through our verification process before being published. Visit duggyffstore.com for details."
    },
    {
        q: "How can I sponsor a tournament or collaborate?",
        a: "Use the contact form above and select \"Sponsorship\" as the subject — we'll get back to you."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[var(--color-bg-section)] relative">
            <Container className="max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[var(--color-heading)] mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-[var(--color-body)]">Got questions? We've got answers.</p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden">
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                                >
                                    <h3 className="text-xl font-bold text-[var(--color-heading)] pr-8">{faq.q}</h3>
                                    <span className="text-3xl font-medium text-[var(--color-primary)] flex-shrink-0 leading-none">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>
                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                    <div className="overflow-hidden">
                                        <div className="px-8 pb-8">
                                            <p className="text-[var(--color-body)] leading-relaxed">{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-2xl md:text-3xl font-medium text-gray-800 italic max-w-3xl mx-auto border-t border-gray-200 pt-16">
                        "Whatever brings you here — we're glad you're part of the Fam. Reach out anytime."
                    </p>
                </div>
            </Container>
        </section>
    );
}
