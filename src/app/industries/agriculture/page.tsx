'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { Leaf } from 'lucide-react';

const metadata: Metadata = {
  title: 'Agriculture Flanges | ApiFlange',
  description:
    'Corrosion-resistant flanges for irrigation systems, fertigation, and agricultural water management. Reliable solutions for farm operations.',
  keywords: [
    'agriculture flanges',
    'irrigation flanges',
    'fertigation flanges',
    'farm equipment',
    'agricultural water',
    'corrosion-resistant',
  ],
  openGraph: {
    title: 'Agriculture Flanges | ApiFlange',
    description: 'Reliable flanges for agricultural irrigation and water management systems.',
    url: 'https://www.apiflange.com/industries/agriculture',
    type: 'website',
  },
};

export default function AgriculturePage() {
  return (
    <>
      <PageHero
        title="Flanges for Agricultural & Irrigation Systems"
        subtitle="Corrosion-resistant flanges engineered for irrigation, fertigation, and agricultural water management with reliable performance in outdoor environments."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Agriculture', href: '/industries/agriculture' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8">Agricultural Water Solutions</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Agricultural operations depend on reliable water delivery systems. ApiFlange supplies corrosion-resistant flanges for irrigation systems, fertigation equipment, farm water networks, and agricultural processing. From center pivot systems to field sprinklers, chemical injection equipment to drainage management, our flanges deliver decades of dependable service in outdoor, chemical-rich environments. With expertise in both pressure systems and gravity-feed applications, we optimize solutions for agricultural budgets and long-term operational reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Irrigation Ready', desc: 'Pivot systems' },
              { label: 'Corrosion Proof', desc: 'Outdoor durability' },
              { label: 'Cost-Effective', desc: 'Farm budgets' },
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
                description: 'Standard choice for pivot systems and field distribution lines. Easy installation and maintenance.',
              },
              {
                name: 'Blind Flanges',
                description: 'End caps and isolation points for system maintenance and expansion flexibility.',
              },
              {
                name: 'Plate Flanges',
                description: 'Pump connections, meter installations, and equipment interface connections.',
              },
              {
                name: 'Reducing Flanges',
                description: 'Smooth transitions in center pivot and drip irrigation main lines.',
              },
            ].map((type, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg">
                <h4 className="text-lg font-bold text-iron mb-3">{type.name}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Materials for Agricultural Service">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Agricultural water systems experience UV exposure, temperature cycling, and chemical exposure. We offer multiple material options to match your climate and water quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Standard Materials</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Carbon steel with galvanizing',
                  'Ductile iron for durability',
                  'Painted finishes available',
                  'Budget-friendly solutions',
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
                  'Stainless steel (304/316L)',
                  'Hot-dip galvanized coating',
                  'Epoxy protective coatings',
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
        heading="Design Your Agricultural System"
        subtext="Contact our team to discuss irrigation, center pivot, and water management system specifications for your agricultural operation."
        primaryCTA={{
          label: 'Request Quote',
          href: '/contact?type=agriculture',
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
            name: 'Agriculture Flanges | ApiFlange',
            description: 'Flanges for agricultural irrigation and water management',
            url: 'https://www.apiflange.com/industries/agriculture',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Agriculture', item: 'https://www.apiflange.com/industries/agriculture' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
