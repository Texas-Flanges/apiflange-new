import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import Link from 'next/link';
import { CheckCircle, Cog, Globe, ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom Machining Services | API Flange',
  description:
    'Precision custom machining services for flanges and industrial components. Advanced CNC capabilities, tight tolerances, and specialty materials.',
  keywords: [
    'custom machining',
    'CNC machining',
    'precision engineering',
    'flanges',
    'industrial components',
    'custom fabrication',
  ],
  openGraph: {
    title: 'Custom Machining Services | API Flange',
    description:
      'Precision custom machining services for flanges and industrial components.',
    url: 'https://www.apiflange.com/services/custom-machining',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.apiflange.com/services/custom-machining',
  },
};

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Design Review',
    description:
      'Our engineering team analyzes your specifications, drawings, and requirements to ensure feasibility and optimal design.',
  },
  {
    number: 2,
    title: 'Engineering & Planning',
    description:
      'Detailed machining plans are developed, considering material properties, tooling requirements, and quality specifications.',
  },
  {
    number: 3,
    title: 'Production',
    description:
      'Production begins using state-of-the-art CNC equipment with real-time monitoring and quality checkpoints throughout the process.',
  },
  {
    number: 4,
    title: 'Quality Assurance',
    description:
      'Comprehensive dimensional verification, material testing, and final inspection ensure compliance with all specifications.',
  },
];

interface Capability {
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    title: 'CNC Turning',
    description:
      'High-precision turning operations on multi-axis CNC lathe centers for cylindrical components and complex profiles.',
  },
  {
    title: 'CNC Milling',
    description:
      'Advanced milling on 3, 4, and 5-axis machines for complex geometries, pockets, slots, and detailed features.',
  },
  {
    title: 'Drilling & Boring',
    description:
      'Precision drilling and boring operations for bolt holes, through-holes, and internal passages with tight tolerances.',
  },
  {
    title: 'Threading',
    description:
      'Internal and external threading for various pitch standards including metric, NPT, and custom specifications.',
  },
  {
    title: 'Facing & Finishing',
    description:
      'Precision surface finishing to achieve specific flatness, parallelism, and surface roughness requirements.',
  },
  {
    title: 'Complex Geometries',
    description:
      'Advanced machining of complex shapes and profiles with tight tolerances using 5-axis simultaneous machining.',
  },
];

interface Material {
  name: string;
  description: string;
}

const materials: Material[] = [
  {
    name: 'Carbon Steel',
    description: 'ASTM A105, excellent machinability and cost-effectiveness',
  },
  {
    name: 'Stainless Steel',
    description: 'Grade 304, 316L for corrosion-resistant applications',
  },
  {
    name: 'Alloy Steel',
    description: 'High-temperature grades F22, F91 for demanding service',
  },
  {
    name: 'Duplex Stainless',
    description:
      'Superior strength and corrosion resistance in harsh environments',
  },
  {
    name: 'Inconel',
    description: 'High-temperature superalloy for extreme service conditions',
  },
  {
    name: 'Titanium',
    description: 'Lightweight, high-strength material for aerospace applications',
  },
];

