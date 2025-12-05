import PageHero from "@/components/PageHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function NeighborhoodsPage() {
    const neighborhoods = [
        { name: "Bellevue", image: "https://images.unsplash.com/photo-1444723121867-26b5d64e8598?q=80&w=1000&auto=format&fit=crop" },
        { name: "Kirkland", image: "https://images.unsplash.com/photo-1542665174-31db64d7e0e4?q=80&w=1000&auto=format&fit=crop" },
        { name: "Mercer Island", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000&auto=format&fit=crop" },
        { name: "Redmond", image: "https://images.unsplash.com/photo-1526715699709-e58f0009c95d?q=80&w=1000&auto=format&fit=crop" },
        { name: "Sammamish", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1000&auto=format&fit=crop" },
        { name: "Woodinville", image: "https://images.unsplash.com/photo-1506197061617-7f5c0b093236?q=80&w=1000&auto=format&fit=crop" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20">
                <PageHero
                    image="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2940&auto=format&fit=crop"
                    title="Neighborhoods"
                />

                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Areas of Expertise</h2>
                        <div className="w-24 h-1 bg-accent mx-auto" />
                    </div>

                    {/* Grid with no gap */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {neighborhoods.map((hood) => (
                            <Link key={hood.name} href={`/neighborhoods/${hood.name.toLowerCase()}`} className="group relative h-[400px] overflow-hidden block">
                                <Image
                                    src={hood.image}
                                    alt={hood.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <h3 className="font-serif text-3xl tracking-widest uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {hood.name}
                                    </h3>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wider text-xs border border-white px-6 py-2 hover:bg-white hover:text-black">
                                        Learn More
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Home Search Invite */}
                <section className="py-32 bg-muted text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8">Refine Your Search</h2>
                        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                            Discover properties tailored to your lifestyle in the Pacific Northwest's most desirable communities.
                        </p>
                        <Link
                            href="/search"
                            className="inline-block bg-foreground text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Start Property Search
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
