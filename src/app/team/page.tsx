import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GREY_PLACEHOLDER } from "@/lib/constants";

const teamMembers = [
    {
        name: "Gwo Pina",
        role: "Founder & Principal",
        bio: "With over 15 years of experience in the luxury market.",
        image: GREY_PLACEHOLDER
    },
    {
        name: "Marcus Buchana",
        role: "Managing Partner",
        bio: "Marcus brings a background in architectural design and finance.",
        image: GREY_PLACEHOLDER
    },
    {
        name: "Elena Rossi",
        role: "Senior Associate",
        bio: "Specializes in international clientele and off-market properties.",
        image: GREY_PLACEHOLDER
    }
];

export default function TeamPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24">
                <section className="bg-muted py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Our Team</h1>
                            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
                            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-lg">
                                Local expertise. Global reach. Unrivaled results.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {teamMembers.map((member) => (
                                <div key={member.name} className="space-y-6">
                                    <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl text-foreground mb-1">{member.name}</h3>
                                        <p className="text-accent text-sm uppercase tracking-widest mb-4">{member.role}</p>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
