import PageHero from "@/components/PageHero";
import ListingCard from "@/components/ListingCard";
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
        client.fetch(`*[_type == "pageAssets"][0]{ 
            exclusiveListingsImage,
            teamContactImage
        }`)
    ]);

    const heroImage = pageAssets?.exclusiveListingsImage
        ? urlForImage(pageAssets.exclusiveListingsImage).url()
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
                    title="Exclusive Listings"
                />

                <section className="py-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {listings.length > 0 ? (
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
                        ) : (
                            <div className="text-center py-20">
                                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                                    Currently, we do not have any exclusive listings available.
                                </h3>
                                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
                                    Please explore our collection of new developments or view our notable past sales.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <a
                                        href="/properties/new-developments"
                                        className="inline-block border border-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
                                    >
                                        Explore New Developments
                                    </a>
                                    <a
                                        href="/properties/sales"
                                        className="inline-block bg-foreground text-background border border-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-background hover:text-foreground transition-all duration-300"
                                    >
                                        View Notable Sales
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </section>


                <CondensedContactForm backgroundImage={contactImage} />
            </main>
            <Footer />
        </div >
    );
}
