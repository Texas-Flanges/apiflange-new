'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Globe,
  Wrench,
  Zap,
  Shield,
  Award,
  TrendingUp,
} from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import { CTABanner } from '@/components/ui';
import Container from '@/components/layout/Container';

// Note: Metadata export is a server-only feature
// If using this as a client component, move metadata to a separate layout.tsx or use generateMetadata

interface StandardCard {
  id: string;
  name: string;
  organization: string;
  scope: string;
  sizeRange: string;
  pressureRange?: string;
  materials: string[];
  applications: string[];
  href: string;
  icon: React.ReactNode;
}

const standards: StandardCard[] = [
  {
    id: 'asme-b16-5',
    name: 'ASME B16.5',
    organization: 'American Society of Mechanical Engineers',
    scope: 'Steel pipe flanges, fittings, valves and flanged unions',
    sizeRange: 'NPS 1/2 through NPS 24',
    pressureRange: '150, 300, 400, 600, 900, 1500, 2500 PSI',
    materials: ['Carbon Steel', 'Stainless Steel', 'Alloy Steel'],
    applications: [
      'Petroleum',
      'Petrochemicals',
      'Power Generation',
      'Water Systems',
      'Chemical Processing',
    ],
    href: '/standards/asme-flanges',
    icon: <Award className="w-8 h-8" />,
  },
  {
    id: 'asme-b16-47',
    name: 'ASME B16.47',
    organization: 'American Society of Mechanical Engineers',
    scope: 'Large diameter steel flanges (NPS 26 and larger)',
    sizeRange: 'NPS 26 through NPS 60',
    pressureRange: 'Series A: 75, 150 PSI | Series B: 150, 300 PSI',
    materials: ['Carbon Steel', 'Forged Steel'],
    applications: [
      'Offshore',
      'Pipeline Transport',
      'Refining',
      'Water Distribution',
    ],
    href: '/standards/asme-flanges',
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    id: 'awwa-c207',
    name: 'AWWA C207',
    organization: 'American Water Works Association',
    scope: 'Steel pipe flanges for waterworks (zinc-coated)',
    sizeRange: '4 inches through 144 inches',
    pressureRange: 'Classes B, D, E, F (different pressure ratings)',
    materials: ['Carbon Steel (Zinc-Coated)'],
    applications: [
      'Water Transmission',
      'Water Distribution',
      'Waterworks Systems',
      'Municipal Water',
    ],
    href: '/standards/awwa-flanges',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 'awwa-c228',
    name: 'AWWA C228',
    organization: 'American Water Works Association',
    scope: 'Stainless steel pipe flanges for waterworks',
    sizeRange: '2 inches through 72 inches',
    pressureRange: 'Classes 125, 150, 200 PSI',
    materials: ['Stainless Steel'],
    applications: [
      'Corrosive Water',
      'High-Chloride Environments',
      'Coastal Systems',
      'Premium Water Systems',
    ],
    href: '/standards/awwa-flanges',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    id: 'din-en-1092-1',
    name: 'DIN EN 1092-1',
    organization: 'Deutsches Institut für Normung / European Standardization',
    scope: 'Metric flanges for industrial applications',
    sizeRange: 'DN 10 through DN 4000 (metric sizing)',
    pressureRange: 'PN 6, PN 10, PN 16, PN 25, PN 40, PN 63, PN 100',
    materials: ['Carbon Steel', 'Stainless Steel', 'Nodular Iron'],
    applications: [
      'European Industrial',
      'ISO Metric Systems',
      'Chemical Plants',
      'HVAC Systems',
    ],
    href: '/standards/din-flanges',
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: 'api-605',
    name: 'API 605',
    organization: 'American Petroleum Institute',
    scope: 'Large diameter carbon steel flanges',
    sizeRange: 'Up to 120 inches OD',
    pressureRange: '150, 300, 600, 900, 1500 PSI classes',
    materials: ['Carbon Steel'],
    applications: [
      'Crude Oil',
      'Natural Gas',
      'Petrochemical',
      'Pipeline Systems',
    ],
    href: '/standards/asme-flanges',
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    id: 'mss-sp-44',
    name: 'MSS SP-44',
    organization: 'Manufacturers Standardization Society',
    scope: 'Steel pipeline flanges',
    sizeRange: 'NPS 1 through NPS 24',
    pressureRange: 'Class 150, 300, 600, 900, 1500, 2500',
    materials: ['Carbon Steel'],
    applications: [
      'General Piping',
      'Industrial Systems',
      'Pressure Equipment',
      'Fluid Transport',
    ],
    href: '/standards/asme-flanges',
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

const comparisonHighlights = [
  {
    title: 'ASME/ANSI Standards',
    description: 'North American standard for industrial flanges',
    color: '#1C1C1E',
  },
  {
    title: 'AWWA Standards',
    description: 'Specialized for water and waterworks applications',
    color: '#B5873A',
  },
  {
    title: 'DIN/EN Standards',
    description: 'Metric-based European and international standards',
    color: '#1C1C1E',
  },
];

export default function StandardsPage() {
  return (
    <>
      <PageHero
        title="Flange Standards & Specifications"
        subtitle="Comprehensive guide to industrial flange standards including ASME, ANSI, AWWA, DIN, API, and MSS specifications"
        variant="navy"
        breadcrumbs={[
          { label: 'Standards', href: '/standards' },
        ]}
      />

      <main className="w-full">
        {/* Standards Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-3">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Industrial Flange Standards Overview
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                  Flanges are critical components in piping systems, and their design,
                  dimensions, and material specifications are governed by various international
                  standards. Each standard is developed to address specific industry needs,
                  applications, and geographic requirements. Understanding these standards is
                  essential for proper equipment specification, procurement, and system design.
                </p>
              </div>
            </div>

            {/* Standards Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((standard) => (
                <Link
                  key={standard.id}
                  href={standard.href}
                  className="group block h-full"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 h-full hover:border-brass hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Icon */}
                    <div className="mb-4 text-brass group-hover:scale-110 transition-transform">
                      {standard.icon}
                    </div>

                    {/* Standard Name */}
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {standard.name}
                    </h3>

                    {/* Organization */}
                    <p className="text-sm text-gray-600 font-semibold mb-4">
                      {standard.organization}
                    </p>

                    {/* Scope */}
                    <p className="text-gray-700 font-semibold mb-3">
                      Scope
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {standard.scope}
                    </p>

                    {/* Size Range */}
                    <div className="mb-4">
                      <p className="text-gray-700 font-semibold text-sm mb-1">
                        Size Range
                      </p>
                      <p className="text-gray-600 text-sm">
                        {standard.sizeRange}
                      </p>
                    </div>

                    {/* Pressure Range */}
                    {standard.pressureRange && (
                      <div className="mb-4">
                        <p className="text-gray-700 font-semibold text-sm mb-1">
                          Pressure Ratings
                        </p>
                        <p className="text-gray-600 text-sm">
                          {standard.pressureRange}
                        </p>
                      </div>
                    )}

                    {/* Materials */}
                    <div className="mb-4">
                      <p className="text-gray-700 font-semibold text-sm mb-2">
                        Materials
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {standard.materials.map((material, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <p className="text-gray-700 font-semibold text-sm mb-2">
                        Applications
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {standard.applications.slice(0, 3).map((app, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-brass mr-2 mt-1">•</span>
                            <span>{app}</span>
                          </li>
                        ))}
                        {standard.applications.length > 3 && (
                          <li className="text-brass font-semibold">
                            + {standard.applications.length - 3} more
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-brass font-semibold group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Standards Comparison Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Why Different Standards?
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl">
                Different flange standards exist because various industries and regions
                have unique requirements. Here's a quick overview of the main standard families:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {comparisonHighlights.map((highlight, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="w-1 h-12 rounded-full mb-4"
                    style={{ backgroundColor: highlight.color }}
                  />
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-700">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Key Standards Information Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-12">
              Key Standards Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* North American Standards */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  North American Standards
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-primary mb-2">ASME B16.5 & ANSI B16.5</p>
                    <p className="text-gray-700 text-sm">
                      The most widely used flange standard in North America for industrial
                      piping applications. Covers sizes NPS 1/2 through 24 with pressure
                      classes from 150 to 2500 PSI.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">ASME B16.47</p>
                    <p className="text-gray-700 text-sm">
                      Covers large diameter flanges (NPS 26 and larger) with lower pressure
                      ratings, commonly used in pipeline and water transmission systems.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">API 605</p>
                    <p className="text-gray-700 text-sm">
                      Petroleum Institute standard for large diameter carbon steel flanges,
                      widely used in crude oil and gas transportation systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Specialized Standards */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Specialized Standards
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-primary mb-2">AWWA C207 & C228</p>
                    <p className="text-gray-700 text-sm">
                      American Water Works Association standards specifically designed for
                      water and wastewater applications. C207 uses zinc-coated carbon steel;
                      C228 uses stainless steel for corrosive environments.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">DIN EN 1092-1</p>
                    <p className="text-gray-700 text-sm">
                      European metric flange standard widely adopted internationally. Uses
                      PN (pressure nominale) ratings from PN6 through PN100, with DN (diamètre nominale)
                      sizing.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">MSS SP-44</p>
                    <p className="text-gray-700 text-sm">
                      Manufacturers Standardization Society standard providing specifications
                      for steel pipeline flanges used in general industrial piping systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Selecting the Right Standard Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-8">
              How to Select the Right Standard
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Consider These Factors
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="text-brass font-bold text-xl">1</div>
                    <div>
                      <p className="font-semibold text-primary">Geographic Location</p>
                      <p className="text-gray-700 text-sm">
                        North America typically uses ASME/ANSI standards, while Europe uses DIN/EN standards.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-brass font-bold text-xl">2</div>
                    <div>
                      <p className="font-semibold text-primary">Industry/Application</p>
                      <p className="text-gray-700 text-sm">
                        Water utilities require AWWA standards; oil/gas industries may use API standards.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-brass font-bold text-xl">3</div>
                    <div>
                      <p className="font-semibold text-primary">Operating Conditions</p>
                      <p className="text-gray-700 text-sm">
                        Required pressure rating, temperature range, and media compatibility determine standard selection.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-brass font-bold text-xl">4</div>
                    <div>
                      <p className="font-semibold text-primary">Equipment Compatibility</p>
                      <p className="text-gray-700 text-sm">
                        Flanges must match connected equipment standards and dimension requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-brass font-bold text-xl">5</div>
                    <div>
                      <p className="font-semibold text-primary">Regulatory Requirements</p>
                      <p className="text-gray-700 text-sm">
                        Some jurisdictions mandate specific standards for safety and compliance.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg border-2 border-brass p-8">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Quick Selection Guide
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-primary mb-2">Industrial Piping (General)</p>
                    <p className="text-gray-700 text-sm">→ ASME B16.5</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-primary mb-2">Large Diameter Pipelines</p>
                    <p className="text-gray-700 text-sm">→ ASME B16.47 or API 605</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-primary mb-2">Water Systems</p>
                    <p className="text-gray-700 text-sm">→ AWWA C207 (zinc-coated) or C228 (stainless)</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-primary mb-2">European/Metric Systems</p>
                    <p className="text-gray-700 text-sm">→ DIN EN 1092-1</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-primary mb-2">High-Chloride Environments</p>
                    <p className="text-gray-700 text-sm">→ AWWA C228 (stainless steel)</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Standards Documentation CTA */}
        <CTABanner
          heading="Need Help Selecting the Right Standard?"
          subtext="Our technical experts are ready to guide you through the selection process and ensure you get the perfect flanges for your application."
          primaryCTA={{
            label: 'Request Technical Support',
            href: 'https://www.texasflange.com/contact-us',
          }}
          secondaryCTA={{
            label: 'Download Specifications',
            href: '/resources',
          }}
        />

        {/* Standards Metadata Section - SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Flange Standards & Specifications',
              description:
                'Comprehensive guide to industrial flange standards including ASME B16.5, B16.47, AWWA C207/C228, DIN EN 1092-1, API 605, and MSS SP-44',
              url: 'https://www.apiflange.com/standards',
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: standards.map((standard, idx) => ({
                  '@type': 'ListItem',
                  position: idx + 1,
                  item: {
                    '@type': 'Thing',
                    name: standard.name,
                    description: standard.scope,
                    url: `https://www.apiflange.com${standard.href}`,
                  },
                })),
              },
            }),
          }}
        />
      </main>
    </>
  );
}
