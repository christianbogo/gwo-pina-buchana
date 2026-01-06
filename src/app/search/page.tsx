import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
    title: "Home Search | Gwo Piña Buchanan",
    description: "Search for luxury homes in the Pacific Northwest.",
};

export default function HomeSearchPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="solid" />

            <main className="flex-grow bg-background flex items-center justify-center relative overflow-hidden min-h-[90vh]">
                {/* Background Pattern/Texture Optional */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-50"></div>
                    {/* Using a simple subtle gradient instead if no pattern asset */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/10 to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto px-4 text-center relative z-10 py-24">
                    <FadeIn>
                        <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Coming Soon</h1>
                        <div className="w-24 h-1 bg-accent mx-auto mb-12" />

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-12">
                            We are currently curating an exceptional home search experience for you.
                            Our new search platform will provide seamless access to the finest properties in the Pacific Northwest.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link
                                href="/properties/exclusive"
                                className="inline-block border border-foreground px-10 py-4 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
                            >
                                View Exclusive Listings
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-block bg-foreground text-background border border-foreground px-10 py-4 text-sm uppercase tracking-widest hover:bg-background hover:text-foreground transition-all duration-300"
                            >
                                Contact Our Team
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    );
}
