/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, DrinkItem, ReviewItem, GalleryItem, SpecialItem } from './types';

// Asset paths matching downloaded files from old database
export const HERO_ATMOSPHERE = "/src/assets/images/hero_atmosphere.png";
export const SIGNATURE_COCKTAIL_OLD = "/src/assets/images/signature_cocktail_old.png";
export const GOURMET_DISH_OLD = "/src/assets/images/gourmet_dish_old.png";
export const COZY_HOLLOW = "/src/assets/images/cozy_hollow.png";

export const FOOD_MENU: MenuItem[] = [
  {
    id: "f1",
    name: "Seasonal Pickle Plate",
    price: "$34",
    description: "Pickled Vegetables, warm olives, house made hummus, a selection of artisan cheese and meats",
    tags: ["GFO", "As Seen in Video"],
    category: "starter"
  },
  {
    id: "f2",
    name: "Baked Brie",
    price: "$22",
    description: "Chilli infused honey w Sourdough",
    tags: ["V", "GFO"],
    category: "starter"
  },
  {
    id: "f3",
    name: "Salt & Vinegar Smashed Potatoes",
    price: "$24",
    description: "W Crispy bits, & parmesan",
    tags: ["V", "GF"],
    category: "starter"
  },
  {
    id: "f4",
    name: "Cabbage Steak",
    price: "$26",
    description: "Labneh, gochujang butter, macha verde",
    tags: ["GF", "VEO", "As Seen in Video"],
    category: "starter"
  },
  {
    id: "f5",
    name: "Date Braised Lamb & Flatbread",
    price: "$30",
    description: "W Labneh, Macha Verde & Pickled Onions",
    tags: ["Local Specialty"],
    category: "starter"
  },
  {
    id: "f6",
    name: "Miso Eggplant",
    price: "$26",
    description: "W Toasted Chickpeas, Tahini dressing & Sesame Seeds",
    tags: ["GF", "VE"],
    category: "starter"
  },
  {
    id: "f7",
    name: "Farmhouse Carrots",
    price: "$28",
    description: "Pan seared chilli honey carrots w Ricotta, macha verde, pickled onion",
    tags: ["GF", "V", "VEO", "As Seen in Video"],
    category: "starter"
  },
  {
    id: "f8",
    name: "House Made Flat Bread",
    price: "$18",
    description: "W butter, onion charcoal & green oil",
    tags: ["Side"],
    category: "starter"
  },
  {
    id: "f9",
    name: "House Made Focaccia",
    price: "$20",
    description: "W Smoked Labneh & Chilli Honey",
    tags: ["Side"],
    category: "starter"
  },
  {
    id: "f10",
    name: "Hummus",
    price: "$7",
    description: "Creamy, smooth house made hummus",
    tags: ["Side"],
    category: "starter"
  },
  {
    id: "f11",
    name: "Warm Olives",
    price: "$8",
    description: "Warm slow-tempered marinated forest olives",
    tags: ["Side"],
    category: "starter"
  },
  {
    id: "f12",
    name: "Chicken Maryland",
    price: "$42",
    description: "Roasted in Zoug & Gochujang Butter, Macha Verde-pickled red onion w creamy mash.",
    tags: ["GF", "As Seen in Video"],
    category: "main"
  },
  {
    id: "f13",
    name: "Coopers Roo Ragu",
    price: "$42",
    description: "Slow Cooked Kangaroo in a classic Red Wine Jus w Pasta or creamy mash",
    tags: ["GFO", "DFO", "Wild Native"],
    category: "main"
  },
  {
    id: "f14",
    name: "Mushroom Risotto",
    price: "$36",
    description: "w Crispy bits & Parmesan",
    tags: ["GF", "V", "VEO"],
    category: "main"
  },
  {
    id: "f15",
    name: "Sicilian Sardine Fettucini",
    price: "$38",
    description: "W garlic, lemon, chilli, fresh Albany sardines, wilted greens and pangratata",
    tags: ["Coastal Catch"],
    category: "main"
  },
  {
    id: "f16",
    name: "Market Fish of the Day",
    price: "$46",
    description: "Please ask your server for the fish dish of the day.* Subject to availability of our supplier.",
    tags: ["Fresh Local Catch"],
    category: "main"
  },
  {
    id: "f17",
    name: "Bread & Butter Pudding",
    price: "$20",
    description: "W Vanilla Ice Cream (Better than your mums)",
    tags: ["Sweet Comfort"],
    category: "dessert"
  },
  {
    id: "f18",
    name: "Fruit Crumble",
    price: "$18",
    description: "W Seasonal Fruits & Vanilla Ice cream",
    tags: ["Local Fruits"],
    category: "dessert"
  },
  {
    id: "f19",
    name: "Affogato",
    price: "$22",
    description: "Espresso & Vanilla bean Ice Cream swum with Frangelico, Baileys or Kahlua",
    tags: ["GF", "Alcoholic"],
    category: "dessert"
  },
  {
    id: "f20",
    name: "Classic Chocolate Fudge Sundae",
    price: "$22",
    description: "W Vanilla Ice Cream, Chantilly Cream, maraschino cherry & Baileys, Chambord, Frangelico or Sailor Jerrys",
    tags: ["GF", "Alcoholic", "Indulgent"],
    category: "dessert"
  }
];

