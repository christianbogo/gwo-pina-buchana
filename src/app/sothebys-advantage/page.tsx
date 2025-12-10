import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { GREY_PLACEHOLDER } from "@/lib/constants";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export default async function SothebysAdvantagePage() {
    const pageAssets = await client.fetch(`*[_type == "pageAssets"][0]{ sothebysAdvantageImage }`);
    const heroImage = pageAssets?.sothebysAdvantageImage
        ? urlForImage(pageAssets.sothebysAdvantageImage).url()
        : GREY_PLACEHOLDER;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Hero */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full bg-gray-900/40 absolute z-10" />
                        <Image
                            src={heroImage}
                            alt="Luxury Lifestyle"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative z-20 text-center text-white px-4">
                        <h1 className="font-serif text-4xl md:text-6xl mb-4 tracking-wide">
                            Unrivaled Marketing. Unlimited Reach.
                        </h1>
                        <p className="text-lg md:text-xl tracking-widest uppercase">
                            Why the Brand Matters in the "New Pacific Northwest."
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-24 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-headings:font-serif">
                        <h2 className="text-center font-serif text-3xl md:text-4xl text-foreground mb-12">
                            A Legacy of Excellence
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            When you list your home with Gwo Pina Buchanan, you are not just hiring a team; you are activating a global infrastructure. The "New Pacific Northwest" is an international destination, and to achieve the highest value for your property, you must reach beyond the local market.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Realogics Sotheby’s International Realty (RSIR) provides the platform to do exactly that. We don't just wait for buyers to find us; we actively push your property to a network of high-net-worth individuals who trust the Sotheby's name.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
                            <div className="text-center p-8 bg-muted">
                                <h3 className="font-serif text-2xl mb-4">26,500+</h3>
                                <p className="text-sm text-gray-500">
                                    Sales Associates<br />across 1,115+ Offices
                                </p>
                            </div>
                            <div className="text-center p-8 bg-muted dark:bg-card">
                                <h3 className="font-serif text-2xl mb-4">$143 Billion</h3>
                                <p className="text-sm text-gray-500">
                                    In Global Sales Volume (Annual)
                                </p>
                            </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            When you list with Gwo Pina Buchana, your home is presented to a highly qualified global audience through exclusive channels and proprietary marketing relationships.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
