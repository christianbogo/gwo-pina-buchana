import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { GREY_PLACEHOLDER } from "@/lib/constants";

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
}

// Fallback "filler" data if Sanity is empty
const FILLER_DEVELOPMENTS: Development[] = [
    {
        _id: "filler-1",
        title: "The Emerald Tower",
        subtitle: "DOWNTOWN SEATTLE",
        description: "A defining statue in the Seattle skyline, offering unparalleled views of the Puget Sound and Olympic Mountains. 40 stories of glass and steel.",
        link: "#",
        photo: null, // Will use placeholder
    },
    {
        _id: "filler-2",
        title: "Bellevue Arts Residences",
        subtitle: "DOWNTOWN BELLEVUE",
        description: "Luxury living in the heart of the tech corridor. Steps away from world-class shopping, dining, and the future of innovation.",
        link: "#",
        photo: null, // Will use placeholder
    },
    {
        _id: "filler-3",
        title: "Alki Beach Modern",
        subtitle: "WEST SEATTLE",
        description: "Boutique waterfront condominiums designed for the ultimate Pacific Northwest lifestyle. Kayak storage, rooftop decks, and sunset views.",
        link: "#",
        photo: null, // Will use placeholder
    },
    {
        _id: "filler-4",
        title: "Madison Park Estates",
        subtitle: "MADISON PARK",
        description: "Gated community privacy meets urban accessibility. Expansive lots, custom architecture, and a private marina for residents.",
        link: "#",
        photo: null,
    }
];

export default async function NewDevelopments() {
    const sanityDevelopments = await client.fetch<Development[]>(`*[_type == "development"] {
    _id,
    title,
    subtitle,
    photo,
    description,
    link
  }`);

    const developments = sanityDevelopments.length > 0 ? sanityDevelopments : FILLER_DEVELOPMENTS;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">Portfolio</p>
                            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-8">New Developments</h1>
                            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
                            <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-lg">
                                Representing the region&apos;s most visionary projects. From high-rise icons to boutique collections, we partner with developers to shape the future of living in the Pacific Northwest.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                        {developments.map((dev, index) => {
                            const imageUrl = dev.photo ? urlForImage(dev.photo).url() : GREY_PLACEHOLDER;

                            return (
                                <FadeIn key={dev._id} delay={index * 0.1}>
                                    <Link href={dev.link} className="group block">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden mb-8">
                                            <Image
                                                src={imageUrl}
                                                alt={dev.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                        </div>

                                        <div className="text-center px-4">
                                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">
                                                {dev.subtitle}
                                            </p>
                                            <h2 className="font-serif text-3xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                                {dev.title}
                                            </h2>
                                            <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                                                {dev.description}
                                            </p>
                                            <span className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                                                View Development
                                            </span>
                                        </div>
                                    </Link>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
