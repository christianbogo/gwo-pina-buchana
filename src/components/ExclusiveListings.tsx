"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GREY_PLACEHOLDER } from "@/lib/constants";

interface ListingItem {
    id: string;
    title: string;
    location: string;
    price: string;
    image: string;
    tag: string;
    slug: string;
}

interface ExclusiveListingsProps {
    listings: ListingItem[];
    title?: string;
    link?: string;
}

export default function ExclusiveListings({
    listings = [],
    title = "Exclusive Listings",
    link = "/properties/exclusive"
}: ExclusiveListingsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Responsive itemsPerPage logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        // Set initial
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, listings.length - itemsPerPage);

    const nextPage = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setCurrentIndex(0); // Wrap to start
        }
    };

    const prevPage = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        } else {
            setCurrentIndex(maxIndex); // Wrap to end
        }
    };

    if (listings.length === 0) {
        return null;
    }

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Vertically Centered Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-16 gap-6">
                    <div>
                        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">{title}</h2>
                        <div className="w-24 h-1 bg-accent" />
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevPage}
                            className="p-3 border border-border hover:border-accent hover:text-accent transition-colors duration-300"
                            aria-label="Previous property"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextPage}
                            className="p-3 border border-border hover:border-accent hover:text-accent transition-colors duration-300"
                            aria-label="Next property"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                    >
                        {listings.map((property) => (
                            <div
                                key={property.id}
                                className="flex-shrink-0 px-4"
                                style={{ width: `${100 / itemsPerPage}%` }}
                            >
                                <Link href={`/properties/listings/${property.slug}`} className="block group cursor-pointer">
                                    <div className="relative h-[400px] md:h-[500px] overflow-hidden mb-6">
                                        <Image
                                            src={property.image}
                                            alt={property.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-wider font-medium">
                                            {property.tag}
                                        </div>
                                    </div>
                                    <h3 className="font-serif text-2xl mb-2 group-hover:text-accent transition-colors">{property.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-3 tracking-wide">{property.location}</p>
                                    <p className="text-foreground font-medium text-lg">{property.price}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link
                        href={link}
                        className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-accent hover:border-accent transition-all duration-300"
                    >
                        View All {title}
                    </Link>
                </div>
            </div>
        </section>
    );
}
