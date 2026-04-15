import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import Link from 'next/link';
import { CheckCircle, Shield, FileCheck, Globe, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Domestic Flanges - BABA/AIS Certified | API Flange',
  description:
    'BABA and AIS certified domestic flanges for federally-funded water utility and public works projects. American Iron and Steel compliant manufacturing.',
  keywords: [
    'domestic flanges',
    'BABA certified',
    'AIS certified',
    'Buy America Act',
    'American Iron and Steel',
    'water utility flanges',
    'domestic sourcing',
    'government contracts',
  ],
  openGraph: {
    title: 'Domestic Flanges - BABA/AIS Certified | API Flange',
    description:
      'BABA and AIS certified domestic flanges for federally-funded water utility and public works projects.',
    url: 'https://www.apiflange.com/products/domestic-flanges',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.apiflange.com/products/domestic-flanges',
  },
};

interface ComplianceItem {
  title: string;
  description: string;
}

interface Product {
  name: string;
  standard: string;
  sizes: string;
  materials: string;
}

const complianceItems: ComplianceItem[] = [
  {
    title: 'Buy America Act (BAA)',
    description:
      'Requires use of American-made materials and components in federally-funded projects. Our flanges qualify as domestically produced under 49 U.S.C. § 31304.',
  },
  {
    title: 'American Iron and Steel (AIS)',
    description:
      'Ensures that iron, steel, and manufactured products are produced in the United States. We maintain full compliance with AIS requirements for water infrastructure projects.',
  },
  {
    title: 'BABA Certification',
    description:
      'Buy America Brass and Copper Products Certification for applications requiring documented domestic sourcing and compliance.',
  },
  {
    title: 'Domestic Sourcing',
    description:
      'All flanges sourced from U.S. mills and forging facilities with domestic materials, full traceability, and quality assurance documentation.',
  },
];

const domesticProducts: Product[] = [
  {
    name: 'AWWA C207 Flanges',
    standard: 'American Water Works Association',
    sizes: '2" - 24" (Class 125, 150, 300)',
    materials: 'Carbon Steel (ASTM A105)',
  },
  {
    name: 'ASME B16.5 Flanges',
    standard: 'American Society of Mechanical Engineers',
    sizes: 'All standard sizes and classes',
    materials: 'Carbon Steel, Stainless Steel',
  },
  {
    name: 'Custom Domestic Flanges',
    standard: 'Customer Specifications',
    sizes: 'Non-standard sizes and configurations',
    materials: 'Per customer requirements',
  },
  {
    name: 'Domestic Weld Neck Flanges',
    standard: 'ASME B16.5 / AWWA C207',
    sizes: 'Full range of standard sizes',
    materials: 'Domestic carbon and alloy steel',
  },
];

interface DocumentationItem {
  title: string;
  description: string;
}

const documentationItems: DocumentationItem[] = [
  {
    title: 'Certification of Domestic Sourcing',
    description:
      'Documented certification confirming all materials and manufacturing are U.S.-based, meeting BABA requirements.',
  },
  {
    title: 'Material Test Reports (MTRs)',
    description:
      'Complete mill test reports verifying material composition, mechanical properties, and compliance with ASTM standards.',
  },
  {
    title: 'Manufacturing Traceability',
    description:
      'Full documentation linking every flange to heat numbers, manufacturing records, and quality testing results.',
  },
  {
    title: 'Pressure Testing Documentation',
    description:
      'Hydrostatic pressure test reports and results, demonstrating compliance with applicable pressure ratings.',
  },
  {
    title: 'Dimension & Inspection Reports',
    description:
      'Detailed dimensional inspection reports showing compliance with all specified tolerances and requirements.',
  },
  {
    title: 'FileCheck of Conformance',
    description:
      'Comprehensive certification that all flanges conform to specified standards and customer requirements.',
  },
];

