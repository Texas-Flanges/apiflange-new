import { type Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import SpecTable from '@/components/ui/SpecTable';
import FAQ from '@/components/ui/FAQ';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Stainless Steel Flanges - F304, F316 & Low Carbon Variants',
  description:
    'Complete specifications for stainless steel flanges. ASTM A182 F304, F304L, F316, F316L grades with chemical composition, mechanical properties, and corrosion resistance data.',
  keywords: [
    'stainless steel flanges',
    'ASTM A182 F304',
    'ASTM A182 F316',
    'corrosion resistant flanges',
    'austenitic stainless steel',
    'flange specifications',
  ],
  openGraph: {
    title: 'Stainless Steel Flanges - F304, F316 & Low Carbon Variants',
    description: 'Complete specifications for stainless steel flanges with ASTM A182 F304/F316 data.',
    type: 'website',
    url: 'https://www.apiflange.com/materials/stainless-steel',
  },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Materials', href: '/materials' },
  { label: 'Stainless Steel', href: '/materials/stainless-steel' },
];

// F304 Chemical Composition
const f304ChemicalColumns = [
  { key: 'element', label: 'Element', unit: '' },
  { key: 'min', label: 'Min', unit: '%' },
  { key: 'max', label: 'Max', unit: '%' },
  { key: 'notes', label: 'Notes', unit: '' },
];

const f304ChemicalData = [
  {
    element: 'Chromium (Cr)',
    min: '18.0',
    max: '20.0',
    notes: 'Provides corrosion resistance',
  },
  {
    element: 'Nickel (Ni)',
    min: '8.0',
    max: '10.5',
    notes: 'Austenitic phase stabilizer',
  },
  {
    element: 'Carbon (C)',
    min: '-',
    max: '0.08',
    notes: 'Controls carbide precipitation',
  },
  {
    element: 'Manganese (Mn)',
    min: '-',
    max: '2.00',
    notes: 'Strengthening element',
  },
  {
    element: 'Silicon (Si)',
    min: '-',
    max: '1.00',
    notes: 'Deoxidation and strengthening',
  },
  {
    element: 'Phosphorus (P)',
    min: '-',
    max: '0.045',
    notes: 'Impurity kept to minimum',
  },
  {
    element: 'Sulfur (S)',
    min: '-',
    max: '0.030',
    notes: 'Impurity kept to minimum',
  },
  {
    element: 'Molybdenum (Mo)',
    min: '-',
    max: '0.75',
    notes: 'Optional, enhances corrosion resistance',
  },
];

// F304L Chemical Composition
const f304lChemicalData = [
  {
    element: 'Chromium (Cr)',
    min: '18.0',
    max: '20.0',
    notes: 'Same as F304',
  },
  {
    element: 'Nickel (Ni)',
    min: '8.0',
    max: '12.0',
    notes: 'Slightly higher range',
  },
  {
    element: 'Carbon (C)',
    min: '-',
    max: '0.03',
    notes: 'Low carbon to prevent sensitization',
  },
  {
    element: 'Manganese (Mn)',
    min: '-',
    max: '2.00',
    notes: 'Same as F304',
  },
  {
    element: 'Silicon (Si)',
    min: '-',
    max: '1.00',
    notes: 'Same as F304',
  },
  {
    element: 'Phosphorus (P)',
    min: '-',
    max: '0.045',
    notes: 'Same as F304',
  },
  {
    element: 'Sulfur (S)',
    min: '-',
    max: '0.030',
    notes: 'Same as F304',
  },
  {
    element: 'Molybdenum (Mo)',
    min: '-',
    max: '0.75',
    notes: 'Optional',
  },
];

