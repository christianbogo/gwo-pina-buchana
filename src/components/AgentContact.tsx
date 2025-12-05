import Image from "next/image";
import Link from "next/link";

export default function AgentContact() {
    return (
        <section className="py-24 bg-muted">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="w-24 h-24 relative mx-auto mb-6 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                        alt="Agent"
                        fill
                        className="object-cover"
                    />
                </div>
                <h2 className="font-serif text-3xl text-foreground mb-4">Interested in this property?</h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    Contact our team today to schedule a private showing or to request more information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-foreground text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
                    >
                        Schedule Viewing
                    </Link>
                    <Link
                        href="tel:+13105550123"
                        className="inline-block border border-foreground text-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-foreground hover:text-white transition-colors duration-300"
                    >
                        +1 (310) 555-0123
                    </Link>
                </div>
            </div>
        </section>
    );
}
