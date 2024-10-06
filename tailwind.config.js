/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'lounge-off-white--light': '#F0F0F0',
        'lounge-off-white': '#E5E5E5',
        'lounge-grey--light': '#E7E7E7',
        'loung-grey--mid': '#C8C8C8',
        'lounge-grey': '#929292',
        'lounge-grey--dark': '#7D7D7D',
        'lounge-grey--darker': '#757272',
      },
    },
  },
  plugins: [],
}
