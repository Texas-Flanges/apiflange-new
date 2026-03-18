'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  AlertCircle,
  Zap,
  Shield,
  Award,
  FileText,
} from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import { FAQ, CTABanner, SpecTable } from '@/components/ui';

interface FAQItem {
  question: string;
  answer: string;
}

const pressureClassData = [
  { label: 'Pressure Class', key: 'class', width: '20%' },
  { label: 'Design Pressure', key: 'pressure', width: '20%' },
  { label: 'Temperature Range', key: 'temp', width: '20%' },
  { label: 'Common Applications', key: 'applications', width: '40%' },
];

const pressureClassRows = [
  {
    class: '150 PSI',
    pressure: '165 PSI',
    temp: '-20°F to 400°F',
    applications: 'Low-pressure piping, utility systems, air/steam',
  },
  {
    class: '300 PSI',
    pressure: '330 PSI',
    temp: '-20°F to 600°F',
    applications: 'General industrial piping, moderate pressure systems',
  },
  {
    class: '400 PSI',
    pressure: '440 PSI',
    temp: '-20°F to 600°F',
    applications: 'Intermediate pressure applications',
  },
  {
    class: '600 PSI',
    pressure: '660 PSI',
    temp: '-20°F to 650°F',
    applications: 'High-pressure piping, petrochemicals, power plants',
  },
  {
    class: '900 PSI',
    pressure: '990 PSI',
    temp: '-20°F to 750°F',
    applications: 'Very high pressure systems, specialized industrial',
  },
  {
    class: '1500 PSI',
    pressure: '1650 PSI',
    temp: '-20°F to 800°F',
    applications: 'Extreme pressure applications, specialized piping',
  },
  {
    class: '2500 PSI',
    pressure: '2750 PSI',
    temp: '-20°F to 850°F',
    applications: 'Ultra-high pressure piping, specialized systems',
  },
];

const faceTypeData = [
  { label: 'Face Type', key: 'face', width: '25%' },
  { label: 'Designation', key: 'designation', width: '25%' },
  { label: 'Description', key: 'description', width: '50%' },
];

const faceTypeRows = [
  {
    face: 'Flat Face (FF)',
    designation: 'FF',
    description:
      'Completely flat sealing surface. Used with gaskets. Most common in industrial applications.',
  },
  {
    face: 'Raised Face (RF)',
    designation: 'RF',
    description:
      'Has a raised ring with flat sealing surface. Reduces gasket area and improves sealing performance.',
  },
  {
    face: 'Ring Joint (RJ)',
    designation: 'RJ',
    description:
      'Contains a grooved seat for metallic ring gasket. Used in high-pressure, high-temperature applications.',
  },
  {
    face: 'Tongue & Groove (T&G)',
    designation: 'T&G',
    description:
      'One flange has tongue, other has groove. Provides alignment and centering of gasket.',
  },
];

const materialGroupData = [
  { label: 'Material Group', key: 'group', width: '20%' },
  { label: 'Composition', key: 'composition', width: '30%' },
  { label: 'Temperature Range', key: 'temp', width: '25%' },
  { label: 'Applications', key: 'applications', width: '25%' },
];

const materialGroupRows = [
  {
    group: 'Group 1',
    composition: 'Carbon Steel (ASTM A105)',
    temp: '-20°F to 750°F',
    applications: 'General industrial piping, cost-effective',
  },
  {
    group: 'Group 2',
    composition: 'C-0.5Mo Steel (ASTM A182)',
    temp: '-20°F to 1100°F',
    applications: 'Higher temperature piping, improved strength',
  },
  {
    group: 'Group 3',
    composition: 'Cr-Mo Steel (ASTM A182 Grade F11, F22)',
    temp: '-20°F to 1200°F',
    applications: 'Power generation, petrochemical, high-temp',
  },
  {
    group: 'Group 4',
    composition: 'Stainless Steel (ASTM A182 Grade F304, F316)',
    temp: '-325°F to 1000°F',
    applications: 'Corrosion resistance, sanitary applications',
  },
  {
    group: 'Group 5',
    composition: 'Duplex/Super-Duplex Stainless',
    temp: '-325°F to 600°F',
    applications: 'Extremely corrosive environments, offshore',
  },
];

