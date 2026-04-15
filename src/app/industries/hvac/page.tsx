'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import FAQ from '@/components/ui/FAQ';
import { Wind, Thermometer, Zap, CheckCircle } from 'lucide-react';

const metadata: Metadata = {
  title: 'HVAC Flanges | ApiFlange',
  description:
    'Low-pressure flanges for chilled water, steam, and condensate systems. Carbon steel and grooved connections for building mechanical HVAC applications.',
  keywords: [
    'HVAC flanges',
    'chilled water flanges',
    'steam flanges',
    'condensate flanges',
    'building mechanical',
    'companion flanges',
    'grooved connections',
  ],
  openGraph: {
    title: 'HVAC Flanges | ApiFlange',
    description: 'Low-pressure flanges for building HVAC, chilled water, steam, and condensate systems.',
    url: 'https://www.apiflange.com/industries/hvac',
    type: 'website',
  },
};

export default function HVACPage() {
  return (
    <>
      <PageHero
        title="Flanges for Building HVAC Systems"
        subtitle="Low-pressure flanges engineered for chilled water loops, steam systems, and condensate lines in modern building mechanical applications."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'HVAC', href: '/industries/hvac' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8 text-center">
            Reliable Fluid Handling for Climate Control
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            HVAC systems demand reliable, cost-effective flanges for chiller loops, boiler systems, steam distribution, and condensate return lines. ApiFlange supplies ASME-compliant low-pressure flanges in carbon steel and ductile iron, with companion flange and grooved connection options for modular building systems. From retrofit projects to new construction, our HVAC solutions ensure efficient, leak-free climate control infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Wind, label: 'Chilled Water', desc: '150 psi Class' },
              { icon: Thermometer, label: 'Steam Ready', desc: '250+ psi rated' },
              { icon: Zap, label: 'Cost-Effective', desc: 'Standard materials' },
              { icon: CheckCircle, label: 'Quick Install', desc: 'Grooved options' },
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

      <SectionWrapper padding="lg" variant="gray" heading="Pressure Classes for HVAC Service">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Standard ASME Classes</h3>
              <div className="space-y-4">
                {[
                  { class: '150 psi', use: 'Chilled water loops (typical)', temp: 'to 350°F' },
                  { class: '300 psi', use: 'High-efficiency chillers', temp: 'to 400°F' },
                  { class: '600 psi', use: 'Boiler systems', temp: 'to 500°F' },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4">
                    <p className="font-bold text-gray-900">{item.class}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.use}</p>
                    <p className="text-xs text-gray-500">{item.temp}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Typical HVAC Applications</h3>
              <ul className="space-y-3">
                {[
                  'Centrifugal chiller connections',
                  'Steam boiler outlet nozzles',
                  'Pump discharge flanges',
                  'Heat exchanger connections',
                  'Expansion tank ties',
                  'Strainer bowl connections',
                ].map((app, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brass font-bold mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Flange Types for HVAC">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Slip-On Flanges',
                desc: 'Most common HVAC choice, cost-effective, field-weldable for retrofit applications.',
              },
              {
                name: 'Companion Flanges',
                desc: 'Bolted to grooved pipe fittings, eliminates welding, fastest installation method.',
              },
              {
                name: 'Blind Flanges',
                desc: 'System end caps and isolation block-offs, readily available in all sizes.',
              },
              {
                name: 'Reducing Flanges',
                desc: 'Size transitions with minimal turbulence, smooth flow paths for efficiency.',
              },
            ].map((type, idx) => (
              <div key={idx} className="p-6 bg-cyan-50 rounded-lg border border-cyan-200">
                <h4 className="text-lg font-bold text-iron mb-3">{type.name}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray" heading="Materials & Coatings">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            HVAC applications typically use standard carbon steel or ductile iron flanges, which offer excellent cost-to-performance ratio for low-pressure service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-iron mb-4">Carbon Steel</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'ASTM A105 standard',
                  'Excellent weldability',
                  'Cost-effective',
                  'Typical selection',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-iron mb-4">Ductile Iron</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'ASTM A536 Grade',
                  'Impact resistant',
                  'Broader temperature',
                  'Alternative option',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-iron mb-4">Surface Treatment</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Mill finish standard',
                  'Galvanizing available',
                  'Paint-ready options',
                  'Corrosion protection',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Size Range & Specifications">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            ApiFlange stocks HVAC flanges in all common building sizes, from small instrument connections to large distribution headers.
          </p>

          <div className="bg-gradient-to-r from-[#1C1C1E] to-[#2A2A2E] rounded-lg p-8 text-white text-center">
            <p className="text-sm opacity-90 mb-2">Standard Available Sizes</p>
            <p className="text-4xl font-bold">½" to 36"</p>
            <p className="text-xs opacity-75 mt-3">Slip-on, companion, blind configurations</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray">
        <FAQ
          items={[
            {
              question: 'What is the typical pressure rating for chiller system flanges?',
              answer:
                'Most commercial building chilled water systems operate at 150 psi design pressure, which matches ASME B16.5 Class 150 flanges. Modern high-efficiency chillers may specify Class 300 for additional safety margin. Check your chiller manufacturer specifications for your system design pressure.',
            },
            {
              question: 'Can I use HVAC flanges for steam applications?',
              answer:
                'HVAC flanges rated for steam service are typically Class 300 or Class 600 carbon steel. Steam system temperature can exceed 400°F depending on pressure, so always verify that the flange pressure class and material are appropriate for your steam temperature. High-pressure steam systems may require alloy steel flanges.',
            },
            {
              question: 'What is a companion flange and when should I use it?',
              answer:
                'A companion flange is bolted to a grooved pipe fitting, eliminating the need for welding. This is ideal for retrofit applications or when non-destructive installation is required. Companion flanges are quick to install and can be easily removed for maintenance.',
            },
            {
              question: 'Do I need gaskets for HVAC flanges?',
              answer:
                'Yes. Standard HVAC applications use PTFE or rubber gaskets for water service, or spiral-wound gaskets for steam. Always use gaskets rated for your specific fluid (chilled water, hot water, steam) and temperature.',
            },
            {
              question: 'How do I choose between slip-on and companion flanges?',
              answer:
                'Slip-on flanges are welded and are the most common choice for new construction. Companion flanges are bolted to grooved fittings and are preferred for retrofits or when welding is not desired. Companion flanges are faster to install but slightly more expensive than slip-on.',
            },
            {
              question: 'What is your typical lead time for HVAC flanges?',
              answer:
                'We maintain stock on common HVAC flange sizes and offer industry-leading turnaround on all orders. Call (281) 484-8325 for project-specific timelines.',
            },
          ]}
        />
      </SectionWrapper>

      <CTABanner
        heading="Ready to Specify Your HVAC System?"
        subtext="Our HVAC specialists can help you select the right flange sizes and pressure classes for your chilled water, steam, or condensate systems."
        primaryCTA={{
          label: 'Get a Quote',
          href: '/contact?type=hvac',
        }}
        secondaryCTA={{
          label: 'View Catalog',
          href: '/products/flanges',
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'HVAC Flanges | ApiFlange',
            description: 'Low-pressure flanges for building HVAC systems',
            url: 'https://www.apiflange.com/industries/hvac',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'HVAC', item: 'https://www.apiflange.com/industries/hvac' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
