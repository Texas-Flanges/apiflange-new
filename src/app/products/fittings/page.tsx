import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import ProductCard from '@/components/ui/ProductCard';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pipe Fittings | ApiFlange',
  description:
    'Complete selection of ASME-compliant pipe fittings including elbows, tees, reducers, caps, and grooved piping systems for industrial applications.',
  keywords: [
    'pipe fittings',
    'elbows',
    'tees',
    'reducers',
    'caps',
    'grooved piping',
    'ASME fittings',
  ],
  openGraph: {
    title: 'Pipe Fittings | ApiFlange',
    description:
      'Complete selection of ASME-compliant pipe fittings including elbows, tees, reducers, caps, and grooved piping systems for industrial applications.',
    url: 'https://www.apiflange.com/products/fittings',
    type: 'website',
  },
};

interface FittingCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  standardSizes?: string;
}

const fittingCategories: FittingCategory[] = [
  {
    id: 'elbows',
    name: 'Elbows',
    slug: '/products/fittings/elbows',
    description:
      '45° and 90° elbows for directional changes in piping systems. Available in long radius and short radius designs for all pressure classes.',
    standardSizes: '0.5" to 24"',
  },
  {
    id: 'tees',
    name: 'Tees',
    slug: '/products/fittings/tees',
    description:
      'Straight and reducing tees for branch connections. Engineered for equal and unequal flow distribution in complex piping networks.',
    standardSizes: '0.5" to 24"',
  },
  {
    id: 'reducers',
    name: 'Reducers',
    slug: '/products/fittings/reducers',
    description:
      'Concentric and eccentric reducers for pipe size transitions. Optimized flow characteristics and pressure retention.',
    standardSizes: '0.5" to 24"',
  },
  {
    id: 'caps',
    name: 'Caps & Plugs',
    slug: '/products/fittings/caps',
    description:
      'Hemispherical and flat caps for line termination. Threaded and socket weld designs for all pressure requirements.',
    standardSizes: '0.5" to 24"',
  },
  {
    id: 'grooved',
    name: 'Grooved Piping',
    slug: '/products/fittings/grooved',
    description:
      'Quick-connect grooved couplings and fittings for rapid assembly. Ideal for modular systems and field modifications.',
    standardSizes: '0.5" to 12"',
  },
];

