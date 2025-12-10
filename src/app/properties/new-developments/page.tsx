import PageHero from "@/components/PageHero";
import ListingCard from "@/components/ListingCard";
import AgentContact from "@/components/AgentContact";
import MortgageCalculator from "@/components/MortgageCalculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GREY_PLACEHOLDER } from "@/lib/constants";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export default async function ComingSoonPage() {
    const pageAssets = await client.fetch(`*[_type == "pageAssets"][0]{ comingSoonImage }`);
    const heroImage = pageAssets?.comingSoonImage
        ? urlForImage(pageAssets.comingSoonImage).url()
        : GREY_PLACEHOLDER;

    const listings = [
        {
            id: 1,
            title: "Infinity Shore Club Residences",
            location: "Alki Beach, Seattle",
            price: "Peerless Beachfront Luxury",
            image: GREY_PLACEHOLDER,
            tag: "New Development"
        },
        {
            id: 2,
            title: "Graystone",
            location: "First Hill, Seattle",
            price: "A Modern Classic",
            image: GREY_PLACEHOLDER,
            tag: "New Development"
        },
        {
            id: 3,
            title: "GIS Plaza Bellevue",
            location: "Downtown Bellevue",
            price: "Innovation at Intimate Scale",
            image: GREY_PLACEHOLDER,
            tag: "New Development"
        },
        {
            id: 4,
            title: "Wallingford 9",
            location: "Wallingford, Seattle",
            price: "Smart Urban Density",
            image: GREY_PLACEHOLDER,
            tag: "New Development"
        },
        {
            id: 5,
            title: "Rainier Chalet Condominiums",
            location: "Enumclaw, WA",
            price: "Basecamp for Adventure",
            image: GREY_PLACEHOLDER,
            tag: "New Development"
        },
        {
            id: 6,
            title: "Crescent Ridge",
            location: "Quincy, WA",
            price: "Sun-Soaked Sanctuary",
            image: GREY_PLACEHOLDER,
            tag: "New Development"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <PageHero
                    image={heroImage}
                    title='The "New Pacific Northwest" Development Portfolio'
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

                <section className="py-24 bg-muted">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Mortgage Calculator</h2>
                            <div className="w-24 h-1 bg-accent mx-auto" />
                        </div>
                        <MortgageCalculator />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
