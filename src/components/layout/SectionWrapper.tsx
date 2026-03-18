'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type BackgroundVariant = 'white' | 'gray' | 'navy';
type PaddingSize = 'sm' | 'md' | 'lg' | 'xl';

interface SectionWrapperProps {
  children: ReactNode;
  variant?: BackgroundVariant;
  padding?: PaddingSize;
  heading?: string;
  headingLevel?: 'h2' | 'h3' | 'h4';
  subheading?: string;
  centered?: boolean;
  className?: string;
  animate?: boolean;
  id?: string;
}

const paddingMap: Record<PaddingSize, string> = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-20 md:py-32',
};

const variantMap: Record<BackgroundVariant, string> = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  navy: 'bg-iron text-white',
};

export default function SectionWrapper({
  children,
  variant = 'white',
  padding = 'md',
  heading,
  headingLevel = 'h2',
  subheading,
  centered = false,
  className = '',
  animate = true,
  id,
}: SectionWrapperProps) {
  const HeadingComponent = headingLevel;

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Heading Section */}
      {heading && (
        <div className={centered ? 'text-center mb-12' : 'mb-12'}>
          <HeadingComponent
            className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight ${
              variant === 'navy' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {heading}
            {variant === 'navy' && (
              <span className="block text-brass">Solutions</span>
            )}
          </HeadingComponent>

          {subheading && (
            <p
              className={`mt-4 text-lg md:text-xl ${
                variant === 'navy' ? 'text-gray-300' : 'text-gray-600'
              } ${centered ? 'max-w-2xl mx-auto' : ''}`}
            >
              {subheading}
            </p>
          )}
        </div>
      )}

      {/* Children Content */}
      {children}
    </div>
  );

  return (
    <section
      id={id}
      className={`${paddingMap[padding]} ${variantMap[variant]} transition-colors duration-300 ${className}`}
    >
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {content}
        </motion.div>
      ) : (
        content
      )}
    </section>
  );
}
