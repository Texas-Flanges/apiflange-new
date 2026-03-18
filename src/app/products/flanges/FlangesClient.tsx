'use client';

import { useState, useMemo } from 'react';
import Container from '@/components/layout/Container';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { flangeTypes } from '@/data/flangeTypes';
import { Filter, X } from 'lucide-react';

interface FilterState {
  standards: string[];
  materials: string[];
}

export default function FlangesClient() {
  const [filterState, setFilterState] = useState<FilterState>({
    standards: [],
    materials: [],
  });
  const [showFilters, setShowFilters] = useState(false);

  // Get unique standards and materials from all flanges
  const allStandards = useMemo(
    () => Array.from(new Set(flangeTypes.flatMap((f) => f.standards))),
    []
  );
  const allMaterials = useMemo(
    () => Array.from(new Set(flangeTypes.flatMap((f) => f.materials))),
    []
  );

  // Filter flanges based on selected criteria
  const filteredFlanges = useMemo(() => {
    return flangeTypes.filter((flange) => {
      const standardMatch =
        filterState.standards.length === 0 ||
        filterState.standards.some((s) => flange.standards.includes(s));

      const materialMatch =
        filterState.materials.length === 0 ||
        filterState.materials.some((m) => flange.materials.includes(m));

      return standardMatch && materialMatch;
    });
  }, [filterState]);

  const toggleStandard = (standard: string) => {
    setFilterState((prev) => ({
      ...prev,
      standards: prev.standards.includes(standard)
        ? prev.standards.filter((s) => s !== standard)
        : [...prev.standards, standard],
    }));
  };

  const toggleMaterial = (material: string) => {
    setFilterState((prev) => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter((m) => m !== material)
        : [...prev.materials, material],
    }));
  };

  const clearFilters = () => {
    setFilterState({ standards: [], materials: [] });
  };

  const hasActiveFilters =
    filterState.standards.length > 0 || filterState.materials.length > 0;

  return (
    <Container className="py-12">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            All Flange Types ({filteredFlanges.length})
          </h2>
          {hasActiveFilters && (
            <p className="text-gray-600 mt-2">
              Showing {filteredFlanges.length} of {flangeTypes.length} flanges
            </p>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center gap-2 px-4 py-2 bg-iron-light text-white rounded-lg hover:bg-iron transition-colors"
        >
          <Filter size={20} />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div
          className={`${
            showFilters ? 'block' : 'hidden'
          } md:block lg:col-span-1`}
        >
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Filters</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-brass hover:underline flex items-center gap-1"
                >
                  <X size={14} />
                  Clear
                </button>
              )}
            </div>

            {/* Standard Filters */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Standards</h4>
              <div className="space-y-3">
                {allStandards.map((standard) => (
                  <label
                    key={standard}
                    className="flex items-center gap-3 cursor-pointer hover:text-brass"
                  >
                    <input
                      type="checkbox"
                      checked={filterState.standards.includes(standard)}
                      onChange={() => toggleStandard(standard)}
                      className="w-4 h-4 accent-[#B5873A]"
                    />
                    <span className="text-gray-700">{standard}</span>
                    <span className="text-gray-400 text-sm">
                      ({flangeTypes.filter((f) => f.standards.includes(standard)).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material Filters */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Materials</h4>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {allMaterials.map((material) => (
                  <label
                    key={material}
                    className="flex items-center gap-3 cursor-pointer hover:text-brass"
                  >
                    <input
                      type="checkbox"
                      checked={filterState.materials.includes(material)}
                      onChange={() => toggleMaterial(material)}
                      className="w-4 h-4 accent-[#B5873A]"
                    />
                    <span className="text-gray-700 text-sm">{material}</span>
                    <span className="text-gray-400 text-xs">
                      ({flangeTypes.filter((f) => f.materials.includes(material)).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {filteredFlanges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredFlanges.map((flange) => (
                <ProductCard
                  key={flange.id}
                  title={flange.name}
                  slug={flange.slug}
                  description={flange.description}
                  standards={flange.standards}
                  materials={flange.materials}
                />
              ))}
            </div>
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                No flanges match your selected filters
              </p>
              <Button
                onClick={clearFilters}
                variant="secondary"
                size="md"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