// F316 Chemical Composition
const f316ChemicalData = [
  {
    element: 'Chromium (Cr)',
    min: '16.0',
    max: '18.0',
    notes: 'Slightly lower than F304',
  },
  {
    element: 'Nickel (Ni)',
    min: '10.0',
    max: '14.0',
    notes: 'Higher nickel content',
  },
  {
    element: 'Molybdenum (Mo)',
    min: '2.0',
    max: '3.0',
    notes: 'Key difference: required, not optional',
  },
  {
    element: 'Carbon (C)',
    min: '-',
    max: '0.08',
    notes: 'Controls carbide precipitation',
  },
  {
    element: 'Manganese (Mn)',
    min: '-',
    max: '2.00',
    notes: 'Strengthening element',
  },
  {
    element: 'Silicon (Si)',
    min: '-',
    max: '1.00',
    notes: 'Deoxidation and strengthening',
  },
  {
    element: 'Phosphorus (P)',
    min: '-',
    max: '0.045',
    notes: 'Impurity kept to minimum',
  },
  {
    element: 'Sulfur (S)',
    min: '-',
    max: '0.030',
    notes: 'Impurity kept to minimum',
  },
];

// Mechanical Properties Comparison
const mechanicalColumns = [
  { key: 'property', label: 'Property', unit: '' },
  { key: 'f304', label: 'F304/F304L', unit: '' },
  { key: 'f316', label: 'F316/F316L', unit: '' },
];

const mechanicalData = [
  {
    property: 'Tensile Strength (min)',
    f304: '70 ksi (485 MPa)',
    f316: '70 ksi (485 MPa)',
  },
  {
    property: 'Yield Strength 0.2% (min)',
    f304: '30 ksi (205 MPa)',
    f316: '30 ksi (205 MPa)',
  },
  {
    property: 'Elongation in 2" (min)',
    f304: '40%',
    f316: '40%',
  },
  {
    property: 'Hardness (max HB)',
    f304: '217 HB',
    f316: '217 HB',
  },
  {
    property: 'Density',
    f304: '8.0 g/cm³',
    f316: '8.0 g/cm³',
  },
  {
    property: 'Elastic Modulus',
    f304: '28,000 ksi',
    f316: '28,000 ksi',
  },
  {
    property: 'Thermal Conductivity (200°C)',
    f304: '16.3 W/m·K',
    f316: '13.4 W/m·K',
  },
  {
    property: 'Melting Range',
    f304: '1400-1450°C',
    f316: '1400-1450°C',
  },
];

// Corrosion Resistance Comparison
const corrosionColumns = [
  { key: 'environment', label: 'Corrosive Environment', unit: '' },
  { key: 'f304', label: 'F304/F304L', unit: '' },
  { key: 'f316', label: 'F316/F316L', unit: '' },
];

const corrosionData = [
  {
    environment: 'Chloride Pitting (seawater)',
    f304: 'Limited resistance',
    f316: 'Excellent resistance (PREN 43)',
  },
  {
    environment: 'Crevice Corrosion (localized)',
    f304: 'Moderate susceptibility',
    f316: 'Superior resistance',
  },
  {
    environment: 'Sulfuric Acid (dilute)',
    f304: 'Good resistance',
    f316: 'Good resistance',
  },
  {
    environment: 'Nitric Acid',
    f304: 'Excellent resistance',
    f316: 'Excellent resistance',
  },
  {
    environment: 'Chlorine & Bleach',
    f304: 'Poor resistance',
    f316: 'Moderate resistance',
  },
  {
    environment: 'Potable Water',
    f304: 'Excellent',
    f316: 'Excellent',
  },
  {
    environment: 'Steam (pure)',
    f304: 'Excellent',
    f316: 'Excellent',
  },
  {
    environment: 'Coastal/Marine',
    f304: 'Not recommended',
    f316: 'Recommended',
  },
  {
    environment: 'Organic Acids',
    f304: 'Good',
    f316: 'Good',
  },
  {
    environment: 'Fertilizer Production',
    f304: 'Poor',
    f316: 'Good',
  },
];

// Temperature Service Table
const temperatureColumns = [
  { key: 'grade', label: 'Grade', unit: '' },
  { key: 'minTemp', label: 'Min Service Temp', unit: '' },
  { key: 'maxTemp', label: 'Max Recommended', unit: '' },
  { key: 'notes', label: 'Notes', unit: '' },
];

