import { type Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import SpecTable from '@/components/ui/SpecTable';
import FAQ from '@/components/ui/FAQ';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Hot-Dip Galvanized Flanges - ASTM A153 Zinc Coating',
  description:
    'Hot-dip galvanized flanges for outdoor and corrosive environments. ASTM A153 specifications, coating thickness, process details, and 20-50 year service life protection.',
  keywords: [
    'galvanized flanges',
    'hot-dip galvanizing',
    'ASTM A153',
    'zinc coating',
    'corrosion protection',
    'outdoor flanges',
    'waterworks',
  ],
  openGraph: {
    title: 'Hot-Dip Galvanized Flanges - ASTM A153',
    description: 'Hot-dip galvanized flanges with comprehensive coating specifications and durability data.',
    type: 'website',
    url: 'https://www.apiflange.com/materials/galvanized',
  },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Materials', href: '/materials' },
  { label: 'Galvanized', href: '/materials/galvanized' },
];

// Coating Thickness Table
const thicknessColumns = [
  { key: 'weight', label: 'Steel Weight', unit: 'lbs' },
  { key: 'thickness', label: 'Min Coating Thickness', unit: 'mils' },
  { key: 'area', label: 'Min Area Coated', unit: '%' },
  { key: 'notes', label: 'Typical Service Life', unit: '' },
];

const thicknessData = [
  {
    weight: 'Less than 1.4',
    thickness: '3.4 mils (86 microns)',
    area: '95%',
    notes: '15-20 years outdoor',
  },
  {
    weight: '1.4 - 6.0',
    thickness: '2.8 mils (70 microns)',
    area: '95%',
    notes: '20-30 years outdoor',
  },
  {
    weight: 'Greater than 6.0',
    thickness: '2.2 mils (55 microns)',
    area: '95%',
    notes: '30-50 years outdoor',
  },
];

// Protection Duration Table
const durationColumns = [
  { key: 'environment', label: 'Environment Type', unit: '' },
  { key: 'life', label: 'Typical Service Life', unit: '' },
  { key: 'corrosionRate', label: 'Corrosion Rate', unit: 'mils/year' },
  { key: 'description', label: 'Description', unit: '' },
];

const durationData = [
  {
    environment: 'Rural/Suburban',
    life: '40-50 years',
    corrosionRate: '0.5-1.0',
    description: 'Low salt, low industrial activity',
  },
  {
    environment: 'Coastal (Low Salt)',
    life: '20-30 years',
    corrosionRate: '2-3',
    description: 'Moderate salt spray exposure',
  },
  {
    environment: 'Coastal (High Salt)',
    life: '15-20 years',
    corrosionRate: '3-5',
    description: 'Heavy salt spray, tropical climate',
  },
  {
    environment: 'Industrial Urban',
    life: '25-35 years',
    corrosionRate: '1-2',
    description: 'Air pollution, moderate corrosives',
  },
  {
    environment: 'Chemical Plant Area',
    life: '10-15 years',
    corrosionRate: '5-8',
    description: 'Acidic/corrosive fumes, aggressive',
  },
  {
    environment: 'Waterworks/Potable',
    life: '30-40 years',
    corrosionRate: '1-2',
    description: 'Buried or submerged in water',
  },
];

// Process Table
const processColumns = [
  { key: 'step', label: 'Process Step', unit: '' },
  { key: 'description', label: 'Description', unit: '' },
  { key: 'purpose', label: 'Purpose', unit: '' },
];

const processData = [
  {
    step: '1. Surface Preparation',
    description: 'Shot blast or acid pickle to remove mill scale and rust',
    purpose: 'Expose clean steel surface for zinc adhesion',
  },
  {
    step: '2. Alkaline Cleaning',
    description: 'Immerse in hot alkaline solution to remove oils and contaminants',
    purpose: 'Ensure no grease or organic coating interferes',
  },
  {
    step: '3. Rinsing',
    description: 'Fresh water rinse to remove cleaning solution',
    purpose: 'Prevent contamination of flux',
  },
  {
    step: '4. Flux Application',
    description: 'Apply zinc chloride or zinc-ammonium chloride flux',
    purpose: 'Prevent oxidation prior to hot-dip bath',
  },
  {
    step: '5. Hot-Dip Bath',
    description: 'Immerse in molten zinc at 840°F (450°C) for 1-10 minutes',
    purpose: 'Metallurgical bond of zinc to steel creates protection',
  },
  {
    step: '6. Air Cooling',
    description: 'Controlled cooling in ambient air',
    purpose: 'Develop characteristic spangled zinc appearance',
  },
  {
    step: '7. Inspection',
    description: 'Verify coating thickness, coverage, and adhesion',
    purpose: 'Ensure compliance with ASTM A153',
  },
];

