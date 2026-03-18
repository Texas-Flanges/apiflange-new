import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge classnames with Tailwind CSS conflict resolution
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format date to readable string (e.g., "March 3, 2026")
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate JSON-LD structured data wrapped in a script tag
 */
export function generateJsonLd(data: Record<string, any>): string {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

/**
 * Truncate text to a maximum length with ellipsis
 */
export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Generate slug from title (for URL-friendly strings)
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Capitalize first letter of string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Check if a string is a valid email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Format phone number
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Get text color based on background color for accessibility
 */
export function getContrastColor(bgColor: string): string {
  // Simple implementation - you might want to use a more sophisticated algorithm
  const isDark = bgColor.toLowerCase() === '#001f3f' || bgColor.toLowerCase() === '#001f3f';
  return isDark ? '#ffffff' : '#000000';
}
