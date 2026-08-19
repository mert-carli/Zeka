/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050508',
        surface: 'rgba(15, 23, 42, 0.4)', // slate-900 with opacity
        border: 'rgba(255, 255, 255, 0.05)', // white 5%
        primary: {
          start: '#6366f1',
          end: '#8b5cf6',
        },
        success: '#10b981',
        warning: '#f59e0b',
        focus: '#f43f5e',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #6366f1, #8b5cf6)',
      },
    },
  },
  plugins: [],
}
