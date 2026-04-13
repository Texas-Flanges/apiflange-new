export default function BoltTorqueCalculator() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-iron to-iron-light text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Bolt Torque Guide</h1>
            <p className="text-lg text-gray-200">
              Learn proper torque specifications and procedures for bolts in flange connections
            </p>
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
