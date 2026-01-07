import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 dark:bg-black text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand / Contact */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl tracking-widest uppercase text-white">
                            Gwo Piña Buchanan
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Luxury Real Estate Team<br />
                            Serving the finest neighborhoods.
                        </p>
                        <div className="pt-4 space-y-2 text-sm text-gray-400">
                            {/* Contact info removed per request to force form usage */}
                        </div>

                        {/* Social Icons */}
                        <div className="flex flex-col space-y-6 pt-4">
                            <a href="https://www.instagram.com/gwopinabuchanan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <Image
                                src="/images/RSIR-Horizontal-4.svg"
                                alt="Realogics Sotheby's International Realty"
                                width={180}
                                height={40}
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 md:col-start-3">
                        <h4 className="font-serif text-lg tracking-wider text-white">Explore</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/properties/exclusive" className="hover:text-accent transition-colors">Exclusive Listings</Link></li>
                            <li><Link href="/properties/new-developments" className="hover:text-accent transition-colors">New Developments</Link></li>
                            <li><Link href="/properties/sales" className="hover:text-accent transition-colors">Notable Sales</Link></li>
                            <li><Link href="/valuation" className="hover:text-accent transition-colors">Home Valuation</Link></li>
                            <li><Link href="/sothebys-advantage" className="hover:text-accent transition-colors">The Sotheby's Advantage</Link></li>
                            <li><Link href="/team" className="hover:text-accent transition-colors">Team</Link></li>
                            <li><Link href="/search" className="hover:text-accent transition-colors">Home Search</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Offices - New Section Added */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg tracking-wider text-white">Our Offices</h4>
                        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                            <div>
                                <p className="text-white font-medium mb-1">Bellevue</p>
                                <p>10237 Main Street</p>
                                <p>Bellevue, WA 98004</p>
                            </div>
                            <div>
                                <p className="text-white font-medium mb-1">Downtown Seattle</p>
                                <p>2715 1st Ave</p>
                                <p>Seattle, WA 98121</p>
                            </div>
                            <div>
                                <p className="text-white font-medium mb-1">Kirkland</p>
                                <p>15 Lake Street</p>
                                <p>Kirkland, WA 98033</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-start text-left md:items-center md:text-center">
                    <div className="max-w-4xl mx-auto space-y-4 text-[10px] text-gray-500 leading-relaxed mb-8">
                        <p>
                            Dehlan Gwo, Yael Piña, and Rachel Buchanan are licensed real estate brokers in Washington State and abide by equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to the accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting, or other professional advice outside the realm of real estate brokerage.
                        </p>
                        <p>
                            © 2025 Realogics Brokerage, LLC. All rights reserved. Sotheby’s International Realty® and the Sotheby’s International Realty Logo are service marks licensed to Sotheby’s International Realty Affiliates LLC and used with permission. Realogics Brokerage, LLC fully supports the principles of the Fair Housing Act and the Equal Opportunity Act. Each franchise is independently owned and operated. Any services or products provided by independently owned and operated franchisees are not provided by, affiliated with or related to Sotheby’s International Realty Affiliates LLC nor any of its affiliated companies. *Seller reserves the right to change product offering without notice. All information provided is deemed reliable but is not guaranteed and should be independently verified. <a href="https://www.rsir.com/dmca-notice/" className="hover:text-gray-400 transition-colors underline decoration-dotted">Please click here to review our Digital Millennium Copyright Act (&quot;DMCA&quot;) policy.</a>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center w-full text-xs text-gray-500">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <ThemeToggle forceDark={true} />
                            <p>&copy; {new Date().getFullYear()} Gwo Piña Buchanan. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
