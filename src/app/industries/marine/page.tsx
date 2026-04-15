import { type Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import FAQ from '@/components/ui/FAQ';
import { Ship, Shield, Anchor, Waves } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marine Flanges | ApiFlange',
  description:
    'Shipboard and offshore platform flanges. Corrosion-resistant stainless, duplex, and nickel alloys for seawater, classification society compliance.',
  keywords: [
    'marine flanges',
    'shipboard flanges',
    'offshore platform flanges',
    'seawater resistant flanges',
    'stainless steel marine',
    'duplex marine flanges',
    'classification society',
    'DNV ABS BV',
  ],
  openGraph: {
    title: 'Marine Flanges | ApiFlange',
    description: 'Corrosion-resistant flanges for shipboard and offshore platform applications.',
    url: 'https://www.apiflange.com/industries/marine',
    type: 'website',
  },
};

export default function MarinePage() {
  return (
    <>
      <PageHero
        title="Flanges for Marine & Offshore Applications"
        subtitle="Corrosion-resistant stainless, duplex, and nickel alloy flanges engineered for shipboard and offshore platform duty with full classification society compliance."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Marine', href: '/industries/marine' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8 text-center">
            Engineered for Extreme Seawater Environments
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Marine environments demand exceptional corrosion resistance and reliability. ApiFlange specializes in stainless steel, duplex, and exotic nickel alloy flanges designed for shipboard piping, offshore drilling platforms, subsea equipment, and coastal industrial facilities. With expertise in classification society requirements (DNV, ABS, BV, Lloyd's), cathodic protection systems, and seawater chemistry, we deliver flanges that withstand the harshest marine environments with uncompromising reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Ship, label: 'Seawater Proven', desc: 'Stainless & duplex' },
              { icon: Anchor, label: 'Offshore Ready', desc: 'DNV certified' },
              { icon: Shield, label: 'Cathodic Protection', desc: 'Compatible design' },
              { icon: Waves, label: 'Zero Tolerance', desc: 'No crevice corrosion' },
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

      <SectionWrapper padding="lg" variant="gray" heading="Materials for Seawater Service">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Seawater is one of the most corrosive environments. Material selection is critical to ensure 20-30 year service life in marine applications. ApiFlange stocks comprehensive options from standard stainless to premium duplex and exotic alloys.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Stainless Steel Options</h3>
              <div className="space-y-4">
                {[
                  { grade: '304/304L', temp: 'to 400°F', use: 'Auxiliary water, low-temp' },
                  { grade: '316/316L', temp: 'to 400°F', use: 'General seawater duty' },
                  { grade: 'Duplex 2205', temp: 'to 250°F', use: 'High-strength seawater' },
                  { grade: 'Super Duplex 2507', temp: 'to 250°F', use: 'Extreme corrosion' },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4 py-1">
                    <p className="font-bold text-gray-900 text-sm">{item.grade}</p>
                    <p className="text-xs text-gray-600 mt-1">Max: {item.temp} | {item.use}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-iron mb-6">Nickel Alloys</h3>
              <div className="space-y-4">
                {[
                  { alloy: 'Monel 400/K-500', use: 'Seawater and fluorine' },
                  { alloy: 'Inconel 625', use: 'Severe saltwater environments' },
                  { alloy: 'Hastelloy C-276', use: 'Extreme chemical attack' },
                  { alloy: 'Titanium Gr. 2/5', use: 'Subsea and deepwater' },
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

      <SectionWrapper padding="lg" variant="white" heading="Marine Applications">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Shipboard Systems',
                items: [
                  'Seawater cooling loops',
                  'Fire main systems',
                  'Ballast systems',
                  'Sanitary water',
                  'Bilge systems',
                ],
              },
              {
                title: 'Offshore Platforms',
                items: [
                  'Production risers',
                  'Power generation',
                  'Process water',
                  'Utility systems',
                  'Subsea manifolds',
                ],
              },
              {
                title: 'Subsea Equipment',
                items: [
                  'Trees and jumpers',
                  'Control systems',
                  'Product pipelines',
                  'Jumper connections',
                  'Mud lines',
                ],
              },
            ].map((app, idx) => (
              <div key={idx} className="p-6 bg-teal-50 rounded-lg border border-teal-200">
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

      <SectionWrapper padding="lg" variant="gray" heading="Classification Society Compliance">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Marine vessels and offshore structures must comply with classification society rules. ApiFlange's marine flanges meet or exceed the requirements of all major classification societies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-iron mb-4">Approved Classification Societies</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'DNV GL (Det Norske Veritas)',
                  'ABS (American Bureau of Shipping)',
                  'Bureau Veritas (BV)',
                  "Lloyd's Register (LR)",
                  'RINA (Registro Italiano Navale)',
                  'ClassNK (Japan)',
                ].map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass">✓</span>{cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-iron mb-4">Material Standards</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'ASME B16.5 / B16.47',
                  'ASTM A182 (Stainless)',
                  'ASTM B564 (Nickel Alloy)',
                  'EN standards equivalent',
                  'DNV materials approval',
                  "Lloyd's certification",
                ].map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass">✓</span>{cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Corrosion Management & Design Considerations">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Seawater corrosion requires comprehensive system design. Beyond flange material selection, ApiFlange provides guidance on cathodic protection compatibility and crevice corrosion prevention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-lg font-bold text-iron mb-4">Design Best Practices</h4>
              <ul className="space-y-3 text-sm">
                {[
                  'Select material compatible with cathodic protection',
                  'Avoid galvanic couples between different metals',
                  'Minimize crevices in flange design',
                  'Ensure proper gasket sealing',
                  'Account for biofouling in design',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="text-lg font-bold text-iron mb-4">Testing & Verification</h4>
              <ul className="space-y-3 text-sm">
                {[
                  'ASTM G48 seawater corrosion testing',
                  'Pitting resistance equivalent number (PREN)',
                  'Crevice corrosion resistance analysis',
                  'Galvanic corrosion testing',
                  'Long-term exposure verification',
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

      <SectionWrapper padding="lg" variant="gray" heading="Sizes & Pressure Classes">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            ApiFlange supplies marine flanges in all standard ASME sizes and pressure classes, from instrument connections to large bore subsea jumpers.
          </p>

          <div className="bg-gradient-to-r from-[#1C1C1E] to-[#2A2A2E] rounded-lg p-8 text-white text-center">
            <p className="text-sm opacity-90 mb-2">Standard & Custom Sizes</p>
            <p className="text-4xl font-bold">½" to 60"+</p>
            <p className="text-xs opacity-75 mt-3">Pressure classes 150 through 2500 psi</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white">
        <FAQ
          items={[
            {
              question: 'What material should I specify for seawater cooling systems?',
              answer:
                'For seawater cooling systems, duplex stainless steel (2205) is the standard choice, offering excellent corrosion resistance at reasonable cost. For more demanding environments or where galvanic protection is challenging, super duplex (2507) or nickel alloys (Monel, Inconel) provide superior performance. Consult with our marine specialists for your specific application.',
            },
            {
              question: 'Can carbon steel be used with cathodic protection in seawater?',
              answer:
                'Yes, carbon steel can be used with impressed current or sacrificial anode cathodic protection. However, material compatibility must be verified. Some stainless steels become embrittled under cathodic protection. Always verify material compatibility with your cathodic protection design. Duplex and nickel alloys are typically safer choices.',
            },
            {
              question: 'What is PREN and why does it matter for marine service?',
              answer:
                'PREN (Pitting Resistance Equivalent Number) is a calculated value predicting a material\'s resistance to pitting corrosion: PREN = %Cr + 3.3(%Mo) + 16(%N). Higher PREN indicates better seawater resistance. For marine applications, specify materials with PREN >40 minimum. Super duplex (2507) has PREN ~42, which provides excellent seawater performance.',
            },
            {
              question: 'Do I need special certifications for offshore platform flanges?',
              answer:
                'Yes. Offshore flanges typically require classification society approval (DNV, ABS, BV, Lloyd\'s) and often third-party inspection. ApiFlange can provide certified offshore-grade flanges with complete documentation and inspection records.',
            },
            {
              question: 'What is the lead time for marine-grade stainless flanges?',
              answer:
                'Standard duplex 2205 flanges in common sizes are typically 6-10 weeks. Super duplex, Monel, and Inconel require 10-16 weeks. Custom subsea configurations may require 16+ weeks. Contact us with your schedule for expedited availability.',
            },
            {
              question: 'Can you supply subsea jumper flanges with RTJ face?',
              answer:
                'Yes. We fabricate subsea jumper flanges in duplex, super duplex, and exotic alloys with RTJ, large bore male/female, and other specialty face designs. Custom engineering and pressure testing are available.',
            },
          ]}
        />
      </SectionWrapper>

      <CTABanner
        heading="Building Your Marine System?"
        subtext="Our marine specialists can help you select the right material grade and classification society certifications for your seawater application."
        primaryCTA={{
          label: 'Get a Quote',
          href: '/contact?type=marine',
        }}
        secondaryCTA={{
          label: 'View Materials',
          href: '/materials',
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Marine Flanges | ApiFlange',
            description: 'Corrosion-resistant flanges for marine and offshore applications',
            url: 'https://www.apiflange.com/industries/marine',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Marine', item: 'https://www.apiflange.com/industries/marine' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
