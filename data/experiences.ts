/**
 * "Why visit" experience highlights for Restaurant Engine.
 */

export interface Experience {
  title: string;
  description: string;
  icon?: string;
}

export const experiences: Experience[] = [
  {
    title: "Thoughtful Ingredients",
    description: "Sourced daily from trusted local farms and markets.",
    icon: "leaf",
  },
  {
    title: "Open-Fire Cooking",
    description: "Live-fire technique at the heart of every dish.",
    icon: "flame",
  },
  {
    title: "Warm Hospitality",
    description: "Service that feels like being welcomed home.",
    icon: "heart",
  },
];
