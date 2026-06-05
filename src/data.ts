/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, DrinkItem, ReviewItem, GalleryItem, FunctionPackage } from './types';

// Asset paths
export const VENUE_INTERIOR = "/src/assets/images/venue_interior_1780627649833.png";
export const SIGNATURE_COCKTAIL = "/src/assets/images/signature_cocktail_1780627667467.png";
export const GOURMET_DISH = "/src/assets/images/gourmet_dish_1780627683700.png";

// Additional high-quality food/asset photo backups (using copyright-free unsplash and picsum queries matching deep moody dining theme)
export const HERO_BG_BACKUP = "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1200"; // Moody bar back
export const COCKTAIL_GRID_1 = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"; // Dark blue background drink
export const FOOD_GRID_1 = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"; // Styled gourmet plating

export const FOOD_MENU: MenuItem[] = [
  {
    id: 'f1',
    name: 'Albany Rock Oysters',
    category: 'starters',
    price: 28,
    description: 'Half-dozen freshly shucked local oysters, served on crushed ice with Great Southern finger lime mignonette and sea succulent oil.',
    tags: ['GF', 'DF', 'Signature'],
    featured: true,
  },
  {
    id: 'f2',
    name: 'Coal-Roasted Beetroot & Saltbush',
    category: 'starters',
    price: 22,
    description: 'Slow roasted in wood embers, served over whipped peppered macadamia cheese, wild saltbush crisp, and native pepperberry syrup.',
    tags: ['GF', 'VG', 'DF', 'V'],
    featured: false,
  },
  {
    id: 'f3',
    name: 'Denmark Forest Wild Mushrooms',
    category: 'starters',
    price: 24,
    description: 'Sautéed local pine mushrooms on toasted house rustico bread with visual garlic cream, pickled wattle seed, and micro thyme herb.',
    tags: ['VG'],
    featured: true,
  },
  {
    id: 'f4',
    name: 'Seared Southern Ocean Trout',
    category: 'mains',
    price: 46,
    description: 'Crisp skin ocean trout, charred asparagus, sea parsley broth, cultured butter infusion, and salted lemon reduction.',
    tags: ['GF', 'Signature'],
    featured: true,
    photo: GOURMET_DISH
  },
  {
    id: 'f5',
    name: 'Blackwood Valley Ribeye on Bone',
    category: 'mains',
    price: 58,
    description: 'Grass-fed ribeye steak cooked over red-gum charcoal, finished with truffle butter and smoked local sea salt flake.',
    tags: ['GF'],
    featured: true,
  },
  {
    id: 'f6',
    name: 'Great Southern Lamb Backstrap',
    category: 'mains',
    price: 49,
    description: 'Herb-crusted roasted tender lamb, caramelized fennel puree, local red wine jus reduction, and roasted saltbush.',
    tags: ['GF', 'DF'],
    featured: false,
  },
  {
    id: 'f7',
    name: 'Truffled Butter Potatoes',
    category: 'sides',
    price: 14,
    description: 'Crisp baby potatoes tossed in local Manjimup truffle butter, garlic, and wild rosemary rosemary.',
    tags: ['GF', 'VG'],
    featured: false,
  },
  {
    id: 'f8',
    name: 'Charred Broccolini & Roasted Almonds',
    category: 'sides',
    price: 14,
    description: 'Fresh locally grown broccolini flame-touched, with lemon zested virgin olive oil and toasted almond flakes.',
    tags: ['GF', 'DF', 'VG', 'NF'], // Wait, contains almonds so NF is removed from item tags below
    featured: false,
  },
  {
    id: 'f9',
    name: 'Hollow Honey Parfait',
    category: 'desserts',
    price: 18,
    description: 'Parfait made with premium Denmark karri forest honey, dark chocolate ganache wafer, toasted local hazelnuts, and honeyed berries.',
    tags: ['GF', 'VG'],
    featured: true,
  },
  {
    id: 'f10',
    name: 'Smoked Chocolate Bitter Tart',
    category: 'desserts',
    price: 19,
    description: 'Dark single-origin cacao tart infused with cherrywood smoke smoke, saltbush-caramel drizzle, and double cream from Denmark dairy.',
    tags: ['VG'],
    featured: false,
  },
];

