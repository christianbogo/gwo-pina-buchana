"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const desktopLinks = [
        { name: "Properties", href: "/properties/exclusive" },
        { name: "Home Search", href: "/search" },
        { name: "Let's Connect", href: "/contact" },
    ];

    const sidebarLinks = [
        { name: "Properties", href: "/properties/exclusive" },
        { name: "Home Search", href: "/search" },
        { name: "Let's Connect", href: "/contact" },
        { name: "Neighborhoods", href: "/neighborhoods" },
        { name: "Home Valuation", href: "/valuation" },
        { name: "Blog", href: "/blog" },
        { name: "Press & Media", href: "/press" },
        { name: "About Gwo Pina Buchana", href: "/about" },
    ];

    return (
        <>
            <header className="fixed w-full top-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/20 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="font-serif text-2xl tracking-[0.2em] text-foreground uppercase hover:opacity-80 transition-opacity">
                                Gwo Pina Buchana
                            </Link>
                        </div>

                        <div className="flex items-center space-x-8">
                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex space-x-8">
                                {desktopLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-xs uppercase tracking-[0.15em] text-gray-900 hover:text-accent transition-colors duration-300 font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Hamburger Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="text-gray-900 hover:text-accent focus:outline-none transition-colors p-2"
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
                    className={`absolute right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-2xl transform transition-transform duration-500 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex flex-col h-full p-8 md:p-12">
                        <div className="flex justify-end mb-12">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-900 hover:text-accent transition-colors p-2"
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
                            {sidebarLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-serif text-2xl md:text-3xl text-gray-900 hover:text-accent transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto space-y-4 text-gray-500 text-sm">
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