export const DRINKS_MENU: DrinkItem[] = [
  {
    id: "c1",
    name: "The Hollow's Breath",
    price: "$24",
    profile: "Smoky, Intense, Warming",
    ingredients: [
      "Jarrah-smoke infused peated single malt whisky",
      "Sweet direct vermouth rouge",
      "Candlelight Amaro",
      "Aromatic bitters blend",
      "Cedar oil sphere"
    ],
    description: "Our legendary smoke-veiled signature cocktail. Arrives at the table under a glass cloche filled with aromatic wood smoke essence. Heavy and unforgettable.",
    image: SIGNATURE_COCKTAIL_OLD,
    highlight: true
  },
  {
    id: "c6",
    name: "The Blue Hollow Sour",
    price: "$24",
    profile: "Citrusy, Silky, Botanical",
    ingredients: [
      "Local West Australian gin",
      "Chroma Lab Blue Curaçao",
      "Freshly squeezed lemon rind extract",
      "Pine needle & rosemary cordial",
      "Velvet aquafaba foam",
      "Bespoke angostura drops & citrus twist"
    ],
    description: "The stunning formulation shown in our video series. A magical ocean-blue drink representing Denmark's coastal winter tide. Hard-shaken into a thick velvet foam cap, decorated with three precise drops of bitters and a clean orange zest.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000",
    highlight: true
  },
  {
    id: "c2",
    name: "Winter Solstice Negroni",
    price: "$23",
    profile: "Bitter, Complex, Herbaceous",
    ingredients: [
      "Contemporary Aquavit",
      "House-steeped plum Campari",
      "Spiced sweet vermouth",
      "Star anise cloud",
      "Toasted orange peel"
    ],
    description: "A bold, modern twist on a timeless standard, exchanging gin for caraway-driven Aquavit, with deep spiced undertones that warm from within.",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1000"
  },
  {
    id: "c3",
    name: "Denmark Mist",
    price: "$22",
    profile: "Saline, Clean, Botanical",
    ingredients: [
      "Local West Australian gin",
      "Elderflower liqueur",
      "Cucumber extract",
      "Ocean reef salt brine",
      "Slight eucalyptus fog"
    ],
    description: "A tribute to Denmark's wild, breezy coastlines. Experience a light spray of purified local sea salt mist over a bone-dry, botanical masterstroke.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000"
  },
  {
    id: "c4",
    name: "Candlelight Amber",
    price: "$22",
    profile: "Sweet, Spiced, Velvety",
    ingredients: [
      "Aged dark spiced rum",
      "Burnt organic heather honey",
      "Fresh lime wedge juice",
      "Allspice dram",
      "Aromatic orange wood bitters"
    ],
    description: "Warm, flickering amber tones in a glass. This cocktail mirrors the soft table lighting, delivering rich, sweet, and comforting spices perfect for date nights.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000"
  },
  {
    id: "c5",
    name: "The Solstice Sour",
    price: "$23",
    profile: "Vibrant, Sparkling, Fruity",
    ingredients: [
      "Roasted local pear nectar",
      "Rye vodka",
      "Fresh pressed lemon juice",
      "Organic ginger syrup",
      "Cinnamon bark sugar rim"
    ],
    description: "A complex seasonal sour with a warm, lively kick of fresh ginger and a touch of sweet smoke from slow-roasted organic pears.",
    image: GOURMET_DISH_OLD
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Elena Vass',
    rating: 5,
    text: "An absolute masterclass in atmosphere. The contrast between the cold Denmark wind outside and the glowing candlelit sanctuary inside is mesmerizing. The Hollow's Breath cocktail is theater in a glass, and the 36-hour beef rib was legendary.",
    source: "Google Review",
    date: "May 2026"
  },
  {
    id: 'r2',
    author: 'Marc & Juliet',
    rating: 5,
    text: "Simply the best date night location in Western Australia's South West. Moody blues, matte black details, and incredible contemporary-inspired local food. Make sure to reserve weeks in advance. The atmosphere alone makes it worth the trip.",
    source: "Google Review",
    date: "April 2026"
  },
  {
    id: 'r3',
    author: 'Tobias Lindqvist',
    rating: 5,
    text: "As a traveler visiting WA, I was blown away by how they captured authentic forest luxury and blended it with raw West Australian landscape elements. Truly magnificent food, local wines, and smoky spirits.",
    source: "Connoisseur Magazine",
    date: "June 2026"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: HERO_ATMOSPHERE,
    caption: "The central candlelit dining chamber of Winter's Hollow Denmark, crafted with matte black wood and rich navy blue accents.",
    category: "atmosphere"
  },
  {
    id: "g2",
    url: SIGNATURE_COCKTAIL_OLD,
    caption: "The Hollow's Breath—our signature peated single malt masterpiece, presented with slow-infused local karri wood aroma.",
    category: "cocktail"
  },
  {
    id: "g3",
    url: GOURMET_DISH_OLD,
    caption: "Fine dining with a sense of place: charred local ingredients plated on rich, dark ceramic slate.",
    category: "dish"
  },
  {
    id: "g4",
    url: COZY_HOLLOW,
    caption: "Our intimate cozy corner—heavy blue knit blankets, deep candle shadow, and custom timber booths.",
    category: "atmosphere"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200",
    caption: "The towering, mystical Karri forests surrounding Denmark, WA at winter twilight.",
    category: "detail"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200",
    caption: "Quiet luxury in the details: flickering beeswax candles casting soft, gold amber shadows on dark wooden tabletops.",
    category: "detail"
  }
];

