"use client";

import {
    DollarSign,
    Megaphone,
    LineChart,
    PencilRuler,
    MapPin
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

const SERVICES = [
    {
        label: "Research",
        icon: LineChart,
    },
    {
        label: "Land Acquisition",
        icon: MapPin,
    },
    {
        label: "Development & Design Advisory",
        icon: PencilRuler,
    },
    {
        label: "Marketing",
        icon: Megaphone,
    },
    {
        label: "Sales",
        icon: DollarSign,
    },
];

export default function DevelopmentTabs() {
    return (
        <div className="w-full max-w-7xl mx-auto my-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-foreground">
                Developer & Builder Services
            </h2>

            <div className="max-w-4xl mx-auto mb-16">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    Access the industry&apos;s top strategies and tools for market research,
                    product design, marketing, and sales. A local and vertically integrated
                    resource, offering a single point of accountability from concept to
                    closing. All under the most recognized global brand in luxury real
                    estate.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {SERVICES.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <FadeIn
                            key={service.label}
                            delay={index * 0.1}
                            className="flex flex-col items-center gap-6 group w-[45%] md:w-[30%] lg:w-[15%]"
                        >
                            <div className="p-6 rounded-2xl bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300">
                                <Icon className="w-16 h-16 md:w-20 md:h-20 text-accent stroke-[1.5]" />
                            </div>
                            <h3 className="font-serif text-lg md:text-xl font-medium text-foreground max-w-[150px] leading-tight group-hover:text-accent transition-colors duration-300">
                                {service.label}
                            </h3>
                        </FadeIn>
                    );
                })}
            </div>
        </div>
    );
}
