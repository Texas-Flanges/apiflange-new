import { type Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Flange Materials & Specifications',
  description:
    'Comprehensive guide to flange materials including carbon steel, stainless steel, alloy steel, and coating options. ASTM specifications and technical data.',
  keywords: [
    'flange materials',
    'carbon steel flanges',
    'stainless steel flanges',
    'alloy steel flanges',
    'ASTM A105',
    'ASTM A350',
    'flange specifications',
    'galvanized flanges',
    'epoxy coated flanges',
    'zinc plated flanges',
  ],
  openGraph: {
    title: 'Flange Materials & Specifications',
    description:
      'Comprehensive guide to flange materials including carbon steel, stainless steel, alloy steel, and coating options.',
    type: 'website',
    url: 'https://www.apiflange.com/materials',
  },
};

interface MaterialCard {
  id: string;
  name: string;
  spec: string;
  description: string;
  href: string;
  grade?: string;
  tempRange?: string;
  icon: string;
}

const materials: MaterialCard[] = [
  {
    id: 'carbon-steel',
    name: 'Carbon Steel',
    spec: 'ASTM A105 / A350 LF2',
    grade: 'A105, A350 LF2',
    tempRange: '-20°F to 800°F',
    description:
      'Versatile ferrous alloy for general purpose applications. Excellent value with good strength and temperature range.',
    href: '/materials/carbon-steel',
    icon: '⚙️',
  },
  {
    id: 'stainless-steel',
    name: 'Stainless Steel',
    spec: 'ASTM A182 F304/F316',
    grade: 'F304, F304L, F316, F316L',
    tempRange: '-320°F to 800°F',
    description:
      'Premium corrosion resistance with excellent performance in corrosive and high-temperature environments.',
    href: '/materials/stainless-steel',
    icon: '✨',
  },
  {
    id: 'alloy-steel',
    name: 'Alloy Steel',
    spec: 'ASTM A182 F11/F22/F91',
    grade: 'F11, F22, F5, F9, F91',
    tempRange: 'Up to 1100°F',
    description:
      'Chrome-molybdenum alloys for power generation, petrochemical, and high-temperature steam service.',
    href: '/materials/alloy-steel',
    icon: '🔥',
  },
  {
    id: 'duplex-super-duplex',
    name: 'Duplex & Super Duplex',
    spec: 'ASTM A182 F51/F53',
    grade: 'S31803, S32750',
    tempRange: '-40°F to 600°F',
    description:
      'High strength with superior corrosion resistance for subsea, chemical, and severe marine applications.',
    href: '/materials/alloy-steel',
    icon: '🌊',
  },
  {
    id: 'nickel-alloys',
    name: 'Nickel Alloys',
    spec: 'ASTM B564',
    grade: 'N06625, N06102, N06242',
    tempRange: '-425°F to 2000°F',
    description:
      'Extreme temperature and corrosion resistance for aerospace, chemical processing, and thermal service.',
    href: '/materials/alloy-steel',
    icon: '💎',
  },
  {
    id: 'galvanized',
    name: 'Galvanized Flanges',
    spec: 'ASTM A153 / HDG',
    grade: 'Carbon Steel + Zinc coating',
    tempRange: '-20°F to 800°F',
    description:
      'Hot-dip galvanized flanges for outdoor, waterworks, and corrosive environments with superior corrosion protection.',
    href: '/materials/galvanized',
    icon: '🛡️',
  },
  {
    id: 'epoxy-coated',
    name: 'Epoxy Coated Flanges',
    spec: 'FBE / AWWA C550',
    grade: 'Carbon Steel + FBE coating',
    tempRange: '-20°F to 140°F',
    description:
      'Fusion Bonded Epoxy coating for potable water, waterworks applications with NSF-61 certification.',
    href: '/materials/epoxy-coated',
    icon: '🎨',
  },
  {
    id: 'zinc-plated',
    name: 'Zinc Plated Flanges',
    spec: 'ASTM B633',
    grade: 'Carbon Steel + Zinc plating',
    tempRange: '-20°F to 800°F',
    description:
      'Electroplated zinc coating for moderate corrosion protection in industrial and indoor applications.',
    href: '/materials/zinc-plated',
    icon: '⚡',
  },
];

