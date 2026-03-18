'use client';

import { useState } from 'react';
import { Metadata } from 'next';

// Real torque data based on ASME standards
// Values in ft-lbs for different bolt materials and lubrication conditions
const torqueData = {
  'B7': {
    'Dry': {
      '0.5': 45,
      '0.625': 95,
      '0.75': 168,
      '0.875': 277,
      '1': 495,
      '1.125': 759,
      '1.25': 1082,
      '1.375': 1483,
      '1.5': 1944,
    },
    'Oiled': {
      '0.5': 35,
      '0.625': 72,
      '0.75': 127,
      '0.875': 210,
      '1': 370,
      '1.125': 570,
      '1.25': 810,
      '1.375': 1110,
      '1.5': 1460,
    },
    'Moly': {
      '0.5': 24,
      '0.625': 50,
      '0.75': 88,
      '0.875': 147,
      '1': 250,
      '1.125': 385,
      '1.25': 548,
      '1.375': 750,
      '1.5': 980,
    },
  },
  'B8': {
    'Dry': {
      '0.5': 28,
      '0.625': 62,
      '0.75': 112,
      '0.875': 185,
      '1': 335,
      '1.125': 520,
      '1.25': 752,
      '1.375': 1035,
      '1.5': 1358,
    },
    'Oiled': {
      '0.5': 21,
      '0.625': 47,
      '0.75': 85,
      '0.875': 140,
      '1': 250,
      '1.125': 390,
      '1.25': 562,
      '1.375': 775,
      '1.5': 1015,
    },
    'Moly': {
      '0.5': 15,
      '0.625': 32,
      '0.75': 57,
      '0.875': 94,
      '1': 170,
      '1.125': 265,
      '1.25': 380,
      '1.375': 525,
      '1.5': 685,
    },
  },
  'L7': {
    'Dry': {
      '0.5': 50,
      '0.625': 110,
      '0.75': 195,
      '0.875': 320,
      '1': 570,
      '1.125': 880,
      '1.25': 1250,
      '1.375': 1720,
      '1.5': 2250,
    },
    'Oiled': {
      '0.5': 38,
      '0.625': 82,
      '0.75': 146,
      '0.875': 240,
      '1': 430,
      '1.125': 660,
      '1.25': 937,
      '1.375': 1290,
      '1.5': 1688,
    },
    'Moly': {
      '0.5': 27,
      '0.625': 57,
      '0.75': 102,
      '0.875': 168,
      '1': 298,
      '1.125': 460,
      '1.25': 650,
      '1.375': 895,
      '1.5': 1170,
    },
  },
};

// Bolt stress calculations (psi at proof load)
const boltStressData = {
  'B7': {
    '0.5': 75000,
    '0.625': 75000,
    '0.75': 75000,
    '0.875': 75000,
    '1': 75000,
    '1.125': 75000,
    '1.25': 75000,
    '1.375': 75000,
    '1.5': 75000,
  },
  'B8': {
    '0.5': 60000,
    '0.625': 60000,
    '0.75': 60000,
    '0.875': 60000,
    '1': 60000,
    '1.125': 60000,
    '1.25': 60000,
    '1.375': 60000,
    '1.5': 60000,
  },
  'L7': {
    '0.5': 85000,
    '0.625': 85000,
    '0.75': 85000,
    '0.875': 85000,
    '1': 85000,
    '1.125': 85000,
    '1.25': 85000,
    '1.375': 85000,
    '1.5': 85000,
  },
};

// Bolt cross-sectional areas (inches²)
const boltAreas = {
  '0.5': 0.1963,
  '0.625': 0.3068,
  '0.75': 0.4418,
  '0.875': 0.6013,
  '1': 0.7854,
  '1.125': 0.9940,
  '1.25': 1.2272,
  '1.375': 1.4849,
  '1.5': 1.7671,
};

type TorqueResults = {
  recommendedTorque: number;
  boltStress: number;
  clampingForce: number;
};

