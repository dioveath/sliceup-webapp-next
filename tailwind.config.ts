import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss'



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
      // TODO: can be added later
      // textShadow: {
      //   sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      //   DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.1)',
      //   md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      //   lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
      //   xl: '0 20px 25px rgba(0, 0, 0, 0.1)'
      // }
    },
  }
}

export default config
