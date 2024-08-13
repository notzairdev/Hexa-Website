import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/avif/bg.avif')",
        'gradient-bg': "url('/avif/bg_gradient.avif')",
        'gradient-bg-2': "url('/avif/bg_gradient_2.avif')",
        'gradient-bg-3': "url('/avif/bg_gradient_3.avif')"
      },
      colors: {
        'hexa-color': "#EF3341",
        'white': '#ffffff',
        'black': '#000000',
      },
      height: {
        '144': '36rem'
      },
      fontSize: {
        'ssm': '1rem'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
