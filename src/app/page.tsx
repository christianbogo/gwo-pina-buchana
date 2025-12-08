import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExclusiveListings from "@/components/ExclusiveListings";
import NewsletterItem from "@/components/NewsletterItem";
import HomeHero from "@/components/HomeHero";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { GREY_PLACEHOLDER } from "@/lib/constants";

// Revalidate every 60 seconds (or logic you prefer)
export const revalidate = 60;

export default async function Home() {
  const pageAssets = await client.fetch(`*[_type == "pageAssets"][0] {
    homeVideo {
        asset->{
            url
        }
    },
    homeSearchCardImage,
    homeValuationCardImage,
    letsConnectCardImage
  }`);

  const videoUrl = pageAssets?.homeVideo?.asset?.url;

  // Default images if Sanity data is missing
  const searchImage = pageAssets?.homeSearchCardImage
    ? urlForImage(pageAssets.homeSearchCardImage).url()
    : GREY_PLACEHOLDER;

  const valuationImage = pageAssets?.homeValuationCardImage
    ? urlForImage(pageAssets.homeValuationCardImage).url()
    : GREY_PLACEHOLDER;

  const contactImage = pageAssets?.letsConnectCardImage
    ? urlForImage(pageAssets.letsConnectCardImage).url()
    : GREY_PLACEHOLDER;


  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HomeHero videoUrl={videoUrl} />

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Team Member 1 */}
              <div className="space-y-6">
                <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={GREY_PLACEHOLDER}
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
                    src={GREY_PLACEHOLDER}
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
                    src={GREY_PLACEHOLDER}
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

            <div className="text-center">
              <Link
                href="/team"
                className="inline-block border border-gray-900 px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                View Full Team
              </Link>
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
                { title: "Home Search", image: searchImage, link: "/search" },
                { title: "Home Valuation", image: valuationImage, link: "/valuation" },
                { title: "Let's Connect", image: contactImage, link: "/contact" }
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
