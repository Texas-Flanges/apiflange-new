'use client';

import { useState } from 'react';
import { Metadata } from 'next';

// Weight data in pounds per flange
const weightData = {
  'Weld Neck': {
    '150': {
      '0.5': 0.6,
      '1': 1.1,
      '2': 2.3,
      '3': 5.1,
      '4': 7.7,
      '6': 14.3,
      '8': 21.5,
      '10': 29.5,
      '12': 41.2,
      '14': 48.3,
      '16': 59.0,
      '18': 70.5,
      '20': 84.0,
      '24': 115.0,
    },
    '300': {
      '0.5': 0.8,
      '1': 1.5,
      '2': 3.5,
      '3': 8.0,
      '4': 12.5,
      '6': 25.0,
      '8': 35.0,
      '10': 48.0,
      '12': 65.0,
      '14': 78.0,
      '16': 95.0,
      '18': 115.0,
      '20': 138.0,
      '24': 185.0,
    },
    '600': {
      '0.5': 1.0,
      '1': 2.2,
      '2': 5.5,
      '3': 12.5,
      '4': 20.0,
      '6': 42.0,
      '8': 60.0,
      '10': 82.0,
      '12': 115.0,
      '14': 138.0,
      '16': 170.0,
      '18': 205.0,
      '20': 245.0,
      '24': 330.0,
    },
  },
  'Slip-On': {
    '150': {
      '0.5': 0.4,
      '1': 0.8,
      '2': 1.7,
      '3': 3.8,
      '4': 6.0,
      '6': 10.5,
      '8': 16.0,
      '10': 22.0,
      '12': 30.5,
    },
    '300': {
      '0.5': 0.6,
      '1': 1.2,
      '2': 2.8,
      '3': 6.5,
      '4': 10.5,
      '6': 19.0,
      '8': 29.0,
      '10': 40.0,
      '12': 55.0,
    },
    '600': {
      '0.5': 0.8,
      '1': 1.8,
      '2': 4.5,
      '3': 10.5,
      '4': 17.0,
      '6': 32.0,
      '8': 49.0,
      '10': 68.0,
      '12': 95.0,
    },
  },
  'Blind': {
    '150': {
      '0.5': 0.75,
      '1': 1.5,
      '2': 3.7,
      '3': 6.8,
      '4': 11.0,
      '6': 22.5,
    },
    '300': {
      '0.5': 1.2,
      '1': 2.5,
      '2': 6.2,
      '3': 11.5,
      '4': 18.5,
      '6': 38.0,
    },
    '600': {
      '0.5': 2.0,
      '1': 4.2,
      '2': 10.5,
      '3': 19.5,
      '4': 31.0,
      '6': 64.0,
    },
  },
};

type WeightResults = {
  unitWeight: number;
  totalWeight: number;
  shippingWeight: number;
};

