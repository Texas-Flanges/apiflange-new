'use client';

import { useState } from 'react';
import { Metadata } from 'next';

// ASME B16.5 Table 2 Pressure-Temperature Ratings
// Values in PSI at various temperatures
const ptRatingsData = {
  'A105 (Carbon Steel)': {
    '150': {
      temperatures: [
        { temp: '-20 to 100°F', pressure: 285 },
        { temp: '200°F', pressure: 260 },
        { temp: '300°F', pressure: 230 },
        { temp: '400°F', pressure: 200 },
        { temp: '500°F', pressure: 170 },
        { temp: '600°F', pressure: 140 },
        { temp: '650°F', pressure: 110 },
        { temp: '700°F', pressure: 85 },
        { temp: '750°F', pressure: 55 },
        { temp: '800°F', pressure: 25 },
      ],
    },
    '300': {
      temperatures: [
        { temp: '-20 to 100°F', pressure: 740 },
        { temp: '200°F', pressure: 670 },
        { temp: '300°F', pressure: 590 },
        { temp: '400°F', pressure: 525 },
        { temp: '500°F', pressure: 410 },
        { temp: '600°F', pressure: 365 },
        { temp: '650°F', pressure: 290 },
        { temp: '700°F', pressure: 210 },
        { temp: '750°F', pressure: 130 },
        { temp: '800°F', pressure: 65 },
      ],
    },
    '600': {
      temperatures: [
        { temp: '-20 to 100°F', pressure: 1480 },
        { temp: '200°F', pressure: 1340 },
        { temp: '300°F', pressure: 1180 },
        { temp: '400°F', pressure: 1045 },
        { temp: '500°F', pressure: 830 },
        { temp: '600°F', pressure: 720 },
        { temp: '650°F', pressure: 575 },
        { temp: '700°F', pressure: 425 },
        { temp: '750°F', pressure: 260 },
        { temp: '800°F', pressure: 130 },
      ],
    },
  },
  'A182 F304 (Stainless)': {
    '150': {
      temperatures: [
        { temp: '-20 to 100°F', pressure: 285 },
        { temp: '200°F', pressure: 285 },
        { temp: '300°F', pressure: 280 },
        { temp: '400°F', pressure: 175 },
        { temp: '500°F', pressure: 270 },
        { temp: '600°F', pressure: 215 },
        { temp: '700°F', pressure: 155 },
        { temp: '800°F', pressure: 240 },
        { temp: '900°F', pressure: 220 },
        { temp: '1000°F', pressure: 185 },
      ],
    },
    '300': {
      temperatures: [
        { temp: '-20 to 100°F', pressure: 740 },
        { temp: '200°F', pressure: 740 },
        { temp: '300°F', pressure: 730 },
        { temp: '400°F', pressure: 715 },
        { temp: '500°F', pressure: 700 },
        { temp: '600°F', pressure: 655 },
        { temp: '700°F', pressure: 865 },
        { temp: '800°F', pressure: 630 },
        { temp: '900°F', pressure: 585 },
        { temp: '1000°F', pressure: 490 },
      ],
    },
    '600': {
      temperatures: [
        { temp: '-20 to 100°F', pressure: 1480 },
        { temp: '200°F', pressure: 1480 },
        { temp: '300°F', pressure: 1460 },
        { temp: '400°F', pressure: 1430 },
        { temp: '500°F', pressure: 1110 },
        { temp: '600°F', pressure: 1070 },
        { temp: '700°F', pressure: 1335 },
        { temp: '800°F', pressure: 1260 },
        { temp: '900°F', pressure: 1170 },
        { temp: '1000°F', pressure: 980 },
      ],
    },
  },
  'A182 F316 (Stainless)': {
    '150': {
      temperatures: [
        { temp: '-20 to 100°F', pressure: 285 },
        { temp: '200°F', pressure: 285 },
        { temp: '300°F', pressure: 280 },
        { temp: '400°F', pressure: 275 },
        { temp: '500°F', pressure: 270 },
        { temp: '600°F', pressure: 215 },
        { temp: '700°F', pressure: 155 },
        { temp: '800°F', pressure: 245 },
        { temp: '900°F', pressure: 225 },
        { temp: '1000°F', pressure: 190 },
      ],
    },
    '300': {
      temperatures: [
        { temp: '-20 to 100°F', pressure: 740 },
        { temp: '200°F', pressure: 740 },
        { temp: '300°F', pressure: 730 },
        { temp: '400°F', pressure: 715 },
        { temp: '500°F', pressure: 700 },
        { temp: '600°F', pressure: 655 },
        { temp: '700°F', pressure: 465 },
        { temp: '800°F', pressure: 630 },
        { temp: '900°F', pressure: 585 },
        { temp: '1000°F', pressure: 500 },
      ],
    },
    '600': {
      temperatures: [
        { temp: '-20 to 100°F', pressure: 1480 },
        { temp: '200°F', pressure: 1480 },
        { temp: '300°F', pressure: 1460 },
        { temp: '400°F', pressure: 1430 },
        { temp: '500°F', pressure: 1100 },
        { temp: '600°F', pressure: 1370 },
        { temp: '700°F', pressure: 1335 },
        { temp: '800°F', pressure: 1260 },
        { temp: '900°F', pressure: 1170 },
        { temp: '1000°F', pressure: 1000 },
      ],
    },
  },
};

