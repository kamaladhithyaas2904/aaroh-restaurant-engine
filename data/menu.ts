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
    description: "To begin the evening.",
    items: [
      {
        id: "charred-corn-chaat",
        name: "Charred Corn Chaat",
        description: "Charred sweet corn, tamarind glaze, chaat masala, herbs",
        price: 315,
        dietaryTags: ["Vegetarian"],
      },
      {
        id: "truffle-malai-mushroom",
        name: "Truffle Malai Mushroom",
        description: "Wild mushrooms, saffron cream, black truffle",
        price: 425,
        dietaryTags: ["Vegetarian"],
        featured: true,
        signature: {
          image: "/images/aaroh/dishes/mushroom.png",
          imageAlt: "Wild mushrooms in saffron cream, shaved black truffle on top",
        },
      },
      {
        id: "tandoori-broccoli",
        name: "Tandoori Broccoli",
        description: "Char-grilled broccoli, mint yogurt, chaat masala",
        price: 345,
        dietaryTags: ["Vegetarian"],
      },
      {
        id: "kasundi-fish-tikka",
        name: "Kasundi Fish Tikka",
        description: "Mustard-marinated fish, char-grilled, curry leaf oil",
        price: 455,
        allergens: ["fish"],
      },
    ],
  },
  {
    id: "mains",
    name: "Mains",
    description: "The heart of the table.",
    items: [
      {
        id: "butter-chicken",
        name: "Butter Chicken",
        description: "Slow-cooked tomato gravy, charcoal butter, fenugreek",
        price: 495,
        allergens: ["dairy", "nuts"],
        featured: true,
        signature: {
          image: "/images/aaroh/dishes/butter-chicken.png",
          imageAlt: "Butter chicken in a copper handi, finished with cream and coriander",
        },
      },
      {
        id: "dal-makhani",
        name: "Dal Makhani",
        description: "Black lentils, slow-simmered, cream, smoked butter",
        price: 365,
        dietaryTags: ["Vegetarian"],
        allergens: ["dairy"],
      },
      {
        id: "paneer-khurchan",
        name: "Paneer Khurchan",
        description: "Char-grilled paneer, bell pepper, onion, warm spices",
        price: 415,
        dietaryTags: ["Vegetarian", "Spicy"],
        allergens: ["dairy"],
      },
      {
        id: "saffron-prawn-curry",
        name: "Saffron Prawn Curry",
        description: "Coastal prawn curry, saffron, coconut",
        price: 595,
        dietaryTags: ["Spicy"],
        allergens: ["shellfish"],
        featured: true,
        signature: {
          image: "/images/aaroh/dishes/prawn.png",
          imageAlt: "Saffron prawn curry plated with coconut and fresh curry leaves",
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
        id: "saffron-chicken-biryani",
        name: "Saffron Chicken Biryani",
        description: "Long-grain basmati, saffron, slow-cooked chicken, mint",
        price: 465,
        featured: true,
      },
      {
        id: "wild-mushroom-pulao",
        name: "Wild Mushroom Pulao",
        description: "Basmati rice, wild mushroom, black truffle oil",
        price: 375,
        dietaryTags: ["Vegetarian"],
      },
      {
        id: "jeera-rice",
        name: "Jeera Rice",
        description: "Basmati rice, toasted cumin, ghee",
        price: 225,
        dietaryTags: ["Vegetarian"],
        allergens: ["dairy"],
      },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    description: "Fresh from the tandoor.",
    items: [
      {
        id: "garlic-naan",
        name: "Garlic Naan",
        description: "Tandoor-baked, roasted garlic, coriander butter",
        price: 145,
        dietaryTags: ["Vegetarian"],
        allergens: ["gluten", "dairy"],
      },
      {
        id: "truffle-naan",
        name: "Truffle Naan",
        description: "Tandoor-baked naan, black truffle butter",
        price: 195,
        dietaryTags: ["Vegetarian"],
        allergens: ["gluten", "dairy"],
      },
      {
        id: "butter-roti",
        name: "Butter Roti",
        description: "Whole wheat tandoor bread, brushed with butter",
        price: 95,
        dietaryTags: ["Vegetarian"],
        allergens: ["gluten", "dairy"],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "A considered finish.",
    items: [
      {
        id: "saffron-tres-leches",
        name: "Saffron Tres Leches",
        description: "Saffron-soaked sponge, spiced milk, pistachio",
        price: 325,
        dietaryTags: ["Vegetarian"],
        allergens: ["dairy", "nuts"],
      },
      {
        id: "cardamom-kulfi",
        name: "Cardamom Kulfi",
        description: "Traditional frozen dessert, cardamom, pistachio",
        price: 275,
        dietaryTags: ["Vegetarian"],
        allergens: ["dairy", "nuts"],
        featured: true,
      },
      {
        id: "dark-chocolate-gulab-jamun",
        name: "Dark Chocolate Gulab Jamun",
        description: "Milk dumplings, dark chocolate, rose syrup",
        price: 295,
        dietaryTags: ["Vegetarian"],
        allergens: ["dairy", "gluten"],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "From the bar.",
    items: [
      {
        id: "jaljeera-fizz",
        name: "Jaljeera Fizz",
        description: "Cumin, mint, tamarind, soda",
        price: 225,
        dietaryTags: ["Vegetarian"],
      },
      {
        id: "signature-cocktail",
        name: "Signature Cocktail",
        description: "A rotating selection from our bar — ask your server",
        price: 650,
      },
      {
        id: "indian-inspired-mocktail",
        name: "Indian-Inspired Mocktail",
        description: "A rotating selection from our bar — ask your server",
        price: 350,
        dietaryTags: ["Vegetarian"],
      },
      {
        id: "classic-soft-drink",
        name: "Classic Soft Drink",
        description: "Cola, lemonade, soda",
        price: 150,
        dietaryTags: ["Vegetarian"],
      },
    ],
  },
];
