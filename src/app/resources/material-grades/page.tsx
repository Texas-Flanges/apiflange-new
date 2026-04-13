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
  title: 'Flange Material Grades Reference | ASTM Specifications',
  description:
    'Complete reference guide to flange material grades including ASTM A105, A182, A350, A694, A216. Chemical composition, mechanical properties, temperature ranges.',
  keywords: [
    'flange materials',
    'material grades',
    'ASTM A105',
    'ASTM A182',
    'ASTM A350',
    'ASTM A694',
    'ASTM A216',
    'carbon steel',
    'stainless steel',
    'alloy steel',
  ],
  openGraph: {
    title: 'Flange Material Grades Reference',
    description:
      'Master flange material specifications with complete ASTM requirements and technical data.',
    type: 'article',
    url: 'https://www.apiflange.com/resources/material-grades',
  },
};

export default function MaterialGradesPage() {
  const faqItems = [
    {
      question: 'What is the difference between ASTM A105 and A350 LF2?',
      answer:
        'Both are carbon steel forged flanges but designed for different temperature ranges. ASTM A105 is standard carbon steel suitable for -20°F to 800°F. ASTM A350 LF2 is specifically designed for low-temperature (LF) service and is suitable for cryogenic applications down to -50°F. A350 LF2 is required for LNG, liquid nitrogen, and cryogenic systems. A105 cannot safely be used below about -20°F due to brittle fracture risk.',
    },
    {
      question: 'Why is material selection important for flanges?',
      answer:
        'Material selection determines the flange\'s ability to withstand operating conditions. Different materials have different: strength at operating temperatures, corrosion resistance in the service fluid, toughness and impact resistance, thermal expansion characteristics, and cost. Selecting the wrong material can result in premature failure, leaks, rupture, or catastrophic system failure.',
    },
    {
      question: 'Can I use carbon steel flanges in corrosive environments?',
      answer:
        'Not without protection. Carbon steel (A105, A216) will corrode in most chemical, seawater, and acidic environments. For corrosive service you have two options: (1) Use inherently corrosion-resistant material like stainless steel (A182 F304/F316) or duplex (A182 F51/F53), or (2) Apply protective coatings like galvanizing, epoxy, or metallic coatings. Stainless is usually preferred for internal corrosion resistance; coatings for external protection.',
    },
    {
      question: 'What is the advantage of stainless steel flanges?',
      answer:
        'Stainless steel offers superior corrosion resistance in chemical, marine, and corrosive environments where carbon steel would fail. ASTM A182 F304/F316 austenitic stainless has excellent toughness across wide temperature ranges (-320°F to 800°F+), superior fatigue resistance, and maintains strength at elevated temperatures. Cost is higher than carbon steel, but justified by longer service life and corrosion protection.',
    },
    {
      question: 'When should I specify alloy steel flanges (A182 F5, F11, F22)?',
      answer:
        'Alloy steel flanges are essential for high-temperature services above 800°F. They offer better creep resistance than carbon steel and maintain mechanical properties at elevated temperatures. Use F5/F9 for 900-1100°F, F11/F22 for steam service (power plants), and F91 for ultra-high temperatures (1200°F+). Alloy steels are more expensive than carbon steel but necessary for thermal applications.',
    },
    {
      question: 'What is duplex stainless and when is it used?',
      answer:
        'Duplex stainless (A182 F51, F53) combines austenitic and ferritic stainless microstructures, offering higher strength than austenitic grades with good corrosion resistance. Excellent for subsea, seawater, and offshore applications where chloride corrosion is severe. Super duplex (F53) provides even better corrosion resistance. Duplex has higher yield strength, allowing thinner flanges for same pressure rating, saving weight.',
    },
    {
      question: 'Can I substitute one material grade for another?',
      answer:
        'Not without engineering review. Each material grade has specific properties that affect pressure ratings, temperature capability, and corrosion resistance. Substituting materials can: change the flange\'s pressure-temperature rating, affect corrosion performance, impact cost, and violate code requirements. Always verify that any material substitution maintains or exceeds original specifications and has been approved by the original designer.',
    },
    {
      question: 'What about cast carbon steel flanges (A216)?',
      answer:
        'ASTM A216 is cast carbon steel used where forged flanges are not practical (very large sizes, complex shapes). Casting allows manufacturing very large diameter flanges cost-effectively. However, cast material has lower toughness and fatigue resistance than forgings, is more susceptible to defects, and generally limited to lower pressure classes. Forgings are always preferred for critical applications.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Material Grade Reference"
        subtitle="Complete specifications for all major flange material grades with chemical composition, mechanical properties, and application guidance."
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
            <span className="text-gray-900 font-semibold">Material Grades</span>
          </div>
        </Container>
      </SectionWrapper>

      {/* Material Overview */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Flange Material Specifications
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Flange materials are specified by ASTM standards that define chemical composition, mechanical
              properties, and testing requirements. Selecting the correct material grade is critical for safe,
              reliable system operation. Different materials have different pressure ratings, temperature capabilities,
              and corrosion resistance characteristics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Material Selection Factors</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Operating temperature range</li>
                  <li>• Design pressure</li>
                  <li>• Service fluid (corrosive?)</li>
                  <li>• Thermal cycling frequency</li>
                  <li>• System code requirements</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-bold text-gray-900 mb-2">Key Mechanical Properties</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tensile strength (PSI)</li>
                  <li>• Yield strength (PSI)</li>
                  <li>• Elongation percentage</li>
                  <li>• Creep rate at temp</li>
                  <li>• Impact toughness</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Major Material Grades */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Major Flange Material Grades
          </h2>

          <div className="space-y-8">
            {/* A105 */}
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">ASTM A105 - Carbon Steel</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 font-semibold rounded-full text-sm">
                  Most Common
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Specification</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Standard:</strong> ASTM A105/A105M</li>
                    <li><strong>Type:</strong> Carbon steel forgings</li>
                    <li><strong>Grade:</strong> Standard grade only</li>
                    <li><strong>Form:</strong> Forged, normalized</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Typical Chemistry</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Carbon:</strong> 0.20-0.35%</li>
                    <li><strong>Manganese:</strong> 0.60-1.05%</li>
                    <li><strong>Silicon:</strong> 0.10-0.35%</li>
                    <li><strong>Phosphorus:</strong> max 0.035%</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Service Range</h4>
                <p className="text-gray-700">
                  <strong>Temperature:</strong> -20°F to 850°F | <strong>Pressure Rating:</strong> All classes (150-2500 psi)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Advantages</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Excellent cost-effectiveness</li>
                    <li>✓ Wide availability</li>
                    <li>✓ Good strength to ~800°F</li>
                    <li>✓ Standard for most applications</li>
                    <li>✓ Easy machining and welding</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Applications</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Moderate temperature steam</li>
                    <li>• Industrial compressed air</li>
                    <li>• Water and utility piping</li>
                    <li>• HVAC systems</li>
                    <li>• General industrial service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* A182 */}
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">ASTM A182 - Stainless & Alloy Forgings</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 font-semibold rounded-full text-sm">
                  Corrosion Resistant
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Common Grades</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>F304:</strong> Austenitic stainless (Ni 8-12%, Cr 18-20%)</li>
                    <li><strong>F304L:</strong> Lower carbon version for corrosion</li>
                    <li><strong>F316:</strong> Molybdenum added (better pitting resistance)</li>
                    <li><strong>F316L:</strong> Lower carbon, best corrosion resistance</li>
                    <li><strong>F5/F9:</strong> Chromium-molybdenum alloy (high temp)</li>
                    <li><strong>F11/F22:</strong> Chromium-molybdenum (power plant steam)</li>
                    <li><strong>F91:</strong> Modified 9Cr (ultra-high temperature)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Service Characteristics</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Austenitic (F304/F316):</strong> -320°F to 800°F+</li>
                    <li><strong>Alloy (F5/F9):</strong> Up to 1100°F</li>
                    <li><strong>F11/F22:</strong> Steam service (900-1100°F)</li>
                    <li><strong>F91:</strong> 1200°F+ capability</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <p className="text-xs font-bold text-green-900 mb-1">F304/F304L</p>
                  <p className="text-xs text-gray-700">Chemical, food, pharma</p>
                </div>
                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                  <p className="text-xs font-bold text-blue-900 mb-1">F316/F316L</p>
                  <p className="text-xs text-gray-700">Marine, seawater, chloride</p>
                </div>
                <div className="bg-orange-50 p-3 rounded border border-orange-200">
                  <p className="text-xs font-bold text-orange-900 mb-1">F5/F9/F11/F22</p>
                  <p className="text-xs text-gray-700">Power, steam, high-temp</p>
                </div>
                <div className="bg-red-50 p-3 rounded border border-red-200">
                  <p className="text-xs font-bold text-red-900 mb-1">F91</p>
                  <p className="text-xs text-gray-700">Ultra-high temperature</p>
                </div>
              </div>
            </div>

            {/* A350 */}
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">ASTM A350 - Low Temperature Forgings</h3>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 font-semibold rounded-full text-sm">
                  Cryogenic
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Specification</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Common Grades:</strong> LF2, LF3, LF4, LF5, LF6, LF787</li>
                    <li><strong>LF2:</strong> Most common (carbon-manganese)</li>
                    <li><strong>LF3/LF4:</strong> Colder service</li>
                    <li><strong>LF787:</strong> Very low carbon</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Service Range</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>LF2:</strong> Down to -50°F</li>
                    <li><strong>LF3:</strong> Down to -150°F</li>
                    <li><strong>LF787:</strong> Down to -75/-100°F</li>
                    <li><strong>Cryogenic:</strong> Impact strength maintained at cryogenic temps</li>
                  </ul>
                </div>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Application Examples</h4>
                <p className="text-gray-700">
                  LNG (Liquefied Natural Gas) systems, liquid nitrogen, liquid hydrogen, cryogenic research, ethylene
                  plants, helium transfer systems. A350 is <strong>mandatory</strong> for service below -20°F.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> A350 LF2 is more expensive than A105 but essential for cryogenic service.
                  Using A105 below -20°F risks brittle fracture.
                </p>
              </div>
            </div>

            {/* A694 */}
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">ASTM A694 - High-Strength Carbon Steel</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 font-semibold rounded-full text-sm">
                  Pipeline
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Grades Available</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>F52:</strong> 52 ksi SMYS</li>
                    <li><strong>F60:</strong> 60 ksi SMYS</li>
                    <li><strong>F65:</strong> 65 ksi SMYS</li>
                    <li><strong>F70:</strong> 70 ksi SMYS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Advantages</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Higher strength than A105</li>
                    <li>✓ Lower cost for equivalent rating</li>
                    <li>✓ Reduces wall thickness/weight</li>
                    <li>✓ Good for high-pressure pipelines</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-2">Primary Application</h4>
                <p className="text-gray-700">
                  Oil and gas pipelines, transmission lines where high strength and cost-effectiveness are critical.
                  Allows thinner-wall designs for weight and cost reduction.
                </p>
              </div>
            </div>

            {/* A216 */}
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">ASTM A216 - Cast Carbon Steel</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 font-semibold rounded-full text-sm">
                  Cast Flanges
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Specification</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Standard:</strong> ASTM A216/A216M</li>
                    <li><strong>Grade WCB:</strong> Most common (carbon steel)</li>
                    <li><strong>Grade WCC:</strong> Lower temp (-20°F minimum)</li>
                    <li><strong>Type:</strong> Investment or sand cast</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Service Range</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>WCB:</strong> Up to ~800°F</li>
                    <li><strong>WCC:</strong> -20°F to 400°F</li>
                    <li>Limited to lower pressure classes</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Advantages</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>✓ Large sizes possible</li>
                    <li>✓ Complex shapes</li>
                    <li>✓ Low cost for large</li>
                    <li>✓ Fast delivery</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-3 rounded border border-red-200">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Disadvantages</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>✗ Lower toughness</li>
                    <li>✗ Fatigue risk</li>
                    <li>✗ Defect potential</li>
                    <li>✗ Lower pressure rating</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-gray-100 p-3 rounded border border-gray-300 text-sm text-gray-700">
                <strong>Use:</strong> Water systems, low-pressure industrial piping, large diameter (where forging
                becomes impractical).
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Chemical Composition Comparison */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Chemical Composition Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-iron text-white">
                  <th className="border border-gray-300 p-3 text-left font-bold">Material</th>
                  <th className="border border-gray-300 p-3 text-center font-bold">C</th>
                  <th className="border border-gray-300 p-3 text-center font-bold">Mn</th>
                  <th className="border border-gray-300 p-3 text-center font-bold">Si</th>
                  <th className="border border-gray-300 p-3 text-center font-bold">Cr</th>
                  <th className="border border-gray-300 p-3 text-center font-bold">Ni</th>
                  <th className="border border-gray-300 p-3 text-center font-bold">Mo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">A105 Carbon</td>
                  <td className="border border-gray-300 p-3 text-center">0.20-0.35%</td>
                  <td className="border border-gray-300 p-3 text-center">0.60-1.05%</td>
                  <td className="border border-gray-300 p-3 text-center">0.10-0.35%</td>
                  <td className="border border-gray-300 p-3 text-center">0.30% max</td>
                  <td className="border border-gray-300 p-3 text-center">0.40% max</td>
                  <td className="border border-gray-300 p-3 text-center">0.12% max</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">A350 LF2</td>
                  <td className="border border-gray-300 p-3 text-center">0.30% max</td>
                  <td className="border border-gray-300 p-3 text-center">0.60-1.35%</td>
                  <td className="border border-gray-300 p-3 text-center">0.15-0.30%</td>
                  <td className="border border-gray-300 p-3 text-center">0.30% max</td>
                  <td className="border border-gray-300 p-3 text-center">0.40% max</td>
                  <td className="border border-gray-300 p-3 text-center">0.12% max</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">A182 F304 L</td>
                  <td className="border border-gray-300 p-3 text-center">0.03% max</td>
                  <td className="border border-gray-300 p-3 text-center">2.00 max</td>
                  <td className="border border-gray-300 p-3 text-center">1.00 max</td>
                  <td className="border border-gray-300 p-3 text-center">18-20%</td>
                  <td className="border border-gray-300 p-3 text-center">8-13%</td>
                  <td className="border border-gray-300 p-3 text-center">-</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">A182 F316 L</td>
                  <td className="border border-gray-300 p-3 text-center">0.03% max</td>
                  <td className="border border-gray-300 p-3 text-center">2.00 max</td>
                  <td className="border border-gray-300 p-3 text-center">1.00 max</td>
                  <td className="border border-gray-300 p-3 text-center">16-18%</td>
                  <td className="border border-gray-300 p-3 text-center">10-15%</td>
                  <td className="border border-gray-300 p-3 text-center">2-3%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">A182 F11 CL2 & 3</td>
                  <td className="border border-gray-300 p-3 text-center">0.10-0.20%</td>
                  <td className="border border-gray-300 p-3 text-center">0.30-0.80%</td>
                  <td className="border border-gray-300 p-3 text-center">0.50-1.00%</td>
                  <td className="border border-gray-300 p-3 text-center">0.50-1.00%</td>
                  <td className="border border-gray-300 p-3 text-center">-</td>
                  <td className="border border-gray-300 p-3 text-center">0.44-0.65%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </SectionWrapper>

      {/* Mechanical Properties Comparison */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Mechanical Properties Comparison (Room Temperature)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-900 text-white">
                  <th className="border border-gray-300 p-3 text-left font-bold">Material</th>
                  <th className="border border-gray-300 p-3 text-center font-bold">Tensile (psi)</th>
                  <th className="border border-gray-300 p-3 text-center font-bold">Yield (psi)</th>
                  <th className="border border-gray-300 p-3 text-center font-bold">Elongation %</th>
                  <th className="border border-gray-300 p-3 text-center font-bold">Hardness (HB)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-white">
                  <td className="border border-gray-300 p-3 font-semibold">A105 Carbon</td>
                  <td className="border border-gray-300 p-3 text-center">70,000 min</td>
                  <td className="border border-gray-300 p-3 text-center">36,000 min</td>
                  <td className="border border-gray-300 p-3 text-center">22%</td>
                  <td className="border border-gray-300 p-3 text-center">187 max</td>
                </tr>
                <tr className="hover:bg-white bg-white">
                  <td className="border border-gray-300 p-3 font-semibold">A350 LF2</td>
                  <td className="border border-gray-300 p-3 text-center">70,000 min</td>
                  <td className="border border-gray-300 p-3 text-center">36,000 min</td>
                  <td className="border border-gray-300 p-3 text-center">22%</td>
                  <td className="border border-gray-300 p-3 text-center">197 max</td>
                </tr>
                <tr className="hover:bg-white">
                  <td className="border border-gray-300 p-3 font-semibold">A182 F304 L</td>
                  <td className="border border-gray-300 p-3 text-center">70,000-75,000</td>
                  <td className="border border-gray-300 p-3 text-center">30,000 min</td>
                  <td className="border border-gray-300 p-3 text-center">30% min</td>
                  <td className="border border-gray-300 p-3 text-center">123-217</td>
                </tr>
                <tr className="hover:bg-white bg-white">
                  <td className="border border-gray-300 p-3 font-semibold">A182 F316 L</td>
                  <td className="border border-gray-300 p-3 text-center">70,000-75,000</td>
                  <td className="border border-gray-300 p-3 text-center">30,000 min</td>
                  <td className="border border-gray-300 p-3 text-center">30% min</td>
                  <td className="border border-gray-300 p-3 text-center">123-217</td>
                </tr>
                <tr className="hover:bg-white">
                  <td className="border border-gray-300 p-3 font-semibold">A182 F11 CL2 & 3</td>
                  <td className="border border-gray-300 p-3 text-center">60,000-75,000</td>
                  <td className="border border-gray-300 p-3 text-center">40,000-45,000</td>
                  <td className="border border-gray-300 p-3 text-center">20% min</td>
                  <td className="border border-gray-300 p-3 text-center">143-207</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </SectionWrapper>

      {/* Temperature Service Ranges */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Temperature Service Ranges
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-gray-700">
                <strong>A105 Carbon Steel:</strong> -20°F to 850°F (Standard industrial, most common)
              </p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <p className="text-gray-700">
                <strong>A350 LF2 (Low Temp):</strong> -50°F to 850°F (Mandatory for cryogenic below -20°F)
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-gray-700">
                <strong>A182 F304/F316 (Austenitic SS):</strong> -320°F to 1500°F (Excellent low and high temp)
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <p className="text-gray-700">
                <strong>A182 F5/F9 (Alloy):</strong> Up to 1100°F (Power plant steam and thermal service)
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-gray-700">
                <strong>A182 F11/F22:</strong> 900-1100°F continuous (Premium high-temperature creep resistance)
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-gray-700">
                <strong>A182 F91:</strong> Up to 1200°F+ (Ultra-high temperature advanced alloy)
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <FAQ items={faqItems} title="Frequently Asked Questions" />
        </Container>
      </SectionWrapper>

      {/* CTA Banner */}
      <CTABanner
        heading="Need Help Selecting the Right Material Grade?"
        subtext="Our engineers can guide you to the optimal material for your application, temperature, and budget."
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
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/resources/pressure-ratings">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Pressure-Temperature Ratings
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn how material properties affect pressure ratings at temperature.
                </p>
              </div>
            </Link>
            <Link href="/resources/flange-types-guide">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Flange Types Guide
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete guide to 15 flange types and their material requirements.
                </p>
              </div>
            </Link>
            <Link href="/resources/corrosion-prevention">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors cursor-pointer">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-brass">
                  Corrosion Prevention
                </h3>
                <p className="text-gray-600 text-sm">
                  Material selection strategies for corrosive environments.
                </p>
              </div>
            </Link>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
