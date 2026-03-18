'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Texas Flanges</h3>
            <p className="text-gray-300">
              Leading supplier of quality flanges for industrial applications.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Related Sites</h4>
            <ul className="space-y-2">
<li><a href="https://nozzleflanges.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">Nozzle Flanges</a></li>
<li><a href="https://bodyflanges.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">Body Flanges</a></li>
<li><a href="https://flangesansi.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">Flanges ANSI Pro</a></li>

            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">
              Phone: <a href="tel:+1-281-484-8325" className="hover:text-white transition">281-484-8325</a>
            </p>
            <p className="text-gray-300 mb-2">
              Email: <a href="mailto:sales@texasflange.com" className="hover:text-white transition">sales@texasflange.com</a>
            </p>
            <p className="text-gray-300">
              Website: <a href="https://texasflange.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">texasflange.com</a>
            </p>
            <p className="text-gray-300 mt-2">Baytown, TX</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Texas Flanges. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}