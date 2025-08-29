import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Soulful Spark Creations",
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
    </html>
  );
}
