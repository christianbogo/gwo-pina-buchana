"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HomeHeroProps {
    videoUrl?: string | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    posterImage?: any; // Sanity image object
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HomeHero({ videoUrl, posterImage }: HomeHeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const slides = [
        {
            eyebrow: "Discover the Art of Pacific Northwest Real Estate with",
            title: "Gwo Piña Buchanan",
            subtitle: "Distinctive Properties | New Developments | Portfolio Advisory"
        },
        {
            eyebrow: "Realogics Sotheby’s International Realty",
            title: "Gwo Piña Buchanan",
            subtitle: "Top Producing Team | Over $350 Million Sold"
        },
        {
            eyebrow: "Exceptional Real Estate Representation",
            title: "Gwo Piña Buchanan",
            subtitle: "Trusted by Discerning Buyers, Sellers, and Builders"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setIsVisible(true);
            }, 500); // Wait for fade out
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="w-full h-full bg-gray-900/40 absolute z-10" />

                <iframe
                    src="https://iframe.mediadelivery.net/embed/567649/6e276b49-a58c-43a4-8483-0d299e6bf1d9?autoplay=true&loop=true&muted=true&preload=true&controls=0&playsinline=true&playlist=6e276b49-a58c-43a4-8483-0d299e6bf1d9"
                    loading="eager"
                    className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full object-cover"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; storage-access-by-user-activation"
                    allowFullScreen
                    style={{
                        border: 'none',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        objectFit: 'cover',
                        pointerEvents: 'none',
                    }}
                />
            </div>

            <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto w-full flex flex-col items-center gap-12">
                <div
                    className={`flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
                >
                    <p className="text-sm md:text-base tracking-[0.2em] uppercase mb-4 text-gray-200 drop-shadow-sm font-medium">
                        {slides[currentSlide].eyebrow}
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide drop-shadow-lg leading-tight">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-lg md:text-xl tracking-widest uppercase drop-shadow-md text-gray-100 max-w-3xl mx-auto">
                        {slides[currentSlide].subtitle}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row md:flex-nowrap gap-4 md:gap-12 justify-center items-center w-full max-w-7xl mx-auto">
                    {/* Left Button */}
                    <div className="flex flex-1 justify-center md:justify-end w-full md:w-auto">
                        <Link
                            href="/properties/exclusive"
                            className="inline-block border border-white bg-black/20 backdrop-blur-sm px-10 py-4 text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-foreground transition-all duration-300 min-w-[240px] text-center font-bold flex-shrink-0"
                        >
                            Exclusive Listings
                        </Link>
                    </div>

                    {/* Center Button */}
                    <Link
                        href="/properties/new-developments"
                        className="inline-block border border-white bg-black/20 backdrop-blur-sm px-10 py-4 text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-foreground transition-all duration-300 min-w-[240px] text-center font-bold flex-shrink-0"
                    >
                        New Developments
                    </Link>

                    {/* Right Button */}
                    <div className="flex flex-1 justify-center md:justify-start w-full md:w-auto">
                        <Link
                            href="/properties/sales"
                            className="inline-block border border-white bg-black/20 backdrop-blur-sm px-10 py-4 text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-foreground transition-all duration-300 min-w-[240px] text-center font-bold flex-shrink-0"
                        >
                            Notable Sales
                        </Link>
                    </div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsVisible(false);
                            setTimeout(() => {
                                setCurrentSlide(index);
                                setIsVisible(true);
                            }, 500);
                        }}
                        className={`h-1 transition-all duration-300 ${currentSlide === index ? "w-12 bg-white" : "w-6 bg-white/50 hover:bg-white/80"}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
