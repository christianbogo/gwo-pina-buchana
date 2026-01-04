import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PortableText } from "@portabletext/react";
import ListingGallery from "@/components/ListingGallery";
import CondensedContactForm from "@/components/CondensedContactForm";
import { notFound } from "next/navigation";

export const revalidate = 60;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ListingPage({ params }: { params: any }) {
    // Awaiting params to satisfy Next.js 15+ async params requirement if applicable, 
    // though Next 13/14 usually pass prompts. Safest to await if it's a Promise in newer versions.
    // In standard Next 14 app router `params` is an object.
    const { slug } = await params;

    const listing = await client.fetch(`*[_type == "listing" && slug.current == $slug][0] {
        title,
        subtitle,
        price,
        status,
        zinger,
        description,
        coverImage,
        gallery,
        listingVideo,
        keyStats,
        otherStats
    }`, { slug });

    if (!listing) {
        notFound();
    }

    const galleryImages = [
        listing.coverImage,
        ...(listing.gallery || [])
    ].filter(Boolean).map(img => urlForImage(img).url());

    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="solid" />
            <main className="flex-grow pt-24">
                {/* Hero / Gallery Section */}
                <ListingGallery images={galleryImages} status={listing.status} title={listing.title} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left Column: Description & Details */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-2 leading-tight">
                                    {listing.title}
                                </h1>
                                <p className="text-xl text-muted-foreground mb-4 uppercase tracking-wide">
                                    {listing.subtitle}
                                </p>
                                <p className="text-3xl font-medium text-foreground mb-6">
                                    {listing.price}
                                </p>

                                {listing.zinger && (
                                    <div className="inline-block border border-accent px-4 py-2 text-accent uppercase tracking-widest text-sm font-bold mb-8">
                                        {listing.zinger}
                                    </div>
                                )}
                            </div>

                            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground font-normal leading-relaxed">
                                {listing.description && <PortableText value={listing.description} />}
                            </div>

                            {/* Grouped Stats */}
                            {listing.otherStats && listing.otherStats.length > 0 && (
                                <div className="space-y-8 pt-8 border-t border-border">
                                    <h3 className="font-serif text-2xl text-foreground">Features & Amenities</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                        {listing.otherStats.map((group: any, idx: number) => (
                                            <div key={idx}>
                                                <h4 className="text-sm uppercase tracking-widest font-bold text-foreground mb-4 border-b border-border pb-2">
                                                    {group.groupName}
                                                </h4>
                                                <ul className="space-y-3">
                                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                                    {group.stats?.map((stat: any, sIdx: number) => (
                                                        <li key={sIdx} className="flex justify-between text-sm">
                                                            <span className="text-muted-foreground uppercase tracking-wide">{stat.name}</span>
                                                            <span className="font-medium text-foreground">{stat.value}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Key Stats & Video */}
                        <div className="space-y-12">
                            {listing.keyStats && listing.keyStats.length > 0 && (
                                <div className="bg-muted/30 p-8 border border-border">
                                    <h3 className="font-serif text-xl text-foreground mb-6">Property Highlights</h3>
                                    <div className="space-y-6">
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                        {listing.keyStats.map((stat: any, idx: number) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                {/* Simple icon fallback based on user selection if we mapped icons, or just text */}
                                                <div className="w-10 h-10 flex items-center justify-center border border-border bg-background text-accent">
                                                    {getIcon(stat.icon)}
                                                </div>
                                                <div>
                                                    <p className="text-sm uppercase tracking-widest text-muted-foreground">{stat.text}</p>
                                                    {/* If label/value split was used, could display both. Current schema is just text or predefined icon + text. */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {listing.listingVideo && (
                                <div className="aspect-video w-full relative bg-black">
                                    <iframe
                                        src={listing.listingVideo} // Assuming embed URL
                                        className="absolute inset-0 w-full h-full"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                        style={{ border: 'none' }}
                                    />
                                </div>
                            )}

                            {/* Sticky Agent Contact on Desktop? Or just inline */}

                        </div>
                    </div>
                </div>

                <CondensedContactForm />
            </main>
            <Footer />
        </div>
    );
}

// Helper to render icons
function getIcon(name: string) {
    // Using simple SVGs or Lucide icons if available
    // For now returning simplistic SVGs matching general real estate themes
    switch (name) {
        case 'bed': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg>;
        case 'bath': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1.5C2.5 2 2.5 5 2.5 5h1a2.5 2.5 0 0 1 2 2.5V8" /><path d="M5 8v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" /></svg>;
        case 'sqft': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.4 8.4l-6.8 6.8" /><path d="M11.6 8.4l6.8 6.8" /></svg>; // Ruler-ish
        case 'lot': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18v-8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" /><path d="M12 3a9 9 0 0 0-9 9" /></svg>; // Tree/Land
        case 'garage': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 10h18" /><path d="M8 14v4" /><path d="M16 14v4" /></svg>;
        case 'calendar': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
        default: return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>;
    }
}