const temperatureData = [
  {
    grade: 'F304 / F304L',
    minTemp: '-320°F (-196°C)',
    maxTemp: '800°F (425°C)',
    notes: 'Cryogenic to elevated temp. Avoid 1100-1600°F range (sensitization).',
  },
  {
    grade: 'F316 / F316L',
    minTemp: '-320°F (-196°C)',
    maxTemp: '800°F (425°C)',
    notes: 'Better high-temp stability. Avoid 1100-1600°F range (sensitization).',
  },
  {
    grade: 'All Austenitic (304/316)',
    minTemp: 'To absolute zero',
    maxTemp: '1600°F service design limit',
    notes: 'Austenitic stainless preferred for cryogenic. Sensi. range mitigation via low-C.',
  },
];

// Grade Comparison Table
const gradeComparisonColumns = [
  { key: 'parameter', label: 'Parameter', unit: '' },
  { key: 'f304', label: 'F304', unit: '' },
  { key: 'f304l', label: 'F304L', unit: '' },
  { key: 'f316', label: 'F316', unit: '' },
  { key: 'f316l', label: 'F316L', unit: '' },
];

const gradeComparisonData = [
  {
    parameter: 'Carbon Limit (%)',
    f304: '≤ 0.08',
    f304l: '≤ 0.03',
    f316: '≤ 0.08',
    f316l: '≤ 0.03',
  },
  {
    parameter: 'Molybdenum (%)',
    f304: 'Optional',
    f304l: 'Optional',
    f316: 'Required (2-3%)',
    f316l: 'Required (2-3%)',
  },
  {
    parameter: 'Sensitization Risk',
    f304: 'Moderate',
    f304l: 'Minimal',
    f316: 'Moderate',
    f316l: 'Minimal',
  },
  {
    parameter: 'Corrosion Resistance',
    f304: 'Good general',
    f304l: 'Good general',
    f316: 'Excellent marine',
    f316l: 'Excellent marine',
  },
  {
    parameter: 'Cost Position',
    f304: 'Baseline',
    f304l: '+5-10%',
    f316: '+15-20%',
    f316l: '+20-30%',
  },
  {
    parameter: 'Best Application',
    f304: 'Standard corrosive',
    f304l: 'Welded service',
    f316: 'Seawater/chloride',
    f316l: 'Critical welded',
  },
];

const faqItems = [
  {
    question: 'What is the difference between F304 and F304L?',
    answer:
      'F304L (Low Carbon) has a maximum carbon content of 0.03% vs. 0.08% for F304. The lower carbon content in F304L prevents chromium carbide precipitation in the heat-affected zone during welding, avoiding sensitization and intergranular corrosion. Use F304L for welded applications requiring post-weld corrosion resistance. F304 is sufficient for non-welded or stress-relieved applications.',
  },
  {
    question: 'When should I specify F316 instead of F304?',
    answer:
      'Specify F316 when the application involves exposure to chlorides or seawater. The required molybdenum content (2-3%) in F316 provides superior pitting and crevice corrosion resistance compared to F304. F316 is the industry standard for marine applications, coastal installations, and any service with chloride contamination. F304 is insufficient for these environments.',
  },
  {
    question: 'Are stainless steel flanges truly maintenance-free?',
    answer:
      'Stainless steel requires less maintenance than carbon steel but is not completely maintenance-free. Even 304/316 stainless can corrode in certain aggressive environments, particularly those with high chloride concentrations or stagnant water. Regular cleaning to remove deposits, chlorides, and foreign material is recommended. F316L is preferred over F304 for best corrosion performance in challenging environments.',
  },
  {
    question: 'Why do stainless steel flanges fail despite the "stainless" name?',
    answer:
      'Stainless steel failures typically result from: (1) Chloride-induced pitting (F304 in seawater environment), (2) Sensitization and intergranular corrosion (non-low-carbon grades after welding), (3) Galvanic corrosion with dissimilar metals, (4) Stress corrosion cracking (high chlorides + tensile stress). Proper material selection (F304L or F316L for welding), correct installation, and maintenance prevent these failures.',
  },
  {
    question: 'Can stainless steel flanges be used for potable (drinking) water?',
    answer:
      'Yes, both F304 and F316 stainless steel flanges are NSF-61 certified for potable water service. Stainless steel is preferred for potable water because it does not leach iron or other corrosion products unlike carbon steel. F304L is the standard choice for potable water systems. No coating is required. Always verify NSF certification and material traceability with your supplier.',
  },
];

