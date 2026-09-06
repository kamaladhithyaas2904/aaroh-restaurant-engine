import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/config/restaurant";
import { themeCssVars } from "@/config/theme";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${restaurant.name} — ${restaurant.descriptor}`,
  description: restaurant.description,
};

// `viewportFit: "cover"` lets `env(safe-area-inset-bottom)` resolve on
// notched devices, used by the mobile sticky CTA.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased`}
      style={themeCssVars as CSSProperties}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
