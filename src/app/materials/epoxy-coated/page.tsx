import { type Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import SpecTable from '@/components/ui/SpecTable';
import FAQ from '@/components/ui/FAQ';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Epoxy Coated Flanges - AWWA C550 FBE Potable Water',
  description:
    'Epoxy coated flanges for potable water and waterworks applications. AWWA C550 Fusion Bonded Epoxy coating with NSF-61 certification, coating specifications, and performance data.',
  keywords: [
    'epoxy coated flanges',
    'FBE coating',
    'AWWA C550',
    'fusion bonded epoxy',
    'potable water',
    'NSF-61',
    'waterworks',
  ],
  openGraph: {
    title: 'Epoxy Coated Flanges - AWWA C550 FBE',
    description: 'Epoxy coated flanges for potable water with NSF-61 certification and performance data.',
    type: 'website',
    url: 'https://www.apiflange.com/materials/epoxy-coated',
  },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Materials', href: '/materials' },
  { label: 'Epoxy Coated', href: '/materials/epoxy-coated' },
];

const specColumns = [
  { key: 'parameter', label: 'Parameter', unit: '' },
  { key: 'requirement', label: 'AWWA C550 Requirement', unit: '' },
  { key: 'typical', label: 'Typical Applied', unit: '' },
  { key: 'notes', label: 'Notes', unit: '' },
];

const specData = [
  {
    parameter: 'Coating Dry Thickness',
    requirement: '125 - 150 mils (3.2-3.8 mm)',
    typical: '140 mils',
    notes: 'Minimum 125 mils at any point',
  },
  {
    parameter: 'Surface Preparation',
    requirement: 'NACE No. 2 (white blast)',
    typical: 'Blast to Sa 2.5 per ISO',
    notes: 'Critical for adhesion; must be completed same day as coating',
  },
  {
    parameter: 'Coating Material',
    requirement: 'Two-part epoxy powder',
    typical: 'Fusion Bonded Epoxy (FBE)',
    notes: 'Powder applied electrostatically, fused in oven',
  },
  {
    parameter: 'Application Temperature',
    requirement: '200-400\u00b0F (93-204\u00b0C)',
    typical: '350\u00b0F',
    notes: 'Oven fusing temperature for polymer flow and adhesion',
  },
  {
    parameter: 'Maximum Service Temperature',
    requirement: '120-140\u00b0F continuous',
    typical: '140\u00b0F',
    notes: 'Exceeding temperature causes coating degradation',
  },
  {
    parameter: 'Minimum Film Thickness',
    requirement: 'No point below 125 mils',
    typical: '125+ mils everywhere',
    notes: 'Measured by gage; cannot be waived',
  },
  {
    parameter: 'Holiday (Defect) Testing',
    requirement: '100% coverage verified',
    typical: 'ASTM D4787 holiday detector',
    notes: 'Any defects must be patched and retested',
  },
  {
    parameter: 'Adhesion Testing',
    requirement: 'No failure per ASTM D3359',
    typical: '5B adhesion rating',
    notes: 'Ensures coating will not peel or delaminate',
  },
];

const performanceColumns = [
  { key: 'property', label: 'Property', unit: '' },
  { key: 'value', label: 'Typical Value', unit: '' },
  { key: 'description', label: 'Description', unit: '' },
];

const performanceData = [
  {
    property: 'Flexibility (Impact)',
    value: '40 in-lbs (ASTM D2794)',
    description: 'Excellent impact resistance; resists dent/deformation',
  },
  {
    property: 'Adhesion to Steel',
    value: '5B (ASTM D3359)',
    description: 'Superior bonding; coating does not peel or delaminate',
  },
  {
    property: 'Salt Spray Resistance',
    value: '>5000 hours (ASTM B117)',
    description: 'Excellent corrosion protection; used in marine standards',
  },
  {
    property: 'Cathodic Disbondment',
    value: '<12.5 mm (ASTM G8)',
    description: 'Minimal zinc migration; safe for cathodic protection',
  },
  {
    property: 'Moisture Absorption',
    value: '<1.5% (ASTM D570)',
    description: 'Low water uptake; maintains properties in wet service',
  },
  {
    property: 'Maximum Service Temp',
    value: '140\u00b0F continuous',
    description: 'Epoxy degrades above 150\u00b0F; not for hot water lines',
  },
  {
    property: 'Thermal Cycling',
    value: 'Excellent (-20\u00b0F to +120\u00b0F)',
    description: 'Maintains flexibility through temperature swings',
  },
];

