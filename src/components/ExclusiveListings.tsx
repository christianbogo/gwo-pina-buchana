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
    const [isDesktop, setIsDesktop] = useState(false);

    // Responsive itemsPerPage logic
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsDesktop(width >= 768);

            if (width < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

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
        <section className="py-24 bg-background relative overflow-hidden group">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Title */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                    <div>
                        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">{title}</h2>
                        <div className="w-24 h-1 bg-accent" />
                    </div>
                </div>

                <div className="relative">
                    {/* Desktop Arrows - Centered Vertically */}
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 pointer-events-none">
                        <div className="flex justify-between items-center w-full px-2">
                            <button
                                onClick={prevPage}
                                className="pointer-events-auto p-4 bg-background/80 hover:bg-background border border-border shadow-lg rounded-full text-foreground hover:text-accent transition-all duration-300 backdrop-blur-sm -ml-6 lg:-ml-12"
                                aria-label="Previous property"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextPage}
                                className="pointer-events-auto p-4 bg-background/80 hover:bg-background border border-border shadow-lg rounded-full text-foreground hover:text-accent transition-all duration-300 backdrop-blur-sm -mr-6 lg:-mr-12"
                                aria-label="Next property"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="overflow-hidden md:overflow-hidden">
                        {/* Mobile: Native Scroll, Desktop: Transform */}
                        <div
                            className="flex md:transition-transform md:duration-700 md:ease-in-out gap-4 md:gap-0 overflow-x-auto md:overflow-visible snap-x md:snap-none scrollbar-hide pb-4 md:pb-0"
                            style={{
                                // Only apply transform on desktop (md)
                                transform: isDesktop ? `translateX(-${currentIndex * (100 / itemsPerPage)}%)` : 'none'
                            }}
                        >
                            {listings.map((property) => (
                                <div
                                    key={property.id}
                                    className="flex-shrink-0 w-[85vw] md:w-full md:px-4 snap-center first:pl-4 last:pr-4 md:first:pl-4 md:last:pr-4"
                                    style={{
                                        width: isDesktop ? `${100 / itemsPerPage}%` : '85vw'
                                    }}
                                >
                                    <Link href={`/properties/listings/${property.slug}`} className="block group/card cursor-pointer h-full">
                                        <div className="relative h-[400px] md:h-[500px] overflow-hidden mb-6">
                                            <Image
                                                src={property.image}
                                                alt={property.title}
                                                fill
                                                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                            />
                                            <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-wider font-medium">
                                                {property.tag}
                                            </div>
                                        </div>
                                        <h3 className="font-serif text-2xl mb-2 group-hover/card:text-accent transition-colors">{property.title}</h3>
                                        <p className="text-muted-foreground text-sm mb-3 tracking-wide">{property.location}</p>
                                        <p className="text-foreground font-medium text-lg">{property.price}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 md:mt-16">
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
