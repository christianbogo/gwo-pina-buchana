import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="solid" />
            <main className="flex-grow pt-24 pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-full">
                        {/* Contact Info Side */}
                        <div className="flex flex-col justify-center space-y-12 py-12">
                            <div>
                                <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-8">Let's Connect</h1>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                                    Whether you're looking to buy, sell, or simply have a question about the market, our team is here to assist you with the highest level of service and discretion.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Office</h3>
                                    <p className="text-xl text-foreground">123 Luxury Lane<br />Beverly Hills, CA 90210</p>
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Contact</h3>
                                    <p className="text-xl text-foreground mb-1">
                                        <a href="mailto:contact@gwopinabuchana.com" className="hover:text-accent transition-colors">contact@gwopinabuchana.com</a>
                                    </p>
                                    <p className="text-xl text-foreground">
                                        <a href="tel:+13105550123" className="hover:text-accent transition-colors">+1 (310) 555-0123</a>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        {/* Social placeholders */}
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-colors cursor-pointer">IG</div>
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-colors cursor-pointer">FB</div>
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-colors cursor-pointer">LI</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-gray-50 p-8 md:p-12 rounded-sm shadow-sm flex flex-col justify-center">
                            <h2 className="font-serif text-3xl text-foreground mb-8">Send a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-500">Name</label>
                                        <input type="text" id="name" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-500">Email</label>
                                        <input type="email" id="email" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-wider text-gray-500">Phone</label>
                                    <input type="tel" id="phone" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-gray-500">Message</label>
                                    <textarea id="message" rows={5} className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                                </div>

                                <div className="flex items-start gap-3 pt-2">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        className="mt-1 border-gray-300 rounded focus:ring-accent text-accent"
                                    />
                                    <label htmlFor="privacy" className="text-xs text-gray-500 leading-snug">
                                        I agree to the <Link href="/privacy" className="text-foreground hover:text-accent underline decoration-gray-300 underline-offset-4">Privacy Policy</Link> and consent to be contacted.
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-foreground text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
