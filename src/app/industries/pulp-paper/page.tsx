'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import { FileText } from 'lucide-react';

const metadata: Metadata = {
  title: 'Pulp & Paper Flanges | ApiFlange',
  description:
    'Specialized flanges for black liquor systems, steam condensate, and harsh mill environments. Stainless steel solutions for pulp and paper mills.',
  keywords: [
    'pulp and paper flanges',
    'black liquor flanges',
    'steam condensate flanges',
    'mill environment',
    'kraft process',
    'recovery boiler',
    'stainless mill flanges',
  ],
  openGraph: {
    title: 'Pulp & Paper Flanges | ApiFlange',
    description: 'Specialized flanges for pulp and paper mill operations.',
    url: 'https://www.apiflange.com/industries/pulp-paper',
    type: 'website',
  },
};

export default function PulpPaperPage() {
  return (
    <>
      <PageHero
        title="Flanges for Pulp & Paper Mills"
        subtitle="Specialized flanges for black liquor, steam condensate, and harsh mill environments with stainless steel and specialty alloy solutions."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Pulp & Paper', href: '/industries/pulp-paper' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8">Mill-Proven Solutions</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Pulp and paper mills are among the world's most challenging industrial environments. ApiFlange supplies specialized flanges for black liquor systems, kraft process chemicals, steam condensate, recovery boiler service, and the full spectrum of mill operations. With decades of mill experience, we understand the unique corrosion, temperature, and pressure challenges of chemical pulping. Our stainless steel and specialty alloy flanges are engineered to deliver extended service life and reduced maintenance in these demanding facilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Black Liquor Ready', desc: 'Kraft compatible' },
              { label: 'Mill-Tested', desc: 'Industry proven' },
              { label: 'Extended Life', desc: 'Low maintenance' },
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
                description: 'Standard mill configuration for black liquor, steam, and condensate lines.',
              },
              {
                name: 'Weld Neck Flanges',
                description: 'Recovery boiler and high-pressure steam service requiring reinforced design.',
              },
              {
                name: 'Blind Flanges',
                description: 'System isolation and maintenance access points throughout mill operations.',
              },
              {
                name: 'Plate Flanges',
                description: 'Equipment connections for recovery boilers, heat exchangers, and pump systems.',
              },
            ].map((type, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-lg">
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
            Kraft mill chemicals demand corrosion-resistant materials. Stainless steel is the industry standard, with specialty alloys for extreme service conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Standard Materials</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Stainless 304/304L',
                  'Stainless 316/316L',
                  'Black liquor service',
                  'Mill-proven durability',
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
                  'Recovery boiler service',
                  'Maximum mill life',
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
        heading="Optimize Your Mill Performance"
        subtext="Contact our pulp and paper specialists to discuss black liquor systems, recovery boilers, and mill-proven flange solutions."
        primaryCTA={{
          label: 'Request Quote',
          href: '/contact?type=pulp-paper',
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
            name: 'Pulp & Paper Flanges | ApiFlange',
            description: 'Specialized flanges for pulp and paper mills',
            url: 'https://www.apiflange.com/industries/pulp-paper',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Pulp & Paper', item: 'https://www.apiflange.com/industries/pulp-paper' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
