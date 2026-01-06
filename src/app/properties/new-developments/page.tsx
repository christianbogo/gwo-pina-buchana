import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { GREY_PLACEHOLDER } from "@/lib/constants";
import DevelopmentTabs from "./DevelopmentTabs";
import PageHero from "@/components/PageHero";
import BrandLogoCarousel from "./BrandLogoCarousel";
import CondensedContactForm from "@/components/CondensedContactForm";

// Revalidate every 60 seconds
export const revalidate = 60;

export const metadata = {
    title: "New Developments | Gwo Piña Buchanan",
    description: "Discover our portfolio of exclusive new developments in Seattle and Bellevue.",
};

interface Development {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    photo?: any;
    category?: 'Current' | 'Sold' | 'Sothebys';
    imageCaption?: string;
}

// Fallback "filler" data if Sanity is empty
const FILLER_DEVELOPMENTS: Development[] = [
    {
        _id: "filler-1",
        title: "The Emerald Tower",
        subtitle: "DOWNTOWN SEATTLE",
        description: "A defining statue in the Seattle skyline, offering unparalleled views of the Puget Sound and Olympic Mountains. 40 stories of glass and steel.",
        link: "#",
        photo: null,
        category: 'Current'
    },
    {
        _id: "filler-2",
        title: "Bellevue Arts Residences",
        subtitle: "DOWNTOWN BELLEVUE",
        description: "Luxury living in the heart of the tech corridor. Steps away from world-class shopping, dining, and the future of innovation.",
        link: "#",
        photo: null,
        category: 'Current'
    },
    {
        _id: "filler-3",
        title: "Alki Beach Modern",
        subtitle: "WEST SEATTLE",
        description: "Boutique waterfront condominiums designed for the ultimate Pacific Northwest lifestyle. Kayak storage, rooftop decks, and sunset views.",
        link: "#",
        photo: null,
        category: 'Sold',
        imageCaption: 'SOLD OUT'
    },
    {
        _id: "filler-4",
        title: "Madison Park Estates",
        subtitle: "MADISON PARK",
        description: "Gated community privacy meets urban accessibility. Expansive lots, custom architecture, and a private marina for residents.",
        link: "#",
        photo: null,
        category: 'Sothebys'
    }
];

