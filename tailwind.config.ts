import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        white: {
          0: '#FFFFFF',
          300: '#C9C9C9',
        },
        gray: {
          50: '#F2F2F2',
          100: '#F3F4F6',
          300: '#F5F5F5',
        },
        blue: {
          700: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
