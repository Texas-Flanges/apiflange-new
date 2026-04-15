export const SITE_NAME = 'API Flange';
export const SITE_URL = 'https://apiflange.com';
export const SITE_DESCRIPTION =
  'Premium flange solutions for the oil, gas, and petrochemical industries. High-quality API standards compliance, custom machining, and expert support.';

// Contact Information
export const PHONE = '(281) 484-8325';
export const EMAIL = 'sales@texasflange.com';
export const ADDRESS = 'PO Box 2889, Pearland, TX 77588, USA';

// Business Hours
export const HOURS = {
  monday: '8:00 AM - 5:00 PM CST',
  tuesday: '8:00 AM - 5:00 PM CST',
  wednesday: '8:00 AM - 5:00 PM CST',
  thursday: '8:00 AM - 5:00 PM CST',
  friday: '8:00 AM - 5:00 PM CST',
  saturday: 'Closed',
  sunday: 'Closed',
};

// Social Links (intentionally empty - pillar sites do not include social links)
export const SOCIAL_LINKS: Record<string, string> = {};

// Navigation Items
export const NAV_ITEMS = [
  {
    label: 'Products',
    href: '/products',
    submenu: [
      {
        label: 'Flanges',
        href: '/products/flanges',
      },
      {
        label: 'Fittings',
        href: '/products/fittings',
      },
      {
        label: 'Domestic Flanges',
        href: '/products/domestic-flanges',
      },
    ],
  },
  {
    label: 'Standards',
    href: '/standards',
    submenu: [
      {
        label: 'ASME Flanges',
        href: '/standards/asme-flanges',
      },
      {
        label: 'ANSI Flanges',
        href: '/standards/ansi-flanges',
      },
      {
        label: 'AWWA Flanges',
        href: '/standards/awwa-flanges',
      },
      {
        label: 'DIN Flanges',
        href: '/standards/din-flanges',
      },
    ],
  },
  {
    label: 'Materials',
    href: '/materials',
    submenu: [
      {
        label: 'Carbon Steel',
        href: '/materials/carbon-steel',
      },
      {
        label: 'Stainless Steel',
        href: '/materials/stainless-steel',
      },
      {
        label: 'Alloy Steel',
        href: '/materials/alloy-steel',
      },
      {
        label: 'Galvanized',
        href: '/materials/galvanized',
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
  },
  {
    label: 'Resources',
    href: '/resources',
    submenu: [
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Flange Types Guide',
        href: '/resources/flange-types-guide',
      },
      {
        label: 'Pressure Ratings',
        href: '/resources/pressure-ratings',
      },
      {
        label: 'Glossary',
        href: '/resources/glossary',
      },
    ],
  },
  {
    label: 'Contact',
    href: 'https://www.texasflange.com/contact-us',
  },
];

// SEO Meta Defaults
export const META_DEFAULTS = {
  twitter: '',
  ogType: 'website',
  locale: 'en_US',
  robots: 'index, follow',
  charset: 'utf-8',
};

// Brand Colors
export const BRAND_COLORS = {
  navy: '#001f3f',
  orange: '#ff6b35',
  white: '#ffffff',
  gray: '#f5f5f5',
  darkGray: '#333333',
  lightGray: '#e9e9e9',
};

// Product Categories
export const PRODUCT_CATEGORIES = [
  {
    id: 'flanges',
    name: 'Flanges',
    description: 'Wide variety of flange types for different applications',
    icon: 'flange',
  },
  {
    id: 'fittings',
    name: 'Fittings',
    description: 'High-pressure fittings meeting API standards',
    icon: 'fitting',
  },
  {
    id: 'gaskets',
    name: 'Gaskets',
    description: 'Premium gasket solutions for sealing applications',
    icon: 'gasket',
  },
  {
    id: 'adapters',
    name: 'Adapters',
    description: 'Custom adapters for specialized requirements',
    icon: 'adapter',
  },
];

// Supported Standards
export const STANDARDS = [
  {
    id: 'api-6a',
    name: 'API 6A',
    description: 'Equipment for Drilling and Well-Servicing Operations',
  },
  {
    id: 'api-579',
    name: 'API 579',
    description: 'Risk-Based Inspection of Pressure Equipment',
  },
  {
    id: 'asme-b16-5',
    name: 'ASME B16.5',
    description: 'Pipe Flanges and Flanged Fittings',
  },
  {
    id: 'iso-1126',
    name: 'ISO 1126',
    description: 'Metallic Flanged Joints',
  },
];

// Materials
export const MATERIALS = [
  {
    id: 'carbon-steel',
    name: 'Carbon Steel',
    description: 'Standard material for most applications',
    specs: {
      tensileStrength: '400-500 MPa',
      temperature: '-20 to 200°C',
      pressure: 'Up to 500 bar',
    },
  },
  {
    id: 'stainless-steel',
    name: 'Stainless Steel',
    description: 'Corrosion-resistant properties',
    specs: {
      tensileStrength: '500-600 MPa',
      temperature: '-20 to 425°C',
      pressure: 'Up to 550 bar',
    },
  },
  {
    id: 'alloy-steel',
    name: 'Alloy Steel',
    description: 'Enhanced strength and temperature resistance',
    specs: {
      tensileStrength: '600-800 MPa',
      temperature: '-20 to 500°C',
      pressure: 'Up to 750 bar',
    },
  },
  {
    id: 'duplex-steel',
    name: 'Duplex Steel',
    description: 'Superior corrosion resistance with high strength',
    specs: {
      tensileStrength: '550-650 MPa',
      temperature: '-20 to 425°C',
      pressure: 'Up to 600 bar',
    },
  },
];

// Industries Served
export const INDUSTRIES = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description: 'Offshore and onshore drilling operations',
    icon: 'oil',
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    description: 'Chemical processing and refinery applications',
    icon: 'chemical',
  },
  {
    id: 'power-generation',
    name: 'Power Generation',
    description: 'Thermal and renewable power plants',
    icon: 'power',
  },
  {
    id: 'water-treatment',
    name: 'Water Treatment',
    description: 'Industrial water systems and desalination',
    icon: 'water',
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    description: 'Food processing and beverage production',
    icon: 'food',
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    description: 'Pharmaceutical manufacturing and packaging',
    icon: 'pharma',
  },
];

// Pagination
export const PAGINATION = {
  defaultPageSize: 12,
  defaultPage: 1,
};
