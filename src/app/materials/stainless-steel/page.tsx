import { type Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Container from '@/components/layout/Container';
import FAQ from '@/components/ui/FAQ';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'AISI 410ss Stainless Steel Flanges - API Grade F6a',
  description:
    'Martensitic stainless steel flanges for API applications. ASTM A182 F6a (410ss) specifications, mechanical properties, heat treatment, and welding guidance for oil & gas, valves, and high-strength applications.',
  keywords: [
    '410ss stainless steel',
    'ASTM A182 F6a',
    'martensitic stainless',
    'API flanges',
    'heat-treated stainless steel',
    'high-strength stainless',
  ],
  openGraph: {
    title: 'AISI 410ss Stainless Steel Flanges - API Grade F6a',
    description: 'ASTM A182 F6a (410ss) martensitic stainless steel flanges for oil & gas and industrial applications.',
    type: 'website',
    url: 'https://www.apiflange.com/materials/stainless-steel',
  },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Materials', href: '/materials' },
  { label: 'Stainless Steel', href: '/materials/stainless-steel' },
];

const faqItems = [
  {
    question: 'What is ASTM A182 F6a and how does it relate to 410ss?',
    answer:
      'ASTM A182 F6a is the flange specification for 410ss (AISI 410) martensitic stainless steel. The "F6a" designation indicates the material meets flange-specific requirements while maintaining the core 410ss composition and properties. F6a is commonly used for API flanges in oil and gas service where strength and hardness are critical.',
  },
  {
    question: 'Can 410ss be heat-treated, and what properties result?',
    answer:
      'Yes, 410ss is one of the few stainless grades that responds well to heat treatment. When properly heat-treated (hardened), it can achieve hardness around 45 HRC and tensile strengths exceeding 1900 MPa. This makes it far stronger and harder than austenitic stainless steels like 304 or 316. The heat-treatment response is what makes 410ss attractive for valve stems, pump impellers, and other high-stress components.',
  },
  {
    question: 'Why is welding 410ss more difficult than welding 304 or 316?',
    answer:
      'Martensitic stainless steels like 410ss are more prone to hydrogen cracking and brittleness in the heat-affected zone because the same transformation that gives them strength also occurs during welding. Preheating (typically 200-300°C) and slow cooling are mandatory. Post-weld heat treatment (PWHT) is strongly recommended to relieve residual stress and restore toughness and avoid cracking.',
  },
  {
    question: 'Is 410ss suitable for seawater or highly corrosive environments?',
    answer:
      'No. 410ss has moderate corrosion resistance and is not recommended for seawater, high-chloride service, or harsh chemical exposure. Its corrosion performance is adequate for mildly corrosive, chloride-free environments and oxidizing conditions up to about 600°C. For seawater and marine applications, 316 or higher-alloy stainless steels are the correct choice.',
  },
];


