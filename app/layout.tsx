import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/config/restaurant";
import { themeCssVars } from "@/config/theme";

/**
 * Typography is the one visual token that can't live in `config/theme.ts`
 * alongside colors: Next.js's font loader requires its arguments to be
 * literals written directly at the call site ("Font loader values must be
 * explicitly written literals" — verified by attempting to source `weight`
 * from an imported config object, which fails the build) so it can
 * statically determine which font files to self-host at build time. A new
 * client's font choice is therefore the one case where this file itself
 * must be edited — swap the imports/calls below, keeping the same
 * `--font-cormorant`/`--font-inter` variable names so no component needs to
 * change (every component reads the `font-heading`/`font-body` Tailwind
 * roles those variables back, in `app/globals.css`, never a literal font
 * name).
 */
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
