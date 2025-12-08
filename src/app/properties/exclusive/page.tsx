import PageHero from "@/components/PageHero";
import ListingCard from "@/components/ListingCard";
import AgentContact from "@/components/AgentContact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export default async function ExclusiveListingsPage() {
    const pageAssets = await client.fetch(`*[_type == "pageAssets"][0]{ exclusiveListingsImage }`);
    const heroImage = pageAssets?.exclusiveListingsImage
        ? urlForImage(pageAssets.exclusiveListingsImage).url()
        : "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop";

    const listings = [
        {
            id: 1,
            title: "123 Beverly Park",
            location: "Beverly Hills, CA",
            price: "$12,500,000",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
            tag: "For Sale"
        },
        {
            id: 2,
            title: "456 Bel Air Road",
            location: "Bel Air, CA",
            price: "$28,000,000",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
            tag: "For Sale"
        },
        {
            id: 3,
            title: "202 Trousdale Estates",
            location: "Beverly Hills, CA",
            price: "$18,500,000",
            image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000&auto=format&fit=crop",
            tag: "For Sale"
        },
        {
            id: 4,
            title: "Sunset Plaza Estate",
            location: "Hollywood Hills, CA",
            price: "$14,950,000",
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop",
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

                <section className="py-24 bg-white">
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
            </main>
            <Footer />
        </div>
    );
}
