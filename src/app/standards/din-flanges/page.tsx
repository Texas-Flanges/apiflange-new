'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Globe,
  Zap,
  Shield,
  BookOpen,
} from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import { FAQ, CTABanner, SpecTable } from '@/components/ui';

interface FAQItem {
  question: string;
  answer: string;
}

const pnRatingsData = [
  { label: 'PN Rating', key: 'pn', width: '15%' },
  { label: 'Design Pressure (bar)', key: 'bar', width: '20%' },
  { label: 'Design Pressure (PSI)', key: 'psi', width: '20%' },
  { label: 'Size Range', key: 'sizes', width: '20%' },
  { label: 'Common Applications', key: 'apps', width: '25%' },
];

const pnRatingsRows = [
  {
    pn: 'PN 6',
    bar: '6 bar',
    psi: '87 PSI',
    sizes: 'DN 10-2000',
    apps: 'Low-pressure water, HVAC systems',
  },
  {
    pn: 'PN 10',
    bar: '10 bar',
    psi: '145 PSI',
    sizes: 'DN 10-2000',
    apps: 'General industrial, water supply',
  },
  {
    pn: 'PN 16',
    bar: '16 bar',
    psi: '232 PSI',
    sizes: 'DN 10-2000',
    apps: 'Standard industrial piping',
  },
  {
    pn: 'PN 25',
    bar: '25 bar',
    psi: '363 PSI',
    sizes: 'DN 10-1500',
    apps: 'High-pressure industrial systems',
  },
  {
    pn: 'PN 40',
    bar: '40 bar',
    psi: '580 PSI',
    sizes: 'DN 10-900',
    apps: 'Very high-pressure service',
  },
  {
    pn: 'PN 63',
    bar: '63 bar',
    psi: '914 PSI',
    sizes: 'DN 10-400',
    apps: 'Critical high-pressure applications',
  },
  {
    pn: 'PN 100',
    bar: '100 bar',
    psi: '1450 PSI',
    sizes: 'DN 10-250',
    apps: 'Extreme high-pressure service',
  },
  {
    pn: 'PN 160',
    bar: '160 bar',
    psi: '2320 PSI',
    sizes: 'DN 10-200',
    apps: 'High-pressure hydraulic and process',
  },
  {
    pn: 'PN 250',
    bar: '250 bar',
    psi: '3625 PSI',
    sizes: 'DN 10-150',
    apps: 'Ultra-high-pressure industrial',
  },
  {
    pn: 'PN 320',
    bar: '320 bar',
    psi: '4640 PSI',
    sizes: 'DN 10-100',
    apps: 'Specialty high-pressure systems',
  },
  {
    pn: 'PN 400',
    bar: '400 bar',
    psi: '5800 PSI',
    sizes: 'DN 10-100',
    apps: 'Maximum-pressure industrial service',
  },
];

const flangeTypesData = [
  { label: 'Type', key: 'type', width: '18%' },
  { label: 'Designation', key: 'designation', width: '18%' },
  { label: 'Description', key: 'description', width: '64%' },
];

const flangeTypesRows = [
  {
    type: 'Type 11',
    designation: 'Weld Neck (WN)',
    description:
      'Tapered hub with gradual transition. Preferred for high-temperature and high-pressure applications due to excellent fatigue resistance.',
  },
  {
    type: 'Type 12/13',
    designation: 'Slip-On (SO)',
    description:
      'Flange slips over pipe with two fillet welds. Cost-effective option for lower pressure applications.',
  },
  {
    type: 'Type 02/32',
    designation: 'Socket Weld (SW)',
    description:
      'Pipe inserts into socket with fillet weld at end. Compact design for small-diameter piping.',
  },
  {
    type: 'Type 04',
    designation: 'Lap Joint (LJ)',
    description:
      'Loose flange on stub end. Allows rotation and interchangeability; economical for frequent changes.',
  },
  {
    type: 'Type 13',
    designation: 'Threaded (Th)',
    description:
      'Pipe threads into flange bore. Used where welding is not possible or practical.',
  },
  {
    type: 'Type 05',
    designation: 'Blind/Cap (Bl)',
    description:
      'Solid flange with no bore. Used to cap pipe ends or isolate portions of system.',
  },
];

const dnToNpsData = [
  { label: 'DN (mm)', key: 'dn', width: '25%' },
  { label: 'NPS (inches)', key: 'nps', width: '25%' },
  { label: 'Approximate', key: 'approx', width: '25%' },
  { label: 'Common?', key: 'common', width: '25%' },
];

