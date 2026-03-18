'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readingTime: number;
  image?: string;
}

export default function BlogClient({
  blogPosts,
  categories,
}: {
  blogPosts: BlogPost[];
  categories: string[];
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch =
      selectedCategory === 'All' || post.category === selectedCategory;
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <Container>
      {/* Search and Filter Section */}
      <SectionWrapper>
        <div className="space-y-8">
          {/* Search Bar */}
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-brass text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-600">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </p>
        </div>
      </SectionWrapper>

      {/* Blog Grid */}
      <SectionWrapper>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
              >
                {/* Placeholder for image */}
                <div className="w-full h-48 bg-gradient-to-br from-iron to-iron-light flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <Tag className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-medium">{post.category}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className="inline-block bg-brass/10 text-brass text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-iron mb-3 line-clamp-3">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <span>{post.readingTime} min read</span>
                  </div>

                  {/* Author and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-700">
                      {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-brass hover:text-iron font-semibold text-sm flex items-center gap-1 transition"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No articles found matching your search. Try different keywords or filters.
            </p>
          </div>
        )}
      </SectionWrapper>

      {/* Pagination placeholder */}
      {filteredPosts.length > 0 && (
        <SectionWrapper>
          <div className="flex justify-center gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              Previous
            </button>
            <button className="px-4 py-2 bg-brass text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              Next
            </button>
          </div>
        </SectionWrapper>
      )}
    </Container>
  );
}