export default function CustomMachiningPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Custom Machining Services"
        subtitle="Precision-engineered solutions for your most demanding flange and component requirements."
        variant="navy"
      />

      <Container>
        {/* Overview Section */}
        <SectionWrapper>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-iron mb-6">
                Beyond Standard Flanges
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we supply standard flanges to ASME B16.5,
                AWWA C207, and other specifications, many of our customers
                require custom-engineered solutions that go beyond off-the-shelf
                products. Our custom machining capabilities enable
                us to deliver precision-engineered components tailored to your
                unique requirements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From non-standard flange configurations to specialized industrial
                components, our advanced CNC equipment and expert engineering team
                handle your most challenging specifications. Whether
                you need a single prototype or production quantities, we deliver
                components that meet your exacting standards.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: 'Advanced Technology',
                  description:
                    'Multi-axis CNC machining centers with nanometer precision',
                },
                {
                  icon: CheckCircle,
                  title: 'Tight Tolerances',
                  description:
                    'Precision machining to your specified tolerances',
                },
                {
                  icon: Cog,
                  title: 'Material Expertise',
                  description:
                    'Experience with exotic alloys and specialty materials',
                },
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                  >
                    <Icon className="w-8 h-8 text-brass mb-3" />
                    <h3 className="font-bold text-iron mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionWrapper>

        {/* Process Section */}
        <SectionWrapper variant="gray">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Our Custom Machining Process
              </h2>
              <p className="text-gray-600">
                A systematic approach ensuring your specifications are met with
                precision and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div key={step.number} className="relative">
                  {/* Step Card */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 h-full">
                    <div className="w-10 h-10 rounded-full bg-brass text-white flex items-center justify-center font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-iron mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>

                  {/* Arrow connector */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/4 translate-x-full">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Capabilities Section */}
        <SectionWrapper>
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Machining Capabilities
              </h2>
              <p className="text-gray-600">
                Comprehensive precision machining services covering all major
                operations and techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-3 mb-3">
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

        {/* Tolerances & Specifications */}
        <SectionWrapper variant="gray">
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Tolerances & Specifications
              </h2>
              <p className="text-gray-600">
                We consistently achieve industry-leading precision standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tolerance Specifications */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-iron mb-4">
                  Industry Tolerances
                </h3>
                <div className="space-y-3">
                  {[
                    { spec: 'Linear Dimensions', tolerance: '+/- 0.01" or better' },
                    { spec: 'Bore Diameters', tolerance: '+/- 0.01" or better' },
                    { spec: 'Bolt Hole Patterns', tolerance: '+/- 0.01" or better' },
                    { spec: 'Flatness (Surfaces)', tolerance: '0.001" TIR' },
                    { spec: 'Parallelism', tolerance: '0.001-0.002"' },
                    { spec: 'Surface Finish (Ra)', tolerance: '32-125 μ"' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-gray-700">{item.spec}</span>
                      <span className="font-mono font-semibold text-brass">
                        {item.tolerance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specification Options */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-iron mb-4">
                  Specification Options
                </h3>
                <ul className="space-y-3">
                  {[
                    'Custom bolt hole patterns and diameters',
                    'Non-standard flange face configurations',
                    'Threading to custom pitch specifications',
                    'Specialized surface treatments and finishes',
                    'Custom bore diameters and wall thicknesses',
                    'Advanced geometric features and pockets',
                    'Engraving, marking, and identification',
                    'Heat treatment to custom specifications',
                  ].map((spec, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Materials Section */}
        <SectionWrapper>
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Materials We Machine
              </h2>
              <p className="text-gray-600">
                Experience with standard and exotic materials for any service
                condition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:border-brass transition"
                >
                  <h3 className="font-bold text-iron mb-2">
                    {material.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {material.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center max-w-3xl mx-auto">
              <p className="text-gray-700">
                Work with specialty or exotic materials not listed? Contact us.
                Our expertise extends to virtually any machinable material
                including composites, ceramics, and advanced alloys.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Case Study / Application Example */}
        <SectionWrapper variant="gray">
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Custom Solution Example
              </h2>
              <p className="text-gray-600">
                How we solved a complex customer requirement
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Placeholder */}
                <div className="rounded-lg overflow-hidden border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Cog className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                    <p className="text-gray-600 font-medium">
                      [IMAGE PLACEHOLDER: CNC machine in operation]
                    </p>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-iron mb-2">
                      High-Pressure Duplex Flange Assembly
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      An offshore operator required a specialized flange assembly
                      rated for 5000 PSIG in a seawater environment with complex
                      internal passages for thermoplastic piping integration.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-700 text-sm mb-1">
                        The Challenge:
                      </p>
                      <p className="text-gray-600 text-sm">
                        No standard off-the-shelf flange met the specifications.
                        Required duplex stainless steel with internal fluid
                        passages, non-standard bore diameter, and API 6A
                        certification.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 text-sm mb-1">
                        Our Solution:
                      </p>
                      <p className="text-gray-600 text-sm">
                        Engineering collaboration to optimize design for
                        machinability. Advanced 5-axis CNC work to create
                        internal passages. Rigorous testing including hydrostatic
                        pressure testing to 7500 PSIG.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 text-sm mb-1">
                        The Result:
                      </p>
                      <p className="text-gray-600 text-sm">
                        Custom flanges delivered on schedule, first-pass quality,
                        and 20% cost savings versus the customer's initial
                        estimates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Quality Assurance */}
        <SectionWrapper>
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Quality Assurance
              </h2>
              <p className="text-gray-600">
                Every custom component undergoes comprehensive testing and
                verification.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Dimensional Verification',
                  items: [
                    'CMM (Coordinate Measuring Machine) inspection',
                    'Bore diameter and surface flatness verification',
                    'Bolt hole pattern inspection',
                    'Complex geometry verification',
                  ],
                },
                {
                  title: 'Material Testing',
                  items: [
                    'Chemical composition analysis',
                    'Tensile strength testing',
                    'Hardness verification',
                    'Charpy impact testing (when required)',
                  ],
                },
                {
                  title: 'Pressure Testing',
                  items: [
                    'Hydrostatic pressure testing to 1.5x rated pressure',
                    'Leak detection and zero-defect verification',
                    'Surface inspection after testing',
                    'Documentation for critical applications',
                  ],
                },
                {
                  title: 'Documentation',
                  items: [
                    'Complete dimensional inspection reports',
                    'Material certification and traceability',
                    'Test reports and certifications',
                    'Compliance documentation for standards',
                  ],
                },
              ].map((category, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-iron mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper variant="navy" className="bg-gradient-to-r from-[#1C1C1E] to-[#2A2A2E] text-white rounded-lg">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to Discuss Your Custom Machining Needs?
            </h2>
            <p className="text-lg text-white/90">
              Contact our engineering team to explore how we can bring your
              specifications to reality.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="https://www.texasflange.com/contact-us/?ref=apiflange-new">
                <Button variant="secondary">Start Your RFQ</Button>
              </Link>
              <Link href="https://www.texasflange.com/contact-us/?ref=apiflange-new">
                <Button variant="secondary">Contact Engineering</Button>
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </Container>

      {/* CTA Banner */}
      <CTABanner
        heading="Custom Engineering Expertise"
        subtext="Our team of experienced machinists and engineers can tackle virtually any custom machining project. Let us know how we can help."
        primaryCTA={{ label: 'Request a Quote', href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new' }}
        secondaryCTA={{ label: 'Schedule a Consultation', href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new' }}
      />
    </>
  );
}
