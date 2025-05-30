import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import { Container } from './Container';
import PropTypes from 'prop-types';

export function HeroSlider({ images, title, description }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSlideChange = useCallback((newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  // Auto-advance slides
  useEffect(() => {
    if (isHovered) return; // Pause auto-advance when hovered
    
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % images.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [currentSlide, images.length, handleSlideChange, isHovered]);

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative h-[90vh] w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 transform scale-100' 
              : 'opacity-0 transform scale-110'
          }`}
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <OptimizedImage
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover transition-transform duration-[10000ms] ease-linear group-hover:scale-105"
            priority={index === 0}
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
      ))}

      {/* Content */}
      <Container className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 md:mb-6 transition-all duration-500 ease-in-out">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-100 transition-all duration-500 ease-in-out delay-100">
            {description}
          </p>
        </div>
      </Container>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            disabled={isTransitioning}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-white scale-100' 
                : 'bg-white/50 scale-75 hover:scale-90 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

HeroSlider.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}; 