export default function StainlessSteelPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="AISI 410ss - Stainless for API Flanges"
        subtitle="ASTM A182 F6a martensitic stainless steel. Heat-treatable, magnetic, and engineered for strength and hardness in oil and gas, valves, and high-performance applications."
        variant="navy"
        breadcrumbs={breadcrumbs}
      />

      {/* Overview Section */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              410ss: The Baseline Martensitic Stainless
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              410 stainless is the baseline for martensitic stainless steels. Known in ASME as A182 F6a, it is what you reach for when you need solid corrosion resistance and real strength and hardness. Unlike common stainless grades like 304 or 316, 410 is magnetic and can be heat-treated, so it behaves a lot more like carbon steel or low-alloy steel in that respect.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The defining characteristic of 410ss is its response to heat treatment. In the annealed condition, it is relatively soft and easy to machine. Once hardened, it achieves hardness levels around 45 HRC and tensile strengths far exceeding what austenitic stainless steels can deliver. This combination of strength, hardness, and moderate corrosion resistance makes 410ss the go-to material for demanding mechanical applications where toughness and ductility are secondary concerns.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-800 font-semibold">
                Key Advantage: Heat-treatability delivers exceptional strength and hardness alongside moderate corrosion resistance, making 410ss ideal for valves, pump components, and turbine hardware where mechanical performance is critical.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Chemical Composition */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Chemical Composition
          </h2>

          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              410 contains about 11.5% chromium, which is just enough to qualify as stainless. That chromium gives it corrosion resistance, but it is definitely on the low end compared to the 300-series austenitic steels. The balance of the composition supports the martensitic structure and hardenability that makes 410 unique among stainless steels.
            </p>

            <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-6">
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Chromium (Cr): 11.5-13.5%</h4>
                <p className="text-gray-700">Primary element providing the stainless characteristic and corrosion resistance. At 11.5%, it is the minimum to achieve passive film protection, but lower than austenitic 300-series grades (16 -18%).</p>
              </div>

              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Carbon (C): typically 0.08 -0.13%</h4>
                <p className="text-gray-700">Controls hardness and strength. Higher carbon enables greater hardness response to heat treatment. In annealed condition, lower carbon increases ductility; in hardened condition, carbon is essential for achieving target hardness around 45 HRC.</p>
              </div>

              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Manganese (Mn): typically 1.0% max</h4>
                <p className="text-gray-700">Strengthening element that also aids in deoxidation and hardenability during heat treatment.</p>
              </div>

              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Silicon (Si): typically 1.0% max</h4>
                <p className="text-gray-700">Deoxidizer and mild strengthening agent. Modest additions support oxidation resistance at elevated temperature.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Nickel (Ni): minimal or none</h4>
                <p className="text-gray-700">Unlike austenitic grades, 410 contains little to no nickel. Nickel promotes austenitic structure; the absence of nickel in 410 is what allows the martensitic structure that responds to heat treatment.</p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Strength and Hardness */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Strength and Hardness
          </h2>

          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is really where 410 shines. Once heat-treated, it can hit hardness levels around 45 HRC and tensile strengths far exceeding what you can get from austenitic stainless steels. In the annealed condition, though, it is much softer and easier to machine, so whether it is heat-treated or not makes a big difference depending on how it is being used.
            </p>

            <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-6">
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">ASTM A182 F6a Flange Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li> - Tensile Strength: 70 ksi (485 MPa) minimum per Class 1</li>
                  <li> - Yield Strength: 40 ksi (275 MPa) minimum per Class 1</li>
                  <li> - Elongation: 20% minimum</li>
                  <li> - Hardness: 217 HBW maximum (for flanges in the normalized and tempered condition)</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">These are the ASTM A182 F6a Class 1 requirements for flanges. 410ss is capable of higher hardness when hardened for non-flange applications (valve stems, pump parts), but flanges are supplied in the normalized and tempered condition per specification.</p>
              </div>

              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Annealed Condition</h4>
                <ul className="space-y-2 text-gray-700">
                  <li> - Hardness: 217 HBW max</li>
                  <li> - Tensile Strength: 65-90 ksi typical</li>
                  <li> - Yield Strength: 40-55 ksi typical</li>
                  <li> - Elongation: 20%+ (good machinability)</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">Annealed 410ss is easier to machine and weld. This is the typical supply condition for flanges.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Comparison to Austenitic 304/316</h4>
                <p className="text-gray-700">304 and 316 austenitic stainless steels are non-magnetic and non-heat-treatable, with tensile strength around 70 ksi and yield around 30 ksi. 410ss offers higher strength potential through heat treatment, making it the choice when mechanical strength is a priority alongside moderate corrosion resistance.</p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Corrosion Resistance */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Corrosion Resistance
          </h2>

          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Call it moderate. 410ss holds up fine in mildly corrosive, chloride-free environments and does well in oxidizing conditions up to about 600 degrees C. But it is not meant for seawater, high-chloride service, or harsh chemical exposure. If that is your world, you are better off with 316 or a higher-alloy grade.
            </p>

            <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-6">
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Where 410ss Performs Well</h4>
                <ul className="space-y-2 text-gray-700">
                  <li> - Mild industrial environments (neutral pH, low contamination)</li>
                  <li> - Oxidizing service (where chromium passivation is strong)</li>
                  <li> - Dry or low-humidity conditions</li>
                  <li> - Potable water systems (when chloride levels are controlled)</li>
                  <li> - Steam and condensate service (non-corrosive steam)</li>
                  <li> - Air at temperatures up to 600°C</li>
                </ul>
              </div>

              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Where 410ss is NOT Recommended</h4>
                <ul className="space-y-2 text-gray-700">
                  <li> - Seawater or high-chloride exposure</li>
                  <li> - Acidic or sulfurous environments (without molybdenum)</li>
                  <li> - High-temperature chloride service</li>
                  <li> - Harsh chemical processing (caustic, strong acids)</li>
                  <li> - Subsea or immersed conditions</li>
                  <li> - Food processing with salt or citric acid</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Magnetic Property</h4>
                <p className="text-gray-700">Unlike 304 and 316 (which are non-magnetic), 410ss is magnetic in both the annealed and hardened conditions. This can be advantageous in applications where magnetic identification or magnetic coupling is useful, but it must be considered in sensitive measurement or instrumentation environments.</p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Welding */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Welding
          </h2>

          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              410 can be welded properly, but it takes some care. Preheating is a must. Martensitic stainless steels are the trickiest stainless grades to weld because the same metallurgical changes that give them strength also show up in the heat-affected zone. When possible, post-weld heat treatment is strongly recommended to avoid cracking and brittleness.
            </p>

            <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-6">
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Preheat Requirements</h4>
                <p className="text-gray-700 mb-3">Preheating is mandatory. Typical preheat temperatures are 200-300°C (depending on section thickness and carbon content). The purpose is to reduce the cooling rate and reduce the hardness and brittleness that would otherwise develop in the heat-affected zone.</p>
              </div>

              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Filler Metal Selection</h4>
                <p className="text-gray-700">Use a matched or slightly lower-carbon filler (such as E410 or E410 NiMo electrodes, or ER410 wire). Never use austenitic fillers (304, 316) unless specifically required by design, as they create a two-phase microstructure with unpredictable properties.</p>
              </div>

              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Cooling and PWHT</h4>
                <p className="text-gray-700 mb-3">Cool slowly to avoid excessive hardness and cracking. Post-weld heat treatment (PWHT) is strongly recommended to restore ductility and relieve residual stress. Typical PWHT is a stress-relief anneal followed by tempering to restore the desired hardness and toughness balance.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Why 410ss is Tricky</h4>
                <p className="text-gray-700">The carbon and alloying content that makes 410ss hardenable also causes the weld heat-affected zone to harden rapidly upon cooling. If cooled too quickly without preheat, the martensitic transformation creates a brittle, untempered structure susceptible to cold cracking. This is why martensitic grades require more welding discipline than austenitic stainless steels.</p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Typical Applications */}
      <SectionWrapper className="py-16 md:py-24 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Typical Applications
          </h2>

          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You will see 410 in valves and fittings for oil and gas, as well as pump parts and gas turbine components. It is also common in steam turbines and even jet engine hardware: basically anywhere strength and wear resistance matter more than top-tier corrosion performance.
            </p>

            <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-6">
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Oil & Gas Industry</h4>
                <ul className="space-y-2 text-gray-700">
                  <li> - Valve stems and seats (corrosion + hardness)</li>
                  <li> - Pump impellers and shafts</li>
                  <li> - Downhole tool components</li>
                  <li> - Seals and wear rings</li>
                  <li> - API flanges for high-pressure service</li>
                </ul>
              </div>

              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Turbomachinery</h4>
                <ul className="space-y-2 text-gray-700">
                  <li> - Steam turbine blades and components</li>
                  <li> - Gas turbine hardware</li>
                  <li> - Compressor impellers</li>
                  <li> - Jet engine components (in some applications)</li>
                </ul>
              </div>

              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Pump and Valve Applications</h4>
                <ul className="space-y-2 text-gray-700">
                  <li> - Valve balls and stems (hardness + corrosion resistance)</li>
                  <li> - Pump impellers</li>
                  <li> - Shaft components</li>
                  <li> - Bearing sleeves</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">General Industrial</h4>
                <ul className="space-y-2 text-gray-700">
                  <li> - Fasteners and studs (higher strength than austenitic)</li>
                  <li> - Bearing races and rolling elements</li>
                  <li> - Cutting tools and knives</li>
                  <li> - Wear plates and sleeves</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Summary and Selection */}
      <SectionWrapper className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            When to Specify 410ss (F6a)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Choose 410ss When:</h4>
              <ul className="space-y-2 text-gray-700">
                <li> - Strength and hardness are primary requirements</li>
                <li> - Operating environment is mild and non-corrosive or non-chloride</li>
                <li> - Magnetic properties are acceptable or beneficial</li>
                <li> - Heat treatment is planned and controlled</li>
                <li> - Cost efficiency matters (410ss costs less than 304/316)</li>
                <li> - API flanges are specified for oil & gas service</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-600 pl-6 py-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Do NOT Choose 410ss When:</h4>
              <ul className="space-y-2 text-gray-700">
                <li> - Seawater or high-chloride exposure is expected</li>
                <li> - Non-magnetic properties are required</li>
                <li> - Extensive post-fabrication welding is planned without PWHT</li>
                <li> - Superior general corrosion resistance is the primary driver</li>
                <li> - You would use 304 or 316 in the same application</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Comparison to 304/316</h4>
              <p className="text-gray-700 mb-3">
                410ss is not a replacement for 304 or 316. It is a different class of material. If your application works with 304, stick with 304. If you need the corrosion resistance of 316, do not downgrade to 410. However, if your application demands high strength and wear resistance in a non-corrosive environment, 410ss is often the better choice than trying to "overbuild" with a softer austenitic material.
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

      {/* CTA Section */}
      <SectionWrapper className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-orange-600">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need 410ss (F6a) Flanges?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our team can recommend the optimal heat treatment and specification for your API flanges, turbomachinery components, or high-strength industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://www.texasflange.com/contact-us/?ref=apiflange-new" variant="secondary" size="lg" className="border-white text-blue-900">
                Request Quote
              </Button>
              <Button href="https://www.texasflange.com/contact-us/?ref=apiflange-new" variant="ghost" size="lg" className="text-white hover:text-orange-200">
                Technical Consultation
              </Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
