'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-wide py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Texas Flanges
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="https://www.texasflange.com/contact-us" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>
        <Link href="https://texasflange.com/contact" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}