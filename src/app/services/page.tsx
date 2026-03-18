import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | API Flange Pro',
  description: 'Explore our range of services and products for api certified.',
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-wide">
          <h1 className="text-4xl font-bold">Our Services</h1>
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
              <h3 className="text-2xl font-bold mb-4">Custom Manufacturing</h3>
              <p className="mb-4">
                When standard products don't fit your application, our engineering team designs and manufactures
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
              Need it fast? We offer expedited manufacturing and shipping options to keep your projects on schedule.
              Call us at <a href="tel:+1-281-484-8325" className="text-blue-600 hover:text-blue-800">281-484-8325</a> to discuss your timeline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}