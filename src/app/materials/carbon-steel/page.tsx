import { type Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import SpecTable from '@/components/ui/SpecTable';
import FAQ from '@/components/ui/FAQ';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Carbon Steel Flanges - ASTM A105 & A350 LF2',
  description:
    'Complete specifications for carbon steel flanges. ASTM A105 chemical composition, mechanical properties, temperature ratings, and A350 LF2 low-temperature variants.',
  keywords: [
    'carbon steel flanges',
    'ASTM A105',
    'ASTM A350 LF2',
    'forged flanges',
    'carbon steel specifications',
    'mechanical properties',
    'flange materials',
  ],
  openGraph: {
    title: 'Carbon Steel Flanges - ASTM A105 & A350 LF2',
    description: 'Complete specifications for carbon steel flanges with ASTM A105 and A350 LF2 data.',
    type: 'website',
    url: 'https://www.apiflange.com/materials/carbon-steel',
  },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Materials', href: '/materials' },
  { label: 'Carbon Steel', href: '/materials/carbon-steel' },
];

// ASTM A105 Chemical Composition
const a105ChemicalColumns = [
  { key: 'element', label: 'Element', unit: '' },
  { key: 'min', label: 'Min', unit: '%' },
  { key: 'max', label: 'Max', unit: '%' },
  { key: 'notes', label: 'Notes', unit: '' },
];

const a105ChemicalData = [
  {
    element: 'Carbon (C)',
    min: '0.30',
    max: '0.35',
    notes: 'Core requirement for strength',
  },
  {
    element: 'Manganese (Mn)',
    min: '0.60',
    max: '1.05',
    notes: 'Improves strength and hardenability',
  },
  {
    element: 'Silicon (Si)',
    min: '0.10',
    max: '0.35',
    notes: 'Enhances strength and deoxidation',
  },
  {
    element: 'Phosphorus (P)',
    min: '-',
    max: '0.035',
    notes: 'Kept low for ductility',
  },
  {
    element: 'Sulfur (S)',
    min: '-',
    max: '0.040',
    notes: 'Controlled for workability',
  },
  {
    element: 'Chromium (Cr)',
    min: '-',
    max: '0.40',
    notes: 'Optional for enhanced hardenability',
  },
  {
    element: 'Molybdenum (Mo)',
    min: '-',
    max: '0.12',
    notes: 'Optional for increased strength',
  },
  {
    element: 'Nickel (Ni)',
    min: '-',
    max: '0.30',
    notes: 'Optional for toughness',
  },
];

// ASTM A105 Mechanical Properties
const a105MechanicalColumns = [
  { key: 'property', label: 'Property', unit: '' },
  { key: 'value', label: 'Value', unit: '' },
  { key: 'astmMin', label: 'ASTM Minimum', unit: '' },
  { key: 'notes', label: 'Notes', unit: '' },
];

const a105MechanicalData = [
  {
    property: 'Tensile Strength',
    value: '70 - 100 ksi',
    astmMin: '70 ksi (485 MPa)',
    notes: 'Ultimate tensile strength requirement',
  },
  {
    property: 'Yield Strength (0.2% offset)',
    value: '36 ksi typical',
    astmMin: '36 ksi (250 MPa)',
    notes: 'Minimum proof strength',
  },
  {
    property: 'Elongation in 2 inches',
    value: '22% - 35%',
    astmMin: '22%',
    notes: 'Measures ductility at room temperature',
  },
  {
    property: 'Reduction of Area',
    value: '40% - 60%',
    astmMin: '40%',
    notes: 'Cross-sectional reduction during tension test',
  },
  {
    property: 'Modulus of Elasticity',
    value: '30,000 ksi',
    astmMin: '-',
    notes: 'Stiffness at room temperature',
  },
  {
    property: 'Poisson\'s Ratio',
    value: '0.27 - 0.30',
    astmMin: '-',
    notes: 'Lateral strain ratio',
  },
];

// ASTM A350 LF2 Chemical Composition
const a350ChemicalColumns = [
  { key: 'element', label: 'Element', unit: '' },
  { key: 'min', label: 'Min', unit: '%' },
  { key: 'max', label: 'Max', unit: '%' },
  { key: 'notes', label: 'Notes', unit: '' },
];

