'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';

type HeroVariant = 'image' | 'navy' | 'gradient';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: boolean;
  variant?: HeroVariant;
  children?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
  titleClassName?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  overlay = true,
  variant = 'navy',
  children,
  breadcrumbs,
  className = '',
  titleClassName = '',
}: PageHeroProps) {
  const hasBackgroundImage = backgroundImage && variant === 'image';

  return (
    <section
      className={`relative ${
        hasBackgroundImage ? 'min-h-[500px]' : 'min-h-[400px]'
      } w-full flex items-center justify-center ${className}`}
      style={
        hasBackgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Overlay for image variant */}
      {hasBackgroundImage && overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"
          aria-hidden="true"
        />
      )}

      {/* Navy background for navy variant */}
      {variant === 'navy' && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1C1C1E] to-[#2A2A2E]"
          aria-hidden="true"
        />
      )}

      {/* Gradient variant background */}
      {variant === 'gradient' && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E] via-[#2A2A2E] to-[#B5873A]"
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="mb-8">
              <Breadcrumbs
                items={breadcrumbs}
                className="text-white/80"
              />
            </div>
          )}

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white ${titleClassName}`}
          >
            {title}
            {variant === 'image' && (
              <span className="block text-brass">Excellence</span>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTA Children */}
          {children && (
            <div className="flex flex-wrap gap-4 pt-4">
              {children}
            </div>
          )}
        </motion.div>
      </div>

      {/* Decorative element */}
      {variant === 'navy' && (
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-5"
          aria-hidden="true"
        />
      )}
    </section>
  );
}
