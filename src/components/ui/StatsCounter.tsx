'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

const AnimatedNumber: React.FC<{ value: string; onView: boolean }> = ({
  value,
  onView,
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const countRef = useRef<number>(0);

  useEffect(() => {
    if (!onView) return;

    // Extract numeric part
    const numericMatch = value.match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[0], 10);
    const suffix = value.replace(/\d+/, '');

    const increment = Math.ceil(target / 50);
    const interval = setInterval(() => {
      if (countRef.current < target) {
        countRef.current += increment;
        if (countRef.current > target) {
          countRef.current = target;
        }
        setDisplayValue(countRef.current + suffix);
      } else {
        setDisplayValue(value);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onView, value]);

  return <span>{displayValue}</span>;
};

const StatsCounter: React.FC<StatsCounterProps> = ({ stats }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  if (stats.length === 0) {
    return null;
  }

  return (
    <div ref={ref} className="w-full">
      <div
        className={`
          grid gap-6 md:gap-8
          ${
            stats.length === 1
              ? 'grid-cols-1'
              : stats.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : stats.length === 3
                  ? 'grid-cols-1 md:grid-cols-3'
                  : stats.length === 4
                    ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4'
                    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
          }
        `}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
              <AnimatedNumber value={stat.value} onView={inView} />
            </div>
            <p className="text-gray-600 font-medium text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
