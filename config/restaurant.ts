/**
 * Restaurant configuration for Restaurant Engine.
 *
 * This file is the single source of truth for a client's business
 * information. Reusable components must read from here instead of
 * hardcoding restaurant-specific copy, contact details, or links.
 *
 * To launch a new restaurant, duplicate this file's values only —
 * components should not need to change.
 */

export type CtaMode = "reservation" | "whatsapp" | "ordering" | "link";

export interface CallToAction {
  mode: CtaMode;
  label: string;
  /** Only required (and used) when `mode` is "link" — every other mode
   * resolves its destination from the matching config below via
   * `resolveCtaHref`, so it isn't duplicated here. */
  href?: string;
}

export interface ReservationConfig {
  enabled: boolean;
  label: string;
  href: string;
}

export interface OrderingConfig {
  enabled: boolean;
  label: string;
  href: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
}

export interface RestaurantLocation {
  address: string;
  city: string;
  state: string;
  mapUrl: string;
}

export interface RestaurantHours {
  dinner: string;
  kitchen: string;
  walkIns: string;
}

export interface RestaurantIntro {
  eyebrow: string;
  statement: string;
  description: string;
}

export interface RestaurantStory {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  /** Path under `public/` (or a full URL) — see `restaurant.hero.image`. */
  image: string;
  imageAlt: string;
}

