'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { Mountain } from 'lucide-react';

const metadata: Metadata = {
  title: 'Mining Flanges | ApiFlange',
  description:
    'Durable flanges for slurry systems, tailings handling, and mineral processing. Abrasion-resistant materials for demanding mine operations.',
  keywords: ['mining flanges', 'slurry flanges', 'tailings flanges', 'mineral processing', 'mining equipment'],
  openGraph: {
    title: 'Mining Flanges | ApiFlange',
    description: 'Durable flanges for mining, slurry, and mineral processing applications.',
    url: 'https://www.apiflange.com/industries/mining',
    type: 'website',
  },
};

export default function MiningPage() {
  return (
    <>
      <PageHero
        title="Flanges for Mining & Mineral Processing"
        subtitle="Durable, abrasion-resistant flanges engineered for slurry systems, tailings handling, and demanding mineral extraction operations."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Mining', href: '/industries/mining' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8">Mining Operations</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Mining operations demand flanges that can withstand abrasive slurries, mineral-laden water, and aggressive processing chemicals. ApiFlange supplies robust carbon steel and specialty material flanges engineered for slurry pump discharge, tailings handling, ore processing loops, and recovery circuits. Our engineering team understands the unique challenges of mining applications and provides cost-effective solutions that deliver reliable service in some of the world's harshest operating environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Slurry Service', desc: 'High-solids handling' },
              { label: 'Abrasion Resistant', desc: 'Proven durability' },
              { label: 'Cost-Effective', desc: 'Mining budgets' },
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
                description: 'Field-weldable for slurry pump discharge lines. Cost-effective for high-volume mining operations.',
              },
              {
                name: 'Blind Flanges',
                description: 'System end caps and isolation points for circuit testing and maintenance.',
              },
              {
                name: 'Plate Flanges',
                description: 'Equipment nozzle connections for pump suction, heat exchanger, and tank interfaces.',
              },
              {
                name: 'Reducing Flanges',
                description: 'Smooth transitions between different pipe sizes in slurry circuits.',
              },
            ].map((type, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 rounded-lg">
                <h4 className="text-lg font-bold text-iron mb-3">{type.name}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Materials for Mining Service">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Mining applications typically use carbon steel with protective coatings for cost control, supplemented by specialty materials for aggressive media.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Standard Materials</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Carbon steel (A105)',
                  'Cast iron for low-pressure',
                  'Ductile iron reinforced',
                  'Cost-optimized solutions',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Specialty Options</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Stainless steel (316L)',
                  'Epoxy-coated protection',
                  'Rubber-lined nozzles',
                  'Hardened inserts',
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
        heading="Optimize Your Mining Operations"
        subtext="Contact our mining specialists to discuss slurry handling systems, tailings management, and durable flange solutions for your extraction process."
        primaryCTA={{
          label: 'Request Quote',
          href: '/contact?type=mining',
        }}
        secondaryCTA={{
          label: 'Contact Sales',
          href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new',
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Mining Flanges | ApiFlange',
            description: 'Durable flanges for mining and mineral processing',
            url: 'https://www.apiflange.com/industries/mining',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Mining', item: 'https://www.apiflange.com/industries/mining' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
