'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { Database } from 'lucide-react';

const metadata: Metadata = {
  title: 'Data Center Flanges | ApiFlange',
  description:
    'Precision cooling system flanges for data center chiller loops and infrastructure. Reliable fluid handling for mission-critical cooling.',
  keywords: [
    'data center flanges',
    'cooling system flanges',
    'chiller flanges',
    'data center cooling',
    'precision cooling',
    'mission-critical',
  ],
  openGraph: {
    title: 'Data Center Flanges | ApiFlange',
    description: 'Flanges for data center cooling systems and chiller infrastructure.',
    url: 'https://www.apiflange.com/industries/data-centers',
    type: 'website',
  },
};

export default function DataCentersPage() {
  return (
    <>
      <PageHero
        title="Flanges for Data Center Cooling Systems"
        subtitle="Precision cooling system flanges engineered for data center chiller loops with reliability and redundancy for mission-critical infrastructure."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Data Centers', href: '/industries/data-centers' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8">Data Center Infrastructure</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Modern data centers demand reliable, redundant cooling infrastructure to maintain server performance and prevent downtime. ApiFlange supplies precision low-pressure flanges for chiller loops, condenser cooling, pump discharge, and auxiliary systems. With expertise in data center standards and design practices, we deliver flanges that integrate seamlessly with redundant cooling designs, ImmersionCooling systems, and evolving high-density computing environments. Our focus on quality and reliability ensures your mission-critical cooling infrastructure operates flawlessly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Mission-Critical', desc: '99.99% uptime' },
              { label: 'Reliable Design', desc: 'Redundant systems' },
              { label: 'Proven Quality', desc: 'Industry standard' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-bold text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray" heading="Common Flange Types">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Slip-On Flanges',
                description: 'Standard for chiller connections and main cooling loop systems. Field-weldable for flexible installation.',
              },
              {
                name: 'Companion Flanges',
                description: 'Bolted to grooved connections for modular data center cooling configurations.',
              },
              {
                name: 'Blind Flanges',
                description: 'System isolation points and backup line terminations for redundant cooling loops.',
              },
              {
                name: 'Plate Flanges',
                description: 'Equipment nozzle interfaces for pumps, heat exchangers, and cooling towers.',
              },
            ].map((type, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-lg">
                <h4 className="text-lg font-bold text-iron mb-3">{type.name}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Materials for Data Center Cooling">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Data center cooling systems typically operate at low pressures with purified or treated water. Standard carbon steel is economical, with stainless steel available for enhanced corrosion resistance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Standard Materials</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Carbon steel (A105)',
                  'Cost-effective solution',
                  'Low-pressure rated',
                  'Wide availability',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Premium Options</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Stainless steel (304/316)',
                  'Enhanced corrosion resistance',
                  'Water quality assurance',
                  'Extended service life',
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

      <CTABanner
        heading="Design Your Data Center Cooling Infrastructure"
        subtext="Contact our team to discuss chiller sizing, redundant cooling loops, and flange specifications for your mission-critical data center."
        primaryCTA={{
          label: 'Request Quote',
          href: '/contact?type=data-centers',
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
            '@type': 'WebPage',
            name: 'Data Center Flanges | ApiFlange',
            description: 'Flanges for data center cooling systems',
            url: 'https://www.apiflange.com/industries/data-centers',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Data Centers', item: 'https://www.apiflange.com/industries/data-centers' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
