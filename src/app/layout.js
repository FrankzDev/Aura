import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "@/components/organisms/Navbar";
import BottomMenu from "@/components/organisms/BottomMenu";

// IMPORTAMOS NAVBAR Y BOTTOM MENU

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
    "Aura",
  ],
  authors: [{ name: "Aura E-commerce" }],
  metadataBase: new URL("https://aura-five-tan.vercel.app"),
  openGraph: {
    title: "Aura — Fragancias Premium",
    description: "Explora perfumes de hombre, mujer y unisex al mejor precio.",
    url: "https://aura-five-tan.vercel.app",
    siteName: "Aura",
    images: [
      {
        url: "/images/meta/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aura Fragancias — Imagen general para compartir",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura — Fragancias Premium",
    description:
      "Perfumes para dama, caballero y unisex con precios accesibles.",
    images: ["/images/meta/og-image.webp"],
  },
  icons: {
    icon: "/images/meta/favicon-aura.png",
    shortcut: "/images/meta/favicon-aura.png",
    apple: "/images/meta/favicon-aura.png",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@400;700&family=Raleway:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased bg-slate-50">
        <CartProvider>
          {/* NAVBAR GLOBAL */}
          <Navbar />

          {/* CONTENIDO DE CADA PÁGINA */}
          <main className="pb-[80px]">
            {children}
          </main>

          {/* BOTTOM MENU GLOBAL */}
          <BottomMenu />
        </CartProvider>
      </body>
    </html>
  );
}