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
  title: 'Corrosion Prevention Guide for Flanges',
  description:
    'Comprehensive guide to corrosion prevention strategies including types of corrosion, prevention methods, material selection, coatings, and maintenance best practices.',
  keywords: [
    'corrosion prevention',
    'flange corrosion',
    'galvanic corrosion',
    'pitting corrosion',
    'stress corrosion cracking',
    'coating selection',
    'cathodic protection',
    'flange maintenance',
  ],
  openGraph: {
    title: 'Corrosion Prevention Guide for Flanges',
    description:
      'Master corrosion prevention strategies to extend flange service life in harsh environments.',
    type: 'article',
    url: 'https://www.apiflange.com/resources/corrosion-prevention',
  },
};

export default function CorrosionPreventionPage() {
  const faqItems = [
    {
      question: 'How do I know if corrosion is the right concern for my application?',
      answer:
        'Evaluate your service environment: Is the flange exposed to moisture, salt air, chemicals, acids, or alkaline solutions? Is the temperature elevated (which accelerates corrosion)? Are there different metals in contact (galvanic coupling)? Are gasket materials incompatible? If any of these apply, corrosion prevention should be part of your design. Marine, chemical plant, and outdoor piping always require corrosion management.',
    },
    {
      question: 'What is the difference between general corrosion and localized corrosion?',
      answer:
        'General corrosion affects the entire surface uniformly, reducing wall thickness gradually. Localized corrosion (pitting, crevice, stress corrosion cracking) creates deep damage in concentrated areas. Localized corrosion is more dangerous because it can perforate a flange quickly without significant overall thickness loss. Material selection and environmental control are critical for preventing localized corrosion.',
    },
    {
      question: 'Is galvanizing effective for preventing flange corrosion?',
      answer:
        'Hot-dip galvanizing (ASTM A153) is excellent for outdoor and water service. The zinc coating protects steel and is self-healing (zinc corrodes preferentially, protecting underlying steel). However, galvanizing has limits: not suitable for temperatures above ~140°F, can be attacked by strong acids/bases, and may not protect against localized corrosion in severe marine service. For harsh environments, stainless steel or duplex is preferred.',
    },
    {
      question: 'When should I use stainless steel instead of coated carbon steel?',
      answer:
        'Use stainless when: the environment is highly corrosive (seawater, strong chemicals), temperatures exceed coating limits (>140°F FBE, >150°F galvanized), or if coatings may be damaged in service. Stainless is inherently corrosion-resistant and requires no maintenance coating. Cost is higher but worth it for critical systems where coating damage or failure is likely. For marine and offshore, stainless is standard.',
    },
    {
      question: 'What is cathodic protection and when is it used?',
      answer:
        'Cathodic protection (CP) uses an impressed electrical current or sacrificial metal to make the steel the cathode (protected from corrosion). CP is primarily used in buried pipelines and subsea applications. For above-ground flanges, cathodic protection is rarely practical. Coatings or material selection are preferred. CP requires external power or sacrificial anodes, making it complex for typical piping.',
    },
    {
      question: 'Can I mix different metals in the same flange connection?',
      answer:
        'Mixing metals creates galvanic corrosion risk, where the less noble metal (anode) corrodes preferentially to protect the more noble metal (cathode). Avoid direct metal-to-metal contact between dissimilar metals. Use isolating gaskets, washers, or select compatible metal combinations. If you must use different metals, specify electrical isolation hardware (rubber gaskets, plastic washers) to prevent galvanic coupling.',
    },
    {
      question: 'How do I choose between different stainless steel grades for corrosion resistance?',
      answer:
        'Consider the corrosive media: For general chemical/industrial, F304 is adequate. For seawater/chloride environments, F316 (with molybdenum) is better. For severe chloride (subsea), use duplex (F51/F53) or super duplex. Cost increases with corrosion resistance, so match the grade to actual exposure. Testing in simulated service conditions helps verify suitability before full-scale deployment.',
    },
    {
      question: 'What maintenance is needed to prevent corrosion in service?',
      answer:
        'Inspect regularly for: coating damage, salt deposits, moisture accumulation, and visible corrosion spots. Clean regularly to remove salt and contaminants. For galvanized flanges, wash with mild soap and water. For coated flanges, inspect for scratches and touch up as needed. Keep gasket areas clean to prevent crevice corrosion. For stainless, periodic cleaning with stainless-safe cleaners helps maintain appearance and prevents local corrosion initiation.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Corrosion Prevention Guide for Flanges"
        subtitle="Comprehensive strategies to protect your flanges from corrosion, extend service life, and ensure system reliability in harsh environments."
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
            <span className="text-gray-900 font-semibold">Corrosion Prevention</span>
          </div>
        </Container>
      </SectionWrapper>

      {/* Introduction */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Corrosion in Flange Systems
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Corrosion is the deterioration of metals due to chemical or electrochemical reactions with their
              environment. For flanges, corrosion can lead to: leaks, system failures, safety hazards, and expensive
              replacement costs. Understanding corrosion mechanisms and implementing proper prevention strategies is
              essential for reliable system operation, especially in marine, chemical, and outdoor applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Cost of Corrosion</h3>
                <p className="text-sm text-gray-700">
                  Corrosion costs industry billions annually through replacement, downtime, and safety incidents.
                  Proactive prevention is far cheaper than emergency repairs.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-bold text-gray-900 mb-2">Prevention Value</h3>
                <p className="text-sm text-gray-700">
                  Strategic material selection and protection methods extend service life decades and virtually
                  eliminate corrosion-related failures.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Types of Corrosion */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Types of Corrosion
          </h2>

          <div className="space-y-8">
            {/* General Corrosion */}
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">General (Uniform) Corrosion</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Characteristics</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Affects entire surface uniformly</li>
                    <li>• Metal dissolves evenly across flange</li>
                    <li>• Creates predictable thickness loss</li>
                    <li>• Occurs with carbon steel in water</li>
                    <li>• Most common type of corrosion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Prevention Methods</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Protective coatings (paint, epoxy)</li>
                    <li>✓ Galvanizing (hot-dip)</li>
                    <li>✓ Corrosion-resistant materials</li>
                    <li>✓ Cathodic protection (CP)</li>
                    <li>✓ Inhibitor chemicals in fluid</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Galvanic Corrosion */}
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Galvanic (Electrochemical) Corrosion</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">What Causes It</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Two dissimilar metals in contact</li>
                    <li>• Conductive medium (water, salt)</li>
                    <li>• Forms micro-battery (anode/cathode)</li>
                    <li>• Less noble metal (anode) corrodes rapidly</li>
                    <li>• Common in mixed-material assemblies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Prevention Methods</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Use compatible metal combinations</li>
                    <li>✓ Isolate dissimilar metals with gaskets</li>
                    <li>✓ Plastic washers under bolts</li>
                    <li>✓ Isolating ring gaskets</li>
                    <li>✓ Protective coatings on anode</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-yellow-50 p-3 rounded border border-yellow-200 text-sm text-gray-700">
                <strong>Example:</strong> Steel flange bolted to bronze valve creates galvanic couple. Steel (anode)
                corrodes rapidly while bronze (cathode) remains protected.
              </div>
            </div>

            {/* Pitting Corrosion */}
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pitting Corrosion</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Characteristics</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Deep holes/pits in localized areas</li>
                    <li>• Small surface area affected</li>
                    <li>• Rapid perforation possible</li>
                    <li>• Chloride ions attack passive film</li>
                    <li>• Stainless & alloys vulnerable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Prevention Methods</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Select higher PREN stainless (F316)</li>
                    <li>✓ Use duplex or super duplex steels</li>
                    <li>✓ Keep chloride levels low</li>
                    <li>✓ Regular cleaning of salt deposits</li>
                    <li>✓ Protective coatings in marine</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-red-50 p-3 rounded border border-red-200 text-sm text-gray-700">
                <strong>Risk:</strong> Pitting is dangerous because a small surface defect can lead to flange
                perforation. Regular inspection is essential for critical systems.
              </div>
            </div>

            {/* Crevice Corrosion */}
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crevice Corrosion</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">What Creates It</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Narrow gap or crevice</li>
                    <li>• Moisture/salt trapped inside</li>
                    <li>• Oxygen depletion in crevice</li>
                    <li>• Passive film breaks down locally</li>
                    <li>• Under gaskets, bolt holes, overlaps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Prevention Methods</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Avoid crevices in design</li>
                    <li>✓ Complete gasket coverage</li>
                    <li>✓ Smooth surface finishes</li>
                    <li>✓ Regular cleaning/drying</li>
                    <li>✓ Duplex/super duplex materials</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-200 text-sm text-gray-700">
                <strong>Common Location:</strong> Under gaskets at flange face - moisture trapped in narrow gap
                attacks stainless steel. Proper gasket selection and tightness prevents this.
              </div>
            </div>

            {/* Stress Corrosion Cracking */}
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stress Corrosion Cracking (SCC)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Failure Mechanism</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Combination of stress + corrosion</li>
                    <li>• Cracks propagate from stress</li>
                    <li>• Can cause sudden brittle failure</li>
                    <li>• Austenitic SS in chloride risk</li>
                    <li>• Difficult to detect before failure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Prevention Methods</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Minimize tensile stresses</li>
                    <li>✓ Stress relief heat treatment</li>
                    <li>✓ Proper bolt tightening</li>
                    <li>✓ Avoid high-chloride areas</li>
                    <li>✓ Use duplex instead of austenitic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Prevention Methods */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Corrosion Prevention Methods
          </h2>

          <div className="space-y-8">
            {/* Material Selection */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Material Selection (Best Defense)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Selecting the right material is the most effective long-term prevention strategy. Different materials
                have vastly different corrosion resistance:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">For Corrosive Environments</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Stainless F304/F316:</strong> General chemical</li>
                    <li>• <strong>Duplex (F51/F53):</strong> Seawater, offshore</li>
                    <li>• <strong>Super Duplex:</strong> Severe marine</li>
                    <li>• <strong>Nickel Alloys:</strong> Extreme chemicals</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Carbon Steel Alternatives</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Galvanized:</strong> Outdoor, water (OK to 140°F)</li>
                    <li>• <strong>Epoxy Coated:</strong> Potable water (OK to 140°F)</li>
                    <li>• <strong>Painted:</strong> General industrial outdoor</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coating Selection */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Protective Coatings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Coatings create a physical barrier between the metal and corrosive environment:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Hot-Dip Galvanizing (ASTM A153)</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Zinc coating provides sacrificial protection (zinc corrodes first, protecting steel). Self-healing
                    if scratched. Excellent for outdoor and water systems.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Limitations:</strong> Max ~140°F, attacked by acids/bases, may fail in severe marine. Cost
                    moderate. Lifespan 20-50 years.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Fusion Bonded Epoxy (FBE/AWWA C550)</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Epoxy powder fused to hot steel. Excellent for potable water. NSF-61 certified. Very durable and
                    hard.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Limitations:</strong> Max ~140°F, brittle if damaged, edge protection critical. Cost
                    moderate. Lifespan 30+ years.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Metallic Coatings (Zinc, Nickel, Chromium)</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Electroplated metal layer. Good for indoor moderate conditions. Good appearance and smoothness.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Limitations:</strong> Thinner than galvanizing, less sacrificial, requires maintenance.
                    Cost higher. Lifespan 5-15 years.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Paint & Organic Coatings</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Multiple layer systems (primer + topcoat). Versatile for various environments. Can be touched up.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Limitations:</strong> Requires surface prep, periodic maintenance, UV degradation. Cost
                    lower. Lifespan 5-10 years.
                  </p>
                </div>
              </div>
            </div>

            {/* Gasket Selection */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg border border-green-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Gasket Selection</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gasket materials must be compatible with the service fluid and flange material:
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>• Rubber (NBR/EPDM):</strong> General industrial, avoid strong chemicals and oils. Can
                  absorb fluids causing swelling.
                </li>
                <li>
                  <strong>• PTFE (Teflon):</strong> Excellent chemical resistance, suitable for harsh chemicals, acids,
                  bases. No fluid absorption.
                </li>
                <li>
                  <strong>• Spiral Wound (stainless inner):</strong> High-temperature and high-pressure service. Metal
                  windings compatible with stainless flanges.
                </li>
                <li>
                  <strong>• Ring Joint (RTJ):</strong> Metal gaskets for high-pressure/high-temp. Compatible with metal
                  flanges, no chemical attack.
                </li>
              </ul>
              <div className="mt-4 bg-white p-4 rounded border border-gray-300">
                <p className="text-sm text-gray-700">
                  <strong>Key Rule:</strong> Ensure gasket material is compatible with service fluid. Incompatible
                  gaskets can fail, swell, or degrade, leading to leaks. Chemical compatibility guides are essential.
                </p>
              </div>
            </div>

            {/* Environmental Control */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-lg border border-purple-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Environmental Control</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>• Moisture Control:</strong> Keep flanges dry when possible. Moisture accelerates corrosion
                  dramatically. Use drainage holes and avoid moisture traps.
                </li>
                <li>
                  <strong>• Salt/Contaminant Removal:</strong> In marine applications, wash salt deposits regularly. Salt
                  deposits trap moisture and accelerate corrosion.
                </li>
                <li>
                  <strong>• Temperature Management:</strong> Elevated temperatures accelerate most corrosion reactions.
                  Cooling systems or reduced operating temperature extends life.
                </li>
                <li>
                  <strong>• pH Control:</strong> Acidic or basic environments accelerate corrosion. Maintaining neutral
                  pH (5-8) reduces corrosion rates.
                </li>
              </ul>
            </div>

            {/* Cathodic Protection */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-lg border border-red-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Cathodic Protection (Advanced)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cathodic protection makes the steel the cathode in an electrochemical cell, preventing corrosion:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Sacrificial Anode Method</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Zinc or magnesium metal installed</li>
                    <li>• Anode corrodes instead of steel</li>
                    <li>• No external power required</li>
                    <li>• Common in subsea applications</li>
                    <li>• Lower cost than impressed current</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Impressed Current Method</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• External power source applies current</li>
                    <li>• Prevents corrosion electrochemically</li>
                    <li>• More control than sacrificial</li>
                    <li>• Used in pipelines, buried structures</li>
                    <li>• Requires ongoing power</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-white p-4 rounded border border-gray-300 text-sm text-gray-700">
                <strong>Note:</strong> Cathodic protection is rarely practical for above-ground flanges. Coating or
                material selection is preferred. CP is primary protection for buried pipelines and subsea structures.
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Maintenance Best Practices */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Maintenance Best Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Regular Inspection</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>Monthly:</strong> Visual inspection for corrosion spots, leaks, or discoloration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>Quarterly:</strong> Check coating integrity in high-traffic or exposed areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>Annually:</strong> Thickness measurements using ultrasonic testing for critical systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>As-needed:</strong> Detailed inspection if unusual corrosion observed</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cleaning & Maintenance</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>Remove Contaminants:</strong> Wash salt deposits and dirt with fresh water monthly in marine service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>Dry Service:</strong> Ensure flanges are dry; drain condensation in covered systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>Coating Touch-Up:</strong> Paint over scratches or damaged coating within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">•</span>
                  <span><strong>Stainless Cleaning:</strong> Use stainless-safe cleaners; avoid carbon steel wire brushes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bolt & Gasket Care</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Bolt Torque:</strong> Maintain proper bolt torque to ensure gasket compression and leak prevention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Bolt Coating:</strong> Use stainless bolts with stainless flanges to avoid galvanic corrosion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Gasket Compatibility:</strong> Verify gasket material remains compatible with service fluid</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Gasket Replacement:</strong> Replace gaskets per schedule; degraded gaskets cause leaks and crevice corrosion</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Troubleshooting Corrosion</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>Identify Type:</strong> Uniform loss vs. pits vs. cracks; helps determine root cause</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>Environmental Review:</strong> Check exposure (moisture, salt, chemicals, temperature)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>Material Verification:</strong> Confirm actual material matches specification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>Remediation:</strong> Implement coating, material upgrade, or environmental control</span>
                </li>
              </ul>
            </div>
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
        heading="Need Expert Corrosion Prevention Guidance?"
        subtext="Our engineers can help you select the right materials and protection methods for your specific environment."
        primaryCTA={{
          label: 'Request Technical Support',
          href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new',
        }}
        secondaryCTA={{
          label: 'Contact Us',
          href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new',
        }}
      />

      {/* Related Resources */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/resources/material-grades">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Material Grade Reference
                </h3>
                <p className="text-gray-600 text-sm">
                  Specifications for corrosion-resistant stainless and duplex materials.
                </p>
              </div>
            </Link>
            <Link href="/materials">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Flange Materials
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete overview of all material options including coatings.
                </p>
              </div>
            </Link>
            <Link href="/resources/flange-types-guide">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Flange Types Guide
                </h3>
                <p className="text-gray-600 text-sm">
                  Select the right flange type for your corrosive service.
                </p>
              </div>
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
