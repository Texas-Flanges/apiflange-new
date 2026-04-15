import { Metadata } from 'next';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SOCIAL_LINKS, META_DEFAULTS } from './constants';

interface MetadataParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
  ogType?: 'website' | 'article';
}

/**
 * Generate Next.js Metadata object with consistent patterns
 */
export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
  ogType = 'website',
}: MetadataParams): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = new URL(path, SITE_URL).href;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: ogType as 'website' | 'article',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      siteName: SITE_NAME,
      locale: META_DEFAULTS.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: META_DEFAULTS.twitter,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

/**
 * Generate JSON-LD Product Schema
 */
export function generateProductSchema({
  name,
  description,
  image,
  price,
  currency = 'USD',
  availability = 'InStock',
  rating = 4.5,
  ratingCount = 100,
  sku,
}: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  availability?: string;
  rating?: number;
  ratingCount?: number;
  sku?: string;
}): Record<string, any> {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name,
    description,
    image,
    sku,
    offers: {
      '@type': 'Offer',
      url: SITE_URL,
      priceCurrency: currency,
      price,
      availability: `https://schema.org/${availability}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: ratingCount,
    },
    manufacturer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Generate JSON-LD Article Schema
 */
export function generateArticleSchema({
  headline,
  description,
  image,
  author,
  datePublished,
  dateModified,
  url,
}: {
  headline: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 600,
        height: 60,
      },
    },
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Generate JSON-LD FAQ Schema
 */
export function generateFAQSchema(
  faqs: Array<{
    question: string;
    answer: string;
  }>
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate JSON-LD Breadcrumb Schema
 */
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{
    name: string;
    url: string;
  }>
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: new URL(breadcrumb.url, SITE_URL).href,
    })),
  };
}

/**
 * Generate JSON-LD Organization Schema
 */
export function generateOrganizationSchema(): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    // sameAs omitted - pillar sites do not include social links
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-281-484-8325',
      contactType: 'Customer Service',
      email: 'sales@texasflange.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'PO Box 2889',
      addressLocality: 'Pearland',
      addressRegion: 'TX',
      postalCode: '77588',
      addressCountry: 'US',
    },
    // foundingDate omitted - no verifiable founding date
    areaServed: 'US',
    knowsAbout: ['Flanges', 'API Standards', 'Industrial Components', 'Oil & Gas'],
  };
}

/**
 * Generate JSON-LD Local Business Schema
 */
export function generateLocalBusinessSchema(): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    telephone: '+1-281-484-8325',
    email: 'sales@texasflange.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'PO Box 2889',
      addressLocality: 'Pearland',
      addressRegion: 'TX',
      postalCode: '77588',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    url: SITE_URL,
  };
}

/**
 * Generate JSON-LD How-To Schema
 */
export function generateHowToSchema({
  name,
  description,
  image,
  steps,
}: {
  name: string;
  description: string;
  image: string;
  steps: Array<{
    name: string;
    description: string;
    image?: string;
  }>;
}): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    image,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      description: step.description,
      image: step.image,
    })),
  };
}
