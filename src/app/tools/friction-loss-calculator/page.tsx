'use client';

import { useState } from 'react';
import { Metadata } from 'next';

// Darcy-Weisbach equation for friction loss
// hf = f * (L/D) * (V²/2g)
// where f = friction factor, L = length, D = diameter, V = velocity, g = gravity

const pipeSchedules = {
  '0.5': { id: 0.622, area: 0.303 },
  '0.75': { id: 0.824, area: 0.533 },
  '1': { id: 1.049, area: 0.864 },
  '1.5': { id: 1.61, area: 2.036 },
  '2': { id: 2.067, area: 3.356 },
  '3': { id: 3.068, area: 7.38 },
  '4': { id: 4.026, area: 12.73 },
  '6': { id: 6.065, area: 28.89 },
  '8': { id: 7.981, area: 50.03 },
  '10': { id: 10.02, area: 78.85 },
  '12': { id: 12.0, area: 113.1 },
};

const fluids = {
  'Water': { viscosity: 1.0, density: 62.4 },
  'Light Oil': { viscosity: 32, density: 60 },
  'Heavy Oil': { viscosity: 150, density: 65 },
  'Glycerin': { viscosity: 1500, density: 78.6 },
};

type FrictionResults = {
  velocity: number;
  flowRate: number;
  frictionFactor: number;
  pressureDrop: number;
  pressureDropPsi: number;
  reynoldsNumber: number;
  flowRegime: string;
};

