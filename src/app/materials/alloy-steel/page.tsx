import { type Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import SpecTable from '@/components/ui/SpecTable';
import FAQ from '@/components/ui/FAQ';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Alloy Steel Flanges - F11, F22, F5, F9, F91 Chrome-Moly',
  description:
    'Complete specifications for alloy steel flanges. ASTM A182 F11, F22, F5, F9, F91 chrome-molybdenum grades with mechanical properties for high-temperature and power generation service.',
  keywords: [
    'alloy steel flanges',
    'chrome-moly flanges',
    'ASTM A182 F11',
    'ASTM A182 F22',
    'F91 flanges',
    'high-temperature flanges',
    'power generation',
  ],
  openGraph: {
    title: 'Alloy Steel Flanges - F11, F22, F5, F9, F91',
    description: 'Complete specifications for alloy steel flanges with high-temperature service data.',
    type: 'website',
    url: 'https://www.apiflange.com/materials/alloy-steel',
  },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Materials', href: '/materials' },
  { label: 'Alloy Steel', href: '/materials/alloy-steel' },
];

// Grade Chemical Composition
const chemicalColumns = [
  { key: 'grade', label: 'Grade', unit: '' },
  { key: 'c', label: 'C %', unit: '' },
  { key: 'cr', label: 'Cr %', unit: '' },
  { key: 'mo', label: 'Mo %', unit: '' },
  { key: 'v', label: 'V %', unit: '' },
  { key: 'mn', label: 'Mn %', unit: '' },
];

const chemicalData = [
  {
    grade: 'F11 (1.25Cr-0.5Mo)',
    c: '0.05-0.15',
    cr: '1.0-1.5',
    mo: '0.4-0.65',
    v: '-',
    mn: '0.3-0.6',
  },
  {
    grade: 'F22 (2.25Cr-1Mo)',
    c: '0.05-0.15',
    cr: '2.0-2.5',
    mo: '0.87-1.13',
    v: '-',
    mn: '0.3-0.6',
  },
  {
    grade: 'F5 (5Cr-0.5Mo)',
    c: '0.15 max',
    cr: '4.5-5.5',
    mo: '0.4-0.65',
    v: '-',
    mn: '0.3-0.6',
  },
  {
    grade: 'F9 (9Cr-1Mo)',
    c: '0.07-0.13',
    cr: '8.0-10.0',
    mo: '0.9-1.1',
    v: '0.15-0.25',
    mn: '0.3-0.6',
  },
  {
    grade: 'F91 (9Cr-1MoVNb)',
    c: '0.08-0.12',
    cr: '8.0-9.5',
    mo: '0.85-1.05',
    v: '0.18-0.25',
    mn: '0.3-0.6',
  },
];


// Grade Overview Table
const gradeComparisonColumns = [
  { key: 'grade', label: 'Grade', unit: '' },
  { key: 'composition', label: 'Composition', unit: '' },
  { key: 'tempUse', label: 'Temperature Use', unit: '' },
];

const gradeComparisonData = [
  {
    grade: 'F11',
    composition: '1.25Cr-0.5Mo',
    tempUse: 'Up to 900°F',
  },
  {
    grade: 'F22',
    composition: '2.25Cr-1Mo',
    tempUse: 'Up to 1050°F',
  },
  {
    grade: 'F5',
    composition: '5Cr-0.5Mo',
    tempUse: 'Up to 1100°F',
  },
  {
    grade: 'F9',
    composition: '9Cr-1Mo',
    tempUse: 'Up to 1100°F',
  },
  {
    grade: 'F91',
    composition: '9Cr-1MoVNb',
    tempUse: 'Up to 1100°F',
  },
];

