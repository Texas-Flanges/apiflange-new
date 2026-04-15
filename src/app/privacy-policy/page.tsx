import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy',
  description:
    'Read our privacy policy to understand how API Flange collects, uses, and protects your personal information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
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
            1. Introduction
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            API Flange ("we," "us," "our," or "Company") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website, use our services, and interact with us in any
            other way.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Please read this Privacy Policy carefully. If you do not agree with our policies and
            practices, please do not use our website or services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Information We Collect
          </h2>

          <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">
            Personal Information
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            We may collect personal information that you voluntarily provide to us, including but
            not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4 ml-4">
            <li>Name, email address, and phone number</li>
            <li>Company name, position, and industry</li>
            <li>Billing and shipping addresses</li>
            <li>Product preferences and requirements</li>
            <li>Messages, inquiries, and feedback</li>
            <li>Payment information (processed securely)</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Automatically Collected Information
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            When you visit our website, we may automatically collect information about your device
            and your usage, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4 ml-4">
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website and links clicked</li>
            <li>Device type and operating system</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
            <li>Processing your inquiries, orders, and payments</li>
            <li>Providing customer support and technical assistance</li>
            <li>Improving our website, products, and services</li>
            <li>Sending promotional materials and updates (with your consent)</li>
            <li>Analyzing website usage and trends</li>
            <li>Complying with legal obligations</li>
            <li>Preventing fraud and ensuring security</li>
            <li>Personalizing your experience on our website</li>
          </ul>
        </section>

        {/* Sharing Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            4. Sharing Your Information
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. However, we
            may share your information in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4 ml-4">
            <li>With service providers who assist us in operating our website and conducting our business</li>
            <li>When required by law or legal process</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>With your explicit consent or at your direction</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Any third parties we share information with are contractually obligated to maintain
            the confidentiality and security of your information.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            5. Data Security
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            We implement appropriate technical, administrative, and physical safeguards to protect
            your personal information against unauthorized access, alteration, disclosure, or
            destruction. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4 ml-4">
            <li>SSL encryption for data transmission</li>
            <li>Secure password policies</li>
            <li>Regular security audits and assessments</li>
            <li>Limited access to personal information by authorized personnel only</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            While we strive to protect your information, no security system is impenetrable. We
            cannot guarantee absolute security of your information.
          </p>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            6. Cookies and Similar Technologies
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Our website uses cookies and similar tracking technologies to enhance your experience,
            analyze usage patterns, and deliver personalized content. You can control cookie
            settings through your browser preferences, although disabling cookies may affect the
            functionality of our website.
          </p>
        </section>

        {/* Your Rights and Choices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            7. Your Rights and Choices
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4 ml-4">
            <li>Access, review, and update your personal information</li>
            <li>Opt-out of marketing communications at any time</li>
            <li>Request deletion of your personal information (subject to legal requirements)</li>
            <li>Lodge a complaint with the appropriate data protection authority</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            To exercise any of these rights, please contact us using the information provided in
            the "Contact Us" section.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            8. Data Retention
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We retain your personal information for as long as necessary to provide our services,
            comply with legal obligations, and resolve any disputes. When information is no longer
            needed, we securely delete or anonymize it in accordance with applicable laws.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            9. Third-Party Links
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices of these external sites. We recommend reviewing the privacy policies
            of any third-party websites before providing personal information.
          </p>
        </section>

        {/* Changes to This Privacy Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            10. Changes to This Privacy Policy
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements, and other factors. The updated version will be effective
            as of the date stated at the top of this policy. Your continued use of our website
            following any changes constitutes your acceptance of the updated Privacy Policy.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            11. Contact Us
          </h2>
          <p className="text-slate-600 mb-4">
            If you have questions about this Privacy Policy or our privacy practices, please
            contact us at:
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
              <a href="tel:+1-281-484-8325" className="text-blue-900 hover:text-orange-500">
                (281) 484-8325
              </a>
            </p>
            <p>
              <strong>Address:</strong> PO Box 2889, Pearland, TX 77588, USA
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
