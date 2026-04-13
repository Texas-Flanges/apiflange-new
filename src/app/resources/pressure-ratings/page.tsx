import { type Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import FAQ from '@/components/ui/FAQ';
import CTABanner from '@/components/ui/CTABanner';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pressure-Temperature (P-T) Ratings Guide | ASME B16.5',
  description:
    'Complete guide to ASME B16.5 pressure-temperature ratings, material groups, design margins, and safety factors for flange selection.',
  keywords: [
    'pressure temperature ratings',
    'P-T ratings',
    'ASME B16.5',
    'flange design',
    'design pressure',
    'design temperature',
    'safety factors',
    'material groups',
    'pressure classes',
  ],
  openGraph: {
    title: 'Pressure-Temperature (P-T) Ratings Guide',
    description:
      'Master ASME B16.5 P-T ratings for safe flange design and selection.',
    type: 'article',
    url: 'https://www.apiflange.com/resources/pressure-ratings',
  },
};

export default function PressureRatingsPage() {
  const faqItems = [
    {
      question: 'What does the P-T rating actually mean?',
      answer:
        'The P-T (Pressure-Temperature) rating represents the maximum allowable working pressure at a specific temperature for a flange of a given class and material. ASME B16.5 Table 2 provides standard P-T ratings. The rating decreases as temperature increases because material strength decreases with temperature. Each class has different ratings based on the material used.',
    },
    {
      question: 'Why do pressure ratings decrease at higher temperatures?',
      answer:
        'Materials lose strength as temperature increases. Steel loses yield strength, tensile strength, and creep resistance at higher temperatures. The P-T rating accounts for this by reducing the allowable pressure. This ensures the flange maintains adequate safety margins across the full operating temperature range. Different materials have different temperature capabilities.',
    },
    {
      question: 'Can I interpolate between P-T rating values?',
      answer:
        'Linear interpolation between standard P-T rating points is generally acceptable and is commonly used in engineering practice. However, always verify with your design code and follow your company procedures. ASME B16.5 Table 2 provides ratings at standard temperature intervals. For temperatures between listed values, you can safely interpolate to find the intermediate rating.',
    },
    {
      question: 'What is a material group and why does it matter?',
      answer:
        'Material groups (A, B, C, D, etc. in ASME B16.5) classify materials with similar strength and temperature characteristics. All materials in the same group have the same P-T ratings for a given pressure class. For example, Group A includes ASTM A105 carbon steel and A350 LF2 (both used at low temperatures). Knowing your material group allows you to select the correct rating table.',
    },
    {
      question: 'What safety margins are built into P-T ratings?',
      answer:
        'ASME B16.5 P-T ratings incorporate safety factors of approximately 4:1 on tensile strength and account for stress concentrations, welding defects, and manufacturing tolerances. This high safety factor ensures reliable performance even with variations in material properties, installation quality, and service conditions. For critical applications, additional design margins may be applied.',
    },
    {
      question: 'What temperature should I use if my system fluctuates?',
      answer:
        'Use the maximum operating temperature expected during normal service. The P-T rating at that maximum temperature is your design constraint. ASME requires you to base your design on the most severe conditions. If your system operates at 500°F peak but 400°F average, use 500°F for selecting the flange rating.',
    },
    {
      question: 'How do I handle systems with multiple materials?',
      answer:
        'When a system contains components from different material groups (e.g., weld neck flange in A105 connected to a valve in a different material), use the most conservative (lowest) P-T rating available. The weakest component limits the system pressure. Alternatively, specify all components in the same material group to match ratings.',
    },
    {
      question: 'Can I use a flange beyond its rated pressure if only briefly?',
      answer:
        'No. ASME standards define the P-T rating as the maximum allowable working pressure under normal continuous service. Temporary excursions above this rating are not permitted. If your system requires higher pressure, even briefly, you must select a flange rated for that higher pressure. Brief overpressure can cause permanent damage and fatigue.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Pressure-Temperature Ratings Guide"
        subtitle="Master ASME B16.5 P-T ratings, design pressure calculations, and safety factors for optimal flange selection."
        variant="navy"
      />

      {/* Breadcrumb */}
      <SectionWrapper className="py-4 md:py-6 bg-gray-50 border-b border-gray-200">
        <Container>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/resources" className="hover:text-brass transition-colors">
              Resources
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-semibold">Pressure Ratings</span>
          </div>
        </Container>
      </SectionWrapper>

      {/* What are P-T Ratings */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Are Pressure-Temperature Ratings?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pressure-Temperature (P-T) ratings define the maximum allowable working pressure at a specific
              temperature for flanges of a given class and material. These ratings are established by ASME B16.5
              and represent the safe operating envelope for flange connections. The rating decreases as temperature
              increases because material strength decreases with temperature.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Key Concept</h3>
              <p className="text-gray-700">
                Every flange class-material combination has a unique set of P-T ratings. You must ensure your
                system's actual pressure and temperature fall within or below the rated values for your selected
                flange. If your system exceeds the rating at any operating condition, the flange is not suitable
                and will fail.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The ratings are conservative (include safety factors) and account for material degradation at
              temperature, stress concentration effects, manufacturing tolerances, and installation variables.
              Understanding how to read and apply P-T ratings is essential for safe system design.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* How to Read ASME B16.5 Table 2 */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            How to Read ASME B16.5 Table 2
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Identify Your Flange Class</h3>
              <p className="text-gray-700 leading-relaxed">
                ASME B16.5 pressure classes are: 150, 300, 400, 600, 900, 1500, and 2500. Your piping system design
                pressure determines which class you need. A Class 150 flange is rated for 150 psi at room temperature
                but will have lower allowable pressures at elevated temperatures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Determine Your Material Group</h3>
              <p className="text-gray-700 leading-relaxed">
                ASME B16.5 Table 2 organizes materials into groups (A, B, C, D, E, F, etc.) based on similar strength
                and temperature characteristics. All materials in the same group have identical P-T ratings for a given
                pressure class. Identify which material group your flange material belongs to.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Find Your Operating Temperature</h3>
              <p className="text-gray-700 leading-relaxed">
                Locate the operating temperature (or the next higher temperature listed) in Table 2. ASME provides
                ratings at standard temperature intervals. If your exact temperature falls between listed values, you
                can interpolate linearly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Read the Allowable Pressure</h3>
              <p className="text-gray-700 leading-relaxed">
                Where your class row, material group column, and temperature intersect is your allowable pressure
                rating. This is the maximum pressure at which you can operate your flange at that temperature. Your
                actual system pressure must equal or be less than this value.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Material Groups Explanation */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Understanding Material Groups
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            ASME B16.5 classifies flange materials into groups based on their strength and temperature performance
            characteristics. All materials in the same group have identical P-T ratings. This simplifies design by
            allowing material selection without recalculating ratings.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group A - Carbon Steel (Low Temperature)</h3>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Materials:</strong> ASTM A105, A350 LF2, A216 WCB
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Temperature Range:</strong> -20°F to 850°F
              </p>
              <p className="text-sm text-gray-700">
                Standard carbon steel for general industrial use. Good for most applications up to 800°F. A350 LF2
                extends service to cryogenic temperatures. These materials are cost-effective and widely available.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group B - Carbon-Molybdenum (High Temperature)</h3>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Materials:</strong> ASTM A182 F5, F9; A335 P5, P9
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Temperature Range:</strong> Up to 1100°F
              </p>
              <p className="text-sm text-gray-700">
                Enhanced creep resistance for elevated temperature service. Chromium-molybdenum alloys provide superior
                strength retention at high temperatures. Used in power plants and steam systems.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group C & D - Austenitic Stainless Steel</h3>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Materials:</strong> ASTM A182 F304, F304L, F316, F316L
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Temperature Range:</strong> -320°F to 1500°F
              </p>
              <p className="text-sm text-gray-700">
                Excellent corrosion resistance and wide temperature range. Superior performance in chemical and
                corrosive environments. Cost higher than carbon steel but essential for harsh service.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group E - Duplex Stainless Steel</h3>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Materials:</strong> ASTM A182 F51 (S31803), F53 (S32750)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Temperature Range:</strong> -40°F to 600°F
              </p>
              <p className="text-sm text-gray-700">
                Superior corrosion resistance for subsea and seawater applications. Higher strength than austenitic
                stainless. Limited to moderate temperatures but excellent for offshore and chemical service.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>


      {/* Safety Factors and Design Margins */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Safety Factors and Design Margins
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            ASME B16.5 P-T ratings incorporate conservative safety factors to account for various uncertainties and
            variables in real-world service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Built-in Safety Margins</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold">•</span>
                  <span><strong>4:1 Safety Factor:</strong> Based on tensile strength</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold">•</span>
                  <span><strong>Stress Concentration:</strong> Accounts for notches, transitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold">•</span>
                  <span><strong>Manufacturing Tolerance:</strong> Material variations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold">•</span>
                  <span><strong>Welding Defects:</strong> Small voids, inclusions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold">•</span>
                  <span><strong>Installation Variables:</strong> Bolt torque, alignment</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Margin Provisions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold">•</span>
                  <span><strong>Corrosion Allowance:</strong> Subtract from nominal thickness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold">•</span>
                  <span><strong>Creep Resistance:</strong> For high-temperature service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold">•</span>
                  <span><strong>Fatigue Life:</strong> For cyclic pressure/temperature</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold">•</span>
                  <span><strong>Vibration Effects:</strong> Additional margin may apply</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold">•</span>
                  <span><strong>Code Requirements:</strong> ASME Section VIII, API, etc.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-300">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Conservative Design Practice</h3>
            <p className="text-gray-700">
              Even though ASME ratings include safety factors, industry best practice often adds additional margins:
              using one pressure class higher than minimum required, specifying materials with higher temperature
              capability than needed, or reducing design pressure below calculated requirement. These practices enhance
              reliability and extend flange service life.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* P-T Rating Calculator Tool */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              P-T Rating Calculator Tool
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Use our interactive calculator to quickly determine allowable pressure at any temperature for standard
              ASME B16.5 flanges. Select your flange class and material, enter the operating temperature, and get the
              maximum allowable pressure instantly.
            </p>
            <Button href="/tools/pressure-temperature-rating" variant="primary" size="lg">
              Open P-T Rating Calculator
            </Button>
          </div>
        </Container>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <FAQ items={faqItems} title="Frequently Asked Questions" />
        </Container>
      </SectionWrapper>

      {/* CTA Banner */}
      <CTABanner
        heading="Need Help with Pressure-Temperature Calculations?"
        subtext="Our engineers can help you select the right flange for your specific pressure and temperature requirements."
        primaryCTA={{
          label: 'Request Technical Support',
          href: 'https://www.texasflange.com/contact-us',
        }}
        secondaryCTA={{
          label: 'Contact Us',
          href: 'https://www.texasflange.com/contact-us',
        }}
      />

      {/* Related Resources */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/resources/flange-types-guide">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Complete Flange Types Guide
                </h3>
                <p className="text-gray-600 text-sm">
                  Detailed guide to 15 flange types with applications and selection criteria.
                </p>
              </div>
            </Link>
            <Link href="/resources/material-grades">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Material Grade Reference
                </h3>
                <p className="text-gray-600 text-sm">
                  Specifications for ASTM A105, A182, A350 and other flange materials.
                </p>
              </div>
            </Link>
            <Link href="/standards">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Standards & Compliance
                </h3>
                <p className="text-gray-600 text-sm">
                  Overview of ASME, API, ASTM, AWWA, and international standards.
                </p>
              </div>
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
