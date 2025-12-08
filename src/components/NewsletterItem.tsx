"use client";

import Link from "next/link";

export default function NewsletterItem() {
    return (
        <section className="py-32 bg-neutral-900 dark:bg-slate-900 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-serif text-3xl md:text-5xl mb-6 tracking-wide">Elevate Your Real Estate IQ</h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join our exclusive community to receive off-market listings, market analysis, and design trends directly to your inbox.
                </p>

                <form className="max-w-xl mx-auto space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-transparent border-b border-gray-600 text-white placeholder-gray-500 px-0 py-3 w-full focus:outline-none focus:border-accent transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-transparent border-b border-gray-600 text-white placeholder-gray-500 px-0 py-3 w-full focus:outline-none focus:border-accent transition-colors"
                        />
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-4">
                        <input
                            type="checkbox"
                            id="privacy-main"
                            className="w-4 h-4 border-gray-600 rounded bg-transparent focus:ring-accent text-accent"
                        />
                        <label htmlFor="privacy-main" className="text-xs text-gray-500">
                            I agree to the <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>
                        </label>
                    </div>

                    <button
                        type="button"
                        className="bg-white text-black px-12 py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 font-bold mt-8"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
