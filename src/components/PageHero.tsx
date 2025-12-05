import Image from "next/image";

interface PageHeroProps {
    image: string;
    title: string;
}

export default function PageHero({ image, title }: PageHeroProps) {
    return (
        <div className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="font-serif text-4xl md:text-6xl text-white tracking-widest uppercase drop-shadow-md">
                    {title}
                </h1>
                <div className="h-1 w-24 bg-white/80 mx-auto mt-6" />
            </div>
        </div>
    );
}
