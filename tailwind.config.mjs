/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22f5ff',
          50: '#e0fdff',
          100: '#b8fbff',
          200: '#7af8ff',
          300: '#22f5ff',
          400: '#00e0eb',
          500: '#22f5ff',
          600: '#00b8c2',
          700: '#008f97',
          800: '#006d73',
          900: '#004b4f',
        },
        accent: {
          DEFAULT: '#a855f7',
          500: '#a855f7',
        },
        surface: {
          DEFAULT: '#0a0a0f',
          50: '#1a1a24',
          100: '#14141c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