const gradeUseColumns = [
  { key: 'grade', label: 'Grade', unit: '' },
  { key: 'applications', label: 'Best Applications', unit: '' },
  { key: 'cost', label: 'Relative Cost', unit: '' },
];

const gradeUseData = [
  {
    grade: 'F304',
    applications: 'General industrial, piping, non-welded service',
    cost: 'Baseline',
  },
  {
    grade: 'F304L',
    applications: 'Welded applications, food processing, pharmaceuticals',
    cost: '+5-10%',
  },
  {
    grade: 'F316',
    applications: 'Marine/seawater, chemical plants, high chloride exposure',
    cost: '+15-20%',
  },
  {
    grade: 'F316L',
    applications: 'Welded marine, critical chemical service, subsea',
    cost: '+20-30%',
  },
];

export default function StainlessSteelPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Stainless Steel Flanges"
        subtitle="ASTM A182 F304, F304L, F316, and F316L Austenitic Stainless Flanges. Superior corrosion resistance for marine, chemical, and potable water applications."
        variant="navy"
        breadcrumbs={breadcrumbs}
      />

      {/* Overview Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stainless Steel: Superior Corrosion Resistance
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Stainless steel flanges are engineered for demanding environments where corrosion resistance
              is paramount. The austenitic stainless steels (F304, F316 families) offer excellent
              performance in corrosive chemicals, seawater, potable water, and high-temperature steam service.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The 18% chromium content creates a protective passive oxide layer that resists corrosion,
              while nickel addition (8-14%) ensures austenitic microstructure with excellent toughness.
              Optional molybdenum in F316 grades provides superior pitting and crevice corrosion resistance.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold">
                Key Advantage: Stainless steel eliminates corrosion concerns in marine and chemical
                applications, reduces maintenance, extends service life, and ensures product purity in
                potable and food-grade systems.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Grade Selection */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Grade Selection & Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* F304/F304L */}
            <div className="bg-white p-8 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">F304 & F304L</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">Primary Use</p>
                  <p className="text-gray-700 font-semibold">General industrial and potable water</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">Key Properties</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 18% Chromium, 8-10.5% Nickel</li>
                    <li>• F304L has reduced carbon (max 0.03%)</li>
                    <li>• Austenitic structure (non-magnetic)</li>
                    <li>• Excellent mechanical properties</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">Applications</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Potable water systems</li>
                    <li>• Food & beverage processing</li>
                    <li>• Pharmaceutical equipment</li>
                    <li>• Architectural/decorative</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* F316/F316L */}
            <div className="bg-white p-8 rounded-lg border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">F316 & F316L</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">Primary Use</p>
                  <p className="text-gray-700 font-semibold">Marine and high-chloride exposure</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">Key Properties</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 16-18% Chromium, 10-14% Nickel</li>
                    <li>• 2-3% Molybdenum (required)</li>
                    <li>• F316L has reduced carbon</li>
                    <li>• Superior pitting resistance</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">Applications</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Seawater/marine environments</li>
                    <li>• Chemical processing plants</li>
                    <li>• Pulp & paper mills</li>
                    <li>• Coastal/industrial atmosphere</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Grade Comparison Table */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Grade Comparison</h3>
          <SpecTable columns={gradeComparisonColumns} data={gradeComparisonData} />
        </Container>
      </SectionWrapper>

      {/* Chemical Composition */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Chemical Composition Data
          </h2>

          {/* F304 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">F304 (Standard Carbon)</h3>
            <SpecTable columns={f304ChemicalColumns} data={f304ChemicalData} />
            <p className="text-sm text-gray-600 mt-4">
              F304 is the baseline austenitic stainless. Carbon up to 0.08% is acceptable but can lead to
              carbide precipitation in the heat-affected zone of welds, creating sensitization risk.
            </p>
          </div>

          {/* F304L */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">F304L (Low Carbon - Welded Service)</h3>
            <SpecTable columns={f304ChemicalColumns} data={f304lChemicalData} />
            <p className="text-sm text-gray-600 mt-4">
              F304L limits carbon to 0.03% to prevent sensitization during welding. The low carbon content
              prevents chromium depletion in the heat-affected zone, protecting against intergranular
              corrosion. This is the recommended grade for all welded applications.
            </p>
          </div>

          {/* F316 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">F316 (Molybdenum Enhanced)</h3>
            <SpecTable columns={f304ChemicalColumns} data={f316ChemicalData} />
            <p className="text-sm text-gray-600 mt-4">
              F316 is distinguished by its 2-3% molybdenum content (required, not optional). Molybdenum
              significantly improves pitting and crevice corrosion resistance, particularly in chloride
              environments. F316 is the standard for seawater and chemical plant service.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Mechanical Properties */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Mechanical Properties Comparison
          </h2>

          <SpecTable columns={mechanicalColumns} data={mechanicalData} />

          <div className="mt-8 bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Performance Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Strength Properties</h4>
                <p className="text-gray-700 text-sm">
                  Tensile and yield strengths are identical between F304 and F316 grades. The difference
                  is in corrosion resistance, not base strength. This allows direct substitution based on
                  corrosion requirements without design changes.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Ductility Advantage</h4>
                <p className="text-gray-700 text-sm">
                  40% elongation and high reduction of area indicate excellent ductility, superior to
                  carbon steel. This allows better distribution of stresses and improved performance in
                  dynamic and vibration applications.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Temperature Flexibility</h4>
                <p className="text-gray-700 text-sm">
                  Austenitic stainless maintains properties from cryogenic temperatures to 800°F. Unlike
                  ferrous materials, ductility increases as temperature decreases, eliminating brittle
                  failure risk at low temperature.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Non-Magnetic Property</h4>
                <p className="text-gray-700 text-sm">
                  Both F304 and F316 are non-magnetic in the annealed condition. This is advantageous in
                  applications where magnetic properties could cause issues with nearby instruments or
                  equipment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Corrosion Resistance */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Corrosion Resistance Comparison
          </h2>

          <SpecTable columns={corrosionColumns} data={corrosionData} />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">F304/F304L Best For:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Potable water systems
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Food & beverage processing
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Pharmaceutical equipment
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Pure steam service
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Mild chemical environments
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Cryogenic service
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">F316/F316L Best For:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Seawater & marine
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Chemical plants
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Pulp & paper mills
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Chloride-rich environments
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Subsea applications
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-brass font-bold mt-1">✓</span> Coastal installations
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Temperature Service */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Temperature Service Capabilities
          </h2>

          <SpecTable columns={temperatureColumns} data={temperatureData} />

          <div className="mt-8 bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Temperature Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Cryogenic Service</h4>
                <p className="text-gray-700 text-sm">
                  Austenitic stainless remains tough at temperatures approaching absolute zero. Unlike
                  carbon steel, ductility increases as temperature decreases, making stainless ideal for
                  LNG and cryogenic applications.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Room Temperature</h4>
                <p className="text-gray-700 text-sm">
                  Excellent strength and superior corrosion resistance make stainless the default choice
                  for potable water, food handling, and general industrial piping requiring long service
                  life.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Elevated Temperature</h4>
                <p className="text-gray-700 text-sm">
                  Stainless maintains strength up to 800°F and can be used intermittently to higher
                  temperatures. Avoid sustained 1100-1600°F service due to sensitization risk. Above
                  1600°F, use specialty austenitic or ferritic grades.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Grade Application Guide */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Grade Selection Guide
          </h2>

          <SpecTable columns={gradeUseColumns} data={gradeUseData} />

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Use Each Grade:</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">F304: General Industrial</h4>
                <p className="text-gray-700 mb-3">
                  Use for non-welded applications or applications that will be stress-relieved after
                  welding. Cost-effective baseline for general industrial piping, architectural, and
                  decorative applications.
                </p>
                <p className="text-sm text-gray-600">
                  Example: Indoor potable water piping, steam condensate lines, general piping in neutral
                  environments.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6 py-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">F304L: Welded Applications</h4>
                <p className="text-gray-700 mb-3">
                  Recommended for all welded applications without post-weld stress relief. The low carbon
                  content (max 0.03%) prevents sensitization. Standard in food, pharmaceutical, and
                  semiconductor industries.
                </p>
                <p className="text-sm text-gray-600">
                  Example: Welded food processing equipment, pharmaceutical piping, sanitary applications.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6 py-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">F316: Marine & Chemical</h4>
                <p className="text-gray-700 mb-3">
                  The molybdenum content provides superior pitting resistance. Mandatory for seawater,
                  coastal, and high-chloride exposure. Also suitable for many chemical plant applications
                  with mildly corrosive media.
                </p>
                <p className="text-sm text-gray-600">
                  Example: Seawater piping, offshore platforms, chemical feed lines, chlorine-rich
                  environments.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6 py-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">F316L: Critical Welded Marine</h4>
                <p className="text-gray-700 mb-3">
                  Combines the best properties: molybdenum for pitting resistance plus low carbon for
                  weld-zone toughness. The premium choice for critical applications. Specifies in
                  subsea, chemical plant, and demanding marine service.
                </p>
                <p className="text-sm text-gray-600">
                  Example: Subsea umbilical systems, critical chemical piping, offshore platforms with
                  welded construction.
                </p>
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

      {/* Applications Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Common Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Water Industry',
                icon: '💧',
                items: [
                  'Potable water systems',
                  'Desalination plants',
                  'Water treatment',
                  'Storage tanks',
                  'Distribution networks',
                ],
              },
              {
                title: 'Food & Beverage',
                icon: '🍽️',
                items: [
                  'Dairy processing',
                  'Beverage bottling',
                  'Meat processing',
                  'Sugar refineries',
                  'Brewing equipment',
                ],
              },
              {
                title: 'Chemical & Refining',
                icon: '⚗️',
                items: [
                  'Chemical plants',
                  'Fertilizer production',
                  'Petrochemical',
                  'Refinery piping',
                  'Caustic service',
                ],
              },
              {
                title: 'Marine & Offshore',
                icon: '⛵',
                items: [
                  'Seawater cooling',
                  'Offshore platforms',
                  'Subsea systems',
                  'Desalination',
                  'Cathodic protection',
                ],
              },
              {
                title: 'Power Generation',
                icon: '⚡',
                items: [
                  'Cooling water',
                  'Condensate piping',
                  'High-purity steam',
                  'Boiler feed',
                  'Auxiliary systems',
                ],
              },
              {
                title: 'Pharmaceutical',
                icon: '💊',
                items: [
                  'Process piping',
                  'Purified water',
                  'Sterile systems',
                  'WFI generation',
                  'Clean rooms',
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-400 transition-colors"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-brass font-bold">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-orange-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Stainless Steel Flanges?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our team can recommend the optimal stainless steel grade (F304, F304L, F316, or F316L) for
              your corrosion environment, temperature requirements, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://www.texasflange.com/contact-us" variant="secondary" size="lg" className="border-white text-blue-900">
                Request Quote
              </Button>
              <Button href="https://www.texasflange.com/contact-us" variant="ghost" size="lg" className="text-white hover:text-orange-200">
                Technical Consultation
              </Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
