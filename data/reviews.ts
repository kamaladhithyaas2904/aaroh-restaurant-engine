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
    name: "Ananya Rao",
    rating: 5,
    review:
      "The butter chicken alone is worth the trip. Warm service, beautiful room.",
    source: "Google",
    date: "2024-11-02",
  },
  {
    name: "Vikram Shah",
    rating: 5,
    review:
      "Best modern Indian food in Mumbai right now. The truffle mushroom is unreal.",
    source: "Zomato",
    date: "2024-09-18",
  },
  {
    name: "Meera Iyer",
    rating: 4,
    review:
      "Lovely evening — great cocktails, attentive staff, will be back for the prawn curry.",
    source: "Google",
    date: "2024-08-30",
  },
];