const faqItems = [
  {
    question: 'What is the difference between ASME B16.5 and ANSI B16.5?',
    answer:
      'ASME B16.5 and ANSI B16.5 are essentially the same standard. ANSI (American National Standards Institute) adopts ASME standards for broader national acceptance. All new standards are published under ASME designation, though ANSI B16.5 designation is still commonly used in the industry. Modern specifications should reference ASME B16.5, but the dimensions and specifications are identical.',
  },
  {
    question: 'How do I determine the correct pressure class for my application?',
    answer:
      'The pressure class should be selected based on the maximum operating pressure and temperature conditions. The flange must have a design pressure rating (typically 1.5 times the maximum working pressure) that exceeds all peak operating conditions. Consult your system design specifications and ASME steam tables for appropriate temperature deration. When in doubt, select a higher class for safety and reliability.',
  },
  {
    question: 'What is the maximum operating temperature for each pressure class?',
    answer:
      'Temperature limits vary by material grade and pressure class. Carbon steel (A105) flanges are rated to 750°F at design pressure, but this deration applies. Chromium-molybdenum (Cr-Mo) steels support higher temperatures up to 1100-1200°F depending on the specific grade. Stainless steels can go even higher. Always verify temperature ratings for your specific material grade in the ASME standard or material datasheet.',
  },
  {
    question: 'What does "raised face" mean, and should I use it?',
    answer:
      'Raised face (RF) flanges have a 1/16" raised ring around the bore. This concentrates the gasket load in a smaller area, improving sealing performance and gasket longevity. RF is standard for most industrial applications in ASME B16.5. Flat face (FF) is used primarily with full-face gaskets. Ring joint (RJ) is reserved for high-pressure/high-temperature critical service. Most new designs specify raised face.',
  },
  {
    question: 'Can I mix ASME B16.5 with other flange standards?',
    answer:
      'Generally, no. Mixing standards creates compatibility issues because bolt hole patterns, gasket seating surfaces, and dimensions differ. Each bolted flange connection should use matching flanges from the same standard. If you must connect different standards, consult a pressure equipment engineer. Adapters and special spools exist but add complexity and cost.',
  },
  {
    question: 'What material should I specify for corrosive media?',
    answer:
      'Carbon steel (Group 1) is susceptible to corrosion in wet, acidic, or saltwater environments. For general corrosion resistance, specify stainless steel (Group 4: 304 or 316L). For severe chloride exposure (offshore, coastal), duplex or super-duplex stainless steel (Group 5) is recommended. Always check compatibility charts for the specific fluid being handled.',
  },
];

const sizeRanges = [
  { label: 'Small Bore', range: 'NPS 1/2 to 2', use: 'Instrumentation, small systems' },
  { label: 'Standard Bore', range: 'NPS 3 to 8', use: 'General industrial piping' },
  { label: 'Large Bore', range: 'NPS 10 to 24', use: 'Major process systems, waterworks' },
];

