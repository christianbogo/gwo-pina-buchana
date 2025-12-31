import PageHero from "@/components/PageHero";
import ListingCard from "@/components/ListingCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { GREY_PLACEHOLDER } from "@/lib/constants";
import CondensedContactForm from "@/components/CondensedContactForm";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export default async function NotableSalesPage() {


    // Fetch sorting by renderOrder (pinned > default) then price
    const [listings, pageAssets] = await Promise.all([
        client.fetch(`*[_type == "listing" && type == "notable"] {
            _id,
            title,
            subtitle,
            price,
            status,
            coverImage,
            renderOrder,
            slug
        } | order(renderOrder desc, price desc)`),
        client.fetch(`*[_type == "pageAssets"][0]{ 
            notableSalesImage,
            teamContactImage
        }`)
    ]);

    const heroImage = pageAssets?.notableSalesImage
        ? urlForImage(pageAssets.notableSalesImage).url()
        : GREY_PLACEHOLDER;

    const contactImage = pageAssets?.teamContactImage
        ? urlForImage(pageAssets.teamContactImage).url()
        : undefined;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <PageHero
                    image={heroImage}
                    title="Notable Sales"
                />

                <section className="py-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {listings.map((listing: any) => (
                                <ListingCard
                                    key={listing._id}
                                    image={listing.coverImage ? urlForImage(listing.coverImage).url() : GREY_PLACEHOLDER}
                                    title={listing.title}
                                    location={listing.subtitle}
                                    price={listing.price}
                                    status={listing.status}
                                    link={`/properties/listings/${listing.slug.current}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Valuation Invite */}
                <section className="py-24 bg-neutral-900 dark:bg-neutral-800 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src={GREY_PLACEHOLDER}
                            alt="Valuation Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <h2 className="font-serif text-3xl md:text-5xl mb-6 text-white">Curious about your home's value?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                            Our team provides comprehensive market analysis and personalized valuations to help you understand the true potential of your property in today's market.
                        </p>
                        <Link
                            href="/valuation"
                            className="inline-block bg-white text-black px-10 py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 font-bold"
                        >
                            Request Valuation
                        </Link>
                    </div>
                </section>
                <CondensedContactForm backgroundImage={contactImage} />
            </main>
            <Footer />
        </div >
    );
}
