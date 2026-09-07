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
    description: "Seasonal produce, carefully sourced and treated with respect.",
    icon: "leaf",
  },
  {
    title: "Open-Fire Cooking",
    description: "Smoke, flame and time bring depth to familiar Indian flavours.",
    icon: "flame",
  },
  {
    title: "Warm Hospitality",
    description: "An unhurried table, generous service and a reason to stay awhile.",
    icon: "heart",
  },
];
