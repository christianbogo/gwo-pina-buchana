"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

interface HeaderProps {
    theme?: "transparent" | "solid";
}

export default function Header({ theme = "transparent" }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        handleScroll(); // Check initial state
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const propertiesLinks = [
        { name: "Exclusive Listings", href: "/properties/exclusive" },
        { name: "New Developments", href: "/properties/coming-soon" },
        { name: "Notable Sales", href: "/properties/sales" },
    ];

    const neighborhoodLinks = [
        { name: "Downtown Seattle", href: "/search/downtown-seattle" },
        { name: "Madison Park - Washington Park", href: "/search/madison-park-washington-park" },
        { name: "Laurelhurst - Windermere", href: "/search/laurelhurst-windermere" },
        { name: "West Seattle", href: "/search/west-seattle" },
        { name: "West Bellevue - Downtown Bellevue", href: "/search/west-bellevue-downtown" },
        { name: "Medina - Clyde Hill", href: "/search/medina-clyde-hill" },
        { name: "Kirkland", href: "/search/kirkland" },
        { name: "Mercer Island", href: "/search/mercer-island" },
        { name: "Sammamish", href: "/search/sammamish" },
        { name: "Issaquah", href: "/search/issaquah" },
        { name: "Redmond", href: "/search/redmond" },
    ];

    const desktopLinks = [
        { name: "Properties", href: "#", type: "dropdown", menu: "properties" },
        { name: "Home Search", href: "/search", type: "dropdown", menu: "search" },
        { name: "Let's Connect", href: "/contact" },
    ];

    const isSolid = theme === "solid" || isScrolled;

    const headerClasses = isSolid
        ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm py-0"
        : "bg-transparent border-transparent py-4";

    const textColorClass = isSolid ? "text-gray-900 dark:text-white" : "text-white";
    const hoverColorClass = isSolid ? "hover:text-accent" : "hover:text-white/80";

    return (
        <>
            <header className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${headerClasses}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className={`font-serif text-2xl tracking-[0.2em] uppercase transition-colors duration-300 ${textColorClass} hover:opacity-80`}>
                                Gwo Pina Buchana
                            </Link>
                        </div>

                        <div className="flex items-center space-x-8">
                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex space-x-8 items-center">
                                {desktopLinks.map((link) => {
                                    if (link.type === "dropdown") {
                                        const isOpen = link.menu === "properties" ? isPropertiesOpen : isSearchOpen;
                                        const setOpen = link.menu === "properties" ? setIsPropertiesOpen : setIsSearchOpen;
                                        const subLinks = link.menu === "properties" ? propertiesLinks : neighborhoodLinks;

                                        return (
                                            <div
                                                key={link.name}
                                                className="relative group h-full flex items-center"
                                                onMouseEnter={() => setOpen(true)}
                                                onMouseLeave={() => setOpen(false)}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 font-medium flex items-center gap-1 focus:outline-none py-2 whitespace-nowrap ${textColorClass} ${hoverColorClass}`}
                                                    onClick={(e) => { if (link.href === '#') e.preventDefault(); }}
                                                >
                                                    {link.name}
                                                    <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </Link>

                                                {/* Dropdown Menu */}
                                                <div
                                                    className={`absolute left-0 top-full mt-0 bg-white shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top-left ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                                                        } ${link.menu === 'search' ? 'w-64' : 'w-56'}`}
                                                >
                                                    {subLinks.map((subLink) => (
                                                        <Link
                                                            key={subLink.name}
                                                            href={subLink.href}
                                                            className="block px-6 py-3 text-xs uppercase tracking-[0.1em] text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors"
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 font-medium whitespace-nowrap ${textColorClass} ${hoverColorClass}`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* Hamburger Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className={`${textColorClass} ${hoverColorClass} focus:outline-none transition-colors p-2`}
                                aria-label="Open menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar Navigation */}
            <div
                className={`fixed inset-0 z-[60] transition-opacity duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Sidebar Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-full sm:w-[400px] bg-white dark:bg-zinc-900 shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex flex-col h-full p-8 md:p-12 overflow-y-auto w-full">
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-900 dark:text-white hover:text-accent transition-colors p-2"
                                aria-label="Close menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col space-y-6">
                            <Link href="/" className="font-serif text-2xl md:text-3xl text-gray-900 hover:text-accent transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>

                            <Link href="/team" className="font-serif text-2xl md:text-3xl text-gray-900 hover:text-accent transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                Team
                            </Link>

                            {/* Properties specific section for mobile */}
                            <div className="space-y-4">
                                <p className="font-serif text-2xl md:text-3xl text-gray-900">Properties</p>
                                <div className="pl-4 flex flex-col space-y-3 border-l-2 border-gray-100">
                                    {propertiesLinks.map(link => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="font-sans text-sm uppercase tracking-widest text-gray-600 hover:text-accent transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link href="/search" className="font-serif text-2xl md:text-3xl text-gray-900 hover:text-accent transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                Home Search
                            </Link>

                            <Link href="/valuation" className="font-serif text-2xl md:text-3xl text-gray-900 hover:text-accent transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                Home Valuation
                            </Link>

                            <Link href="/sothebys-advantage" className="font-serif text-2xl md:text-3xl text-gray-900 hover:text-accent transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                The Sotheby's Advantage
                            </Link>

                            <Link href="/in-the-news" className="font-serif text-2xl md:text-3xl text-gray-900 hover:text-accent transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                In The News
                            </Link>

                            <Link href="/contact" className="font-serif text-2xl md:text-3xl text-gray-900 hover:text-accent transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                Let's Connect
                            </Link>
                        </nav>

                        <div className="mt-auto pt-10 space-y-4 text-gray-500 text-sm">
                            <p className="uppercase tracking-widest text-xs font-bold text-gray-900 mb-4">Contact</p>
                            <p>123 Luxury Lane, Beverly Hills, CA 90210</p>
                            <p><a href="tel:+13105550123" className="hover:text-accent">+1 (310) 555-0123</a></p>
                            <p><a href="mailto:contact@gwopinabuchana.com" className="hover:text-accent">contact@gwopinabuchana.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
