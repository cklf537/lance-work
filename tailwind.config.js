/** @type {import('tailwindcss').Config} */
export default {
  // content: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily:{
      sans: [
        '"Poppins", sans-serif',
        {
          fontFeatureSettings: 'normal',
          fontVariationSettings: 'normal'
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
