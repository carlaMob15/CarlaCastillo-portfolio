"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const defaultPhrases = [
  "In a world where brilliant is boring...",
  `Make <span style='color: rgb(99 102 241 / var(--tw-text-opacity, 1))'>boring brilliant</span>`,
  `Thoughtful digital products, built with purpose<span style='color: rgb(99 102 241 / var(--tw-text-opacity, 1))'>.</span>`,
];

export default function TaglineIntro({ animatedPhrases, scrollCueText = "Scroll to explore" }) {
  // Use CMS data if available, otherwise fall back to default phrases
  const phrases = animatedPhrases && animatedPhrases.length > 0 
    ? animatedPhrases.map(item => item.phrase)
    : defaultPhrases;

  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < phrases.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 300, 0);
  const pointerEvents = opacity < 0.1 ? 'none' : 'auto';

  return (
    <section
      id="hero-animation"
      className="h-screen sticky top-0 flex items-center justify-center text-center px-4 z-10"
      style={{ opacity, pointerEvents }}
    >
      <div className="text-3xl md:text-5xl font-bold leading-snug text-neutral-800 dark:text-white relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <span
              dangerouslySetInnerHTML={{ __html: phrases[index] }}
              className="inline-block"
            />
          </motion.div>
        </AnimatePresence>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-[-8rem] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="text-base md:text-lg text-neutral-400 font-medium">{scrollCueText}</div>
          <div className="text-xl md:text-2xl text-neutral-400 animate-bounce">↓</div>
        </motion.div>
      </div>
    </section>
  );
} 