import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aura — Fragancias Premium a Tu Estilo",
  description:
    "Descubre perfumes para dama, caballero y unisex. Calidad premium, precios accesibles y entrega rápida.",
  keywords: [
    "perfumes",
    "fragancias",
    "colonias",
    "aromas",
    "perfumes hombre",
    "perfumes mujer",
    "fragancias unisex",
    "Aura"
  ],
  authors: [{ name: "Aura E-commerce" }],

  metadataBase: new URL("https://aura-five-tan.vercel.app"),

  openGraph: {
    title: "Aura — Fragancias Premium",
    description:
      "Explora perfumes de hombre, mujer y unisex al mejor precio.",
    url: "https://aura-five-tan.vercel.app",
    siteName: "Aura",
    images: [
      {
        url: "/images/meta/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aura Fragancias — Imagen general para compartir"
      }
    ],
    locale: "es_ES",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Aura — Fragancias Premium",
    description:
      "Perfumes para dama, caballero y unisex con precios accesibles.",
    images: ["images/meta/og-image.webp"]
  },

  icons: {
    icon: "/images/meta/favicon-aura.png",
    shortcut: "/images/meta/favicon-aura.png",
    apple: "/images/meta/favicon-aura.png"
  },

  themeColor: "#ffffff"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
