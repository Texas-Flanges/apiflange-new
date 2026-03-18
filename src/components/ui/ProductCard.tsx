'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Wrench } from 'lucide-react';
import StandardBadge from './StandardBadge';
import MaterialBadge from './MaterialBadge';

interface ProductCardProps {
  title: string;
  slug: string;
  image?: string;
  description: string;
  standards: string[];
  materials: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  slug,
  image,
  description,
  standards,
  materials,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <Wrench size={48} className="mb-2" />
            <span className="text-sm font-medium">Flange Image</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>

        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

        {/* Standards */}
        {standards.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">
              Standards
            </p>
            <div className="flex flex-wrap gap-2">
              {standards.map((standard) => (
                <StandardBadge key={standard} standard={standard} />
              ))}
            </div>
          </div>
        )}

        {/* Materials */}
        {materials.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">
              Materials
            </p>
            <div className="flex flex-wrap gap-2">
              {materials.map((material) => (
                <MaterialBadge key={material} material={material} />
              ))}
            </div>
          </div>
        )}

        {/* View Details Link */}
        <Link
          href={`/products/${slug}`}
          className="mt-4 text-secondary font-semibold hover:underline inline-flex items-center gap-1 text-sm"
        >
          View Details
          <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
