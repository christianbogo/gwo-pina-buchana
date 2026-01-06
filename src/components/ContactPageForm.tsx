"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ContactPageFormProps {
    contactImage: string | null;
}

export default function ContactPageForm({ contactImage }: ContactPageFormProps) {
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
        <div className="relative bg-muted p-8 md:p-12 rounded-sm shadow-sm flex flex-col justify-center overflow-hidden h-full">
            {/* Background Image */}
            {contactImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={contactImage}
                        alt="Contact Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            )}

            <div className="relative z-10 w-full">
                <h2 className={`font-serif text-3xl mb-8 ${contactImage ? 'text-white' : 'text-foreground'}`}>Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className={`text-xs uppercase tracking-wider ${contactImage ? 'text-gray-300' : 'text-muted-foreground'}`}>Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full border px-4 py-3 focus:outline-none focus:border-accent transition-colors ${contactImage ? 'bg-black/40 border-white/20 text-white placeholder:text-gray-500' : 'bg-background border-border text-foreground'}`}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className={`text-xs uppercase tracking-wider ${contactImage ? 'text-gray-300' : 'text-muted-foreground'}`}>Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full border px-4 py-3 focus:outline-none focus:border-accent transition-colors ${contactImage ? 'bg-black/40 border-white/20 text-white placeholder:text-gray-500' : 'bg-background border-border text-foreground'}`}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className={`text-xs uppercase tracking-wider ${contactImage ? 'text-gray-300' : 'text-muted-foreground'}`}>Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full border px-4 py-3 focus:outline-none focus:border-accent transition-colors ${contactImage ? 'bg-black/40 border-white/20 text-white placeholder:text-gray-500' : 'bg-background border-border text-foreground'}`}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className={`text-xs uppercase tracking-wider ${contactImage ? 'text-gray-300' : 'text-muted-foreground'}`}>Tell us about your project</label>
                        <textarea
                            id="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full border px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none ${contactImage ? 'bg-black/40 border-white/20 text-white placeholder:text-gray-500' : 'bg-background border-border text-foreground'}`}
                        ></textarea>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                        <input
                            type="checkbox"
                            id="privacy"
                            required
                            className="mt-1 border-gray-300 rounded focus:ring-accent text-accent"
                        />
                        <label htmlFor="privacy" className={`text-xs leading-snug ${contactImage ? 'text-gray-300' : 'text-muted-foreground'}`}>
                            I agree to the <Link href="/privacy" className={`underline decoration-gray-300 underline-offset-4 ${contactImage ? 'text-white hover:text-accent' : 'text-foreground hover:text-accent'}`}>Privacy Policy</Link> and consent to be contacted.
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting' || status === 'success'}
                        className={`w-full px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed ${contactImage ? 'bg-white text-black hover:bg-accent hover:text-white' : 'bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white'}`}
                    >
                        {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Submit Message'}
                    </button>
                    {status === 'error' && <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again.</p>}
                </form>
            </div>
        </div>
    );
}
