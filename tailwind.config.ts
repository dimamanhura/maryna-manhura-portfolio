import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-[linear-gradient(70.4deg,_#CECDFD_2.34%,_#FAF0F3_88.94%)]',
    'bg-[linear-gradient(70.4deg,_#F6E6F3_21.58%,_#FFF5DE_98.56%)]',
    'bg-[linear-gradient(70.4deg,_#FBEFE6_2.34%,_#D1CFFE_98.56%)]',
    'bg-[linear-gradient(70.4deg,_#EEDDFE_2.34%,_#FAF0F2_98.56%)]',
    'bg-[linear-gradient(70.4deg,_#CFFEFB_2.34%,_#F7FFDE_98.56%)]',
    'bg-[linear-gradient(70.4deg,_#FFF5DE_2.34%,_#E6F2F6_69.7%)]',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
