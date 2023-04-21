/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        'ligth-basic-100': '#E0E0E0',
        'ligth-basic-200': '#BCBCBC',
        'ligth-basic-300': '#262626',
        'ligth-primary-100': '#4CE0D7',
        'ligth-primary-200': '#2D5C59',

        'dark-basic-100': '#555555',
        'dark-basic-200': '#7B7B7B',
        'dark-basic-300': '#ECECEC',
        'dark-primary-100': '#5F9EA0',
        'dark-primary-200': '#8FB6B9'
      },
      backgroundColor: {
        'ligth-basic-100': '#E0E0E0',
        'ligth-basic-200': '#BCBCBC',
        'ligth-basic-300': '#262626',
        'ligth-primary-100': '#4CE0D7',
        'ligth-primary-200': '#36ACA5',

        'dark-basic-100': '#555555',
        'dark-basic-200': '#7B7B7B',
        'dark-basic-300': '#ECECEC',
        'dark-primary-100': '#5F9EA0',
        'dark-primary-200': '#8FB6B9'
      },
      borderColor: {
        'ligth-primary-100': '#4CE0D7',
        'ligth-primary-200': '#36ACA5',

        'dark-primary-100': '#36ACA4',
        'dark-primary-200': '#36ACA4'
      },
      height: {
        '560':'35rem'
      },
      maxWidth: {
        '12': '3rem'
      }
    },
  },
  plugins: [],
}
