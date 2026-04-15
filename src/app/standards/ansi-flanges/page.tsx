'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  AlertCircle,
  BookOpen,
  Globe,
  Award,
} from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import { FAQ, CTABanner, SpecTable } from '@/components/ui';

interface FAQItem {
  question: string;
  answer: string;
}

const standardHistoryData = [
  { label: 'Year', key: 'year', width: '15%' },
  { label: 'Edition', key: 'edition', width: '25%' },
  { label: 'Key Changes', key: 'changes', width: '60%' },
];

const standardHistoryRows = [
  {
    year: '1973',
    edition: 'ANSI B16.5 Initial',
    changes: 'First national standard for pipe flanges',
  },
  {
    year: '1988',
    edition: 'ANSI B16.5-1988',
    changes: 'Incorporated into ASME standard system',
  },
  {
    year: '2009',
    edition: 'ASME B16.5-2009',
    changes: 'Transition to ASME designation, dimensional updates',
  },
  {
    year: '2017',
    edition: 'ASME B16.5-2017',
    changes: 'Material clarifications, modern manufacturing methods',
  },
];

const dimensionComparisonData = [
  { label: 'Specification', key: 'spec', width: '30%' },
  { label: 'Measure Type', key: 'measure', width: '35%' },
  { label: 'Impact', key: 'impact', width: '35%' },
];

const dimensionComparisonRows = [
  {
    spec: 'Bolt Hole Diameter',
    measure: 'Standardized to ±0.01 inch',
    impact: 'Ensures interchangeability across manufacturers',
  },
  {
    spec: 'Flange Thickness',
    measure: 'Calculated per pressure class',
    impact: 'Direct function of pressure rating and material',
  },
  {
    spec: 'Bore Diameter',
    measure: 'Matches nominal pipe size',
    impact: 'Ensures proper fit with piping system',
  },
  {
    spec: 'Face Type Geometry',
    measure: 'Precise measurements (FF, RF, RJ, T&G)',
    impact: 'Gasket sealing surface must match flange face',
  },
];

const faqItems = [
  {
    question: 'If ASME B16.5 and ANSI B16.5 are the same, why do both exist?',
    answer:
      'Historically, ANSI (American National Standards Institute) was responsible for publishing national consensus standards. When a standard like B16.5 was developed, it would be published under ANSI designation. In the 1980s-1990s, ASME (American Society of Mechanical Engineers) began consolidating standards under its own publishing structure. Modern standards are published as ASME standards, but ANSI still recognizes them. The specs are identical; only the designating body differs.',
  },
  {
    question: 'Can I use ASME B16.5 equipment with ANSI B16.5 equipment?',
    answer:
      'Yes, absolutely. Since the dimensional and material specifications are identical, a flange manufactured to ASME B16.5 is completely interchangeable with one manufactured to ANSI B16.5. You can bolt them together without any issues. This interchangeability is intentional and ensures all manufacturers comply with the same standard.',
  },
  {
    question: 'Which standard should I specify for new equipment?',
    answer:
      'Specify ASME B16.5 for all new designs and specifications. ASME is the current publishing body and maintains the standard with regular updates. However, if you have legacy equipment specified to ANSI B16.5, these are still valid and will match modern ASME-designated equipment.',
  },
  {
    question: 'How often is the ASME B16.5 standard updated?',
    answer:
      'ASME typically updates major standards every 5-10 years. Updates address manufacturing improvements, clarify ambiguities, and incorporate new material grades and testing methods. Each new edition is backward compatible with prior versions—newer flanges will work with older equipment. Check the publication year when specifying.',
  },
  {
    question: 'Are there any differences between ASME B16.5-2017 and ASME B16.5-2009?',
    answer:
      'The core flange dimensions and pressure ratings are essentially unchanged between these editions. Main differences include clarified definitions of material groups, updated material specifications to match current ASTM standards, and refined explanatory notes. For most industrial applications, flanges from either edition are interchangeable.',
  },
  {
    question: 'Where can I find the full ASME B16.5 standard document?',
    answer:
      'The ASME B16.5 standard is published by the American Society of Mechanical Engineers and is available for purchase at asme.org. Individual editions (2009, 2017, etc.) can be ordered as PDFs or printed copies. Many technical libraries and universities maintain copies for reference. For specific requirements, contact the ASME standards group.',
  },
];

