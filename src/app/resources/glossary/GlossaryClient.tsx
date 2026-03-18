'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { ChevronRight, Search } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export default function GlossaryClient({
  glossaryTerms,
}: {
  glossaryTerms: GlossaryTerm[];
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = useMemo(() => {
    return glossaryTerms
      .filter(
        (item) =>
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, glossaryTerms]);

  const categories = Array.from(
    new Set(glossaryTerms.map((term) => term.category))
  ).sort();

  return (
    <>
      {/* Breadcrumb */}
      <SectionWrapper className="py-4 md:py-6 bg-gray-50 border-b border-gray-200">
        <Container>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/resources" className="hover:text-brass transition-colors">
              Resources
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-semibold">Glossary</span>
          </div>
        </Container>
      </SectionWrapper>

      {/* Search Section */}
      <SectionWrapper className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-orange-50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search glossary terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>
            {searchTerm && (
              <p className="text-sm text-gray-600 mt-3">
                Found <strong>{filteredTerms.length}</strong> matching terms
              </p>
            )}
          </div>
        </Container>
      </SectionWrapper>

      {/* Category Links */}
      {!searchTerm && (
        <SectionWrapper className="py-8 md:py-10 bg-white border-b border-gray-200">
          <Container>
            <p className="text-sm font-semibold text-gray-700 mb-4">Browse by Category:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    const element = document.getElementById(
                      `category-${category.replace(/\s+/g, '-').toLowerCase()}`
                    );
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-900 rounded-full text-sm font-medium transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </Container>
        </SectionWrapper>
      )}

      {/* Glossary Terms */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          {!searchTerm ? (
            // Grouped by Category
            <div className="space-y-12">
              {categories.map((category) => {
                const categoryTerms = filteredTerms.filter(
                  (term) => term.category === category
                );
                return (
                  <div
                    key={category}
                    id={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}
                    className="scroll-mt-20"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-orange-600">
                      {category}
                    </h2>
                    <div className="space-y-6">
                      {categoryTerms.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {item.term}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {item.definition}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : filteredTerms.length > 0 ? (
            // Search Results
            <div className="space-y-4">
              {filteredTerms.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.term}
                    </h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            // No Results
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">
                No glossary terms found matching "{searchTerm}"
              </p>
              <Button
                onClick={() => setSearchTerm('')}
                variant="primary"
                size="md"
              >
                Clear Search
              </Button>
            </div>
          )}
        </Container>
      </SectionWrapper>

      {/* Tips Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How to Use This Glossary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Search</h3>
              <p className="text-gray-700 text-sm">
                Use the search bar above to quickly find terms by keyword. Searches both term names and definitions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-4">📂</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Browse Categories</h3>
              <p className="text-gray-700 text-sm">
                Browse terms organized by category (Standards, Materials, Flange Types, etc.) to explore related concepts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Learn</h3>
              <p className="text-gray-700 text-sm">
                Read detailed definitions to understand flange engineering concepts. Cross-reference related guides for deeper learning.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-orange-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need More Technical Information?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Visit our complete resource library for comprehensive guides, technical specifications, and engineering support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/resources" variant="secondary" size="lg" className="border-white text-blue-900">
                View All Resources
              </Button>
              <Button href="https://www.texasflange.com/contact-us" variant="ghost" size="lg" className="text-white hover:text-orange-200">
                Contact Our Engineers
              </Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Statistics */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brass mb-2">
                {glossaryTerms.length}+
              </div>
              <p className="text-lg text-gray-700 font-semibold">Terms Defined</p>
              <p className="text-sm text-gray-600">Complete piping and flange terminology</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brass mb-2">
                {categories.length}
              </div>
              <p className="text-lg text-gray-700 font-semibold">Categories</p>
              <p className="text-sm text-gray-600">Organized by engineering discipline</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                100%
              </div>
              <p className="text-lg text-gray-700 font-semibold">Technical</p>
              <p className="text-sm text-gray-600">All definitions verified and accurate</p>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
