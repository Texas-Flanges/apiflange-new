'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import FAQ from '@/components/ui/FAQ';
import { Droplets, CheckCircle, Shield, Zap } from 'lucide-react';

const metadata: Metadata = {
  title: 'Waterworks Flanges | ApiFlange',
  description:
    'AWWA-compliant flanges for municipal water treatment, distribution systems, and pump stations. NSF-61 certified coatings, ductile iron, and carbon steel solutions.',
  keywords: [
    'waterworks flanges',
    'AWWA flanges',
    'water treatment flanges',
    'municipal water systems',
    'NSF-61 flanges',
    'water distribution flanges',
    'pump station flanges',
    'BABA compliant',
    'Buy America',
  ],
  openGraph: {
    title: 'Waterworks Flanges | ApiFlange',
    description: 'AWWA-compliant flanges for municipal water systems and treatment applications.',
    url: 'https://www.apiflange.com/industries/waterworks',
    type: 'website',
  },
};

export default function WaterworksPage() {
  return (
    <>
      <PageHero
        title="Flanges for Waterworks & Municipal Water Systems"
        subtitle="AWWA-certified solutions engineered for water treatment, distribution networks, and pump station applications with NSF-61 compliance and Buy America certification."
        variant="navy"
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: 'Waterworks', href: '/industries/waterworks' },
        ]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-8 text-center">
            Reliable Flanges for Critical Water Infrastructure
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            ApiFlange supplies precision-engineered flanges for the complete spectrum of municipal water systems. From intake facilities and treatment plants to distribution mains and pump stations, our AWWA-compliant products ensure leak-free, corrosion-resistant performance. Whether you're managing cast iron water mains, upgrading transmission lines, or constructing new treatment facilities, our flanges meet the stringent demands of potable water applications with NSF-61 certification and full BABA/Buy America compliance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Droplets, label: 'NSF-61 Certified', desc: 'Potable water safe' },
              { icon: Shield, label: 'AWWA Compliant', desc: 'C207 standards' },
              { icon: CheckCircle, label: 'BABA Approved', desc: 'Buy America certified' },
              { icon: Zap, label: 'Long Service Life', desc: '50+ year design' },
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

      <SectionWrapper padding="lg" variant="gray" heading="AWWA Standards & Specifications">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            ApiFlange provides comprehensive AWWA C207 flange solutions across all pressure classes, sourced to exacting standards for use in municipal water applications, from low-pressure gravity feed systems to high-pressure transmission mains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-iron mb-6">AWWA C207 Classes</h3>
              <div className="space-y-4">
                {[
                  { class: 'Class B', pressure: '100 psi', uses: 'Low-pressure systems, gravity feed' },
                  { class: 'Class D', pressure: '150 psi', uses: 'Standard distribution systems' },
                  { class: 'Class E', pressure: '175 psi', uses: 'Higher pressure transmission' },
                  { class: 'Class F', pressure: '250 psi', uses: 'Maximum pressure applications' },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4 py-2">
                    <p className="font-bold text-gray-900">{item.class} - {item.pressure}</p>
                    <p className="text-sm text-gray-600">{item.uses}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-iron mb-6">Compliance & Certifications</h3>
              <ul className="space-y-3">
                {[
                  'AWWA C207 - Steel Pipe Flanges',
                  'NSF/ANSI 61 - Potable Water Safety',
                  'ASME B16.5 - Flange Dimensions',
                  'BABA/Buy America - Domestic Production',
                  'CFR Title II - American Iron & Steel',
                  'AWWA C504 - Rubber Gaskets for Water',
                ].map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brass font-bold mt-1">✓</span>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Common Flange Types for Water Applications">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Slip-On Flanges',
                description: 'Most common type for water mains, installed by slipping over pipe and welding. Cost-effective and reliable for standard applications.',
              },
              {
                name: 'Blind Flanges',
                description: 'Used to cap pipe ends at distribution terminals and dead-end lines. Critical for system isolation and maintenance access.',
              },
              {
                name: 'Plate Flanges',
                description: 'Flat flanges for connection to equipment nozzles, such as pump suction/discharge connections and valve bodies.',
              },
              {
                name: 'Backing Flanges',
                description: 'Support flanges for epoxy-coated pipes or when additional reinforcement is required around the weld area.',
              },
              {
                name: 'Reducing Flanges',
                description: 'Accommodate transitions between different pipe sizes, minimizing turbulence and flow restrictions.',
              },
              {
                name: 'Companion Flanges',
                description: 'Bolted to grooved or specialty fittings for modular piping systems in modernization projects.',
              },
            ].map((type, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
                <h4 className="text-lg font-bold text-iron mb-3">{type.name}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray" heading="Materials for Water Service">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            Water service demands corrosion resistance and durability. ApiFlange offers proven material selections with comprehensive coating options to ensure decades of leak-free service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-iron mb-6">Primary Materials</h3>
              <div className="space-y-4">
                {[
                  {
                    material: 'Carbon Steel (A105/A350)',
                    notes: 'Standard choice for water mains, typically coated. Cost-effective and widely specified.',
                  },
                  {
                    material: 'Ductile Iron (A536)',
                    notes: 'Traditional water industry standard, excellent corrosion resistance with proper coatings.',
                  },
                  {
                    material: 'Cast Iron (A126)',
                    notes: 'Legacy systems, still used for AWWA C207 Class B low-pressure applications.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4">
                    <p className="font-bold text-gray-900">{item.material}</p>
                    <p className="text-sm text-gray-600 mt-2">{item.notes}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-iron mb-6">Protective Coatings</h3>
              <div className="space-y-4">
                {[
                  {
                    coating: 'NSF-61 Epoxy (Interior)',
                    uses: 'FDA-approved potable water contact surfaces',
                  },
                  {
                    coating: 'FBE Epoxy (Exterior)',
                    uses: 'Corrosion protection on buried or submerged lines',
                  },
                  {
                    coating: 'Galvanized Steel',
                    uses: 'Hot-dip zinc coating for atmospheric exposure',
                  },
                  {
                    coating: 'Polyethylene (PE Coating)',
                    uses: 'Complete encapsulation for maximum life extension',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-brass pl-4">
                    <p className="font-bold text-gray-900">{item.coating}</p>
                    <p className="text-sm text-gray-600">{item.uses}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Size & Pressure Ranges">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            ApiFlange supplies water service flanges in all AWWA-standard sizes from 4 inches through 96 inches and beyond, covering the complete spectrum of municipal applications.
          </p>

          <div className="bg-gradient-to-r from-[#1C1C1E] to-[#2A2A2E] rounded-lg p-8 text-white mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm opacity-90 mb-2">Standard Sizes</p>
                <p className="text-3xl font-bold">4" to 96"</p>
                <p className="text-xs opacity-75 mt-2">All AWWA classes</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-2">Pressure Classes</p>
                <p className="text-3xl font-bold">100-250 psi</p>
                <p className="text-xs opacity-75 mt-2">Class B through F</p>
              </div>
              <div>
                <p className="text-sm opacity-90 mb-2">Larger Sizes</p>
                <p className="text-3xl font-bold">Custom Available</p>
                <p className="text-xs opacity-75 mt-2">Up to 120"+ diameter</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            For specialized applications exceeding standard catalogs, ApiFlange sources custom AWWA-compliant flanges to your specifications with full documentation and mill certifications.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray" heading="BABA/Buy America Compliance">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6 leading-relaxed">
            ApiFlange water service products are sourced from domestic mills to meet Buy America Act (BABA) requirements and CFR Title II standards. This is critical for municipally-funded projects and government-assisted water infrastructure improvements. Our products are eligible for BABA-compliant procurement without additional certifications.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h4 className="text-lg font-bold text-iron mb-4">BABA Benefits for Your Project</h4>
            <ul className="space-y-3">
              {[
                'Simplified procurement without BABA certification delays',
                'Eligible for SRF and other federally-assisted water funds',
                'Supports domestic sourcing and local jobs',
                'Single-source documentation for compliance verification',
                'No markup or certification fees required',
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Common Water Project Types">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            ApiFlange has equipped thousands of water infrastructure projects. Our experience covers the full range of municipal and industrial water system applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Water Treatment Plants',
                items: [
                  'Clarifier feed/discharge',
                  'Filter underdrains',
                  'Pump station connections',
                  'Effluent piping',
                  'Chemical handling lines',
                ],
              },
              {
                title: 'Distribution Systems',
                items: [
                  'Transmission main connections',
                  'Booster pump stations',
                  'Pressure reducing station',
                  'Flow meter installations',
                  'Isolation valve assembly',
                ],
              },
              {
                title: 'Specialized Applications',
                items: [
                  'Intake structure gates',
                  'Sedimentation basin',
                  'Reservoir outlet works',
                  'Reclaimed water lines',
                  'Recycled water loop',
                ],
              },
            ].map((category, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-iron mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-brass font-bold mt-0.5">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="gray">
        <FAQ
          items={[
            {
              question: 'What is NSF-61 certification and why does it matter for potable water?',
              answer:
                'NSF-61 is the drinking water health effects standard that certifies materials are safe for contact with potable water. ApiFlange uses only NSF-61-certified epoxy coatings on all water-service flanges. This eliminates health concerns and satisfies water utility and regulatory requirements without additional testing.',
            },
            {
              question: 'Are your water flanges Buy America compliant?',
              answer:
                'Yes, ApiFlange water service products are sourced from domestic mills and meet BABA and CFR Title II requirements. We provide BABA certifications upon request, and our products are eligible for federally-assisted water programs without additional delays.',
            },
            {
              question: 'Can you supply large-diameter flanges for transmission mains?',
              answer:
                'Absolutely. We regularly supply custom AWWA C207-compliant flanges in sizes from 4" through 96" and beyond. Custom sizes are engineered to match your pipe specifications and loading conditions with full mill test reports.',
            },
            {
              question: 'What coating system should I specify for buried water mains?',
              answer:
                'For buried applications, FBE epoxy exterior coating with NSF-61 epoxy interior coating is the industry standard. This combination provides maximum protection against soil corrosion while ensuring potable water safety. Hot-dip galvanizing is suitable only for atmospheric exposure.',
            },
            {
              question: 'Do you stock AWWA flanges or is everything custom?',
              answer:
                'We maintain stock of common AWWA classes (B, D, E, F) in standard sizes from 4" to 36". Larger sizes and specialty configurations are available on a quoted timeline. Contact our sales team with your specifications for expedited availability.',
            },
            {
              question: 'What gasket materials do you recommend for water service?',
              answer:
                'AWWA C504 rubber gaskets are the standard for water service flanges. For critical applications, we offer specialty gaskets such as EPDM for cold water or silicone for specific chemical compatibility. All gasket materials are food-contact safe and independently certified.',
            },
          ]}
        />
      </SectionWrapper>

      <CTABanner
        heading="Ready to Specify for Your Water Project?"
        subtext="Contact our water systems specialists to discuss your AWWA requirements, delivery timeline, and BABA compliance needs."
        primaryCTA={{
          label: 'Get a Quote',
          href: '/contact?type=waterworks',
        }}
        secondaryCTA={{
          label: 'Download Specs',
          href: '/resources/awwa-specifications',
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Waterworks Flanges | ApiFlange',
            description: 'AWWA-compliant flanges for municipal water treatment and distribution systems',
            url: 'https://www.apiflange.com/industries/waterworks',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.apiflange.com' },
                { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.apiflange.com/industries' },
                { '@type': 'ListItem', position: 3, name: 'Waterworks', item: 'https://www.apiflange.com/industries/waterworks' },
              ],
            },
          }),
        }}
      />
    </>
  );
}