export const SPECIALS_DATA: SpecialItem[] = [
  {
    id: "s1",
    title: "The Winter Solstice Feast",
    period: "June 19 - June 22",
    description: "An annual intimate multi-course dining ritual celebrating the longest nights of the year. The entire restaurant will be lit exclusively by 100 organic beeswax candles, with a special warm winter menu.",
    highlightText: "Extremely Limited Seating • Bookings open June 5th",
    items: [
      "Aromatic venison broth with forest juniper",
      "Slow-roasted Denmark marron in smoked dahl butter",
      "Triggs farm suckling pig, ash-crusted crackling, warm plum jus",
      "Roasted pine needles and elderflower reduction dessert"
    ]
  },
  {
    id: "s2",
    title: "Hollow Late Nights & Spirits",
    period: "Every Friday & Saturday, 10 PM onwards",
    description: "Transitioning the dining space into an intimate listening room. Moody acoustic melodies, local South West premium whiskey showcases, and limited-edition experimental cocktails accompanied by artisan cheese plates.",
    highlightText: "Walk-ins Welcome • No cover charge",
    items: [
      "Special dry-aged charcuterie boards",
      "Curated single-barrel whiskey flights",
      "Live atmospheric ambient guitarists",
      "Double oysters & highball specials"
    ]
  }
];
