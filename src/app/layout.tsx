import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueSide",
  description: "Securely collaborate on legal documents inside Microsoft Word.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'{inter.className} bg-gray-50'}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
          <div className="absolute inset-0 bg-grid-black/[0.035] mask-radial-faded -z-10"></div>
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4JBBEHZRHH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4JBBEHZRHH');
          `}
        </Script>
      </body>
    </html>
  );
}
