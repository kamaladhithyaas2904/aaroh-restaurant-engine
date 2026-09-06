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
    image: "/images/gallery/dining-room.jpg",
    alt: "AAROH dining room",
    caption: "The main dining room",
    category: "interior",
  },
  {
    image: "/images/gallery/open-kitchen.jpg",
    alt: "Open-fire kitchen",
    caption: "Our open-fire kitchen",
    category: "ambience",
  },
  {
    image: "/images/gallery/plated-dish.jpg",
    alt: "Plated signature dish",
    category: "food",
  },
  {
    image: "/images/gallery/bar.jpg",
    alt: "The bar area",
    category: "interior",
  },
];
