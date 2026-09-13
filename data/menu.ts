/**
 * Full menu data for Restaurant Engine.
 *
 * Reusable menu components should render from this list and never contain
 * restaurant-specific category names, dish names, prices, or descriptions
 * themselves. Categories own their items directly (rather than each item
 * declaring a category string) so both the full menu page and the homepage
 * preview can iterate categories without re-deriving grouping at render
 * time.
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  /** Free-form so a client can use whatever terms fit their menu (e.g.
   * "Vegetarian", "Vegan", "Spicy") without a fixed enum. */
  dietaryTags?: string[];
  allergens?: string[];
  featured?: boolean;
  /** When set, this item also appears in the homepage's image-led
   * "Signatures" grid (`components/sections/SignatureDishes.tsx`) — the
   * only place on the site a menu item needs a photo. Independent of
   * `featured`, which instead drives the homepage's per-category menu
   * preview (`components/sections/MenuPreview.tsx`). */
  signature?: {
    image: string;
    imageAlt: string;
  };
}

export interface MenuCategory {
  id: string;
  name: string;
  /** Short editorial line shown under the category name. Optional — omit
   * for categories that don't need one. */
  description?: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    description: "To begin, from the shore.",
    items: [
      {
        id: "kokum-glazed-prawns",
        name: "Kokum-Glazed Prawns",
        description: "Char-grilled tiger prawns, kokum glaze, curry leaf oil",
        price: 495,
        allergens: ["shellfish"],
        signature: {
          image: "/images/noor/dishes/kokum-prawns.png",
          imageAlt: "Char-grilled tiger prawns finished with kokum glaze",
        },
      },
      {
        id: "banana-leaf-fish-tikka",
        name: "Banana Leaf Fish Tikka",
        description: "Kingfish marinated in coastal spice, steamed in banana leaf",
        price: 525,
        allergens: ["fish"],
        featured: true,
      },
      {
        id: "coconut-crusted-vegetable-cutlet",
        name: "Coconut-Crusted Vegetable Cutlet",
        description: "Root vegetables, toasted coconut, tamarind chutney",
        price: 365,
        dietaryTags: ["Vegetarian"],
      },
      {
        id: "malabar-peppercorn-crab-cake",
        name: "Malabar Peppercorn Crab Cake",
        description: "Fresh crab, black peppercorn, curry leaf aioli",
        price: 585,
        allergens: ["shellfish"],
      },
    ],
  },
  {
    id: "mains",
    name: "Mains",
    description: "The heart of the coast.",
    items: [
      {
        id: "goan-fish-curry",
        name: "Goan Fish Curry",
        description: "Catch of the day, coconut, kokum, red chilli",
        price: 625,
        allergens: ["fish"],
        featured: true,
        signature: {
          image: "/images/noor/dishes/goan-fish-curry.png",
          imageAlt: "Goan fish curry plated with coconut and fresh curry leaves",
        },
      },
      {
        id: "malabar-crab-masala",
        name: "Malabar Crab Masala",
        description: "Whole crab, coconut, black pepper, curry leaf",
        price: 795,
        allergens: ["shellfish"],
      },
      {
        id: "coastal-vegetable-moilee",
        name: "Coastal Vegetable Moilee",
        description: "Seasonal vegetables, coconut milk, turmeric, curry leaf",
        price: 445,
        dietaryTags: ["Vegetarian"],
      },
      {
        id: "tandoori-lobster",
        name: "Tandoori Lobster",
        description: "Whole lobster, coastal spice, charcoal-grilled",
        price: 1450,
        allergens: ["shellfish"],
        featured: true,
        signature: {
          image: "/images/noor/dishes/tandoori-lobster.png",
          imageAlt: "Charcoal-grilled whole lobster finished with coastal spice",
        },
      },
    ],
  },
  {
    id: "biryani-rice",
    name: "Biryani & Rice",
    description: "Slow-cooked, deeply spiced.",
    items: [
      {
        id: "prawn-coconut-biryani",
        name: "Prawn & Coconut Biryani",
        description: "Long-grain basmati, coastal prawn, toasted coconut",
        price: 595,
        allergens: ["shellfish"],
        featured: true,
      },
      {
        id: "malabar-kingfish-biryani",
        name: "Malabar Kingfish Biryani",
        description: "Basmati rice, kingfish, coastal spice, mint",
        price: 625,
        allergens: ["fish"],
      },
      {
        id: "coconut-rice",
        name: "Coconut Rice",
        description: "Basmati rice, toasted coconut, curry leaf, mustard seed",
        price: 245,
        dietaryTags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    description: "Fresh from the tandoor.",
    items: [
      {
        id: "coconut-naan",
        name: "Coconut Naan",
        description: "Tandoor-baked, toasted coconut, curry leaf butter",
        price: 165,
        dietaryTags: ["Vegetarian"],
        allergens: ["gluten", "dairy"],
      },
      {
        id: "garlic-naan",
        name: "Garlic Naan",
        description: "Tandoor-baked, roasted garlic, coriander butter",
        price: 145,
        dietaryTags: ["Vegetarian"],
        allergens: ["gluten", "dairy"],
      },
      {
        id: "appam",
        name: "Appam",
        description: "Fermented rice and coconut crepe, lace-edged",
        price: 135,
        dietaryTags: ["Vegetarian"],
        allergens: ["gluten"],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "A considered finish.",
    items: [
      {
        id: "coconut-panna-cotta",
        name: "Coconut Panna Cotta",
        description: "Toasted coconut, jaggery caramel, cashew praline",
        price: 345,
        dietaryTags: ["Vegetarian"],
        allergens: ["dairy", "nuts"],
        featured: true,
      },
      {
        id: "alphonso-mango-kulfi",
        name: "Alphonso Mango Kulfi",
        description: "Traditional frozen dessert, Alphonso mango, pistachio",
        price: 295,
        dietaryTags: ["Vegetarian"],
        allergens: ["dairy", "nuts"],
      },
      {
        id: "cardamom-jaggery-creme",
        name: "Cardamom & Jaggery Crème",
        description: "Slow-set custard, cardamom, jaggery, toasted coconut",
        price: 315,
        dietaryTags: ["Vegetarian"],
        allergens: ["dairy"],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "From the bar.",
    items: [
      {
        id: "kokum-cooler",
        name: "Kokum Cooler",
        description: "Kokum, mint, soda",
        price: 245,
        dietaryTags: ["Vegetarian"],
      },
      {
        id: "signature-cocktail",
        name: "Signature Cocktail",
        description: "A rotating coastal-inspired selection — ask your server",
        price: 695,
      },
      {
        id: "coconut-curry-leaf-mocktail",
        name: "Coconut & Curry Leaf Mocktail",
        description: "A rotating selection from our bar — ask your server",
        price: 375,
        dietaryTags: ["Vegetarian"],
      },
      {
        id: "classic-soft-drink",
        name: "Classic Soft Drink",
        description: "Cola, lemonade, soda",
        price: 160,
        dietaryTags: ["Vegetarian"],
      },
    ],
  },
];
