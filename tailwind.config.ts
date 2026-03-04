import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      colors: {
        navy: {
          900: '#0a0f1e',
          800: '#0d1426',
          700: '#111d35',
          600: '#162444',
        },
        gold: {
          400: '#d4a843',
          500: '#c49a3c',
        }
      }
    },
  },
  plugins: [],
}
export default config
