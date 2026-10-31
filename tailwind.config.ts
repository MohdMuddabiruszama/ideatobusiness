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
        brand: {
          deep: '#0B2D1F', // Primary dark brand color & headings
          emerald: '#10B981', // Primary brand accent
          hover: '#059669', // Hover state
          mint: '#ECFDF5', // Soft background
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#0B2D1F',
          950: '#061D14',
        },
        accent: {
          orange: '#F59E0B', // Growth arrow & highlights
          yellow: '#FCD34D', // Secondary accent & focus outlines
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        neutral: {
          navy: '#111827', // Text and dark backgrounds
          lightgray: '#F3F4F6', // Cards and section backgrounds
          charcoal: '#1F2937',
          muted: '#4B5563',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        btn: '10px',
        card: '16px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(11, 45, 31, 0.05)',
        'card-hover': '0 8px 24px rgba(11, 45, 31, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
