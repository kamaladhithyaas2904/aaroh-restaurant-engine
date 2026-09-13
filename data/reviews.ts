/**
 * Guest review data for Restaurant Engine.
 */

export interface Review {
  name: string;
  rating: number;
  review: string;
  source: string;
  date?: string;
}

export const reviews: Review[] = [
  {
    name: "Rhea Kapoor",
    rating: 5,
    review:
      "The Goan fish curry is extraordinary — easily the best coastal food I've had in Mumbai. Beautiful room, warm service.",
    source: "Google",
    date: "2026-06-02",
  },
  {
    name: "Arjun Mehta",
    rating: 5,
    review:
      "The tandoori lobster alone is worth the reservation. NOOR has redefined coastal dining in the city.",
    source: "Zomato",
    date: "2026-04-18",
  },
  {
    name: "Simran Kaur",
    rating: 4,
    review:
      "Lovely evening — the kokum cooler and crab masala were standouts. Will be back for the seasonal tasting menu.",
    source: "Google",
    date: "2026-02-27",
  },
];
