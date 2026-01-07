import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GREY_PLACEHOLDER } from "@/lib/constants";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import CondensedContactForm from "@/components/CondensedContactForm";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

export default async function TeamPage() {
    const [pageAssets, teamMembers] = await Promise.all([
        client.fetch(`*[_type == "pageAssets"][0] {
            teamPageHeroImage,
            teamContactImage
        }`),
        client.fetch(`*[_type == "teamMember"] {
            name,
            role,
            headshot,
            bio,
            linkedin,
            renderPriority
        }`)
    ]);

    // Sort team members by renderPriority desc (High to Low)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sortedTeamMembers = teamMembers.sort((a: any, b: any) => {
        return (b.renderPriority || 0) - (a.renderPriority || 0);
    });

    const heroImage = pageAssets?.teamPageHeroImage
        ? urlForImage(pageAssets.teamPageHeroImage).url()
        : GREY_PLACEHOLDER;

    const contactImage = pageAssets?.teamContactImage
        ? urlForImage(pageAssets.teamContactImage).url()
        : null;

    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="solid" />
            <main className="flex-grow pt-24">
                {/* Hero Image Section */}
                <div className="relative w-full aspect-[2/1]">
                    <Image
                        src={heroImage}
                        alt="Gwo Piña Buchanan Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <section className="bg-muted py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Architects of the Client Experience</h1>
                            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
                            <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-lg">
                                Where Development Strategy Meets Global Concierge Service.<br /><br />
                                In the complex, high-velocity real estate market of the Pacific Northwest, the traditional "salesperson" model is obsolete. Today’s clients require strategic advisors, data interpreters, design consultants, and global connectors.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {sortedTeamMembers.map((member: any) => (
                                <div key={member.name} className="space-y-6">
                                    <div className="relative aspect-[3/4] w-full overflow-hidden grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700">
                                        <Image
                                            src={member.headshot ? urlForImage(member.headshot).width(600).height(800).url() : GREY_PLACEHOLDER}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-serif text-2xl text-foreground">{member.name}</h3>
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-accent text-sm uppercase tracking-widest mb-4">{member.role}</p>
                                        <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                            {member.bio && <PortableText value={member.bio} />}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CondensedContactForm
                    backgroundImage={contactImage || undefined}
                    isTransparent={true}
                />
            </main>
            <Footer />
        </div>
    );
}
