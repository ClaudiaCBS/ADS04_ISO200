/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["valentine","light", "dark", "cupcake"],
  },
  plugins: [require('daisyui')],
}

