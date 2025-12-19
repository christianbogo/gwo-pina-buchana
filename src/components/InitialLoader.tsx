"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll when loading
    document.body.style.overflow = "hidden";
    
    // Simulate loading time / ensure splash is seen
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2200); // 2.2 seconds total duration

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-serif text-3xl md:text-5xl lg:text-7xl text-foreground tracking-tight"
            >
              Gwo Piña Buchanan
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
