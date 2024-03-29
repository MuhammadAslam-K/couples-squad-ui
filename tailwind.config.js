/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'zilla': ['"Zilla Slab"', 'serif'], // Add 'zilla' as a custom font family
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}

