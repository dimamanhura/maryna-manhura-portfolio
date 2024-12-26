import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heathmont/moon-cmdk-tw/**/*.{js,ts,jsx,tsx}'
  ],
  presets: [
    require('@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset'),
    require('@heathmont/moon-core-tw/lib/es/private/presets/ds-moon-preset'),
  ],
  safelist: [
    'bg-from-dark-violet-to-light-yellow',
    'bg-from-light-violet-to-dark-yellow',
    'bg-from-yellow-to-violet',
    'bg-from-violet-to-yellow',
    'bg-from-green-to-yellow',
    'bg-from-yellow-to-green',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'from-dark-violet-to-light-yellow': 'linear-gradient(70.4deg, #CECDFD 2.34%, #FAF0F3 88.94%)',
        'from-light-violet-to-dark-yellow': 'linear-gradient(70.4deg, #F6E6F3 21.58%, #FFF5DE 98.56%)',
        'from-yellow-to-violet': 'linear-gradient(70.4deg, #FBEFE6 2.34%, #D1CFFE 98.56%)',
        'from-violet-to-yellow': 'linear-gradient(70.4deg, #EEDDFE 2.34%, #FAF0F2 98.56%)',
        'from-green-to-yellow': 'linear-gradient(70.4deg, #CFFEFB 2.34%, #F7FFDE 98.56%)',
        'from-yellow-to-green': 'linear-gradient(70.4deg, #FFF5DE 2.34%, #E6F2F6 69.7%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
