import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    '.resume/pages/**/*.{js,ts,jsx,tsx,mdx}',
    '.resume/components/**/*.{js,ts,jsx,tsx,mdx}',
    '.resume/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
export default config;
