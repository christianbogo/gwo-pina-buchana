"use client";

import Link from "next/link";
import { useState } from "react";

import Image from "next/image";

interface CondensedContactFormProps {
    title?: string;
    subtitle?: React.ReactNode;
    backgroundImage?: string;
}

export default function CondensedContactForm({
    title = "Start the Conversation",
    subtitle = "Ready to take the next step? Contact our team today.",
    backgroundImage
}: CondensedContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <section className={`relative py-24 ${backgroundImage ? 'text-white' : 'bg-muted border-t border-border/50'}`}>
            {backgroundImage && (
                <>
                    <Image
                        src={backgroundImage}
                        alt="Contact Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </>
            )}
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`font-serif text-3xl md:text-4xl mb-4 ${backgroundImage ? 'text-white' : 'text-foreground'}`}>{title}</h2>
                    <div className={`text-lg leading-relaxed ${backgroundImage ? 'text-white/90' : 'text-muted-foreground'}`}>{subtitle}</div>
                </div>

                <div className="bg-background p-8 md:p-12 shadow-sm border border-border">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-muted/30 border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-muted/30 border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-muted/30 border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Tell us about your project</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-muted/30 border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none text-foreground"
                            ></textarea>
                        </div>

                        <div className="flex items-start gap-3 pt-2">
                            <input
                                type="checkbox"
                                id="privacy"
                                required
                                className="mt-1 border-gray-300 rounded focus:ring-accent text-accent"
                            />
                            <label htmlFor="privacy" className="text-xs text-muted-foreground leading-snug">
                                I agree to the <Link href="/privacy" className="text-foreground hover:text-accent underline decoration-gray-300 underline-offset-4">Privacy Policy</Link> and consent to be contacted.
                            </label>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Submit Message'}
                            </button>
                            {status === 'error' && <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again.</p>}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
