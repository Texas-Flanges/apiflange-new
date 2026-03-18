'use client';

import React from 'react';

interface IndustryMarqueeProps {
  industries: string[];
  speed?: number;
}

const IndustryMarquee: React.FC<IndustryMarqueeProps> = ({
  industries,
  speed = 40,
}) => {
  if (industries.length === 0) {
    return null;
  }

  // Duplicate industries for seamless loop
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-8">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: marquee ${speed}s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex gap-8 marquee-track">
        {duplicatedIndustries.map((industry, index) => (
          <div
            key={index}
            className="flex-shrink-0 inline-flex items-center gap-2 text-lg font-semibold text-primary whitespace-nowrap"
          >
            <span className="text-secondary">●</span>
            <span>{industry}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryMarquee;
