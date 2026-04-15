'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Zap,
  Shield,
  Droplets,
  TrendingUp,
} from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import { FAQ, CTABanner, SpecTable } from '@/components/ui';

interface FAQItem {
  question: string;
  answer: string;
}

const awwaC207ClassesData = [
  { label: 'Class', key: 'class', width: '15%' },
  { label: 'Design Pressure', key: 'pressure', width: '20%' },
  { label: 'Size Range', key: 'sizes', width: '20%' },
  { label: 'Face Type', key: 'face', width: '20%' },
  { label: 'Primary Uses', key: 'uses', width: '25%' },
];

const awwaC207ClassesRows = [
  {
    class: 'Class B',
    pressure: '86 PSI',
    sizes: 'up to 144"',
    face: 'Flat Face',
    uses: 'Low-pressure water transmission',
  },
  {
    class: 'Class D',
    pressure: '175 PSI',
    sizes: 'up to 144"',
    face: 'Flat Face',
    uses: 'Standard water distribution (most common)',
  },
  {
    class: 'Class E',
    pressure: '275 PSI',
    sizes: 'up to 144"',
    face: 'Flat Face',
    uses: 'High-pressure water transmission lines',
  },
  {
    class: 'Class F',
    pressure: '300 PSI',
    sizes: 'up to 48"',
    face: 'Flat Face',
    uses: 'Maximum pressure waterworks service',
  },
];

const awwaC228ClassesData = [
  { label: 'Class', key: 'class', width: '20%' },
  { label: 'Design Pressure', key: 'pressure', width: '20%' },
  { label: 'Size Range', key: 'sizes', width: '20%' },
  { label: 'Material', key: 'material', width: '20%' },
  { label: 'Primary Applications', key: 'applications', width: '20%' },
];

const awwaC228ClassesRows = [
  {
    class: 'Class 125',
    pressure: '125 PSI',
    sizes: '2" to 72"',
    material: 'Stainless Steel',
    applications: 'Low-pressure corrosive water',
  },
  {
    class: 'Class 150',
    pressure: '150 PSI',
    sizes: '2" to 72"',
    material: 'Stainless Steel',
    applications: 'Moderate pressure corrosive/seawater',
  },
  {
    class: 'Class 200',
    pressure: '200 PSI',
    sizes: '2" to 60"',
    material: 'Stainless Steel',
    applications: 'High-pressure corrosive environments',
  },
];

const coatingData = [
  { label: 'Coating Type', key: 'coating', width: '25%' },
  { label: 'Material', key: 'material', width: '25%' },
  { label: 'Thickness', key: 'thickness', width: '25%' },
  { label: 'Corrosion Protection', key: 'protection', width: '25%' },
];

const coatingRows = [
  {
    coating: 'Galvanized (AWWA C207)',
    material: 'Zinc coating per ASTM A123',
    thickness: 'Typically 1.5-3.0 mils',
    protection: 'Excellent for freshwater, moderate for saltwater',
  },
  {
    coating: 'Epoxy (AWWA C207)',
    material: 'Polyamide epoxy per AWWA C213',
    thickness: 'Typically 8-12 mils',
    protection: 'Superior for corrosive water, interior & exterior',
  },
  {
    coating: 'None (AWWA C228)',
    material: 'Stainless steel 304/316L',
    thickness: 'Material inherent (no coating)',
    protection: 'Excellent in all freshwater and most saltwater',
  },
];

const asmeVsAwwaData = [
  { label: 'Specification', key: 'spec', width: '25%' },
  { label: 'ASME B16.5', key: 'asme', width: '37.5%' },
  { label: 'AWWA C207/C228', key: 'awwa', width: '37.5%' },
];

const asmeVsAwwaRows = [
  {
    spec: 'Primary Use',
    asme: 'General industrial piping',
    awwa: 'Water transmission & distribution systems',
  },
  {
    spec: 'Pressure Classes',
    asme: '150 to 2500 PSI (7 classes)',
    awwa: 'C207: 86-300 PSI (Classes B, D, E, F); C228: 125-200 PSI',
  },
  {
    spec: 'Flange Materials',
    asme: 'Carbon, stainless, alloy steels',
    awwa: 'C207: Zinc-coated carbon; C228: Stainless steel',
  },
  {
    spec: 'Face Types',
    asme: 'FF, RF, RJ, T&G available',
    awwa: 'Raised Face standard',
  },
  {
    spec: 'Temperature Range',
    asme: '-20°F to 850°F (material dependent)',
    awwa: '-20°F to 250°F (typically)',
  },
  {
    spec: 'Bolt Materials',
    asme: 'Per design, often A307 or A325',
    awwa: 'Stainless steel (C228) or galvanized (C207)',
  },
  {
    spec: 'Gasket Standard',
    asme: 'No specific gasket standard',
    awwa: 'AWWA C209 gasket standard',
  },
];

