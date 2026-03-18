'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Testimonial {
  quote: string;
  industry: string;
  company?: string;
  author?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoAdvance?: boolean;
  autoAdvanceInterval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoAdvance = true,
  autoAdvanceInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  // Auto-advance carousel
  useEffect(() => {
    if (!autoAdvance || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [autoAdvance, autoAdvanceInterval, testimonials.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative bg-gradient-to-r from-primary to-primary-light rounded-lg p-8 md:p-12 overflow-hidden">
        {/* Testimonials */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 50 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <blockquote className="text-xl md:text-2xl font-light mb-6 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                {testimonials[currentIndex].company && (
                  <p className="font-semibold">
                    {testimonials[currentIndex].company}
                  </p>
                )}
                {testimonials[currentIndex].author && (
                  <p className="text-sm opacity-90">
                    {testimonials[currentIndex].author}
                  </p>
                )}
                <p className="text-sm opacity-75">
                  {testimonials[currentIndex].industry}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`
                h-3 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? 'bg-secondary w-8'
                    : 'bg-gray-300 w-3 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
