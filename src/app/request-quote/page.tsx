'use client';

import { useState } from 'react';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  Upload,
  Clock,
  Phone,
  ArrowRight,
} from 'lucide-react';

interface FormData {
  // Step 1: Product Selection
  productType: string;
  size: string;
  pressureClass: string;
  material: string;
  quantity: string;
  faceType: string;

  // Step 2: Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;

  // Step 3: Additional Details
  specialRequirements: string;
  deliveryTimeline: string;
  drawingFile: string;

  // Step 4: Review (auto-populated)
}

interface FormErrors {
  [key: string]: string;
}

const steps = [
  { number: 1, title: 'Product', description: 'Selection' },
  { number: 2, title: 'Contact', description: 'Information' },
  { number: 3, title: 'Details', description: '& Documents' },
  { number: 4, title: 'Review', description: '& Submit' },
];

const productTypes = [
  'Weld Neck Flange',
  'Slip-On Flange',
  'Socket Weld Flange',
  'Threaded Flange',
  'Lap Joint Flange',
  'Ring Type Joint (RTJ) Flange',
  'Orifice Flange',
  'Custom Flange Design',
];

const sizes = [
  '1/2"',
  '3/4"',
  '1"',
  '1.5"',
  '2"',
  '2.5"',
  '3"',
  '4"',
  '6"',
  '8"',
  '10"',
  '12"',
  '14"',
  '16"',
  '18"',
  '20"',
  '24"',
  'Custom Size',
];

const pressureClasses = [
  'Class 150',
  'Class 300',
  'Class 600',
  'Class 900',
  'Class 1500',
  'Class 2500',
  'Custom Rating',
];

const materials = [
  'Carbon Steel (ASTM A105)',
  'Stainless Steel 304 (ASTM A182 F304)',
  'Stainless Steel 316 (ASTM A182 F316L)',
  'Alloy Steel F22 (ASTM A182)',
  'Alloy Steel F91 (ASTM A182)',
  'Duplex Stainless (ASTM A182 F31803)',
  'Super Duplex (ASTM A182 F32205)',
  'Inconel/High-Temperature Alloy',
  'Other/Specialty Material',
];

const faceTypes = [
  'Flat Face (FF)',
  'Raised Face (RF)',
  'Ring Type Joint (RTJ)',
  'Not Sure',
];

const deliveryTimelines = [
  'ASAP (1-2 weeks)',
  '2-4 weeks',
  '4-8 weeks',
  '8-12 weeks',
  '12+ weeks',
  'Custom Schedule',
];

