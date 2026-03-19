/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F14',
        surface: '#121A24',
        surfaceLight: '#1B2430',
        steel: '#7C8A99',
        electric: '#2F80ED',
        cyan: '#35D0FF',
        textLight: '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(53, 208, 255, 0.4)',
        'glow-electric': '0 0 30px rgba(47, 128, 237, 0.5)',
      }
    },
  },
  plugins: [],
}
