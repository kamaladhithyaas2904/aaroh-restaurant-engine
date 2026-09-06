/**
 * Full menu data for Restaurant Engine.
 *
 * Reusable menu components should render from this list and never contain
 * restaurant-specific dish names, prices, or descriptions themselves.
 */

export type MenuCategory =
  | "Starters"
  | "Small Plates"
  | "Mains"
  | "Rice & Breads"
  | "Desserts"
  | "Drinks";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  vegetarian: boolean;
  spicy: boolean;
  featured: boolean;
  allergens?: string[];
}

export const menu: MenuItem[] = [
  {
    name: "Tandoori Broccoli",
    description: "Char-grilled broccoli, mint yogurt, chaat masala",
    price: 345,
    category: "Starters",
    vegetarian: true,
    spicy: false,
    featured: false,
  },
  {
    name: "Kolhapuri Chicken Skewers",
    description: "Smoked chicken thigh, Kolhapuri spice, onion salad",
    price: 425,
    category: "Starters",
    vegetarian: false,
    spicy: true,
    featured: false,
    allergens: ["dairy"],
  },
  {
    name: "Truffle Malai Mushroom",
    description: "Wild mushrooms, saffron cream, black truffle",
    price: 425,
    category: "Small Plates",
    vegetarian: true,
    spicy: false,
    featured: true,
    allergens: ["dairy"],
  },
  {
    name: "Butter Chicken",
    description: "Slow-cooked tomato gravy, charcoal butter, fenugreek",
    price: 495,
    category: "Mains",
    vegetarian: false,
    spicy: false,
    featured: true,
    allergens: ["dairy", "nuts"],
  },
  {
    name: "Saffron Prawn Curry",
    description: "Coastal prawn curry, saffron, coconut",
    price: 595,
    category: "Mains",
    vegetarian: false,
    spicy: true,
    featured: true,
    allergens: ["shellfish"],
  },
  {
    name: "Truffle Pulao",
    description: "Basmati rice, wild mushroom, black truffle oil",
    price: 375,
    category: "Rice & Breads",
    vegetarian: true,
    spicy: false,
    featured: false,
  },
  {
    name: "Garlic Naan",
    description: "Tandoor-baked, roasted garlic, coriander butter",
    price: 145,
    category: "Rice & Breads",
    vegetarian: true,
    spicy: false,
    featured: false,
    allergens: ["gluten", "dairy"],
  },
  {
    name: "Saffron Rasmalai",
    description: "House-made paneer, saffron milk, pistachio",
    price: 295,
    category: "Desserts",
    vegetarian: true,
    spicy: false,
    featured: false,
    allergens: ["dairy", "nuts"],
  },
  {
    name: "Jaljeera Fizz",
    description: "Cumin, mint, tamarind, soda",
    price: 225,
    category: "Drinks",
    vegetarian: true,
    spicy: false,
    featured: false,
  },
];
