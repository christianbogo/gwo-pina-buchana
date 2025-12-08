"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GREY_PLACEHOLDER } from "@/lib/constants";

export default function ExclusiveListings() {
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

    const properties = [
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
            tag: "Sold"
        },
        {
            id: 5,
            title: "Carbon Beach Modern",
            location: "Malibu, CA",
            price: "$45,000,000",
            image: GREY_PLACEHOLDER,
            tag: "Sold"
        },
        {
            id: 6,
            title: "Hidden Hills Estate",
            location: "Hidden Hills, CA",
            price: "$15,200,000",
            image: GREY_PLACEHOLDER,
            tag: "New Listing"
        }
    ];

    const maxIndex = properties.length - itemsPerPage;

    const nextPage = () => {
        // Only advance if we haven't reached the end (or loop if desired, but sliding stops is cleaner)
        // To allow continuous sliding, we clamp or handle wrapping conceptually. 
        // For simple sliding, let's clamp.
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

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Exclusive Listings</h2>
                        <div className="w-24 h-1 bg-accent" />
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevPage}
                            className="p-3 border border-gray-200 hover:border-accent hover:text-accent transition-colors duration-300"
                            aria-label="Previous property"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextPage}
                            className="p-3 border border-gray-200 hover:border-accent hover:text-accent transition-colors duration-300"
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
                        {properties.map((property) => (
                            <div
                                key={property.id}
                                className="flex-shrink-0 px-4"
                                style={{ width: `${100 / itemsPerPage}%` }}
                            >
                                <div className="group cursor-pointer">
                                    <div className="relative h-[400px] md:h-[500px] overflow-hidden mb-6">
                                        <Image
                                            src={property.image}
                                            alt={property.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-wider font-medium">
                                            {property.tag}
                                        </div>
                                    </div>
                                    <h3 className="font-serif text-2xl mb-2 group-hover:text-accent transition-colors">{property.title}</h3>
                                    <p className="text-gray-500 text-sm mb-3 tracking-wide">{property.location}</p>
                                    <p className="text-foreground font-medium text-lg">{property.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/properties/exclusive"
                        className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-accent hover:border-accent transition-all duration-300"
                    >
                        Explore Exclusive Listings
                    </Link>
                </div>
            </div>
        </section>
    );
}