const comparisonColumns = [
  { key: 'feature', label: 'Feature', unit: '' },
  { key: 'epoxy', label: 'Epoxy Coated (FBE)', unit: '' },
  { key: 'galvanized', label: 'Hot-Dip Galvanized', unit: '' },
  { key: 'bare', label: 'Bare Carbon', unit: '' },
];

const comparisonData = [
  {
    feature: 'Potable Water Approved',
    epoxy: 'Yes - NSF-61',
    galvanized: 'Yes - EPA acceptable',
    bare: 'No - leaches iron',
  },
  {
    feature: 'Service Life (potable)',
    epoxy: '15-25 years',
    galvanized: '30-40 years',
    bare: '5-10 years',
  },
  {
    feature: 'Maximum Temperature',
    epoxy: '140\u00b0F continuous',
    galvanized: '800\u00b0F',
    bare: '800\u00b0F',
  },
  {
    feature: 'Application Complexity',
    epoxy: 'High (precise process)',
    galvanized: 'Moderate (dip bath)',
    bare: 'None',
  },
  {
    feature: 'Cost Premium',
    epoxy: '+20-30% vs bare',
    galvanized: '+15-20% vs bare',
    bare: 'Baseline',
  },
  {
    feature: 'If Coating Damaged',
    epoxy: 'Requires touch-up',
    galvanized: 'Self-heals',
    bare: 'Rusts immediately',
  },
  {
    feature: 'Chemical Resistance',
    epoxy: 'Excellent (NSF-approved)',
    galvanized: 'Good (limited)',
    bare: 'Poor',
  },
  {
    feature: 'Underground Service',
    epoxy: 'Good (if wrapped)',
    galvanized: 'Excellent',
    bare: 'Poor',
  },
];

const applicationColumns = [
  { key: 'application', label: 'Application Type', unit: '' },
  { key: 'suitable', label: 'Suitable?', unit: '' },
  { key: 'notes', label: 'Recommendations', unit: '' },
];

const applicationData = [
  {
    application: 'Potable Water Distribution',
    suitable: 'Yes - Preferred',
    notes: 'NSF-61 certified. Standard for municipal water systems.',
  },
  {
    application: 'Water Treatment Plants',
    suitable: 'Yes',
    notes: 'Good for pH-neutral process water. Check for chemical compatibility.',
  },
  {
    application: 'Hot Water Lines (>120\u00b0F)',
    suitable: 'No - Not Suitable',
    notes: 'Epoxy degrades above 140\u00b0F. Use bare or galvanized for hot water.',
  },
  {
    application: 'Sewage/Wastewater',
    suitable: 'Limited',
    notes: 'Check for H2S, sulfides, or aggressive chemicals. May require special epoxy formulation.',
  },
  {
    application: 'Buried/Underground',
    suitable: 'Conditional',
    notes: 'Must wrap/coat externally. Requires additional protection against soil corrosion.',
  },
  {
    application: 'Chilled Water (Cold)',
    suitable: 'Yes',
    notes: 'Excellent performance in cold water; maintains flexibility.',
  },
  {
    application: 'Industrial Cooling',
    suitable: 'Conditional',
    notes: 'If water quality is controlled and temperature <140\u00b0F, suitable.',
  },
];

const qcColumns = [
  { key: 'test', label: 'Quality Control Test', unit: '' },
  { key: 'standard', label: 'ASTM Standard', unit: '' },
  { key: 'acceptance', label: 'Acceptance Criteria', unit: '' },
  { key: 'frequency', label: 'Testing Frequency', unit: '' },
];

const qcData = [
  {
    test: 'Dry Film Thickness',
    standard: 'ASTM B499 (magnetic gage)',
    acceptance: '125-150 mils (FBE per AWWA C550)',
    frequency: 'Every 2 feet (minimum 5 tests)',
  },
  {
    test: 'Holiday Detection',
    standard: 'ASTM D4787',
    acceptance: '0 defects (100% coverage)',
    frequency: '100% coverage verified',
  },
  {
    test: 'Adhesion',
    standard: 'ASTM D3359 (cross-hatch)',
    acceptance: '5B (no removal)',
    frequency: 'Per batch/lot',
  },
  {
    test: 'Impact Resistance',
    standard: 'ASTM D2794',
    acceptance: '>40 in-lbs',
    frequency: 'Per batch/lot',
  },
  {
    test: 'Salt Spray',
    standard: 'ASTM B117',
    acceptance: '>5000 hours',
    frequency: 'Per epoxy batch',
  },
  {
    test: 'Moisture Absorption',
    standard: 'ASTM D570',
    acceptance: '<1.5%',
    frequency: 'Per epoxy batch',
  },
  {
    test: 'Surface Profile',
    standard: 'ASTM D4417 (replica tape)',
    acceptance: '2-3 mils Ra',
    frequency: 'Before coating',
  },
];