export interface RestaurantMenuPage {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface SeasonalPrice {
  amount: number;
  /** e.g. "person" — combined with `restaurant.currency` and `amount` as
   * "{currency}{amount} / {unit}", so no currency symbol is stored here. */
  unit: string;
}

export interface RestaurantSeasonal {
  eyebrow: string;
  heading: string;
  description: string;
  price: SeasonalPrice;
  /** Path under `public/` (or a full URL) — see `restaurant.hero.image`. */
  image: string;
  imageAlt: string;
  /** Resolved the same way as every other CTA via `resolveCtaHref`/
   * `isCtaEnabled` — typically `mode: "reservation"` so it always tracks the
   * restaurant's real reservation settings. */
  cta: CallToAction;
}

export interface RestaurantContact {
  phone: string;
  whatsapp: string;
  email: string;
}

export interface RestaurantHero {
  eyebrow: string;
  title: string;
  description: string;
  /** Path under `public/` (or a full URL). Swap this to re-skin the hero —
   * no component changes required. */
  image: string;
  imageAlt: string;
}

export interface RestaurantConfig {
  name: string;
  descriptor: string;
  establishedYear: number;
  logo: string;
  /** Symbol prefixed to every price shown on the site (e.g. "₹", "$", "€"). */
  currency: string;
  tagline: string;
  description: string;
  location: RestaurantLocation;
  hours: RestaurantHours;
  contact: RestaurantContact;
  social: SocialLinks;
  hero: RestaurantHero;
  intro: RestaurantIntro;
  story: RestaurantStory;
  seasonal: RestaurantSeasonal;
  menuPage: RestaurantMenuPage;
  cta: {
    /** The hero's secondary action; the primary action always comes from
     * `getPrimaryConversionCta()` so it can never disagree with the mobile
     * sticky CTA. */
    secondary: CallToAction;
  };
  reservation: ReservationConfig;
  ordering: OrderingConfig;
}

export const restaurant: RestaurantConfig = {
  name: "AAROH",
  descriptor: "Modern Indian Kitchen",
  establishedYear: 2018,
  logo: "/images/logo.svg",
  currency: "₹",
  tagline: "Modern Indian cuisine, rooted in tradition.",
  description:
    "AAROH is a modern Indian kitchen in Mumbai, serving refined, tradition-rooted cuisine since 2018.",
  location: {
    address: "12 MG Road, Mumbai, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    mapUrl: "https://maps.google.com/?q=12+MG+Road+Mumbai",
  },
  hours: {
    dinner: "6:30 PM — 11:00 PM",
    kitchen: "Open until 10:30 PM",
    walkIns: "Welcome",
  },
  contact: {
    phone: "+91 90000 00000",
    whatsapp: "919000000000",
    email: "hello@aaroh.in",
  },
  social: {
    instagram: "@aaroh",
  },
  hero: {
    eyebrow: "Mumbai · Est. 2018",
    title: "A table worth gathering around",
    description: "Modern Indian cuisine, rooted in tradition.",
    image: "/images/hero/aaroh-hero.png",
    imageAlt: "Warm, softly lit dining room at AAROH set for evening service",
  },
  intro: {
    eyebrow: "The Philosophy",
    statement: "Where the familiar meets the unexpected.",
    description:
      "Modern Indian cooking that respects traditional flavours while approaching ingredients, technique and presentation with a contemporary perspective.",
  },
  story: {
    eyebrow: "Rooted in India",
    heading: "Rooted in India. Made for today.",
    paragraphs: [
      "AAROH began with a simple idea — that Indian food can honour where it comes from while continuing to evolve.",
      "Every dish draws on technique passed down over generations, reconsidered through a modern lens — in how it's sourced, cooked and served.",
    ],
    image: "/images/story/aaroh-story.png",
    imageAlt: "Chef plating a dish in the AAROH kitchen",
  },
  seasonal: {
    eyebrow: "Seasonal",
    heading: "The Monsoon Table.",
    description:
      "A considered menu inspired by the season — warm spices, smoky flavours and ingredients at their best.",
    price: { amount: 1499, unit: "person" },
    image: "/images/seasonal/monsoon-table.png",
    imageAlt: "A seasonal Indian tasting spread styled for the monsoon menu",
    cta: {
      mode: "reservation",
      label: "Reserve the experience",
    },
  },
  menuPage: {
    eyebrow: "Full Menu",
    heading: "The Menu",
    description: "A modern expression of Indian cuisine.",
  },
  cta: {
    secondary: {
      mode: "link",
      label: "Explore Menu",
      href: "/menu",
    },
  },
  reservation: {
    enabled: true,
    label: "Reserve a Table",
    href: "/reserve",
  },
  ordering: {
    enabled: false,
    label: "Order Online",
    href: "",
  },
};

/**
 * Resolves the real destination for a `CtaMode`. Centralizing this means a
 * CTA's link is always driven by the restaurant's actual reservation/
 * ordering/contact settings, instead of being copy-pasted next to every
 * label. `fallbackHref` is only used for `mode: "link"`, since that mode has
 * no other source of truth for its destination.
 */
export function resolveCtaHref(mode: CtaMode, fallbackHref?: string): string {
  switch (mode) {
    case "reservation":
      return restaurant.reservation.href;
    case "ordering":
      return restaurant.ordering.href;
    case "whatsapp":
      return `https://wa.me/${restaurant.contact.whatsapp}`;
    case "link":
      return fallbackHref ?? "#";
  }
}

/** Whether a CTA mode currently has an active destination. */
export function isCtaEnabled(mode: CtaMode): boolean {
  switch (mode) {
    case "reservation":
      return restaurant.reservation.enabled;
    case "ordering":
      return restaurant.ordering.enabled;
    case "whatsapp":
    case "link":
      return true;
  }
}

/**
 * The restaurant's main conversion action: ordering takes priority when
 * enabled, otherwise reservation, otherwise a WhatsApp fallback (always
 * available since every restaurant has a contact number). Both the Hero's
 * primary CTA and the mobile sticky CTA call this — a single source of
 * truth so they can never disagree about which action is "primary".
 */
export function getPrimaryConversionCta(): {
  mode: CtaMode;
  href: string;
  label: string;
} {
  if (restaurant.ordering.enabled) {
    return {
      mode: "ordering",
      href: restaurant.ordering.href,
      label: restaurant.ordering.label,
    };
  }
  if (restaurant.reservation.enabled) {
    return {
      mode: "reservation",
      href: restaurant.reservation.href,
      label: restaurant.reservation.label,
    };
  }
  return {
    mode: "whatsapp",
    href: resolveCtaHref("whatsapp"),
    label: "Message on WhatsApp",
  };
}
