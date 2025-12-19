"use client";

import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
}

export default function FadeIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
    fullWidth = false,
}: FadeInProps) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    };

    const initial = { opacity: 0, ...directions[direction] };

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: delay
            }}
            className={`${className} ${fullWidth ? "w-full" : ""}`}
        >
            {children}
        </motion.div>
    );
}