export default function ASMEFlangePage() {
  return (
    <>
      <PageHero
        title="ASME B16.5 & B16.47 Flange Standards"
        subtitle="Comprehensive technical guide to ASME steel pipe flange standards, specifications, materials, and applications"
        variant="navy"
        breadcrumbs={[
          { label: 'Standards', href: '/standards' },
          { label: 'ASME Flanges', href: '/standards/asme-flanges' },
        ]}
      />

      <main className="w-full">
        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-primary mb-6">
                ASME B16.5 Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ASME B16.5 (Specification for Pipe Flanges and Flanged Fittings: NPS 1/2
                through 24) is the predominant flange standard in North America for industrial
                piping systems. Developed by the American Society of Mechanical Engineers, this
                standard specifies dimensions, pressure-temperature ratings, materials, and
                performance requirements for carbon, stainless, and alloy steel flanges.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                ASME B16.5 covers nominal pipe sizes (NPS) from 1/2 inch through 24 inches,
                with seven standard pressure classes: 150, 300, 400, 600, 900, 1500, and 2500
                PSI. The standard also specifies flange face types, bolt patterns, bolt
                diameters, and gasket seating surfaces to ensure interchangeability and
                compatibility across manufacturers.
              </p>

              <div className="bg-iron text-white rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Key Facts</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 text-brass" />
                    <span>
                      <strong>Sizes:</strong> NPS 1/2 through 24 (nominal pipe sizes)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 text-brass" />
                    <span>
                      <strong>Pressure Classes:</strong> 150, 300, 400, 600, 900, 1500, 2500 PSI
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 text-brass" />
                    <span>
                      <strong>Materials:</strong> Carbon, stainless, and alloy steels
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 text-brass" />
                    <span>
                      <strong>Temperature Range:</strong> -20°F to 850°F (material dependent)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 text-brass" />
                    <span>
                      <strong>Face Types:</strong> Flat, Raised, Ring Joint, Tongue & Groove
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-brass p-6">
                <p className="text-gray-700">
                  <strong>Note on Nomenclature:</strong> You may encounter both "ASME B16.5"
                  and "ANSI B16.5" designations. Modern standards use the ASME designation, but
                  the specifications are identical. Both refer to the same flange standard.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ASME B16.5 vs B16.47 Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-12">
              ASME B16.5 vs. ASME B16.47
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg p-8 shadow-sm border-2 border-brass">
                <h3 className="text-2xl font-bold text-primary mb-4">ASME B16.5</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span>Sizes: NPS 1/2 through NPS 24</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span>Pressure Classes: 150 through 2500 PSI</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span>Wide material selection available</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span>Most common standard globally</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">•</span>
                    <span>Used in: industrial piping, power, refining, chemicals</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border-2 border-gray-300">
                <h3 className="text-2xl font-bold text-primary mb-4">ASME B16.47</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-gray-400 font-bold">•</span>
                    <span>Sizes: NPS 26 through NPS 60</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-400 font-bold">•</span>
                    <span>Series A (75, 150 PSI) & Series B (150, 300 PSI)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-400 font-bold">•</span>
                    <span>Limited material options (primarily carbon steel)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-400 font-bold">•</span>
                    <span>Covers large-diameter applications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-400 font-bold">•</span>
                    <span>Used in: pipelines, waterworks, large systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border-l-4 border-brass">
              <h3 className="text-xl font-bold text-primary mb-3">
                When to Use ASME B16.47
              </h3>
              <p className="text-gray-700">
                ASME B16.47 is required when your piping system uses nominal pipe sizes larger
                than NPS 24. These flanges feature different mounting patterns and pressure
                ratings optimized for large-diameter, lower-pressure applications common in
                water transmission and pipeline distribution systems. If your project involves
                flanges larger than 24 inches, B16.47 is your standard.
              </p>
            </div>
          </Container>
        </section>

        {/* Size Range Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-12">
              Size Range & Applications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {sizeRanges.map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-8 bg-brass rounded-full" />
                    <h3 className="text-xl font-bold text-primary">{item.label}</h3>
                  </div>
                  <p className="text-gray-700 font-semibold mb-2">{item.range}</p>
                  <p className="text-gray-600 text-sm">{item.use}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-brass p-6">
              <p className="text-gray-700 mb-2">
                <strong>Flange Availability:</strong> While ASME B16.5 nominally covers NPS 1/2
                through 24, standard manufacturing typically begins at NPS 1/2 with most
                industrial applications concentrated in NPS 1 through 16. Very large sizes
                (20-24 inches) may require longer lead times or special orders.
              </p>
            </div>
          </Container>
        </section>

        {/* Pressure Class Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Pressure Classes & Design Ratings
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              ASME B16.5 defines seven pressure classes, each with specific design pressures,
              temperature deration curves, and intended applications. The pressure class
              selected should match or exceed the maximum operating pressure and temperature of
              your piping system. Design pressure is typically set at 1.5 times the maximum
              working pressure to provide a safety margin.
            </p>

            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
              <SpecTable columns={pressureClassData} data={pressureClassRows} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Pressure Class Selection Criteria
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">1</span>
                    <div>
                      <p className="font-semibold text-gray-800">Maximum System Pressure</p>
                      <p className="text-sm text-gray-600">
                        Select class with design pressure ≥ 1.5 × max working pressure
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">2</span>
                    <div>
                      <p className="font-semibold text-gray-800">Operating Temperature</p>
                      <p className="text-sm text-gray-600">
                        Verify temperature is within flange rating (note deration at high temps)
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">3</span>
                    <div>
                      <p className="font-semibold text-gray-800">Peak Operating Conditions</p>
                      <p className="text-sm text-gray-600">
                        Account for startup transients and emergency scenarios
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold">4</span>
                    <div>
                      <p className="font-semibold text-gray-800">Material Compatibility</p>
                      <p className="text-sm text-gray-600">
                        Different materials have different pressure/temperature ratings
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-iron text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Pressure Class Example</h3>
                <div className="bg-white/10 rounded p-4 mb-4">
                  <p className="text-sm mb-4">
                    <strong>System Operating Conditions:</strong>
                  </p>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>• Max working pressure: 300 PSI</li>
                    <li>• Operating temperature: 500°F</li>
                    <li>• Fluid: Steam</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded p-4">
                  <p className="text-sm mb-2">
                    <strong>Recommended Selection:</strong>
                  </p>
                  <p className="text-base font-bold">
                    ASME B16.5 Class 600 PSI
                  </p>
                  <p className="text-xs mt-2 opacity-90">
                    Design pressure 660 PSI exceeds requirement (1.5 × 300 = 450 PSI). Temperature
                    650°F rating provides safety margin above 500°F operating condition.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Face Types Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Flange Face Types
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              The flange face type defines the sealing surface where the gasket sits. Different
              face types optimize for different gasket materials, sealing requirements, and
              pressure classes. ASME B16.5 specifies four standard face types.
            </p>

            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
              <SpecTable columns={faceTypeData} data={faceTypeRows} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Raised Face (RF) - Most Common
                </h3>
                <p className="text-gray-700 mb-4">
                  Raised face is the standard in ASME B16.5 and is used in the majority of
                  industrial applications. The raised ring (typically 1/16 inch high) concentrates
                  the gasket load in a smaller area.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Advantages:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Superior gasket sealing performance</li>
                    <li>Lower gasket stress</li>
                    <li>Excellent for high pressure/temperature</li>
                    <li>Standard across most industries</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Ring Joint (RJ) - High Performance
                </h3>
                <p className="text-gray-700 mb-4">
                  Ring joint faces use metallic ring gaskets in a grooved seat. Extremely reliable
                  for critical, high-pressure, high-temperature service.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Advantages:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Maximum sealing reliability</li>
                    <li>Superior temperature resistance</li>
                    <li>Metallic gasket reusability</li>
                    <li>Oil & gas industry standard</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-brass p-6">
              <p className="text-gray-700">
                <strong>Gasket Compatibility:</strong> Always match your gasket material to the
                flange face type. Soft gaskets pair with raised and flat faces; metallic ring
                gaskets pair with ring joint faces. Mixed gasket-face combinations can fail.
              </p>
            </div>
          </Container>
        </section>

        {/* Materials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Material Groups & Selection
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              ASME B16.5 defines material groups based on chemical composition and mechanical
              properties. Each group accommodates different temperature ranges and operating
              conditions. Material selection affects both cost and performance.
            </p>

            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-8">
              <SpecTable columns={materialGroupData} data={materialGroupRows} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-3">
                  Group 1 (Carbon Steel)
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  ASTM A105 is the most economical choice for moderate temperature applications.
                  Excellent strength and availability.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Best for:</strong> General industrial use, utility systems, most
                  process piping
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-3">
                  Group 3 (Cr-Mo Steel)
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Grades F11/F22 support higher temperatures with superior creep resistance.
                  Cost-effective for elevated-temp service.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Best for:</strong> Power generation, petrochemical plants, high-temp
                  steam
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-3">
                  Group 4 (Stainless Steel)
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  304/316L offer corrosion resistance. 316L preferred for chloride and acidic
                  media.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Best for:</strong> Food processing, pharmaceutical, coastal, sanitary
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Flange Types Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Flange Types Covered by ASME B16.5
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
              ASME B16.5 specifies dimensions and design for multiple flange types, each
              serving different installation and functional requirements:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brass rounded-full" />
                  Weld Neck (WN)
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Features a tapered hub that transitions to the pipe. Excellent for vibration
                  and thermal stress resistance.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Use Case:</strong> High-temperature, high-pressure, critical service</p>
                  <p><strong>Advantage:</strong> Superior fatigue resistance</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brass rounded-full" />
                  Slip-On (SO)
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Flange slips over pipe and is welded on both inside and outside bores. Most
                  economical option.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Use Case:</strong> General industrial applications, low-cost</p>
                  <p><strong>Advantage:</strong> Lower cost, easy installation</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brass rounded-full" />
                  Socket Weld (SW)
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Pipe inserts into a socket in the flange and is welded at the end. Compact
                  design.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Use Case:</strong> Small bore piping, instrumentation</p>
                  <p><strong>Advantage:</strong> Compact, good for small sizes</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brass rounded-full" />
                  Threaded (Th)
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Pipe threads into the flange bore. Used when welding is not possible or
                  practical.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Use Case:</strong> No-weld installations, retrofit</p>
                  <p><strong>Advantage:</strong> Field removable, quick assembly</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brass rounded-full" />
                  Lap Joint (LJ)
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Loose flange slides over a stub end that is welded to the pipe. Allows flange
                  rotation.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Use Case:</strong> Stainless steel piping, frequent flange changes</p>
                  <p><strong>Advantage:</strong> Cost-effective for stainless applications</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brass rounded-full" />
                  Blind (Bl)
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Solid face with no bore opening. Used to cap piping ends or as isolation
                  flanges.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Use Case:</strong> End caps, blank-off plates</p>
                  <p><strong>Advantage:</strong> Complete system closure</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-brass p-6">
              <p className="text-gray-700">
                <strong>Selection Guidance:</strong> Weld neck flanges are preferred for
                critical, high-pressure service due to superior stress distribution. Slip-on
                flanges are economical for general piping. Consult your design code (ASME B31.3
                for process piping, B31.1 for power plant) for specific requirements.
              </p>
            </div>
          </Container>
        </section>

        {/* ASME vs ANSI Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-4xl font-bold text-primary mb-12">
              ASME B16.5 vs. ANSI B16.5: Clarifying the Standards
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-8 border border-gray-300">
                <h3 className="text-2xl font-bold text-primary mb-4">ASME B16.5</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-brass font-bold text-lg">•</span>
                    <span>Published by American Society of Mechanical Engineers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold text-lg">•</span>
                    <span>Current designation for the standard</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold text-lg">•</span>
                    <span>Regularly updated and maintained by ASME</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brass font-bold text-lg">•</span>
                    <span>Use this designation in new specifications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-300">
                <h3 className="text-2xl font-bold text-primary mb-4">ANSI B16.5</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-gray-400 font-bold text-lg">•</span>
                    <span>Adopted by American National Standards Institute</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-400 font-bold text-lg">•</span>
                    <span>Identical to ASME B16.5 (same dimensions and specs)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-400 font-bold text-lg">•</span>
                    <span>Legacy designation (pre-2000s standards)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-400 font-bold text-lg">•</span>
                    <span>Still used in older drawings and legacy systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-iron text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">The Bottom Line</h3>
              <p className="mb-4">
                ASME B16.5 and ANSI B16.5 specify identical flange dimensions and design
                criteria. The difference is purely in designation: ANSI adopted ASME's standard
                for broader national recognition, but modern standards are published by ASME.
                For new projects, specify ASME B16.5. In the field, you'll encounter both
                designations on older equipment and drawings.
              </p>
              <p>
                <strong>Practical Impact:</strong> None. A flange manufactured to ASME B16.5 is
                interchangeable with one manufactured to ANSI B16.5.
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
              description="Common questions about ASME B16.5 flanges and specifications"
            />
          </Container>
        </section>

        {/* CTA Section */}
        <CTABanner
          heading="Ready to Specify ASME B16.5 Flanges?"
          subtext="Our technical team can help you select the right flange type, material, and pressure class for your application."
          primaryCTA={{
            label: 'Contact Our Engineers',
            href: 'https://www.texasflange.com/contact-us',
          }}
          secondaryCTA={{
            label: 'View Our Catalog',
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
              headline: 'ASME B16.5 & B16.47 Flange Standards',
              description:
                'Comprehensive technical guide to ASME B16.5 and B16.47 steel pipe flange standards, materials, pressure classes, and applications',
              image: 'https://www.apiflange.com/asme-flanges.jpg',
              datePublished: '2024-01-01',
              dateModified: '2024-01-01',
              author: {
                '@type': 'Organization',
                name: 'API Flange',
              },
              mainEntity: {
                '@type': 'Thing',
                name: 'ASME B16.5 Standard',
                description: 'Standard for pipe flanges and flanged fittings NPS 1/2 through 24',
              },
            }),
          }}
        />
      </main>
    </>
  );
}
