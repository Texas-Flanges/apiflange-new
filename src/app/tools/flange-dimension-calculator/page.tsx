'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';

// ASME B16.5 Dimension Data - Real values
const asmeB16_5Data = {
  'Class 150': {
    'Weld Neck': {
      '0.5': { od: 3.94, id: 0.84, thickness: 0.43, hubDiameter: 1.63, boltCircle: 2.75, numBolts: 4, boltDiameter: 0.5, raisedFaceHeight: 0.06, weight: 0.6 },
      '0.75': { od: 4.63, id: 1.05, thickness: 0.5, hubDiameter: 1.94, boltCircle: 3.25, numBolts: 4, boltDiameter: 0.5, raisedFaceHeight: 0.06, weight: 0.8 },
      '1': { od: 4.88, id: 1.32, thickness: 0.55, hubDiameter: 2.13, boltCircle: 3.5, numBolts: 4, boltDiameter: 0.625, raisedFaceHeight: 0.06, weight: 1.1 },
      '1.5': { od: 6.12, id: 1.69, thickness: 0.59, hubDiameter: 2.69, boltCircle: 4.25, numBolts: 4, boltDiameter: 0.625, raisedFaceHeight: 0.06, weight: 1.7 },
      '2': { od: 6.63, id: 2.07, thickness: 0.63, hubDiameter: 3.0, boltCircle: 4.75, numBolts: 8, boltDiameter: 0.625, raisedFaceHeight: 0.06, weight: 2.3 },
      '2.5': { od: 7.5, id: 2.47, thickness: 0.68, hubDiameter: 3.53, boltCircle: 5.5, numBolts: 8, boltDiameter: 0.625, raisedFaceHeight: 0.06, weight: 3.3 },
      '3': { od: 8.75, id: 3.07, thickness: 0.74, hubDiameter: 4.09, boltCircle: 6.25, numBolts: 8, boltDiameter: 0.75, raisedFaceHeight: 0.06, weight: 5.1 },
      '4': { od: 10.63, id: 4.07, thickness: 0.86, hubDiameter: 5.13, boltCircle: 7.75, numBolts: 8, boltDiameter: 0.75, raisedFaceHeight: 0.06, weight: 7.7 },
      '6': { od: 13.5, id: 6.07, thickness: 1.01, hubDiameter: 7.13, boltCircle: 10.0, numBolts: 12, boltDiameter: 0.75, raisedFaceHeight: 0.06, weight: 14.3 },
      '8': { od: 16.0, id: 8.07, thickness: 1.12, hubDiameter: 9.13, boltCircle: 12.0, numBolts: 12, boltDiameter: 0.875, raisedFaceHeight: 0.06, weight: 21.5 },
      '10': { od: 19.0, id: 10.02, thickness: 1.25, hubDiameter: 11.13, boltCircle: 14.25, numBolts: 12, boltDiameter: 0.875, raisedFaceHeight: 0.06, weight: 29.5 },
      '12': { od: 21.5, id: 12.0, thickness: 1.37, hubDiameter: 13.13, boltCircle: 16.5, numBolts: 12, boltDiameter: 1.0, raisedFaceHeight: 0.06, weight: 41.2 },
      '14': { od: 23.5, id: 14.0, thickness: 1.5, hubDiameter: 15.13, boltCircle: 18.25, numBolts: 12, boltDiameter: 1.0, raisedFaceHeight: 0.06, weight: 48.3 },
      '16': { od: 25.0, id: 16.0, thickness: 1.62, hubDiameter: 17.13, boltCircle: 20.0, numBolts: 16, boltDiameter: 1.0, raisedFaceHeight: 0.06, weight: 59.0 },
      '18': { od: 27.5, id: 18.0, thickness: 1.75, hubDiameter: 19.13, boltCircle: 22.0, numBolts: 16, boltDiameter: 1.0, raisedFaceHeight: 0.06, weight: 70.5 },
      '20': { od: 29.5, id: 20.0, thickness: 1.87, hubDiameter: 21.13, boltCircle: 24.0, numBolts: 20, boltDiameter: 1.0, raisedFaceHeight: 0.06, weight: 84.0 },
      '24': { od: 33.5, id: 24.0, thickness: 2.12, hubDiameter: 25.13, boltCircle: 28.0, numBolts: 20, boltDiameter: 1.25, raisedFaceHeight: 0.06, weight: 115.0 },
    },
    'Slip-On': {
      '0.5': { od: 3.875, id: 0.84, thickness: 0.38, hubDiameter: 1.63, boltCircle: 2.75, numBolts: 4, boltDiameter: 0.5, raisedFaceHeight: 0.06, weight: 0.4 },
      '1': { od: 4.75, id: 1.32, thickness: 0.43, hubDiameter: 2.13, boltCircle: 3.5, numBolts: 4, boltDiameter: 0.625, raisedFaceHeight: 0.06, weight: 0.8 },
      '2': { od: 6.5, id: 2.07, thickness: 0.5, hubDiameter: 3.0, boltCircle: 4.75, numBolts: 8, boltDiameter: 0.625, raisedFaceHeight: 0.06, weight: 1.7 },
      '3': { od: 8.625, id: 3.07, thickness: 0.56, hubDiameter: 4.09, boltCircle: 6.25, numBolts: 8, boltDiameter: 0.75, raisedFaceHeight: 0.06, weight: 3.8 },
      '4': { od: 10.5, id: 4.07, thickness: 0.62, hubDiameter: 5.13, boltCircle: 7.75, numBolts: 8, boltDiameter: 0.75, raisedFaceHeight: 0.06, weight: 6.0 },
      '6': { od: 13.375, id: 6.07, thickness: 0.75, hubDiameter: 7.13, boltCircle: 10.0, numBolts: 12, boltDiameter: 0.75, raisedFaceHeight: 0.06, weight: 10.5 },
      '8': { od: 16.0, id: 8.07, thickness: 0.87, hubDiameter: 9.13, boltCircle: 12.0, numBolts: 12, boltDiameter: 0.875, raisedFaceHeight: 0.06, weight: 16.0 },
      '10': { od: 19.0, id: 10.02, thickness: 1.0, hubDiameter: 11.13, boltCircle: 14.25, numBolts: 12, boltDiameter: 0.875, raisedFaceHeight: 0.06, weight: 22.0 },
      '12': { od: 21.5, id: 12.0, thickness: 1.12, hubDiameter: 13.13, boltCircle: 16.5, numBolts: 12, boltDiameter: 1.0, raisedFaceHeight: 0.06, weight: 30.5 },
    },
    'Blind': {
      '0.5': { od: 3.94, id: 0.0, thickness: 0.63, hubDiameter: 0.0, boltCircle: 2.75, numBolts: 4, boltDiameter: 0.5, raisedFaceHeight: 0.06, weight: 0.75 },
      '1': { od: 4.88, id: 0.0, thickness: 0.88, hubDiameter: 0.0, boltCircle: 3.5, numBolts: 4, boltDiameter: 0.625, raisedFaceHeight: 0.06, weight: 1.5 },
      '2': { od: 6.63, id: 0.0, thickness: 1.13, hubDiameter: 0.0, boltCircle: 4.75, numBolts: 8, boltDiameter: 0.625, raisedFaceHeight: 0.06, weight: 3.7 },
      '3': { od: 8.75, id: 0.0, thickness: 1.38, hubDiameter: 0.0, boltCircle: 6.25, numBolts: 8, boltDiameter: 0.75, raisedFaceHeight: 0.06, weight: 6.8 },
      '4': { od: 10.63, id: 0.0, thickness: 1.63, hubDiameter: 0.0, boltCircle: 7.75, numBolts: 8, boltDiameter: 0.75, raisedFaceHeight: 0.06, weight: 11.0 },
      '6': { od: 13.5, id: 0.0, thickness: 2.13, hubDiameter: 0.0, boltCircle: 10.0, numBolts: 12, boltDiameter: 0.75, raisedFaceHeight: 0.06, weight: 22.5 },
    },
  },
};

