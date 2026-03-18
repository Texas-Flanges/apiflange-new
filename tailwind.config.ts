import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Steampunk palette
        brass: '#B5873A',
        'brass-light': '#D4A84B',
        'brass-dark': '#8A6420',
        copper: '#B87333',
        'copper-light': '#DA8A47',
        bronze: '#CD7F32',
        iron: '#1C1C1E',
        'iron-light': '#2A2A2E',
        'iron-mid': '#3A3A3E',
        charcoal: '#232326',
        silver: '#C0C0C0',
        'silver-light': '#D8D8D8',
        'silver-bright': '#E8E8E8',
        'silver-dark': '#8A8A8E',
        parchment: '#F5F0E6',
        'parchment-dark': '#E8DFC8',
        rivet: '#6B6B6F',
        steam: '#F8F6F0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gear-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B5873A' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'brass-glow': '0 0 20px rgba(181, 135, 58, 0.3)',
        'silver-glow': '0 0 20px rgba(192, 192, 192, 0.2)',
        'inner-brass': 'inset 0 2px 4px rgba(181, 135, 58, 0.2)',
      },
      borderColor: {
        'brass-fade': 'rgba(181, 135, 58, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
