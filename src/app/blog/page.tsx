import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import BlogClient from './BlogClient';

// Metadata export for this page
export const metadata: Metadata = {
  title: 'Blog | API Flange',
  description:
    'Expert insights on flange manufacturing, engineering standards, materials science, and industrial best practices. Read our latest technical guides and industry updates.',
  keywords: [
    'flange manufacturing',
    'engineering standards',
    'ASME standards',
    'weld neck flanges',
    'flange materials',
    'industrial piping',
    'technical guides',
  ],
  openGraph: {
    title: 'Blog | API Flange',
    description:
      'Expert insights on flange manufacturing, engineering standards, materials science, and industrial best practices.',
    url: 'https://www.apiflange.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.apiflange.com/blog',
  },
};

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

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'what-is-a-weld-neck-flange',
    title: 'Complete Guide to Weld Neck Flanges: Design, Manufacturing, and Application',
    excerpt:
      'Learn everything about weld neck flanges, the most versatile and widely used flange type in industrial piping systems. Discover their design features, manufacturing process, and critical applications.',
    date: '2024-03-15',
    author: 'API Flange Team',
    category: 'Technical Guides',
    readingTime: 12,
  },
  {
    id: '2',
    slug: 'asme-vs-awwa-flanges',
    title: 'ASME vs AWWA Standards: Understanding the Key Differences',
    excerpt:
      'Comprehensive comparison of ASME B16.5 and AWWA standards. Learn which standard applies to your application and why the distinctions matter for safety and compatibility.',
    date: '2024-03-12',
    author: 'API Flange Team',
    category: 'Standards',
    readingTime: 8,
  },
  {
    id: '3',
    slug: 'how-steel-flanges-are-manufactured',
    title: 'Steel Flange Manufacturing: From Forging to Final Inspection',
    excerpt:
      'Explore the complete manufacturing process of steel flanges. From raw material selection and forging through CNC machining to rigorous quality testing, understand how precision-engineered flanges are created.',
    date: '2024-03-08',
    author: 'API Flange Team',
    category: 'Technical Guides',
    readingTime: 10,
  },
  {
    id: '4',
    slug: 'stainless-steel-flanges-corrosion-resistance',
    title: 'Stainless Steel Flanges: Maximizing Corrosion Resistance',
    excerpt:
      'Examine the properties that make stainless steel ideal for critical applications. Understand grades, passivation requirements, and maintenance practices for optimal performance.',
    date: '2024-03-01',
    author: 'API Flange Team',
    category: 'Materials',
    readingTime: 9,
  },
  {
    id: '5',
    slug: 'high-pressure-flange-applications-oil-gas',
    title: 'High-Pressure Flanges in Oil and Gas: Industry Requirements and Solutions',
    excerpt:
      'Discover how API 6A and API 16A standards govern flange design for extreme pressure environments. Learn about the specialized requirements and certifications needed for subsea and deepwater operations.',
    date: '2024-02-25',
    author: 'API Flange Team',
    category: 'Industry News',
    readingTime: 11,
  },
  {
    id: '6',
    slug: 'water-utility-domestic-flange-compliance',
    title: 'Water Utility Standards: Ensuring Compliance with AWWA and BABA Requirements',
    excerpt:
      'Navigate the regulatory landscape for water utility applications. Understand AWWA standards, BABA/AIS domestic manufacturing requirements, and certification processes for public works projects.',
    date: '2024-02-18',
    author: 'API Flange Team',
    category: 'Standards',
    readingTime: 8,
  },
];

const categories = [
  'All',
  'Technical Guides',
  'Standards',
  'Materials',
  'Industry News',
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Expert Insights & Technical Resources"
        subtitle="In-depth guides on flange engineering, manufacturing standards, materials science, and industry best practices to inform your procurement decisions."
        variant="navy"
      />

      <BlogClient
        blogPosts={blogPosts}
        categories={categories}
      />

      {/* Sidebar Info Section */}
      <SectionWrapper variant="gray">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-bold text-iron mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.slice(1).map((category) => (
                  <li key={category}>
                    <span
                      className="text-gray-600 hover:text-brass font-medium transition"
                    >
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-lg font-bold text-iron mb-4">Recent Posts</h3>
              <ul className="space-y-2">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gray-600 hover:text-brass text-sm font-medium transition"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-iron mb-3">Need Custom Solutions?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Request a detailed quote for your specific flange requirements and specifications.
              </p>
              <Link href="https://www.texasflange.com/contact-us">
                <Button variant="primary" className="w-full">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <CTABanner
        heading="Stay Updated with Industry Insights"
        subtext="Subscribe to receive the latest technical guides, standards updates, and manufacturing innovations delivered to your inbox."
        primaryCTA={{ label: 'Subscribe Now', href: '#' }}
        secondaryCTA={{ label: 'View Resources', href: '/resources' }}
      />
    </>
  );
}