// Environmental Comparison Table
const envComparisonColumns = [
  { key: 'coating', label: 'Coating Type', unit: '' },
  { key: 'rural', label: 'Rural/Inland', unit: 'years' },
  { key: 'coastal', label: 'Coastal Moderate', unit: 'years' },
  { key: 'industrial', label: 'Industrial Urban', unit: 'years' },
];

const envComparisonData = [
  {
    coating: 'Hot-Dip Galvanized (ASTM A153)',
    rural: '40-50',
    coastal: '20-30',
    industrial: '25-35',
  },
  {
    coating: 'Bare Carbon Steel',
    rural: '5-10',
    coastal: '1-2',
    industrial: '3-5',
  },
  {
    coating: 'Epoxy Coated',
    rural: '15-25',
    coastal: '10-15',
    industrial: '15-20',
  },
];

const faqItems = [
  {
    question: 'What is the difference between hot-dip galvanizing and other zinc coatings?',
    answer:
      'Hot-dip galvanizing (ASTM A153) is a metallurgical process where steel is immersed in molten zinc (~840°F), creating a permanent zinc-iron alloy bond. This differs from electroplating (thin, easily damaged) or sherardizing (hydrogen embrittlement risk). The molten bath creates multiple layers of zinc coating (30-100+ microns thick), providing superior durability and self-healing capability. If the coating is scratched, zinc "bleeds" to protect the exposed steel.',
  },
  {
    question: 'How long do hot-dip galvanized flanges last?',
    answer:
      'Service life depends on environment. In rural areas, galvanized flanges last 40-50 years. In coastal moderate-salt climates, expect 20-30 years. In harsh chemical environments, life may drop to 10-15 years. Waterworks (buried/submerged) typically see 30-40 years. The zinc coating provides the protection; once it is gone, the steel underneath begins to rust. Maintenance (cleaning to remove deposits) extends life.',
  },
  {
    question: 'Can I use galvanized flanges in seawater applications?',
    answer:
      'Galvanized flanges in direct seawater service have limited life (15-20 years max due to high chloride attack). For seawater, stainless steel (F316) or duplex stainless steel is recommended. However, galvanized flanges work well for coastal installations that do not have constant seawater contact (e.g., atmospheric exposure above the waterline). For submerged or fully immersed seawater service, avoid galvanized; use stainless instead.',
  },
  {
    question: 'Are galvanized flanges suitable for potable (drinking) water?',
    answer:
      'Yes, hot-dip galvanized flanges are acceptable for potable water per EPA and NSF standards. The zinc coating does not leach harmful amounts of zinc into drinking water under normal conditions (water pH 6.5+, low CO2). In rare acidic water conditions (pH < 6.5 or high CO2), zinc can leach excessively. For these cases, stainless steel (F304L) is preferred. Always verify with local water authority for specific requirements.',
  },
  {
    question: 'What maintenance is required for galvanized flanges?',
    answer:
      'Minimal maintenance is needed. Periodically rinse with fresh water to remove salts, bird droppings, and industrial dust that accelerate corrosion. Do NOT scrub the white zinc oxide patina that forms—this is protective. In coastal or chemical environments, rinse every 6-12 months. Do not apply paint over galvanizing without proper surface prep; the smooth zinc surface causes paint adhesion failure. If painting is desired, use zinc-rich primer specifically designed for galvanized steel.',
  },
];

const applications = [
  {
    name: 'Water Systems',
    items: [
      'Municipal water distribution mains',
      'Water treatment plant piping',
      'Storage tank connections',
      'Pump discharge flanges',
      'Filtration systems',
    ],
  },
  {
    name: 'Wastewater',
    items: [
      'Sewage collection systems',
      'Treatment plant piping',
      'Lift station discharge',
      'Outfall pipelines',
      'Process water lines',
    ],
  },
  {
    name: 'Industrial Outdoor',
    items: [
      'Cooling water systems',
      'Industrial steam condensate',
      'Utility piping',
      'Structural support brackets',
      'Equipment mounting',
    ],
  },
  {
    name: 'Marine & Coastal',
    items: [
      'Coastal facility piping',
      'Bridge drainage systems',
      'Stormwater infrastructure',
      'Pier/dock piping',
      'Atmospheric zone exposure',
    ],
  },
];

