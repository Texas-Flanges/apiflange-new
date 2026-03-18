'use client';

import React from 'react';
import Button from './Button';

export interface CTALink {
  label: string;
  href: string;
}

interface CTABannerProps {
  heading: string;
  subtext?: string;
  primaryCTA: CTALink;
  secondaryCTA?: CTALink;
}

const CTABanner: React.FC<CTABannerProps> = ({
  heading,
  subtext,
  primaryCTA,
  secondaryCTA,
}) => {
  return (
    <section className="w-full bg-iron py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {heading}
        </h2>

        {/* Subtext */}
        {subtext && (
          <p className="text-lg md:text-xl opacity-90 mb-8">
            {subtext}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            href={primaryCTA.href}
            className="w-full sm:w-auto"
          >
            {primaryCTA.label}
          </Button>

          {secondaryCTA && (
            <Button
              variant="secondary"
              size="lg"
              href={secondaryCTA.href}
              className="w-full sm:w-auto border-white text-white hover:text-iron"
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
