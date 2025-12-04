import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

        {/* Featured Properties Section (Placeholder) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Featured Properties</h2>
              <div className="w-24 h-1 bg-accent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Property Card Placeholders */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative h-[400px] overflow-hidden mb-4">
                    <Image
                      src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop`}
                      alt="Property"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs uppercase tracking-wider">
                      For Sale
                    </div>
                  </div>
                  <h3 className="font-serif text-xl mb-1 group-hover:text-accent transition-colors">123 Beverly Park</h3>
                  <p className="text-gray-500 text-sm mb-2">Beverly Hills, CA</p>
                  <p className="text-foreground font-medium">$12,500,000</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/properties"
                className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-accent hover:border-accent transition-all"
              >
                View All Properties
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                  alt="Gwo Pina Buchana Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                  Gwo Pina Buchana
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  With over $1 Billion in career sales, Gwo Pina Buchana represents the pinnacle of luxury real estate in Los Angeles. Our team combines market expertise, innovative marketing, and discreet service to deliver exceptional results for our clients.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you are buying your dream home or selling a prized asset, we provide a personalized experience tailored to your unique needs.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-foreground text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300 mt-4"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
