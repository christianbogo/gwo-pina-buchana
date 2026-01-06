import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export default async function ContactPage() {
    const pageAssets = await client.fetch(`*[_type == "pageAssets"][0]{ 
        teamContactImage,
        contactPageFormImage
    }`);

    // Default to teamContactImage if contactPageFormImage is not set
    const contactImage = pageAssets?.contactPageFormImage
        ? urlForImage(pageAssets.contactPageFormImage).url()
        : pageAssets?.teamContactImage
            ? urlForImage(pageAssets.teamContactImage).url()
            : null;

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
                                    Real estate is a journey, and every journey begins with a single step. Whether you are exploring the value of your current home, looking for unparalleled investment opportunities, or ready to find your dream residence in the Pacific Northwest, the Gwo Piña Buchanan team is here to guide you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Our Offices</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-foreground text-lg font-serif">Bellevue</p>
                                            <p className="text-muted-foreground">10237 Main Street<br />Bellevue, WA 98004</p>
                                        </div>
                                        <div>
                                            <p className="text-foreground text-lg font-serif">Downtown Seattle</p>
                                            <p className="text-muted-foreground">2715 1st Ave<br />Seattle, WA 98121</p>
                                        </div>
                                        <div>
                                            <p className="text-foreground text-lg font-serif">Kirkland</p>
                                            <p className="text-muted-foreground">15 Lake Street<br />Kirkland, WA 98033</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a href="https://www.instagram.com/gwopinabuchanan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-muted rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-accent hover:text-white transition-colors cursor-pointer" aria-label="Instagram">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="relative bg-muted p-8 md:p-12 rounded-sm shadow-sm flex flex-col justify-center overflow-hidden">
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

                            <div className="relative z-10">
                                <h2 className={`font-serif text-3xl mb-8 ${contactImage ? 'text-white' : 'text-foreground'}`}>Send a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className={`text-xs uppercase tracking-wider ${contactImage ? 'text-gray-300' : 'text-muted-foreground'}`}>Name</label>
                                            <input type="text" id="name" className={`w-full border px-4 py-3 focus:outline-none focus:border-accent transition-colors ${contactImage ? 'bg-black/40 border-white/20 text-white placeholder:text-gray-500' : 'bg-background border-border text-foreground'}`} />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className={`text-xs uppercase tracking-wider ${contactImage ? 'text-gray-300' : 'text-muted-foreground'}`}>Email</label>
                                            <input type="email" id="email" className={`w-full border px-4 py-3 focus:outline-none focus:border-accent transition-colors ${contactImage ? 'bg-black/40 border-white/20 text-white placeholder:text-gray-500' : 'bg-background border-border text-foreground'}`} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className={`text-xs uppercase tracking-wider ${contactImage ? 'text-gray-300' : 'text-muted-foreground'}`}>Phone</label>
                                        <input type="tel" id="phone" className={`w-full border px-4 py-3 focus:outline-none focus:border-accent transition-colors ${contactImage ? 'bg-black/40 border-white/20 text-white placeholder:text-gray-500' : 'bg-background border-border text-foreground'}`} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className={`text-xs uppercase tracking-wider ${contactImage ? 'text-gray-300' : 'text-muted-foreground'}`}>Tell us about your project</label>
                                        <textarea id="message" rows={5} className={`w-full border px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none ${contactImage ? 'bg-black/40 border-white/20 text-white placeholder:text-gray-500' : 'bg-background border-border text-foreground'}`}></textarea>
                                    </div>

                                    <div className="flex items-start gap-3 pt-2">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            className="mt-1 border-gray-300 rounded focus:ring-accent text-accent"
                                        />
                                        <label htmlFor="privacy" className={`text-xs leading-snug ${contactImage ? 'text-gray-300' : 'text-muted-foreground'}`}>
                                            I agree to the <Link href="/privacy" className={`underline decoration-gray-300 underline-offset-4 ${contactImage ? 'text-white hover:text-accent' : 'text-foreground hover:text-accent'}`}>Privacy Policy</Link> and consent to be contacted.
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className={`w-full px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${contactImage ? 'bg-white text-black hover:bg-accent hover:text-white' : 'bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white'}`}
                                    >
                                        Submit Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

