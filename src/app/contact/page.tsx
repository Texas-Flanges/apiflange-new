'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Send,
  AlertCircle,
} from 'lucide-react';

// Note: Using 'use client' for form interactivity, so metadata export happens differently
// The metadata would typically be in a separate layout file or handled via a server component
// For this client component, we'll document the metadata structure in comments

const METADATA_CONFIG = {
  title: 'Contact Us | API Flange',
  description:
    'Get in touch with API Flange. We\'re here to answer your questions about custom flanges, specifications, pricing, and technical support. Contact our team today.',
  keywords: [
    'contact',
    'customer support',
    'technical support',
    'sales',
    'API Flange',
    'flange manufacturer',
  ],
  openGraph: {
    title: 'Contact Us | API Flange',
    description:
      'Get in touch with API Flange. We\'re here to answer your questions.',
    url: 'https://www.apiflange.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.apiflange.com/contact',
  },
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'general',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, this would send data to a backend service
      console.log('Form submitted:', formData);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'general',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="Our team is ready to assist you with product information, quotes, technical support, and more."
        variant="navy"
      />

      <Container>
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-iron mb-6">
                  Send us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">
                          Message sent successfully! We'll be in touch soon.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {errors.submit && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm font-medium text-red-800">
                      {errors.submit}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                        errors.company ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your Company"
                    />
                    {errors.company && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="technical">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="delivery">Delivery / Order Status</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Please tell us about your needs..."
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brass hover:bg-brass-dark text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We'll typically respond within 24 business hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Main Contact Info */}
              <div className="bg-gradient-to-br from-iron to-iron-light rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Headquarters</p>
                      <p className="text-white/90 text-sm">
                        500 Industrial Drive
                        <br />
                        Manufacturing, PA 19301
                        <br />
                        USA
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-white/90 text-sm">
                        <a href="tel:+1-610-555-0100" className="hover:text-white transition">
                          (281) 484-8325
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-white/90 text-sm">
                        <a
                          href="mailto:sales@texasflange.com"
                          className="hover:text-white transition"
                        >
                          sales@texasflange.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Business Hours</p>
                      <p className="text-white/90 text-sm">
                        Mon - Fri: 8:00 AM - 5:00 PM EST
                        <br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-600 font-medium">
                    [MAP PLACEHOLDER: Google Maps embed]
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-iron mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <Link
                    href="https://www.texasflange.com/contact-us"
                    className="block text-brass hover:text-iron font-medium text-sm transition"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="/products/flanges"
                    className="block text-brass hover:text-iron font-medium text-sm transition"
                  >
                    View Products
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-brass hover:text-iron font-medium text-sm transition"
                  >
                    Technical Resources
                  </Link>
                  <Link
                    href="/about"
                    className="block text-brass hover:text-iron font-medium text-sm transition"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Regional Sales Section */}
        <SectionWrapper variant="gray">
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Regional Sales Contacts
              </h2>
              <p className="text-gray-600">
                Reach out to your regional sales representative for personalized
                support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  region: 'North America',
                  name: 'Tom Bradford',
                  title: 'Regional Manager',
                  email: 'sales@texasflange.com',
                  phone: '(281) 484-8325',
                },
                {
                  region: 'Europe',
                  name: 'Klaus Mueller',
                  title: 'Regional Manager',
                  email: 'sales@texasflange.com',
                  phone: '+49 30 555 0102',
                },
                {
                  region: 'Asia Pacific',
                  name: 'Wei Chen',
                  title: 'Regional Manager',
                  email: 'sales@texasflange.com',
                  phone: '+86 10 555 0103',
                },
                {
                  region: 'Middle East & Africa',
                  name: 'Ahmed Hassan',
                  title: 'Regional Manager',
                  email: 'sales@texasflange.com',
                  phone: '+971 4 555 0104',
                },
              ].map((contact, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                >
                  <h4 className="font-bold text-iron mb-4">
                    {contact.region}
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-semibold text-gray-700">
                        {contact.name}
                      </span>
                      <br />
                      <span className="text-gray-600 text-xs">
                        {contact.title}
                      </span>
                    </p>
                    <p className="text-sm">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-brass hover:text-iron transition"
                      >
                        {contact.email}
                      </a>
                    </p>
                    <p className="text-sm">
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-brass hover:text-iron transition"
                      >
                        {contact.phone}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </Container>

      {/* CTA Banner */}
      <CTABanner
        heading="Need a Quick Quote?"
        subtext="Use our request for quote form to get detailed pricing and specifications for your project."
        primaryCTA={{ label: 'Start RFQ', href: 'https://www.texasflange.com/contact-us' }}
        secondaryCTA={{ label: 'View Products', href: '/products/flanges' }}
      />
    </>
  );
}
