import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Providers from "@/components/Providers";
import '@/assets/styles/globals.css';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Maryna Manhura",
};

interface RootLayoutProps {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ['latin'],
});

const RootLayout = async ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
