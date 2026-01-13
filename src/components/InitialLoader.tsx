"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import monogramAnimation from "../../public/animations/monogram-loading.json";
import monogramAnimationWhite from "../../public/animations/monogram-loading-white.json";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const { resolvedTheme } = useTheme();
  // Prevent hydration mismatch by waiting for mount
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Lock scroll when loading
    document.body.style.overflow = "hidden";

    // Start logo reveal after short delay matching lottie start
    setTimeout(() => {
      setShowLogo(true);
    }, 300);

    // Simulate loading time / ensure splash is seen
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  // Use a default or transparent state until mounted to avoid mismatch, 
  // or just default to light (black) if that matches server rendered default.
  // Ideally for a loader, we want it to match immediately. 
  // Since we are checking theme, we might get a flash if we don't handle it.
  // But usually next-themes handles class application on html.
  // For JS logic, we need to wait for mount or use CSS based hiding if possible.
  // Lottie is JS based.

  const animationData = mounted && resolvedTheme === "dark" ? monogramAnimationWhite : monogramAnimation;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Lottie Monogram */}
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <Lottie
                animationData={animationData}
                loop={false}
                autoplay={true}
              />
            </div>

            {/* Revealing Inline Logo */}
            <div className="overflow-hidden h-12 md:h-20 flex items-center justify-center md:justify-start">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={showLogo ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="relative w-[220px] h-8 md:w-[350px] md:h-12 ml-0 md:ml-4">
                  <Image
                    src="/images/logos/inline-black.png"
                    alt="Gwo Piña Buchanan"
                    fill
                    className="object-contain object-center md:object-left dark:hidden"
                    priority
                  />
                  <Image
                    src="/images/logos/inline-white.png"
                    alt="Gwo Piña Buchanan"
                    fill
                    className="object-contain object-center md:object-left hidden dark:block"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
