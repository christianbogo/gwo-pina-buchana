"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, TrendingUp, Megaphone } from "lucide-react";

const TABS = [
    {
        id: "pre-dev",
        label: "Pre-Development Consulting",
        icon: Building2,
        content: [
            "Pre-development consultation on unit mix",
            "Checking working with architects on design selections",
            "Market research and repositioning",
            "Helping developers unlock value"
        ]
    },
    {
        id: "strategy",
        label: "Project Strategy",
        icon: TrendingUp,
        content: [
            "Synthesizing information from research, sales and marketing",
            "Developing highly customized project timelines",
            "Outlining all major activities and milestones",
            "Partnering with renowned branding, PR and media vendors",
            "Ensuring your strategy is highly differentiated"
        ]
    },
    {
        id: "marketing",
        label: "Integrated Sales & Marketing",
        icon: Megaphone,
        content: [
            "Expert sales advisors work with top marketing talent",
            "Ensuring your project remains top of mind",
            "Monitoring duration of the sales cycle",
            "Maximizing sellout value"
        ]
    }
];

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DevelopmentTabs() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const activeTab = TABS[currentIndex].id;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TABS.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + TABS.length) % TABS.length);
    };

    return (
        <div className="w-full max-w-5xl mx-auto my-12">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 text-foreground">
                The Field Team Scope of Services
            </h2>

            <div className="flex flex-col">
                {/* Mobile Navigation (Arrows) */}
                <div className="flex md:hidden items-center justify-between px-4 mb-8">
                    <button
                        onClick={handlePrev}
                        className="p-2 border border-border rounded-full hover:bg-accent hover:text-white transition-colors"
                        aria-label="Previous service"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <span className="font-serif text-lg text-center flex-1 px-4 font-medium">
                        {TABS[currentIndex].label}
                    </span>

                    <button
                        onClick={handleNext}
                        className="p-2 border border-border rounded-full hover:bg-accent hover:text-white transition-colors"
                        aria-label="Next service"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Desktop Navigation (Tabs) */}
                <div className="hidden md:block overflow-x-auto pb-4 hide-scrollbar mb-8 md:mb-12">
                    <div className="flex md:justify-center gap-8 md:gap-12 min-w-max px-4 border-b border-border/50">
                        {TABS.map((tab, index) => {
                            const Icon = tab.icon;
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            const isActive = index === currentIndex;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`relative pb-4 flex items-center gap-2 group transition-colors duration-300 ${activeTab === tab.id
                                        ? "text-accent"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    <Icon className={`w-5 h-5 ${activeTab === tab.id ? "text-accent" : "text-muted-foreground group-hover:text-foreground"}`} />
                                    <span className="text-sm md:text-base uppercase tracking-widest font-medium">
                                        {tab.label}
                                    </span>
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="min-h-[200px] w-full px-4">
                    <div className="min-h-[200px] w-full px-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={TABS[currentIndex].id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-3xl mx-auto bg-background p-8 border border-border/50 shadow-sm"
                            >
                                <ul className="space-y-4">
                                    {TABS[currentIndex].content.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                                            <span className="text-muted-foreground text-lg leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
