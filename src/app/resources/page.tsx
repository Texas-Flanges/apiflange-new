import { type Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { ArrowRight, Book, Wrench, FileText, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Resources & Engineering Guides | API Flange',
  description:
    'Comprehensive technical resources for flange selection, pressure ratings, material grades, corrosion prevention, and industry standards. Engineering guides and reference materials.',
  keywords: [
    'flange guides',
    'technical resources',
    'engineering guides',
    'flange standards',
    'pressure ratings',
    'material specifications',
    'corrosion prevention',
    'ASME B16.5',
    'API 6D',
    'piping guides',
  ],
  openGraph: {
    title: 'Technical Resources & Engineering Guides',
    description:
      'Access comprehensive flange engineering guides, standards references, and technical documentation.',
    type: 'website',
    url: 'https://www.apiflange.com/resources',
  },
};

interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: ResourceItem[];
}

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

const guides: ResourceItem[] = [
  {
    id: 'flange-types',
    title: 'Complete Flange Types Guide',
    description: 'Comprehensive guide covering 15 flange types with specifications, applications, and selection criteria.',
    href: '/resources/flange-types-guide',
  },
  {
    id: 'pressure-ratings',
    title: 'Pressure-Temperature Ratings',
    description: 'Understanding ASME B16.5 P-T ratings, material groups, and design margins for safe operation.',
    href: '/resources/pressure-ratings',
  },
  {
    id: 'material-grades',
    title: 'Material Grade Reference',
    description: 'Complete specification reference for ASTM A105, A182, A350, A694, and other flange materials.',
    href: '/resources/material-grades',
  },
  {
    id: 'corrosion-prevention',
    title: 'Corrosion Prevention Guide',
    description: 'Prevention strategies, coating selection, and maintenance best practices for long service life.',
    href: '/resources/corrosion-prevention',
  },
  {
    id: 'glossary',
    title: 'Piping & Flange Glossary',
    description: 'Alphabetical reference of 50+ technical terms and definitions used in flange engineering.',
    href: '/resources/glossary',
  },
  {
    id: 'standards',
    title: 'Standards & Compliance',
    description: 'Overview of ASME, API, ASTM, AWWA, and international flange standards and requirements.',
    href: '/standards',
  },
];

const tools: ResourceItem[] = [
  {
    id: 'pressure-calc',
    title: 'P-T Rating Calculator',
    description: 'Calculate allowable pressure at any temperature using ASME B16.5 rating tables.',
    href: '/tools/pressure-temperature-rating',
  },
  {
    id: 'bolt-torque',
    title: 'Bolt Torque Calculator',
    description: 'Determine proper bolt torque values for standard ASME flange classes.',
    href: '/tools/bolt-torque-calculator',
  },
  {
    id: 'dimension-calc',
    title: 'Flange Dimension Calculator',
    description: 'Look up flange dimensions by size, class, and standard.',
    href: '/tools/flange-dimension-calculator',
  },
  {
    id: 'face-finish',
    title: 'Face Finish Reference',
    description: 'Compare RTJ, RF, FF, and other face finish types with guidelines and specifications.',
    href: '/tools/face-finish-reference',
  },
  {
    id: 'spec-builder',
    title: 'Specification Builder',
    description: 'Generate custom flange specifications with automatic code compliance checking.',
    href: '/tools/spec-builder',
  },
];

const whitePapers: ResourceItem[] = [
  {
    id: 'weld-neck-design',
    title: 'Weld Neck Flange Design & Best Practices',
    description: 'Technical deep-dive into weld neck flange design, manufacturing, and field installation.',
    href: '/resources/weld-neck-design',
  },
  {
    id: 'rtj-gasket-tech',
    title: 'RTJ Gasket Technology & Sealing',
    description: 'Complete guide to ring joint gaskets, sealing mechanisms, and failure prevention.',
    href: '/resources/rtj-gasket-technology',
  },
  {
    id: 'corrosion-mechanisms',
    title: 'Corrosion Mechanisms in Flanges',
    description: 'Understanding galvanic, pitting, stress corrosion cracking, and crevice corrosion.',
    href: '/resources/corrosion-mechanisms',
  },
  {
    id: 'code-compliance',
    title: 'Code Compliance & Certification',
    description: 'Navigate ASME, API, and AWWA requirements for your specific application.',
    href: '/resources/code-compliance',
  },
];

