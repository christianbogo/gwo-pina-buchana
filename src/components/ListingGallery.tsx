"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface ListingGalleryProps {
    images: string[];
    title: string;
    status?: string;
}

export default function ListingGallery({ images, title, status }: ListingGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="relative w-full h-[80vh] min-h-[500px] bg-neutral-900 group">
            {/* Main Image */}
            <div className="relative w-full h-full cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        {images.length > 0 && (
                            <Image
                                src={images[currentIndex]}
                                alt={`${title} - Image ${currentIndex + 1}`}
                                fill
                                className="object-cover"
                                priority={currentIndex === 0}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Status Badge */}
            {status && (
                <div className="absolute top-8 left-8 sm:left-16 z-20">
                    <div className="bg-black text-white px-6 py-2 text-sm uppercase tracking-[0.2em] font-medium border border-white/20">
                        {status}
                    </div>
                </div>
            )}

            {/* Controls */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 sm:px-8">
                <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 opacity-0 group-hover:opacity-100"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 opacity-0 group-hover:opacity-100"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            {/* Counter */}
            <div className="absolute bottom-8 right-8 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 text-white text-xs uppercase tracking-widest rounded-full">
                {currentIndex + 1} / {images.length}
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button className="absolute top-8 right-8 text-white z-50">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <div className="relative w-full h-full max-w-7xl max-h-[85vh]">
                            {images.length > 0 && (
                                <Image
                                    src={images[currentIndex]}
                                    alt={`${title} - Zoomed`}
                                    fill
                                    className="object-contain"
                                />
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