const dnToNpsRows = [
  { dn: 'DN 10', nps: 'NPS 3/8"', approx: 'Approx 0.4"', common: 'Rare' },
  { dn: 'DN 15', nps: 'NPS 1/2"', approx: 'Approx 0.6"', common: 'Common' },
  { dn: 'DN 20', nps: 'NPS 3/4"', approx: 'Approx 0.8"', common: 'Common' },
  { dn: 'DN 25', nps: 'NPS 1"', approx: 'Approx 1.0"', common: 'Common' },
  { dn: 'DN 32', nps: 'NPS 1 1/4"', approx: 'Approx 1.25"', common: 'Common' },
  { dn: 'DN 40', nps: 'NPS 1 1/2"', approx: 'Approx 1.5"', common: 'Very Common' },
  { dn: 'DN 50', nps: 'NPS 2"', approx: 'Approx 2.0"', common: 'Very Common' },
  { dn: 'DN 80', nps: 'NPS 3"', approx: 'Approx 3.0"', common: 'Very Common' },
  { dn: 'DN 100', nps: 'NPS 4"', approx: 'Approx 4.0"', common: 'Very Common' },
  { dn: 'DN 150', nps: 'NPS 6"', approx: 'Approx 6.0"', common: 'Very Common' },
];

const dinVsAsmeData = [
  { label: 'Parameter', key: 'param', width: '25%' },
  { label: 'DIN EN 1092-1', key: 'din', width: '37.5%' },
  { label: 'ASME B16.5', key: 'asme', width: '37.5%' },
];

const dinVsAsmeRows = [
  {
    param: 'Sizing System',
    din: 'Metric (DN in millimeters)',
    asme: 'Inch-based (NPS in inches)',
  },
  {
    param: 'Pressure Ratings',
    din: 'PN (Pressure Nominale) 6-100 bar',
    asme: 'Pressure Classes 150-2500 PSI',
  },
  {
    param: 'Geographic Usage',
    din: 'Europe, Asia, most international',
    asme: 'North America, some international',
  },
  {
    param: 'Face Types',
    din: 'Raised Face standard; Ring Joint available',
    asme: 'FF, RF, RJ, T&G all specified',
  },
  {
    param: 'Temperature Range',
    din: '-10°C to 350°C (-14°F to 662°F)',
    asme: '-20°F to 850°F (varies by material)',
  },
  {
    param: 'Material Standards',
    din: 'Per DIN/EN specs (DIN 1.0495 = C22)',
    asme: 'Per ASTM specs (ASTM A105 = C22)',
  },
  {
    param: 'Bolt Pattern',
    din: 'Different from ASME; not interchangeable',
    asme: 'Standard across all ASME sizes',
  },
];

const faqItems = [
  {
    question: 'What does "PN" mean in DIN flange standards?',
    answer:
      'PN stands for "Pressure Nominale" (nominal pressure in French/German). It represents the design pressure rating in bar. PN 16, for example, means the flange is designed for 16 bar (approximately 232 PSI). It\'s the metric equivalent to ASME pressure classes but uses bar (SI unit) rather than PSI.',
  },
  {
    question: 'What does "DN" mean in DIN flange standards?',
    answer:
      'DN stands for "Diamètre Nominale" (nominal diameter). It specifies the flange size in millimeters. DN 50 = 50 mm nominal diameter (approximately NPS 2). DN sizing is metric and directly reflects the flow diameter, unlike NPS which is nominal only.',
  },
  {
    question: 'Can I use DIN flanges with ASME equipment?',
    answer:
      'No. DIN EN 1092-1 and ASME B16.5 are not interchangeable. Bolt hole patterns, gasket seating surfaces, and dimensional standards differ significantly. Mixing standards will result in poor bolting and potential seal failures. You must use consistent standards throughout a piping system. If integrating different standards, use engineered adapters.',
  },
  {
    question: 'How do I convert DIN to NPS sizing?',
    answer:
      'DN to NPS conversion is approximate since DIN is metric while NPS is imperial. Common conversions: DN 15 ≈ NPS 1/2", DN 25 ≈ NPS 1", DN 40 ≈ NPS 1.5", DN 50 ≈ NPS 2", DN 80 ≈ NPS 3", DN 100 ≈ NPS 4", DN 150 ≈ NPS 6". However, never use these as exact equivalents - always verify specific flange dimensions.',
  },
  {
    question: 'Is DIN EN 1092-1 the same as ISO 7241?',
    answer:
      'Not exactly. ISO 7241 is an international standard that incorporates DIN 2501 principles. DIN EN 1092-1 is the current European standard that superseded older DIN 2501. They are harmonized and largely compatible, but always check specific editions. For new projects, specify DIN EN 1092-1.',
  },
  {
    question: 'What materials are available for DIN EN 1092-1 flanges?',
    answer:
      'DIN provides a range of materials: carbon steel (C22), chrome-molybdenum steel (Cr-Mo), stainless steel (304/316L), ductile iron, and others. Material selection depends on temperature, pressure, and corrosion requirements. Carbon steel covers most applications; stainless steel for corrosive environments. Always verify material availability for your size and PN rating.',
  },
];

