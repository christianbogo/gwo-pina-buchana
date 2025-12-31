import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExclusiveListings from "@/components/ExclusiveListings";
import CondensedContactForm from "@/components/CondensedContactForm";
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
    teamContactImage,
    newDevelopmentsPageImage,
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

  const teamContactBg = pageAssets?.teamContactImage
    ? urlForImage(pageAssets.teamContactImage).url()
    : undefined;

  // Preload images for other pages to improve navigation speed
  const newDevelopmentsImage = pageAssets?.newDevelopmentsPageImage
    ? urlForImage(pageAssets.newDevelopmentsPageImage).url()
    : null;

  const sothebysImage = pageAssets?.sothebysAdvantageImage
    ? urlForImage(pageAssets.sothebysAdvantageImage).url()
    : null;

  const imagesToPreload = [newDevelopmentsImage, sothebysImage].filter(Boolean) as string[];


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
                  <div className="relative w-full aspect-[21/9] mb-8 overflow-hidden mx-auto">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
              <FadeIn delay={0.1}>
                <div className="text-center p-8 md:p-12 border border-border bg-background hover:shadow-lg transition-shadow duration-300">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">$350 Million+</p>
                  <p className="text-sm md:text-base uppercase tracking-widest text-muted-foreground">Career Sales</p>
                  <p className="text-xs text-muted-foreground mt-2">(Total Combined Sales Volume Since 2016)</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="text-center p-8 md:p-12 border border-border bg-background hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-center">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">Top 1.5%</p>
                  <p className="text-sm md:text-base uppercase tracking-widest text-muted-foreground">Annually Ranked</p>
                  <p className="text-xs text-muted-foreground mt-2">Real Estate Professionals in America<br />(via RealTrends | The Wall Street Journal)</p>
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

        {/* Contact Form Section */}
        <FadeIn>
          <CondensedContactForm backgroundImage={teamContactBg} />
        </FadeIn>
      </main>

      <Footer />
      <ImagePreloader images={imagesToPreload} />
    </div>
  );
}
