import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export default async function SothebysAdvantagePage() {
    const pageAssets = await client.fetch(`*[_type == "pageAssets"][0]{ sothebysAdvantageImage }`);
    const heroImage = pageAssets?.sothebysAdvantageImage
        ? urlForImage(pageAssets.sothebysAdvantageImage).url()
        : "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop";

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
                            The Sotheby's Advantage
                        </h1>
                        <p className="text-lg md:text-xl tracking-widest uppercase">
                            Unrivaled Access. Unmatched Prestige.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-headings:font-serif">
                        <h2 className="text-center font-serif text-3xl md:text-4xl text-foreground mb-12">
                            A Legacy of Excellence
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            For centuries, the Sotheby’s name has been synonymous with the exceptional. A tradition of continued excellence, built on a foundation of integrity and expertise, defines the Sotheby’s International Realty® brand.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our affiliation with Sotheby’s International Realty provides our clients with exclusive access to a global network of real estate professionals, innovative marketing tools, and a qualified audience of international buyers.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
                            <div className="text-center p-8 bg-gray-50">
                                <h3 className="font-serif text-2xl mb-4">Global Network</h3>
                                <p className="text-sm text-gray-500">
                                    Connecting the finest independent real estate companies to the most prestigious clientele in the world.
                                </p>
                            </div>
                            <div className="text-center p-8 bg-gray-50">
                                <h3 className="font-serif text-2xl mb-4">Brand Heritage</h3>
                                <p className="text-sm text-gray-500">
                                    Distinguished by a commitment to art, culture, and high standards of service.
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            When you list with Gwo Pina Buchana, your home is presented to a highly qualified global audience through exclusive channels and proprietary marketing relationships.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