const a350ChemicalData = [
  {
    element: 'Carbon (C)',
    min: '0.24',
    max: '0.35',
    notes: 'Lower carbon for improved toughness',
  },
  {
    element: 'Manganese (Mn)',
    min: '0.70',
    max: '1.15',
    notes: 'Higher manganese for low-temperature toughness',
  },
  {
    element: 'Silicon (Si)',
    min: '0.15',
    max: '0.40',
    notes: 'Deoxidation and strength',
  },
  {
    element: 'Phosphorus (P)',
    min: '-',
    max: '0.025',
    notes: 'Stricter control than A105',
  },
  {
    element: 'Sulfur (S)',
    min: '-',
    max: '0.025',
    notes: 'Stricter control than A105',
  },
  {
    element: 'Nickel (Ni)',
    min: '0.40',
    max: '0.80',
    notes: 'Required for low-temperature toughness',
  },
  {
    element: 'Molybdenum (Mo)',
    min: '0.15',
    max: '0.30',
    notes: 'Required for strength and toughness',
  },
  {
    element: 'Aluminum (Al)',
    min: '-',
    max: '0.04',
    notes: 'Deoxidation element',
  },
];

// ASTM A350 LF2 Mechanical Properties
const a350MechanicalData = [
  {
    property: 'Tensile Strength',
    value: '70 - 100 ksi',
    astmMin: '70 ksi (485 MPa)',
    notes: 'Same as A105',
  },
  {
    property: 'Yield Strength (0.2% offset)',
    value: '40 ksi typical',
    astmMin: '40 ksi (275 MPa)',
    notes: 'Slightly higher than A105',
  },
  {
    property: 'Elongation in 2 inches',
    value: '24% - 35%',
    astmMin: '24%',
    notes: 'Improved ductility for low-temp service',
  },
  {
    property: 'Charpy Impact (-50°F)',
    value: '15 ft-lbs minimum',
    astmMin: '15 ft-lbs',
    notes: 'Critical for cryogenic applications',
  },
  {
    property: 'Notch Toughness',
    value: 'Excellent',
    astmMin: '-',
    notes: 'Superior to A105 at low temperatures',
  },
  {
    property: 'Service Temperature Limit',
    value: 'Down to -50°F',
    astmMin: '-',
    notes: 'Rated for cryogenic service',
  },
];

// Comparison Table
const comparisonColumns = [
  { key: 'feature', label: 'Feature', unit: '' },
  { key: 'a105', label: 'ASTM A105', unit: '' },
  { key: 'a350lf2', label: 'ASTM A350 LF2', unit: '' },
];

const comparisonData = [
  {
    feature: 'Carbon Content',
    a105: '0.30-0.35%',
    a350lf2: '0.24-0.35%',
  },
  {
    feature: 'Manganese Content',
    a105: '0.60-1.05%',
    a350lf2: '0.70-1.15%',
  },
  {
    feature: 'Nickel Content',
    a105: 'Optional (max 0.30%)',
    a350lf2: 'Required (0.40-0.80%)',
  },
  {
    feature: 'Molybdenum Content',
    a105: 'Optional (max 0.12%)',
    a350lf2: 'Required (0.15-0.30%)',
  },
  {
    feature: 'Phosphorus Maximum',
    a105: '0.035%',
    a350lf2: '0.025% (stricter)',
  },
  {
    feature: 'Sulfur Maximum',
    a105: '0.040%',
    a350lf2: '0.025% (stricter)',
  },
  {
    feature: 'Tensile Strength',
    a105: '70-100 ksi',
    a350lf2: '70-100 ksi',
  },
  {
    feature: 'Yield Strength',
    a105: '36 ksi min',
    a350lf2: '40 ksi min',
  },
  {
    feature: 'Min Service Temp',
    a105: '-20°F (ambient)',
    a350lf2: '-50°F (cryogenic)',
  },
  {
    feature: 'Charpy Impact Testing',
    a105: 'Not required',
    a350lf2: 'Required at -50°F',
  },
  {
    feature: 'Primary Application',
    a105: 'General purpose up to 800°F',
    a350lf2: 'Low-temperature/cryogenic service',
  },
  {
    feature: 'Cost Position',
    a105: 'Standard (baseline)',
    a350lf2: '10-15% premium',
  },
];

// Temperature Service Table
const temperatureColumns = [
  { key: 'range', label: 'Temperature Range', unit: '' },
  { key: 'description', label: 'Service Application', unit: '' },
  { key: 'material', label: 'Recommended Material', unit: '' },
];

