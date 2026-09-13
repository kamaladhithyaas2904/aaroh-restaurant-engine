/**
 * Gallery image data for Restaurant Engine.
 */

export type GalleryCategory = "interior" | "food" | "ambience" | "events";

export interface GalleryImage {
  image: string;
  alt: string;
  caption?: string;
  category: GalleryCategory;
}

export const gallery: GalleryImage[] = [
  {
    image: "/images/gallery/noor/dining-room.png",
    alt: "NOOR dining room overlooking the coast",
    caption: "The main dining room",
    category: "interior",
  },
  {
    image: "/images/gallery/noor/open-kitchen.png",
    alt: "NOOR's open coastal kitchen",
    caption: "Our coastal kitchen",
    category: "ambience",
  },
  {
    image: "/images/gallery/noor/plated-dish.png",
    alt: "Plated signature coastal dish",
    caption: "A seasonal dessert",
    category: "food",
  },
  {
    image: "/images/gallery/noor/bar.png",
    alt: "The bar area at NOOR",
    caption: "The bar, after dark",
    category: "interior",
  },
];
