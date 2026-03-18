'use client';

import { useState } from 'react';
import { Metadata } from 'next';

interface GasketRecommendation {
  type: string;
  material: string;
  description: string;
  advantages: string[];
  temperature: string;
  pressure: string;
}

// Gasket selection logic based on application conditions
const gasketDatabase: { [key: string]: GasketRecommendation } = {
  'RF_Water_Low_RF': {
    type: 'Ring Gasket',
    material: 'PTFE (Teflon)',
    description: 'Non-asbestos, white PTFE ring gasket for water service at low temperatures',
    advantages: [
      'Excellent chemical resistance',
      'Non-toxic (FDA approved)',
      'Maintains flexibility at low temperatures',
      'Easy to install and remove',
      'Long service life',
    ],
    temperature: '-40°F to 300°F (-40°C to 150°C)',
    pressure: 'Class 150-300',
  },
  'RF_Water_Mid_RF': {
    type: 'Ring Gasket',
    material: 'Reinforced PTFE',
    description: 'Glass-reinforced PTFE gasket for water service at moderate temperatures',
    advantages: [
      'Better creep resistance than pure PTFE',
      'Maintains sealing force over time',
      'Good for cyclic loading',
      'Chemical resistant',
      'Low leakage rates',
    ],
    temperature: '-40°F to 400°F (-40°C to 200°C)',
    pressure: 'Class 300-600',
  },
  'RF_Water_High_RF': {
    type: 'Spiral Wound',
    material: 'Spiral Wound with PTFE Filler',
    description: 'Flexible spiral wound gasket for hot water and steam up to high temperatures',
    advantages: [
      'Maintains seal at elevated temperatures',
      'Resilient to thermal cycling',
      'Excellent for flange rotation',
      'Works with imperfect flange surfaces',
      'Re-usable for inspection and maintenance',
    ],
    temperature: '-40°F to 900°F (-40°C to 480°C)',
    pressure: 'Class 150-600',
  },
  'RF_Steam_Low_RF': {
    type: 'Spiral Wound',
    material: 'Spiral Wound with Graphite Filler',
    description: 'Spiral wound gasket for steam service at low to moderate pressures',
    advantages: [
      'Excellent steam compatibility',
      'Maintains elasticity with steam exposure',
      'Good resilience to pressure cycling',
      'Cost-effective',
      'Industry standard for steam',
    ],
    temperature: '-40°F to 700°F (-40°C to 370°C)',
    pressure: 'Class 150-300',
  },
  'RF_Steam_High_RF': {
    type: 'Spiral Wound',
    material: 'Spiral Wound with Graphite + PTFE Inner',
    description: 'High-performance spiral wound for high-pressure steam service',
    advantages: [
      'Rated for high-pressure steam',
      'Extended temperature capability',
      'Low leak rates',
      'Maintains seal under thermal stress',
      'ASME approved',
    ],
    temperature: '-40°F to 850°F (-40°C to 450°C)',
    pressure: 'Class 600-2500',
  },
  'RF_Oil_Low_RF': {
    type: 'Rubber Gasket',
    material: 'Nitrile (NBR) Rubber',
    description: 'Synthetic rubber gasket for oil and petroleum applications at low temperatures',
    advantages: [
      'Excellent oil resistance',
      'Cost-effective',
      'Good flexibility',
      'Easy to install',
      'FDA approved for food-grade oils',
    ],
    temperature: '-30°F to 200°F (-35°C to 93°C)',
    pressure: 'Class 150-300',
  },
  'RF_Oil_High_RF': {
    type: 'Spiral Wound',
    material: 'Spiral Wound with Elastomer Filler',
    description: 'Spiral wound gasket for hot oil service at higher temperatures',
    advantages: [
      'Maintains seal with thermal expansion',
      'Oil resistant elastomer',
      'Prevents oil weeping',
      'Handles thermal cycling',
      'Long service life',
    ],
    temperature: '-30°F to 350°F (-35°C to 175°C)',
    pressure: 'Class 300-600',
  },
  'RF_Gas_Low_RF': {
    type: 'PTFE Ring',
    material: 'PTFE with Carbon Filler',
    description: 'Low-leakage PTFE ring gasket for dry gas applications',
    advantages: [
      'Virtually zero permeation',
      'Excellent for inert gases',
      'No particle shedding',
      'Long service life',
      'Reusable',
    ],
    temperature: '-40°F to 300°F (-40°C to 150°C)',
    pressure: 'Class 150-300',
  },
  'RF_Gas_High_RF': {
    type: 'Spiral Wound',
    material: 'Spiral Wound with Metal Ring',
    description: 'Metal-reinforced spiral wound for high-pressure gas service',
    advantages: [
      'Rated for high-pressure gas',
      'Minimal leakage',
      'Metal core prevents gasket blowout',
      'Suitable for cyclic pressure',
      'Long-term reliability',
    ],
    temperature: '-40°F to 600°F (-40°C to 315°C)',
    pressure: 'Class 300-2500',
  },
  'RF_Chemical_RF': {
    type: 'Spiral Wound',
    material: 'Spiral Wound with PTFE/Graphite',
    description: 'Universal chemical-resistant spiral wound gasket',
    advantages: [
      'Resists wide range of chemicals',
      'Handles both acids and bases',
      'Good temperature range',
      'Industry standard for chemical plants',
      'Reliable performance',
    ],
    temperature: '-40°F to 750°F (-40°C to 400°C)',
    pressure: 'Class 150-600',
  },
  'RTJ_Steam_RF': {
    type: 'RTJ Ring Gasket',
    material: 'Stainless Steel with Graphite Filler',
    description: 'Ring Type Joint (RTJ) gasket for high-pressure steam',
    advantages: [
      'Metal-to-metal seal in RTJ groove',
      'Highest reliability',
      'Suitable for extreme conditions',
      'Minimal leakage',
      'Reusable and inspectable',
    ],
    temperature: '-40°F to 1000°F (-40°C to 540°C)',
    pressure: 'Class 900-2500',
  },
  'FF_Water_RF': {
    type: 'Full-Face Gasket',
    material: 'Compressed Asbestos-Free (CAF)',
    description: 'Full-face gasket for flat-face flange connections',
    advantages: [
      'Covers entire flange face',
      'Good for large equipment',
      'Environmental friendly (non-asbestos)',
      'Cost-effective',
      'Flexible material',
    ],
    temperature: '-40°F to 400°F (-40°C to 200°C)',
    pressure: 'Class 150-300',
  },
};

