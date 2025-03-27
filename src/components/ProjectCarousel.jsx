import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export function ProjectCarousel({ projects = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const itemsPerView = 3;
  const totalSlides = Math.max(0, projects.length - (itemsPerView - 1));

  // Auto-advance slides
  useEffect(() => {
    if (totalSlides <= 1) return;
    
    const timer = setInterval(() => {
      handleSlideChange((currentIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, totalSlides]);

  const handleSlideChange = (newIndex) => {
    if (isTransitioning || newIndex === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 700);
  };

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
    <div className="relative bg-neutral-900 rounded-2xl overflow-hidden">
      <div className="relative w-full">
        <div 
          className="flex transition-transform duration-700 ease-out-expo"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="w-1/3 flex-shrink-0 p-2"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-all hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous projects"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-all hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next projects"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                disabled={isTransitioning}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/80 w-1.5'
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