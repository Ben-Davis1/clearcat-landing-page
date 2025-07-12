/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#283593',     // Midnight Blue
        accent: '#FFC107',      // Amber
        cream: '#FFF8E1',       // Cream background
        success: '#43E6B2',     // Mint Green
        charcoal: '#22223B',    // Charcoal text
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}