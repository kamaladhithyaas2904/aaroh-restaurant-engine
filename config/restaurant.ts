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

export type CtaMode = "reservation" | "whatsapp" | "ordering";

export interface CallToAction {
  mode: CtaMode;
  label: string;
  href: string;
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
}

export interface RestaurantConfig {
  name: string;
  descriptor: string;
  establishedYear: number;
  logo: string;
  tagline: string;
  description: string;
  location: RestaurantLocation;
  hours: RestaurantHours;
  contact: RestaurantContact;
  social: SocialLinks;
  hero: RestaurantHero;
  cta: {
    primary: CallToAction;
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
  },
  cta: {
    primary: {
      mode: "reservation",
      label: "Reserve a Table",
      href: "/reserve",
    },
    secondary: {
      mode: "whatsapp",
      label: "Message on WhatsApp",
      href: "https://wa.me/919000000000",
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
