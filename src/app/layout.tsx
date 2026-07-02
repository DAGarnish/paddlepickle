import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Padel Pickle HQ | Premium Racket Sport Holidays, Equipment & Courts",
  description: "Exclusive padel and pickleball holidays, elite equipment, and bespoke court installation for homeowners and commercial investors in sunny Spain & Portugal.",
  metadataBase: new URL("https://padelpicklehq.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Padel Pickle HQ | Racket Sport Holidays, Gear & Courts",
    description: "Premium padel and pickleball holiday escapes, high-end equipment, and court installation in Spain & Portugal.",
    url: "https://padelpicklehq.com",
    siteName: "Padel Pickle HQ",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padel Pickle HQ | Racket Sport Holidays, Gear & Courts",
    description: "Premium padel and pickleball holiday escapes, high-end equipment, and court installation in Spain & Portugal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F9F9F5] text-[#1A1D1A] selection:bg-[#D4AF37] selection:text-[#0C2318]">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