const faqItems = [
  {
    question: 'What is the main advantage of alloy steel over carbon steel?',
    answer:
      'Alloy steel can maintain mechanical properties at much higher temperatures than carbon steel. While ASTM A105 carbon steel is limited to 800°F, alloy steels extend operation to 1100°F+. The chromium and molybdenum additions slow the degradation of strength at elevated temperature, allowing higher pressure ratings at high temperatures. This is essential for power generation, petrochemical, and thermal service applications.',
  },
  {
    question: 'Why is F91 increasingly specified over F22 and F9?',
    answer:
      'F91 (9Cr-1MoVNb) offers several advantages: superior creep resistance compared to F9 and F22, better steam oxidation resistance, lower cost than high-nickel alloys, and ability to maintain higher pressure ratings at 1000°F+. F91 is becoming the new standard for power generation and high-temperature steam service. However, F91 requires controlled heat treatment and welding procedures to avoid brittleness.',
  },
  {
    question: 'Are alloy steel flanges suitable for lower temperatures like ambient?',
    answer:
      'Yes, alloy steel flanges work fine at ambient and lower temperatures. However, they are overspecified from a material standpoint. Carbon steel (A105) is more cost-effective for service below 800°F where temperature is not a limitation. Only specify alloy steel when the operating temperature exceeds 800°F or specific property requirements demand the higher strength of F11, F22, F5, F9, or F91.',
  },
  {
    question: 'What is creep resistance and why does it matter?',
    answer:
      'Creep is permanent deformation that occurs under sustained stress at elevated temperatures. As temperature increases, creep becomes more significant. At 1000°F under constant pressure, a carbon steel flange would deform excessively, while an F91 flange designed for that temperature would maintain dimensional stability. Alloy steels have superior creep resistance due to their chromium-molybdenum alloying, making them essential for sustained high-temperature service.',
  },
  {
    question: 'Are alloy steel flanges used for power generation?',
    answer:
      'Yes, absolutely. Power plants use F11 and F22 flanges extensively in steam systems rated between 850°F and 1050°F. Modern supercritical and ultra-supercritical plants specify F91 flanges for even higher temperature steam (1050°F+). F91 is the future standard as plants seek higher efficiency. All power generation flanges include strict quality control, creep rupture testing, and full compliance with ASME Section VIII and power plant codes.',
  },
];

const gradeProfiles = [
  {
    name: 'F11 (1.25Cr-0.5Mo)',
    description: 'Low-alloy workhorse for moderate elevated temperatures',
    tempRange: 'Up to 900°F continuous',
    applications: [
      'Fossil fuel power plants (steam)',
      'Refinery heater tubes',
      'Boiler superheater piping',
      'Moderate temperature petrochemical',
    ],
    advantages: [
      'Good creep resistance to 900°F',
      'Excellent weldability',
      'Reasonable cost premium',
      'Well-established service history',
    ],
    considerations: [
      'Post-weld heat treatment required',
      'Lower strength than F22',
      'Not suitable above 900°F continuous',
    ],
  },
  {
    name: 'F22 (2.25Cr-1Mo)',
    description: 'Industry standard for elevated temperature steam service',
    tempRange: 'Up to 1050°F continuous',
    applications: [
      'Power generation (fossil and nuclear)',
      'High-pressure steam boilers',
      'Petrochemical reactors',
      'Thermal equipment',
    ],
    advantages: [
      'Excellent long-term creep data',
      'Superior to F11 at high temperatures',
      'Standard specification globally',
      'Well-understood material properties',
    ],
    considerations: [
      'More expensive than F11',
      'Post-weld heat treatment required',
      'Less ductility than lower alloys',
    ],
  },
  {
    name: 'F5 (5Cr-0.5Mo)',
    description: 'Intermediate chromium alloy for extended high-temperature service',
    tempRange: 'Up to 1100°F continuous',
    applications: [
      'Advanced power plant design',
      'High-temperature petrochemical',
      'Industrial thermal equipment',
      'Specialty steam systems',
    ],
    advantages: [
      'Extended temperature capability',
      'Better oxidation resistance',
      'Good creep rupture life',
      'Suitable for 1100°F service',
    ],
    considerations: [
      'Higher cost than F22',
      'Less welding experience than F22',
      'Requires controlled PWHT',
    ],
  },
  {
    name: 'F9 (9Cr-1Mo)',
    description: 'High-chromium martensitic alloy for extreme conditions',
    tempRange: 'Up to 1100°F continuous',
    applications: [
      'Supercritical power plants',
      'Advanced petrochemical reactors',
      'Ultra-high-temperature steam',
      'Specialty industrial thermal service',
    ],
    advantages: [
      'Superior creep resistance',
      'Excellent high-temp strength',
      'Good oxidation resistance',
      'Established in power generation',
    ],
    considerations: [
      'Requires precise heat treatment',
      'More complex welding procedures',
      'Brittleness risk if incorrectly treated',
      'Most expensive of the group',
    ],
  },
  {
    name: 'F91 (9Cr-1MoVNb)',
    description: 'Modern martensitic alloy with vanadium and niobium additions',
    tempRange: 'Up to 1100°F continuous',
    applications: [
      'Next-generation power plants',
      'Ultra-supercritical steam systems',
      'Advanced petrochemical service',
      'Future standard for 1050°F+ service',
    ],
    advantages: [
      'Superior creep to F9 and F22',
      'Excellent steam oxidation resistance',
      'Lower cost than nickel-based alloys',
      'Best choice for future installations',
    ],
    considerations: [
      'Newer material with less legacy data',
      'Requires modern PWHT & welding',
      'Quality control critical',
      'Becoming the new standard globally',
    ],
  },
];

