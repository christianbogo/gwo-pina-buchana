import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-foreground text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand / Contact */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl tracking-widest uppercase text-white">
                            Gwo Pina Buchana
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Luxury Real Estate Team<br />
                            Serving the finest neighborhoods.
                        </p>
                        <div className="pt-4 space-y-2 text-sm text-gray-400">
                            <p>123 Luxury Lane, Beverly Hills, CA 90210</p>
                            <p>
                                <a href="mailto:contact@gwopinabuchana.com" className="hover:text-accent transition-colors">
                                    contact@gwopinabuchana.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+13105550123" className="hover:text-accent transition-colors">
                                    +1 (310) 555-0123
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg tracking-wider text-white">Explore</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/properties" className="hover:text-accent transition-colors">Properties</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/search" className="hover:text-accent transition-colors">Home Search</Link></li>
                            <li><Link href="/blog" className="hover:text-accent transition-colors">Market Insights</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg tracking-wider text-white">Stay Connected</h4>
                        <p className="text-gray-400 text-sm">
                            Subscribe to our newsletter for exclusive listings and market updates.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white/10 border border-white/20 text-white px-4 py-2 w-full focus:outline-none focus:border-accent transition-colors text-sm"
                            />
                            <button
                                type="button"
                                className="bg-accent text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-white hover:text-foreground transition-all duration-300"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Gwo Pina Buchana. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
