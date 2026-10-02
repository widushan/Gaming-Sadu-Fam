"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
// SVG Icons
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
);
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const contactOptions = [
    {
        name: "Facebook",
        username: "facebook.com/FreeFireSadu",
        link: "https://facebook.com/FreeFireSadu",
        icon: <FacebookIcon />,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        name: "Instagram",
        username: "instagram.com/gaming__sadu",
        link: "https://instagram.com/gaming__sadu",
        icon: <InstagramIcon />,
        color: "text-pink-600",
        bg: "bg-pink-50",
    },
    {
        name: "TikTok",
        username: "tiktok.com/@gaming_sadu_official",
        link: "https://tiktok.com/@gaming_sadu_official",
        icon: <TikTokIcon />,
        color: "text-black",
        bg: "bg-gray-100",
    },
    {
        name: "WhatsApp",
        username: "whatsapp.com/FreeFireSadu",
        link: "https://whatsapp.com/FreeFireSadu",
        icon: <WhatsAppIcon />,
        color: "text-green-600",
        bg: "bg-green-50",
    }
];

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [resultMessage, setResultMessage] = useState("");
    const [resultType, setResultType] = useState<"success" | "error" | "">("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        
        if (errors[id as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [id]: "" }));
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: "", email: "", message: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setResultMessage("");
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
                    ...formData,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setResultType("success");
                setResultMessage("Message sent successfully! We'll get back to you soon.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setResultType("error");
                setResultMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setResultType("error");
            setResultMessage("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 bg-white relative">
            <Container className="grid lg:grid-cols-2 gap-16">
                {/* Left: Contact Form */}
                <div className="flex flex-col gap-8 bg-white p-8 md:p-12 rounded-3xl shadow-[var(--shadow-soft)] border border-[var(--color-border)]">
                    <div>
                        <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-2">Send a Message</h2>
                        <p className="text-[var(--color-body)]">Fill out the form below and we'll get back to you as soon as possible.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-semibold text-[var(--color-heading)]">Name <span className="text-[var(--color-primary)]">*</span></label>
                                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Gaming Sadu" className={`px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors`} />
                                {errors.name && <span className="text-xs font-medium text-red-500">{errors.name}</span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-semibold text-[var(--color-heading)]">Email <span className="text-[var(--color-primary)]">*</span></label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="sadu2001@gmail.com" className={`px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors`} />
                                {errors.email && <span className="text-xs font-medium text-red-500">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-sm font-semibold text-[var(--color-heading)]">Subject</label>
                            <input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-semibold text-[var(--color-heading)]">Message <span className="text-[var(--color-primary)]">*</span></label>
                            <textarea id="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Write your message here..." className={`px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors resize-none`}></textarea>
                            {errors.message && <span className="text-xs font-medium text-red-500">{errors.message}</span>}
                        </div>

                        {resultMessage && (
                            <div className={`p-4 rounded-xl text-sm font-medium ${resultType === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                {resultMessage}
                            </div>
                        )}

                        <Button type="submit" size="lg" variant="primary" className="w-full mt-2" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </div>

                {/* Right: Direct Contact Options */}
                <div className="flex flex-col justify-center gap-10 lg:pl-10">
                    <div>
                        <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-4">Direct Contact Options</h2>
                        <p className="text-lg text-[var(--color-body)]">Prefer to reach out directly? Connect with us on your favorite platform.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {contactOptions.map((option, index) => (
                            <a href={option.link} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${option.bg} ${option.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {option.icon}
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="text-lg font-bold text-[var(--color-heading)] truncate">{option.name}</h4>
                                    {/* <p className="text-[var(--color-body)] group-hover:text-[var(--color-primary)] transition-colors">{option.username}</p> */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
