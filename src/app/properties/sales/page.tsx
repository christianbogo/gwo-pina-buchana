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

interface NotableSalesPageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function NotableSalesPage({ searchParams }: NotableSalesPageProps) {


    // Pagination logic
    const resolvedParams = await searchParams;
    const pageParam = resolvedParams?.page;
    const pageString = Array.isArray(pageParam) ? pageParam[0] : pageParam;
    const page = pageString ? parseInt(pageString) : 1;
    const pageSize = 9; // Grid 3x3

    // Fetch ALL listings to sort in memory because price is a string
    const [allListings, pageAssets] = await Promise.all([
        client.fetch(`*[_type == "listing" && type == "notable"] {
            _id,
            title,
            subtitle,
            price,
            status,
            coverImage,
            renderOrder,
            slug
        }`),
        client.fetch(`*[_type == "pageAssets"][0]{ 
            notableSalesImage,
            teamContactImage
        }`)
    ]);

    // Custom Sort Function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sortedListings = allListings.sort((a: any, b: any) => {
        const priceA = a.price || "";
        const priceB = b.price || "";

        // Check for "Upon Request" or similar non-numeric high-priority strings
        const isUponRequestA = priceA.toLowerCase().includes("upon request");
        const isUponRequestB = priceB.toLowerCase().includes("upon request");

        if (isUponRequestA && !isUponRequestB) return -1; // A comes first
        if (!isUponRequestA && isUponRequestB) return 1;  // B comes first
        if (isUponRequestA && isUponRequestB) return 0;   // Keep relative order

        // Parse numbers: "$1,536,500" -> 1536500
        const valA = parseInt(priceA.replace(/[^0-9]/g, '')) || 0;
        const valB = parseInt(priceB.replace(/[^0-9]/g, '')) || 0;

        return valB - valA; // Descending order
    });

    const totalCount = sortedListings.length;
    const totalPages = Math.ceil(totalCount / pageSize);

    // Slice for current page
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const listings = sortedListings.slice(start, end);

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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-8">
                                {page > 1 ? (
                                    <Link
                                        href={`/properties/sales?page=${page - 1}`}
                                        className="uppercase tracking-widest text-xs font-bold border-b border-black dark:border-white pb-1 hover:text-accent hover:border-accent transition-colors"
                                    >
                                        Previous
                                    </Link>
                                ) : (
                                    <span className="uppercase tracking-widest text-xs font-bold text-gray-300 border-b border-transparent pb-1 cursor-not-allowed">
                                        Previous
                                    </span>
                                )}

                                <span className="text-sm text-gray-500">
                                    Page {page} of {totalPages}
                                </span>

                                {page < totalPages ? (
                                    <Link
                                        href={`/properties/sales?page=${page + 1}`}
                                        className="uppercase tracking-widest text-xs font-bold border-b border-black dark:border-white pb-1 hover:text-accent hover:border-accent transition-colors"
                                    >
                                        Next
                                    </Link>
                                ) : (
                                    <span className="uppercase tracking-widest text-xs font-bold text-gray-300 border-b border-transparent pb-1 cursor-not-allowed">
                                        Next
                                    </span>
                                )}
                            </div>
                        )}
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
