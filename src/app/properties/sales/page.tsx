import PageHero from "@/components/PageHero";
import ListingCard from "@/components/ListingCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function NotableSalesPage() {
    const listings = [
        {
            id: 1,
            title: "Carbon Beach Modern",
            location: "Malibu, CA",
            price: "$45,000,000",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
            tag: "Sold"
        },
        {
            id: 2,
            title: "Hidden Hills Estate",
            location: "Hidden Hills, CA",
            price: "$15,200,000",
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1000&auto=format&fit=crop",
            tag: "Sold"
        },
        {
            id: 3,
            title: "Brentwood Oasis",
            location: "Brentwood, CA",
            price: "$10,500,000",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
            tag: "Sold"
        },
        {
            id: 4,
            title: "Pacific Palisades Gem",
            location: "Pacific Palisades, CA",
            price: "$8,250,000",
            image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000&auto=format&fit=crop",
            tag: "Sold"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20">
                <PageHero
                    image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop"
                    title="Notable Sales"
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

                {/* Valuation Invite */}
                <section className="py-24 bg-foreground text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
                            alt="Valuation Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <h2 className="font-serif text-3xl md:text-5xl mb-6">Curious about your home's value?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                            Our team provides comprehensive market analysis and personalized valuations to help you understand the true potential of your property in today's market.
                        </p>
                        <Link
                            href="/valuation"
                            className="inline-block bg-white text-foreground px-10 py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 font-bold"
                        >
                            Request Valuation
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
