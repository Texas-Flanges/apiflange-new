import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import StatsCounter from '@/components/ui/StatsCounter';
import Link from 'next/link';
import {
  Award,
  Zap,
  Users,
  Cog,
  Globe,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About API Flange | Steel Pipe Flange Supplier',
  description:
    'API Flange supplies steel pipe flanges for oil and gas, waterworks, power generation, and industrial applications. Deep inventory, fast turnaround, and full documentation from Pearland, TX.',
  keywords: [
    'flange supplier',
    'API Flange',
    'industrial flanges',
    'steel pipe flanges',
    'API 6A flanges',
    'ASME B16.5',
    'Houston flanges',
  ],
  openGraph: {
    title: 'About API Flange | Steel Pipe Flange Supplier',
    description:
      'API Flange supplies steel pipe flanges for oil and gas, waterworks, power generation, and industrial applications.',
    url: 'https://www.apiflange.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.apiflange.com/about',
  },
};

interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Award,
    title: 'Quality',
    description:
      'Every flange meets rigorous specifications. Our commitment to quality means zero compromises on material selection, manufacturing precision, or testing procedures.',
  },
  {
    icon: Zap,
    title: 'Accuracy',
    description:
      'Every spec, every dimension, every material grade verified. We take technical accuracy seriously because our customers depend on it.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We succeed when our customers succeed. Responsive technical support, flexible ordering, and collaborative problem-solving define our customer relationships.',
  },
  {
    icon: Cog,
    title: 'Speed',
    description:
      'Fast quotes, fast shipping, fast answers. In this industry, time is money and we do not waste yours.',
  },
];

interface Capability {
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    title: 'Deep Stock Inventory',
    description:
      'Extensive inventory across standard and non-standard sizes, pressure classes, and material grades. When we say we have it, we have it.',
  },
  {
    title: 'Fast Turnaround',
    description:
      'Stock items ship in 1-3 business days. Custom and specialty orders quoted the same day with clear lead times.',
  },
  {
    title: 'Technical Expertise',
    description:
      'We know flanges. Our team speaks the language of specs, pressure classes, and material grades. Ask us the hard questions.',
  },
  {
    title: 'Full Documentation',
    description:
      'MTRs, Certificates of Conformance, and full traceability documentation available with every order.',
  },
  {
    title: 'Material Range',
    description:
      'Carbon steel, stainless steel, duplex, alloy steel, and specialty materials for any service condition.',
  },
  {
    title: 'Reliable Delivery',
    description:
      'Domestic and international shipping with logistics support to get flanges where they need to be, on time.',
  },
];

interface Certification {
  name: string;
  description: string;
}

const certifications: Certification[] = [
  {
    name: 'ASME B16.5 / B16.47',
    description:
      'Full compliance with ASME standards for pipe flanges and fittings, NPS 1/2 through NPS 60.',
  },
  {
    name: 'API 6A / 16A',
    description:
      'American Petroleum Institute standards for high-pressure oil and gas flange applications.',
  },
  {
    name: 'AWWA C207 / C228',
    description:
      'American Water Works Association standards for municipal water utility flange applications.',
  },
  {
    name: 'BABA/AIS Compliance',
    description:
      'Buy America Act and American Iron and Steel compliant flanges available for federally-funded infrastructure projects.',
  },
  {
    name: 'Full Material Traceability',
    description:
      'Mill Test Reports (MTRs), Certificates of Conformance, and heat/lot traceability with every order.',
  },
  {
    name: 'DIN EN 1092-1',
    description:
      'European standard metric flanges available for international and ISO system applications.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="About API Flange"
        subtitle="Precision-engineered flanges for the world's most critical piping systems."
        variant="navy"
      />

      <Container>
        {/* Company Story */}
        <SectionWrapper>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-iron mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                API Flange provides steel pipe flanges for the industries that
                keep infrastructure running. Oil and gas, waterworks, power
                generation, petrochemical, and general industrial piping systems
                all depend on flanges that meet spec and show up on time.
                That is what we do.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We carry an extensive inventory of API 6A, ASME B16.5, ASME B16.47,
                and AWWA flanges across a wide range of sizes, pressure classes,
                and material grades. When you need something specific, we quote
                fast and ship faster. Stock items move in 1-3 business days.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our customers are procurement engineers, project managers, and
                plant operators who already know what they need. We speak the
                same language and respect your time. You will get a price, a lead
                time, and an honest answer on the first call.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-8">
              <h3 className="text-2xl font-bold text-iron mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                To be the most reliable source for steel pipe flanges in the
                industry. Fast quotes, deep inventory, technical expertise, and
                documentation you can trust. We succeed when our customers get
                exactly what they need, when they need it.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Key Statistics */}
        {/* Stats section removed - contained fabricated metrics (35+ years, 5000+ customers,
            98% on-time, 99.2% QA) with no verifiable source for a pillar brand */}

        {/* Core Values */}
        <SectionWrapper>
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Our Values
              </h2>
              <p className="text-gray-600">
                These core principles guide every decision we make and define
                how we serve our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brass/10">
                          <Icon className="w-6 h-6 text-brass" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-iron mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionWrapper>

        {/* Manufacturing Capabilities */}
        <SectionWrapper variant="gray">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                What We Bring to the Table
              </h2>
              <p className="text-gray-600">
                Deep inventory, fast turnaround, and the technical knowledge to
                match the right flange to your application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:border-brass transition"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                    <h3 className="font-bold text-iron">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Location & Logistics */}
        <SectionWrapper>
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Based in Houston. Ships Everywhere.
              </h2>
              <p className="text-gray-600">
                Headquartered in Pearland, TX in the heart of the Houston industrial
                corridor. Direct access to major shipping lanes and proximity to the
                Gulf Coast energy sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-iron mb-3">
                    Pearland, Texas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Located in the Greater Houston area, we are positioned at the
                    center of the U.S. energy and industrial market. Quick access
                    to the Port of Houston, major highway systems, and air freight
                    facilities means your flanges move fast.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-iron mb-3">
                    Documentation & Traceability
                  </h3>
                  <p className="text-gray-700">
                    Every flange ships with full documentation. Mill Test Reports
                    (MTRs), Certificates of Conformance, and heat/lot traceability
                    are standard. Third-party inspection available on request.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-iron mb-3">
                    Domestic & International Shipping
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Stock items typically ship in 1-3 business days. Domestic and
                    international logistics support with clear freight terms and
                    delivery tracking. We handle ExWorks, FOB, and delivered pricing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-iron mb-3">
                    Responsive Quoting
                  </h3>
                  <p className="text-gray-700">
                    Most quotes returned the same day. Price, lead time, and
                    availability upfront. No runaround, no waiting for callbacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Certifications & Compliance */}
        <SectionWrapper variant="gray">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Certifications & Compliance
              </h2>
              <p className="text-gray-600">
                Full compliance with international standards and regulatory
                requirements ensuring your confidence in our products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                    <h3 className="font-bold text-iron">{cert.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

      </Container>

      {/* Call to Action */}
      <CTABanner
        heading="Ready to Partner With Us?"
        subtext="Experience the API Flange difference. Contact our team to discuss your flange requirements and discover how we can support your success."
        primaryCTA={{ label: 'Request a Quote', href: 'https://www.texasflange.com/contact-us' }}
        secondaryCTA={{ label: 'Contact Us', href: 'https://www.texasflange.com/contact-us' }}
      />
    </>
  );
}
