import { type Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Button from '@/components/ui/Button';
import { flangeTypes } from '@/data/flangeTypes';
import FlangesClient from './FlangesClient';

// Export metadata for static generation
export const metadata: Metadata = {
  title: 'Steel Pipe Flanges | ApiFlange',
  description:
    'Comprehensive range of 20 flange types including weld neck, slip-on, socket weld, threaded, and RTJ flanges. ASME B16.5, API 6A, and DIN compliant for industrial piping systems.',
  keywords: [
    'flanges',
    'weld neck flange',
    'slip-on flange',
    'socket weld flange',
    'threaded flange',
    'RTJ flange',
    'ASME B16.5',
    'pipe flanges',
    'industrial flanges',
  ],
  openGraph: {
    title: 'Steel Pipe Flanges | ApiFlange',
    description:
      'Complete selection of industrial-grade flanges for all applications and pressure ratings.',
    url: 'https://www.apiflange.com/products/flanges',
    type: 'website',
  },
};

export default function FlangesPage() {
  return (
    <>
      <PageHero
        title="Flange Types We Supply"
        subtitle="Complete range of industrial-grade flanges engineered for every pressure class, temperature range, and application requirement"
        variant="navy"
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Flanges', href: '/products/flanges' },
        ]}
      />

      <FlangesClient />

      {/* API Discipline Note */}
      <SectionWrapper padding="md" variant="white">
        <div className="max-w-4xl mx-auto bg-blue-50 border-l-4 border-brass p-6 rounded">
          <h3 className="text-lg font-bold text-iron mb-3">A Note on API Material Discipline</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            API 6A and 6BX flanges have stricter material rules than ASME B16.5. Austenitic
            stainless grades (A182 F304, F316, F321, F347) are not permitted for API 6A pressure-containing
            flange bodies. The standard stainless variant under API is A182 F6a (AISI 410ss), a
            martensitic grade that survives sour service when supplied to NACE MR0175 / ISO 15156.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            For strict procurement (domestic mill, PSL-3 or PSL-4, API monogram stamp), state those
            requirements on the RFQ. The catalog cards above show ASME-compatible material options;
            API material restrictions are applied at quote time.
          </p>
        </div>
      </SectionWrapper>

      {/* Standards Section */}
      <SectionWrapper
        padding="lg"
        variant="gray"
        heading="Standards We Cover"
        subheading="ASME / ANSI B16.5 cover general industrial flanges. API 6A / 6BX covers wellhead and high-pressure oilfield service - the API floor of 2000# class is roughly equivalent to ASME 600#."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              standard: 'ASME B16.5',
              description: 'Steel pipe flanges, NPS 1/2 through 24. Use API 6A / 6BX for oilfield wellhead service above 600# class.',
              link: '/standards/asme-flanges',
            },
            {
              standard: 'ANSI',
              description: 'ANSI B16.5 is identical to ASME B16.5. API 6A / 6BX is the petroleum equivalent for wellhead and high-pressure service.',
              link: '/standards/ansi-flanges',
            },
            {
              standard: 'DIN 2500-2640',
              description: 'German Industrial Standards for Flanges',
              link: '/standards/din-flanges',
            },
            {
              standard: 'AWWA',
              description: 'Water Works Association Flange Standards',
              link: '/standards/awwa-flanges',
            },
          ].map((item) => (
            <div
              key={item.standard}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="text-lg font-bold text-iron mb-2">
                {item.standard}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <Button
                href={item.link}
                variant="ghost"
                size="sm"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Materials Section */}
      <SectionWrapper
        padding="lg"
        variant="white"
        heading="Materials Available"
        subheading="Premium material selection for any operating environment"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              material: 'Carbon Steel (A105 / A350 LF2)',
              description: 'Standard for general industrial applications and low-temp service. A105 ambient to elevated temp; A350 LF2 for service down to -50 F.',
              link: '/materials/carbon-steel',
            },
            {
              material: '410ss / A182 F6a',
              description: 'Martensitic stainless. The API-permitted stainless grade for API 6A / 6BX flange service.',
              link: '/materials/stainless-steel',
            },
            {
              material: 'Alloy Steel (F11 / F22 / F91)',
              description: 'Chrome-moly grades for elevated-temperature and high-pressure service.',
              link: '/materials/alloy-steel',
            },
            {
              material: 'Galvanized Carbon Steel',
              description: 'Hot-dip galvanized A105 for outdoor and waterworks service per AWWA C207.',
              link: '/materials/galvanized',
            },
            {
              material: 'Epoxy Coated (FBE)',
              description: 'Fusion-bonded epoxy coating for water transmission and corrosive duty (AWWA C213 / C116 exterior).',
              link: '/materials/epoxy-coated',
            },
          ].map((item) => (
            <div
              key={item.material}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-brass"
            >
              <h4 className="text-lg font-bold text-iron mb-2">
                {item.material}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <Button
                href={item.link}
                variant="ghost"
                size="sm"
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        heading="Need Help Selecting the Right Flange?"
        subtext="Our technical specialists are ready to assist with product selection, specifications, and custom solutions."
        primaryCTA={{
          label: 'Contact Sales',
          href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new',
        }}
        secondaryCTA={{
          label: 'Request RFQ',
          href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new',
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Steel Pipe Flanges',
            description:
              'Comprehensive range of industrial-grade flanges engineered for every pressure class, temperature range, and application requirement',
            url: 'https://www.apiflange.com/products/flanges',
            numberOfItems: flangeTypes.length,
            mainEntity: flangeTypes.map((flange) => ({
              '@type': 'Product',
              name: flange.name,
              description: flange.description,
              url: `https://www.apiflange.com${flange.slug}`,
            })),
          }),
        }}
      />
    </>
  );
}