export default function FlangeWeightCalculator() {
  const [flangeType, setFlangeType] = useState<string>('Weld Neck');
  const [pressureClass, setPressureClass] = useState<string>('150');
  const [nominalSize, setNominalSize] = useState<string>('1');
  const [quantity, setQuantity] = useState<number>(1);
  const [results, setResults] = useState<WeightResults | null>(null);

  const flangeTypes = Object.keys(weightData);
  const pressureClasses = Object.keys(weightData[flangeType as keyof typeof weightData]);
  const sizes = Object.keys(
    weightData[flangeType as keyof typeof weightData][pressureClass as keyof typeof weightData['Weld Neck']]
  );

  const handleFlangeTypeChange = (newType: string) => {
    setFlangeType(newType);
    const newClasses = Object.keys(weightData[newType as keyof typeof weightData]);
    const newClass = newClasses[0];
    setPressureClass(newClass);
    const newSizes = Object.keys(
      weightData[newType as keyof typeof weightData][newClass as keyof typeof weightData['Weld Neck']]
    );
    setNominalSize(newSizes[0]);
    setResults(null);
  };

  const handlePressureClassChange = (newClass: string) => {
    setPressureClass(newClass);
    const newSizes = Object.keys(
      weightData[flangeType as keyof typeof weightData][newClass as keyof typeof weightData['Weld Neck']]
    );
    if (!newSizes.includes(nominalSize)) {
      setNominalSize(newSizes[0]);
    }
    setResults(null);
  };

  const handleCalculate = () => {
    const unitWeight =
      (weightData as Record<string, Record<string, Record<string, number>>>)[flangeType]?.[pressureClass]?.[nominalSize];

    if (unitWeight) {
      const totalWeight = unitWeight * quantity;
      // Add approximately 15% for packaging materials
      const shippingWeight = totalWeight * 1.15;

      setResults({
        unitWeight,
        totalWeight,
        shippingWeight,
      });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Flange Weight Calculator</h1>
            <p className="text-lg text-gray-200">
              Calculate flange weights for planning, shipping, and handling
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
                  {/* Flange Type */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Flange Type</label>
                    <select
                      value={flangeType}
                      onChange={(e) => handleFlangeTypeChange(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {flangeTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pressure Class */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Pressure Class</label>
                    <select
                      value={pressureClass}
                      onChange={(e) => handlePressureClassChange(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {pressureClasses.map((pc) => (
                        <option key={pc} value={pc}>
                          Class {pc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Nominal Size */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Nominal Size</label>
                    <select
                      value={nominalSize}
                      onChange={(e) => {
                        setNominalSize(e.target.value);
                        setResults(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}"
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(parseInt(e.target.value) || 1);
                        setResults(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    />
                    <p className="text-xs text-gray-600 mt-2">Number of flanges</p>
                  </div>

                  {/* Calculate Button */}
                  <button
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-brass to-brass-dark hover:from-brass-dark hover:to-brass-dark text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Calculate Weight
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
                    <h3 className="text-2xl font-bold text-iron mb-8">Weight Summary</h3>

                    <div className="space-y-6">
                      {/* Unit Weight */}
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
                        <p className="text-sm text-gray-600 mb-2">Single Unit Weight</p>
                        <p className="text-4xl font-bold text-iron">{results.unitWeight.toFixed(1)}</p>
                        <p className="text-lg text-gray-600">lbs per flange</p>
                      </div>

                      {/* Total Weight */}
                      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-brass">
                        <p className="text-sm text-gray-600 mb-2">Total Product Weight</p>
                        <p className="text-4xl font-bold text-iron">{results.totalWeight.toFixed(1)}</p>
                        <p className="text-lg text-gray-600">lbs for {quantity} flange{quantity !== 1 ? 's' : ''}</p>
                      </div>

                      {/* Shipping Weight */}
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-500">
                        <p className="text-sm text-gray-600 mb-2">Estimated Shipping Weight</p>
                        <p className="text-4xl font-bold text-iron">{results.shippingWeight.toFixed(1)}</p>
                        <p className="text-lg text-gray-600">lbs (includes packaging)</p>
                        <p className="text-xs text-gray-600 mt-3">
                          Includes approximately 15% for protective packaging, crating, and skid materials.
                        </p>
                      </div>
                    </div>

                    {/* Quick Facts */}
                    <div className="bg-gray-50 rounded-lg p-6 mt-8 border border-gray-200">
                      <h4 className="font-bold text-iron mb-4">Handling Information</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>
                          <strong>Approx. Dimensions:</strong> {parseFloat(nominalSize) * 2 + 2}"L × {parseFloat(nominalSize) * 2.5}"-{parseFloat(nominalSize) * 3}"W (estimated)
                        </li>
                        <li>
                          <strong>Lifting Equipment:</strong>{' '}
                          {results.totalWeight > 500 ? (
                            <span className="text-red-600 font-semibold">Forklift or crane recommended</span>
                          ) : (
                            <span>Pallet jack or manual handling OK</span>
                          )}
                        </li>
                        <li>
                          <strong>Recommended Pallets:</strong>{' '}
                          {Math.ceil(results.shippingWeight / 1000)} standard pallet{Math.ceil(results.shippingWeight / 1000) !== 1 ? 's' : ''}
                        </li>
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full mt-8 bg-iron hover:bg-iron-light text-white font-bold py-3 px-4 rounded-lg transition-colors">
                      Request Shipping Quote
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center border border-gray-200 h-full flex items-center justify-center">
                  <div>
                    <div className="text-5xl mb-4">⚖️</div>
                    <p className="text-xl font-semibold text-iron mb-2">Select Parameters and Calculate</p>
                    <p className="text-gray-600">Choose flange type, size, class, and quantity to see weight.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Supporting Content */}
        <div className="bg-white border-t border-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-iron mb-8">Flange Weight Considerations</h2>

            <div className="prose prose-lg text-gray-700 space-y-4 mb-12">
              <p>
                Understanding flange weights is essential for project planning, installation, handling, and shipping. Flange weights vary significantly based on the material, size, type, and pressure class. This calculator provides accurate weights for carbon steel flanges, which are the most common material.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Weight Factors</h3>

              <p>
                <strong>Material Density:</strong> Carbon steel (ASTM A105) weighs approximately 0.283 lbs per cubic inch. Stainless steel (A182) weighs about the same. Aluminum flanges weigh about one-third as much. Nickel-based alloys weigh more.
              </p>

              <p>
                <strong>Size Impact:</strong> Flange weight increases approximately with the cube of the nominal size. A 4" flange weighs about 8 times more than a 1" flange. This exponential relationship becomes significant in large piping systems.
              </p>

              <p>
                <strong>Pressure Class Impact:</strong> Higher pressure classes require thicker material, resulting in heavier flanges. A Class 600 flange can weigh 2-3 times more than a Class 150 flange of the same size.
              </p>

              <p>
                <strong>Flange Type Impact:</strong> Weld neck flanges are generally heavier than slip-on flanges due to the integral hub. Blind flanges are the heaviest for a given size since they have no bore.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Planning and Installation</h3>

              <p>
                Weight is a critical factor in several phases of a project. During design, weight affects support structure requirements. During procurement, weight and shipping considerations affect cost and delivery. During installation, proper lifting equipment and rigging are essential for safety.
              </p>

              <p>
                Always verify that lifting equipment has adequate capacity and is properly rated for the load. Never attempt to manually lift flanges larger than 6" in diameter or heavier than 50 lbs. Use proper rigging hardware such as spreader bars and slings to distribute load evenly.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Shipping and Packaging</h3>

              <p>
                Flange shipping weight includes the protective packaging. For smaller flanges (under 500 lbs total), sturdy cardboard boxes with foam or kraft paper padding are sufficient. For larger flanges, wooden crates with internal bracing are used. The shipping weight shown in this calculator includes an estimated 15% for packaging materials.
              </p>

              <p>
                Freight costs are typically based on weight and dimensional weight (whichever is greater). Understanding the total shipping weight helps in freight cost estimation and carrier selection. For large quantities, dedicated truckload service may be more economical than LTL (less-than-truckload) shipment.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-iron mb-6">Frequently Asked Questions</h3>

              <div className="space-y-6">
                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Why is shipping weight higher than product weight?</h4>
                  <p className="text-gray-700">
                    Shipping weight includes protective packaging materials: foam, kraft paper, plywood, and crating materials. For large flanges, the crating can add 10-20% to the product weight. This protects your investment during transit.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">What about stainless steel or nickel alloy weights?</h4>
                  <p className="text-gray-700">
                    Stainless steel 304 and 316 have virtually the same density as carbon steel, so weights are similar. Nickel-based alloys (Inconel, Hastelloy) weigh approximately 20-30% more. Contact us for specific weights on special materials.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Can I hand-carry flanges to the job site?</h4>
                  <p className="text-gray-700">
                    Flanges up to about 1" or 2" diameter can typically be hand-carried (under 5 lbs). For larger flanges, use carts, pallet jacks, or forklifts. Always follow your site's safety procedures and never exceed personal lifting limits.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">How much weight can my support structure handle?</h4>
                  <p className="text-gray-700">
                    This depends on your pipe support design and local building codes. Use this calculator to determine flange weight, then consult with a structural engineer to verify that your supports can handle the combined weight of pipes, flanges, insulation, and contents (liquid/gas).
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-iron mb-2">What about weight variation in manufacturing?</h4>
                  <p className="text-gray-700">
                    The weights shown in this calculator are nominal. Actual weights can vary by ±10% depending on the manufacturer and exact dimensions. For critical weight budgeting, request actual weights from the manufacturer before shipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Order? Get a Shipping Quote</h2>
            <p className="text-lg text-gray-200 mb-8">
              We provide accurate weight documentation and can optimize packaging and shipping for your project needs.
            </p>
            <button className="bg-brass hover:bg-brass-dark text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
              Request Quote & Shipping
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
            name: 'Flange Weight Calculator',
            description: 'Calculate flange weights for planning, shipping, and handling',
            url: 'https://apiflange.com/tools/flange-weight-calculator',
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
