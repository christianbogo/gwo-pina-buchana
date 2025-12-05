import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExclusiveListings from "@/components/ExclusiveListings";
import NewsletterItem from "@/components/NewsletterItem";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Placeholder for Hero Image/Video */}
            <div className="w-full h-full bg-gray-900/40 absolute z-10" />
            <Image
              src="https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=2940&auto=format&fit=crop"
              alt="Luxury Home"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-20 text-center text-white px-4">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wide">
              Experience the Exceptional
            </h1>
            <p className="text-lg md:text-xl tracking-widest uppercase mb-8">
              Luxury Real Estate in Los Angeles
            </p>
            <Link
              href="/properties"
              className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-foreground transition-all duration-300"
            >
              View Properties
            </Link>
          </div>
        </section>

        {/* Exclusive Listings Section */}
        <ExclusiveListings />

        {/* Team Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Meet The Team</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8" />
              <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-lg">
                Gwo Pina Buchana represents the pinnacle of luxury real estate. Our team combines decades of market expertise with an unwavering commitment to our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Team Member 1 */}
              <div className="space-y-6">
                <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                    alt="Gwo Pina"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-1">Gwo Pina</h3>
                  <p className="text-accent text-sm uppercase tracking-widest mb-4">Founder & Principal</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    With over 15 years of experience in the luxury market, Gwo has established a reputation for discretion, integrity, and record-breaking results.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="space-y-6">
                <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                    alt="Marcus Buchana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-1">Marcus Buchana</h3>
                  <p className="text-accent text-sm uppercase tracking-widest mb-4">Managing Partner</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Marcus brings a background in architectural design and finance, offering clients a unique perspective on value and potential in every property.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="space-y-6">
                <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
                    alt="Elena Rossi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-1">Elena Rossi</h3>
                  <p className="text-accent text-sm uppercase tracking-widest mb-4">Senior Associate</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Elena specializes in international clientele and off-market properties, ensuring seamless transactions for buyers and sellers from around the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Grid Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-wide">
                Award-Winning Expertise Meets<br />Unmatched Client Service
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Home Search", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop", link: "/search" },
                { title: "Home Valuation", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", link: "/valuation" },
                { title: "Let's Connect", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop", link: "/contact" }
              ].map((item) => (
                <Link key={item.title} href={item.link} className="group relative h-[300px] md:h-[500px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-8 left-8 z-10">
                    <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <div className="h-[1px] w-0 bg-white mt-4 group-hover:w-16 transition-all duration-500 delay-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterItem />
      </main>

      <Footer />
    </div>
  );
}
