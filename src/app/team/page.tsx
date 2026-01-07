import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GREY_PLACEHOLDER } from "@/lib/constants";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import CondensedContactForm from "@/components/CondensedContactForm";
import TeamMember from "@/components/TeamMember";

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
                                The Gwo Piña Buchanan Team draws from complementary backgrounds — real estate development, luxury hospitality, and bespoke retail — to deliver a holistic, concierge-level client experience.

                                <br />
                                <br />
                                Today’s clients require strategic advisors, data interpreters, design consultants, marketing masterminds, and global connectors.
                            </p>
                        </div>

                        <div className="flex flex-col gap-16 md:gap-24 max-w-5xl mx-auto">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {sortedTeamMembers.map((member: any) => (
                                <TeamMember key={member.name} member={member} />
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
