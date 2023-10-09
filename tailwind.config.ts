import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',    
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        monza: {
          "50": "#fff1f3",
          "100": "#ffdfe3",
          "200": "#ffc4cb",
          "300": "#ff9ca8",
          "400": "#ff6276",
          "500": "#ff314b",
          "600": "#f0122e",
          "700": "#ca0b23",
          "800": "#a70d20",
          "900": "#8a1221",
          "950": "#4b040d",
        },
      },      
    },
  },
  plugins: [],
}
export default config