export default async function NewDevelopments() {
    // Fetch developments and page assets in parallel
    const [sanityDevelopments, pageAssets] = await Promise.all([
        client.fetch<Development[]>(`*[_type == "development"] {
            _id,
            title,
            subtitle,
            photo,
            description,
            link,
            category,
            imageCaption,
            order
        } | order(order asc)`),
        client.fetch(`*[_type == "pageAssets"][0]{ newDevelopmentsPageImage, teamContactImage }`)
    ]);

    const developments = sanityDevelopments.length > 0 ? sanityDevelopments : FILLER_DEVELOPMENTS;
    const heroImage = pageAssets?.newDevelopmentsPageImage
        ? urlForImage(pageAssets.newDevelopmentsPageImage).url()
        : GREY_PLACEHOLDER;
    const contactImage = pageAssets?.teamContactImage
        ? urlForImage(pageAssets.teamContactImage).url()
        : null;

    // Filter by category
    const currentDevelopments = developments.filter(d => !d.category || d.category === 'Current');
    const soldDevelopments = developments.filter(d => d.category === 'Sold');
    const sothebysDevelopments = developments.filter(d => d.category === 'Sothebys');

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <PageHero
                    image={heroImage}
                    title="New Developments"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">

                    {/* INFO: Section 1 - Intro Text */}
                    <div className="text-center mb-20 border-t border-b border-accent py-12">
                        <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-lg">
                            From sleek high-rises in Seattle’s vibrant core to boutique buildings on the flourishing Eastside and spacious suburban homes around the Sound, our exceptional clientele of developers and homebuilders are redefining the future of residential living. Their bold visions inspire us to create, market, and sell the most covetable properties in Seattle and across the Pacific Northwest.
                        </p>
                    </div>
                </div>

                {/* INFO: Section 2 - Current Developments (ZigZag Layout) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 space-y-24 md:space-y-32">
                    {currentDevelopments.map((dev, index) => {
                        const imageUrl = dev.photo ? urlForImage(dev.photo).url() : GREY_PLACEHOLDER;
                        const isEven = index % 2 === 0;

                        // Conditional wrapper: Only use FadeIn if index > 0
                        const Wrapper = index === 0 ? "div" : FadeIn;
                        const wrapperProps = index === 0 ? { className: "w-full" } : { delay: 0.2, className: "w-full" };

                        return (
                            <Wrapper key={dev._id} {...wrapperProps}>
                                <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${isEven ? "" : "md:flex-row-reverse"}`}>
                                    {/* Image Side */}
                                    <div className="w-full md:w-1/2">
                                        {dev.link ? (
                                            <Link href={dev.link} className="group block relative aspect-[4/3] overflow-hidden shadow-sm">
                                                <Image
                                                    src={imageUrl}
                                                    alt={dev.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                            </Link>
                                        ) : (
                                            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-sm">
                                                <Image
                                                    src={imageUrl}
                                                    alt={dev.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Text Side */}
                                    <div className="w-full md:w-1/2 text-center md:text-left">
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">
                                            {dev.subtitle}
                                        </p>
                                        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                                            {dev.title}
                                        </h2>
                                        <div className={`w-16 h-0.5 bg-foreground mb-8 ${isEven ? "mx-auto md:mx-0" : "mx-auto md:ml-auto md:mr-0"} md:hidden`} /> {/* Mobile separator */}
                                        <p className="text-muted-foreground leading-relaxed mb-8 text-lg md:pr-12">
                                            {dev.description}
                                        </p>

                                        {dev.link && (
                                            <Link
                                                href={dev.link}
                                                className="inline-block border border-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
                                            >
                                                Learn More
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>

                {/* INFO: Section 3 - Team Capabilities Tabs */}
                {/* Background Full Width */}
                <section className="pt-24 pb-12 bg-muted border-t border-border/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn delay={0.2}>
                            <DevelopmentTabs />
                        </FadeIn>
                    </div>
                </section>



                {/* INFO: Section 3.5 - Brand Logos */}
                <BrandLogoCarousel />

                {/* INFO: Section 4 - Case Studies (List) */}
                <section className="pb-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn delay={0.3}>
                            <div className="text-center mb-16 px-4">
                                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Case Studies</h3>
                            </div>

                            <div className="flex flex-wrap justify-center gap-x-12 gap-y-20">
                                {soldDevelopments.map((dev, index) => {
                                    const imageUrl = dev.photo ? urlForImage(dev.photo).url() : GREY_PLACEHOLDER;
                                    return (
                                        <FadeIn key={dev._id} delay={index * 0.1} className="w-full md:w-[calc(50%-24px)]">
                                            <div className="block">
                                                <div className="relative aspect-[4/3] w-full overflow-hidden mb-8">
                                                    <Image
                                                        src={imageUrl}
                                                        alt={dev.title}
                                                        fill
                                                        className="object-cover"
                                                    />

                                                    {/* Image Caption - e.g. SOLD 3 UNITS */}
                                                    {dev.imageCaption && (
                                                        <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 text-xs font-bold tracking-widest uppercase text-black dark:text-white border border-border shadow-md">
                                                            {dev.imageCaption}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="text-center px-4">
                                                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
                                                        {dev.subtitle}
                                                    </p>
                                                    <h2 className="font-serif text-3xl text-foreground mb-4">
                                                        {dev.title}
                                                    </h2>
                                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                                        {dev.description}
                                                    </p>

                                                </div>
                                            </div>
                                        </FadeIn>
                                    );
                                })}
                            </div>
                        </FadeIn>
                    </div>
                </section>



                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    {/* INFO: Section 5 - Sotheby's Global */}
                    {sothebysDevelopments.length > 0 && (
                        <div className="border-border pt-24">
                            <FadeIn>
                                <div className="text-center mb-16 max-w-4xl mx-auto">
                                    <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                                        Sotheby&apos;s International Realty New Developments around the Globe
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Discover visionary projects across the globe that showcase the unparalleled reach and expertise of Sotheby’s International Realty.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                    {sothebysDevelopments.map((dev) => {
                                        const imageUrl = dev.photo ? urlForImage(dev.photo).url() : GREY_PLACEHOLDER;
                                        return (
                                            <Link href={dev.link || "#"} key={dev._id} className="group block">
                                                <div className="relative aspect-video w-full overflow-hidden mb-4">
                                                    <Image
                                                        src={imageUrl}
                                                        alt={dev.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                                                        {dev.title}
                                                    </h3>
                                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                                                        {dev.subtitle}
                                                    </p>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </FadeIn>
                        </div>
                    )}

                </div>

                <CondensedContactForm
                    backgroundImage={contactImage || undefined}
                    isTransparent={true}
                />
            </main >

            <Footer />
        </div >
    );
}
