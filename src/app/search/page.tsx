import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export default async function NeighborhoodsPage() {
    const pageAssets = await client.fetch(`* [_type == "pageAssets"][0]{ neighborhoodImages } `);
    const sanityImages = pageAssets?.neighborhoodImages || [];

    const getNeighborhoodImage = (slug: string, defaultImage: string) => {
        const found = sanityImages.find((n: any) => n.slug?.current === slug);
        return found?.image ? urlForImage(found.image).url() : defaultImage;
    };

    const neighborhoodGroups = [
        {
            name: "Downtown Seattle",
            slug: "downtown-seattle",
            image: getNeighborhoodImage("downtown-seattle", "https://images.unsplash.com/photo-1444723121867-26b5d63e9d78?q=80&w=1000&auto=format&fit=crop"),
            desc: "Urban living at its finest with luxury condos and penthouses."
        },
        {
            name: "Madison Park - Washington Park",
            slug: "madison-park-washington-park",
            image: getNeighborhoodImage("madison-park-washington-park", "https://images.unsplash.com/photo-1583009949673-db0f01d7e297?q=80&w=1000&auto=format&fit=crop"),
            desc: "Historic charm, lush greenery, and stunning lake views."
        },
        {
            name: "Laurelhurst - Windermere",
            slug: "laurelhurst-windermere",
            image: getNeighborhoodImage("laurelhurst-windermere", "https://images.unsplash.com/photo-1599809275372-b40c7e9379d4?q=80&w=1000&auto=format&fit=crop"),
            desc: "Exclusive waterfront communities with private beach clubs."
        },
        {
            name: "West Seattle",
            slug: "west-seattle",
            image: getNeighborhoodImage("west-seattle", "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1000&auto=format&fit=crop"),
            desc: "Laid-back vibe with Alki Beach and panoramic skyline views."
        },
        {
            name: "West Bellevue - Downtown Bellevue",
            slug: "west-bellevue-downtown-bellevue",
            image: getNeighborhoodImage("west-bellevue-downtown-bellevue", "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop"),
            desc: "A sophisticated urban center with world-class shopping and dining."
        },
        {
            name: "Medina - Clyde Hill",
            slug: "medina-clyde-hill",
            image: getNeighborhoodImage("medina-clyde-hill", "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1000&auto=format&fit=crop"),
            desc: "Prestigious enclaves known for expansive estates and privacy."
        },
        {
            name: "Kirkland",
            slug: "kirkland",
            image: getNeighborhoodImage("kirkland", "https://images.unsplash.com/photo-1572979268688-29470c153835?q=80&w=1000&auto=format&fit=crop"),
            desc: "Vibrant waterfront downtown with a strong community feel."
        },
        {
            name: "Mercer Island",
            slug: "mercer-island",
            image: getNeighborhoodImage("mercer-island", "https://images.unsplash.com/photo-1560520653-9e0e4c890331?q=80&w=1000&auto=format&fit=crop"),
            desc: "An island oasis located conveniently between Seattle and Bellevue."
        },
        {
            name: "Sammamish",
            slug: "sammamish",
            image: getNeighborhoodImage("sammamish", "https://images.unsplash.com/photo-1576402187878-974f70c890a5?q=80&w=1000&auto=format&fit=crop"),
            desc: "Family-friendly with top-rated schools and outdoor recreation."
        },
        {
            name: "Issaquah",
            slug: "issaquah",
            image: getNeighborhoodImage("issaquah", "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop"),
            desc: "Where the mountains meet the city, offering a unique lifestyle."
        },
        {
            name: "Redmond",
            slug: "redmond",
            image: getNeighborhoodImage("redmond", "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1000&auto=format&fit=crop"),
            desc: "The bicycle capital of the Northwest and a tech hub."
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24">
                <section className="bg-white py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Home Search</h1>
                            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
                            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-lg">
                                Explore the finest neighborhoods in the Pacific Northwest.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {neighborhoodGroups.map((neighborhood) => (
                                <Link
                                    key={neighborhood.slug}
                                    href={`/ search / ${neighborhood.slug} `} // Or separate search page logic if listing specific homes
                                    // For now, linking to a slug under neighborhoods. 
                                    // If "Home Search" implies searching for homes IN that neighborhood, this is correct structure.
                                    className="group relative h-[300px] overflow-hidden shadow-sm hover:shadow-xl transition-all"
                                >
                                    <Image
                                        src={neighborhood.image}
                                        alt={neighborhood.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                                        <h3 className="font-serif text-2xl text-white tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                                            {neighborhood.name}
                                        </h3>
                                        <div className="h-[1px] w-0 bg-white mt-4 group-hover:w-16 transition-all duration-500 delay-100" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
