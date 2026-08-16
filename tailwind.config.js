/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#111111',
          surface: '#151515',
          elevated: '#1A1A1A',
          card: '#121212',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.14)',
          focus: 'rgba(59, 130, 246, 0.5)',
        },
        content: {
          primary: '#F5F5F5',
          secondary: '#A1A1AA',
          muted: '#71717A',
          faint: '#52525B',
        },
        accent: {
          DEFAULT: '#3B82F6',
          blue: '#2563EB',
          cobalt: '#3874FF',
          glow: 'rgba(56, 116, 255, 0.15)',
          border: 'rgba(59, 130, 246, 0.3)',
          subtle: 'rgba(59, 130, 246, 0.08)',
        },
        status: {
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
        wide: '0.04em',
        widest: '0.12em',
      }
    },
  },
  plugins: [],
}
