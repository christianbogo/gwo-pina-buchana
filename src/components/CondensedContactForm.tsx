"use client";

import Link from "next/link";

export default function CondensedContactForm() {
    return (
        <section className="py-24 bg-muted border-t border-border/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Start the Conversation</h2>
                    <p className="text-muted-foreground">Ready to take the next step? Contact our team today.</p>
                </div>

                <div className="bg-background p-8 md:p-12 shadow-sm border border-border">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                                <input type="text" id="name" className="w-full bg-muted/30 border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                                <input type="email" id="email" className="w-full bg-muted/30 border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
                            <input type="tel" id="phone" className="w-full bg-muted/30 border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                            <textarea id="message" rows={4} className="w-full bg-muted/30 border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                        </div>

                        <div className="flex items-start gap-3 pt-2">
                            <input
                                type="checkbox"
                                id="privacy"
                                className="mt-1 border-gray-300 rounded focus:ring-accent text-accent"
                            />
                            <label htmlFor="privacy" className="text-xs text-muted-foreground leading-snug">
                                I agree to the <Link href="/privacy" className="text-foreground hover:text-accent underline decoration-gray-300 underline-offset-4">Privacy Policy</Link> and consent to be contacted.
                            </label>
                        </div>

                        <div className="pt-4">
                            <button
                                type="button"
                                className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Submit Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