interface TemperatureRange {
  min: number;
  max: number;
  minUnit: string;
  maxUnit: string;
}

export default function GasketSelector() {
  const [flangeType, setFlangeType] = useState<string>('RF');
  const [service, setService] = useState<string>('Water');
  const [temperatureMin, setTemperatureMin] = useState<string>('60');
  const [temperatureMax, setTemperatureMax] = useState<string>('200');
  const [pressureClass, setPressureClass] = useState<string>('150');
  const [recommendation, setRecommendation] = useState<GasketRecommendation | null>(null);

  const flangeTypes = ['RF (Raised Face)', 'FF (Flat Face)', 'RTJ (Ring Type Joint)'];
  const services = ['Water', 'Steam', 'Oil', 'Gas', 'Chemical'];
  const pressureClasses = ['150', '300', '600', '900', '1500', '2500'];

  const handleCalculate = () => {
    // Determine temperature range
    const minTemp = parseInt(temperatureMin);
    const maxTemp = parseInt(temperatureMax);
    const isHighTemp = maxTemp > 400;
    const isMidTemp = maxTemp > 200 && maxTemp <= 400;

    // Build selection key
    let key = '';

    if (flangeType === 'RF (Raised Face)') {
      if (service === 'Water') {
        if (isHighTemp) {
          key = 'RF_Water_High_RF';
        } else if (isMidTemp) {
          key = 'RF_Water_Mid_RF';
        } else {
          key = 'RF_Water_Low_RF';
        }
      } else if (service === 'Steam') {
        if (isHighTemp) {
          key = 'RF_Steam_High_RF';
        } else {
          key = 'RF_Steam_Low_RF';
        }
      } else if (service === 'Oil') {
        if (isHighTemp) {
          key = 'RF_Oil_High_RF';
        } else {
          key = 'RF_Oil_Low_RF';
        }
      } else if (service === 'Gas') {
        if (isHighTemp) {
          key = 'RF_Gas_High_RF';
        } else {
          key = 'RF_Gas_Low_RF';
        }
      } else if (service === 'Chemical') {
        key = 'RF_Chemical_RF';
      }
    } else if (flangeType === 'FF (Flat Face)') {
      key = 'FF_Water_RF';
    } else if (flangeType === 'RTJ (Ring Type Joint)') {
      key = 'RTJ_Steam_RF';
    }

    const result = gasketDatabase[key];
    setRecommendation(result || null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Gasket Selector Tool</h1>
            <p className="text-lg text-gray-200">
              Find the right gasket for your flange application
            </p>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 sticky top-8">
                <h2 className="text-2xl font-bold text-iron mb-6">Application Details</h2>

                <div className="space-y-6">
                  {/* Flange Type */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Flange Face Type</label>
                    <select
                      value={flangeType}
                      onChange={(e) => {
                        setFlangeType(e.target.value);
                        setRecommendation(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {flangeTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Service Medium */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Service Medium</label>
                    <select
                      value={service}
                      onChange={(e) => {
                        setService(e.target.value);
                        setRecommendation(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {services.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Temperature Range */}
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-iron">Temperature Range</label>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Minimum (°F)</label>
                      <input
                        type="number"
                        value={temperatureMin}
                        onChange={(e) => {
                          setTemperatureMin(e.target.value);
                          setRecommendation(null);
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Maximum (°F)</label>
                      <input
                        type="number"
                        value={temperatureMax}
                        onChange={(e) => {
                          setTemperatureMax(e.target.value);
                          setRecommendation(null);
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass"
                      />
                    </div>
                  </div>

                  {/* Pressure Class */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Pressure Class</label>
                    <select
                      value={pressureClass}
                      onChange={(e) => {
                        setPressureClass(e.target.value);
                        setRecommendation(null);
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

                  {/* Select Button */}
                  <button
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-brass to-brass-dark hover:from-brass-dark hover:to-brass-dark text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Find Gasket
                  </button>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2">
              {recommendation ? (
                <div className="space-y-8">
                  {/* Recommendation Card */}
                  <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-brass">
                    <h3 className="text-2xl font-bold text-iron mb-2">{recommendation.type}</h3>
                    <p className="text-lg text-brass font-semibold mb-4">{recommendation.material}</p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6 border-l-4 border-brass">
                      <p className="text-gray-700 leading-relaxed">{recommendation.description}</p>
                    </div>

                    {/* Key Specifications */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="border-l-4 border-iron pl-4">
                        <p className="text-sm text-gray-600 mb-2">Temperature Range</p>
                        <p className="text-lg font-bold text-iron">{recommendation.temperature}</p>
                      </div>
                      <div className="border-l-4 border-brass pl-4">
                        <p className="text-sm text-gray-600 mb-2">Recommended For</p>
                        <p className="text-lg font-bold text-iron">{recommendation.pressure}</p>
                      </div>
                    </div>

                    {/* Advantages */}
                    <div className="mb-8">
                      <h4 className="font-bold text-iron mb-4 text-lg">Key Advantages</h4>
                      <ul className="space-y-3">
                        {recommendation.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-brass font-bold mr-3 mt-1">✓</span>
                            <span className="text-gray-700">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <button className="w-full bg-brass hover:bg-brass-dark text-white font-bold py-3 px-4 rounded-lg transition-colors">
                        Order This Gasket
                      </button>
                      <button className="w-full border-2 border-iron text-iron hover:bg-iron hover:text-white font-bold py-3 px-4 rounded-lg transition-colors">
                        Get Specification Sheet
                      </button>
                    </div>
                  </div>

                  {/* Installation Tips */}
                  <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-4 text-lg">Installation Tips</h4>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li>• Ensure flange surfaces are clean and free of debris</li>
                      <li>• Do not over-torque bolts; follow bolt torque recommendations</li>
                      <li>• Use consistent torque on all bolts in a star pattern</li>
                      <li>• Do not re-use gaskets that have been compressed once</li>
                      <li>• Keep gaskets in dry storage before installation</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center border border-gray-200 h-full flex items-center justify-center">
                  <div>
                    <div className="text-5xl mb-4">🔧</div>
                    <p className="text-xl font-semibold text-iron mb-2">Select Application Conditions</p>
                    <p className="text-gray-600">Choose flange type, service, temperature, and pressure to find the right gasket.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Supporting Content */}
        <div className="bg-white border-t border-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-iron mb-8">Gasket Selection Guide</h2>

            <div className="prose prose-lg text-gray-700 space-y-4 mb-12">
              <p>
                Gasket selection is one of the most critical decisions in flange connection design. The gasket must provide a reliable seal under the specific temperature, pressure, and chemical conditions of your application. Choosing the wrong gasket material can result in leaks, equipment downtime, environmental contamination, and safety hazards.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Common Gasket Types</h3>

              <p>
                <strong>Ring Gaskets (Spiral Wound):</strong> The most versatile and widely used gasket type. Spiral wound gaskets consist of a metal strip (usually stainless steel) wound in a spiral with a soft filler material (graphite, PTFE, or elastomer). They excel at accommodating surface irregularities and thermal expansion.
              </p>

              <p>
                <strong>PTFE Ring Gaskets:</strong> Non-metallic gaskets made from polytetrafluoroethylene (Teflon). Excellent chemical resistance and suitable for low-pressure applications. Cannot withstand temperatures above 500°F or high pressures that would cause creep.
              </p>

              <p>
                <strong>Rubber Gaskets:</strong> Synthetic elastomers (nitrile, EPDM, viton) used primarily for low-pressure water and low-temperature applications. Cost-effective but limited temperature range and not suitable for high pressure or aggressive chemicals.
              </p>

              <p>
                <strong>Metal Ring Type Joint (RTJ):</strong> Solid metal rings that seal in a specially designed groove (RTJ groove) in RTJ flanges. Highest performance for critical high-pressure, high-temperature applications. Used in offshore oil and gas, power generation, and similar demanding services.
              </p>

              <p>
                <strong>Full-Face Gaskets:</strong> Used with flat-face flanges to cover the entire flange face. Common in large equipment and specialty applications. Less common than raised-face flanges in piping.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Selection Criteria</h3>

              <p>
                When selecting a gasket, consider these key factors: operating temperature range, operating pressure, fluid being sealed, chemical compatibility, flange face condition, bolt pattern and spacing, and required service life.
              </p>

              <p>
                Temperature is particularly critical. At elevated temperatures, many gasket materials creep (gradually relax under pressure), losing sealing force. At very low temperatures, materials become brittle and lose flexibility. Always verify that your selected gasket's temperature range covers your operating conditions.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Maintenance and Replacement</h3>

              <p>
                Gaskets are consumable items with finite service life. Spiral wound gaskets can typically be reused multiple times if the flange surfaces remain in good condition, but rubber gaskets cannot be reused once compressed. Always inspect gaskets before reinstallation and replace if any degradation is visible.
              </p>

              <p>
                For critical applications, establish a gasket replacement schedule. Many facilities replace gaskets every 1-3 years regardless of condition to minimize the risk of unexpected leaks. For emergency replacement situations, always keep an inventory of common gasket sizes.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-iron mb-6">Frequently Asked Questions</h3>

              <div className="space-y-6">
                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Can I use PTFE gaskets for high-pressure applications?</h4>
                  <p className="text-gray-700">
                    Pure PTFE gaskets are suitable for low-pressure applications only. At high pressures, PTFE creeps (gradually relaxes), losing sealing force. For high pressure, use spiral wound gaskets with metal reinforcement or RTJ metal ring gaskets.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Can I reuse gaskets?</h4>
                  <p className="text-gray-700">
                    Spiral wound gaskets can typically be reused 2-3 times if the gasket is carefully removed and flange surfaces are clean. Rubber gaskets should never be reused; once compressed they lose elasticity. RTJ metal gaskets can be reused if not damaged during removal.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">What is the difference between different PTFE types?</h4>
                  <p className="text-gray-700">
                    Pure PTFE is the most flexible but creeps under pressure. Reinforced PTFE (with glass fibers) has better creep resistance and is suitable for higher pressures. Carbon-filled PTFE has lower permeability and is used for gas applications.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Are asbestos gaskets still available?</h4>
                  <p className="text-gray-700">
                    Asbestos gaskets are largely phased out due to health concerns, though some are still available in certain jurisdictions. Modern non-asbestos gaskets perform as well or better and are the standard choice for new installations and replacements.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-iron mb-2">How do I prevent gasket blowout?</h4>
                  <p className="text-gray-700">
                    Gasket blowout occurs when pressure forces the gasket out of the sealing area. Prevent it by: using the correct gasket thickness, using a gasket with adequate thickness and area, avoiding over-compression, and using metal-reinforced gaskets for high-pressure applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Order Custom Gaskets?</h2>
            <p className="text-lg text-gray-200 mb-8">
              We stock and can manufacture custom gaskets for virtually any application and flange size.
            </p>
            <button className="bg-brass hover:bg-brass-dark text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
              Request Gasket Quote
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
            name: 'Gasket Selector Tool',
            description: 'Interactive gasket selection tool for flange applications',
            url: 'https://apiflange.com/tools/gasket-selector',
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
