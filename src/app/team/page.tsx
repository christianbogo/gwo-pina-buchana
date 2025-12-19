import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GREY_PLACEHOLDER } from "@/lib/constants";

const teamMembers = [
    {
        name: "Dehlan Gwo",
        role: "Vice President of New Developments | Broker",
        bio: `Dehlan Gwo is not just a participant in the Seattle real estate market; he is one of its active shapers. As the Vice President of New Developments at Realogics Sotheby's International Realty (RSIR), Dehlan operates at the intersection of urban evolution and individual client advocacy. His practice is built on a foundation of technical rigor: a two-time graduate of the University of Washington, he holds a degree from the Foster School of Business and a Master of Science in Real Estate (MSRE) from the Runstad Department.

Prior to rejoining RSIR, Dehlan served as a Director at Create World Real Estate, where he led the delivery of high-profile condominium buildings in Downtown Seattle and Bellevue. This experience allows him to look at a property differently than most brokers. He sees the "bones" of a building—the construction quality, the zoning potential, the cap rates, and the long-term appreciation metrics.`,
        image: GREY_PLACEHOLDER
    },
    {
        name: "Yael Piña",
        role: "Global Real Estate Advisor",
        bio: `Yael Piña believes that luxury is not a price point; it is a quality of experience. As a Global Real Estate Advisor with Gwo Piña Buchanan, Yael brings a "concierge-first" philosophy to the real estate industry. Born in Guadalajara, Mexico, and raised in West Seattle from the age of three, Yael embodies the multicultural, globally connected spirit of the modern Pacific Northwest. He is fluent in both Spanish and English.

Yael’s professional DNA was formed in the demanding world of luxury hospitality. Rising quickly through the ranks of management, he learned that true service is about anticipation—solving problems before the client even knows they exist.`,
        image: GREY_PLACEHOLDER
    },
    {
        name: "Rachel Buchanan",
        role: "Real Estate Associate",
        bio: `Rachel Buchanan brings a curator’s eye to the business of real estate. With over twelve years of experience in management and visual merchandising for iconic luxury brands like Louis Vuitton, Rachel understands the psychology of aesthetics. She knows that in the luxury market, presentation is everything. A home must do more than function; it must seduce.

Rachel’s background is as cosmopolitan as her clientele. Born in Germany and raised in Southern California, she is fluent in Mandarin Chinese and holds a Bachelor of Arts in Asian Literature and Culture from the University of California Riverside. This deep cultural fluency makes her an invaluable advisor for international buyers.`,
        image: GREY_PLACEHOLDER
    }
];

export default function TeamPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="solid" />
            <main className="flex-grow pt-24">
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
                                            {member.bio.split('\n\n').map((paragraph, idx) => (
                                                <span key={idx} className="block mb-2 last:mb-0">
                                                    {paragraph}
                                                </span>
                                            ))}
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
