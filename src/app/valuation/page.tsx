import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function HomeValuationPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header theme="solid" />
            <main className="flex-grow pt-40 pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Home Valuation</h1>
                        <div className="w-24 h-1 bg-accent mx-auto mb-8" />
                        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-lg">
                            Receive a comprehensive analysis of your property's value in today's market.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto bg-gray-50 p-8 md:p-12 rounded-sm shadow-sm">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="address" className="text-xs uppercase tracking-wider text-gray-500">Property Address</label>
                                <input type="text" id="address" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="123 Luxury Lane" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-500">Name</label>
                                    <input type="text" id="name" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-500">Email</label>
                                    <input type="email" id="email" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-foreground text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300 font-bold shadow-lg mt-4"
                            >
                                Request Valuation
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
