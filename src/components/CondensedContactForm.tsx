"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import Image from "next/image";

type FormVariant = 'default' | 'new-developments' | 'connect';

interface CondensedContactFormProps {
    title?: string;
    subtitle?: React.ReactNode;
    backgroundImage?: string;
    isTransparent?: boolean;
    variant?: FormVariant;
}

export default function CondensedContactForm({
    title,
    subtitle,
    backgroundImage,
    isTransparent = false,
    variant = 'default'
}: CondensedContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // Default values based on variant
    const defaultTitle = variant === 'new-developments'
        ? "Development Expertise. Proven Results."
        : variant === 'connect'
            ? "Start the Conversation"
            : "Elevate Your Real Estate IQ";

    const defaultSubtitle = variant === 'new-developments'
        ? (
            <>
                Whether you’re evaluating land, repositioning an asset, or preparing for market, we provide data-backed and insight-driven guidance from concept to close-out.
                <br /><br />
                Connect with our team to discuss your next project. All inquiries are confidential.
            </>
        )
        : variant === 'connect'
            ? "Ready to take the next step? Contact our team today."
            : "Elevate your real estate expertise with our exclusive newsletter—packed with expert perspectives, curated analyses, and market insights. Subscribe today and stay ahead in the property game.";

    const displayTitle = title || defaultTitle;
    const displaySubtitle = subtitle || defaultSubtitle;
    const showMessageField = variant !== 'default';
    const messageLabel = variant === 'new-developments' ? "Tell us About Your Project" : "Tell us about your Real Estate needs";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, variant }),
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
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </>
            )}
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`font-serif text-3xl md:text-4xl mb-4 ${backgroundImage ? 'text-white' : 'text-foreground'}`}>{displayTitle}</h2>
                    <div className={`text-lg leading-relaxed ${backgroundImage ? 'text-white/90' : 'text-muted-foreground'}`}>{displaySubtitle}</div>
                </div>

                <div className={`${isTransparent ? 'bg-black/05 border-white/10' : 'bg-background border-border'} p-8 md:p-12 shadow-sm border`}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className={`text-xs uppercase tracking-wider ${isTransparent ? 'text-gray-200' : 'text-gray-600 dark:text-gray-200'}`}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 focus:outline-none transition-colors ${isTransparent ? 'bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white' : 'bg-muted/30 border border-border focus:border-accent text-gray-800 dark:text-foreground placeholder:text-gray-500'}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className={`text-xs uppercase tracking-wider font-medium ${isTransparent ? 'text-gray-200' : 'text-gray-600 dark:text-gray-200'}`}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 focus:outline-none transition-colors ${isTransparent ? 'bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white' : 'bg-muted/30 border border-border focus:border-accent text-gray-800 dark:text-foreground placeholder:text-gray-500'}`}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className={`text-xs uppercase tracking-wider font-medium ${isTransparent ? 'text-gray-200' : 'text-gray-600 dark:text-gray-200'}`}>Phone (Optional)</label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 focus:outline-none transition-colors ${isTransparent ? 'bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white' : 'bg-muted/30 border border-border focus:border-accent text-gray-800 dark:text-foreground placeholder:text-gray-500'}`}
                            />
                        </div>

                        {showMessageField && (
                            <div className="space-y-2">
                                <label htmlFor="message" className={`text-xs uppercase tracking-wider ${isTransparent ? 'text-gray-200' : 'text-gray-600 dark:text-gray-200'}`}>{messageLabel}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 focus:outline-none transition-colors resize-none ${isTransparent ? 'bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white' : 'bg-muted/30 border border-border focus:border-accent text-foreground'}`}
                                ></textarea>
                            </div>
                        )}

                        <div className="flex items-start gap-3 pt-2">
                            <input
                                type="checkbox"
                                id="privacy"
                                required
                                className="mt-1 border-gray-300 rounded focus:ring-accent text-accent"
                            />
                            <label htmlFor="privacy" className={`text-xs leading-snug ${isTransparent ? 'text-gray-300' : 'text-muted-foreground'}`}>
                                I agree to the <Link href="/privacy" className={`${isTransparent ? 'text-white' : 'text-foreground'} hover:text-accent underline decoration-gray-300 underline-offset-4`}>Privacy Policy</Link> and consent to be contacted.
                            </label>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                className={`w-full px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed ${isTransparent ? 'bg-white text-black hover:bg-gray-200' : 'bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-accent dark:hover:bg-gray-200'}`}
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
