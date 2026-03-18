'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { isValidEmail } from '@/lib/utils';

interface QuickQuoteFormData {
  productType: string;
  size: string;
  material: string;
  email: string;
  message: string;
}

interface QuickQuoteWidgetProps {
  className?: string;
  position?: 'right' | 'left';
  onSubmitSuccess?: (data: QuickQuoteFormData) => void;
}

const PRODUCT_TYPES = [
  { value: '', label: 'Select a product' },
  { value: 'flanges', label: 'Flanges' },
  { value: 'fittings', label: 'Fittings' },
  { value: 'gaskets', label: 'Gaskets' },
  { value: 'adapters', label: 'Adapters' },
];

const SIZES = [
  { value: '', label: 'Select a size' },
  { value: '1/4"', label: '1/4"' },
  { value: '1/2"', label: '1/2"' },
  { value: '1"', label: '1"' },
  { value: '2"', label: '2"' },
  { value: '4"', label: '4"' },
  { value: '6"', label: '6"' },
  { value: '8"', label: '8"' },
  { value: '10"', label: '10"' },
  { value: 'Custom', label: 'Custom Size' },
];

const MATERIALS = [
  { value: '', label: 'Select a material' },
  { value: 'carbon-steel', label: 'Carbon Steel' },
  { value: 'stainless-steel', label: 'Stainless Steel' },
  { value: 'alloy-steel', label: 'Alloy Steel' },
  { value: 'duplex-steel', label: 'Duplex Steel' },
];

export function QuickQuoteWidget({
  className = '',
  position = 'right',
  onSubmitSuccess,
}: QuickQuoteWidgetProps) {
  const [formData, setFormData] = useState<QuickQuoteFormData>({
    productType: '',
    size: '',
    material: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.productType) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a product type',
      });
      return false;
    }

    if (!formData.size) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a size',
      });
      return false;
    }

    if (!formData.material) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a material',
      });
      return false;
    }

    if (!isValidEmail(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Quote request submitted! We will contact you shortly.',
      });

      setFormData({
        productType: '',
        size: '',
        material: '',
        email: '',
        message: '',
      });

      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
        setIsExpanded(false);
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit quote request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const positionClasses =
    position === 'right'
      ? 'fixed right-4 bottom-4 md:right-6 md:bottom-6'
      : 'fixed left-4 bottom-4 md:left-6 md:bottom-6';

  return (
    <div className={`z-40 ${positionClasses} ${className}`}>
      {/* Collapsed Button */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-orange-500 hover:bg-brass-light text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
        >
          <span className="text-lg">📋</span>
          <span className="hidden sm:inline">Quick Quote</span>
        </button>
      )}

      {/* Expanded Widget */}
      {isExpanded && (
        <div className="bg-white rounded-lg shadow-2xl border border-slate-200 w-full sm:w-96 max-h-screen sm:max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 flex justify-between items-center border-b border-blue-700 z-10">
            <h3 className="text-lg font-bold">Get a Quick Quote</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Close quote widget"
            >
              ✕
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Product Type */}
            <div>
              <label htmlFor="productType" className="block text-sm font-semibold text-slate-900 mb-2">
                Product Type *
              </label>
              <select
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-slate-900"
                required
              >
                {PRODUCT_TYPES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Size */}
            <div>
              <label htmlFor="size" className="block text-sm font-semibold text-slate-900 mb-2">
                Size *
              </label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-slate-900"
                required
              >
                {SIZES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Material */}
            <div>
              <label htmlFor="material" className="block text-sm font-semibold text-slate-900 mb-2">
                Material *
              </label>
              <select
                id="material"
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-slate-900"
                required
              >
                {MATERIALS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-slate-900 placeholder-slate-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your needs..."
                rows={3}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-slate-900 placeholder-slate-500 resize-none"
              />
            </div>

            {/* Status Messages */}
            {submitStatus.type === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                <p className="text-sm font-semibold">{submitStatus.message}</p>
              </div>
            )}

            {submitStatus.type === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                <p className="text-sm font-semibold">{submitStatus.message}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-brass-light disabled:bg-orange-300 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-orange-500 rounded-full animate-spin"></span>
                  Submitting...
                </>
              ) : (
                <>
                  <span>Get Quote</span>
                  <span>→</span>
                </>
              )}
            </button>

            {/* Privacy Notice */}
            <p className="text-xs text-slate-500 text-center">
              We respect your privacy. Your information is secure and will not be shared.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
