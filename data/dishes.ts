/**
 * Signature dish data for Restaurant Engine — the small, curated set of
 * dishes highlighted on the homepage (distinct from the full `data/menu.ts`).
 */

export interface SignatureDish {
  name: string;
  price: number;
  description: string;
  image: string;
  featured: boolean;
}

export const dishes: SignatureDish[] = [
  {
    name: "Butter Chicken",
    price: 495,
    description: "Slow-cooked tomato gravy, charcoal butter, fenugreek",
    image: "/images/dishes/butter-chicken.jpg",
    featured: true,
  },
  {
    name: "Truffle Malai Mushroom",
    price: 425,
    description: "Wild mushrooms, saffron cream, black truffle",
    image: "/images/dishes/mushroom.jpg",
    featured: true,
  },
  {
    name: "Saffron Prawn",
    price: 595,
    description: "Coastal prawn curry, saffron, coconut",
    image: "/images/dishes/prawn.jpg",
    featured: true,
  },
];