const dimensionTableData = [
  { label: 'Pipe Size', key: 'size', width: '15%' },
  { label: 'OD (Class D)', key: 'od', width: '18%' },
  { label: 'Bolt Circle', key: 'bc', width: '18%' },
  { label: 'Thickness (RF)', key: 'thick', width: '18%' },
  { label: 'Bolt Size', key: 'bolts', width: '15%' },
  { label: 'Num Bolts', key: 'num', width: '16%' },
];

const dimensionTableRows = [
  {
    size: '4"',
    od: '7.50"',
    bc: '5.88"',
    thick: '0.44"',
    bolts: '5/8"',
    num: '8',
  },
  {
    size: '6"',
    od: '9.50"',
    bc: '7.63"',
    thick: '0.56"',
    bolts: '5/8"',
    num: '8',
  },
  {
    size: '8"',
    od: '11.50"',
    bc: '9.50"',
    thick: '0.62"',
    bolts: '5/8"',
    num: '12',
  },
  {
    size: '12"',
    od: '15.50"',
    bc: '13.38"',
    thick: '0.75"',
    bolts: '3/4"',
    num: '12',
  },
  {
    size: '18"',
    od: '21.50"',
    bc: '19.25"',
    thick: '1.00"',
    bolts: '7/8"',
    num: '16',
  },
  {
    size: '24"',
    od: '27.50"',
    bc: '25.00"',
    thick: '1.12"',
    bolts: '1"',
    num: '20',
  },
];

const faqItems = [
  {
    question: 'What is the main difference between AWWA C207 and AWWA C228?',
    answer:
      'The primary difference is material and coating strategy. AWWA C207 uses zinc-coated (galvanized) carbon steel for general water systems, providing cost-effective corrosion protection. AWWA C228 uses stainless steel (typically 304/316L) for environments with high chloride or acidic conditions where galvanizing alone is insufficient. Choose C207 for inland freshwater systems; choose C228 for coastal, brackish, or corrosive environments.',
  },
  {
    question: 'Can I use AWWA C207 flanges instead of ASME B16.5 in water systems?',
    answer:
      'Not in all cases. AWWA C207 is specifically designed for waterworks applications and uses different pressure class designations, coating requirements, and gasket standards (AWWA C209). ASME B16.5 is for general industrial piping. While dimensions may be similar for some sizes, the specifications differ in pressure ratings, materials, and design intent. Always use the standard specified in your system design. Many water utilities mandate AWWA standards for compliance.',
  },
  {
    question: 'What is the benefit of epoxy coating over galvanizing?',
    answer:
      'Epoxy coating (AWWA C213) provides superior protection in aggressive water conditions and protects both interior and exterior surfaces comprehensively. However, epoxy costs more than galvanizing. Galvanizing is adequate for most freshwater systems and is more economical. For coastal areas, high-temperature water, or aggressive chemistry, epoxy is the preferred option. Service life for both coatings depends on environmental conditions.',
  },
  {
    question: 'Do AWWA flanges work with standard industrial bolts?',
    answer:
      'AWWA C207 and C228 typically specify stainless steel bolts and fasteners to avoid galvanic corrosion where dissimilar metals contact. Using regular carbon steel bolts on galvanized AWWA C207 flanges can create corrosion problems over time. Always use fasteners meeting AWWA requirements. If substituting bolts, verify material compatibility with your engineer.',
  },
  {
    question: 'What temperature range are AWWA C207/C228 flanges rated for?',
    answer:
      'AWWA flanges are optimized for water temperatures typically ranging from -20°F to 250°F. Higher temperatures can affect gasket and coating performance. AWWA standards do not address high-temperature steam or process heat applications. For hot water, hot oil, or steam service, consult ASME B16.5, which extends to 850°F.',
  },
  {
    question: 'Are AWWA gaskets different from standard gasket materials?',
    answer:
      'Yes. AWWA C209 specifies gasket materials formulated for potable water compatibility and non-corrosive service. Common AWWA gasket materials include nitrile and EPDM rubber, chosen for water compatibility. Industrial ASME B16.5 applications may use different gasket materials (graphite-filled, spiral wound, etc.). Always match gaskets to the flange standard and confirm potable water approval when required.',
  },
];

const watermarksPoints = [
  {
    title: 'Corrosion Resistance',
    description:
      'AWWA standards mandate galvanizing or stainless steel for long-term protection in water systems.',
  },
  {
    title: 'Potable Water Compatibility',
    description:
      'AWWA C207/C228 ensure flanges, coatings, and gaskets are safe for drinking water applications.',
  },
  {
    title: 'Pressure Optimization',
    description:
      'Pressure classes (86-300 PSI) are designed for typical water transmission, balancing cost and safety.',
  },
  {
    title: 'Standardized Gaskets',
    description:
      'AWWA C209 gasket standard ensures compatibility and water safety across suppliers.',
  },
];

