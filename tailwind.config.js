/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      textColor: {
        'ligth-theme-100': '#E0E0E0',
        'ligth-theme-200': '#BCBCBC',
        'ligth-theme-300': '#262626',
        'ligth-theme-400': '#4CE0D7',
        'ligth-theme-500': '#36ACA5',


        'ligth-basic-200': '#BCBCBC',
        'ligth-basic-100': '#E0E0E0',
        'ligth-basic-300': '#262626',
        'ligth-primary-100': '#4CE0D7',
        'ligth-primary-200': '#36ACA5'

      },
      backgroundColor: {
        'ligth-theme-100': '#4CE0D7',
        'ligth-theme-200': '#36ACA5',
        'dark-theme-100': '#999999',

        'ligth-basic-100': '#E0E0E0',
        'ligth-basic-200': '#BCBCBC',
        'ligth-basic-300': '#262626',
        'ligth-primary-100': '#4CE0D7',
        'ligth-primary-200': '#36ACA5'
      },
      borderColor: {
        'ligth-theme-100': '#4CE0D7',
        'ligth-theme-200': '#BCBCBC',

        'ligth-primary-100': '#4CE0D7',
        'ligth-primary-200': '#36ACA5'
      },
      maxWidth: {
        '12': '3rem'
      }
    },
  },
  plugins: [],
}
