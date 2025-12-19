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
import ImagePreloader from "@/components/ImagePreloader";
import FadeIn from "@/components/FadeIn";
import InitialLoader from "@/components/InitialLoader";

// Revalidate every 60 seconds (or logic you prefer)
export const revalidate = 60;

export const metadata = {
  title: "Gwo Piña Buchanan | New Developments & Luxury Real Estate Seattle",
  description: "Dehlan Gwo, Yael Piña, and Rachel Buchanan present the region's most comprehensive portfolio of new homes. From Alki Beach to Bellevue high-rises, discover the future of living in the Pacific Northwest.",
};

export default async function Home() {
  const pageAssets = await client.fetch(`*[_type == "pageAssets"][0] {
    homeVideo {
        asset->{
            url
        }
    },
    homeSearchCardImage,
    homeValuationCardImage,
    letsConnectCardImage,
    teamGroupPhoto,
    comingSoonImage,
    sothebysAdvantageImage
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

  // Preload images for other pages to improve navigation speed
  const comingSoonImage = pageAssets?.comingSoonImage
    ? urlForImage(pageAssets.comingSoonImage).url()
    : null;

  const sothebysImage = pageAssets?.sothebysAdvantageImage
    ? urlForImage(pageAssets.sothebysAdvantageImage).url()
    : null;

  const imagesToPreload = [comingSoonImage, sothebysImage].filter(Boolean) as string[];


  return (
    <div className="min-h-screen flex flex-col">
      <InitialLoader />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HomeHero videoUrl={videoUrl} />

        {/* Exclusive Listings Section */}
        <FadeIn>
          <ExclusiveListings />
        </FadeIn>

        {/* Team Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">A Convergence of Expertise</h2>
                <div className="w-24 h-1 bg-accent mx-auto mb-8" />

                {pageAssets?.teamGroupPhoto && (
                  <div className="relative w-full aspect-[21/9] mb-8 overflow-hidden max-w-5xl mx-auto">
                    <Image
                      src={urlForImage(pageAssets.teamGroupPhoto).url()}
                      alt="Gwo Piña Buchanan Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-lg">
                  Real estate excellence is no longer a solo endeavor. The Gwo Piña Buchanan team unites distinct disciplines—development strategy, luxury hospitality, and visual design—to offer a holistic, concierge-level advisory service.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Team Member 1 */}
              <FadeIn delay={0.1} className="h-full">
                <div className="space-y-6 h-full">
                  <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={GREY_PLACEHOLDER}
                      alt="Dehlan Gwo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-1">Dehlan Gwo</h3>
                    <p className="text-accent text-sm uppercase tracking-widest mb-4">Vice President of New Developments</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Moving beyond brokerage to offer strategic advisory on zoning, value engineering, and long-term asset appreciation.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Team Member 2 */}
              <FadeIn delay={0.2} className="h-full">
                <div className="space-y-6 h-full">
                  <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={GREY_PLACEHOLDER}
                      alt="Yael Piña"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-1">Yael Piña</h3>
                    <p className="text-accent text-sm uppercase tracking-widest mb-4">Global Real Estate Advisor</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Importing the rigorous service standards of luxury hospitality to ensure every transaction is managed with white-glove precision.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Team Member 3 */}
              <FadeIn delay={0.3} className="h-full">
                <div className="space-y-6 h-full">
                  <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={GREY_PLACEHOLDER}
                      alt="Rachel Buchanan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-1">Rachel Buchanan</h3>
                    <p className="text-accent text-sm uppercase tracking-widest mb-4">Real Estate Associate</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Applying a decade of visual merchandising expertise to present every home as a masterpiece and drive emotional engagement.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="text-center">
              <FadeIn delay={0.4}>
                <Link
                  href="/team"
                  className="inline-block border border-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  View Full Team
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Grid Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="font-serif text-3xl md:text-5xl text-foreground tracking-wide">
                  Award-Winning Expertise Meets<br />Unmatched Client Service
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Home Search", image: searchImage, link: "/search" },
                { title: "Home Valuation", image: valuationImage, link: "/valuation" },
                { title: "Let's Connect", image: contactImage, link: "/contact" }
              ].map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <Link href={item.link} className="block group relative h-[300px] md:h-[500px] overflow-hidden">
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
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <FadeIn>
          <NewsletterItem />
        </FadeIn>
      </main>

      <Footer />
      <ImagePreloader images={imagesToPreload} />
    </div>
  );
}
