import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export function ProjectCarousel({ projects = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const itemsPerView = Math.min(3, projects.length);
  const totalSlides = Math.max(0, projects.length - (itemsPerView - 1));

  const handleSlideChange = useCallback((newIndex) => {
    if (isTransitioning || newIndex === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning]);

  // Auto-advance slides
  useEffect(() => {
    if (totalSlides <= 1) return;
    
    const timer = setInterval(() => {
      handleSlideChange((currentIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, totalSlides, handleSlideChange]);

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    handleSlideChange((currentIndex - 1 + totalSlides) % totalSlides);
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex"
          animate={{
            x: `-${(currentIndex * 100) / itemsPerView}%`
          }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1]
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              className="w-1/3 flex-shrink-0 p-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800/50"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    {project.shortDescription && (
                      <p className="mt-2 text-sm text-zinc-200 line-clamp-2">
                        {project.shortDescription}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/90 dark:bg-zinc-800/90 p-3 text-zinc-700 dark:text-zinc-200 shadow-lg backdrop-blur-sm transition-all hover:bg-white dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous projects"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/90 dark:bg-zinc-800/90 p-3 text-zinc-700 dark:text-zinc-200 shadow-lg backdrop-blur-sm transition-all hover:bg-white dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next projects"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                disabled={isTransitioning}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-zinc-800 dark:bg-white w-6'
                    : 'bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500 w-1.5'
                }`}
                onClick={() => handleSlideChange(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
} 