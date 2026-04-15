import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products | ApiFlange',
  description:
    'Explore our comprehensive product lineup including flanges, pipe fittings, valve accessories, and gaskets for industrial piping systems.',
  keywords: [
    'flanges',
    'pipe fittings',
    'valve accessories',
    'gaskets',
    'industrial piping',
  ],
  openGraph: {
    title: 'Products | ApiFlange',
    description:
      'Explore our comprehensive product lineup including flanges, pipe fittings, valve accessories, and gaskets for industrial piping systems.',
    url: 'https://www.apiflange.com/products',
    type: 'website',
  },
};

interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  highlightColor: string;
}

const productCategories: ProductCategory[] = [
  {
    id: 'flanges',
    name: 'Steel Pipe Flanges',
    slug: '/products/flanges',
    description:
      'Our comprehensive range includes 20 different flange types to meet every industrial piping requirement. From weld neck to RTJ flanges, we supply solutions for high-pressure, high-temperature, and critical service applications.',
    highlightColor: 'border-blue-500',
  },
  {
    id: 'fittings',
    name: 'Pipe Fittings',
    slug: '/products/fittings',
    description:
      'Complete selection of pressure pipe fittings including elbows, tees, reducers, caps, and grooved piping systems. All fittings meet ASME standards for reliability and safety in critical applications.',
    highlightColor: 'border-emerald-500',
  },
  {
    id: 'valve-accessories',
    name: 'Valve Accessories',
    slug: '/products/valve-accessories',
    description:
      'Supporting components for valve installations including valve covers, mounting plates, bonnets, and actuator interfaces. Engineered for compatibility with all major industrial valve manufacturers.',
    highlightColor: 'border-purple-500',
  },
  {
    id: 'gaskets',
    name: 'Industrial Gaskets',
    slug: '/products/gaskets',
    description:
      'Gaskets in all standard flange sizes and ratings. Materials include PTFE, elastomers, metal composites, and spiral-wound designs for every operating condition.',
    highlightColor: 'border-red-500',
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Industrial Piping Solutions"
        subtitle="Complete product portfolio for demanding applications in oil & gas, petrochemical, power generation, and industrial processing"
        variant="navy"
        breadcrumbs={[{ label: 'Products', href: '/products' }]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              href={category.slug}
              className={`group block p-8 bg-white border-l-4 ${category.highlightColor} rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brass transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {category.description}
              </p>
              <div className="flex items-center text-brass font-semibold group-hover:gap-3 gap-2 transition-all">
                Explore Category
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        padding="lg"
        variant="gray"
        heading="Why Choose ApiFlange?"
        subheading="Industry-leading expertise, quality, and reliability"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '🏭',
              title: 'Industrial Grade',
              description:
                'All products supplied to ASME, ANSI, API, and DIN standards for guaranteed performance.',
            },
            {
              icon: '✓',
              title: 'Quality Assured',
              description:
                'Rigorous testing and inspection ensure every product meets exacting specifications.',
            },
            {
              icon: '⚡',
              title: 'Rapid Delivery',
              description:
                'Efficient logistics and in-stock inventory for quick order fulfillment.',
            },
            {
              icon: '🤝',
              title: 'Expert Support',
              description:
                'Technical specialists available to assist with product selection and applications.',
            },
          ].map((benefit, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Product Standards">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-iron">
              International Standards
            </h3>
            <ul className="space-y-4">
              {[
                'ASME B16.5 - Steel Pipe Flanges and Flanged Fittings',
                'ASME B16.36 - Orifice Flanges',
                'API 6A - Wellhead Equipment',
                'API 610 - Centrifugal Pumps',
                'ISO 5010 - Orifice Plates',
                'DIN 2501 - Steel Flanges',
              ].map((standard, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">{standard}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-iron">
              Material Specifications
            </h3>
            <ul className="space-y-4">
              {[
                'Carbon Steel (ASTM A105, A350 Grade LF2)',
                'Stainless Steel (304/316/duplex/super duplex)',
                'Alloy Steel (ASTM A182 F5, F11, F22)',
                'Nickel Alloys (Inconel, Monel)',
                'Titanium (Grade 2, Grade 5)',
                'Cast Iron & Ductile Iron',
              ].map((material, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">{material}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        heading="Ready to Find Your Perfect Solution?"
        subtext="Contact our technical specialists or browse our comprehensive product catalog to get started."
        primaryCTA={{
          label: 'View Flanges',
          href: '/products/flanges',
        }}
        secondaryCTA={{
          label: 'Request Quote',
          href: 'https://www.texasflange.com/contact-us',
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ApiFlange',
            url: 'https://www.apiflange.com',
            product: [
              {
                '@type': 'Product',
                name: 'Steel Pipe Flanges',
                url: 'https://www.apiflange.com/products/flanges',
              },
              {
                '@type': 'Product',
                name: 'Pipe Fittings',
                url: 'https://www.apiflange.com/products/fittings',
              },
            ],
          }),
        }}
      />
    </>
  );
}
