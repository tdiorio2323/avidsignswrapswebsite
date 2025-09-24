import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avid Signs & Wraps | Professional Signage in Staten Island, NY",
  description: "Custom signs, vehicle wraps, and large-format graphics in Staten Island, NY. Design, fabrication, and professional installation services across the Tri-State area.",
  keywords: "signs, vehicle wraps, staten island, signage, graphics, large format, custom signs",
  authors: [{ name: "Avid Signs & Wraps" }],
  openGraph: {
    title: "Avid Signs & Wraps",
    description: "Professional signage and vehicle wraps in Staten Island, NY",
    url: "https://avidsigns.tdstudiosny.com",
    siteName: "Avid Signs & Wraps",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Avid Signs & Wraps",
              "address": {
                "streetAddress": "32 Carlin Street",
                "addressLocality": "Staten Island",
                "addressRegion": "NY"
              },
              "email": "ricky.avidsign@gmail.com",
              "url": "https://avidsigns.tdstudiosny.com",
              "description": "Professional custom signs, vehicle wraps, and large-format graphics",
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