const temperatureData = [
  {
    range: '-325°F to -50°F',
    description: 'Cryogenic (LNG, liquid nitrogen)',
    material: 'ASTM A350 LF2 (required)',
  },
  {
    range: '-50°F to 0°F',
    description: 'Low-temperature (arctic, refrigeration)',
    material: 'ASTM A350 LF2 or ASTM A105',
  },
  {
    range: '0°F to 70°F',
    description: 'Room temperature (standard conditions)',
    material: 'ASTM A105 (standard)',
  },
  {
    range: '70°F to 300°F',
    description: 'Moderate elevated (steam, hot water)',
    material: 'ASTM A105 (standard)',
  },
  {
    range: '300°F to 600°F',
    description: 'High temperature (steam piping)',
    material: 'ASTM A105 (standard)',
  },
  {
    range: '600°F to 800°F',
    description: 'Very high temperature (thermal service)',
    material: 'ASTM A105 (limit)',
  },
  {
    range: 'Above 800°F',
    description: 'Extreme temperature applications',
    material: 'Alloy Steel (F11, F22, F91)',
  },
];

// Coating Options
const coatingOptions = [
  {
    name: 'Bare (No Coating)',
    standard: 'ASTM A105',
    use: 'Indoor, neutral environments',
    life: '5-10 years outdoor',
    cost: 'Baseline',
  },
  {
    name: 'Hot-Dip Galvanized',
    standard: 'ASTM A153',
    use: 'Outdoor, waterworks, moderate corrosion',
    life: '20-50 years outdoor',
    cost: '+15-20%',
  },
  {
    name: 'Zinc Plated',
    standard: 'ASTM B633',
    use: 'Indoor light corrosion protection',
    life: '3-7 years',
    cost: '+5-10%',
  },
  {
    name: 'Epoxy Coated (FBE)',
    standard: 'AWWA C550',
    use: 'Potable water, waterworks',
    life: '15-25 years',
    cost: '+20-30%',
  },
];

// Flange Types Available
const flangeTypes = [
  {
    name: 'Slip-On (SO)',
    description: 'Pipe passes through flange, requires fillet welds on both sides',
    pressure: 'Standard ratings',
  },
  {
    name: 'Weld Neck (WN)',
    description: 'Long hub with taper, ideal for higher pressures and temperatures',
    pressure: 'Full pressure rating',
  },
  {
    name: 'Threaded (NPT)',
    description: 'Internal NPT threads, no welding required',
    pressure: 'Lower pressure applications',
  },
  {
    name: 'Socket Weld (SW)',
    description: 'Socket for pipe insertion, fillet weld applied externally',
    pressure: 'Small bore high-pressure',
  },
  {
    name: 'Lap Joint (LJ)',
    description: 'Rotating on stub end, economical for frequent disconnection',
    pressure: 'Standard ratings',
  },
  {
    name: 'Blind (BL)',
    description: 'No center hole, used to close off pipe ends',
    pressure: 'Full pressure rating',
  },
];

// FAQ Items
const faqItems = [
  {
    question: 'What is the difference between ASTM A105 and A350 LF2?',
    answer:
      'ASTM A105 is the standard carbon steel specification for ambient and elevated temperature applications up to 800°F. ASTM A350 LF2 is specifically designed for low-temperature and cryogenic service down to -50°F. The key differences are higher nickel and molybdenum content in A350, stricter impurity limits (P and S), and mandatory Charpy impact testing at -50°F. A105 is more economical while A350 LF2 provides superior toughness at low temperatures.',
  },
  {
    question: 'Can I use ASTM A105 for cold weather applications?',
    answer:
      'ASTM A105 is generally suitable down to -20°F in most applications. For temperatures below -20°F, impact testing becomes critical due to brittle failure risk. For service below -20°F, ASTM A350 LF2 is recommended as it includes mandatory Charpy impact testing at -50°F and contains nickel and molybdenum for enhanced low-temperature toughness. Always consult ASME B16.5 or API standards for your specific pressure class and temperature combination.',
  },
  {
    question: 'What is the maximum operating pressure for carbon steel flanges?',
    answer:
      'Carbon steel flange pressure ratings depend on the ASME B16.5 class (150, 300, 600, 900, 1500, 2500 lbs) and operating temperature. A 600-class carbon steel flange rated at 100°F handles 600 psig, but this decreases with temperature. At 600°F, the same flange might only be rated for 400 psig due to reduced material strength at elevated temperature. Always refer to ASME B16.5 tables for your specific pressure class and operating temperature.',
  },
  {
    question: 'Are carbon steel flanges suitable for seawater or corrosive fluids?',
    answer:
      'Bare carbon steel has poor corrosion resistance in seawater or acidic environments and will corrode rapidly. For marine or highly corrosive service, consider: (1) Stainless steel (F304L or F316L), (2) Duplex/super duplex grades, or (3) Carbon steel with corrosion-resistant coatings (hot-dip galvanizing or epoxy). For moderate outdoor exposure, hot-dip galvanized carbon steel (ASTM A153) provides 20-50 years of protection.',
  },
  {
    question: 'What certifications and traceability can you provide with carbon steel flanges?',
    answer:
      'All our carbon steel flanges include full ASTM A105 or A350 LF2 certification with mill test reports (MTR) showing actual chemical composition and mechanical test results. We provide 3.1 Certificates of Conformance, material traceability codes, and full compliance with ASME B16.5, API 6D, and pressure vessel codes. Optional third-party inspection (AWS, TÜV, etc.) and NACE certification available upon request.',
  },
];

