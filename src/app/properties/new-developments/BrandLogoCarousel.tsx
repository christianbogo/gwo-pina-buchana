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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    darkModeLogo?: any;
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
        <section className="py-20 bg-background overflow-hidden border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                    Success Stories
                </h2>
                <div className="w-16 h-0.5 bg-accent mx-auto" />
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
                        const darkLogoUrl = brand.darkModeLogo ? urlForImage(brand.darkModeLogo).url() : null;

                        if (!logoUrl) return null;

                        const commonClasses = "relative w-32 h-16 md:w-48 md:h-24 transition-all duration-300 opacity-60 hover:opacity-100";
                        const standardFilter = "grayscale hover:grayscale-0";

                        let content;

                        if (darkLogoUrl) {
                            content = (
                                <>
                                    {/* Light Mode: Standard Logo */}
                                    <div className={`${commonClasses} ${standardFilter} block dark:hidden`}>
                                        <Image
                                            src={logoUrl}
                                            alt={brand.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    {/* Dark Mode: Dark Mode Logo (No Invert) */}
                                    <div className={`${commonClasses} ${standardFilter} hidden dark:block`}>
                                        <Image
                                            src={darkLogoUrl}
                                            alt={brand.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </>
                            );
                        } else {
                            // Legacy/Default Behavior: Invert Standard Logo in Dark Mode
                            content = (
                                <div className={`${commonClasses} ${standardFilter} dark:brightness-0 dark:invert dark:hover:invert-0 dark:hover:brightness-100 dark:hover:filter-none`}>
                                    <Image
                                        src={logoUrl}
                                        alt={brand.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            );
                        }

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
            </div>
        </section>
    );
}
