"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { GREY_PLACEHOLDER } from "@/lib/constants";
import Link from "next/link";

export default function HomeValuationPage() {
    const [formData, setFormData] = useState({
        propertyAddress: "",
        name: "",
        email: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: `Property Address for Valuation: ${formData.propertyAddress}`,
                    phone: "N/A" // Optional for valuation specifically if not asked
                }),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ propertyAddress: "", name: "", email: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="solid" />
            <main className="flex-grow pt-40 pb-12 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Home Valuation</h1>
                        <div className="w-24 h-1 bg-accent mx-auto mb-8" />
                        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-lg">
                            Receive a comprehensive analysis of your property's value in today's market.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-muted p-8 md:p-12 rounded-sm shadow-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label htmlFor="propertyAddress" className="text-xs uppercase tracking-wider text-gray-500 dark:text-muted-foreground">Property Address</label>
                                <input
                                    type="text"
                                    id="propertyAddress"
                                    value={formData.propertyAddress}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                                    placeholder="123 Luxury Lane"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-500 dark:text-muted-foreground">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-500 dark:text-muted-foreground">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 pt-2">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    required
                                    className="mt-1 border-gray-300 rounded focus:ring-accent text-accent"
                                />
                                <label htmlFor="privacy" className="text-xs text-muted-foreground leading-snug">
                                    I agree to the <Link href="/privacy" className="text-foreground hover:text-accent underline decoration-gray-300 underline-offset-4">Privacy Policy</Link> and to be contacted about my valuation inquiry.
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-300 font-bold shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Sending..." : status === "success" ? "Sent Successfully" : "Request Valuation"}
                            </button>

                            {status === "error" && (
                                <p className="text-red-500 text-center text-sm pt-4">An error occurred. Please try again later.</p>
                            )}
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
