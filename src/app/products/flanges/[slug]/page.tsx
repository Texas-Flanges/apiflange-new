import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/layout/SectionWrapper';
import StandardBadge from '@/components/ui/StandardBadge';
import MaterialBadge from '@/components/ui/MaterialBadge';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import FAQ from '@/components/ui/FAQ';
import CTABanner from '@/components/ui/CTABanner';
import SpecTable from '@/components/ui/SpecTable';
import { flangeTypes, FlangeType } from '@/data/flangeTypes';
import { ChevronRight, Check, Zap, Shield, Users } from 'lucide-react';

export async function generateStaticParams() {
  return flangeTypes.map((flange) => ({
    slug: flange.slug.split('/')[1],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const flange = flangeTypes.find((f) => f.slug === `flanges/${params.slug}`);

  if (!flange) {
    return {
      title: 'Flange Not Found',
    };
  }

  return {
    title: `${flange.name} | ApiFlange`,
    description: flange.description,
    keywords: [
      flange.name,
      ...flange.standards,
      ...flange.materials,
      'industrial flange',
    ],
    openGraph: {
      title: `${flange.name} | ApiFlange`,
      description: flange.description,
      url: `https://www.apiflange.com${flange.slug}`,
      type: 'website',
    },
  };
}

// Sample dimension data for Class 150 (would normally come from b16-5.json)
const getDimensionTable = () => [
  {
    size: '0.5',
    od: 3.875,
    id: 0.84,
    thickness: 0.44,
    weight: 0.29,
    boltCircle: 2.75,
    bolts: 4,
    boltSize: '0.5',
  },
  {
    size: '0.75',
    od: 4.625,
    id: 1.05,
    thickness: 0.5,
    weight: 0.49,
    boltCircle: 3.5,
    bolts: 4,
    boltSize: '0.5',
  },
  {
    size: '1',
    od: 5.0,
    id: 1.38,
    thickness: 0.56,
    weight: 0.62,
    boltCircle: 3.75,
    bolts: 4,
    boltSize: '0.625',
  },
  {
    size: '1.5',
    od: 6.0,
    id: 2.07,
    thickness: 0.62,
    weight: 1.13,
    boltCircle: 4.75,
    bolts: 4,
    boltSize: '0.625',
  },
  {
    size: '2',
    od: 7.5,
    id: 2.47,
    thickness: 0.75,
    weight: 1.84,
    boltCircle: 5.5,
    bolts: 8,
    boltSize: '0.625',
  },
  {
    size: '3',
    od: 9.5,
    id: 3.68,
    thickness: 0.88,
    weight: 3.63,
    boltCircle: 7.5,
    bolts: 8,
    boltSize: '0.75',
  },
  {
    size: '4',
    od: 11.0,
    id: 4.81,
    thickness: 0.94,
    weight: 5.84,
    boltCircle: 9.0,
    bolts: 8,
    boltSize: '0.75',
  },
];

const generateFAQs = (flange: FlangeType) => [
  {
    question: `What are the key applications for ${flange.name}s?`,
    answer: `${flange.name}s are ideal for ${flange.applications.join(', ')}. Their unique design makes them particularly suitable for applications requiring ${flange.features[0]}. The ${flange.pressureClasses.slice(0, 2).join(' and ')} pressure classes provide flexibility for various service levels.`,
  },
  {
    question: `What materials are available for ${flange.name}s?`,
    answer: `We offer ${flange.name}s in ${flange.materials.join(', ')}. Each material is selected based on the operating environment, temperature range, and corrosion resistance requirements. For specific application needs, our technical team can recommend the optimal material selection.`,
  },
  {
    question: `What standards apply to ${flange.name}s?`,
    answer: `${flange.name}s conform to ${flange.standards.join(', ')} standards. These international standards ensure compatibility, safety, and reliability across all industrial applications. All our products include certifications and test reports per the applicable standards.`,
  },
  {
    question: `What is the pressure and temperature range for ${flange.name}s?`,
    answer: `${flange.name}s are available in pressure classes ranging from ${flange.pressureClasses[0]} to ${flange.pressureClasses[flange.pressureClasses.length - 1]} PSIG. Temperature capabilities vary by material and pressure class, ranging from cryogenic (-320°F) to high-temperature (1100°F+) service. Consult specifications for your exact operating conditions.`,
  },
  {
    question: `How do I select the right ${flange.name} for my application?`,
    answer: `Start by identifying your operating pressure, temperature, and material requirements. Consider the pipe material and installation method (welding vs. threading). Our technical specialists can provide detailed guidance on sizing, material selection, and any special requirements for your system.`,
  },
];

const getRelatedProducts = (currentFlange: FlangeType) => {
  // Return 3 related flanges based on similar standards or applications
  const related = flangeTypes
    .filter((f) => f.id !== currentFlange.id)
    .filter(
      (f) =>
        f.standards.some((s) => currentFlange.standards.includes(s)) ||
        f.materials.some((m) => currentFlange.materials.includes(m))
    )
    .slice(0, 3);

  return related;
};

export default function FlangePage({
  params,
}: {
  params: { slug: string };
}) {
  const flange = flangeTypes.find((f) => f.slug === `flanges/${params.slug}`);

  if (!flange) {
    notFound();
  }

  const dimensionColumns = [
    { key: 'size', label: 'Nominal Size', unit: 'inches' },
    { key: 'od', label: 'OD', unit: 'inches' },
    { key: 'id', label: 'ID', unit: 'inches' },
    { key: 'thickness', label: 'Thickness', unit: 'inches' },
    { key: 'weight', label: 'Weight', unit: 'lbs' },
    { key: 'boltCircle', label: 'Bolt Circle', unit: 'inches' },
    { key: 'bolts', label: 'Bolts', unit: 'qty' },
  ];

  const relatedFlanges = getRelatedProducts(flange);
  const faqs = generateFAQs(flange);

  return (
    <>
      <PageHero
        title={flange.name}
        subtitle={flange.description}
        variant="navy"
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Flanges', href: '/products/flanges' },
          { label: flange.name, href: `/products/${flange.slug}` },
        ]}
      />

      <Container className="py-12">
        {/* Key Specs Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-iron-light">
            <h3 className="font-semibold text-gray-700 mb-3">Standards</h3>
            <div className="space-y-2">
              {flange.standards.map((std) => (
                <StandardBadge key={std} standard={std} />
              ))}
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-brass">
            <h3 className="font-semibold text-gray-700 mb-3">Size Range</h3>
            <p className="text-2xl font-bold text-brass">
              {flange.sizeRange.min}" - {flange.sizeRange.max}"
            </p>
            <p className="text-sm text-gray-600">nominal pipe size</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-emerald-600">
            <h3 className="font-semibold text-gray-700 mb-3">Pressure Classes</h3>
            <div className="flex flex-wrap gap-2">
              {flange.pressureClasses.map((pc) => (
                <span
                  key={pc}
                  className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded font-semibold text-sm"
                >
                  {pc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Image Placeholder */}
      <section className="bg-gray-100 py-16">
        <Container>
          <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-gray-400">
            <p className="text-gray-600 text-lg font-semibold text-center">
              [IMAGE PLACEHOLDER: {flange.name} product photo]
            </p>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <SectionWrapper padding="lg" variant="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {flange.description}
            </p>

            {/* Features */}
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features & Advantages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {flange.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="text-brass flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Standards Section */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Available Standards
            </h3>
            <div className="bg-white border-l-4 border-iron p-6 rounded-lg mb-8">
              <div className="flex flex-wrap gap-3">
                {flange.standards.map((standard) => (
                  <StandardBadge key={standard} standard={standard} />
                ))}
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                All products supplied to international specifications with
                certifications and test reports provided per applicable standards.
              </p>
            </div>

            {/* Available Materials Section */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Available Materials
            </h3>
            <div className="bg-white border-l-4 border-brass p-6 rounded-lg mb-8">
              <div className="flex flex-wrap gap-3">
                {flange.materials.map((material) => (
                  <MaterialBadge key={material} material={material} />
                ))}
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Material selection impacts pressure rating, temperature capability,
                and corrosion resistance. Our specialists can recommend the optimal
                material for your operating conditions.
              </p>
            </div>
          </div>

          {/* Sidebar - Quick Quote Widget */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-xl p-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Quote
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    placeholder="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brass"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pipe Size
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brass">
                    <option>Select size</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i}>{0.5 + i * 0.5}"</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Material
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brass">
                    <option>Select material</option>
                    {flange.materials.map((mat) => (
                      <option key={mat}>{mat}</option>
                    ))}
                  </select>
                </div>
                <Button
                  href="https://www.texasflange.com/contact-us/?ref=apiflange-new"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  Request Quote
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="text-brass" size={20} />
                  <span className="text-sm font-semibold text-gray-700">
                    Fast Lead Times
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="text-brass" size={20} />
                  <span className="text-sm font-semibold text-gray-700">
                    Quality Certified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-brass" size={20} />
                  <span className="text-sm font-semibold text-gray-700">
                    Expert Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Applications Section */}
      <SectionWrapper padding="lg" variant="gray" heading="Applications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Industries & Use Cases
            </h3>
            <ul className="space-y-3">
              {flange.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight className="text-brass flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{app}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Operating Environment
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  Temperature Range: Cryogenic (-320°F) to High Temp (1100°F+)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  Pressure Classes: {flange.pressureClasses[0]} to{' '}
                  {flange.pressureClasses[flange.pressureClasses.length - 1]} PSIG
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  Corrosion Resistance: Available in specialty alloys and duplex
                  steels
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  Installation Methods: Welded, threaded, socket weld, or
                  mechanical
                </span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Dimension Table */}
      <SectionWrapper padding="lg" variant="white" heading="Dimension Table">
        <p className="text-gray-600 mb-6">
          Class 150 flange dimensions per ASME B16.5. Other pressure classes available upon request.
        </p>
        <SpecTable
          columns={dimensionColumns}
          data={getDimensionTable()}
          stickyFirstColumn
        />
      </SectionWrapper>

      {/* Why Choose Section */}
      <SectionWrapper
        padding="lg"
        variant="gray"
        heading={`Why Choose ${flange.name}s`}
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-brass mb-3">6</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Pressure Classes
            </h3>
            <p className="text-gray-600">
              Full ASME B16.5 coverage from Class 150 through Class 2500 for any service condition.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brass mb-3">30+</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Material Grades
            </h3>
            <p className="text-gray-600">
              Carbon steel, stainless, alloy, duplex, and exotic alloys with full mill test reports.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brass mb-3">Same-Day</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Quote Turnaround
            </h3>
            <p className="text-gray-600">
              Fast, accurate quotes from experienced specialists who know flanges inside and out.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Related Products */}
      {relatedFlanges.length > 0 && (
        <SectionWrapper
          padding="lg"
          variant="white"
          heading="Related Products"
          subheading="Other flange types that may suit your application"
          centered
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedFlanges.map((related) => (
              <ProductCard
                key={related.id}
                title={related.name}
                slug={related.slug}
                description={related.description}
                standards={related.standards}
                materials={related.materials}
              />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* FAQ Section */}
      <SectionWrapper padding="lg" variant="gray">
        <FAQ
          items={faqs}
          title="Frequently Asked Questions"
          description={`Common questions about ${flange.name}s and their applications`}
        />
      </SectionWrapper>

      <CTABanner
        heading="Ready to Order?"
        subtext="Contact our sales team or submit an RFQ for competitive pricing and fast delivery."
        primaryCTA={{
          label: 'Request RFQ',
          href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new',
        }}
        secondaryCTA={{
          label: 'Contact Sales',
          href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new',
        }}
      />

      {/* JSON-LD Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: flange.name,
            description: flange.description,
            brand: {
              '@type': 'Brand',
              name: 'ApiFlange',
            },
            url: `https://www.apiflange.com${flange.slug}`,
            image: [
              `https://www.apiflange.com/images/flanges/${flange.slug.split('/')[1]}.jpg`,
            ],
            sku: flange.id,
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
            material: flange.materials,
            isPartOf: {
              '@type': 'Collection',
              name: 'Steel Pipe Flanges',
              url: 'https://www.apiflange.com/products/flanges',
            },
          }),
        }}
      />
    </>
  );
}
