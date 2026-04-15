'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import FAQ from '@/components/ui/FAQ';
import { Zap, Flame, Shield, Thermometer } from 'lucide-react';

const metadata: Metadata = {
  title: 'Power Generation Flanges | ApiFlange',
  description:
    'High-temperature alloy steel flanges for boilers, steam systems, and cooling water. ASME compliance for nuclear and fossil fuel power generation.',
  keywords: [
    'power generation flanges',
    'boiler flanges',
    'steam system flanges',
    'high-temperature flanges',
    'power plant equipment',
    'nuclear flanges',
    'cooling water flanges',
  ],
  openGraph: {
    title: 'Power Generation Flanges | ApiFlange',
    description: 'High-temperature flanges for power plant boilers, steam systems, and cooling water applications.',
    url: 'https://www.apiflange.com/industries/power-generation',
    type: 'website',
  },
};

export default function PowerGenerationPage() {
  return (
    <>
      <PageHero
        title="Flanges for Power Generation"
        subtitle="High-temperature alloy steel solutions engineered for boiler systems, steam distribution, and cooling water in power plants with full ASME compliance."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Power Generation', href: '/industries/power-generation' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8 text-center">
            Engineered for Extreme Heat & Pressure
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Power generation demands uncompromising flange reliability. ApiFlange supplies high-temperature alloy steel flanges engineered for boiler systems, superheated steam, and cooling water in both fossil fuel and nuclear power plants. From moderate-temperature Class 150 flanges for cooling loops to ultra-high-temperature F91 flanges for supercritical steam systems, our expertise ensures safe, efficient power generation infrastructure with full ASME compliance and nuclear-grade certifications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Zap, label: 'High-Temp Alloys', desc: 'F11, F22, F91' },
              { icon: Flame, label: 'Boiler Ready', desc: '1100°F+' },
              { icon: Shield, label: 'ASME Code', desc: 'Nuclear grade' },
              { icon: Thermometer, label: 'Pressure Tested', desc: '1.5x rated' },
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

      <SectionWrapper padding="lg" variant="gray" heading="High-Temperature Alloy Materials">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Power plant applications demand materials that retain strength at extreme temperatures. ApiFlange specializes in alloy steel flanges specifically engineered for superheated steam and high-temperature service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Alloy Steel Grades</h3>
              <div className="space-y-4">
                {[
                  { grade: 'F5 (5Cr)', temp: 'to 1100°F', use: 'Elevated temp steam lines' },
                  { grade: 'F11 (1¼Cr)', temp: 'to 900°F', use: 'Boiler headers & risers' },
                  { grade: 'F22 (2¼Cr)', temp: 'to 1050°F', use: 'High-temp steam service' },
                  { grade: 'F91 (9Cr)', temp: 'to 1100°F', use: 'Supercritical systems' },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4 py-1">
                    <p className="font-bold text-gray-900 text-sm">{item.grade}</p>
                    <p className="text-xs text-gray-600 mt-1">Max: {item.temp} | {item.use}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Compliance Standards</h3>
              <ul className="space-y-3">
                {[
                  'ASME B16.5 - Steel Flanges',
                  'ASME B16.47 - Large Bore',
                  'ASME Section I - Power Boilers',
                  'ASME Section VIII - Pressure Vessels',
                  'ASME Section III - Nuclear',
                  'ASTM A182 - Forged Alloy Steel',
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

      <SectionWrapper padding="lg" variant="white" heading="Power Plant Applications">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fossil Fuel Plants',
                items: [
                  'Boiler tube headers',
                  'Steam superheaters',
                  'Reheater connections',
                  'Main steam lines',
                  'Hot reheat lines',
                ],
              },
              {
                title: 'Nuclear Plants',
                items: [
                  'Reactor coolant loops',
                  'Steam generator nozzles',
                  'Pressurizer connections',
                  'Safety injection lines',
                  'Auxiliary systems',
                ],
              },
              {
                title: 'Cooling Systems',
                items: [
                  'Cooling water headers',
                  'Condenser connections',
                  'Circulating water loops',
                  'Heat exchanger nozzles',
                  'Tower makeup lines',
                ],
              },
            ].map((app, idx) => (
              <div key={idx} className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
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
            Power plant service combines extreme pressure and temperature. ASME Code Section I establishes rating relationships that decrease pressure capacity at elevated temperatures.
          </p>

          <div className="bg-gradient-to-r from-[#1C1C1E] to-[#2A2A2E] rounded-lg p-8 text-white mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm opacity-90 mb-2">Design Pressures</p>
                <p className="text-3xl font-bold">600-1500 psi</p>
                <p className="text-xs opacity-75 mt-2">All ASME classes</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-2">Design Temperatures</p>
                <p className="text-3xl font-bold">Up to 1100°F</p>
                <p className="text-xs opacity-75 mt-2">F91 alloy rated</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-2">Service Factor</p>
                <p className="text-3xl font-bold">1.5x Testing</p>
                <p className="text-xs opacity-75 mt-2">Pressure tested</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            All ApiFlange power generation flanges are manufactured per ASME Code with complete pressure testing at 1.5 times the design pressure rating. Full mill test reports and ASME Code certificates of compliance are provided.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Quality & Certification">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Power generation demands uncompromising quality. ApiFlange provides complete traceability and documentation for every flange.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Documentation</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Mill test reports (MTTR)',
                  'ASME Code certificates',
                  'Material traceability',
                  'Pressure test documentation',
                  'Dimensional inspection records',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg">
              <h4 className="text-lg font-bold text-iron mb-4">Testing Services</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Hydrostatic pressure testing',
                  'Mechanical property testing',
                  'Chemical composition analysis',
                  'Non-destructive inspection',
                  'Third-party certification',
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

      <SectionWrapper padding="lg" variant="gray">
        <FAQ
          items={[
            {
              question: 'What is the difference between F11 and F22 alloy flanges?',
              answer:
                'F11 (1¼Cr) is rated for continuous service up to 900°F and provides moderate cost for elevated temperature applications. F22 (2¼Cr) is rated up to 1050°F and offers superior creep strength for long-term high-temperature operation. Pressure capacity decreases with temperature rise per ASME Code Section I. Consult design conditions to select the appropriate grade.',
            },
            {
              question: 'Do I need ASME Code certificate for power generation flanges?',
              answer:
                'Yes. For power boilers (ASME Section I) and pressure vessels (Section VIII), Code certificate is mandatory. All ApiFlange power generation flanges are ASME-certified with complete documentation. Nuclear applications require additional certifications per ASME Section III.',
            },
            {
              question: 'Can carbon steel flanges be used in power plants?',
              answer:
                'Carbon steel (A105) is suitable only for low-pressure, low-temperature service such as auxiliary water systems and cooling tower makeup. Main steam, boiler feed water, and all high-temperature applications require alloy steel. Consult ASME Section I to verify your specific application.',
            },
            {
              question: 'What pressure rating do F91 flanges have?',
              answer:
                'F91 flanges are typically manufactured as ASME Class 600 or 900, but actual pressure rating varies with temperature. At room temperature, Class 600 is rated at 1480 psi. At 900°F, the rating drops to approximately 890 psi. At 1100°F (the practical continuous service limit for F91), the rating drops further. Always consult ASME B16.5 P-T tables for your specific design temperature.',
            },
            {
              question: 'How do I specify nuclear-grade flanges?',
              answer:
                'Nuclear-grade flanges must comply with ASME Section III and typically require 10CFR50 Appendix B quality assurance program. Specify "10CFR50 Appendix B certified" on drawings and in purchase orders. ApiFlange can supply compliant products with full documentation.',
            },
            {
              question: 'What is your lead time for high-temperature alloy flanges?',
              answer:
                'Standard sizes in F11 and F22 require 6-10 weeks depending on size and quantity. F91 and nuclear-grade materials require 10-16 weeks. Custom configurations may extend timelines. Contact us with your schedule requirements.',
            },
          ]}
        />
      </SectionWrapper>

      <CTABanner
        heading="Planning Your Power Generation Project?"
        subtext="Our power plant specialists can help you select the appropriate alloy steel grade and pressure class for your boiler, steam, or cooling system application."
        primaryCTA={{
          label: 'Get a Quote',
          href: '/contact?type=power-generation',
        }}
        secondaryCTA={{
          label: 'ASME Specifications',
          href: '/resources/asme-code-resources',
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Power Generation Flanges | ApiFlange',
            description: 'High-temperature flanges for power generation',
            url: 'https://www.apiflange.com/industries/power-generation',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Power Generation', item: 'https://www.apiflange.com/industries/power-generation' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