export default function CarbonSteelPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Carbon Steel Flanges"
        subtitle="ASTM A105 and A350 LF2 Forged Flanges. Industry-standard material for general purpose and low-temperature applications from ambient to 800°F."
        variant="navy"
        breadcrumbs={breadcrumbs}
      />

      {/* Overview Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Carbon Steel: The Industry Standard
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Carbon steel flanges are the most widely used flange material in the global industry,
              providing an optimal balance of mechanical properties, cost-effectiveness, and versatility.
              ASTM A105 carbon steel is the default material specification in most engineering codes
              and standards, including ASME B16.5, API 6D, and AWWA.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our carbon steel flanges are forged from premium steel stock and heat-treated to ensure
              consistent mechanical properties. All flanges include full material traceability, mill test
              reports (MTR), and compliance with ASTM, ASME, and API standards.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold">
                Key Advantage: Carbon steel combines proven reliability, broad availability, competitive
                pricing, and excellent engineering support. Perfect for 95% of general industrial applications.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ASTM A105 Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              ASTM A105 - Carbon Steel Forgings
            </h2>
            <p className="text-lg text-gray-600">
              Standard specification for room temperature and elevated temperature service applications
            </p>
          </div>

          {/* Chemical Composition */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Chemical Composition (%)</h3>
            <SpecTable columns={a105ChemicalColumns} data={a105ChemicalData} />
            <p className="text-sm text-gray-600 mt-4">
              All values are weight percentages. Chemical composition is verified by ladle analysis and
              checked by composition testing. Target: 0.32% C, 0.80% Mn for optimal balance of strength and
              workability.
            </p>
          </div>

          {/* Mechanical Properties */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mechanical Properties</h3>
            <SpecTable columns={a105MechanicalColumns} data={a105MechanicalData} />
            <p className="text-sm text-gray-600 mt-4">
              All values are minimum unless noted. Properties verified by tensile testing and reduction of
              area testing per ASTM E8. Elongation measured in 2-inch gage length.
            </p>
          </div>

          {/* Temperature Service */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Temperature Service Range</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg flex-shrink-0">
                  <div className="text-4xl font-bold text-brass">-20°F</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Minimum</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Low Temperature Limit</h4>
                  <p className="text-gray-700">
                    ASTM A105 can be safely used down to -20°F in most applications. Below -20°F,
                    the material becomes more brittle and impact testing is recommended. For temperatures
                    below -20°F, use ASTM A350 LF2.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-lg flex-shrink-0">
                  <div className="text-4xl font-bold text-brass">800°F</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Maximum</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">High Temperature Limit</h4>
                  <p className="text-gray-700">
                    ASTM A105 is suitable for continuous service up to 800°F. Above 800°F, material
                    strength decreases significantly and alloy steels (F11, F22, F91) are recommended.
                    Pressure derated above 600°F per ASME Section VIII.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg flex-shrink-0">
                  <div className="text-2xl font-bold text-green-600 mt-2">ASME B16.5</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Standard</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Pressure Rating Derating</h4>
                  <p className="text-gray-700">
                    ASME B16.5 provides pressure vs. temperature derating tables. At 68°F, a Class 600
                    flange is rated 600 psig. At 400°F, the rating reduces to ~540 psig. At 600°F,
                    the rating is ~420 psig. Always consult ASME tables for your exact conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ASTM A350 LF2 Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              ASTM A350 LF2 - Low Temperature Forgings
            </h2>
            <p className="text-lg text-gray-600">
              Premium specification for cryogenic and low-temperature service down to -50°F
            </p>
          </div>

          {/* Chemical Composition */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Chemical Composition (%)</h3>
            <SpecTable columns={a350ChemicalColumns} data={a350ChemicalData} />
            <p className="text-sm text-gray-600 mt-4">
              Note the higher nickel (0.40-0.80%) and molybdenum (0.15-0.30%) content compared to A105.
              Stricter impurity limits (P and S) ensure superior low-temperature toughness. Aluminum
              required for controlled deoxidation.
            </p>
          </div>

          {/* Mechanical Properties */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mechanical Properties</h3>
            <SpecTable columns={a105MechanicalColumns} data={a350MechanicalData} />
            <p className="text-sm text-gray-600 mt-4">
              ASTM A350 LF2 requires Charpy V-notch impact testing at -50°F with a minimum of 15 ft-lbs.
              This ensures the material maintains toughness at cryogenic temperatures. Elongation and
              reduction of area are measured at room temperature.
            </p>
          </div>

          {/* LF2 Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Primary Applications</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-brass font-bold">•</span> LNG (Liquified Natural Gas)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brass font-bold">•</span> Liquid Nitrogen Service
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brass font-bold">•</span> Cryogenic Ethylene
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brass font-bold">•</span> Refrigeration Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brass font-bold">•</span> Arctic Pipelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brass font-bold">•</span> Hydrogen Service
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why A350 LF2?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span>Proven toughness at extreme low temperatures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span>Mandatory Charpy impact testing for quality assurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span>Meets API 579 and other cryogenic standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span>Industry-standard for LNG facilities worldwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span>Superior ductility prevents brittle fracture</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Comparison Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            A105 vs A350 LF2 Comparison
          </h2>
          <SpecTable columns={comparisonColumns} data={comparisonData} />
          <div className="mt-8 bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Selection Guidance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Use ASTM A105 if:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Service temperature is above -20°F</li>
                  <li>• Operating up to 800°F</li>
                  <li>• Cost is a primary consideration</li>
                  <li>• General industrial/commercial applications</li>
                  <li>• Standard pressure vessel service</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Use ASTM A350 LF2 if:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Service temperature below -20°F</li>
                  <li>• Cryogenic service (-50°F or lower)</li>
                  <li>• LNG or cryogenic gas handling</li>
                  <li>• Arctic/cold climate operation</li>
                  <li>• Impact testing or charpy requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Temperature Service Chart */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Temperature Service Guide
          </h2>
          <SpecTable columns={temperatureColumns} data={temperatureData} />
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-800">
              <span className="font-bold text-gray-900">Temperature Selection Note:</span> These are general
              guidelines. Specific temperature limits may vary based on: (1) ASME B16.5 pressure class,
              (2) system pressure, (3) fluid chemistry, (4) system design codes. Always consult applicable
              standards and engineering specifications for your exact application.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Coating Options */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Protective Coating Options
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Carbon steel flanges can be protected with various coatings for enhanced corrosion resistance
            in outdoor, marine, or potable water applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coatingOptions.map((coating, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{coating.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500 font-semibold">Standard</p>
                    <p className="text-gray-700">{coating.standard}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold">Applications</p>
                    <p className="text-gray-700">{coating.use}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold">Service Life</p>
                    <p className="text-gray-700">{coating.life}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold">Cost Premium</p>
                    <p className="text-brass font-bold">{coating.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Flange Types Available */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Available Flange Types
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Carbon steel is available in all ASME B16.5 flange types for maximum design flexibility:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flangeTypes.map((flange, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{flange.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{flange.description}</p>
                <div className="bg-blue-50 px-3 py-2 rounded text-sm text-blue-900 font-semibold">
                  {flange.pressure}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Common Applications */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Common Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Water & Wastewater',
                items: [
                  'Potable water systems',
                  'Wastewater treatment',
                  'Desalination plants',
                  'Water main connections',
                ],
              },
              {
                title: 'Oil & Gas',
                items: [
                  'Onshore pipelines',
                  'Gathering systems',
                  'Crude oil transport',
                  'Natural gas piping',
                ],
              },
              {
                title: 'HVAC & Utilities',
                items: [
                  'Steam distribution',
                  'Hot water lines',
                  'Chilled water systems',
                  'Compressed air',
                ],
              },
              {
                title: 'Chemical Processing',
                items: [
                  'General chemical plants',
                  'Neutral fluid service',
                  'Temperature-controlled lines',
                  'Industrial piping',
                ],
              },
              {
                title: 'Power Generation',
                items: [
                  'Low-pressure steam',
                  'Condensate piping',
                  'Circulating water',
                  'Auxiliary systems',
                ],
              },
              {
                title: 'Food & Beverage',
                items: [
                  'Water lines',
                  'Process piping',
                  'Steam condensate',
                  'Utility connections',
                ],
              },
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
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

      {/* FAQ Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <FAQ items={faqItems} title="Frequently Asked Questions" />
        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-orange-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Specify Carbon Steel Flanges?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our engineering team can help you select the right grade (A105 or A350 LF2), flange type,
              and coating for your application. Get a quick quote or technical recommendation.
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