export default function DINFlangePage() {
  return (
    <>
      <PageHero
        title="DIN EN 1092-1 Flange Standard"
        subtitle="Comprehensive guide to DIN EN 1092-1 metric flange standards, PN pressure ratings, DN sizing, and international applications"
        variant="navy"
        breadcrumbs={[
          { label: 'Standards', href: '/standards' },
          { label: 'DIN Flanges', href: '/standards/din-flanges' },
        ]}
      />

      <main className="w-full">
        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-primary mb-6">
                DIN EN 1092-1 Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                DIN EN 1092-1 (Flanges and their joints - Circular flanges for pipes, valves,
                fittings and accessories, cast steel) is the European and international metric
                flange standard. Published by the German Institute for Standardization (Deutsches
                Institut für Normung) and harmonized with European standardization (CEN), this
                standard is widely used globally outside North America.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                DIN EN 1092-1 uses metric sizing (DN in millimeters) and bar-based pressure
                ratings (PN), making it fundamentally different from the inch-based ASME B16.5
                standard. While both specify similar flange concepts, the specific dimensions,
                pressure classes, and designations differ, making them incompatible.
              </p>

              <div className="bg-iron text-white rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Key Characteristics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-bold mb-2">Metric System</p>
                    <p className="text-sm opacity-90">
                      DN (Diamètre Nominale) in millimeters. DN 50, DN 100, etc.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-2">Pressure Nominale (PN)</p>
                    <p className="text-sm opacity-90">
                      Bar-based ratings: PN 6, PN 10, PN 16, PN 25, PN 40, PN 63, PN 100
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-2">Geographic Scope</p>
                    <p className="text-sm opacity-90">
                      Primary standard in Europe, Asia, and most international projects
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-2">Flange Types</p>
                    <p className="text-sm opacity-90">
                      Six standard types (01-05, 11-13) including WN, SO, SW, LJ, Th, Bl
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-brass p-6">
                <h3 className="text-lg font-bold text-primary mb-3">
                  Why DIN EN 1092-1 Matters
                </h3>
                <p className="text-gray-700 mb-3">
                  If you're working on international projects, importing equipment from Europe,
                  or operating in EU-regulated industries, you'll encounter DIN EN 1092-1. It's
                  the ISO-harmonized standard used throughout the EU and in many Asian and
                  Middle Eastern applications.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* PN Pressure Ratings Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-8">
              PN Pressure Ratings
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              DIN EN 1092-1 specifies eleven pressure ratings based on bar (metric SI unit).
              Each PN rating defines the design pressure and is available across a range of
              flange sizes. The pressure rating determines flange thickness and material
              requirements.
            </p>

            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
              <SpecTable columns={pnRatingsData} data={pnRatingsRows} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Understanding Bar vs PSI
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  PN ratings use bar (metric pressure unit). 1 bar ≈ 14.5 PSI. So PN 16 (16 bar)
                  ≈ 232 PSI. This is roughly comparable to ASME Class 300 (330 PSI) but not
                  exactly equivalent.
                </p>
                <div className="bg-gray-50 rounded p-4">
                  <p className="text-sm font-mono text-gray-700">
                    <strong>Quick Conversion:</strong>
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Bar × 14.5 = PSI
                  </p>
                  <p className="text-xs text-gray-600">
                    PN 16 × 14.5 = 232 PSI
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Selecting the Right PN Rating
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span>PN 6-10: Low-pressure utilities, HVAC, water supply</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span>PN 16: General industrial piping (most common)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span>PN 25-40: High-pressure industrial systems</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span>PN 63-100: Extreme pressure applications (rare)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-brass p-6">
              <p className="text-gray-700">
                <strong>Temperature Derating:</strong> Like ASME standards, higher temperatures
                reduce flange pressure ratings. DIN provides temperature derating curves. Always
                verify your operating temperature against the PN rating to ensure adequacy.
              </p>
            </div>
          </Container>
        </section>

        {/* DN Sizing Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-8">
              DN Metric Sizing System
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              DIN EN 1092-1 uses DN (Diamètre Nominale) sizing in millimeters, ranging from DN
              10 through DN 4000. The DN number approximately corresponds to the internal diameter
              in millimeters but should not be treated as an exact measurement - always verify
              actual bore dimensions.
            </p>

            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
              <SpecTable columns={dnToNpsData} data={dnToNpsRows} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  DN vs NPS: Key Differences
                </h3>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold text-primary mb-1">DN (Metric)</p>
                    <p>Size in millimeters. DN 50 = nominally 50 mm diameter.</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-primary mb-1">NPS (Inch)</p>
                    <p>Nominal pipe size in inches. NPS 2" is nominal only (actual ID ≠ 2").</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-primary mb-1">Conversion</p>
                    <p>Approximate, never exact. DN 50 ≈ NPS 2" but dimensions differ.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#B5873A]/10 to-transparent rounded-lg p-8 border border-brass">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Common DN Sizes
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>DN 15, 25, 40:</strong> Small systems</p>
                  <p><strong>DN 50, 80, 100:</strong> General piping (most common)</p>
                  <p><strong>DN 150, 200, 250:</strong> Large distribution systems</p>
                  <p><strong>DN 300+:</strong> Major transmission lines</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Flange Types Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-6">
              DIN EN 1092-1 Flange Types
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              DIN EN 1092-1 specifies six flange types, designated numerically (Type 01, 02, 05,
              11, 12, 13). Each type corresponds to an installation method and structural design.
            </p>

            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
              <SpecTable columns={flangeTypesData} data={flangeTypesRows} />
            </div>

          </Container>
        </section>

        {/* DIN vs ASME Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-8">
              DIN EN 1092-1 vs. ASME B16.5
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              While both DIN EN 1092-1 and ASME B16.5 specify industrial flanges, they are
              fundamentally different standards with incompatible dimensions and designations.
            </p>

            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
              <SpecTable columns={dinVsAsmeData} data={dinVsAsmeRows} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  When to Use DIN EN 1092-1
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">→</span>
                    <span>European projects or EU standards required</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">→</span>
                    <span>International equipment with metric dimensions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">→</span>
                    <span>Asian manufacturing facilities or partners</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">→</span>
                    <span>ISO/DIN metric piping systems</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">→</span>
                    <span>When specified in contract or design code</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Key Incompatibilities
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Bolt hole patterns differ; won't align</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Gasket seating surfaces incompatible</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Face types designated differently</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Dimensions metric vs imperial (not convertible)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Pressure rating bases different (bar vs PSI)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-brass p-6">
              <h3 className="text-lg font-bold text-primary mb-3">
                Critical Rule: Never Mix Standards
              </h3>
              <p className="text-gray-700">
                Do not use DIN flanges with ASME equipment or vice versa. If your project requires
                both standards, use engineered adapter spools or transition pieces designed for
                that specific application. Mixing standards will result in leaks, failures, and
                safety hazards.
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
              description="Common questions about DIN EN 1092-1 flange standards"
            />
          </Container>
        </section>

        {/* CTA Section */}
        <CTABanner
          heading="Need DIN EN 1092-1 Flanges?"
          subtext="We supply metric flanges for international projects. Our team can help you select the right PN rating, DN size, and material for your application."
          primaryCTA={{
            label: 'Request a Quote',
            href: 'https://www.texasflange.com/contact-us',
          }}
          secondaryCTA={{
            label: 'View Metric Flange Catalog',
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
              headline: 'DIN EN 1092-1 Flange Standard',
              description:
                'Comprehensive guide to DIN EN 1092-1 metric flange standards, PN pressure ratings, DN sizing, and international applications',
              image: 'https://www.apiflange.com/din-flanges.jpg',
              datePublished: '2024-01-01',
              dateModified: '2024-01-01',
              author: {
                '@type': 'Organization',
                name: 'API Flange',
              },
              mainEntity: {
                '@type': 'Thing',
                name: 'DIN EN 1092-1 Standard',
                description: 'European and international metric flange standard',
              },
            }),
          }}
        />
      </main>
    </>
  );
}