type PTData = {
  temperatures: Array<{
    temp: string;
    pressure: number;
  }>;
};

export default function PressureTemperatureRating() {
  const [material, setMaterial] = useState<string>('A105 (Carbon Steel)');
  const [pressureClass, setPressureClass] = useState<string>('150');
  const [results, setResults] = useState<PTData | null>(null);

  const materials = Object.keys(ptRatingsData);
  const pressureClasses = Object.keys(ptRatingsData[material as keyof typeof ptRatingsData]);

  const handleCalculate = () => {
    const data = ptRatingsData[material as keyof typeof ptRatingsData]?.[pressureClass as keyof typeof ptRatingsData['A105 (Carbon Steel)']];
    setResults(data || null);
  };

  // Update pressure classes when material changes
  const handleMaterialChange = (newMaterial: string) => {
    setMaterial(newMaterial);
    const newClasses = Object.keys(ptRatingsData[newMaterial as keyof typeof ptRatingsData]);
    if (!newClasses.includes(pressureClass)) {
      setPressureClass(newClasses[0]);
    }
    setResults(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Pressure-Temperature Rating Lookup</h1>
            <p className="text-lg text-gray-200">
              ASME B16.5 allowable pressure ratings at various temperatures
            </p>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 sticky top-8">
                <h2 className="text-2xl font-bold text-iron mb-6">Lookup Inputs</h2>

                <div className="space-y-6">
                  {/* Material Selection */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Material Grade</label>
                    <select
                      value={material}
                      onChange={(e) => handleMaterialChange(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {materials.map((mat) => (
                        <option key={mat} value={mat}>
                          {mat}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-600 mt-2">
                      {material === 'A105 (Carbon Steel)' && 'Most common. Good for general service.'}
                      {material === 'A182 F304 (Stainless)' && 'Stainless 304. Corrosion resistant.'}
                      {material === 'A182 F316 (Stainless)' && 'Stainless 316. Better corrosion resistance.'}
                    </p>
                  </div>

                  {/* Pressure Class */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Pressure Class</label>
                    <select
                      value={pressureClass}
                      onChange={(e) => {
                        setPressureClass(e.target.value);
                        setResults(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {pressureClasses.map((pc) => (
                        <option key={pc} value={pc}>
                          Class {pc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Lookup Button */}
                  <button
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-brass to-brass-dark hover:from-brass-dark hover:to-brass-dark text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Lookup P-T Rating
                  </button>
                </div>

                {/* Info Box */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>Tip:</strong> P-T ratings decrease at higher temperatures. Always verify your operating temperature is within the rated range.
                  </p>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2">
              {results ? (
                <div className="space-y-8">
                  {/* Results Header */}
                  <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-brass">
                    <h3 className="text-2xl font-bold text-iron mb-2">
                      {material} - Class {pressureClass}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Allowable pressure (psi) per ASME B16.5 Table 2
                    </p>
                  </div>

                  {/* Pressure-Temperature Table */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-iron to-iron-light text-white">
                            <th className="px-6 py-4 text-left font-bold">Temperature</th>
                            <th className="px-6 py-4 text-right font-bold">Allowable Pressure (PSI)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.temperatures.map((row, idx) => (
                            <tr
                              key={idx}
                              className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                                idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                              }`}
                            >
                              <td className="px-6 py-4 font-medium text-gray-900">{row.temp}</td>
                              <td className="px-6 py-4 text-right">
                                <span className="inline-block bg-gradient-to-r from-brass to-brass-dark text-white px-4 py-2 rounded-lg font-bold">
                                  {row.pressure}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Key Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
                      <h4 className="font-bold text-blue-900 mb-3">Ambient to 100°F</h4>
                      <p className="text-blue-800 text-sm">
                        This is the standard rating condition. Flanges are rated at their full pressure class value in this temperature range.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
                      <h4 className="font-bold text-green-900 mb-3">Higher Temperatures</h4>
                      <p className="text-green-800 text-sm">
                        Allowable pressure decreases as temperature increases. This is due to material strength reduction at elevated temperatures.
                      </p>
                    </div>
                  </div>

                  {/* Download Table */}
                  <div className="text-center">
                    <button className="bg-iron hover:bg-iron-light text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
                      Download PDF Table
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center border border-gray-200 h-full flex items-center justify-center">
                  <div>
                    <div className="text-5xl mb-4">🌡️</div>
                    <p className="text-xl font-semibold text-iron mb-2">Select Parameters and Lookup</p>
                    <p className="text-gray-600">Choose material and pressure class to see temperature ratings.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Supporting Content */}
        <div className="bg-white border-t border-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-iron mb-8">Understanding Pressure-Temperature Ratings</h2>

            <div className="prose prose-lg text-gray-700 space-y-4 mb-12">
              <p>
                Pressure-temperature (P-T) ratings define the maximum allowable pressure for a flange at a given temperature. These ratings are critical for safe system design and ensure that flange connections are not subjected to pressures that exceed the flange's strength at operating temperature.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Why Temperature Affects Pressure Rating</h3>

              <p>
                Metal strength decreases as temperature increases. The tensile strength, yield strength, and creep resistance of steel all decline at elevated temperatures. Therefore, the maximum allowable pressure that a flange can safely handle must be reduced as operating temperature increases. ASME B16.5 provides comprehensive P-T tables to account for this relationship.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Material Selection and Temperature</h3>

              <p>
                Different materials have different temperature capabilities. Carbon steel (A105) loses strength relatively quickly as temperature increases and is generally limited to about 800°F. Stainless steels (A182 F304 and F316) maintain better strength at elevated temperatures and can be used up to 1000°F or higher.
              </p>

              <p>
                For applications exceeding 800°F, consider high-alloy materials like inconel, nickel-based alloys, or specialized heat-resistant stainless steels. These materials maintain strength at very high temperatures but are more expensive.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Design Margin and Safety Factor</h3>

              <p>
                The ASME B16.5 P-T ratings already include a safety factor. The allowable stress is typically set at 25% of the material's tensile strength at the given temperature. This provides a significant margin to account for stress concentrations, material variations, and potential degradation from corrosion or erosion.
              </p>

              <p>
                When designing systems, you should design to the rated pressure at your maximum operating temperature, not to a higher pressure class that might be rated at lower temperatures. Always select a flange rated for your actual operating conditions.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Cyclic Loading Considerations</h3>

              <p>
                The P-T ratings in ASME B16.5 assume static loading. For applications with frequent pressure or temperature cycling, fatigue becomes a concern and you may need to select a higher pressure class or use more robust materials. Consult with your equipment manufacturer or a professional engineer for cyclic loading applications.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Cold Temperature Applications</h3>

              <p>
                Carbon steel flanges maintain good strength at low temperatures and can actually be used below -20°F with impact-resistant grades (A350 LF2). However, the P-T tables in this calculator show ratings only down to ambient temperature. For cryogenic applications (-100°F and below), specialized materials are required.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-iron mb-6">Frequently Asked Questions</h3>

              <div className="space-y-6">
                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">What if my system temperature fluctuates?</h4>
                  <p className="text-gray-700">
                    Use the maximum expected temperature to select your flange rating. All P-T ratings assume the flange will be subjected to the rated pressure at the rated temperature. If your system fluctuates between 200°F and 400°F, use the 400°F rating.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Can I use a higher pressure class flange than required?</h4>
                  <p className="text-gray-700">
                    Yes, and it's often a good practice. Using a higher pressure class (like Class 300 instead of Class 150) provides additional safety margin and allows the system to handle occasional pressure spikes. There's no penalty to using a more robust flange.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">What happens if I exceed the P-T rating?</h4>
                  <p className="text-gray-700">
                    Exceeding the P-T rating can cause permanent deformation, cracking, or sudden failure of the flange. This is a safety hazard that can result in leaks, system shutdown, equipment damage, or personal injury. Never exceed the rated specifications.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Are there standards beyond ASME B16.5?</h4>
                  <p className="text-gray-700">
                    Yes. API 6A is used for oil and gas downhole equipment. DIN standards are common in Europe. JIS standards are used in Asia. ASME B16.5 is the most common industrial standard globally and is used as the basis for most other flange standards.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-iron mb-2">Does flange type affect the P-T rating?</h4>
                  <p className="text-gray-700">
                    No. P-T ratings in ASME B16.5 are the same for weld neck, slip-on, and blind flanges of the same size and pressure class. The flange type affects how the flange is connected to the pipe, but not the pressure-temperature capability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help Selecting the Right Material?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Our engineers can help you choose the optimal material and flange specification for your operating conditions.
            </p>
            <button className="bg-brass hover:bg-brass-dark text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
              Consult Engineering
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
            name: 'Pressure-Temperature Rating Lookup',
            description: 'ASME B16.5 pressure-temperature rating lookup tool',
            url: 'https://apiflange.com/tools/pressure-temperature-rating',
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