export default function AWWAFlangePage() {
  return (
    <>
      <PageHero
        title="AWWA C207 & C228 Flange Standards"
        subtitle="Complete technical guide to American Water Works Association flange standards for water and waterworks applications"
        variant="navy"
        breadcrumbs={[
          { label: 'Standards', href: '/standards' },
          { label: 'AWWA Flanges', href: '/standards/awwa-flanges' },
        ]}
      />

      <main className="w-full">
        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-primary mb-6">
                AWWA Flange Standards Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The American Water Works Association (AWWA) develops standards specifically for
                water transmission, distribution, and treatment systems. AWWA C207 and C228 are
                the primary flange standards covering flanged steel pipe for waterworks. These
                standards differ significantly from general industrial standards like ASME B16.5
                because they address the unique demands of water systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                AWWA standards mandate corrosion protection (galvanizing or stainless steel),
                establish potable water-safe materials, and specify pressure classes optimized
                for water system economics. If you're specifying flanges for a waterworks
                project, AWWA standards are typically required for regulatory compliance and
                system reliability.
              </p>

              <div className="bg-gradient-to-r from-[#1C1C1E] to-[#B5873A] text-white rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Two Standards for Different Needs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-2">AWWA C207</h4>
                    <p className="text-sm opacity-90">
                      Steel pipe flanges with galvanized or epoxy coating for general water systems.
                      Sizes 4" to 144", Classes B/D/E/F.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">AWWA C228</h4>
                    <p className="text-sm opacity-90">
                      Stainless steel pipe flanges for corrosive or brackish water environments.
                      Sizes 2" to 72", Classes 125/150/200 PSI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-brass p-6">
                <h3 className="text-lg font-bold text-primary mb-3">
                  Why Water Utilities Use AWWA Standards
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Regulatory requirement in many jurisdictions</li>
                  <li>• Ensures long-term corrosion resistance in water environments</li>
                  <li>• Guarantees potable water safety of all materials and coatings</li>
                  <li>• Optimizes cost for typical water operating pressures (100-350 PSI)</li>
                  <li>• Specifies stainless steel fasteners to prevent galvanic corrosion</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* AWWA C207 Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-8">
              AWWA C207: Steel Pipe Flanges for Waterworks
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              AWWA C207 specifies flanged steel pipe fittings for waterworks systems. Available
              in carbon steel with galvanized or epoxy coating, these flanges are designed for
              water transmission, distribution, and treatment applications. The standard covers
              pipe sizes from 4 inches to 144 inches with four pressure classes.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-6">
              Pressure Classes (AWWA C207)
            </h3>

            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
              <SpecTable
                columns={awwaC207ClassesData}
                data={awwaC207ClassesRows}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Class D (Most Common)
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Class D at 175 PSI is the industry standard for most water distribution systems.
                  It represents the optimal balance between pressure capability and cost for typical
                  municipal water operations.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-brass font-bold">✓</span>
                    <span>Most sizes available in stock</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brass font-bold">✓</span>
                    <span>Economical for large-diameter systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brass font-bold">✓</span>
                    <span>Adequate for most transmission lines</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brass font-bold">✓</span>
                    <span>Interchangeable with most utility networks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Class B vs. Class E/F
                </h3>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold text-primary mb-1">Class B (86 PSI)</p>
                    <p>For low-pressure applications; less common due to economic constraints.</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-primary mb-1">Class E (275 PSI)</p>
                    <p>For high-elevation systems and long-distance transmission with pressure boost.</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-primary mb-1">Class F (300 PSI)</p>
                    <p>Premium high-pressure service; used in critical transmission bottlenecks.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>


        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <FAQ
              items={faqItems}
              title="Frequently Asked Questions"
              description="Common questions about AWWA C207 and C228 flange standards"
            />
          </Container>
        </section>

        {/* CTA Section */}
        <CTABanner
          heading="Need AWWA C207 or C228 Flanges?"
          subtext="Our team specializes in water system flanges. We can help you select the right pressure class, coating, and material for your waterworks application."
          primaryCTA={{
            label: 'Get a Quote',
            href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new',
          }}
          secondaryCTA={{
            label: 'View Water Flanges',
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
              headline: 'AWWA C207 & C228 Flange Standards for Water Systems',
              description:
                'Comprehensive guide to AWWA C207 and C228 flange standards for waterworks applications, coatings, pressure classes, and specifications',
              image: 'https://www.apiflange.com/awwa-flanges.jpg',
              datePublished: '2024-01-01',
              dateModified: '2024-01-01',
              author: {
                '@type': 'Organization',
                name: 'API Flange',
              },
              mainEntity: {
                '@type': 'Thing',
                name: 'AWWA C207 & C228 Standards',
                description:
                  'Standards for flanged steel pipe and stainless steel pipe for waterworks',
              },
            }),
          }}
        />
      </main>
    </>
  );
}