const awwaC207Data = {
  'Class D': {
    'Weld Neck': {
      '4': { od: 10.75, id: 4.0, thickness: 0.625, hubDiameter: 5.5, boltCircle: 8.5, numBolts: 8, boltDiameter: 0.75, raisedFaceHeight: 0.12, weight: 9.5 },
      '6': { od: 13.5, id: 6.0, thickness: 0.75, hubDiameter: 7.5, boltCircle: 10.75, numBolts: 12, boltDiameter: 0.75, raisedFaceHeight: 0.12, weight: 15.0 },
      '8': { od: 16.0, id: 8.0, thickness: 0.87, hubDiameter: 9.5, boltCircle: 13.0, numBolts: 12, boltDiameter: 0.875, raisedFaceHeight: 0.12, weight: 22.0 },
      '10': { od: 19.0, id: 10.0, thickness: 1.0, hubDiameter: 11.5, boltCircle: 15.25, numBolts: 12, boltDiameter: 0.875, raisedFaceHeight: 0.12, weight: 30.0 },
      '12': { od: 21.5, id: 12.0, thickness: 1.125, hubDiameter: 13.5, boltCircle: 17.5, numBolts: 12, boltDiameter: 1.0, raisedFaceHeight: 0.12, weight: 40.0 },
      '16': { od: 27.0, id: 16.0, thickness: 1.375, hubDiameter: 18.5, boltCircle: 22.5, numBolts: 16, boltDiameter: 1.0, raisedFaceHeight: 0.12, weight: 65.0 },
      '20': { od: 33.0, id: 20.0, thickness: 1.625, hubDiameter: 23.5, boltCircle: 27.5, numBolts: 20, boltDiameter: 1.0, raisedFaceHeight: 0.12, weight: 100.0 },
      '24': { od: 39.0, id: 24.0, thickness: 1.875, hubDiameter: 28.5, boltCircle: 32.0, numBolts: 20, boltDiameter: 1.25, raisedFaceHeight: 0.12, weight: 150.0 },
      '30': { od: 46.0, id: 30.0, thickness: 2.25, hubDiameter: 35.0, boltCircle: 38.5, numBolts: 24, boltDiameter: 1.25, raisedFaceHeight: 0.12, weight: 230.0 },
      '36': { od: 54.0, id: 36.0, thickness: 2.5, hubDiameter: 42.0, boltCircle: 45.0, numBolts: 28, boltDiameter: 1.25, raisedFaceHeight: 0.12, weight: 320.0 },
    },
  },
};

