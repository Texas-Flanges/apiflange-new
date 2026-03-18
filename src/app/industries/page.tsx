'use client';

import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/ui/CTABanner';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Link from 'next/link';
import { ArrowRight, Droplets, Flame, Zap, Wind, Ship, Mountain, Leaf, Hammer, Database, FileText, UtensilsCrossed } from 'lucide-react';

const metadata: Metadata = {
  title: 'Industries | ApiFlange',
  description:
    'ApiFlange serves 120+ unique markets with precision flanges and piping solutions. Explore industry-specific applications in waterworks, oil & gas, petrochemical, power generation, HVAC, marine, mining, agriculture, and more.',
  keywords: [
    'industry solutions',
    'flanges for various industries',
    'oil and gas flanges',
    'petrochemical flanges',
    'power generation flanges',
    'waterworks flanges',
    'marine flanges',
    'HVAC flanges',
    'industrial piping applications',
  ],
  openGraph: {
    title: 'Industries | ApiFlange',
    description:
      'ApiFlange serves 120+ unique markets with precision flanges and piping solutions for demanding industrial applications.',
    url: 'https://www.apiflange.com/industries',
    type: 'website',
  },
};

interface IndustryCard {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  color: string;
}

const industries: IndustryCard[] = [
  {
    id: 'waterworks',
    name: 'Waterworks',
    slug: '/industries/waterworks',
    description: 'AWWA-compliant flanges for municipal water treatment, distribution networks, and pump stations.',
    icon: Droplets,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    slug: '/industries/oil-gas',
    description: 'High-pressure ASME B16.5/B16.47 flanges for upstream, midstream, and downstream applications.',
    icon: Flame,
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    slug: '/industries/petrochemical',
    description: 'Exotic alloys and corrosion-resistant materials for chemical processing and handling corrosive media.',
    icon: UtensilsCrossed,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'power-generation',
    name: 'Power Generation',
    slug: '/industries/power-generation',
    description: 'High-temperature alloy steels for boiler systems, steam lines, and cooling water applications.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'hvac',
    name: 'HVAC',
    slug: '/industries/hvac',
    description: 'Chilled water, steam, and condensate system solutions for building mechanical applications.',
    icon: Wind,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'marine',
    name: 'Marine',
    slug: '/industries/marine',
    description: 'Corrosion-resistant stainless and duplex materials for shipboard and offshore platform applications.',
    icon: Ship,
    color: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'mining',
    name: 'Mining',
    slug: '/industries/mining',
    description: 'Durable flanges for slurry systems, tailings, and demanding mineral processing operations.',
    icon: Mountain,
    color: 'from-gray-500 to-slate-600',
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    slug: '/industries/agriculture',
    description: 'Corrosion-resistant solutions for irrigation systems, fertigation, and agricultural water management.',
    icon: Leaf,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'lumber',
    name: 'Lumber & Pulping',
    slug: '/industries/lumber',
    description: 'Chemical-resistant flanges for wood treatment, pulping liquor systems, and recovery boilers.',
    icon: Hammer,
    color: 'from-amber-600 to-yellow-700',
  },
  {
    id: 'data-centers',
    name: 'Data Centers',
    slug: '/industries/data-centers',
    description: 'Precision cooling system flanges for chiller loops and data center infrastructure requirements.',
    icon: Database,
    color: 'from-blue-600 to-slate-700',
  },
  {
    id: 'pulp-paper',
    name: 'Pulp & Paper',
    slug: '/industries/pulp-paper',
    description: 'Specialized flanges for black liquor systems, steam condensate, and harsh mill environments.',
    icon: FileText,
    color: 'from-yellow-600 to-amber-700',
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    slug: '/industries/food-beverage',
    description: 'NSF-certified, sanitized solutions for food processing, beverage production, and dairy applications.',
    icon: UtensilsCrossed,
    color: 'from-rose-500 to-pink-600',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industry Solutions"
        subtitle="Serving 120+ unique markets with precision-engineered flanges and piping systems tailored to the most demanding industrial applications."
        variant="navy"
        breadcrumbs={[{ label: 'Industries', href: '/industries' }]}
      />

      <SectionWrapper padding="lg" variant="white">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-iron mb-6 text-center">
            Engineered for Every Sector
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Whether you're managing municipal water systems, operating offshore platforms, or optimizing data center cooling loops, ApiFlange delivers industry-specific solutions backed by decades of expertise and engineered to meet the most rigorous standards in your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <Link
                key={industry.id}
                href={industry.slug}
                className="group block p-8 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${industry.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brass transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {industry.description}
                </p>
                <div className="flex items-center text-brass font-semibold group-hover:gap-3 gap-2 transition-all">
                  Learn More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        padding="lg"
        variant="gray"
        heading="Why ApiFlange for Your Industry?"
        subheading="Industry-specific expertise combined with universal quality standards"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '⚙️',
              title: 'Sector Expertise',
              description:
                'Deep knowledge of industry-specific standards, requirements, and applications.',
            },
            {
              icon: '✓',
              title: 'Standards Compliance',
              description:
                'Full compliance with ASME, API, ANSI, ISO, AWWA, and industry-specific regulations.',
            },
            {
              icon: '🎯',
              title: 'Custom Solutions',
              description:
                'Tailored flange configurations and materials for your unique operational needs.',
            },
            {
              icon: '🤝',
              title: 'Industry Partners',
              description:
                'Trusted by leading companies across all major industrial sectors worldwide.',
            },
          ].map((benefit, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper padding="lg" variant="white" heading="Industry Coverage">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-iron">
              Primary Industries
            </h3>
            <ul className="space-y-3">
              {[
                'Oil & Gas (upstream, midstream, downstream)',
                'Petrochemical & Chemical Processing',
                'Power Generation & Utilities',
                'Waterworks & Municipal Systems',
                'HVAC & Building Systems',
              ].map((industry, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">{industry}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-iron">
              Specialized Markets
            </h3>
            <ul className="space-y-3">
              {[
                'Marine & Offshore Platforms',
                'Mining & Mineral Processing',
                'Agriculture & Irrigation',
                'Pulp, Paper & Lumber',
                'Food, Beverage & Dairy',
                'Data Centers & Infrastructure',
              ].map((market, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-brass font-bold mt-1">✓</span>
                  <span className="text-gray-700">{market}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        heading="Ready to Find Your Industry Solution?"
        subtext="Browse our industry-specific pages or contact our technical specialists to discuss your application requirements."
        primaryCTA={{
          label: 'Explore Industries',
          href: '/industries/waterworks',
        }}
        secondaryCTA={{
          label: 'Request Quote',
          href: 'https://www.texasflange.com/contact-us',
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Industries | ApiFlange',
            description: 'Industry-specific flange and piping solutions for 120+ unique markets',
            url: 'https://www.apiflange.com/industries',
            publisher: {
              '@type': 'Organization',
              name: 'ApiFlange',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.apiflange.com/logo.png',
              },
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.apiflange.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Industries',
                  item: 'https://www.apiflange.com/industries',
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