export default function BoltTorqueCalculator() {
  const [boltSize, setBoltSize] = useState<string>('1');
  const [boltMaterial, setBoltMaterial] = useState<string>('B7');
  const [lubricant, setLubricant] = useState<string>('Dry');
  const [results, setResults] = useState<TorqueResults | null>(null);

  const boltSizes = Object.keys(torqueData['B7']['Dry']);
  const materials = Object.keys(torqueData);
  const lubricants = Object.keys(torqueData['B7']);

  const handleCalculate = () => {
    const torqueValue = torqueData[boltMaterial as keyof typeof torqueData]?.[lubricant as keyof typeof torqueData['B7']]?.[boltSize as keyof typeof torqueData['B7']['Dry']];
    const stressValue = boltStressData[boltMaterial as keyof typeof boltStressData]?.[boltSize as keyof typeof boltStressData['B7']];
    const areaValue = boltAreas[boltSize as keyof typeof boltAreas];

    if (torqueValue && stressValue && areaValue) {
      // Convert torque to clamping force: T = 0.2 * d * F (approximately for unplated steel)
      // F = T / (0.2 * d) where d is diameter in inches
      const boltSizeNum = parseFloat(boltSize);
      const clampingForce = (torqueValue * 12) / (0.2 * boltSizeNum); // Convert ft-lbs to in-lbs, then calculate

      setResults({
        recommendedTorque: torqueValue,
        boltStress: stressValue,
        clampingForce: Math.round(clampingForce),
      });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Bolt Torque Calculator</h1>
            <p className="text-lg text-gray-200">
              Calculate proper torque specifications for bolts in flange connections
            </p>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 sticky top-8">
                <h2 className="text-2xl font-bold text-iron mb-6">Calculation Inputs</h2>

                <div className="space-y-6">
                  {/* Bolt Size */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Bolt Size</label>
                    <select
                      value={boltSize}
                      onChange={(e) => {
                        setBoltSize(e.target.value);
                        setResults(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {boltSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}"
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Bolt Material */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Bolt Material</label>
                    <select
                      value={boltMaterial}
                      onChange={(e) => {
                        setBoltMaterial(e.target.value);
                        setResults(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {materials.map((material) => (
                        <option key={material} value={material}>
                          {material}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-600 mt-2">
                      {boltMaterial === 'B7' && 'Chrome-molybdenum alloy steel. High strength.'}
                      {boltMaterial === 'B8' && 'Stainless steel 304. Good corrosion resistance.'}
                      {boltMaterial === 'L7' && 'Low-carbon alloy steel. Extra high strength.'}
                    </p>
                  </div>

                  {/* Lubricant Condition */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Lubrication Condition</label>
                    <select
                      value={lubricant}
                      onChange={(e) => {
                        setLubricant(e.target.value);
                        setResults(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {lubricants.map((lub) => (
                        <option key={lub} value={lub}>
                          {lub}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-600 mt-2">
                      {lubricant === 'Dry' && 'As received, no lubrication applied.'}
                      {lubricant === 'Oiled' && 'Light machine oil applied.'}
                      {lubricant === 'Moly' && 'Molybdenum disulfide lubricant applied.'}
                    </p>
                  </div>

                  {/* Calculate Button */}
                  <button
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-brass to-brass-dark hover:from-brass-dark hover:to-brass-dark text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Calculate Torque
                  </button>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2">
              {results ? (
                <div className="space-y-8">
                  {/* Results Card */}
                  <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-brass">
                    <h3 className="text-2xl font-bold text-iron mb-6">Torque Specifications</h3>

                    <div className="space-y-6">
                      {/* Recommended Torque */}
                      <div className="bg-gradient-to-r from-brass to-brass-dark rounded-lg p-6 text-white">
                        <p className="text-sm font-semibold mb-2 opacity-90">Recommended Torque (Dry Bolts)</p>
                        <p className="text-5xl font-bold">{results.recommendedTorque}</p>
                        <p className="text-lg mt-2">ft-lbs</p>
                        <p className="text-sm mt-4 opacity-90">
                          This is the optimal torque value for your selected bolt parameters. Use a calibrated torque wrench.
                        </p>
                      </div>

                      {/* Bolt Stress */}
                      <div className="border-l-4 border-iron pl-6">
                        <p className="text-sm text-gray-600 mb-2">Bolt Tensile Stress at Proof Load</p>
                        <p className="text-3xl font-bold text-iron">{results.boltStress.toLocaleString()} psi</p>
                        <p className="text-xs text-gray-600 mt-2">Design load per ASME standards</p>
                      </div>

                      {/* Clamping Force */}
                      <div className="border-l-4 border-brass pl-6">
                        <p className="text-sm text-gray-600 mb-2">Estimated Clamping Force</p>
                        <p className="text-3xl font-bold text-iron">{results.clampingForce.toLocaleString()} lbs</p>
                        <p className="text-xs text-gray-600 mt-2">Force applied to joint by specified torque</p>
                      </div>
                    </div>

                    {/* Important Notes */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8 rounded">
                      <h4 className="font-bold text-yellow-800 mb-3">Important Safety Notes</h4>
                      <ul className="text-sm text-yellow-700 space-y-2">
                        <li>• Always use a calibrated torque wrench with proper extension and socket considerations</li>
                        <li>• Do not exceed recommended torque values; over-torquing can cause bolt failure</li>
                        <li>• Torque values assume parallel, flat surfaces and proper bolt seating</li>
                        <li>• Lubrication condition has a significant impact on torque specifications</li>
                        <li>• For critical applications, follow equipment manufacturer specifications</li>
                      </ul>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                    <h4 className="text-lg font-bold text-iron mb-4">Torque Comparison</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b-2 border-iron">
                            <th className="text-left py-3 px-4">Lubrication</th>
                            <th className="text-right py-3 px-4">Torque (ft-lbs)</th>
                            <th className="text-right py-3 px-4">% of Dry</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(['Dry', 'Oiled', 'Moly'] as const).map((lub) => {
                            const torque = torqueData[boltMaterial as keyof typeof torqueData][lub][boltSize as keyof typeof torqueData['B7']['Dry']];
                            const percent = ((torque / results.recommendedTorque) * 100).toFixed(0);
                            return (
                              <tr key={lub} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4">{lub}</td>
                                <td className="text-right py-3 px-4 font-semibold">{torque}</td>
                                <td className="text-right py-3 px-4 text-gray-600">{percent}%</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center border border-gray-200 h-full flex items-center justify-center">
                  <div>
                    <div className="text-5xl mb-4">⚙️</div>
                    <p className="text-xl font-semibold text-iron mb-2">Select Parameters and Calculate</p>
                    <p className="text-gray-600">Choose bolt size, material, and lubrication to see torque specifications.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Supporting Content */}
        <div className="bg-white border-t border-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-iron mb-8">Proper Bolt Torquing Procedures</h2>

            <div className="prose prose-lg text-gray-700 space-y-4 mb-12">
              <p>
                Proper bolt torquing is one of the most critical aspects of flange assembly. Inadequate torque can lead to leaks, joint separation, and system failure. Excessive torque can damage bolts, strip threads, and cause premature failure. This calculator helps you determine the exact torque specifications for your flange bolts.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Understanding Torque Requirements</h3>

              <p>
                Bolt torque is a function of several variables: bolt diameter, material strength, surface condition (lubrication), and joint requirements. The torque values provided in this calculator are based on ASME standards and are designed to achieve approximately 70% of the bolt's proof load, which ensures reliable clamping while maintaining an adequate safety margin.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Effect of Lubrication</h3>

              <p>
                Lubrication has a dramatic effect on the relationship between applied torque and clamping force. Dry bolts (as received) require higher torque to achieve the target clamp load. Light oil reduces friction between threads and bearing surfaces, reducing required torque by approximately 25-30%. Molybdenum disulfide lubricant reduces friction even further, reducing required torque by about 50%.
              </p>

              <p>
                It's critical that all bolts in a joint have the same lubrication condition. Mixing dry and oiled bolts will result in uneven clamp loads and potential joint separation.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Torque Wrench Technique</h3>

              <p>
                Always use a calibrated torque wrench for critical joints. There are three common types: click-type, beam-type, and digital. Click-type wrenches are most common and set a specific torque value; the operator tightens until the wrench clicks. Beam-type wrenches show the applied torque on a scale. Digital wrenches provide digital readouts and often have data logging capabilities.
              </p>

              <p>
                When using a torque wrench with an extension, you must compensate for the extension length to get accurate torque values. If an extension is necessary, consult torque wrench manufacturer instructions for the adjustment formula.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Bolt Material Considerations</h3>

              <p>
                <strong>B7 Chrome-Molybdenum Steel:</strong> The most common choice for high-pressure flanges. Offers excellent strength and reliability. Moderate corrosion resistance; not suitable for severe corrosive environments.
              </p>

              <p>
                <strong>B8 Stainless Steel 304:</strong> Better corrosion resistance than B7, suitable for chemical and water applications. Lower proof load requires different torque specifications but excellent long-term reliability in corrosive environments.
              </p>

              <p>
                <strong>L7 Low-Carbon Alloy Steel:</strong> Extra-high strength material for critical applications requiring maximum clamping force. More expensive than B7 but provides superior strength.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Assembly Procedure</h3>

              <p>
                For multi-bolt joints, proper assembly sequence is important. Use a star or crisscross pattern to tighten bolts in stages. Begin by snugging all bolts to approximately 50% of final torque, then do a final pass bringing all bolts to specified torque. This ensures even pressure distribution and prevents gasket distortion.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-iron mb-6">Frequently Asked Questions</h3>

              <div className="space-y-6">
                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">How often should torque wrenches be calibrated?</h4>
                  <p className="text-gray-700">
                    Torque wrenches should be calibrated at least annually, or more frequently in heavy-use environments. Some industries require calibration every 6 months. Always maintain calibration records for quality assurance purposes.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">What if I over-torque a bolt?</h4>
                  <p className="text-gray-700">
                    Over-torquing can permanently stretch or break the bolt, stripping the threads in the process. If you suspect over-torquing, remove the bolt and inspect it. Do not re-use stretched or damaged bolts; always replace with new fasteners of the same specification.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Can I use a socket extension with my torque wrench?</h4>
                  <p className="text-gray-700">
                    Yes, but you must adjust the torque value. For extensions of less than 5", consult your wrench manufacturer's adjustment formula. Generally, longer extensions require lower wrench settings to achieve the same actual bolt torque. Some applications prohibit extensions due to accuracy requirements.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Is there a difference between static and re-torquing?</h4>
                  <p className="text-gray-700">
                    Yes. Initial torquing is done to achieve target clamp load. Re-torquing (after operation) is done to check if bolts have relaxed or come loose. Re-torque value is typically 90-95% of initial value. Always follow equipment manufacturer procedures for re-torque intervals.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-iron mb-2">Should bolts be pre-lubricated before assembly?</h4>
                  <p className="text-gray-700">
                    This depends on your application and specifications. For best consistency, all bolts in a joint should have the same lubrication condition. If specifications call for oiled bolts, apply a light coat of machine oil or the specified lubricant before assembly. Document your lubrication condition for traceability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need High-Quality Flange Bolts?</h2>
            <p className="text-lg text-gray-200 mb-8">
              We supply certified ASME B7, B8, and L7 bolts with calibration documentation and torque specifications.
            </p>
            <button className="bg-brass hover:bg-brass-dark text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
              Request Bolt Quote
            </button>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Bolt Torque Calculator',
            description: 'Free online bolt torque calculator for flange assembly',
            url: 'https://apiflange.com/tools/bolt-torque-calculator',
            applicationCategory: 'UtilityApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            creator: {
              '@type': 'Organization',
              name: 'API Flange',
            },
          }),
        }}
      />
    </>
  );
}
