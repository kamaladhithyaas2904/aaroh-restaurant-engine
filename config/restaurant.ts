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
  /** Brand copy for the homepage's `ReservationCTA` section — distinct from
   * `restaurant.description` (used for page metadata) so each has its own
   * source instead of one field serving two unrelated purposes. */
  description: string;
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
  eyebrow: string;
  heading: string;
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
  /** Brand copy for the homepage's `MenuPreview` section heading — distinct
   * from `restaurant.tagline` (used in the footer) so each has its own
   * source instead of one field serving two unrelated purposes. */
  previewHeading: string;
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
  /** Optional image wordmark, shown in the Navbar and Footer in place of
   * the text brand name. Path under `public/` (or a full URL), same
   * convention as `hero.image`. Omit to keep the default text wordmark —
   * most clients don't need this. */
  logoImage?: string;
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
  name: "NOOR",
  descriptor: "Contemporary Coastal Kitchen",
  establishedYear: 2022,
  currency: "₹",
  tagline: "Contemporary coastal cuisine, rooted in the sea.",
  description:
    "NOOR is a contemporary coastal Indian restaurant in Bandra, Mumbai, serving refined coastal cuisine since 2022.",
  location: {
    eyebrow: "Come Find Us",
    heading: "An evening by the water, worth making your way across town for.",
    address: "21 Carter Road, Bandra West, Mumbai, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    mapUrl: "https://maps.google.com/?q=21+Carter+Road+Bandra+West+Mumbai",
  },
  hours: {
    dinner: "7:00 PM — 11:30 PM",
    kitchen: "Open until 11:00 PM",
    walkIns: "Subject to availability",
  },
  contact: {
    phone: "+91 98000 11223",
    whatsapp: "919800011223",
    email: "hello@noor.co.in",
  },
  social: {
    instagram: "@noor.bombay",
  },
  hero: {
    eyebrow: "Bandra, Mumbai · Coastal Kitchen",
    title: "Where the coast meets the table",
    description: "Contemporary coastal Indian cuisine, by the sea.",
    image: "/images/noor/hero.png",
    imageAlt: "Soft evening light over NOOR's oceanfront dining room in Bandra",
  },
  intro: {
    eyebrow: "The Philosophy",
    statement: "Where the tide meets tradition.",
    description:
      "A contemporary reading of India's coastal kitchens — fresh catch, coconut, kokum and spice, shaped by technique and served with quiet refinement.",
  },
  story: {
    eyebrow: "Rooted by the Sea",
    heading: "Born on the coast. Refined for today.",
    paragraphs: [
      "NOOR began with a single conviction — that India's coastal kitchens, from Malabar to Konkan to the Bengal delta, deserve a contemporary stage.",
      "Each dish draws on techniques passed down through generations of coastal cooking, reconsidered through modern sourcing, technique and presentation.",
    ],
    image: "/images/noor/story.png",
    imageAlt: "Chef plating a coastal seafood dish in the NOOR kitchen",
  },
  seasonal: {
    eyebrow: "Seasonal",
    heading: "The Coastal Tasting Table.",
    description:
      "A considered tasting menu inspired by the monsoon coastline — fresh catch, coconut, kokum and green mango, at their peak.",
    price: { amount: 2400, unit: "person" },
    image: "/images/noor/seasonal.png",
    imageAlt: "A coastal Indian tasting spread styled for NOOR's seasonal menu",
    cta: {
      mode: "reservation",
      label: "Reserve the experience",
    },
  },
  menuPage: {
    eyebrow: "Full Menu",
    heading: "The Menu",
    description: "A contemporary expression of coastal Indian cuisine.",
    previewHeading: "Cooked by the coast, served to share.",
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
    description:
      "Join us for an evening of coastal cooking, warm hospitality and good company.",
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
 * available since every restaurant has a contact number). The Hero's
 * primary CTA, the mobile sticky CTA, and the homepage's `ReservationCTA`
 * all call this — a single source of truth so none of them can disagree
 * about which action is "primary".
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