export default function AlloySteelPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Alloy Steel Flanges"
        subtitle="High-temperature chrome-molybdenum alloys (F11, F22, F5, F9, F91). ASTM A182 forgings for power generation, petrochemical, and thermal service up to 1100°F."
        variant="navy"
        breadcrumbs={breadcrumbs}
      />

      {/* Overview Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Alloy Steel: Engineered for Extreme Temperatures
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Alloy steel flanges are precision engineered for demanding applications where elevated
              temperature is a primary design constraint. The chromium and molybdenum additions create a
              material matrix that maintains strength, ductility, and creep resistance at temperatures
              where carbon steel simply cannot perform.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ASTM A182 alloy steel flanges are the backbone of the modern power generation industry,
              providing reliable service in fossil, nuclear, and renewable thermal systems. These materials
              are also extensively used in petrochemical reactors, refineries, and specialty high-temperature
              industrial processes.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold">
                Key Advantage: Alloy steels extend operating temperature from 800°F (carbon steel limit)
                to 1100°F+, enabling higher efficiency power generation, greater throughput in chemical
                processes, and superior reliability in thermal service applications.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Grade Overview */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Alloy Steel Grade Overview
          </h2>

          <SpecTable columns={gradeComparisonColumns} data={gradeComparisonData} />

          <div className="mt-12 p-8 bg-white rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Selection Philosophy</h3>
            <p className="text-gray-700 mb-4">
              Alloy grade selection is driven by operating temperature and required creep life. Use the
              lowest cost alloy that meets your specific temperature requirement. Do not over-specify
              (e.g., do not use F91 if F22 will satisfy the duty). This balances performance with cost
              and leverages the most mature material in the grade family.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Temperature Sweet Spots:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">→</span> F11: 800-900°F range
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">→</span> F22: 900-1050°F range
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">→</span> F91: 1050-1100°F range
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Key Design Inputs:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">•</span> Maximum sustained temperature
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">•</span> Required service life (years)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">•</span> Pressure rating at temperature
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Chemical Composition */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Chemical Composition Data
          </h2>

          <SpecTable columns={chemicalColumns} data={chemicalData} />

          <div className="mt-8 bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Compositional Elements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Chromium (Cr)</h4>
                <p className="text-gray-700 text-sm">
                  Increases oxidation resistance and creep strength. Higher chromium (F91 at 9%) provides
                  superior oxidation in steam environments. All grades contain 1.25% minimum.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Molybdenum (Mo)</h4>
                <p className="text-gray-700 text-sm">
                  Primary solid-solution strengthener. Increases creep rupture resistance dramatically.
                  Higher Mo content (F22 at 1%) extends temperature capability vs. lower content (F11).
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Vanadium (V)</h4>
                <p className="text-gray-700 text-sm">
                  Added to F9 and F91 for precipitation strengthening. Creates fine vanadium carbides that
                  enhance creep resistance. Essential for ultra-high temperature performance.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Niobium (Nb)</h4>
                <p className="text-gray-700 text-sm">
                  Unique to F91, niobium provides additional precipitation hardening. Combined with
                  vanadium, creates superior creep rupture life. Key to F91 advantage over F9.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>




      {/* Detailed Grade Profiles */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Detailed Grade Profiles
          </h2>

          <div className="space-y-8">
            {gradeProfiles.map((grade, index) => (
              <div
                key={index}
                className="border-l-4 border-orange-600 bg-white p-8 rounded-r-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{grade.name}</h3>
                    <p className="text-gray-600">{grade.description}</p>
                  </div>
                  <div className="bg-orange-50 px-4 py-2 rounded text-orange-900 font-bold whitespace-nowrap">
                    {grade.tempRange}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Typical Applications:</h4>
                    <ul className="space-y-2">
                      {grade.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-brass font-bold">→</span> {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Key Advantages:</h4>
                    <ul className="space-y-2">
                      {grade.advantages.map((adv, advIndex) => (
                        <li key={advIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-green-600 font-bold">✓</span> {adv}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-2">
                    <h4 className="font-bold text-gray-900 mb-3">Design Considerations:</h4>
                    <ul className="space-y-2">
                      {grade.considerations.map((cons, consIndex) => (
                        <li key={consIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-amber-600 font-bold">⚠</span> {cons}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Power Generation Applications */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Power Generation Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                type: 'Coal-Fired Plants',
                tempRange: 'Typically 900-1000°F',
                materials: 'F22 (standard), F91 (new builds)',
                description:
                  'Main steam at 900°F uses F22 flanges. Reheater steam at 1000°F requires F22 or F91. Smaller bore auxiliary lines may use F11.',
              },
              {
                type: 'Natural Gas Plants',
                tempRange: 'Typically 1050°F+',
                materials: 'F22, F91',
                description:
                  'Combined cycle plants operate at very high temperatures. F91 increasingly specified for supercritical and ultra-supercritical designs.',
              },
              {
                type: 'Nuclear Plants',
                tempRange: 'Typically 600-700°F',
                materials: 'F11, occasionally F22',
                description:
                  'Despite lower temperatures, nuclear plants often specify alloy steel for long service life assurance and regulatory compliance.',
              },
              {
                type: 'Geothermal Plants',
                tempRange: 'Typically 600-800°F',
                materials: 'F11, F22',
                description:
                  'Smaller capacity systems often use F11. Larger plants use F22. High-temp wells may require F22 or specialty alloys.',
              },
            ].map((plant, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{plant.type}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500 font-semibold">Temperature Range</p>
                    <p className="text-gray-700">{plant.tempRange}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold">Typical Materials</p>
                    <p className="text-gray-700">{plant.materials}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold">Service Details</p>
                    <p className="text-gray-700">{plant.description}</p>
                  </div>
                </div>
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

      {/* Heat Treatment & Welding */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Critical Manufacturing & Installation Considerations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Post-Weld Heat Treatment (PWHT)</h3>
              <p className="text-gray-700 mb-4">
                All alloy steel flanges require post-weld heat treatment (PWHT) after installation welding.
                PWHT relieves residual stresses and restores mechanical properties in the heat-affected zone.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brass">•</span> PWHT prevents brittle failures
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brass">•</span> Required per ASME Section VIII
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brass">•</span> Temperature-dependent per grade
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brass">•</span> Requires certified testing & records
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Welding Procedures</h3>
              <p className="text-gray-700 mb-4">
                Alloy steel flange welding requires qualified procedures, trained welders, and strict
                process control. Improper welding can create brittleness and failure risk.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brass">•</span> Use matching alloy filler metal
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brass">•</span> Control preheat temperature
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brass">•</span> Limit heat input and pass count
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brass">•</span> Cool properly before PWHT
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-orange-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need High-Temperature Alloy Steel Flanges?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our engineering team specializes in alloy steel flange selection for power generation,
              petrochemical, and high-temperature thermal applications. Get detailed specifications,
              pressure ratings at your operating temperature, and manufacturing documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://www.texasflange.com/contact-us/?ref=apiflange-new" variant="secondary" size="lg" className="border-white text-blue-900">
                Request Technical Quote
              </Button>
              <Button href="https://www.texasflange.com/contact-us/?ref=apiflange-new" variant="ghost" size="lg" className="text-white hover:text-orange-200">
                Engineering Support
              </Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
