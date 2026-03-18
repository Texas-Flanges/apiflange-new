'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { Hammer } from 'lucide-react';

const metadata: Metadata = {
  title: 'Lumber & Pulping Flanges | ApiFlange',
  description:
    'Chemical-resistant flanges for wood treatment, pulping liquor systems, and recovery boilers. Stainless and specialty materials for mill environments.',
  keywords: [
    'lumber flanges',
    'pulp mill flanges',
    'pulping flanges',
    'recovery boiler',
    'black liquor',
    'chemical resistant',
    'mill equipment',
  ],
  openGraph: {
    title: 'Lumber & Pulping Flanges | ApiFlange',
    description: 'Chemical-resistant flanges for lumber mills and pulp processing operations.',
    url: 'https://www.apiflange.com/industries/lumber',
    type: 'website',
  },
};

export default function LumberPage() {
  return (
    <>
      <PageHero
        title="Flanges for Lumber & Pulping Operations"
        subtitle="Chemical-resistant flanges engineered for wood treatment, pulping liquor systems, recovery boilers, and harsh mill environments."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Lumber & Pulping', href: '/industries/lumber' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8">Lumber Mill Solutions</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Lumber and pulp mills operate in some of the most chemically aggressive environments in industrial processing. ApiFlange supplies stainless steel and specialty alloy flanges engineered to withstand black liquor systems, kraft process chemicals, wood treatment compounds, and high-temperature recovery boiler service. With expertise in both pressure and low-pressure mill systems, we deliver durability and corrosion resistance that extends equipment life and reduces maintenance downtime in these critical facilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Chemical Resistant', desc: 'Black liquor duty' },
              { label: 'High Temperature', desc: 'Recovery boilers' },
              { label: 'Proven Durability', desc: 'Mill tested' },
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
                description: 'Standard mill configuration for black liquor, pulping, and condensate lines. Field-weldable design.',
              },
              {
                name: 'Blind Flanges',
                description: 'Equipment termination and isolation points for circuit isolation and maintenance access.',
              },
              {
                name: 'Plate Flanges',
                description: 'Recovery boiler nozzles, pump suction/discharge, and heat exchanger connections.',
              },
              {
                name: 'Weld Neck Flanges',
                description: 'High-pressure recovery boiler and steam system applications requiring reinforced hubs.',
              },
            ].map((type, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg">
                <h4 className="text-lg font-bold text-iron mb-3">{type.name}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Materials for Pulp & Paper Service">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Pulp and paper mill chemicals demand corrosion-resistant materials. Stainless steel is the standard for kraft process systems, with specialty alloys for the most severe applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Standard Materials</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Stainless 304/304L',
                  'Stainless 316/316L',
                  'Black liquor compatible',
                  'Proven mill service',
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
                  'Duplex stainless steel',
                  'High-temperature alloys',
                  'Specialty compositions',
                  'Extended mill life',
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
        heading="Optimize Your Mill Operations"
        subtext="Contact our pulp and paper specialists to discuss black liquor systems, recovery boilers, and mill-proven flange solutions."
        primaryCTA={{
          label: 'Request Quote',
          href: '/contact?type=lumber',
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
            name: 'Lumber & Pulping Flanges | ApiFlange',
            description: 'Chemical-resistant flanges for lumber and pulp mills',
            url: 'https://www.apiflange.com/industries/lumber',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Lumber & Pulping', item: 'https://www.apiflange.com/industries/lumber' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
