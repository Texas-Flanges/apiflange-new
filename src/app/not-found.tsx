'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        {/* Search Suggestion */}
        <div className="bg-white rounded-lg p-6 mb-8 border border-slate-200">
          <p className="text-sm text-slate-600 mb-3">
            Looking for something specific?
          </p>
          <p className="text-slate-900 font-semibold">
            Try using our search or browse our popular sections below.
          </p>
        </div>

        {/* Popular Links */}
        <div className="grid grid-cols-1 gap-3 mb-8">
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-iron text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Browse Products
          </Link>
          <Link
            href="/resources"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-brass-light transition-colors"
          >
            View Resources
          </Link>
          <Link
            href="https://www.texasflange.com/contact-us/?ref=apiflange-new"
            className="inline-block px-6 py-3 bg-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center justify-center text-blue-900 hover:text-orange-500 font-semibold transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
