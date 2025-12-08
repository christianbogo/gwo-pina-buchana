import Image from "next/image";
import Link from "next/link";

interface ListingCardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    status?: string;
    link?: string;
}

export default function ListingCard({
    image,
    title,
    location,
    price,
    status = "For Sale",
    link = "#",
}: ListingCardProps) {
    return (
        <Link href={link} className="group cursor-pointer block">
            <div className="relative h-[400px] overflow-hidden mb-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {status && (
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-wider font-medium text-foreground">
                        {status}
                    </div>
                )}

                {/* Hover Overlay with Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-background text-foreground px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-accent hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        View Listing
                    </button>
                </div>
            </div>
            <h3 className="font-serif text-xl mb-1 group-hover:text-accent transition-colors duration-300">
                {title}
            </h3>
            <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wide">
                {location}
            </p>
            <p className="text-foreground font-medium text-lg">{price}</p>
        </Link>
    );
}
