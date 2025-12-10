"use client";

import { useEffect } from "react";

interface ImagePreloaderProps {
    images: string[];
}

export default function ImagePreloader({ images }: ImagePreloaderProps) {
    useEffect(() => {
        if (!images || images.length === 0) return;

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [images]);

    return null;
}
