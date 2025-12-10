import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="solid" />
            <main className="flex-grow pt-24 pb-12 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-full">
                        {/* Contact Info Side */}
                        <div className="flex flex-col justify-center space-y-12 py-12">
                            <div>
                                <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-8">Start the Conversation</h1>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                    Real estate is a journey, and every journey begins with a single step. Whether you are exploring the value of your current home, looking for unparalleled investment opportunities, or ready to find your dream residence in the Pacific Northwest, the Gwo Pina Buchanan team is here to guide you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Office</h3>
                                    <p className="text-xl text-foreground">123 Luxury Lane<br />Beverly Hills, CA 90210</p>
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Contact</h3>
                                    <p className="text-xl text-foreground mb-1">
                                        <a href="mailto:contact@gwopinabuchana.com" className="hover:text-accent transition-colors">contact@gwopinabuchana.com</a>
                                    </p>
                                    <p className="text-xl text-foreground">
                                        <a href="tel:+13105550123" className="hover:text-accent transition-colors">+1 (310) 555-0123</a>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-muted rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-accent hover:text-white transition-colors cursor-pointer" aria-label="Instagram">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-muted rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-accent hover:text-white transition-colors cursor-pointer" aria-label="Facebook">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-muted rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-accent hover:text-white transition-colors cursor-pointer" aria-label="LinkedIn">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-muted p-8 md:p-12 rounded-sm shadow-sm flex flex-col justify-center">
                            <h2 className="font-serif text-3xl text-foreground mb-8">Send a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                                        <input type="text" id="name" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                                        <input type="email" id="email" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
                                    <input type="tel" id="phone" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                                    <textarea id="message" rows={5} className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
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

                                <button
                                    type="button"
                                    className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
