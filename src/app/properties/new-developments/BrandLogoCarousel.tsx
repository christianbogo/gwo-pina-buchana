"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";

interface Brand {
    _id: string;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logo: any;
    link?: string;
}

export default function BrandLogoCarousel() {
    const [brands, setBrands] = useState<Brand[]>([]);

    useEffect(() => {
        const fetchBrands = async () => {
            const data = await client.fetch<Brand[]>(`*[_type == "brand"]`);
            setBrands(data);
        };
        fetchBrands();
    }, []);

    if (brands.length === 0) return null;

    // Duplicate list for seamless infinite scroll
    const marqueeBrands = [...brands, ...brands, ...brands];

    return (
        <section className="py-20 bg-muted overflow-hidden border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                    Success Stories
                </h3>
            </div>

            <div className="flex w-full">
                <motion.div
                    className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 60, // Adjust speed
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ width: "max-content" }}
                >
                    {marqueeBrands.map((brand, index) => {
                        const logoUrl = brand.logo ? urlForImage(brand.logo).url() : "";
                        if (!logoUrl) return null;

                        const content = (
                            <div className="relative w-32 h-16 md:w-48 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 dark:brightness-0 dark:invert dark:hover:invert-0 dark:hover:brightness-100 dark:hover:filter-none">
                                <Image
                                    src={logoUrl}
                                    alt={brand.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        );

                        return (
                            <div key={`${brand._id}-${index}`} className="flex-shrink-0">
                                {brand.link ? (
                                    <Link href={brand.link} target="_blank" rel="noopener noreferrer">
                                        {content}
                                    </Link>
                                ) : (
                                    content
                                )}
                            </div>
                        );
                    })}
                </motion.div>
                {/* Second duplicated motion div for seamless loop logic if needed, 
                    but x: -50% on a double-length list usually works if the list is long enough. 
                    Actually, simpler marquee approach:
                */}
            </div>
        </section>
    );
}