const keyDimensionCategories = [
  {
    title: 'Bolt Hole Circle (BHC)',
    description:
      'The diameter of the circle on which bolt holes are located. Standardized for each flange size and pressure class. Critical for proper bolting.',
    impact: 'Determines bolt spacing and torque distribution',
  },
  {
    title: 'Flange Outside Diameter (OD)',
    description:
      'The outer perimeter of the flange face. Larger for higher pressure classes. Affects space requirements and handling.',
    impact: 'Determines installation space envelope',
  },
  {
    title: 'Flange Thickness',
    description:
      'Varies by pressure class and material. Higher pressure classes require thicker flanges. Designed to withstand internal pressure.',
    impact: 'Critical for pressure containment and safety',
  },
  {
    title: 'Bore Diameter',
    description:
      'Internal opening that matches the nominal pipe size. Must allow pipe insertion and welding clearance.',
    impact: 'Determines flow capacity and fitting compatibility',
  },
];

export default function ANSIFlangePage() {
  return (
    <>
      <PageHero
        title="ANSI B16.5 Flange Standard"
        subtitle="Understanding ANSI B16.5, its relationship to ASME B16.5, and how to use ANSI-designated flanges in modern applications"
        variant="navy"
        breadcrumbs={[
          { label: 'Standards', href: '/standards' },
          { label: 'ANSI Flanges', href: '/standards/ansi-flanges' },
        ]}
      />

      <main className="w-full">
        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-primary mb-6">
                ANSI B16.5 Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ANSI B16.5 (American National Standards Institute B16.5) is a national consensus
                standard for pipe flanges and flanged fittings. The standard specifies dimensions,
                pressure-temperature ratings, materials, and design criteria for flanges ranging
                from NPS 1/2 through NPS 24, with pressure classes from 150 to 2500 PSI.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ANSI B16.5 is used almost identically to ASME B16.5. In fact, modern designations
                use ASME B16.5, while ANSI B16.5 remains in legacy documents and older equipment
                specifications. The key point: both designations refer to the same standard, with
                identical dimensions and specifications.
              </p>

              <div className="bg-iron text-white rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">The Essential Truth</h3>
                <p className="text-lg mb-4">
                  ANSI B16.5 and ASME B16.5 are the same standard. The only difference is the
                  designating organization. Flanges manufactured to either specification are
                  completely interchangeable.
                </p>
                <div className="bg-white/10 rounded p-4">
                  <p className="text-sm opacity-90">
                    If you have equipment specified as "ANSI B16.5" manufactured in the 1990s or
                    early 2000s, it will bolt directly to modern "ASME B16.5" equipment. No
                    compatibility issues exist.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-brass p-6">
                <h3 className="text-lg font-bold text-primary mb-3">
                  Why Both Names Exist
                </h3>
                <p className="text-gray-700 mb-4">
                  The U.S. flange standard was originally published by ANSI. When ASME consolidated
                  standards under its publishing authority in the 1980s-1990s, the standard became
                  "ASME B16.5," but ANSI continued to recognize it as an American national standard.
                  Both designations are valid; modern specifications prefer "ASME B16.5."
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Historical Context Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-12">
              Standard Evolution & History
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              The ANSI/ASME B16.5 standard has evolved over decades to accommodate manufacturing
              advances, new materials, and updated testing methods. Understanding this history
              helps explain why you see both ANSI and ASME designations in the industry.
            </p>

            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
              <SpecTable columns={standardHistoryData} data={standardHistoryRows} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Why Standards Evolve
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span><strong>Manufacturing:</strong> New fabrication technologies allow tighter tolerances</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span><strong>Materials:</strong> New alloys and grades are developed and added</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span><strong>Testing:</strong> Advanced testing methods improve reliability data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span><strong>Clarification:</strong> Industry feedback identifies ambiguities requiring resolution</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span><strong>Harmonization:</strong> Alignment with international standards (ISO, DIN, EN)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#B5873A]/10 to-transparent rounded-lg p-8 border border-brass">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Backward Compatibility
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  A critical principle: newer editions are always backward compatible with older
                  ones. If you manufactured a flange to ANSI B16.5 in 1990, it will work perfectly
                  with equipment manufactured to ASME B16.5-2017.
                </p>
                <p className="text-gray-700 text-sm">
                  This compatibility is intentional and engineered. Updates maintain core dimensions
                  and only refine materials, clarify terminology, or add new options—they never
                  obsolete existing specifications.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Specifications & Dimensions Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Standard Dimensions & Specifications
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              ANSI B16.5 (and identical ASME B16.5) specifies precise dimensions for all flanges.
              Manufacturers must adhere to these dimensions to ensure interchangeability. Key
              dimension categories include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {keyDimensionCategories.map((category, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-1 h-8 bg-brass rounded-full flex-shrink-0" />
                    <h3 className="text-lg font-bold text-primary">{category.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{category.description}</p>
                  <p className="text-sm text-brass font-semibold">
                    {category.impact}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-primary mb-6">
              Dimension Standardization
            </h3>

            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
              <SpecTable
                columns={dimensionComparisonData}
                data={dimensionComparisonRows}
              />
            </div>

            <div className="bg-blue-50 border-l-4 border-brass p-6">
              <p className="text-gray-700">
                <strong>Why Standardized Dimensions Matter:</strong> If each manufacturer could
                specify their own flange dimensions, you couldn't mix equipment. Standardized
                dimensions allow users to purchase flanges from different vendors and have them
                work interchangeably. This competitive market benefits end users with better
                pricing and faster delivery.
              </p>
            </div>
          </Container>
        </section>

        {/* Reference Dimensions Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Common Dimension References
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              For design and specification purposes, here are typical dimensions for common ANSI
              B16.5 flange sizes. These are approximate; always consult the standard or
              manufacturer data for exact dimensions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-4">
                  NPS 1 (Class 150)
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>OD:</strong> 4.25 inches</p>
                  <p><strong>Bolt Circle:</strong> 3.12 inches</p>
                  <p><strong>Thickness (RF):</strong> 0.44 inches</p>
                  <p><strong>Bolts:</strong> 4 × 1/2 inch</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-4">
                  NPS 4 (Class 300)
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>OD:</strong> 7.50 inches</p>
                  <p><strong>Bolt Circle:</strong> 6.19 inches</p>
                  <p><strong>Thickness (RF):</strong> 0.62 inches</p>
                  <p><strong>Bolts:</strong> 8 × 5/8 inch</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-4">
                  NPS 12 (Class 600)
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>OD:</strong> 17.00 inches</p>
                  <p><strong>Bolt Circle:</strong> 15.25 inches</p>
                  <p><strong>Thickness (RF):</strong> 1.12 inches</p>
                  <p><strong>Bolts:</strong> 12 × 7/8 inch</p>
                </div>
              </div>
            </div>

            <div className="bg-iron text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">For Complete Dimension Data</h3>
              <p className="mb-4">
                The examples above represent just three common sizes. ANSI B16.5 specifies
                complete dimensions for all sizes (NPS 1/2 through 24) across all pressure
                classes (150, 300, 400, 600, 900, 1500, 2500 PSI).
              </p>
              <p className="text-sm opacity-90">
                For a complete dimension table for your specific flange size and pressure class,
                consult the ASME B16.5 standard or request dimension sheets from your flange
                manufacturer.
              </p>
            </div>
          </Container>
        </section>

        {/* Link to ASME Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Understanding the ASME Connection
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While this page focuses on ANSI B16.5 for historical context, it's important to
                understand that ASME B16.5 is the modern evolution of the same standard. The
                specifications, dimensions, pressure ratings, and materials are identical.
              </p>

              <div className="bg-gradient-to-r from-[#1C1C1E] to-[#B5873A] rounded-lg p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Want the Technical Deep Dive?
                </h3>
                <p className="mb-6">
                  For comprehensive information about flange specifications, materials, pressure
                  classes, face types, and design guidance, visit our detailed ASME B16.5 page.
                </p>
                <Link
                  href="/standards/asme-flanges"
                  className="inline-flex items-center gap-2 bg-white text-iron px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
                >
                  Explore ASME B16.5
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Key Takeaway
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're looking at legacy equipment marked "ANSI B16.5," understand that it
                  uses the same flange design as modern "ASME B16.5" equipment. You can source
                  replacements using either designation—they're compatible. For new projects,
                  use the ASME designation as it's the current standard.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Specification Harmony Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-12">
              Ensuring Flange Interchangeability
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-brass text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Precise Specifications
                </h3>
                <p className="text-gray-700 text-sm">
                  ANSI/ASME B16.5 details exact dimensions down to 0.01 inch, ensuring that flanges
                  from different manufacturers can be mixed in the same system.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-brass text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Material Standards
                </h3>
                <p className="text-gray-700 text-sm">
                  All manufacturers use the same ASTM material specs (A105, A182 F304, etc.),
                  guaranteeing consistent chemical composition and mechanical properties.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-brass text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Testing & Compliance
                </h3>
                <p className="text-gray-700 text-sm">
                  ANSI/ASME requires manufacturers to test and certify compliance, backed by third-party
                  inspection and material certs.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-brass p-6">
              <h3 className="text-lg font-bold text-primary mb-3">
                The Competitive Benefit
              </h3>
              <p className="text-gray-700">
                Because of standardization, you can get competitive bids from multiple flange
                manufacturers and install equipment from different sources in the same system. This
                drives prices down and improves delivery times.
              </p>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <FAQ
              items={faqItems}
              title="Frequently Asked Questions"
              description="Common questions about ANSI B16.5 and its relationship to ASME B16.5"
            />
          </Container>
        </section>

        {/* Related Standards Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-12">
              Related Flange Standards
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              ANSI/ASME B16.5 is just one standard in a family of flange specifications. Here are
              related standards you might encounter:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/standards/asme-flanges"
                className="group block bg-white rounded-lg p-8 border border-gray-200 hover:border-brass hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-brass">
                  ASME B16.47
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Large diameter flanges (NPS 26-60). Lower pressure ratings, optimized for pipeline
                  and waterworks.
                </p>
                <span className="text-brass font-semibold flex items-center gap-2">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/standards/awwa-flanges"
                className="group block bg-white rounded-lg p-8 border border-gray-200 hover:border-brass hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-brass">
                  AWWA C207 & C228
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Water industry standards. C207 for zinc-coated steel; C228 for stainless steel in
                  corrosive environments.
                </p>
                <span className="text-brass font-semibold flex items-center gap-2">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/standards/din-flanges"
                className="group block bg-white rounded-lg p-8 border border-gray-200 hover:border-brass hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-brass">
                  DIN EN 1092-1
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  European metric flange standard. Uses PN pressure ratings and DN sizing. Common in
                  international projects.
                </p>
                <span className="text-brass font-semibold flex items-center gap-2">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-2">
                  API 605
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  American Petroleum Institute standard for large diameter carbon steel flanges. Used
                  in crude oil and gas systems.
                </p>
                <span className="text-gray-600 font-semibold">
                  Check our standards overview
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <CTABanner
          heading="Need ANSI B16.5 Flanges?"
          subtext="Whether you're specifying ANSI B16.5 for legacy equipment or ASME B16.5 for new projects, our technical team can help ensure you get the right flanges for your application."
          primaryCTA={{
            label: 'Request a Quote',
            href: 'https://www.texasflange.com/contact-us',
          }}
          secondaryCTA={{
            label: 'Explore Flange Catalog',
            href: '/products/flanges',
          }}
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'ANSI B16.5 Flange Standard',
              description:
                'Comprehensive guide to ANSI B16.5 flange standard, its relationship to ASME B16.5, dimensions, and applications',
              image: 'https://www.apiflange.com/ansi-flanges.jpg',
              datePublished: '2024-01-01',
              dateModified: '2024-01-01',
              author: {
                '@type': 'Organization',
                name: 'API Flange',
              },
              mainEntity: {
                '@type': 'Thing',
                name: 'ANSI B16.5 Standard',
                description: 'National consensus standard for pipe flanges and flanged fittings',
              },
            }),
          }}
        />
      </main>
    </>
  );
}
