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
    const pageAssets = await client.fetch(`*[_type == "pageAssets"][0]{ exclusiveListingsImage }`);
    const heroImage = pageAssets?.exclusiveListingsImage
        ? urlForImage(pageAssets.exclusiveListingsImage).url()
        : GREY_PLACEHOLDER;

    const listings = [
        {
            id: 1,
            title: "123 Beverly Park",
            location: "Beverly Hills, CA",
            price: "$12,500,000",
            image: GREY_PLACEHOLDER,
            tag: "For Sale"
        },
        {
            id: 2,
            title: "456 Bel Air Road",
            location: "Bel Air, CA",
            price: "$28,000,000",
            image: GREY_PLACEHOLDER,
            tag: "For Sale"
        },
        {
            id: 3,
            title: "202 Trousdale Estates",
            location: "Beverly Hills, CA",
            price: "$18,500,000",
            image: GREY_PLACEHOLDER,
            tag: "For Sale"
        },
        {
            id: 4,
            title: "Sunset Plaza Estate",
            location: "Hollywood Hills, CA",
            price: "$14,950,000",
            image: GREY_PLACEHOLDER,
            tag: "New Listing"
        }

    ];

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
                            {listings.map((listing) => (
                                <ListingCard
                                    key={listing.id}
                                    image={listing.image}
                                    title={listing.title}
                                    location={listing.location}
                                    price={listing.price}
                                    status={listing.tag}
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