export default function MaterialsPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Flange Materials"
        subtitle="Comprehensive specifications for every application. From carbon steel to exotic nickel alloys, choose the right material for your system."
        variant="navy"
      />

      {/* Overview Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Material Selection Guide
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive range of flange materials meets ASTM, ASME, and international standards.
              Each material grade is optimized for specific temperature ranges, pressure conditions, and
              chemical environments. Select a material below to review detailed specifications, mechanical
              properties, and application guidelines.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Full Specifications</h3>
              <p className="text-gray-700">
                Complete ASTM/ASME data including chemical composition, mechanical properties,
                and temperature ratings for every grade.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Temperature Ready</h3>
              <p className="text-gray-700">
                Materials rated from -425°F to 2000°F covering cryogenic, ambient, and
                extreme high-temperature applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Certified</h3>
              <p className="text-gray-700">
                All materials meet ASTM, ASME, API, and international standards with
                full certification and traceability.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Materials Grid */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Available Materials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <div
                key={material.id}
              >
                <Link href={material.href}>
                  <div className="h-full bg-white rounded-lg border border-gray-200 hover:border-orange-400 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    {/* Icon Background */}
                    <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 text-center border-b border-gray-100">
                      <div className="text-5xl mb-2">{material.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-brass transition-colors">
                        {material.name}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Spec Badge */}
                      <div>
                        <p className="text-xs font-semibold text-brass uppercase tracking-wide">
                          Standard
                        </p>
                        <p className="text-sm font-semibold text-gray-900 mt-1">
                          {material.spec}
                        </p>
                      </div>

                      {/* Grade */}
                      {material.grade && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            Grades
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            {material.grade}
                          </p>
                        </div>
                      )}

                      {/* Temperature Range */}
                      {material.tempRange && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            Temperature Range
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            {material.tempRange}
                          </p>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {material.description}
                      </p>

                      {/* CTA */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-brass font-semibold text-sm group-hover:gap-3 transition-all">
                          View Details
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Selection Criteria Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              How to Choose the Right Material
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  1. Operating Temperature
                </h3>
                <p className="text-gray-700">
                  Different materials have different maximum service temperatures. Carbon steel ranges
                  up to 800°F, while alloy steels handle 1100°F+ and nickel alloys extend to 2000°F.
                  For cryogenic service (-425°F), special grades like ASTM A350 LF2 are required.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2. Chemical Environment
                </h3>
                <p className="text-gray-700">
                  Consider the media being transported. Carbon steel works for neutral fluids.
                  Stainless steel (F304/F316) is required for corrosive environments. Duplex/super
                  duplex handle seawater and subsea applications. Nickel alloys resist aggressive
                  chemical environments.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  3. Pressure Rating
                </h3>
                <p className="text-gray-700">
                  Mechanical properties (tensile strength, yield strength, elongation) determine
                  pressure ratings. Higher strength materials support higher pressures. ASTM A105
                  carbon steel provides standard pressure ratings for most applications.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  4. Corrosion Protection
                </h3>
                <p className="text-gray-700">
                  For outdoor or corrosive environments, consider protective coatings: hot-dip
                  galvanizing (ASTM A153), fusion bonded epoxy (AWWA C550), or zinc plating (ASTM B633).
                  Alternatively, specify inherently corrosion-resistant materials like stainless steel.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  5. Code Compliance
                </h3>
                <p className="text-gray-700">
                  ASME Section VIII (pressure vessels), API 6D (pipelines), and AWWA standards may
                  mandate specific materials for your application. We ensure all materials meet or
                  exceed applicable codes and regulations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Standards & Certifications */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Standards & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Material Standards</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">ASTM A105 - Carbon Steel Forgings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">ASTM A350 - Low Temperature Forgings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">ASTM A182 - Stainless & Alloy Forgings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">ASTM B564 - Nickel Alloy Forgings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">ASTM A153 - Hot-Dip Galvanizing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design & Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">ASME B16.5 - Flanges & Components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">API 6D - Pipeline Flanges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">AWWA C550 - FBE Coating</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">EN 1092 - European Flange Standard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">NSF-61 - Potable Water Certified</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-orange-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Selecting a Material?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our engineering team can help you choose the optimal material for your specific
              application, pressure rating, and temperature requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://www.texasflange.com/contact-us/?ref=apiflange-new" variant="secondary" size="lg" className="border-white text-blue-900">
                Request Technical Support
              </Button>
              <Button href="https://www.texasflange.com/contact-us/?ref=apiflange-new" variant="ghost" size="lg" className="text-white hover:text-orange-200">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
