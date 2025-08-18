import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Visa service app",
  description: "Explore visa services and track your applications",
};

import PageTransition from '@/components/PageTransition';
import Footer from "./footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <title>{metadata.title}</title>
        {/* Meta description */}
        <meta name="description" content={metadata.description} />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <PageTransition>{children}</PageTransition>
        <Footer/>
      </body>
    </html>
  );
}