export default function RequestQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<FormData>({
    productType: '',
    size: '',
    pressureClass: '',
    material: '',
    quantity: '',
    faceType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    specialRequirements: '',
    deliveryTimeline: '',
    drawingFile: '',
  });

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.productType)
        newErrors.productType = 'Product type is required';
      if (!formData.size) newErrors.size = 'Size is required';
      if (!formData.pressureClass)
        newErrors.pressureClass = 'Pressure class is required';
      if (!formData.material) newErrors.material = 'Material is required';
      if (!formData.quantity)
        newErrors.quantity = 'Quantity is required';
      else if (isNaN(Number(formData.quantity)) || Number(formData.quantity) <= 0)
        newErrors.quantity = 'Please enter a valid quantity';
      if (!formData.faceType) newErrors.faceType = 'Face type is required';
    }

    if (step === 2) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        newErrors.email = 'Please enter a valid email';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.company) newErrors.company = 'Company name is required';
      if (!formData.jobTitle) newErrors.jobTitle = 'Job title is required';
    }

    if (step === 3) {
      if (!formData.deliveryTimeline)
        newErrors.deliveryTimeline = 'Delivery timeline is required';
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
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        drawingFile: file.name,
      }));
    }
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateStep(4)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      console.log('RFQ submitted:', formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitted(true);
      // Reset form after 3 seconds and return to step 1
      setTimeout(() => {
        setCurrentStep(1);
        setFormData({
          productType: '',
          size: '',
          pressureClass: '',
          material: '',
          quantity: '',
          faceType: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          jobTitle: '',
          specialRequirements: '',
          deliveryTimeline: '',
          drawingFile: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to submit RFQ. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render success screen
  if (submitted) {
    return (
      <>
        <PageHero
          title="Request for Quote"
          subtitle="Let us help you find the perfect flanges for your application."
          variant="navy"
        />

        <Container>
          <SectionWrapper>
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-iron mb-4">
                Quote Request Submitted!
              </h2>
              <p className="text-gray-600 mb-8">
                Thank you for submitting your request. Our technical team will
                review your specifications and contact you within 24 business
                hours with a detailed quote and recommendations.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  A confirmation email has been sent to {formData.email}
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="/">
                    <Button variant="primary">Back to Home</Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="secondary">Browse Resources</Button>
                  </Link>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </Container>

        <CTABanner
          heading="Questions While You Wait?"
          subtext="Our customer support team is available to help. Reach out anytime."
          primaryCTA={{ label: 'Contact Support', href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new' }}
        />
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Request for Quote"
        subtitle="Let us help you find the perfect flanges for your application."
        variant="navy"
      />

      <Container>
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Progress Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-iron mb-6">RFQ Progress</h3>
                <div className="space-y-4">
                  {steps.map((step, idx) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition ${
                            step.number < currentStep
                              ? 'bg-green-500 text-white'
                              : step.number === currentStep
                              ? 'bg-brass text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {step.number < currentStep ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            step.number
                          )}
                        </div>
                        {idx < steps.length - 1 && (
                          <div
                            className={`w-0.5 h-12 my-2 transition ${
                              step.number < currentStep
                                ? 'bg-green-500'
                                : 'bg-gray-200'
                            }`}
                          />
                        )}
                      </div>
                      <div className={step.number === currentStep ? '' : 'opacity-50'}>
                        <p className="font-semibold text-iron text-sm">
                          {step.title}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar CTA */}
              <div className="mt-6 bg-brass text-white rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Quick Response</p>
                      <p className="text-xs text-white/90">
                        Avg. response time: 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Need Help?</p>
                      <p className="text-xs text-white/90">
                        Call us at{' '}
                        <a
                          href="tel:+1-281-484-8325"
                          className="font-medium hover:text-white transition"
                        >
                          (281) 484-8325
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                {errors.submit && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm font-medium text-red-800">
                      {errors.submit}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* STEP 1: Product Selection */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <h2 className="text-2xl font-bold text-iron mb-2">
                          Product Selection
                        </h2>
                        <p className="text-gray-600">
                          Tell us about the flanges you need.
                        </p>
                      </div>

                      {/* Product Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Flange Type *
                        </label>
                        <select
                          name="productType"
                          value={formData.productType}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.productType
                              ? 'border-red-500'
                              : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a flange type...</option>
                          {productTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.productType && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.productType}
                          </p>
                        )}
                      </div>

                      {/* Size */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Flange Size (Nominal Pipe Size) *
                        </label>
                        <select
                          name="size"
                          value={formData.size}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.size ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a size...</option>
                          {sizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                        {errors.size && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.size}
                          </p>
                        )}
                      </div>

                      {/* Pressure Class */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pressure Class (ASME Rating) *
                        </label>
                        <select
                          name="pressureClass"
                          value={formData.pressureClass}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.pressureClass
                              ? 'border-red-500'
                              : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a pressure class...</option>
                          {pressureClasses.map((cls) => (
                            <option key={cls} value={cls}>
                              {cls}
                            </option>
                          ))}
                        </select>
                        {errors.pressureClass && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.pressureClass}
                          </p>
                        )}
                      </div>

                      {/* Material */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Material *
                        </label>
                        <select
                          name="material"
                          value={formData.material}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.material
                              ? 'border-red-500'
                              : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a material...</option>
                          {materials.map((mat) => (
                            <option key={mat} value={mat}>
                              {mat}
                            </option>
                          ))}
                        </select>
                        {errors.material && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.material}
                          </p>
                        )}
                      </div>

                      {/* Quantity */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Quantity (Number of Flanges) *
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g., 50"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.quantity
                              ? 'border-red-500'
                              : 'border-gray-300'
                          }`}
                        />
                        {errors.quantity && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.quantity}
                          </p>
                        )}
                      </div>

                      {/* Face Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Flange Face Type *
                        </label>
                        <select
                          name="faceType"
                          value={formData.faceType}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.faceType
                              ? 'border-red-500'
                              : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a face type...</option>
                          {faceTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.faceType && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.faceType}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Contact Information */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <h2 className="text-2xl font-bold text-iron mb-2">
                          Contact Information
                        </h2>
                        <p className="text-gray-600">
                          Who should we contact with your quote?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                              errors.firstName
                                ? 'border-red-500'
                                : 'border-gray-300'
                            }`}
                          />
                          {errors.firstName && (
                            <p className="text-sm text-red-600 mt-1">
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        {/* Last Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                              errors.lastName
                                ? 'border-red-500'
                                : 'border-gray-300'
                            }`}
                          />
                          {errors.lastName && (
                            <p className="text-sm text-red-600 mt-1">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.company
                              ? 'border-red-500'
                              : 'border-gray-300'
                          }`}
                        />
                        {errors.company && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.company}
                          </p>
                        )}
                      </div>

                      {/* Job Title */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.jobTitle
                              ? 'border-red-500'
                              : 'border-gray-300'
                          }`}
                        />
                        {errors.jobTitle && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.jobTitle}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Additional Details */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <h2 className="text-2xl font-bold text-iron mb-2">
                          Additional Details
                        </h2>
                        <p className="text-gray-600">
                          Help us better understand your requirements.
                        </p>
                      </div>

                      {/* Special Requirements */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requirements or Notes
                        </label>
                        <textarea
                          name="specialRequirements"
                          value={formData.specialRequirements}
                          onChange={handleChange}
                          rows={4}
                          placeholder="e.g., API 6A certification required, high-temperature service above 600°F, specific tolerance requirements..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Include any special certifications, compliance
                          requirements, or technical specifications.
                        </p>
                      </div>

                      {/* Delivery Timeline */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Desired Delivery Timeline *
                        </label>
                        <select
                          name="deliveryTimeline"
                          value={formData.deliveryTimeline}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brass focus:border-transparent outline-none transition ${
                            errors.deliveryTimeline
                              ? 'border-red-500'
                              : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a timeline...</option>
                          {deliveryTimelines.map((timeline) => (
                            <option key={timeline} value={timeline}>
                              {timeline}
                            </option>
                          ))}
                        </select>
                        {errors.deliveryTimeline && (
                          <p className="text-sm text-red-600 mt-1">
                            {errors.deliveryTimeline}
                          </p>
                        )}
                      </div>

                      {/* File Upload */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Upload Technical Drawing (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brass transition cursor-pointer">
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            id="fileUpload"
                            accept=".pdf,.dwg,.dxf,.jpg,.png"
                          />
                          <label
                            htmlFor="fileUpload"
                            className="cursor-pointer block"
                          >
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="font-medium text-gray-700">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              PDF, DWG, DXF, JPG, PNG (Max 10MB)
                            </p>
                          </label>
                        </div>
                        {formData.drawingFile && (
                          <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            {formData.drawingFile} selected
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Review & Submit */}
                  {currentStep === 4 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <h2 className="text-2xl font-bold text-iron mb-2">
                          Review Your Quote Request
                        </h2>
                        <p className="text-gray-600">
                          Please review all information before submitting.
                        </p>
                      </div>

                      {/* Product Summary */}
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h3 className="font-bold text-iron mb-4">
                          Product Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-600">Flange Type</p>
                            <p className="font-medium text-gray-900">
                              {formData.productType}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Size</p>
                            <p className="font-medium text-gray-900">
                              {formData.size}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">
                              Pressure Class
                            </p>
                            <p className="font-medium text-gray-900">
                              {formData.pressureClass}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Material</p>
                            <p className="font-medium text-gray-900">
                              {formData.material}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Quantity</p>
                            <p className="font-medium text-gray-900">
                              {formData.quantity} units
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Face Type</p>
                            <p className="font-medium text-gray-900">
                              {formData.faceType}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Summary */}
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h3 className="font-bold text-iron mb-4">
                          Contact Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-600">Name</p>
                            <p className="font-medium text-gray-900">
                              {formData.firstName} {formData.lastName}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Email</p>
                            <p className="font-medium text-gray-900">
                              {formData.email}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Phone</p>
                            <p className="font-medium text-gray-900">
                              {formData.phone}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Company</p>
                            <p className="font-medium text-gray-900">
                              {formData.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Additional Details Summary */}
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h3 className="font-bold text-iron mb-4">
                          Additional Information
                        </h3>
                        {formData.specialRequirements && (
                          <div className="mb-4">
                            <p className="text-xs text-gray-600">
                              Special Requirements
                            </p>
                            <p className="font-medium text-gray-900">
                              {formData.specialRequirements}
                            </p>
                          </div>
                        )}
                        <div className="mb-4">
                          <p className="text-xs text-gray-600">
                            Delivery Timeline
                          </p>
                          <p className="font-medium text-gray-900">
                            {formData.deliveryTimeline}
                          </p>
                        </div>
                        {formData.drawingFile && (
                          <div>
                            <p className="text-xs text-gray-600">Drawing</p>
                            <p className="font-medium text-gray-900 flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-600" />
                              {formData.drawingFile}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Confirmation Checkbox */}
                      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <input
                          type="checkbox"
                          id="confirm"
                          required
                          className="mt-1"
                        />
                        <label
                          htmlFor="confirm"
                          className="text-sm text-gray-700"
                        >
                          I confirm that the information above is accurate and
                          authorize API Flange to contact me regarding this
                          quote request.
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      disabled={currentStep === 1}
                      className="flex items-center gap-2 px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="ml-auto flex items-center gap-2 px-6 py-2 bg-brass hover:bg-[#D0521A] text-white rounded-lg transition font-semibold"
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="ml-auto flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-4 w-4"
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
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Request
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Why Request a Quote Section */}
        <SectionWrapper variant="gray">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-iron mb-4">
                Why Request a Quote With Us?
              </h2>
              <p className="text-gray-600">
                Get expert guidance and competitive pricing for your flange
                requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Expert Engineering',
                  description:
                    'Our technical team reviews your specifications and recommends optimal solutions.',
                },
                {
                  title: 'Fast Response',
                  description:
                    'Detailed quotes within 24 business hours of submission.',
                },
                {
                  title: 'Flexible Solutions',
                  description:
                    'Custom designs and specifications tailored to your unique needs.',
                },
                {
                  title: 'Competitive Pricing',
                  description:
                    'Volume discounts and flexible payment terms available.',
                },
                {
                  title: 'Quality Assurance',
                  description:
                    'Every flange meets strict quality standards and certifications.',
                },
                {
                  title: 'Support & Service',
                  description:
                    'Dedicated account managers ensure your project succeeds.',
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <h3 className="font-bold text-iron mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </Container>

      {/* CTA Banner */}
      <CTABanner
        heading="Questions About Your RFQ?"
        subtext="Our sales team is ready to help. Contact us for immediate assistance with your quote request."
        primaryCTA={{ label: 'Contact Sales', href: 'https://www.texasflange.com/contact-us/?ref=apiflange-new' }}
        secondaryCTA={{ label: 'Call Us', href: 'tel:+1-281-484-8325' }}
      />
    </>
  );
}
