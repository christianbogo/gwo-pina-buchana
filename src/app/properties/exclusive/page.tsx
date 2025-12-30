import PageHero from "@/components/PageHero";
import ListingCard from "@/components/ListingCard";
import AgentContact from "@/components/AgentContact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GREY_PLACEHOLDER } from "@/lib/constants";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import CondensedContactForm from "@/components/CondensedContactForm";

export default async function ExclusiveListingsPage() {


    // Fetch sorting by renderOrder (pinned > default) then price
    const [listings, pageAssets] = await Promise.all([
        client.fetch(`*[_type == "listing" && type == "exclusive"] {
            _id,
            title,
            subtitle,
            price,
            status,
            coverImage,
            renderOrder,
            slug
        } | order(renderOrder desc, price desc)`),
        client.fetch(`*[_type == "pageAssets"][0]{ exclusiveListingsImage }`)
    ]);

    const heroImage = pageAssets?.exclusiveListingsImage
        ? urlForImage(pageAssets.exclusiveListingsImage).url()
        : GREY_PLACEHOLDER;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <PageHero
                    image={heroImage}
                    title="Exclusive Listings"
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

                <AgentContact />
                <CondensedContactForm />
            </main>
            <Footer />
        </div>
    );
}
