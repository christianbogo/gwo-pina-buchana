import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { GREY_PLACEHOLDER } from "@/lib/constants";

export const metadata = {
    title: "Sotheby's Auction House | Gwo Piña Buchanan",
    description: "Sotheby’s has been uniting collectors with world-class works of art since 1744.",
};

export const revalidate = 60;

export default async function AuctionPage() {
    const pageAssets = await client.fetch(`*[_type == "pageAssets"][0] {
        homeSearchCardImage,
        homeValuationCardImage,
        letsConnectCardImage,
        auctionHeroImage,
        auctionHouseImage,
        auctionInstituteImage
    }`);

    const searchImage = pageAssets?.homeSearchCardImage
        ? urlForImage(pageAssets.homeSearchCardImage).url()
        : GREY_PLACEHOLDER;

    const valuationImage = pageAssets?.homeValuationCardImage
        ? urlForImage(pageAssets.homeValuationCardImage).url()
        : GREY_PLACEHOLDER;

    const contactImage = pageAssets?.letsConnectCardImage
        ? urlForImage(pageAssets.letsConnectCardImage).url()
        : GREY_PLACEHOLDER;

    const heroImage = pageAssets?.auctionHeroImage
        ? urlForImage(pageAssets.auctionHeroImage).url()
        : GREY_PLACEHOLDER;

    const houseImage = pageAssets?.auctionHouseImage
        ? urlForImage(pageAssets.auctionHouseImage).url()
        : GREY_PLACEHOLDER;

    const instituteImage = pageAssets?.auctionInstituteImage
        ? urlForImage(pageAssets.auctionInstituteImage).url()
        : GREY_PLACEHOLDER;


    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="transparent" />

            <main className="flex-grow">
                {/* 1. Hero Section */}
                {/* 1. Hero Section */}
                <PageHero
                    image={heroImage}
                    title="Sotheby's Auction House"
                />

                {/* 2. Info Banner */}
                <section className="bg-[#0a1a2a] py-24 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <FadeIn>
                            <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-8">
                                Sotheby's Auction
                            </h2>
                            <div className="w-24 h-0.5 bg-[#bf9b30] mx-auto mb-10" />
                            <p className="text-lg md:text-xl leading-relaxed font-light text-gray-300">
                                Sotheby’s has been uniting collectors with world-class works of art since 1744, and 270 years later it has grown into one of the world’s leading full-service art businesses.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* 3. Sotheby's Auction House (Image Left, Text Right) */}
                <section className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px]">
                        <Image
                            src={houseImage}
                            alt="Sotheby's Auction History"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-12 md:p-20 bg-white flex flex-col justify-center">
                        <FadeIn>
                            <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-8 text-black">
                                Sotheby's Auction House
                            </h2>
                            <div className="w-16 h-0.5 bg-[#bf9b30] mb-8" />
                            <div className="text-gray-600 leading-relaxed mb-12 text-lg space-y-6">
                                <p>
                                    Sotheby’s has been uniting collectors with world-class works of art since 1744. Sotheby’s became the first international auction house when it expanded from London to New York (1955), the first to conduct sales in Hong Kong (1973), India (1992) and France (2001), and the first international fine art auction house in China (2012).
                                </p>
                                <p>
                                    Today, Sotheby’s has a global network of 80 offices in 40 countries and presents auctions in 10 different salesrooms, including New York, London, Hong Kong and Paris.
                                </p>
                            </div>
                            <a
                                href="http://www.sothebys.com/en/calendar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                            >
                                Learn More
                            </a>
                        </FadeIn>
                    </div>
                </section>

                {/* 4. Sotheby's Institute of Arts (Text Left, Image Right) */}
                <section className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-12 md:p-20 bg-[#f4f4f4] flex flex-col justify-center order-2 md:order-1">
                        <FadeIn>
                            <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-8 text-black">
                                Sotheby's Institute of Arts
                            </h2>
                            <div className="w-16 h-0.5 bg-[#bf9b30] mb-8" />
                            <div className="text-gray-600 leading-relaxed mb-12 text-lg space-y-6">
                                <p>
                                    Sotheby’s BidNow program also allows visitors to view all auctions live online and place bids from anywhere in the world. Sotheby’s offers collectors the resources of Sotheby’s Financial Services, the world’s only full-service art financing company, as well as the collection, artist, estate & foundation advisory services of its subsidiary, Art Agency, Partners.
                                </p>
                                <p>
                                    Sotheby’s presents private sale opportunities in more than 70 categories, including S|2, the gallery arm of Sotheby's Global Fine Art Division, and three retail businesses: Sotheby’s Wine, Sotheby’s Diamonds, and Sotheby’s Home, the online marketplace for interior design.
                                </p>
                            </div>
                            <a
                                href="https://www.sothebysinstitute.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                            >
                                Learn More
                            </a>
                        </FadeIn>
                    </div>
                    <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] order-1 md:order-2">
                        <Image
                            src={instituteImage}
                            alt="Sotheby's Institute"
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* 5. Bottom Cards */}
                <section className="bg-white py-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <FadeIn>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { title: "New Developments", image: searchImage, link: "/properties/new-developments" },
                                    { title: "Home Valuation", image: valuationImage, link: "/valuation" },
                                    { title: "Let's Connect", image: contactImage, link: "/contact" }
                                ].map((item, index) => (
                                    <FadeIn key={item.title} delay={index * 0.1}>
                                        <Link href={item.link} className="block group relative h-[500px] overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                            <div className="absolute bottom-8 left-8 z-10">
                                                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                                                    {item.title}
                                                </h3>
                                                <div className="h-[1px] w-0 bg-white mt-4 group-hover:w-16 transition-all duration-500 delay-100" />
                                            </div>
                                        </Link>
                                    </FadeIn>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
