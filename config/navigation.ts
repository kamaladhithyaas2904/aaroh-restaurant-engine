/**
 * Navigation configuration for Restaurant Engine.
 *
 * Owns the nav link list and the nav-specific CTA labels. The CTA `mode`
 * points back at `config/restaurant.ts` so the actual destination (href)
 * always comes from one place — the restaurant's reservation/ordering/
 * whatsapp settings — instead of being duplicated here.
 */

import type { CtaMode } from "./restaurant";

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationCta {
  mode: CtaMode;
  label: string;
}

export interface NavigationConfig {
  links: NavigationLink[];
  primaryCta: NavigationCta;
  secondaryCta: NavigationCta;
  /** Destination for the homepage's "View Full Menu" CTA. Points at a
   * standalone menu page that doesn't exist yet — kept here rather than
   * hardcoded so it's easy to find and update once that page is built. */
  fullMenuHref: string;
}

export const navigation: NavigationConfig = {
  links: [
    { label: "Menu", href: "/#menu" },
    { label: "Our Story", href: "/#story" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Visit", href: "/#visit" },
  ],
  primaryCta: {
    mode: "reservation",
    label: "Reserve",
  },
  secondaryCta: {
    mode: "whatsapp",
    label: "WhatsApp",
  },
  fullMenuHref: "/menu",
};