const faqItems = [
  {
    question: 'What is Fusion Bonded Epoxy (FBE) and why is it used for potable water?',
    answer:
      "FBE is a two-part thermosetting epoxy powder applied electrostatically to the steel surface, then fused in an oven at 350\u00b0F. The heat causes the epoxy to flow, wet the steel, and harden into a tough, continuous coating. FBE is used for potable water because it is NSF-61 certified (no toxic leaching), creates a food-safe barrier, and provides excellent corrosion protection. The coating is chemically inert and does not react with potable water even after years of contact.",
  },
  {
    question: 'Is epoxy-coated steel NSF-61 certified for drinking water?',
    answer:
      "Yes, AWWA C550 epoxy-coated steel is NSF-61 certified for potable (drinking) water contact. NSF-61 is the National Sanitation Foundation standard that verifies the coating does not leach harmful substances, maintains water safety, and meets health department requirements. All epoxy-coated flanges should include NSF-61 documentation. This certification distinguishes epoxy-coated flanges from other coatings (like paint) that may not be safe for potable water.",
  },
  {
    question: 'Why is the maximum temperature limit 140\u00b0F for epoxy coatings?',
    answer:
      "Epoxy is a thermosetting polymer that begins to degrade above 140\u00b0F continuous temperature. Heat softens the polymer matrix, reduces adhesion strength, and can cause loss of coating properties. At 150\u00b0F+, the epoxy becomes rubbery and loses its protective barrier function. For applications requiring hot water (above 140\u00b0F), use bare carbon steel, stainless steel, or hot-dip galvanized instead. Do not specify epoxy-coated for hot water lines.",
  },
  {
    question: 'What happens if the epoxy coating is accidentally damaged or scratched?',
    answer:
      "Unlike galvanized coatings that self-heal through zinc corrosion, epoxy is a passive barrier and cannot self-heal. Any damage (scratch, dent, chip) exposes bare steel that will immediately begin to rust. The rust can spread under the coating (undercutting). Damaged flanges must be repaired by field touch-up with compatible epoxy patch material, or the flange must be replaced. This is why proper handling during shipping, storage, and installation is critical.",
  },
  {
    question: 'Can I paint or apply additional coating over an epoxy-coated flange?',
    answer:
      "Generally, no. Additional coatings do not adhere well to the smooth epoxy surface without special preparation. If additional protection is needed, the epoxy must be lightly abraded with sandpaper to provide tooth for the new coating. Consult the coating manufacturer for compatibility. In most cases, the 140-150 mil epoxy coating is sufficient and additional coatings are not necessary or recommended.",
  },
  {
    question: 'What is the difference between NSF-61 potable water and AWWA certifications?',
    answer:
      "NSF-61 (National Sanitation Foundation) is a health/safety certification that verifies the material does not leach harmful substances into drinking water. AWWA C550 is an American Water Works Association specification for the epoxy coating process itself (application, thickness, testing). A properly made AWWA C550 epoxy coating will achieve NSF-61 certification. Always request both certifications for potable water applications. NSF-61 ensures safety; AWWA C550 ensures proper application.",
  },
];

const advantages = [
  {
    title: 'NSF-61 Potable Water Certified',
    description: 'Safe for direct drinking water contact. No toxic leaching. Meets EPA and health department requirements.',
    icon: '\ud83d\udca7',
  },
  {
    title: 'Superior Corrosion Protection',
    description: 'Excellent barrier against water corrosion. Maintains color and appearance. Protects steel indefinitely.',
    icon: '\ud83d\udee1\ufe0f',
  },
  {
    title: 'No Maintenance Required',
    description: 'Once applied and tested, no recoating or touch-up needed (if not damaged). Set and forget.',
    icon: '\u2713',
  },
  {
    title: 'Excellent Salt Spray Resistance',
    description: '5000+ hours in ASTM B117 salt spray testing. Suitable for coastal environments.',
    icon: '\ud83c\udf0a',
  },
  {
    title: 'Clean Appearance',
    description: 'Professional, clean finish. Does not show white patina like galvanizing. Uniform color.',
    icon: '\ud83c\udfa8',
  },
  {
    title: 'Industry Standard',
    description: 'Standard specification for municipal water utilities worldwide. Proven performance over decades.',
    icon: '\ud83d\udccb',
  },
];

