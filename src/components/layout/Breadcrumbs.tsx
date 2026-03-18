'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Generate JSON-LD schema markup for breadcrumbs
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${typeof window !== 'undefined' ? window.location.origin : ''}${item.href}`,
    })),
  };

  useEffect(() => {
    // Add JSON-LD script to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm ${className}`}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {/* Home link */}
        <li>
          <Link
            href="/"
            className="text-gray-600 hover:text-brass transition-colors font-medium"
          >
            Home
          </Link>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-gray-400" />
              {isLast ? (
                <span className="text-gray-800 font-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-brass transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
