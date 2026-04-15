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
  title: 'About API Flange | Industrial Flange Manufacturer',
  description:
    'Learn about API Flange, a leading manufacturer of precision-engineered steel flanges for industrial applications. Discover our commitment to quality, innovation, and customer partnership.',
  keywords: [
    'flange manufacturer',
    'API Flange',
    'industrial flanges',
    'quality assurance',
    'precision engineering',
    'ASME standards',
    'custom machining',
  ],
  openGraph: {
    title: 'About API Flange | Industrial Flange Manufacturer',
    description:
      'Learn about API Flange, a leading manufacturer of precision-engineered steel flanges for industrial applications.',
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
    title: 'Precision',
    description:
      'Tolerances measured in thousandths of an inch. Advanced CNC machining and rigorous quality control ensure flanges that perform flawlessly in critical applications.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We succeed when our customers succeed. Responsive technical support, flexible ordering, and collaborative problem-solving define our customer relationships.',
  },
  {
    icon: Cog,
    title: 'Innovation',
    description:
      'Continuous improvement drives everything we do. We invest in advanced manufacturing technology and stay ahead of industry standards and best practices.',
  },
];

interface Capability {
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    title: 'Precision Forging',
    description:
      'State-of-the-art forging equipment produces flange forgings with optimal grain structure and dimensional consistency.',
  },
  {
    title: 'Advanced CNC Machining',
    description:
      'Multi-axis machining centers deliver tight tolerances on complex geometries, from simple carbon steel to exotic alloys.',
  },
  {
    title: 'Custom Engineering',
    description:
      'Our engineering team develops custom solutions for non-standard applications, pressure ratings, and material requirements.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Comprehensive testing including hydrostatic pressure testing, radiographic inspection, and dimensional verification.',
  },
  {
    title: 'Material Expertise',
    description:
      'Carbon steel, stainless steel, duplex, alloy steel, and specialty materials for any service condition.',
  },
  {
    title: 'Global Supply Chain',
    description:
      'Reliable delivery worldwide with logistics partnerships ensuring your flanges arrive on time, every time.',
  },
];

interface Certification {
  name: string;
  description: string;
}

const certifications: Certification[] = [
  {
    name: 'ISO 9001:2015 (Upon Request.)',
    description:
      'Quality management system certification ensuring consistent processes and continuous improvement.',
  },
  {
    name: 'PED Certification (Upon Request.)',
    description:
      'Pressure Equipment Directive compliance for European applications and international markets.',
  },
  {
    name: 'BABA/AIS Certified (Upon Request.)',
    description:
      'Buy America Act and American Iron and Steel certified for federally-funded infrastructure projects.',
  },
  {
    name: 'ASME B16.5',
    description:
      'Full compliance with American Society of Mechanical Engineers standards for pipe flanges.',
  },
  {
    name: 'AWWA C207',
    description:
      'American Water Works Association certification for municipal water utility applications.',
  },
  {
    name: 'API 6A / 16A',
    description:
      'American Petroleum Institute certification for high-pressure oil and gas applications.',
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
                For decades, API Flange has been a trusted partner in industrial
                piping systems, serving the world's most demanding applications.
                From municipal water utilities to offshore oil platforms, from
                power generation facilities to pharmaceutical plants, our
                precision-engineered flanges keep critical systems operating
                safely and reliably.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our foundation is built on an unwavering commitment to quality
                and precision. We understand that our flanges aren't just
                components—they're critical safety elements that protect people,
                equipment, and the environment. Every flange that leaves our
                facility has undergone rigorous testing and inspection to ensure
                it meets or exceeds the most stringent standards.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What sets us apart is our dedication to partnership. We don't
                just sell flanges; we collaborate with customers to understand
                their unique requirements, develop engineered solutions, and
                provide technical support throughout the product lifecycle.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-8">
              <h3 className="text-2xl font-bold text-iron mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                To manufacture the world's most reliable precision-engineered
                flanges, enabling our customers to build safer, more efficient
                industrial systems. We achieve this through uncompromising
                quality, continuous innovation, and genuine partnership with our
                customers.
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
                Manufacturing Capabilities
              </h2>
              <p className="text-gray-600">
                Comprehensive capabilities from raw material procurement through
                final inspection and delivery.
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

        {/* Facility Showcase */}
        <SectionWrapper>
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                State-of-the-Art Facilities
              </h2>
              <p className="text-gray-600">
                Advanced manufacturing centers combine traditional
                craftsmanship with cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Facility Image Placeholder 1 */}
              <div className="rounded-lg overflow-hidden border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-200 h-80 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 font-medium">
                    [IMAGE PLACEHOLDER: Company facility exterior]
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-iron mb-3">
                    Headquarters & Manufacturing
                  </h3>
                  <p className="text-gray-700 mb-4">
                    State-of-the-art manufacturing facilities spanning 150,000
                    square feet and houses advanced forging, machining, and
                    testing equipment. Climate-controlled precision measurement
                    labs ensure dimensional accuracy to specifications. Complete
                    in-house capabilities eliminate dependency on external
                    suppliers for critical operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-iron mb-3">
                    Quality Assurance Laboratory
                  </h3>
                  <p className="text-gray-700">
                    Equipped with CMM (Coordinate Measuring Machines),
                    spectrographic analysis equipment, hydrostatic testing
                    chambers, and materials testing apparatus. Every flange
                    undergoes comprehensive quality verification before shipment.
                  </p>
                </div>
              </div>

              {/* Facility Image Placeholder 2 */}
              <div className="rounded-lg overflow-hidden border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-200 h-80 flex items-center justify-center md:col-start-2">
                <div className="text-center">
                  <Cog className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 font-medium">
                    [IMAGE PLACEHOLDER: Manufacturing floor with CNC machines]
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-iron mb-3">
                    Equipment & Technology
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Multi-axis CNC machining centers capable of complex
                    geometries and tight tolerances. Advanced forging equipment
                    with precise temperature control. Automated material handling
                    systems for efficiency and safety. Real-time production
                    tracking systems for complete visibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-iron mb-3">
                    Global Distribution Network
                  </h3>
                  <p className="text-gray-700">
                    Strategic partnerships with logistics providers ensure
                    reliable, on-time delivery worldwide. Inventory management
                    systems optimize stock levels across multiple warehouses.
                    Direct shipping capabilities to major industrial hubs.
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
