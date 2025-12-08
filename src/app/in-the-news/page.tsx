import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Mock data - replace with Sanity data later
const newsItems = [
    {
        title: "Market Trends 2025: Analysis",
        date: "December 01, 2025",
        summary: "An in-depth look at the shifting landscape of luxury real estate in the Pacific Northwest.",
        image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=1000&auto=format&fit=crop",
        slug: "market-trends-2025"
    },
    {
        title: "Record Sale in Medina",
        date: "November 15, 2025",
        summary: "Gwo Pina Buchana facilitates the highest recorded sale in Medina this year.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
        slug: "record-sale-medina"
    },
    {
        title: "Architectural Digest Feature",
        date: "October 20, 2025",
        summary: "Our exclusive listing in West Seattle featured for its stunning modern design.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
        slug: "architectural-digest-feature"
    }
];

export default function InTheNewsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="solid" />
            <main className="flex-grow pt-24">
                <section className="bg-muted py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">In The News</h1>
                            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
                            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-lg">
                                Latest updates, press mentions, and market insights.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {newsItems.map((item) => (
                                <Link key={item.slug} href={`/in-the-news/${item.slug}`} className="group bg-white flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <span className="text-xs uppercase tracking-widest text-accent font-medium">{item.date}</span>
                                        </div>
                                        <h3 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                            {item.summary}
                                        </p>
                                        <div className="text-xs uppercase tracking-widest font-bold border-b border-gray-900 self-start group-hover:border-accent group-hover:text-accent transition-all">
                                            Read More
                                        </div>
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