export default function GalvanizedPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Hot-Dip Galvanized Flanges"
        subtitle="ASTM A153 zinc-coated flanges for outdoor, waterworks, and corrosive environments. 20-50 year service life with minimal maintenance."
        variant="navy"
        breadcrumbs={breadcrumbs}
      />

      {/* Overview Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hot-Dip Galvanizing: Proven Corrosion Protection
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hot-dip galvanizing is the most cost-effective corrosion protection method for carbon steel
              flanges used in outdoor, waterworks, and marine environments. The process creates a
              metallurgical zinc-iron alloy bond that provides 20-50 years of protection depending on
              environmental severity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unlike thin electroplated coatings or painted surfaces that can chip and fail, galvanized
              coatings are self-healing. If the zinc surface is scratched, zinc "bleeds" laterally to
              protect the exposed steel, preventing rust from spreading. This unique property, combined
              with minimal maintenance requirements, makes galvanizing the standard choice for water
              utilities and outdoor industrial applications worldwide.
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold">
                Key Advantage: Hot-dip galvanized carbon steel delivers effective corrosion
                resistance at a fraction of the cost of stainless steel. Well-suited for projects requiring long
                service life in outdoor or mildly corrosive environments.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* The Galvanizing Process */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            The Hot-Dip Galvanizing Process
          </h2>

          <SpecTable columns={processColumns} data={processData} />

          <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Process Characteristics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Temperature</h4>
                <p className="text-gray-700 text-sm">
                  The molten zinc bath is maintained at 840°F (450°C), hot enough to create a strong
                  metallurgical bond between zinc and steel. This high temperature ensures deep penetration
                  and coating of all surfaces, including threads and inside surfaces.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Immersion Time</h4>
                <p className="text-gray-700 text-sm">
                  Typical immersion is 1-10 minutes depending on steel mass and geometry. Heavier flanges
                  require longer times to heat through and achieve proper zinc coating. The surface
                  temperature must reach 840°F for full reaction.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Zinc Layers</h4>
                <p className="text-gray-700 text-sm">
                  The coating consists of multiple layers: pure zinc outer layer, zinc-iron alloy
                  intermediate layers, and diffusion zone at steel surface. Total thickness is typically
                  2-4+ mils (55-100+ microns) depending on steel weight. This multilayer structure provides excellent
                  protection and ductility.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Self-Healing</h4>
                <p className="text-gray-700 text-sm">
                  Zinc is more reactive than steel, so scratches in the zinc coating are protected by
                  zinc corrosion products that "bleed" to cover the exposed steel. This self-healing
                  property is unique to zinc and extends actual service life beyond the initial coating
                  thickness prediction.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Coating Thickness Standards */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            ASTM A153 Coating Thickness Requirements
          </h2>

          <SpecTable columns={thicknessColumns} data={thicknessData} />

          <div className="mt-8 bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding Coating Thickness</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-bold">Minimum thickness</span> is specified by ASTM A153 based on the
                weight of the steel flange. Heavier flanges receive thinner coatings because they have
                more surface area per unit thickness, and the heavier steel mass provides longer overall
                protection.
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Service life</span> is not directly proportional to coating
                thickness. A 70-mil coating on a larger flange may last as long as (or longer than) a
                86-mil coating on a smaller flange due to the self-healing nature of zinc. Environmental
                severity is the primary factor determining actual service life.
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Coverage requirement</span> is 95% minimum. Small areas like
                welds, threads, and complex geometries may show temporary zinc-free regions that quickly
                corrode with white zinc oxide, then stabilize. This is normal and acceptable per ASTM.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Service Life by Environment */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Durability by Environment
          </h2>

          <SpecTable columns={durationColumns} data={durationData} />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Factors Extending Life</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Dry inland climate</p>
                    <p className="text-gray-600 text-xs">Low moisture = slower corrosion</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Neutral pH water</p>
                    <p className="text-gray-600 text-xs">Alkaline water stabilizes zinc</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Periodic rinsing</p>
                    <p className="text-gray-600 text-xs">Removes salt & corrosive deposits</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Protective patina</p>
                    <p className="text-gray-600 text-xs">White zinc oxide patina protects</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Factors Reducing Life</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">High salt spray (coastal)</p>
                    <p className="text-gray-600 text-xs">Salt accelerates zinc corrosion</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Industrial fumes</p>
                    <p className="text-gray-600 text-xs">Acidic/sulfurous gases attack zinc</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">High chloride water</p>
                    <p className="text-gray-600 text-xs">Chlorides accelerate zinc loss</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">✗</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Trapped moisture/dirt</p>
                    <p className="text-gray-600 text-xs">Galvanic cells form under deposits</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Comparison with Other Coatings */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Galvanized vs. Other Coating Systems
          </h2>

          <SpecTable columns={envComparisonColumns} data={envComparisonData} />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Hot-Dip Galvanized</h3>
              <div className="space-y-2 text-sm">
                <p className="text-green-700 font-semibold">Advantages:</p>
                <ul className="text-gray-700 space-y-1 ml-2">
                  <li>• Long service life (20-50 years)</li>
                  <li>• Self-healing capability</li>
                  <li>• Minimal maintenance</li>
                  <li>• No touching up needed</li>
                </ul>
                <p className="text-orange-700 font-semibold mt-3">Limitations:</p>
                <ul className="text-gray-700 space-y-1 ml-2">
                  <li>• Not suitable for high chloride</li>
                  <li>• Cannot paint without prep</li>
                  <li>• Limited to 2-4 mils (55-100 microns) thick</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Epoxy Coated</h3>
              <div className="space-y-2 text-sm">
                <p className="text-green-700 font-semibold">Advantages:</p>
                <ul className="text-gray-700 space-y-1 ml-2">
                  <li>• Good for potable water</li>
                  <li>• NSF-61 certification</li>
                  <li>• Chemical resistant</li>
                  <li>• Uniform appearance</li>
                </ul>
                <p className="text-orange-700 font-semibold mt-3">Limitations:</p>
                <ul className="text-gray-700 space-y-1 ml-2">
                  <li>• Shorter life (15-25 years)</li>
                  <li>• Requires recoating if chipped</li>
                  <li>• More maintenance</li>
                  <li>• Higher cost</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bare Carbon Steel</h3>
              <div className="space-y-2 text-sm">
                <p className="text-green-700 font-semibold">Advantages:</p>
                <ul className="text-gray-700 space-y-1 ml-2">
                  <li>• Lowest initial cost</li>
                  <li>• Paintable without issues</li>
                  <li>• Standard specification</li>
                </ul>
                <p className="text-orange-700 font-semibold mt-3">Limitations:</p>
                <ul className="text-gray-700 space-y-1 ml-2">
                  <li>• Rusts within 5-10 years</li>
                  <li>• Requires paint maintenance</li>
                  <li>• Not suitable for wet service</li>
                  <li>• High total cost of ownership</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Applications */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Typical Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-brass font-bold">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Installation & Maintenance */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Installation & Maintenance Guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Installation</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-1">No Surface Preparation Needed</p>
                  <p className="text-gray-700 text-sm">
                    Galvanized flanges arrive ready to install. No painting, priming, or surface
                    treatment required.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Welding Considerations</p>
                  <p className="text-gray-700 text-sm">
                    When welding galvanized flanges, the zinc coating is removed at the weld zone,
                    exposing bare steel. The exposed area will quickly rust. Touch-up with zinc-rich paint
                    (not regular paint) is recommended post-welding.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Threading & Bolting</p>
                  <p className="text-gray-700 text-sm">
                    The zinc coating on threads is slippery. Use calibrated torque with slightly higher
                    values than plain steel, or use anti-seize compound rated for galvanized steel.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maintenance</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-1">Regular Rinsing</p>
                  <p className="text-gray-700 text-sm">
                    In coastal or industrial environments, rinse with fresh water every 6-12 months to
                    remove salt, dirt, and corrosive deposits that accelerate zinc loss.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Avoid Painting</p>
                  <p className="text-gray-700 text-sm">
                    Do NOT paint over galvanized flanges. Paint does not adhere to the smooth zinc surface
                    and will peel. If painting is necessary, use special galvanize-bonding primers.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">White Patina is Protective</p>
                  <p className="text-gray-700 text-sm">
                    The white zinc oxide that forms is protective and should not be scraped or polished
                    off. It is a sign the zinc coating is working as designed.
                  </p>
                </div>
              </div>
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

      {/* CTA Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-orange-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Hot-Dip Galvanized Flanges?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get ASTM A153 galvanized carbon steel flanges with certified coating thickness, full
              traceability, and compliance with waterworks standards. Perfect for outdoor and corrosive
              service with minimal maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://www.texasflange.com/contact-us" variant="secondary" size="lg" className="border-white text-blue-900">
                Request Quote
              </Button>
              <Button href="https://www.texasflange.com/contact-us" variant="ghost" size="lg" className="text-white hover:text-orange-200">
                Technical Support
              </Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
