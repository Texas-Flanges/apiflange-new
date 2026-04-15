'use client';

import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

const metadata: Metadata = {
  title: 'API Flange Calculation Tools & Calculators | API Flange',
  description: 'Free online flange calculators and tools. Calculate flange dimensions, bolt torque, pressure-temperature ratings, weights, and find the right gaskets for your application.',
  keywords: 'flange calculator, bolt torque calculator, pressure temperature rating, gasket selector, flange dimension calculator',
  openGraph: {
    title: 'API Flange Tools & Calculators',
    description: 'Professional flange calculation tools for engineers and technicians',
    type: 'website',
    url: 'https://apiflange.com/tools',
  },
};

const tools = [
  {
    id: 'flange-dimension-calculator',
    name: 'Flange Dimension Calculator',
    description: 'Look up ASME B16.5 and AWWA C207 flange dimensions including OD, bore, thickness, and bolt circle.',
    icon: '📐',
    color: 'from-blue-50 to-blue-100',
  },
  {
    id: 'bolt-torque-calculator',
    name: 'Bolt Torque Calculator',
    description: 'Determine proper bolt torque values for different materials, sizes, and lubrication conditions.',
    icon: '⚙️',
    color: 'from-orange-50 to-orange-100',
  },
  {
    id: 'pressure-temperature-rating',
    name: 'Pressure-Temperature Rating Lookup',
    description: 'Find allowable pressures at various temperatures for different materials and pressure classes per ASME B16.5.',
    icon: '🌡️',
    color: 'from-red-50 to-red-100',
  },
];

export default function ToolsPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1C1C1E] to-[#1a3d5f] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Flange Calculation Tools</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Professional-grade calculators and selection tools for flange engineering. Powered by ASME B16.5 and industry standards.
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group"
              >
                <div className={`bg-gradient-to-br ${tool.color} rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 h-full border border-gray-200 hover:border-brass`}>
                  <div className="text-5xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-iron mb-3 group-hover:text-brass transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-brass font-semibold text-sm hover:underline">
                    Open Tool
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-iron mb-12 text-center">
              Why Use Our Tools?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-lg font-bold text-iron mb-3">Standards-Based</h3>
                <p className="text-gray-700">
                  All calculations follow ASME B16.5, AWWA C207, and other industry standards.
                </p>
              </div>
              <div className="p-8">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-bold text-iron mb-3">Instant Results</h3>
                <p className="text-gray-700">
                  Real-time calculations with no signup required. Save time on engineering calculations.
                </p>
              </div>
              <div className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-iron mb-3">Accurate Data</h3>
                <p className="text-gray-700">
                  Based on actual ASME tables and technical specifications used by engineers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1C1C1E] to-[#1a3d5f] text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help Selecting the Right Flange?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Our engineering team is ready to assist with custom specifications and quotations.
            </p>
            <button className="bg-brass hover:bg-[#d45115] text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Request Engineering Support
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
            '@type': 'CollectionPage',
            name: 'Flange Calculation Tools',
            description: 'Professional flange calculators and selection tools',
            url: 'https://apiflange.com/tools',
            publisher: {
              '@type': 'Organization',
              name: 'API Flange',
              logo: 'https://apiflange.com/logo.png',
            },
          }),
        }}
      />
    </>
  );
}
