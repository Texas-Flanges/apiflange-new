'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import FAQ from '@/components/ui/FAQ';
import { Beaker, Shield, Flame, Gauge } from 'lucide-react';

const metadata: Metadata = {
  title: 'Petrochemical Flanges | ApiFlange',
  description:
    'Exotic alloy flanges for chemical processing, corrosive media. Inconel, Monel, Hastelloy, duplex stainless, RTJ gaskets for petrochemical plants and refineries.',
  keywords: [
    'petrochemical flanges',
    'chemical process flanges',
    'corrosion resistant flanges',
    'exotic alloy flanges',
    'Inconel flanges',
    'duplex stainless flanges',
    'chemical plant equipment',
    'high-alloy flanges',
  ],
  openGraph: {
    title: 'Petrochemical Flanges | ApiFlange',
    description: 'Exotic alloy and corrosion-resistant flanges for demanding petrochemical applications.',
    url: 'https://www.apiflange.com/industries/petrochemical',
    type: 'website',
  },
};

export default function PetrochemicalPage() {
  return (
    <>
      <PageHero
        title="Flanges for Petrochemical & Chemical Processing"
        subtitle="Exotic alloy solutions engineered for corrosive media, high temperatures, and aggressive chemical environments. Inconel, Monel, Hastelloy, and duplex stainless configurations."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Petrochemical', href: '/industries/petrochemical' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8 text-center">
            Material Science for Extreme Corrosion
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Chemical processing demands uncompromising material selection. ApiFlange specializes in exotic alloys engineered to withstand corrosive media, high temperatures, and aggressive chemical environments that would compromise standard carbon or stainless steel. From caustic soda to sulfuric acid, chlorine gas to hydrofluoric acid, our exotic alloy flanges deliver the durability, reliability, and leak-free sealing required by the world's most demanding petrochemical facilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Beaker, label: 'Exotic Alloys', desc: 'Inconel, Monel, Hastelloy' },
              { icon: Shield, label: 'Corrosion Proof', desc: 'Extreme acid/base' },
              { icon: Flame, label: 'High Temp', desc: '500-1500°F+' },
              { icon: Gauge, label: 'RTJ Gaskets', desc: 'Zero leakage design' },
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

      <SectionWrapper padding="lg" variant="gray" heading="Exotic Materials for Chemical Compatibility">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Petrochemical plants process hundreds of different chemical streams. ApiFlange maintains expertise in material selection, offering comprehensive options for every corrosive environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Stainless & Duplex Steels</h3>
              <div className="space-y-4">
                {[
                  { grade: '304/304L', use: 'General corrosion resistance' },
                  { grade: '316/316L', use: 'Superior pitting resistance' },
                  { grade: '317L', use: 'Extra molybdenum enhancement' },
                  { grade: 'Duplex 2205', use: 'High strength, chloride resistance' },
                  { grade: 'Super Duplex 2507', use: 'Extreme corrosion environments' },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4 py-1">
                    <p className="font-bold text-gray-900 text-sm">{item.grade}</p>
                    <p className="text-xs text-gray-600">{item.use}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Nickel & Superalloys</h3>
              <div className="space-y-4">
                {[
                  { alloy: 'Inconel 600/625/718', use: 'High-temp, corrosion resistance' },
                  { alloy: 'Monel 400/K-500', use: 'Seawater, fluorine compounds' },
                  { alloy: 'Hastelloy C-276', use: 'Severe chemical attack' },
                  { alloy: 'Hastelloy B-3', use: 'Hydrochloric acid service' },
                  { alloy: 'Titanium Gr. 2/5', use: 'Seawater, aqua regia' },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4 py-1">
                    <p className="font-bold text-gray-900 text-sm">{item.alloy}</p>
                    <p className="text-xs text-gray-600">{item.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Common Petrochemical Applications">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[
              {
                title: 'Acid Services',
                items: [
                  'Sulfuric acid plants',
                  'Hydrochloric acid handling',
                  'Phosphoric acid processing',
                  'Nitric acid systems',
                  'Organic acid synthesis',
                ],
              },
              {
                title: 'Alkali Services',
                items: [
                  'Caustic soda (NaOH)',
                  'Sodium hypochlorite',
                  'Ammonia synthesis',
                  'Potassium chloride',
                  'Liquid ammonia storage',
                ],
              },
              {
                title: 'Specialized Chemicals',
                items: [
                  'Chlorine gas handling',
                  'Fluorine compounds',
                  'Hydrogen peroxide',
                  'Organic solvents',
                  'Hydrocarbon blending',
                ],
              },
              {
                title: 'Polymer Processing',
                items: [
                  'Polymerization reactors',
                  'Catalyst feed systems',
                  'Product recovery',
                  'Solvent recirculation',
                  'Heat exchange loops',
                ],
              },
            ].map((app, idx) => (
              <div key={idx} className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="text-lg font-bold text-iron mb-4">{app.title}</h4>
                <ul className="space-y-2">
                  {app.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-brass">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray" heading="Pressure & Temperature Ratings">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Petrochemical applications frequently involve aggressive combinations of pressure, temperature, and chemical attack. Our exotic alloy flanges are engineered and tested for these demanding conditions.
          </p>

          <div className="bg-gradient-to-r from-[#1C1C1E] to-[#2A2A2E] rounded-lg p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm opacity-90 mb-2">Pressure Range</p>
                <p className="text-3xl font-bold">150-2500 psi</p>
                <p className="text-xs opacity-75 mt-2">All ASME classes</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-2">Temperature Range</p>
                <p className="text-3xl font-bold">-50°F to 1500°F</p>
                <p className="text-xs opacity-75 mt-2">Material dependent</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-2">Sealing Options</p>
                <p className="text-3xl font-bold">RTJ/RF/FF</p>
                <p className="text-xs opacity-75 mt-2">Full range available</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="RTJ Gaskets & Sealing Solutions">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            High-pressure petrochemical service demands superior gasket solutions. Ring Type Joint (RTJ) gaskets provide zero-leakage sealing while metal and metal composite gaskets offer chemical compatibility with exotic alloy flanges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Metal Gaskets</h4>
              <ul className="space-y-3">
                {[
                  'Soft iron (RTJ standard)',
                  'Stainless steel 316',
                  'Monel metal gaskets',
                  'Inconel gaskets',
                  'Tantalum gaskets (specialty)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-brass font-bold mt-0.5">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Composite Solutions</h4>
              <ul className="space-y-3">
                {[
                  'Spiral-wound with metal rings',
                  'Ptfe-backed graphite',
                  'Elastomer + graphite blends',
                  'PTFE jacketed gaskets',
                  'Corrugated metal gaskets',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-brass font-bold mt-0.5">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray" heading="Engineering Support">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Selecting the right material for your specific chemical environment is critical. Our engineering team can provide:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Chemical compatibility analysis for your specific fluid stream',
              'Corrosion rate estimation based on temperature and concentration',
              'Material selection guidance balancing cost and performance',
              'Gasket material recommendations for fluid compatibility',
              'Pressure/temperature derating calculations for exotic alloys',
              'Design and fabrication of custom flange configurations',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-brass text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white">
        <FAQ
          items={[
            {
              question: 'How do I choose between stainless steel, duplex, and exotic alloys?',
              answer:
                'Material selection depends on the specific chemical, concentration, temperature, and pressure. General rule: 304 stainless for mild corrosives, 316L for better pitting resistance, duplex for chloride environments, and exotic alloys (Inconel, Monel, Hastelloy) for severe corrosion. Contact our engineers with your process details for specific recommendations.',
            },
            {
              question: 'What is the cost difference between stainless and exotic alloy flanges?',
              answer:
                'Exotic alloy flanges cost significantly more than carbon steel, with price varying by material grade, market conditions, and size. The extended service life and elimination of corrosion-related downtime often justify the higher initial cost in aggressive chemical applications. Contact us for current pricing on specific alloy grades.',
            },
            {
              question: 'Can I use stainless steel in hydrochloric acid service?',
              answer:
                'Standard stainless steel is NOT suitable for hydrochloric acid above trace concentrations. Hastelloy B-3 is the material of choice for HCl service. Consult with our engineering team before specifying stainless for any strong acid application.',
            },
            {
              question: 'Do you offer custom gasket materials for exotic alloy compatibility?',
              answer:
                'Yes. We can source or fabricate custom gaskets matched to your exotic alloy flanges and specific chemical compatibility requirements. Metal gaskets, spiral-wound composites, and elastomer options are all available.',
            },
            {
              question: 'What is the lead time for exotic alloy flanges?',
              answer:
                'Standard catalog sizes in common materials like 316L or duplex are typically 4-8 weeks. Inconel, Monel, and Hastelloy require 8-16 weeks depending on size and complexity. Custom configurations may extend timelines further. Contact us with your delivery requirements.',
            },
            {
              question: 'Do you perform material testing or certification?',
              answer:
                'Yes. All ApiFlange exotic alloy flanges include full mill test reports certifying material composition, tensile properties, and hardness. We can also arrange third-party testing, pressure testing, or specialized certifications upon request.',
            },
          ]}
        />
      </SectionWrapper>

      <CTABanner
        heading="Need Material Selection Guidance?"
        subtext="Our chemical process specialists can help identify the ideal material for your specific corrosive environment and operating conditions."
        primaryCTA={{
          label: 'Request Engineering Support',
          href: '/contact?type=petrochemical',
        }}
        secondaryCTA={{
          label: 'Get a Quote',
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
            name: 'Petrochemical Flanges | ApiFlange',
            description: 'Exotic alloy flanges for chemical processing and corrosive media',
            url: 'https://www.apiflange.com/industries/petrochemical',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Petrochemical', item: 'https://www.apiflange.com/industries/petrochemical' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
