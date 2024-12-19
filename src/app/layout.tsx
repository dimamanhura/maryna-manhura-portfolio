import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import '@/assets/styles/globals.css';
import { fetchMetadata } from "@/db/queries/metadata";

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
  const metadata = await fetchMetadata();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {metadata && (
            <Navbar social={metadata.social} />
          )}
          <div className="container m-auto">
            {children}
          </div>
          {metadata && (
            <Footer email={metadata.email} social={metadata.social} />
          )}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