export default function FittingsPage() {
  return (
    <>
      <PageHero
        title="Pipe Fittings"
        subtitle="Complete range of ASME-compliant fittings for direction changes, size transitions, and branch connections in industrial piping systems"
        variant="navy"
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Fittings', href: '/products/fittings' },
        ]}
      />

      {/* Introduction */}
      <SectionWrapper padding="lg" variant="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Fitting Solutions
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Pipe fittings are essential components that connect piping sections, enable directional changes, distribute flow, and reduce pipe sizes. ApiFlange provides a complete selection of pressure fittings manufactured to ASME B16.9 and other international standards.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              All our fittings are engineered with optimized flow paths to minimize pressure drop and turbulence. Available in carbon steel, stainless steel, alloy steel, and specialty materials, our fittings are suitable for low-pressure utilities to high-pressure critical service applications.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Standards & Certifications
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'ASME B16.9 (Wrought Steel)',
                'ASME B16.11 (Forged Fittings)',
                'ASTM A234 (Piping)',
                'ANSI Standards',
                'API Specifications',
                'ISO 4016 (Socket Weld)',
              ].map((std, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-brass font-bold">✓</span>
                  <span className="text-gray-700">{std}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1C1C1E] to-[#2A2A2E] rounded-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap size={24} /> Quick Facts
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-1 text-brass">
                  20+ Types Available
                </p>
                <p className="text-sm text-gray-300">
                  Elbows, tees, reducers, caps, crosses, and specialty fittings
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1 text-brass">
                  All Pressure Classes
                </p>
                <p className="text-sm text-gray-300">
                  150 PSI through 4500 PSI and higher available
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1 text-brass">
                  Fast Lead Times
                </p>
                <p className="text-sm text-gray-300">
                  Standard inventory keeps your projects moving
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1 text-brass">
                  Material Flexibility
                </p>
                <p className="text-sm text-gray-300">
                  Carbon, stainless, alloy, and specialty metals
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Product Categories */}
      <SectionWrapper padding="lg" variant="gray" heading="Fitting Types">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {fittingCategories.map((category) => (
            <Link
              key={category.id}
              href={category.slug}
              className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border-t-4 border-brass"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brass transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {category.description}
              </p>
              {category.standardSizes && (
                <p className="text-xs text-gray-500 mb-4">
                  <span className="font-semibold">Sizes:</span> {category.standardSizes}
                </p>
              )}
              <div className="text-brass font-semibold text-sm flex items-center justify-center gap-1">
                Explore
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Material Options */}
      <SectionWrapper
        padding="lg"
        variant="white"
        heading="Material Options"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              material: 'Carbon Steel',
              description: 'Standard material for general industrial applications',
              specs: ['ASTM A234 WPB', 'Pressure: 150-900 PSI', 'Temp: -20°F to 650°F'],
            },
            {
              material: 'Stainless Steel 304',
              description: 'Excellent corrosion resistance for most applications',
              specs: ['ASTM A403 WP304', 'Pressure: 150-900 PSI', 'Temp: -325°F to 840°F'],
            },
            {
              material: 'Stainless Steel 316',
              description: 'Enhanced molybdenum for superior corrosion protection',
              specs: ['ASTM A403 WP316', 'Pressure: 150-900 PSI', 'Temp: -325°F to 840°F'],
            },
            {
              material: 'Alloy Steel P12',
              description: 'High-temperature creep-resistant design',
              specs: ['ASTM A234 WP12', 'Pressure: 300-1500 PSI', 'Temp: -20°F to 1100°F'],
            },
            {
              material: 'Duplex Steel',
              description: 'Superior strength and corrosion resistance',
              specs: ['ASTM A403 WP2205', 'Pressure: 600-2500 PSI', 'Temp: -50°F to 600°F'],
            },
            {
              material: 'Nickel Alloys',
              description: 'Extreme corrosion and temperature applications',
              specs: ['Inconel 600/625', 'Pressure: 150-900 PSI', 'Temp: -320°F to 2100°F'],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-brass"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {item.material}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="space-y-1 text-xs text-gray-700">
                {item.specs.map((spec, i) => (
                  <p key={i}>• {spec}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Applications Section */}
      <SectionWrapper padding="lg" variant="gray" heading="Applications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries</h3>
            <ul className="space-y-3">
              {[
                'Oil & Gas Production and Refining',
                'Petrochemical Processing',
                'Power Generation and Steam Systems',
                'Chemical Processing Plants',
                'Water Treatment and Distribution',
                'HVAC and Refrigeration',
                'Pulp and Paper Manufacturing',
                'Food and Beverage Processing',
                'Pharmaceutical Plants',
                'Marine and Offshore',
              ].map((app, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">→</span>
                  <span className="text-gray-700">{app}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              System Types
            </h3>
            <ul className="space-y-3">
              {[
                'High-Pressure Injection Systems',
                'Low-Pressure Utility Distribution',
                'Cryogenic Service (-320°F)',
                'High-Temperature Piping (1100°F+)',
                'Corrosive Fluid Service',
                'Slurry and Abrasive Applications',
                'Underground and Buried Piping',
                'Subsea and Offshore Systems',
                'Modular and Portable Equipment',
                'Custom Process Systems',
              ].map((app, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">→</span>
                  <span className="text-gray-700">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Sizing Guide */}
      <SectionWrapper padding="lg" variant="white" heading="Quick Reference Guide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-iron-light">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Elbow Applications
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">90° Long Radius</p>
                <p className="text-sm text-gray-700 mt-1">
                  Standard choice for most applications. Minimizes pressure drop and turbulence.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">90° Short Radius</p>
                <p className="text-sm text-gray-700 mt-1">
                  Space-constrained installations. Slightly higher pressure drop.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">45° Elbows</p>
                <p className="text-sm text-gray-700 mt-1">
                  Gentler direction changes. Used in pairs for gradual 90° turns.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-8 border-l-4 border-brass">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Reducer Applications
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">Concentric Reducers</p>
                <p className="text-sm text-gray-700 mt-1">
                  Centered reduction. Used in vertical lines and discharge connections.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Eccentric Reducers</p>
                <p className="text-sm text-gray-700 mt-1">
                  Bottom-aligned reduction. Prevents vapor pockets in pump inlet lines.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Reducing Tees</p>
                <p className="text-sm text-gray-700 mt-1">
                  Branch connections with size reduction in single component.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        heading="Need Fittings for Your Project?"
        subtext="Contact our sales team for quotations, technical support, and fast delivery on standard and custom fitting solutions."
        primaryCTA={{
          label: 'Request Quote',
          href: 'https://www.texasflange.com/contact-us',
        }}
        secondaryCTA={{
          label: 'Contact Sales',
          href: 'https://www.texasflange.com/contact-us',
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Pipe Fittings',
            description:
              'Complete range of ASME-compliant fittings for direction changes, size transitions, and branch connections in industrial piping systems.',
            url: 'https://www.apiflange.com/products/fittings',
            mainEntity: fittingCategories.map((cat) => ({
              '@type': 'Product',
              name: cat.name,
              description: cat.description,
              url: `https://www.apiflange.com${cat.slug}`,
            })),
          }),
        }}
      />
    </>
  );
}