export default function EpoxyCoatedPage() {
  return (
    <>
      <PageHero
        title="Epoxy Coated Flanges"
        subtitle="AWWA C550 Fusion Bonded Epoxy coated carbon steel flanges. NSF-61 certified for potable water systems with 15-25 year service life."
        variant="navy"
        breadcrumbs={breadcrumbs}
      />

      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Epoxy Coated Flanges: The Potable Water Standard
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Epoxy-coated flanges are the industry-standard choice for potable (drinking) water systems,
              water treatment plants, and waterworks applications requiring NSF-61 certification. The Fusion
              Bonded Epoxy (FBE) coating per AWWA C550 creates a food-safe, chemically inert barrier that
              protects the carbon steel while ensuring water safety.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unlike uncoated steel (which leaches iron and discolors water) or stainless steel (which is
              more expensive), epoxy-coated flanges provide a cost-effective solution with proven performance
              in municipal and industrial potable water systems worldwide. The 125-150 mil epoxy coating
              provides 15-25 years of protection, with the option to extend service life through proper
              maintenance and environment management.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold">
                Key Advantage: Epoxy-coated steel combines cost efficiency (20-30% less than stainless),
                safety (NSF-61 certified for drinking water), and proven durability (15-25 years). The
                standard choice for municipal water utilities worldwide.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why Epoxy-Coated Flanges for Potable Water?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-400 transition-colors"
              >
                <div className="text-4xl mb-3">{adv.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-gray-700 text-sm">{adv.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            AWWA C550 Coating Specifications
          </h2>
          <SpecTable columns={specColumns} data={specData} />
          <div className="mt-8 bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding the Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Why 125-150 mils thick?</h4>
                <p className="text-gray-700 text-sm">
                  This thickness provides a complete barrier with margin for minor surface variations. 125
                  mils is the minimum acceptable thickness. Thicker coatings provide slightly longer life
                  but at increased cost. 140 mils is a typical target balance.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Surface preparation is critical</h4>
                <p className="text-gray-700 text-sm">
                  NACE No. 2 (white blast) ensures all mill scale, rust, and contaminants are removed.
                  Poor surface prep causes coating adhesion failure. This step must be done immediately
                  before coating to prevent oxidation.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Oven fusing temperature</h4>
                <p className="text-gray-700 text-sm">
                  The epoxy powder is applied cold, then heated to 350&#176;F in an oven. This heat flow causes
                  the powder to reflow, fill pores, and create a continuous film. Temperature control is
                  critical; too low and the coating remains grainy; too high and it yellows.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Holiday testing is mandatory</h4>
                <p className="text-gray-700 text-sm">
                  Holiday detection verifies 100% coating coverage with no defects. Any detected holidays
                  must be patched and retested. This quality control step ensures every flange meets
                  specifications.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Performance Properties
          </h2>
          <SpecTable columns={performanceColumns} data={performanceData} />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strength and Impact</h3>
              <p className="text-gray-700 mb-4">
                The epoxy coating is flexible and impact-resistant. It does not crack or shatter when
                flanges are bumped during handling or installation. This flexibility allows the coating to
                expand and contract with temperature changes without delaminating.
              </p>
              <p className="text-gray-700">
                Adhesion testing (5B rating) confirms the coating will not peel or separate from the steel.
                This is critical for long-term reliability in pressurized water systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Water Safety and Certification</h3>
              <p className="text-gray-700 mb-4">
                NSF-61 certification means the epoxy coating does not leach toxic substances into potable
                water. The coating maintains this safety over the full 15-25 year service life, as verified
                by periodic testing and long-term field data from thousands of installations.
              </p>
              <p className="text-gray-700">
                The coating is FDA-compliant and safe for food and beverage contact applications as well.
                This makes it suitable for the most stringent water system requirements.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            The FBE Coating Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 1: Surface Preparation</h3>
                <p className="text-gray-700 text-sm">
                  Flanges are blast-cleaned to NACE No. 2 (white blast, Sa 2.5) standard. All mill scale,
                  rust, and contaminants are removed. This step is critical for coating adhesion. Must be
                  completed within hours of coating application.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 2: Electrostatic Application</h3>
                <p className="text-gray-700 text-sm">
                  Epoxy powder is applied electrostatically to the clean steel surface. The electrostatic
                  charge causes the powder particles to adhere to the steel, creating a uniform layer.
                  Thickness is controlled by spray parameters and residence time.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 3: Oven Fusing</h3>
                <p className="text-gray-700 text-sm">
                  Coated flanges are placed in an oven heated to 350&#176;F for 10-20 minutes. This heat causes
                  the epoxy powder to melt (fuse), flow, and bond permanently to the steel surface. This
                  creates a hard, continuous, chemically inert coating.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 4: Cooling</h3>
                <p className="text-gray-700 text-sm">
                  Flanges cool in ambient air. The epoxy hardens as it cools, achieving full mechanical
                  properties within 24-48 hours. Care must be taken to avoid water/condensation contact
                  during cooling, which can affect final coating properties.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Step 5: Inspection and Testing</h3>
                <p className="text-gray-700 text-sm">
                  Each flange is inspected for coating thickness (125-150 mils), holiday detection (100%
                  coverage), and adhesion testing. All ASTM tests must pass. Any failures require touch-up
                  and retesting before the flange is approved for shipment.
                </p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg border-l-4 border-gray-600">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-700 text-sm">
                  Complete documentation and traceability accompany each flange, including mill test
                  reports, coating test reports, and NSF-61 certification. All records are maintained per
                  AWWA and industry standards.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Epoxy vs. Other Coating Options
          </h2>
          <SpecTable columns={comparisonColumns} data={comparisonData} />
          <div className="mt-8 bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">When to Specify Each Option</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Specify Epoxy Coated if:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">{"\u2022"}</span> Potable water system
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">{"\u2022"}</span> NSF-61 required
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">{"\u2022"}</span> Water temperature below 140&#176;F
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">{"\u2022"}</span> Cost less than stainless needed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">{"\u2022"}</span> Moderate service life acceptable
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Specify Galvanized if:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">{"\u2022"}</span> Outdoor/atmospheric service
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">{"\u2022"}</span> Longer service life (30-50 yrs)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">{"\u2022"}</span> Temperature above 140&#176;F allowed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">{"\u2022"}</span> Self-healing property needed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">{"\u2022"}</span> Coastal/marine (moderate salt)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Application Guidelines
          </h2>
          <SpecTable columns={applicationColumns} data={applicationData} />
          <div className="mt-8 bg-orange-50 p-8 rounded-lg border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Temperature Limitation Critical</h3>
            <p className="text-gray-700">
              The 140&#176;F continuous temperature limit is NOT arbitrary. Epoxy chemistry degradation accelerates
              significantly above this temperature. At 160&#176;F, coating life drops from 20 years to 5 years.
              For any application with hot water (above 120&#176;F), always verify temperature profile before specifying
              epoxy. Use bare, stainless, or galvanized for hot water lines.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Quality Control and Testing
          </h2>
          <SpecTable columns={qcColumns} data={qcData} />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Testing and Certification</h3>
              <p className="text-gray-700 mb-4">
                Every epoxy-coated flange is tested per ASTM standards before shipment. Mill test reports
                (MTR), coating test reports, and NSF-61 certification accompany each shipment. This
                documentation proves the flange meets all specifications and is safe for potable water contact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Damage Prevention</h3>
              <p className="text-gray-700 mb-4">
                Epoxy coating damage during shipping or installation must be avoided. Damaged areas must be
                repaired immediately with compatible touch-up material. Never allow bare steel to be exposed
                to water without protective coating or it will rust. Proper handling is essential.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <FAQ items={faqItems} title="Frequently Asked Questions" />
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Installation and Maintenance Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Installation</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-1">Careful Handling</p>
                  <p className="text-gray-700 text-sm">
                    Handle coated flanges carefully to avoid striking or scraping the epoxy coating. Any
                    damage exposes bare steel that will rust. Use padding during transport and storage.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Temperature Check</p>
                  <p className="text-gray-700 text-sm">
                    Verify the system design temperature will not exceed 140&#176;F continuously. If it does,
                    epoxy coating is not suitable. Consult with system design engineer.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Welding and Touch-up</p>
                  <p className="text-gray-700 text-sm">
                    If welding is necessary, the weld zone loses epoxy coating. Must touch up with NSF-61
                    compatible epoxy patch material after welding. Allow proper curing per product directions.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maintenance</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-1">Minimal Maintenance</p>
                  <p className="text-gray-700 text-sm">
                    Once installed and pressurized, minimal maintenance is required. The epoxy coating
                    provides continuous protection without degradation in normal water service.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Regular Inspection</p>
                  <p className="text-gray-700 text-sm">
                    Periodically inspect for coating damage (chips, cracks, rust). If damage is found, mark
                    location and plan repair. Touch-up damaged areas promptly.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Avoid Draining</p>
                  <p className="text-gray-700 text-sm">
                    Do not leave flanges empty and exposed to air for extended periods (weeks/months).
                    Stagnant water under the coating can cause localized corrosion. Keep system pressurized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-orange-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need NSF-61 Epoxy-Coated Flanges?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get AWWA C550 epoxy-coated carbon steel flanges with full NSF-61 certification, coating test
              reports, and complete documentation. Perfect for municipal water systems and potable water
              infrastructure.
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