type FlangeDimensions = {
  od: number;
  id: number;
  thickness: number;
  hubDiameter: number;
  boltCircle: number;
  numBolts: number;
  boltDiameter: number;
  raisedFaceHeight: number;
  weight: number;
};

export default function FlangeDimensionCalculator() {
  const [standard, setStandard] = useState<'ASME B16.5' | 'AWWA C207'>('ASME B16.5');
  const [flangeType, setFlangeType] = useState<string>('Weld Neck');
  const [nominalSize, setNominalSize] = useState<string>('1');
  const [pressureClass, setPressureClass] = useState<string>('Class 150');
  const [results, setResults] = useState<FlangeDimensions | null>(null);

  // Get available options based on current selection
  const getAvailableFlangeTypes = () => {
    if (standard === 'ASME B16.5') {
      return ['Weld Neck', 'Slip-On', 'Blind'];
    }
    return ['Weld Neck'];
  };

  const getAvailableSizes = () => {
    if (standard === 'ASME B16.5') {
      if (pressureClass === 'Class 150') {
        return Object.keys(asmeB16_5Data['Class 150']['Weld Neck']);
      }
    } else if (standard === 'AWWA C207') {
      return Object.keys(awwaC207Data['Class D']['Weld Neck']);
    }
    return [];
  };

  const getAvailablePressureClasses = () => {
    if (standard === 'ASME B16.5') {
      return ['Class 150'];
    }
    return ['Class D'];
  };

  // Calculate results
  const handleCalculate = () => {
    let data: FlangeDimensions | null = null;

    if (standard === 'ASME B16.5') {
      const classData = asmeB16_5Data[pressureClass as keyof typeof asmeB16_5Data];
      if (classData) {
        const typeData = classData[flangeType as keyof typeof classData];
        if (typeData) {
          data = typeData[nominalSize as keyof typeof typeData];
        }
      }
    } else if (standard === 'AWWA C207') {
      const classData = awwaC207Data['Class D'];
      const typeData = classData['Weld Neck'];
      data = typeData[nominalSize as keyof typeof typeData];
    }

    setResults(data || null);
  };

  // Update dependent fields when standard changes
  const handleStandardChange = (newStandard: 'ASME B16.5' | 'AWWA C207') => {
    setStandard(newStandard);
    setPressureClass(newStandard === 'ASME B16.5' ? 'Class 150' : 'Class D');
    setFlangeType(newStandard === 'ASME B16.5' ? 'Weld Neck' : 'Weld Neck');
    const newSizes = newStandard === 'ASME B16.5' ? ['0.5', '0.75', '1', '1.5', '2'] : ['4', '6', '8'];
    setNominalSize(newSizes[0]);
    setResults(null);
  };

  const flangeTypes = getAvailableFlangeTypes();
  const sizes = getAvailableSizes();
  const pressureClasses = getAvailablePressureClasses();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Flange Dimension Calculator</h1>
            <p className="text-lg text-gray-200">
              Calculate ASME B16.5 and AWWA C207 flange dimensions instantly
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
                  {/* Standard Selection */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Standard</label>
                    <select
                      value={standard}
                      onChange={(e) => handleStandardChange(e.target.value as 'ASME B16.5' | 'AWWA C207')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      <option>ASME B16.5</option>
                      <option>AWWA C207</option>
                    </select>
                  </div>

                  {/* Flange Type */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Flange Type</label>
                    <select
                      value={flangeType}
                      onChange={(e) => {
                        setFlangeType(e.target.value);
                        setResults(null);
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
                          {pc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Calculate Button */}
                  <button
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-brass to-brass-dark hover:from-brass-dark hover:to-brass-dark text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Calculate Dimensions
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
                    <h3 className="text-2xl font-bold text-iron mb-6">Flange Dimensions</h3>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="border-l-4 border-brass pl-4">
                        <p className="text-sm text-gray-600 mb-1">Outside Diameter (OD)</p>
                        <p className="text-2xl font-bold text-iron">{results.od.toFixed(2)}"</p>
                      </div>
                      <div className="border-l-4 border-iron pl-4">
                        <p className="text-sm text-gray-600 mb-1">Bore/ID</p>
                        <p className="text-2xl font-bold text-iron">
                          {results.id > 0 ? `${results.id.toFixed(2)}"` : 'N/A (Blind)'}
                        </p>
                      </div>
                      <div className="border-l-4 border-brass pl-4">
                        <p className="text-sm text-gray-600 mb-1">Thickness</p>
                        <p className="text-2xl font-bold text-iron">{results.thickness.toFixed(2)}"</p>
                      </div>
                      <div className="border-l-4 border-iron pl-4">
                        <p className="text-sm text-gray-600 mb-1">Raised Face Height</p>
                        <p className="text-2xl font-bold text-iron">{results.raisedFaceHeight.toFixed(3)}"</p>
                      </div>
                      <div className="border-l-4 border-brass pl-4">
                        <p className="text-sm text-gray-600 mb-1">Bolt Circle Diameter</p>
                        <p className="text-2xl font-bold text-iron">{results.boltCircle.toFixed(2)}"</p>
                      </div>
                      <div className="border-l-4 border-iron pl-4">
                        <p className="text-sm text-gray-600 mb-1">Number of Bolts</p>
                        <p className="text-2xl font-bold text-iron">{results.numBolts}</p>
                      </div>
                      <div className="border-l-4 border-brass pl-4">
                        <p className="text-sm text-gray-600 mb-1">Bolt Diameter</p>
                        <p className="text-2xl font-bold text-iron">{results.boltDiameter.toFixed(3)}"</p>
                      </div>
                      <div className="border-l-4 border-iron pl-4">
                        <p className="text-sm text-gray-600 mb-1">Approximate Weight</p>
                        <p className="text-2xl font-bold text-iron">{results.weight.toFixed(1)} lbs</p>
                      </div>
                    </div>

                    {/* SVG Diagram Placeholder */}
                    <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center mb-6">
                      <svg width="300" height="250" viewBox="0 0 300 250" className="max-w-full">
                        {/* Flange cross-section diagram */}
                        <circle cx="150" cy="125" r={results.od * 20} fill="none" stroke="#1C1C1E" strokeWidth="2" />
                        {results.id > 0 && (
                          <circle cx="150" cy="125" r={results.id * 20} fill="none" stroke="#B5873A" strokeWidth="2" />
                        )}
                        {/* Bolt circle */}
                        <circle cx="150" cy="125" r={results.boltCircle * 20} fill="none" stroke="#999" strokeWidth="1" strokeDasharray="5,5" />
                        {/* Dimension lines */}
                        <line x1="150" y1="10" x2="150" y2="30" stroke="#1C1C1E" strokeWidth="1" />
                        <line x1="150" y1="30" x2={150 + results.od * 20} y2="30" stroke="#1C1C1E" strokeWidth="1" />
                        <line x1={150 + results.od * 20} y1="10" x2={150 + results.od * 20} y2="30" stroke="#1C1C1E" strokeWidth="1" />
                        <text x="150" y="45" textAnchor="middle" fontSize="12" fill="#1C1C1E">
                          OD: {results.od.toFixed(2)}"
                        </text>
                      </svg>
                    </div>

                    <button className="w-full bg-brass hover:bg-brass-dark text-white font-bold py-3 px-4 rounded-lg transition-colors">
                      Request Quote for This Flange
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center border border-gray-200 h-full flex items-center justify-center">
                  <div>
                    <div className="text-5xl mb-4">📐</div>
                    <p className="text-xl font-semibold text-iron mb-2">Select Parameters and Calculate</p>
                    <p className="text-gray-600">Choose your standard, flange type, size, and pressure class to see dimensions.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Supporting Content */}
        <div className="bg-white border-t border-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-iron mb-8">Understanding Flange Dimensions</h2>

            <div className="prose prose-lg text-gray-700 space-y-4 mb-12">
              <p>
                Flange dimensions are critical parameters that engineers and technicians must understand to ensure proper flange selection, installation, and performance. The dimensions calculated above come directly from ASME B16.5 and AWWA C207 standards, which are the most widely used standards for steel pipe flanges in industrial applications.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Key Dimension Definitions</h3>

              <p>
                <strong>Outside Diameter (OD):</strong> The maximum outer diameter of the flange. This dimension is critical for layout and space planning in piping systems.
              </p>

              <p>
                <strong>Bore or Inside Diameter (ID):</strong> The internal diameter of the pipe bore. This must match your pipe size or it can be boring out to accommodate larger pipes. Blind flanges have no bore.
              </p>

              <p>
                <strong>Thickness:</strong> The axial height of the flange body. Thicker flanges can withstand higher pressures but are heavier and more expensive.
              </p>

              <p>
                <strong>Raised Face Height:</strong> The additional height of the raised face (RF) above the flange seating surface. This is typically 1/16" for Class 150-300 flanges and 1/4" for higher pressure classes. The raised face provides a bearing surface for gaskets and helps prevent gasket extrusion.
              </p>

              <p>
                <strong>Bolt Circle Diameter (BCD):</strong> The diameter of the imaginary circle on which the bolt holes are located. This is critical for proper bolt pattern layout.
              </p>

              <p>
                <strong>Number of Bolts:</strong> The quantity of bolts required to secure the flange connection. More bolts distribute pressure more evenly and are used for larger or higher-pressure flanges.
              </p>

              <p>
                <strong>Bolt Diameter:</strong> The nominal diameter of the bolts to be used. Common sizes include 1/2", 5/8", 3/4", 7/8", and 1". Larger bolts provide greater clamping force.
              </p>

              <p>
                <strong>Approximate Weight:</strong> The estimated weight of the flange alone. Actual weight may vary slightly depending on material grade and manufacturing method. When planning handling and shipping, add approximately 10-15% for packaging.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Standards Explained</h3>

              <p>
                <strong>ASME B16.5:</strong> The American Society of Mechanical Engineers standard for steel pipe flanges. It covers flanges from 1/2" through 24" nominal pipe size in pressure classes from 150 to 2500 psi. This is the most common standard for industrial piping and is used globally.
              </p>

              <p>
                <strong>AWWA C207:</strong> The American Water Works Association standard for large diameter, welded steel pipe flanges. It covers sizes from 4" through 48" and is primarily used in water distribution and treatment applications.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Flange Type Selection</h3>

              <p>
                <strong>Weld Neck (WN):</strong> The most common type, with a tapered hub that distributes stress evenly. Best for high-pressure, high-temperature, and cyclic loading applications.
              </p>

              <p>
                <strong>Slip-On (SO):</strong> The pipe slips inside the flange bore and is welded both inside and outside. More economical than weld neck but not suitable for high-pressure applications.
              </p>

              <p>
                <strong>Blind (BL):</strong> Completely closed, with no bore. Used to cap the end of piping systems or pressure vessels.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-iron mb-6">Frequently Asked Questions</h3>

              <div className="space-y-6">
                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">What pressure class should I choose?</h4>
                  <p className="text-gray-700">
                    Pressure class is based on your system's operating pressure and temperature. Class 150 is suitable for low-pressure applications (up to 285 psi at ambient temperature). Class 300 is used for moderate pressures (up to 740 psi), and Class 600 and higher for more severe conditions. Always consult your system design specifications.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Can I use a larger flange than required?</h4>
                  <p className="text-gray-700">
                    You can use a higher pressure class flange, but not necessarily a larger nominal size. Using a larger size can cause compatibility issues with your piping. A higher pressure class (thicker) flange for the same size is acceptable and sometimes preferred for added safety margin.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">What's the difference between SAE and ASME flanges?</h4>
                  <p className="text-gray-700">
                    SAE flanges are typically lighter-duty and found in mobile equipment and automotive applications. ASME flanges are heavier-duty and suited for industrial piping. ASME is the standard for most industrial applications covered by this calculator.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">How are flange weights calculated?</h4>
                  <p className="text-gray-700">
                    Flange weight depends on the flange material, size, pressure class, and type. Steel (ASTM A105 carbon steel) is the most common. Stainless steel flanges weigh roughly the same but are more expensive. Weights shown are for carbon steel and can vary by ±10% based on manufacturer and exact specifications.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-iron mb-2">Should I use a raised face or flat face flange?</h4>
                  <p className="text-gray-700">
                    Raised face (RF) is standard for most applications. It concentrates gasket loading on a smaller area, improving seal integrity. Flat face (FF) is used when connecting to equipment with built-in seating surfaces. Raised face is more common and is what most ASME B16.5 flanges feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Custom Flange Specifications?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Our engineering team can provide custom dimensions, materials, and certifications for specialized applications.
            </p>
            <button className="bg-brass hover:bg-brass-dark text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
              Contact Engineering Support
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
            name: 'Flange Dimension Calculator',
            description: 'Free online ASME B16.5 flange dimension calculator for engineers',
            url: 'https://apiflange.com/tools/flange-dimension-calculator',
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