export default function DomesticFlangePage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Domestic Flanges"
        subtitle="BABA/AIS Certified Flanges for Federally-Funded Water Utility and Public Works Projects"
        variant="navy"
      />

      <Container>
        {/* Overview Section */}
        <SectionWrapper>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-iron mb-6">
                Meet Buy America Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Federally-funded water utility and infrastructure projects are
                subject to strict Buy America Act (BAA) and American Iron and
                Steel (AIS) requirements. These regulations mandate that
                materials and products used in such projects be manufactured in
                the United States using domestic materials and labor. API Flange
                specializes in supplying flanges that fully comply with these
                requirements, enabling municipalities, water authorities, and
                contractors to meet federal funding mandates while sourcing
                quality products from a trusted domestic supplier.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our commitment to domestic sourcing goes beyond mere
                compliance. We work exclusively with American mills and forging
                facilities to deliver the quality that has made API Flange a
                trusted partner for water utility projects nationwide.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-iron mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brass" />
                  Regulatory Compliance
                </h3>
                <p className="text-gray-700 text-sm">
                  Full compliance with Buy America Act, American Iron and Steel
                  requirements, and state domestic sourcing mandates for
                  federally-funded projects.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-iron mb-3 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-brass" />
                  Complete Documentation
                </h3>
                <h3 className="font-bold text-iron mb-3 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-brass" />
                </h3>
                <p className="text-gray-700 text-sm">
                  Comprehensive documentation supporting compliance verification,
                  including MTRs, certifications, and traceability records.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* BABA/AIS Explanation */}
        <SectionWrapper variant="gray">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Understanding BABA & AIS Requirements
              </h2>
              <p className="text-gray-600">
                What these compliance certifications mean for your projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-iron mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </SectionWrapper>

        {/* Product Offerings */}
        <SectionWrapper>
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Domestic Flange Product Range
              </h2>
              <p className="text-gray-600">
                Comprehensive selection of BABA/AIS certified flanges for water
                utility and public works applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {domesticProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-iron mb-2">
                    {product.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-600">
                        <span className="font-semibold">Standard:</span>{' '}
                        {product.standard}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        <span className="font-semibold">Available Sizes:</span>{' '}
                        {product.sizes}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        <span className="font-semibold">Materials:</span>{' '}
                        {product.materials}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Flanges */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-iron mb-3">
                Custom Domestic Flanges Available
              </h3>
              <p className="text-gray-700 mb-4">
                Non-standard sizes, materials, or configurations can be
                sourced from domestic mills to meet specific project requirements
                while maintaining BABA/AIS compliance. Contact our team
                to discuss your custom needs.
              </p>
              <a href="https://www.texasflange.com/contact-us" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Request a Quote</Button>
              </a>
            </div>
          </div>
        </SectionWrapper>

        {/* Documentation & Certification */}
        <SectionWrapper variant="gray">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Documentation & Certification
              </h2>
              <p className="text-gray-600">
                Complete documentation supporting BABA/AIS compliance and project
                requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentationItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                    <h3 className="font-bold text-iron">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Documentation Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Complete Package:</span> All
                documentation is provided with every shipment, organized for easy
                submission with bid proposals and project records.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Support:</span> Our team can work
                directly with your procurement department to ensure all
                documentation meets your specific project requirements and
                compliance verification procedures.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Regulatory Standards Section */}
        <SectionWrapper>
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Regulatory & Standard Compliance
              </h2>
              <p className="text-gray-600">
                All products meet applicable standards and regulatory requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Standards Compliance */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-iron mb-4">
                  Standards Compliance
                </h3>
                <ul className="space-y-2">
                  {[
                    'AWWA C207 (Water Utility Flanges)',
                    'ASME B16.5 (Industrial Flanges)',
                    'ASTM A105 (Carbon Steel)',
                    'ASTM A182 (Stainless/Alloy Steel)',
                    'ISO 9001:2015 (Quality Management) (Upon Request.)',
                    'PED (Pressure Equipment Directive) (Upon Request.)',
                  ].map((standard, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Regulatory Compliance */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-iron mb-4">
                  Regulatory Compliance
                </h3>
                <ul className="space-y-2">
                  {[
                    'Buy America Act (BAA) - 49 U.S.C. § 31304',
                    'American Iron and Steel (AIS) Requirements',
                    'BABA Certification for Brass/Copper (if applicable)',
                    'Domestic Manufacturing Requirements',
                    'State Prevailing Wage Compliance (applicable states)',
                    'Federal Funding Agency Requirements',
                  ].map((regulation, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-4 h-4 text-brass flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{regulation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Project Support Section */}
        <SectionWrapper variant="gray">
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Dedicated Project Support
              </h2>
              <p className="text-gray-600">
                We partner with municipalities and contractors to ensure compliance
                and successful project execution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Pre-Bid Consultation',
                  description:
                    'Contact our team during bid preparation to discuss BABA/AIS requirements and confirm our products meet your specifications.',
                },
                {
                  title: 'Documentation Support',
                  description:
                    'We provide comprehensive documentation and can work with your procurement department to verify compliance.',
                },
                {
                  title: 'Scheduling Coordination',
                  description:
                    'Flexible scheduling to meet your project timelines and delivery requirements.',
                },
                {
                  title: 'Technical Assistance',
                  description:
                    'Ongoing technical support throughout your project, including material selection and installation guidance.',
                },
                {
                  title: 'Warranty & Support',
                  description:
                    'Comprehensive warranty and post-delivery support to ensure long-term project success and reliability.',
                },
                {
                  title: 'Bulk Ordering',
                  description:
                    'Volume discounts and streamlined ordering for large municipal and infrastructure projects.',
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <h3 className="font-bold text-iron mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Do all water utility projects require BABA/AIS compliance?',
                  a: 'Only projects funded with federal dollars (EPA, HUD, DOT, etc.) are subject to BABA/AIS requirements. However, many states have similar domestic sourcing mandates. We recommend verifying requirements with your funding agency.',
                },
                {
                  q: 'What documentation do I need to submit to prove BABA/AIS compliance?',
                  a: 'Generally, you need material certifications (MTRs), manufacturing location documentation, domestic sourcing certification, and pressure test reports. We provide all necessary documentation with every order.',
                },
                {
                  q: 'Are there any additional costs for BABA/AIS certified flanges?',
                  a: 'Our domestic flanges are competitively priced. Since these products are sourced from U.S. mills and forging facilities, BABA/AIS compliance is built into the supply chain.',
                },
                {
                  q: 'Can you manufacture custom domestic flanges?',
                  a: 'Yes. We can source custom flanges from domestic mills while maintaining BABA/AIS compliance. Contact us to discuss your specifications.',
                },
                {
                  q: 'What are typical lead times for domestic flanges?',
                  a: 'Standard size flanges typically ship from stock to 4 weeks. Custom orders vary based on complexity. We work to accommodate project schedules whenever possible.',
                },
                {
                  q: 'Who can verify that your flanges meet BABA/AIS requirements?',
                  a: 'Your project engineer, procurement department, or funding agency can review the documentation we provide. Many agencies have specific verification procedures we can support.',
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-iron mb-3">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </Container>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Specify Domestic Flanges?"
        subtext="Contact API Flange to discuss BABA/AIS compliance, obtain pricing, and ensure your federally-funded project meets all domestic sourcing requirements."
        primaryCTA={{ label: 'Request a Quote', href: 'https://www.texasflange.com/contact-us' }}
        secondaryCTA={{ label: 'Contact Us', href: 'https://www.texasflange.com/contact-us' }}
      />
    </>
  );
}
