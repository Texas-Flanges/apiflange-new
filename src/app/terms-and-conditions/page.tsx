import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Terms and Conditions',
  description:
    'Read our terms and conditions governing the use of API Flange website and services.',
  path: '/terms-and-conditions',
});

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-silver-light">
            Last updated: March 3, 2026
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Agreement to Terms
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            These Terms and Conditions ("Agreement") constitute a legally binding agreement
            between you and API Flange ("Company," "we," "us," or "our") regarding your use
            of our website and services. By accessing and using this website, you agree to be
            bound by these terms. If you do not agree to any part of this Agreement, you may
            not use our services.
          </p>
        </section>

        {/* Use License */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Use License
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials (information
            or software) on API Flange's website for personal, non-commercial transitory viewing
            only. This is the grant of a license, not a transfer of title, and under this license
            you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4 ml-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software on the website</li>
            <li>Remove any copyright or other proprietary notations</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            <li>Use the materials in any way that infringes upon the rights of others or restricts their use and enjoyment</li>
          </ul>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Disclaimer
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            The materials on API Flange's website are provided on an "as is" basis. API Flange
            makes no warranties, expressed or implied, and hereby disclaims and negates all other
            warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Further, API Flange does not warrant or make any representations concerning the
            accuracy, likely results, or reliability of the use of the materials on its website
            or otherwise relating to such materials or on any sites linked to this site.
          </p>
        </section>

        {/* Limitations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            4. Limitations of Liability
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            In no event shall API Flange or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business
            interruption) arising out of the use or inability to use the materials on API
            Flange's website, even if API Flange or an authorized representative has been
            notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        {/* Accuracy of Materials */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            5. Accuracy of Materials
          </h2>
          <p className="text-slate-600 leading-relaxed">
            The materials appearing on API Flange's website could include technical, typographical,
            or photographic errors. API Flange does not warrant that any of the materials on our
            website are accurate, complete, or current. API Flange may make changes to the materials
            contained on its website at any time without notice.
          </p>
        </section>

        {/* Materials on Website */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            6. Materials on Website
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            API Flange has not reviewed all of the sites linked to our website and is not responsible
            for the contents of any such linked site. The inclusion of any link does not imply
            endorsement by API Flange of the site. Use of any such linked website is at the user's
            own risk.
          </p>
        </section>

        {/* Modifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            7. Modifications
          </h2>
          <p className="text-slate-600 leading-relaxed">
            API Flange may revise these terms of service for our website at any time without notice.
            By using this website, you are agreeing to be bound by the then current version of these
            terms of service.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            8. Governing Law
          </h2>
          <p className="text-slate-600 leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of
            the State of Texas, United States, and you irrevocably submit to the exclusive
            jurisdiction of the courts in that location.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            9. Contact Us
          </h2>
          <p className="text-slate-600 mb-4">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <div className="space-y-2 text-slate-600">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:sales@texasflange.com" className="text-blue-900 hover:text-orange-500">
                sales@texasflange.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+18885550147" className="text-blue-900 hover:text-orange-500">
                (281) 484-8325
              </a>
            </p>
            <p>
              <strong>Address:</strong> Pearland, TX 77581, USA
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