export default function ResourcesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Technical Resources & Engineering Guides"
        subtitle="Comprehensive guides, tools, and reference materials to master flange selection, specifications, and standards."
        variant="navy"
      />

      {/* Quick Navigation */}
      <SectionWrapper className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-orange-50 border-b border-gray-200">
        <Container>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#guides" className="text-sm font-semibold text-gray-700 hover:text-brass transition-colors">
              ↓ Guides
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#tools" className="text-sm font-semibold text-gray-700 hover:text-brass transition-colors">
              ↓ Tools
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#whitepapers" className="text-sm font-semibold text-gray-700 hover:text-brass transition-colors">
              ↓ White Papers
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#blog" className="text-sm font-semibold text-gray-700 hover:text-brass transition-colors">
              ↓ Blog
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* Guides Section */}
      <SectionWrapper id="guides" className="py-16 md:py-24 bg-white">
        <Container>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Book className="text-brass" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Engineering Guides
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Comprehensive guides covering flange types, standards, materials, and best practices.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {guides.map((item, index) => (
              <div
                key={item.id}
              >
                <Link href={item.href}>
                  <div className="h-full bg-white rounded-lg border border-gray-200 hover:border-orange-400 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-orange-200 transition-colors">
                        <BookOpen className="text-brass" size={24} />
                      </div>
                      <ArrowRight
                        size={20}
                        className="text-gray-400 group-hover:text-brass group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brass transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Tools Section */}
      <SectionWrapper id="tools" className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="text-brass" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Interactive Tools
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Calculators and reference tools to assist with flange design and selection.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tools.map((item) => (
              <div
                key={item.id}
              >
                <Link href={item.href}>
                  <div className="h-full bg-white rounded-lg border border-gray-200 hover:border-orange-400 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-orange-200 transition-colors">
                        <Wrench className="text-brass" size={24} />
                      </div>
                      <ArrowRight
                        size={20}
                        className="text-gray-400 group-hover:text-brass group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brass transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* White Papers Section */}
      <SectionWrapper id="whitepapers" className="py-16 md:py-24 bg-white">
        <Container>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-brass" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Technical White Papers
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              In-depth technical documents covering advanced topics and specialized applications.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {whitePapers.map((item) => (
              <div
                key={item.id}
              >
                <Link href={item.href}>
                  <div className="h-full bg-white rounded-lg border border-gray-200 hover:border-orange-400 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-orange-200 transition-colors">
                        <FileText className="text-brass" size={24} />
                      </div>
                      <ArrowRight
                        size={20}
                        className="text-gray-400 group-hover:text-brass group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brass transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Blog Section */}
      <SectionWrapper id="blog" className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="text-brass" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Engineering Blog
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Latest articles, case studies, and industry insights from our engineering team.
            </p>
          </div>

          <div className="text-center">
            <Button href="/blog" variant="primary" size="lg">
              Visit Our Blog
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </Container>
      </SectionWrapper>

      {/* Quick Tips Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Resource Quick Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Started</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">1.</span>
                  <span>Start with our <strong>Flange Types Guide</strong> to understand your options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">2.</span>
                  <span>Use the <strong>Material Selection Tool</strong> based on your temperature and environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">3.</span>
                  <span>Reference <strong>Pressure-Temperature Ratings</strong> for your class and material</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Topics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>Corrosion Prevention</strong> for harsh environments and extended life</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>Code Compliance</strong> documentation for ASME, API, and AWWA projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>White Papers</strong> for specialized applications and case studies</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Expert Guidance?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our engineering team is ready to help you select the perfect flange for your application.
              Contact us with your specifications and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://www.texasflange.com/contact-us" variant="secondary" size="lg" className="border-white text-blue-900">
                Request Technical Support
              </Button>
              <Button href="https://www.texasflange.com/contact-us" variant="ghost" size="lg" className="text-white hover:text-orange-200">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
