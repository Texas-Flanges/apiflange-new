import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | API Flange',
  description: 'Comprehensive flange services including custom machining, technical support, and rush order fulfillment. API standards compliance with expert engineering support.',
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-wide">
          <h1 className="text-4xl font-bold">Our Services</h1>
        </div>
      </section>

      <section className="pt-16">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-8 text-center">ANSI to API - Cross Reference</h2>
          <h3 className="text-2xl font-bold mb-2">API vs. ASME/ANSI flanges</h3>
          <p className="text-lg text-gray-600 mb-6">Compatibility between pressure classes and size</p>
          <p className="mb-4">
            API and ASME/ANSI flanges are not necessarily interchangeable, however some of the RTJ styles from ASME B16.5 do match up dimensionally with existing API flanges. API 6A flanges in 5000# class and below are often made from A105 carbon steel with a 45K minimum yield strength, whereas the API 6BX flanges of 10000# class and above require a steel with an even higher yield strength. The most common of those is AISI 4130 with a 75K yield.
          </p>
          <p className="mb-4">
            You are more likely to find ASME/ANSI flanges in general pipeline assembly work and vessel service, whereas API flanges are often found in oilfield equipment as originally intended. B16.5 flanges will typically deal with materials such as air and high flow liquids, whereas API will handle primarily unrefined crude oil, refined petrochemicals, and high energy gases.
          </p>
          <p className="mb-6">
            The flanges per standards API 6A and ASME/ANSI B16.5 which share dimensions are listed below:
          </p>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th rowSpan={2} className="px-4 py-3 whitespace-nowrap text-left font-semibold text-sm align-bottom">Flange</th>
                  <th colSpan={2} className="px-4 py-3 whitespace-nowrap text-left font-semibold text-sm">Pressure Class Rating</th>
                  <th colSpan={2} className="px-4 py-3 whitespace-nowrap text-left font-semibold text-sm">Nominal Size Range (inches)</th>
                </tr>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 whitespace-nowrap text-left font-semibold text-sm">ASME/ANSI B16.5</th>
                  <th className="px-4 py-3 whitespace-nowrap text-left font-semibold text-sm">API 6A</th>
                  <th className="px-4 py-3 whitespace-nowrap text-left font-semibold text-sm">ASME/ANSI B16.5</th>
                  <th className="px-4 py-3 whitespace-nowrap text-left font-semibold text-sm">API 6A</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-primary">Weld neck</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">600</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">2000</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1/2 - 24</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1 13/16 - 11</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-primary">Weld neck</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">900</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">3000</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1/2 - 24</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1 13/16 - 11</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-primary">Weld neck</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1500</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">5000</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1/2 - 24</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1 13/16 - 11</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-primary">Threaded companion and blind</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">600</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">2000</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1/2 - 24</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1 13/16 - 21 1/4</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-primary">Threaded companion and blind</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">900</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">3000</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1/2 - 24</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1 13/16 - 20 3/4</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-primary">Threaded companion and blind</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1500</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">5000</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1/2 - 24</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-mono">1 13/16 - 11</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">Product Supply</h3>
              <p className="mb-4">
                Complete inventory of api certified in all standard sizes, materials, and pressure ratings.
                From standard ANSI specifications to custom configurations.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Standard ANSI flanges</li>
                <li>✓ API certified products</li>
                <li>✓ Custom specifications</li>
                <li>✓ Material options</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
              <p className="mb-4">
                When standard products don't fit your application, our engineering team designs and sources
                custom solutions to your exact specifications.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Engineering support</li>
                <li>✓ Rapid prototyping</li>
                <li>✓ Specialized designs</li>
                <li>✓ Quality assurance</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">Technical Support</h3>
              <p className="mb-4">
                Our experienced team provides detailed technical guidance, material consultation, and application support
                to ensure you get the right product for your needs.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Application consulting</li>
                <li>✓ Material selection</li>
                <li>✓ Standards compliance</li>
                <li>✓ Performance guidance</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Rush Order Fulfillment</h3>
            <p className="text-lg">
              Need it fast? We offer expedited production and shipping options to keep your projects on schedule.
              Call us at <a href="tel:+1-281-484-8325" className="text-blue-600 hover:text-blue-800">281-484-8325</a> to discuss your timeline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}