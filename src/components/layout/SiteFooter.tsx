'use client';

import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-iron text-silver-light">
      {/* Brass trim */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-brass to-transparent" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="lg:pr-8">
            <div className="mb-6">
              <h3 className="text-2xl font-black tracking-tight mb-2 font-display text-silver-bright">
                API <span className="text-brass">FLANGE</span>
              </h3>
              <p className="text-silver-dark text-sm">
                Industrial steel flanges, pipe fittings, and custom-machined
                connections for critical piping systems. Every piece built to
                code, shipped with documentation.
              </p>
            </div>

            {/* Social links intentionally removed - pillar sites do not include social media links */}
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-base font-bold mb-6 text-brass">Products</h4>
            <ul className="space-y-3">
              {[
                { label: 'Flanges', href: '/products/flanges' },
                { label: 'Pipe Fittings', href: '/products/fittings' },
                { label: 'Custom Machining', href: '/services/custom-machining' },
                { label: 'Domestic Flanges', href: '/products/domestic-flanges' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-silver-dark hover:text-brass transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-base font-bold mb-6 text-brass">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'Flange Types Guide', href: '/resources/flange-types-guide' },
                { label: 'Pressure Ratings', href: '/resources/pressure-ratings' },
                { label: 'Bolt Torque Guide', href: '/tools/bolt-torque-calculator' },
                { label: 'Material Grades', href: '/resources/material-grades' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-silver-dark hover:text-brass transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-base font-bold mb-6 text-brass">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-brass flex-shrink-0" />
                <span className="text-silver-dark text-sm">
                  PO Box 2889, Pearland, TX 77588
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={20} className="text-brass flex-shrink-0 mt-0.5" />
                <a
                  href="tel:(281)484-8325"
                  className="text-silver-dark hover:text-brass transition-colors text-sm"
                >
                  (281) 484-8325
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={20} className="text-brass flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:sales@texasflange.com"
                  className="text-silver-dark hover:text-brass transition-colors text-sm"
                >
                  sales@texasflange.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock size={20} className="text-brass flex-shrink-0 mt-0.5" />
                <span className="text-silver-dark text-sm">
                  Mon - Fri: 8am - 5pm CST
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-iron-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-silver-dark">
            <p>
              &copy; {currentYear} API Flange. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/terms-and-conditions"
                className="hover:text-brass transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-brass transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
