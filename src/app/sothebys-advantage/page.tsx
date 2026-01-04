import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { GREY_PLACEHOLDER } from "@/lib/constants";

export const metadata = {
    title: "The Sotheby's Advantage | Gwo Piña Buchanan",
    description: "Innovating the luxury real estate industry with a network of exceptional agents.",
};

export const revalidate = 0;

export default async function SothebysAdvantagePage() {
    const pageAssets = await client.fetch(`*[_type == "pageAssets"][0] {
        homeSearchCardImage,
        homeValuationCardImage,
        letsConnectCardImage,
        sothebysHeroImage,
        sothebysExpertiseImage,
        sothebysBrandBenefitImage,
        sothebysGlobalNetworkImage
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

    const heroImage = pageAssets?.sothebysHeroImage
        ? urlForImage(pageAssets.sothebysHeroImage).url()
        : GREY_PLACEHOLDER;

    const expertiseImage = pageAssets?.sothebysExpertiseImage
        ? urlForImage(pageAssets.sothebysExpertiseImage).url()
        : GREY_PLACEHOLDER; // Wait, expertise section doesn't have an image in current code, but "Brand Benefit" does.
    // Checking code: Section 2 Expertise is just text?
    // "Expertise wherever you are..." -> Text only in current code. 
    // Wait, the prompt said "this image (hero), as well as the three images below".
    // 1. Hero (Background)
    // 2. Our Brand. Your Benefit. (Section 3 has generic image)
    // 3. Global Network & World We Serve (Section 5 has TWO images)
    // Let's map them correctly.

    // Ah, section 3 "Our Brand" has one image.
    const brandImage = pageAssets?.sothebysBrandBenefitImage
        ? urlForImage(pageAssets.sothebysBrandBenefitImage).url()
        : GREY_PLACEHOLDER;

    // Section 5 "Global Network" has two images. 
    // "Global Network" image and "World We Serve" image?
    // User said "the three images below". 
    // Maybe checking the designs... 
    // Current code has: 
    // 1. Hero background.
    // 2. Section 3 image (Sotheby's Auction House).
    // 3. Section 5 image 1 (Global Network).
    // 4. Section 5 image 2 (World We Serve).
    // That's 3 images below hero. Correct.

    const globalNetworkImage = pageAssets?.sothebysGlobalNetworkImage
        ? urlForImage(pageAssets.sothebysGlobalNetworkImage).url()
        : GREY_PLACEHOLDER;

    // Wait, I only added one global network image field. I might need another one if there are two in that section.
    // "sothebysGlobalNetworkImage" vs "sothebysExpertiseImage"? 
    // The user said "Expertise" in my plan, but I might have mis-mapped.
    // Let's use `sothebysExpertiseImage` for the second image in Global Network section for now, or rename/repurpose it if Section 2 truly has no image.
    // Section 2 "Expertise" is text only in `page.tsx`.
    // Section 5 has TWO images. 
    // Let's assume `sothebysExpertiseImage` was intended for one of the Global Network ones or I should add another field.
    // Actually, I'll use `sothebysGlobalNetworkImage` for the first one in Section 5, and `sothebysExpertiseImage` (which I created but isn't used in section 2) for the second one in Section 5? 
    // Or did I miss an image in Section 2?
    // Section 2 `Expertise wherever you are...` is text.
    // Let's check Section 3: `Our Brand. Your Benefit.` -> Image adjacent.
    // Let's check Section 5: `Global Network.` -> Image adjacent.
    // Let's check Section 5 part 2: `The World We Serve.` -> Image adjacent.
    // So we need 3 content images + 1 hero.
    // I created: hero, expertise, brand, global.
    // I will map:
    // - Hero -> Hero
    // - Brand -> Section 3 (Auction House image)
    // - Global -> Section 5 Image 1
    // - Expertise -> Section 5 Image 2 (World We Serve)? (A bit misnamed but saves a schema update round trip if I just use it).
    // Actually, I'll use `sothebysExpertiseImage` for "World We Serve" image as a fallback, or just use it.

    const worldWeServeImage = pageAssets?.sothebysExpertiseImage
        ? urlForImage(pageAssets.sothebysExpertiseImage).url()
        : GREY_PLACEHOLDER;

    const auctionHouseImage = brandImage;

    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="transparent" />

            <main className="flex-grow">
                {/* 1. Hero Section */}
                <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#0a1a2a] to-[#000000] text-white">
                    {/* Background Video/Image Placeholder */}
                    <div className="absolute inset-0 opacity-40">

                        <Image
                            src={heroImage}
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                        <FadeIn>
                            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight uppercase tracking-wide mb-8">
                                Innovating the luxury real estate industry with a network of exceptional agents
                            </h1>
                        </FadeIn>
                    </div>
                </section>

                {/* Video Section */}
                <section className="bg-white py-24">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="aspect-video w-full shadow-lg">
                            <iframe
                                src="https://iframe.mediadelivery.net/embed/567649/3e4b3faa-bfd9-426c-b1e8-9929966b3ee8?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
                                loading="lazy"
                                className="w-full h-full"
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* 2. Expertise Section */}
                <section className="py-24 bg-white text-black">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <FadeIn>
                            <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-8">
                                Expertise wherever you are and wherever you want to be.
                            </h2>
                            <div className="w-24 h-0.5 bg-[#bf9b30] mx-auto mb-10" />
                            <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                                Sotheby’s International Realty is the only truly global real estate brand, with a global network of residential brokerage companies. Through our personal relationships, our sellers reach a highly qualified global clientele — and our buyers receive access to remarkable properties and agents everywhere.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* 3. Our Brand. Your Benefit Section */}
                <section className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 relative min-h-[500px]">
                        <Image
                            src={GREY_PLACEHOLDER}
                            alt="Sotheby's Auction House"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 bg-[#0a1a2a] text-white p-12 md:p-20 flex flex-col justify-center">
                        <FadeIn>
                            <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-8">
                                Our Brand. Your Benefit.
                            </h2>
                            <div className="w-16 h-0.5 bg-[#bf9b30] mb-8" />
                            <p className="text-gray-300 leading-relaxed mb-12 text-lg">
                                The Sotheby’s International Realty® brand is built on the centuries-long prestige of the world’s preeminent auction house. Sotheby’s history and our unmatched reputation give our listings the best-in-class exposure they deserve and assures buyers they are working with a trusted partner. Follow us on social media for highlights on global luxury real estate.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#" className="inline-block bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors text-center">
                                    Sotheby's Auction House
                                </a>
                                <Link href="/contact" className="inline-block border border-white text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center">
                                    Connect With Us
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* 4. Setting the World’s Highest Standard */}
                <section className="py-24 bg-white text-black">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <FadeIn>
                            <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-8">
                                Setting the World’s Highest Standard.
                            </h2>
                            <div className="w-24 h-0.5 bg-[#bf9b30] mx-auto mb-10" />
                            <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light mb-12">
                                Established in 1976, Sotheby’s International Realty has become the world’s premier luxury residential real estate brokerage. Through our vast global footprint, local expertise, and unequalled referral network, we ensure that the properties we represent receive the far-reaching and unparalleled exposure they deserve.
                            </p>
                            <Link href="/contact" className="inline-block bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                                Sell With Us
                            </Link>
                        </FadeIn>
                    </div>
                </section>

                {/* 5. Global Network & World We Serve */}
                <section className="bg-[#f4f4f4]">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 relative min-h-[400px]">
                            <Image
                                src={GREY_PLACEHOLDER}
                                alt="Global Network"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-12 md:p-20 bg-white flex flex-col justify-center">
                            <h3 className="font-serif text-2xl uppercase tracking-wide mb-6">
                                A Global Network of Exceptional Agents and Exclusive Properties
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our international network spans across 79 countries and territories. Find a home that suits your lifestyle by exploring all that Sotheby’s International Realty has to offer globally.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-12 md:p-20 bg-white flex flex-col justify-center order-2 md:order-1">
                            <h3 className="font-serif text-xl uppercase tracking-wide mb-8 font-bold">
                                The World We Serve:
                            </h3>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-12 text-sm text-gray-600 uppercase tracking-wider mb-12">
                                <div>New York</div>
                                <div>France</div>
                                <div>Italy</div>
                                <div>Madrid</div>
                                <div>Miami</div>
                                <div>Hong Kong</div>
                                <div>Bahamas</div>
                                <div>Tokyo</div>
                            </div>
                            <div>
                                <a href="https://www.sothebysrealty.com/eng/offices/int" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                                    View Our Global Network
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative min-h-[400px] order-1 md:order-2">
                            <Image
                                src={GREY_PLACEHOLDER}
                                alt="World We Serve"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* 6. Real Estate Sold by Real Experts */}
                <section className="bg-[#0a1a2a] py-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <FadeIn>
                            <h2 className="text-center font-serif text-3xl md:text-5xl text-white uppercase tracking-widest mb-16">
                                Real Estate Sold by Real Experts
                            </h2>

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
