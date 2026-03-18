'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import FAQ from '@/components/ui/FAQ';
import { Flame, Shield, Gauge, AlertTriangle } from 'lucide-react';

const metadata: Metadata = {
  title: 'Oil & Gas Flanges | ApiFlange',
  description:
    'ASME B16.5 and B16.47 high-pressure flanges for oil & gas upstream, midstream, and downstream applications. NACE MR0175 sour service, RTJ, weld neck, and specialty configurations.',
  keywords: [
    'oil and gas flanges',
    'ASME B16.5 flanges',
    'ASME B16.47 flanges',
    'high-pressure flanges',
    'sour service flanges',
    'NACE MR0175',
    'RTJ flanges',
    'wellhead equipment',
    'pipeline flanges',
    'petrochemical flanges',
  ],
  openGraph: {
    title: 'Oil & Gas Flanges | ApiFlange',
    description:
      'High-pressure ASME-compliant flanges for upstream, midstream, and downstream oil & gas applications.',
    url: 'https://www.apiflange.com/industries/oil-gas',
    type: 'website',
  },
};

export default function OilGasPage() {
  return (
    <>
      <PageHero
        title="High-Pressure Flanges for Oil & Gas"
        subtitle="ASME B16.5 and B16.47 compliant solutions engineered for upstream, midstream, and downstream applications with NACE MR0175 sour service capability and RTJ sealing."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Oil & Gas', href: '/industries/oil-gas' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8 text-center">
            Engineered for Extreme Conditions
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            ApiFlange delivers mission-critical flanges for the world's most demanding upstream, midstream, and downstream oil and gas operations. From wellhead equipment to transmission pipelines, subsea systems to refinery operations, our high-pressure, high-temperature solutions are engineered to withstand the most extreme environments with absolute reliability. With expertise in NACE MR0175 sour service, RTJ sealing, high-alloy materials, and API compliance, we partner with operators worldwide to ensure safe, efficient hydrocarbon operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Flame, label: '600-2500 psi', desc: 'Full pressure range' },
              { icon: AlertTriangle, label: 'Sour Service', desc: 'NACE MR0175' },
              { icon: Shield, label: 'RTJ Sealing', desc: 'Leak-free design' },
              { icon: Gauge, label: 'API Compliant', desc: 'Industry standard' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <Icon size={32} className="text-brass mx-auto mb-3" />
                  <p className="font-bold text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray" heading="ASME Standards & Pressure Classes">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            ApiFlange manufactures to ASME B16.5 (small bore) and B16.47 (large bore) standards covering the complete pressure range from 150 psi through 2500 psi. Our engineering ensures compatibility with existing systems and compliance with the most stringent API and international standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-iron mb-6">Pressure Classes (ASME B16.5)</h3>
              <div className="space-y-4">
                {[
                  { class: '150 psi', temp: '-20°F to 700°F', use: 'Low-pressure gathering, storage' },
                  { class: '300 psi', temp: '-20°F to 750°F', use: 'Standard transmission pipelines' },
                  { class: '600 psi', temp: '-20°F to 800°F', use: 'High-pressure transmission' },
                  { class: '900 psi', temp: '-20°F to 750°F', use: 'Subsea & deep water' },
                  { class: '1500 psi', temp: '-20°F to 700°F', use: 'Extreme high-pressure' },
                  { class: '2500 psi', temp: '-20°F to 500°F', use: 'Maximum service conditions' },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4 py-2">
                    <p className="font-bold text-gray-900">{item.class}</p>
                    <p className="text-xs text-gray-600 mt-1">Temp: {item.temp}</p>
                    <p className="text-sm text-gray-700">{item.use}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-iron mb-6">Compliance & Standards</h3>
              <ul className="space-y-3">
                {[
                  'ASME B16.5 - Steel Pipe Flanges',
                  'ASME B16.47 - Large Diameter Steel Flanges',
                  'API 6A - Wellhead Equipment',
                  'API 605 - Large Diameter Carbon Steel Flanges',
                  'NACE MR0175 - Sour Service Materials',
                  'API 579 - Fitness-for-Service',
                  'ISO 6162 - Ports and Stud Holes',
                  'ASTM Standards - Material Certification',
                ].map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brass font-bold mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Flanges by Application Segment">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                segment: 'Upstream',
                applications: [
                  'Wellhead equipment',
                  'Subsea trees and manifolds',
                  'Production risers',
                  'Control line assemblies',
                  'Export headers',
                  'Mud system connections',
                ],
                materials: 'Carbon steel, alloy steel, duplex, super duplex',
              },
              {
                segment: 'Midstream',
                applications: [
                  'Main transmission pipelines',
                  'Compressor stations',
                  'Pig launcher/receiver',
                  'Meter stations',
                  'Valve manifolds',
                  'Blowdown systems',
                ],
                materials: 'Carbon steel, API Grade B, Grade X series',
              },
              {
                segment: 'Downstream',
                applications: [
                  'Refinery piping',
                  'Crude charge heaters',
                  'Fractionation columns',
                  'Cooler connections',
                  'Product headers',
                  'Tank connections',
                ],
                materials: 'Carbon steel, stainless, alloy steels, clad',
              },
            ].map((app, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg">
                <h4 className="text-lg font-bold text-iron mb-4">{app.segment}</h4>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-600 mb-2">TYPICAL APPLICATIONS</p>
                  <ul className="space-y-1">
                    {app.applications.map((appItem, i) => (
                      <li key={i} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-brass">•</span>{appItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs"><span className="font-semibold text-gray-700">Materials: </span><span className="text-gray-600">{app.materials}</span></p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray" heading="Flange Types & Face Designations">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Oil and gas applications demand precision engineering. ApiFlange provides all standard flange types with industry-specific face configurations to ensure optimal sealing and reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Flange Types</h3>
              <div className="space-y-4">
                {[
                  { name: 'Weld Neck', desc: 'Premium choice, reinforced hub, preferred for high-pressure applications' },
                  { name: 'Slip-On', desc: 'Cost-effective, common in lower-pressure transmission systems' },
                  { name: 'Blind', desc: 'Pressure end caps, integral to system design' },
                  { name: 'Orifice', desc: 'Flow measurement, API 7 compatible' },
                  { name: 'Reducing', desc: 'Diameter transitions with minimal turbulence' },
                ].map((type, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4 py-1">
                    <p className="font-bold text-gray-900 text-sm">{type.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Face Types (RTJ)</h3>
              <div className="space-y-4">
                {[
                  { face: 'Raised Face (RF)', desc: 'Standard for most applications' },
                  { face: 'Ring Type Joint (RTJ)', desc: 'High-pressure, zero-leakage design' },
                  { face: 'Flat Face (FF)', desc: 'Equipment connections, soft gasket' },
                  { face: 'Large Male/Female', desc: 'Subsea, specialty sealing' },
                  { face: 'Octagonal RTJ', desc: 'Premium offshore applications' },
                ].map((face, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4 py-1">
                    <p className="font-bold text-gray-900 text-sm">{face.face}</p>
                    <p className="text-xs text-gray-600 mt-1">{face.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="High-Alloy Materials for Extreme Service">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Temperature and corrosion resistance drive material selection in oil and gas. ApiFlange stocks and fabricates premium alloys engineered for the harshest operating conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Carbon & Alloy Steels</h3>
              <div className="space-y-3">
                {[
                  { grade: 'A105/A350 LF2', temp: 'to 800°F', use: 'Standard carbon steel' },
                  { grade: 'F5 (5Cr)', temp: 'to 900°F', use: 'Elevated temperature' },
                  { grade: 'F11 (1¼Cr)', temp: 'to 1100°F', use: 'High-temperature steams' },
                  { grade: 'F22 (2¼Cr)', temp: 'to 1200°F', use: 'Boiler service' },
                  { grade: 'F91 (9Cr)', temp: 'to 1300°F', use: 'Ultra high-temperature' },
                ].map((grade, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4 py-1">
                    <p className="font-bold text-gray-900 text-sm">{grade.grade}</p>
                    <p className="text-xs text-gray-600">Temp: {grade.temp} | {grade.use}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Nickel & Exotic Alloys</h3>
              <div className="space-y-3">
                {[
                  { alloy: 'Duplex/Super Duplex', use: 'Subsea & sour service' },
                  { alloy: 'Inconel 625/718', use: 'Ultra-high temperature' },
                  { alloy: 'Monel K-500', use: 'Corrosion resistance' },
                  { alloy: 'Hastelloy C-276', use: 'Extreme chemical attack' },
                  { alloy: 'Titanium Gr. 2/5', use: 'Deepwater applications' },
                ].map((alloy, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4 py-1">
                    <p className="font-bold text-gray-900 text-sm">{alloy.alloy}</p>
                    <p className="text-xs text-gray-600">{alloy.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray" heading="Sour Service (NACE MR0175)">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6 leading-relaxed">
            When hydrogen sulfide is present, material selection becomes critical. NACE MR0175 certification ensures protection against sulfide stress cracking and corrosion. ApiFlange provides full compliance including material testing, heat treatment documentation, and hardness verification for every sour service component.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
            <h4 className="text-lg font-bold text-iron mb-4">Sour Service Requirements</h4>
            <ul className="space-y-3">
              {[
                'Material composition within NACE limits (min Cr, Ni, Mo percentages)',
                'Hardness caps (typically 248 HV max for carbon steels)',
                'Controlled heat treatment and stress relief',
                'Full material traceability and test reports',
                'H2S compatibility verification (NACE TM0177)',
                'Post-weld heat treatment procedures',
              ].map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700 text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            All ApiFlange sour service flanges include full NACE MR0175 compliance documentation and third-party verification. We maintain detailed records of heat lot compositions and testing to ensure uncompromising reliability in corrosive environments.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Sizes & Custom Engineering">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            From 0.5-inch instrument flanges to 60-inch+ large-bore designs, ApiFlange engineers solutions for every application. Custom configurations, specialty materials, and pressure testing are standard offerings.
          </p>

          <div className="bg-gradient-to-r from-[#1C1C1E] to-[#2A2A2E] rounded-lg p-8 text-white mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm opacity-90 mb-2">Standard Sizes</p>
                <p className="text-3xl font-bold">½" to 60"</p>
                <p className="text-xs opacity-75 mt-2">ASME B16.5/B16.47</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-2">Custom Sizes</p>
                <p className="text-3xl font-bold">Unlimited</p>
                <p className="text-xs opacity-75 mt-2">Engineer to spec</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-2">Pressure Testing</p>
                <p className="text-3xl font-bold">Available</p>
                <p className="text-xs opacity-75 mt-2">1.5x working pressure</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray">
        <FAQ
          items={[
            {
              question: 'What is the difference between ASME B16.5 and B16.47 flanges?',
              answer:
                'B16.5 covers small bore (½" to 24") steel flanges primarily for non-welding/bolting applications. B16.47 covers large bore (26" and larger) flanges used primarily for welding. Both standards include the same pressure classes and face types but with different dimensional standards. The selection depends on your pipe size and application requirements.',
            },
            {
              question: 'What temperature rating should I specify for 600 psi flanges?',
              answer:
                'ASME B16.5 Class 600 psi carbon steel (A105) is rated to 800°F. However, pressure rating decreases above 700°F. For higher temperatures, you must specify high-alloy materials such as A182 F5, F11, or F22. Contact our engineering team to match pressure and temperature ratings to your specific operating conditions.',
            },
            {
              question: 'Is RTJ (Ring Type Joint) always better than Raised Face?',
              answer:
                'RTJ provides superior sealing at high pressures and is preferred for HPHT (High Pressure/High Temperature) applications, subsea systems, and sour service. However, RTJ requires precisely matched metal gaskets and is more expensive. For standard applications under 600 psi, Raised Face with standard gaskets is typically sufficient and more economical.',
            },
            {
              question: 'How do I know if a flange is NACE MR0175 compliant?',
              answer:
                'NACE MR0175 is a material specification, not a visible marking. Compliance comes from material composition, hardness limits, and heat treatment procedures documented in mill test reports. ApiFlange provides complete NACE certification paperwork with every sour service flange. Always request mill test reports and NACE verification when specifying sour service applications.',
            },
            {
              question: 'Can you fabricate custom flanges outside standard sizes?',
              answer:
                'Yes. We regularly engineer and fabricate custom flanges for unique applications including oversized bores, specialty face designs, and non-standard bolt hole patterns. Custom fabrication requires engineering drawings and lead time. Contact our sales team with your specifications for a detailed quote.',
            },
            {
              question: 'What is the typical lead time for oil and gas flanges?',
              answer:
                'Standard catalog sizes in carbon steel are typically 2-4 weeks. High-alloy materials and custom configurations require additional time, usually 6-12 weeks depending on complexity. We maintain emergency stock for critical replacement needs. Contact us with your timeline requirements.',
            },
          ]}
        />
      </SectionWrapper>

      <CTABanner
        heading="Engineering Your Next Project?"
        subtext="Our oil and gas specialists can help you select the right flange size, pressure class, material, and face type for your specific application."
        primaryCTA={{
          label: 'Get a Quote',
          href: '/contact?type=oilgas',
        }}
        secondaryCTA={{
          label: 'View Specs',
          href: '/resources/asme-b16-specifications',
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Oil & Gas Flanges | ApiFlange',
            description: 'High-pressure ASME-compliant flanges for oil & gas operations',
            url: 'https://www.apiflange.com/industries/oil-gas',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Oil & Gas', item: 'https://www.apiflange.com/industries/oil-gas' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
