'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { UtensilsCrossed } from 'lucide-react';

const metadata: Metadata = {
  title: 'Food & Beverage Flanges | ApiFlange',
  description:
    'NSF-certified food-grade flanges for food processing, beverage production, and dairy applications. Sanitary and hygienic piping solutions.',
  keywords: [
    'food grade flanges',
    'beverage flanges',
    'dairy flanges',
    'food processing',
    'NSF certified',
    'sanitary flanges',
    'hygienic piping',
    'food safety',
  ],
  openGraph: {
    title: 'Food & Beverage Flanges | ApiFlange',
    description: 'NSF-certified food-grade flanges for food and beverage processing.',
    url: 'https://www.apiflange.com/industries/food-beverage',
    type: 'website',
  },
};

export default function FoodBeveragePage() {
  return (
    <>
      <PageHero
        title="Flanges for Food & Beverage Processing"
        subtitle="NSF-certified food-grade flanges engineered for food processing, beverage production, and dairy applications with sanitary design and hygienic standards."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Food & Beverage', href: '/industries/food-beverage' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8">Food & Beverage Solutions</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Food and beverage processing demands the highest standards of sanitation, safety, and reliability. ApiFlange supplies NSF-61 certified, food-grade flanges for dairy processing, beverage production, food ingredient handling, and pharmaceutical applications. Our stainless steel flanges feature hygienic design, smooth surfaces that prevent bacterial growth, and full traceability for food safety compliance. With expertise in FDA regulations, HACCP requirements, and industry best practices, we deliver the purity and reliability that food and beverage processors demand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'NSF Certified', desc: 'Food contact safe' },
              { label: 'Hygienic Design', desc: 'FDA compliant' },
              { label: 'Traceable Quality', desc: 'Full certification' },
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
                description: 'Standard food-grade configuration for product lines. Smooth bore design prevents particle traps.',
              },
              {
                name: 'Blind Flanges',
                description: 'Line terminations and isolation points with sanitary design and cleanout access.',
              },
              {
                name: 'Plate Flanges',
                description: 'Equipment connections for heat exchangers, pumps, and processing tanks with food contact surfaces.',
              },
              {
                name: 'Sanitary Clamp Flanges',
                description: 'Quick-connect sanitary clamp interfaces for modular food processing systems.',
              },
            ].map((type, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-lg">
                <h4 className="text-lg font-bold text-iron mb-3">{type.name}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Materials & Certifications">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Food and beverage processing requires materials that are safe for food contact, easy to clean, and resistant to sanitization chemicals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Standard Materials</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Stainless 304 Grade',
                  'Smooth polished surfaces',
                  'NSF-61 certified coating',
                  'Food contact approved',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Certifications</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'NSF/ANSI 61 potable water',
                  'FDA food contact materials',
                  'HACCP traceability',
                  '3-A Dairy standards',
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

      <SectionWrapper padding="lg" variant="gray" heading="Sanitary Design Principles">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Food-grade flanges must follow strict sanitary design principles to prevent contamination and ensure easy cleaning. Our flanges feature:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Polished, crevice-free surfaces to prevent bacterial growth',
              'Smooth bore design without ledges or product traps',
              'Proper drainage with no stagnant pockets',
              'Compatible gasket materials for food contact',
              'Full material traceability and certifications',
              'Designed for sanitation systems and CIP procedures',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-brass text-white font-bold text-sm">
                    ✓
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        heading="Ensure Food Safety Compliance"
        subtext="Contact our food and beverage specialists to discuss NSF certification, HACCP requirements, and sanitary flange design for your processing application."
        primaryCTA={{
          label: 'Request Quote',
          href: '/contact?type=food-beverage',
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
            name: 'Food & Beverage Flanges | ApiFlange',
            description: 'NSF-certified food-grade flanges for food and beverage processing',
            url: 'https://www.apiflange.com/industries/food-beverage',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Food & Beverage', item: 'https://www.apiflange.com/industries/food-beverage' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
