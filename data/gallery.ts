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
    image: "/images/gallery/dining-room.png",
    alt: "AAROH dining room",
    caption: "The main dining room",
    category: "interior",
  },
  {
    image: "/images/gallery/open-kitchen.png",
    alt: "Open-fire kitchen",
    caption: "Our open-fire kitchen",
    category: "ambience",
  },
  {
    image: "/images/gallery/plated-dish.png",
    alt: "Plated signature dish",
    caption: "A seasonal dessert",
    category: "food",
  },
  {
    image: "/images/gallery/bar.png",
    alt: "The bar area",
    caption: "The bar, after dark",
    category: "interior",
  },
];
