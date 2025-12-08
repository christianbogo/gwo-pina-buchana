"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { GREY_PLACEHOLDER } from "@/lib/constants";

interface HomeHeroProps {
    videoUrl?: string | null;
    posterImage?: any; // Sanity image object
}

export default function HomeHero({ videoUrl, posterImage }: HomeHeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const slides = [
        {
            title: "Experience the Exceptional",
            subtitle: "Luxury Real Estate in Los Angeles"
        },
        {
            title: "Global Reach, Local Expertise",
            subtitle: "Connecting you to the world's finest properties"
        },
        {
            title: "Your Dream, Our Mission",
            subtitle: "Personalized service for the discerning client"
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
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gray-900/40 absolute z-10" />

                {videoUrl ? (
                    <video
                        className="w-full h-full object-cover"
                        src={videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={posterImage ? urlForImage(posterImage).url() : GREY_PLACEHOLDER}
                    />
                ) : (
                    <Image
                        src={posterImage ? urlForImage(posterImage).url() : GREY_PLACEHOLDER}
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                )}
            </div>

            <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto w-full flex flex-col items-center gap-12">
                <div
                    className={`flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
                >
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wide drop-shadow-lg">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-lg md:text-xl tracking-widest uppercase drop-shadow-md">
                        {slides[currentSlide].subtitle}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full">
                    <Link
                        href="/properties/exclusive"
                        className="inline-block border border-white bg-black/20 backdrop-blur-sm px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-foreground transition-all duration-300 w-auto min-w-[200px] md:w-64 text-center"
                    >
                        Exclusive Listings
                    </Link>
                    <Link
                        href="/properties/sales"
                        className="inline-block border border-white bg-black/20 backdrop-blur-sm px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-foreground transition-all duration-300 w-auto min-w-[200px] md:w-64 text-center"
                    >
                        Notable Sales
                    </Link>
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
