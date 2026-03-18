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
        title="Steel Pipe Flanges"
        subtitle="Complete range of industrial-grade flanges engineered for every pressure class, temperature range, and application requirement"
        variant="navy"
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Flanges', href: '/products/flanges' },
        ]}
      />

      <FlangesClient />

      {/* Standards Section */}
      <SectionWrapper
        padding="lg"
        variant="gray"
        heading="Standards We Cover"
        subheading="All products engineered to meet international specifications"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              standard: 'ASME B16.5',
              description: 'Steel Pipe Flanges and Flanged Fittings',
              link: '/standards/asme-flanges',
            },
            {
              standard: 'ANSI',
              description: 'American National Standards for Flanges',
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
              material: 'Carbon Steel',
              description: 'Standard for general industrial applications',
              link: '/materials/carbon-steel',
            },
            {
              material: 'Stainless Steel',
              description: 'Corrosion resistance for harsh environments',
              link: '/materials/stainless-steel',
            },
            {
              material: 'Alloy Steel',
              description: 'High-temperature and high-pressure service',
              link: '/materials/alloy-steel',
            },
            {
              material: 'Duplex Steel',
              description: 'Superior corrosion resistance and strength',
              link: '/materials/alloy-steel',
            },
            {
              material: 'Nickel Alloys',
              description: 'Extreme temperature and corrosion applications',
              link: '/materials/stainless-steel',
            },
            {
              material: 'Titanium',
              description: 'Lightweight high-strength corrosion resistance',
              link: '/materials/galvanized',
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
          href: 'https://www.texasflange.com/contact-us',
        }}
        secondaryCTA={{
          label: 'Request RFQ',
          href: 'https://www.texasflange.com/contact-us',
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