export default function FrictionLossCalculator() {
  const [pipeSize, setPipeSize] = useState<string>('2');
  const [fluid, setFluid] = useState<string>('Water');
  const [pipeLength, setPipeLength] = useState<string>('100');
  const [flowRate, setFlowRate] = useState<string>('100'); // GPM
  const [results, setResults] = useState<FrictionResults | null>(null);

  const pipeSizes = Object.keys(pipeSchedules);
  const fluidTypes = Object.keys(fluids);

  const calculateFrictionFactor = (reynolds: number) => {
    // Using Moody diagram approximations
    // For smooth pipes (typical schedule 40)
    if (reynolds < 2300) {
      // Laminar: f = 64/Re
      return 64 / reynolds;
    } else if (reynolds < 100000) {
      // Turbulent, smooth pipe (Blasius equation)
      return 0.316 / Math.pow(reynolds, 0.25);
    } else {
      // High turbulence
      return 0.25 / Math.pow(Math.log10(reynolds / 7), 2);
    }
  };

  const handleCalculate = () => {
    const pipeDim = pipeSchedules[pipeSize as keyof typeof pipeSchedules];
    const fluidProps = fluids[fluid as keyof typeof fluids];

    if (!pipeDim || !fluidProps) return;

    // Convert GPM to ft³/s
    // 1 GPM = 0.002228 ft³/s
    const flowFt3s = parseFloat(flowRate) * 0.002228;

    // Area in ft²
    const areaFt2 = pipeDim.area / 144;

    // Velocity in ft/s
    const velocity = flowFt3s / areaFt2;

    // Reynolds number: Re = (ρ * V * D) / μ
    // ρ = density in lb/ft³
    // V = velocity in ft/s
    // D = diameter in feet
    // μ = dynamic viscosity in lb/(ft·s)
    const diameterFt = pipeDim.id / 12;
    const viscosityLbFts = (fluidProps.viscosity * 0.000672); // Convert from cP to lb/(ft·s)
    const reynoldsNumber = (fluidProps.density * velocity * diameterFt) / viscosityLbFts;

    // Friction factor
    const frictionFactor = calculateFrictionFactor(reynoldsNumber);

    // Pressure drop using Darcy-Weisbach
    // hf = f * (L/D) * (V²/2g)
    // hf in feet of fluid
    const lengthFt = parseFloat(pipeLength);
    const g = 32.174; // ft/s²
    const headFt = frictionFactor * (lengthFt / diameterFt) * (Math.pow(velocity, 2) / (2 * g));

    // Convert head to pressure drop in psi
    // P = ρ * g * h
    // P in psi = (ρ in lb/ft³ * h in feet) / 144
    const pressureDropPsi = (fluidProps.density * headFt) / 144;

    // Determine flow regime
    let flowRegime = 'Laminar';
    if (reynoldsNumber >= 2300 && reynoldsNumber < 4000) {
      flowRegime = 'Transitional';
    } else if (reynoldsNumber >= 4000) {
      flowRegime = 'Turbulent';
    }

    setResults({
      velocity: parseFloat(velocity.toFixed(2)),
      flowRate: parseFloat(flowRate),
      frictionFactor: parseFloat(frictionFactor.toFixed(6)),
      pressureDrop: parseFloat(headFt.toFixed(2)),
      pressureDropPsi: parseFloat(pressureDropPsi.toFixed(3)),
      reynoldsNumber: Math.round(reynoldsNumber),
      flowRegime,
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Fluid Friction Loss Calculator</h1>
            <p className="text-lg text-gray-200">
              Calculate pressure drop and friction losses in piping systems
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
                  {/* Pipe Size */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Pipe Size (Schedule 40)</label>
                    <select
                      value={pipeSize}
                      onChange={(e) => {
                        setPipeSize(e.target.value);
                        setResults(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {pipeSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}" Pipe
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Fluid Type */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Fluid Type</label>
                    <select
                      value={fluid}
                      onChange={(e) => {
                        setFluid(e.target.value);
                        setResults(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    >
                      {fluidTypes.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pipe Length */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Pipe Length (feet)</label>
                    <input
                      type="number"
                      value={pipeLength}
                      onChange={(e) => {
                        setPipeLength(e.target.value);
                        setResults(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    />
                  </div>

                  {/* Flow Rate */}
                  <div>
                    <label className="block text-sm font-bold text-iron mb-2">Flow Rate (GPM)</label>
                    <input
                      type="number"
                      value={flowRate}
                      onChange={(e) => {
                        setFlowRate(e.target.value);
                        setResults(null);
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass focus:ring-opacity-20"
                    />
                  </div>

                  {/* Calculate Button */}
                  <button
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-brass to-brass-dark hover:from-brass-dark hover:to-brass-dark text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Calculate Friction Loss
                  </button>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2">
              {results ? (
                <div className="space-y-8">
                  {/* Main Results */}
                  <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-brass">
                    <h3 className="text-2xl font-bold text-iron mb-8">Friction Loss Analysis</h3>

                    <div className="space-y-6">
                      {/* Pressure Drop (Main Result) */}
                      <div className="bg-gradient-to-r from-brass to-brass-dark rounded-lg p-6 text-white">
                        <p className="text-sm font-semibold mb-2 opacity-90">Pressure Drop</p>
                        <p className="text-5xl font-bold">{results.pressureDropPsi}</p>
                        <p className="text-lg mt-2">psi per {pipeLength} feet</p>
                      </div>

                      {/* Flow Velocity */}
                      <div className="border-l-4 border-iron pl-6">
                        <p className="text-sm text-gray-600 mb-2">Flow Velocity</p>
                        <p className="text-3xl font-bold text-iron">{results.velocity.toFixed(1)} ft/s</p>
                      </div>

                      {/* Reynolds Number & Flow Regime */}
                      <div className="border-l-4 border-brass pl-6">
                        <p className="text-sm text-gray-600 mb-2">Reynolds Number</p>
                        <p className="text-3xl font-bold text-iron">{results.reynoldsNumber.toLocaleString()}</p>
                        <p className="text-sm text-gray-600 mt-2">
                          Flow Regime: <span className="font-bold">{results.flowRegime}</span>
                        </p>
                      </div>

                      {/* Friction Factor */}
                      <div className="border-l-4 border-iron pl-6">
                        <p className="text-sm text-gray-600 mb-2">Darcy Friction Factor</p>
                        <p className="text-2xl font-bold text-iron">{results.frictionFactor}</p>
                      </div>
                    </div>

                    {/* Engineering Notes */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8 rounded">
                      <h4 className="font-bold text-blue-900 mb-3">Engineering Notes</h4>
                      <ul className="text-sm text-blue-800 space-y-2">
                        <li>• Calculation uses Schedule 40 pipe with smooth internal surfaces</li>
                        <li>• Actual friction loss may be higher with corrosion or fouling</li>
                        <li>• Add 10-20% for fittings, elbows, and valves</li>
                        <li>• Optimal pipe velocity is typically 3-10 ft/s for water systems</li>
                        <li>
                          {results.velocity > 10 ? (
                            <span className="text-red-600 font-semibold">Current velocity exceeds 10 ft/s - consider larger pipe</span>
                          ) : results.velocity < 2 ? (
                            <span className="text-brass">Velocity below 2 ft/s - may cause settling</span>
                          ) : (
                            <span className="text-green-600">Current velocity is within optimal range</span>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center border border-gray-200 h-full flex items-center justify-center">
                  <div>
                    <div className="text-5xl mb-4">💧</div>
                    <p className="text-xl font-semibold text-iron mb-2">Select Parameters and Calculate</p>
                    <p className="text-gray-600">Enter pipe size, fluid type, length, and flow rate to calculate friction loss.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Supporting Content */}
        <div className="bg-white border-t border-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-iron mb-8">Understanding Friction Loss in Piping</h2>

            <div className="prose prose-lg text-gray-700 space-y-4 mb-12">
              <p>
                Friction loss in piping systems is the pressure drop that occurs as fluid flows through pipes and fittings. This pressure loss is caused by friction between the fluid and the pipe walls, as well as turbulence within the fluid. Understanding and predicting friction loss is essential for proper pump sizing, pipe diameter selection, and system design.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">The Darcy-Weisbach Equation</h3>

              <p>
                This calculator uses the Darcy-Weisbach equation, which is the standard method for calculating friction loss in pipes:
              </p>

              <p>
                hf = f * (L/D) * (V² / 2g)
              </p>

              <p>
                Where hf is head loss (feet of fluid), f is the Darcy friction factor, L is pipe length, D is pipe diameter, V is fluid velocity, and g is gravitational acceleration.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Reynolds Number and Flow Regime</h3>

              <p>
                The Reynolds number determines whether flow is laminar, transitional, or turbulent. In laminar flow (Re less than 2300), friction factor is calculated directly from Reynolds number. In turbulent flow (Re greater than 4000), the Moody diagram relationship is used, which accounts for pipe roughness.
              </p>

              <h3 className="text-2xl font-bold text-iron mt-8 mb-4">Practical Application Tips</h3>

              <p>
                When designing piping systems, remember that friction loss increases with flow rate and decreases with pipe diameter. Doubling pipe diameter reduces friction loss by a factor of about 32, while doubling flow rate increases friction loss by about 4 times. Small changes in pipe diameter can have significant effects on friction loss and system pressure requirements.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-iron mb-6">Frequently Asked Questions</h3>

              <div className="space-y-6">
                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">Should I account for fittings and valves?</h4>
                  <p className="text-gray-700">
                    Yes. Fittings, elbows, valves, and other components add significant friction loss. A general rule is to add 10-20% to the calculated straight pipe friction loss to account for fittings. For detailed calculations, use equivalent pipe length values for each fitting.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">What is the optimal pipe velocity?</h4>
                  <p className="text-gray-700">
                    For most water piping systems, velocities between 3-10 ft/s are optimal. Lower velocities result in excessive friction loss and larger pipes. Higher velocities cause erosion and noise. For oil systems, use 2-5 ft/s. For steam, 10-20 ft/s is typical.
                  </p>
                </div>

                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-bold text-iron mb-2">How does corrosion affect friction loss?</h4>
                  <p className="text-gray-700">
                    Pipe corrosion increases wall roughness, which increases friction loss. New steel pipe is relatively smooth, but years of corrosion can increase friction loss by 50% or more. Older systems may need larger pipes to achieve the same flow rates as new installations.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-iron mb-2">How do I size a pump for my system?</h4>
                  <p className="text-gray-700">
                    Calculate the friction loss in all pipes, fittings, and equipment using this calculator and equivalent length methods. Add any elevation changes (1 ft elevation = 0.433 psi). The total is your required pump head. Multiply by flow rate to get pump power requirement, accounting for pump efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help with System Design?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Our engineers can help you optimize your piping system for efficiency and reliability.
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
            name: 'Friction Loss Calculator',
            description: 'Calculate pressure drop and friction losses in piping systems',
            url: 'https://apiflange.com/tools/friction-loss-calculator',
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
