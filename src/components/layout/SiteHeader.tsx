'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Search,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
    submenu: [
      { label: 'Flanges', href: '/products/flanges' },
      { label: 'Pipe Fittings', href: '/products/fittings' },
      { label: 'Custom Machining', href: '/services/custom-machining' },
      { label: 'Domestic Flanges', href: '/products/domestic-flanges' },
    ],
  },
  {
    label: 'Standards',
    href: '/standards',
    submenu: [
      { label: 'API', href: 'https://www.texasflange.com/products/flange-dims-weights/api-flange-slide-rule/' },
      { label: 'ASME', href: '/standards/asme-flanges' },
      { label: 'ANSI', href: '/standards/ansi-flanges' },
      { label: 'AWWA', href: '/standards/awwa-flanges' },
      { label: 'DIN', href: '/standards/din-flanges' },
    ],
  },
  {
    label: 'Materials',
    href: '/materials',
    submenu: [
      { label: 'Carbon Steel', href: '/materials/carbon-steel' },
      { label: 'Stainless Steel', href: '/materials/stainless-steel' },
      { label: 'Alloy Steel', href: '/materials/alloy-steel' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    submenu: [
      { label: 'Oil & Gas', href: '/industries/oil-gas' },
      { label: 'Chemical Processing', href: '/industries/petrochemical' },
      { label: 'Power Generation', href: '/industries/power-generation' },
      { label: 'Water & Wastewater', href: '/industries/waterworks' },
      { label: 'Mining', href: '/industries/mining' },
      { label: 'Petrochemical', href: '/industries/petrochemical' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    submenu: [
      { label: 'Flange Types Guide', href: '/resources/flange-types-guide' },
      { label: 'Pressure Ratings', href: '/resources/pressure-ratings' },
      { label: 'Bolt Torque Guide', href: '/tools/bolt-torque-calculator' },
      { label: 'Material Grades', href: '/resources/material-grades' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: 'https://www.texasflange.com/contact-us' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-iron border-b border-iron-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-6 text-silver-dark">
              <a
                href="tel:(281)484-8325"
                className="flex items-center gap-2 hover:text-brass transition-colors"
              >
                <Phone size={14} />
                (281) 484-8325
              </a>
              <a
                href="mailto:sales@texasflange.com"
                className="flex items-center gap-2 hover:text-brass transition-colors"
              >
                <Mail size={14} />
                sales@texasflange.com
              </a>
            </div>
            <Link
              href="https://www.texasflange.com/contact-us"
              className="text-brass font-semibold hover:text-brass-light transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-charcoal transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-black/30' : ''
        }`}
      >
        {/* Brass trim line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-brass to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="text-silver-bright font-black text-xl md:text-2xl tracking-tight font-display">
                API <span className="text-brass">FLANGE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavDropdown key={item.label} item={item} />
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-silver-dark hover:text-brass transition-colors hidden sm:block"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              <Link
                href="https://www.texasflange.com/contact-us"
                className="hidden md:inline-block bg-brass text-iron px-6 py-2 rounded font-bold hover:bg-brass-light transition-colors"
              >
                Request Quote
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-silver-dark hover:text-brass transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-iron border-t border-brass/20"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    expanded={expandedMenu === item.label}
                    onToggle={(label) =>
                      setExpandedMenu(
                        expandedMenu === label ? null : label
                      )
                    }
                  />
                ))}

                <div className="pt-4 border-t border-brass/20 mt-4">
                  <Link
                    href="https://www.texasflange.com/contact-us"
                    className="block w-full bg-brass text-iron px-4 py-3 rounded font-bold hover:bg-brass-light transition-colors text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl mx-4 bg-steam rounded-lg shadow-xl border border-silver/30"
            >
              <form onSubmit={handleSearchSubmit} className="p-6">
                <input
                  type="text"
                  placeholder="Search flanges, standards, resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-xl px-4 py-3 border border-silver/40 rounded bg-white text-iron focus:outline-none focus:border-brass focus:ring-2 focus:ring-brass/20"
                />
                <div className="mt-4 flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-brass text-iron px-6 py-2 rounded font-bold hover:bg-brass-light transition-colors"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="flex-1 bg-silver/20 text-iron px-6 py-2 rounded font-bold hover:bg-silver/30 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface NavDropdownProps {
  item: NavItem;
}

function NavDropdown({ item }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={() => hasSubmenu && setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className="px-3 py-2 text-silver-light font-medium flex items-center gap-1 hover:text-brass transition-colors"
      >
        {item.label}
        {hasSubmenu && (
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </Link>

      <AnimatePresence>
        {isOpen && hasSubmenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-56 bg-charcoal border border-iron-mid shadow-xl rounded mt-0 py-2 z-50"
          >
            {item.submenu!.map((subitem) => (
              <Link
                key={subitem.label}
                href={subitem.href}
                className="block px-4 py-2 text-silver-dark hover:bg-iron-light hover:text-brass transition-colors text-sm"
              >
                {subitem.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MobileNavItemProps {
  item: NavItem;
  expanded: boolean;
  onToggle: (label: string) => void;
}

function MobileNavItem({ item, expanded, onToggle }: MobileNavItemProps) {
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className="flex-1 px-3 py-2 text-silver-light font-medium hover:text-brass transition-colors"
        >
          {item.label}
        </Link>
        {hasSubmenu && (
          <button
            onClick={() => onToggle(item.label)}
            className="px-3 py-2 text-silver-dark hover:text-brass transition-colors"
          >
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        )}
      </div>

      <AnimatePresence>
        {expanded && hasSubmenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-charcoal pl-4 border-l-2 border-brass/30 ml-3"
          >
            {item.submenu!.map((subitem) => (
              <Link
                key={subitem.label}
                href={subitem.href}
                className="block px-3 py-2 text-silver-dark hover:text-brass transition-colors text-sm"
              >
                {subitem.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
