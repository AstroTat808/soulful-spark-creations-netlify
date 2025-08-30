import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD
import { Playfair_Display, Libre_Franklin } from "next/font/google";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const body = Libre_Franklin({ subsets: ["latin"], variable: "--font-body" });
=======
>>>>>>> 511f9e7dd9c143dea6aaac2bc7368ac93b7fddfb

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Soulful Spark Creations",
<<<<<<< HEAD
  description: "Calm, romantic wedding planning tools with a soulful touch.",
  openGraph: { title: "Soulful Spark Creations", description: "Calm, romantic wedding planning tools with a soulful touch.", images: ["/og.jpg"], url: siteUrl, siteName: "Soulful Spark Creations", type: "website" },
  twitter: { card: "summary_large_image", title: "Soulful Spark Creations", description: "Calm, romantic wedding planning tools with a soulful touch.", images: ["/og.jpg"] },
};

import Footer from "./components/Footer";

import Navbar from "../components/Navbar";
import ConsentBanner from "../components/ConsentBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased font-body">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-ink text-white px-3 py-2 rounded">Skip to content</a>
        <Navbar />
        {children}
        <ConsentBanner />
        <Footer />
      </body>
=======
  description: "Romantic tools and gentle rituals for calm, intentional weddings.",
  openGraph: {
    title: "Soulful Spark Creations",
    description: "Romantic tools and gentle rituals for calm, intentional weddings.",
    images: ["/og.jpg"],
    url: siteUrl,
    siteName: "Soulful Spark Creations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulful Spark Creations",
    description: "Romantic tools and gentle rituals for calm, intentional weddings.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
>>>>>>> 511f9e7dd9c143dea6aaac2bc7368ac93b7fddfb
    </html>
  );
}
