"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { GREY_PLACEHOLDER } from "@/lib/constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TeamMember({ member }: { member: any }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showExpandButton, setShowExpandButton] = useState(false);
    const bioRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bioRef.current) {
            // Check if content overflows the max height
            // Using a tolerance of 10px to avoid showing button for barely overflowing content
            const isOverflowing = bioRef.current.scrollHeight > bioRef.current.clientHeight + 10;
            setShowExpandButton(isOverflowing);
        }
    }, [member.bio]);

    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="relative aspect-[3/4] w-full md:w-[350px] shrink-0 overflow-hidden grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700 shadow-sm">
                <Image
                    src={member.headshot ? urlForImage(member.headshot).width(600).height(800).url() : GREY_PLACEHOLDER}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 350px"
                />
            </div>
            <div className="flex-grow pt-2 w-full">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-3xl text-foreground">{member.name}</h3>
                    {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                    )}
                </div>
                <p className="text-accent text-sm uppercase tracking-widest mb-6 border-b border-accent/20 pb-4 inline-block">{member.role}</p>

                <div
                    ref={bioRef}
                    className={`text-gray-600 dark:text-gray-300 leading-relaxed text-base space-y-4 relative overflow-hidden transition-all duration-500 ease-in-out ${!isExpanded ? 'max-h-[300px]' : 'max-h-none'}`}
                >
                    {member.bio && <PortableText value={member.bio} />}

                    {/* Gradient overlay when collapsed */}
                    {!isExpanded && showExpandButton && (
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted to-transparent pointer-events-none" />
                    )}
                </div>

                {showExpandButton && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 text-xs uppercase tracking-widest font-bold text-accent hover:text-foreground transition-colors flex items-center gap-2 group"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}