// Let's make sure our tags on broccolini are correct: removes almond conflict
FOOD_MENU[7].tags = ['GF', 'DF', 'VG'];

export const DRINKS_MENU: DrinkItem[] = [
  {
    id: 'd1',
    name: 'The Hollow Mist',
    category: 'signature',
    price: 24,
    description: 'Smoked cherry-gin, wild Denmark honey cordial, fresh citrus press, finished with a fresh pine branch vapor mist.',
    signature: true,
    notes: 'A visual masterpiece representing the misty tall Karri forests surrounding Denmark.',
    photo: SIGNATURE_COCKTAIL
  },
  {
    id: 'd2',
    name: 'Karri Gold Sours',
    category: 'signature',
    price: 23,
    description: 'South Coast small batch whiskey, apricot liqueur, pepperberry-infused honey, organic egg white, fresh lemon juice.',
    signature: true,
    notes: 'Perfectly balanced sweet-and-sour profile with an earthy, spicy Australian finish.',
  },
  {
    id: 'd3',
    name: 'Native Botanical Punch',
    category: 'signature',
    price: 22,
    description: 'Artisanal gin, infused with lemon myrtle leaf, wild mountain saltbush cordial, pressed lime, cucumber sparkling extract.',
    signature: true,
    notes: 'Crisp, bright, herbal, and refreshing cocktail experience.',
  },
  {
    id: 'd4',
    name: 'Smoky Jarrah Negroni',
    category: 'classics',
    price: 25,
    description: 'Our take on the classic. Campari, sweet vermouth, smoked local gin. Smoked directly with local charred Jarrah wood chip.',
    signature: false,
    notes: 'Served over a single crystal-clear hand-cut block of ice.',
  },
  {
    id: 'd5',
    name: 'Salted Caramel Espresso Martini',
    category: 'classics',
    price: 23,
    description: 'Rich cold brew espresso, premium vodka, local organic coffee liqueur, salted finger-lime caramel blend.',
    signature: false,
  },
  {
    id: 'd6',
    name: 'Denmark Valley Estate Pinot Noir',
    category: 'beer-wine',
    price: 16, // glass / bottle 74
    description: 'Deep ruby cool-climate grapes, wild raspberry aroma, delicate earthy spices and soft tannins.',
    signature: false,
    notes: 'Grown on the granite loam slopes just 5km from the bar.',
  },
  {
    id: 'd7',
    name: 'Single Track Pale Ale (On Tap)',
    category: 'beer-wine',
    price: 12,
    description: 'Crisp locally brewed pale ale with stone fruit hops profile. Cold-drawn directly at our bar counter.',
    signature: false,
  },
  {
    id: 'd8',
    name: 'Forest Canopy Highball (Non-Alc)',
    category: 'non-alcoholic',
    price: 15,
    description: 'Distilled non-alcoholic botanicals, wild mint, ginger shrub, pressed lime, and aerated soda water spray.',
    signature: false,
    notes: 'All the sophistication and ritual without the spirits.',
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Eleanor Vance',
    rating: 5,
    text: "The blue and gold interior of Winter's Hollow is mesmerizing. Standing beside the misty Karri forests outside, stepping in here feels like walking into an exclusive, warm, candle-lit sanctuary in Denmark. The Albany Rock Oysters were flawless and 'The Hollow Mist' cocktail was absolute theater. Outstanding hospitality!",
    date: 'May 14, 2026',
    source: 'Google',
    category: 'Atmosphere'
  },
  {
    id: 'r2',
    author: 'Jameson Thorne',
    rating: 5,
    text: "Regional dining at its finest. They showcase Denmark's local cool-climate pinots wonderfully. The Trout main was cooked with complete respect for precision, while the charcoal Ribeye on bone melted in your mouth. Easily one of the most stunning restaurant visual layouts in Western Australia.",
    date: 'April 22, 2026',
    source: 'Google',
    category: 'Cuisine'
  },
  {
    id: 'r3',
    author: 'Sarah Jenkins',
    rating: 5,
    text: "The level of bartending craft here rivaled anything I have seen in London or Melbourne. They take the cocktail program seriously! The smoky jarrah wood incense in the Negroni leaves an unforgettable memory. Professional service with a wonderfully welcoming smile.",
    date: 'April 05, 2026',
    source: 'Guest Book',
    category: 'Mixology'
  },
  {
    id: 'r4',
    author: 'Marcus Brody',
    rating: 5,
    text: "Incredible staff attention. Let me tell you, that whipping peppered macadamia cheese accompanying the roasted beetroot was unforgettable. Cozy booth seating, premium soundscape, and stunning luxury gold accents everywhere. A masterpiece.",
    date: 'March 18, 2026',
    source: 'Google',
    category: 'Service'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    url: VENUE_INTERIOR,
    title: "The Winter's Hollow Main Dining Lounge",
    category: 'venue'
  },
  {
    id: 'g2',
    url: SIGNATURE_COCKTAIL,
    title: "Crafting 'The Hollow Mist' Signature Cocktail",
    category: 'cocktails'
  },
  {
    id: 'g3',
    url: GOURMET_DISH,
    title: 'Pan-Seared Southern Ocean Trout Plating',
    category: 'food'
  },
  {
    id: 'g4',
    url: HERO_BG_BACKUP,
    title: "Gold Detailing of the Spirits backbar",
    category: 'venue'
  },
  {
    id: 'g5',
    url: COCKTAIL_GRID_1,
    title: "Cocktail Artistry & Luxury Glassware",
    category: 'cocktails'
  },
  {
    id: 'g6',
    url: FOOD_GRID_1,
    title: "Regional Premium Beef & Wood ember Seared Delicacies",
    category: 'food'
  }
];

