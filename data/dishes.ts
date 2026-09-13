/**
 * Signature dish data for Restaurant Engine — the small, curated set of
 * dishes highlighted on the homepage (distinct from the full `data/menu.ts`).
 */

export interface SignatureDish {
  name: string;
  price: number;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
}

export const dishes: SignatureDish[] = [
  {
    name: "Goan Fish Curry",
    price: 625,
    description: "Catch of the day, coconut, kokum, red chilli",
    image: "/images/dishes/noor/goan-fish-curry.png",
    imageAlt: "Goan fish curry plated with coconut and fresh curry leaves",
    featured: true,
  },
  {
    name: "Tandoori Lobster",
    price: 1450,
    description: "Whole lobster, coastal spice, charcoal-grilled",
    image: "/images/dishes/noor/tandoori-lobster.png",
    imageAlt: "Charcoal-grilled whole lobster finished with coastal spice",
    featured: true,
  },
  {
    name: "Kokum-Glazed Prawns",
    price: 495,
    description: "Char-grilled tiger prawns, kokum glaze, curry leaf oil",
    image: "/images/dishes/noor/kokum-prawns.png",
    imageAlt: "Char-grilled tiger prawns finished with kokum glaze",
    featured: true,
  },
];