export const FUNCTION_PACKAGES: FunctionPackage[] = [
  {
    id: 'p1',
    title: "Exclusive Venue Takeover",
    minSpend: 4500,
    capacity: "Up to 55 Guests (Seated) / 80 (Cocktail Style)",
    description: "The complete, intimate Winter's Hollow experience reserved solely for your private group. Includes full customized dining menu, curated masterclass cocktail support, dedicated waitstaff, and custom mood lighting setups.",
    highlights: ["Custom 3 or 4-course bespoke menu by our Head Chef", "Fully tailored cocktail pairings for each course", "Bespoke music styling & physical space decoration permissions", "Priority early venue access for decorators"]
  },
  {
    id: 'p2',
    title: "The Hollow Sovereign Booths",
    minSpend: 1500,
    capacity: "10 to 18 Guests (Semi-Private)",
    description: "Reserve our premium corner booths wrapped in dramatic deep blue walls and golden highlights. Perfect for celebrating dynamic birthdays, premium family milestones, or corporate dinners while retaining the ambient backdrop music of the room.",
    highlights: ["Set banquet menu celebrating regional Western Australian delicacies", "Dedicated host & specialized premium wine recommendations", "Welcoming signature cocktails for every attendee upon arrival", "Interactive table theater presentations"]
  },
  {
    id: 'p3',
    title: "Masterclass Cocktail Dinners",
    minSpend: 2800,
    capacity: "12 to 24 Guests (Interactive Masterclass)",
    description: "An incredibly memorable and educational culinary experience. Gather round our matte black bar counters as our Head Mixologist guides you through formulating native signature cocktails, paired perfectly with curated grazing canapes.",
    highlights: ["Interactive hands-on creation of three custom cocktail templates", "Historical briefing on native Western Australian botanicals", "Perfectly-timed luxury savory & sweet food plates mapped to each spirit", "Take-home recipe journals and custom glassware souvenir"]
  }
];
