export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specs: Record<string, string>;
  sport: "Padel" | "Pickleball" | "Both";
  level: "Beginner" | "Intermediate" | "Advanced" | "Professional";
  inStock: boolean;
  isSale?: boolean;
  salePrice?: number;
}

export interface Destination {
  slug: string;
  title: string;
  sport: "Padel" | "Pickleball" | "Both";
  country: "Spain" | "Portugal";
  location: string;
  priceFrom: number;
  duration: string;
  heroImage: string;
  idealFor: string;
  rating: number;
  coachingLevel: string;
  accommodation: string;
  overview: string;
  highlights: string[];
  itinerary: { day: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface CourtService {
  slug: string;
  title: string;
  subtitle: string;
  type: "villas" | "commercial";
  heroImage: string;
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  courtSpecs: Record<string, string>;
  downloadGuideTitle: string;
}

export const destinationsData: Destination[] = [
  {
    slug: "barcelona-padel-escape",
    title: "Premium Padel Escape, Barcelona",
    sport: "Padel",
    country: "Spain",
    location: "Costa del Maresme, Near Barcelona",
    priceFrom: 890,
    duration: "4 Days / 3 Nights",
    heroImage: "https://images.unsplash.com/photo-1545224933-73c33a153245?q=80&w=1200&auto=format&fit=crop",
    idealFor: "Ambitious players wanting high-intensity, pro-level training combined with culture.",
    rating: 4.9,
    coachingLevel: "All levels supported (1 coach per 4 players max)",
    accommodation: "Luxury 5-star beachfront boutique hotel in Barcelona Coast",
    overview: "Combine premium training on panoramic outdoor courts with custom gastronomy and Catalan coastal charm. Designed for players wanting to accelerate their court strategy.",
    highlights: [
      "10 hours of intensive outdoor padel training with elite local coaches",
      "Video analysis and personalized tactical feedback session",
      "Premium wellness spa access at the coastal resort",
      "Private transfers from Barcelona El Prat airport (BCN)"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival & Assessment", desc: "Private VIP transfer from Barcelona El Prat to your coastal suite. Welcome cocktail with the coaching staff followed by court evaluations." },
      { day: "Day 2", title: "Tactical Depth & Serves", desc: "3 hours of high-performance court training focusing on Bandeja/Víbora mechanics. Evening tasting menu in central Barcelona." },
      { day: "Day 3", title: "Matchplay & Strategy", desc: "Tournament match simulator followed by professional video analysis and court positioning adjustments." },
      { day: "Day 4", title: "Championship Round & Depart", desc: "Concluding mini-tournament, gourmet lunch, and return airport transfers." }
    ],
    faqs: [
      { q: "Which airport should I fly into?", a: "Barcelona El Prat Airport (BCN) is closest, and our private transfers cover all round-trips from there." },
      { q: "Can I travel solo?", a: "Yes, we structure groups based on skill level. We match solo travellers with players of similar rating." }
    ]
  },
  {
    slug: "costa-del-sol-padel-weekend",
    title: "Elite Padel Weekend, Costa del Sol",
    sport: "Padel",
    country: "Spain",
    location: "Marbella, Costa del Sol",
    priceFrom: 950,
    duration: "3 Days / 2 Nights",
    heroImage: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1200&auto=format&fit=crop",
    idealFor: "Groups and club leagues looking for sun-drenched coastal competition and luxury hospitality.",
    rating: 5.0,
    coachingLevel: "Intermediate to Advanced",
    accommodation: "Premium resort with VIP spa access, private beach club, and Michelin-starred dining",
    overview: "Bask in the year-round sunshine of Marbella. Play on premium courts where Spain's elite train. This weekend package focuses on physical endurance, quick transition defense, and finishing overheads.",
    highlights: [
      "Access to exclusive VIP members-only padel clubs in Marbella",
      "8 hours of targeted coaching plus organized matchplay sessions",
      "Private luxury shuttle service between resort and courts",
      "Gourmet dining overlooking the Mediterranean"
    ],
    itinerary: [
      { day: "Day 1", title: "Championship Welcome", desc: "Afternoon check-in at the resort. Quick 2-hour court session focusing on net play and volleys." },
      { day: "Day 2", title: "Deep Defense & Transition", desc: "Morning session on glass rebounding and lobs. Afternoon exhibition match by resident pros." },
      { day: "Day 3", title: "Singles/Doubles Showcase & Farewell", desc: "Double elimination tournament, followed by a celebratory lunch at the beach club." }
    ],
    faqs: [
      { q: "What is the typical group size?", a: "We maintain a maximum ratio of 4 players per court and coach to guarantee premium feedback." }
    ]
  },
  {
    slug: "algarve-pickleball-retreat",
    title: "Luxury Pickleball Retreat, Algarve",
    sport: "Pickleball",
    country: "Portugal",
    location: "Quinta do Lago, Algarve",
    priceFrom: 1100,
    duration: "6 Days / 5 Nights",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    idealFor: "Sophisticated British players looking for a longer, relaxing, active sports retreat in a luxury resort enclave.",
    rating: 4.8,
    coachingLevel: "All levels supported",
    accommodation: "5-star luxury villa suites with heated private pools in Quinta do Lago",
    overview: "Quinta do Lago is the pinnacle of Iberian luxury. Train on brand new outdoor pickleball courts under the Atlantic breeze. Master the dink, improve court mobility, and enjoy championship golf courses and private beaches.",
    highlights: [
      "12 hours of specialized pickleball instruction and tactical clinics",
      "Exclusive private wine tasting tour through local Algarve vineyards",
      "Bespoke fitness conditioning tailored to racket-sport players",
      "Complimentary premium pickleball paddles for the week"
    ],
    itinerary: [
      { day: "Day 1", title: "VIP Algarve Welcome", desc: "Private transfer from Faro Airport (FAO). Check-in at private villa suites. Sunset cocktail reception." },
      { day: "Day 2", title: "The Art of the Dink", desc: "Morning clinic on soft-game mechanics, court positioning, and kitchen line positioning." },
      { day: "Day 3", title: "Third Shot Drops", desc: "Focused training on transitioning from baseline to the kitchen. Afternoon golf or spa sessions." },
      { day: "Day 4", title: "Vineyard Tour & Rest", desc: "Morning recreational matchplay, followed by a private tour of an award-winning Algarve winery." },
      { day: "Day 5", title: "Club Tournament & Gala", desc: "Full round-robin tournament under tournament lighting. Evening black-tie dinner at the estate clubhouse." },
      { day: "Day 6", title: "Final Matches & Departure", desc: "Morning drop-in play, feedback wrap-up, and return airport transfers." }
    ],
    faqs: [
      { q: "Is Faro airport close to the resort?", a: "Yes, Quinta do Lago is only a 20-minute private VIP transfer from Faro Airport (FAO)." }
    ]
  }
];

export const productsData: Product[] = [
  {
    id: "padel-racket-carbon-v1",
    name: "Carbon-V1 Championship Padel Racket",
    category: "padel-rackets",
    price: 260.00,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop",
    description: "Our signature high-modulus carbon fiber racket designed for professional precision and supreme power transmission. Features a rough textured face for maximum spin.",
    specs: {
      Weight: "365g - 375g",
      Balance: "High (Power)",
      Shape: "Diamond",
      Core: "Eva Pro High Density",
      Frame: "100% Carbon Fiber 12K"
    },
    sport: "Padel",
    level: "Advanced",
    inStock: true,
    isSale: true,
    salePrice: 220.00
  },
  {
    id: "pickleball-paddle-nexus-gold",
    name: "Nexus Gold Raw Carbon Paddle",
    category: "pickleball-paddles",
    price: 185.00,
    image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=600&auto=format&fit=crop",
    description: "USAPA approved professional pickleball paddle featuring Toray T700 raw carbon fiber face for elite spin, control, and long-lasting durability.",
    specs: {
      Weight: "7.9oz - 8.3oz",
      Core: "Polypropylene Honeycomb (16mm)",
      Length: "16.5 inches",
      Width: "7.5 inches",
      Grip: "Perforated Premium Leather"
    },
    sport: "Pickleball",
    level: "Professional",
    inStock: true
  },
  {
    id: "championship-padel-balls-pack",
    name: "Championship Pro Padel Balls (3-Tube Pack)",
    category: "balls",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=600&auto=format&fit=crop",
    description: "Premium pressurized padel balls engineered specifically for Iberian weather conditions. Consistent bounce, exceptional speed, and durable woven felt.",
    specs: {
      Pressurised: "Yes",
      Quantity: "3 Tubes (9 Balls total)",
      Approved: "FIP Approved"
    },
    sport: "Padel",
    level: "Beginner",
    inStock: true
  },
  {
    id: "elite-court-bag-forest-green",
    name: "The Clubroom Duffle Bag (Forest Green)",
    category: "bags",
    price: 145.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    description: "Luxury sports duffle bag styled with waterproof nylon, full-grain leather details, dedicated racket pocket, and shoes separator compartment.",
    specs: {
      Material: "Premium Ballistic Nylon & Leather",
      Capacity: "45 Liters",
      Rackets: "Holds up to 2 padel/pickleball rackets"
    },
    sport: "Both",
    level: "Intermediate",
    inStock: true
  },
  {
    id: "mens-tournament-polo-cream",
    name: "Men's Tournament Polo Shirt (Cream)",
    category: "apparel",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600&auto=format&fit=crop",
    description: "Elegant lightweight polo shirt constructed with moisture-wicking technology and premium stretch pique. Designed for tennis, padel, and club wear.",
    specs: {
      Material: "85% Polyester, 15% Elastane",
      Fit: "Tailored Premium Fit",
      UVProtection: "UPF 50+"
    },
    sport: "Both",
    level: "Beginner",
    inStock: true
  }
];

export const courtServicesData: CourtService[] = [
  {
    slug: "villas-residential",
    title: "Bespoke Racket Sport Courts for Villas & Estates",
    subtitle: "Turnkey architectural integration for premium private properties",
    type: "villas",
    heroImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Enhanced property valuation for luxury Iberian villas",
      "Seamless integration with architectural plans, landscape designs, and luxury amenities",
      "Fully customized acoustics, wind baffles, and panoramic safety glass",
      "Premium tournament lighting configurations for comfortable evening play"
    ],
    process: [
      { step: "01", title: "Site Assessment & Consult", desc: "Expert engineers evaluate ground composition, acoustics, sunlight path, and local building regulations." },
      { step: "02", title: "Architectural Integration", desc: "Bespoke 3D renders matching your property landscape, structure, color scheme, and aesthetic." },
      { step: "03", title: "Turnkey Installation", desc: "Full base construction, premium synthetic turf lay, steel frames, and thick structural safety glass installation." }
    ],
    courtSpecs: {
      "Structure Frame": "Structural galvanized steel with anti-corrosion coating designed for marine environments",
      "Safety Glass": "12mm tempered safety glass panels with polished edges",
      "Turf Surface": "Mondo Supercourt Pro (FIP Official) textured monofilament turf",
      "LED Illumination": "8x 200W specialized flicker-free floodlights for optimal tracking"
    },
    downloadGuideTitle: "The Homeowner's Guide to Padel & Pickleball Courts"
  },
  {
    slug: "commercial-clubs-resorts",
    title: "Elite Court Solutions for Hotels, Clubs & Resorts",
    subtitle: "High-yield investment assets for premium sports hospitality",
    type: "commercial",
    heroImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Attract premium high-spending British sports travellers and local club members",
      "Fastest capital ROI in luxury recreation assets (typically 12-18 months)",
      "Premium commercial court structural certifications with FIP and USAPA specifications",
      "Multi-court cluster systems with spectator seating and premium social lounges"
    ],
    process: [
      { step: "01", title: "Feasibility & Yield Analysis", desc: "Detailed ROI models, court configuration plans, booking system integrations, and tournament models." },
      { step: "02", title: "Turnkey Execution", desc: "Rapid site preparation, foundation reinforcement, structural installation, and professional surfacing." },
      { step: "03", title: "Launch & Support", desc: "Coaching program onboarding, exhibition matches configuration, and ongoing maintenance support." }
    ],
    courtSpecs: {
      "Court Options": "Panoramic Padel Courts, Fenced Pickleball Clusters, Multi-Sport Elite Surfaces",
      "Concrete Base": "Reinforced porous concrete slab for lightning-fast rainwater drainage",
      "Wind Rating": "Engineered structures certified up to 130 km/h wind loads",
      "Club Integration": "Turnkey smart access control, online booking setups, and camera solutions"
    },
    downloadGuideTitle: "Commercial Investor Handbook: Padel & Pickleball Operations"
  }
];

export const blogPostsData = [
  {
    slug: "why-padel-booming-uk",
    title: "Why Padel is Currently the Fastest Growing Sport for UK Players",
    excerpt: "Exploring the massive growth of padel and why British travellers are booking sports-travel packages to Spain and Portugal.",
    content: "Padel has taken the UK by storm. From London to Edinburgh, clubs are opening at record rates. However, for the ultimate experience, British players are heading south to Spain and Portugal, where outdoor play under coastal sunshine transforms the sport...",
    image: "https://images.unsplash.com/photo-1545224933-73c33a153245?q=80&w=600&auto=format&fit=crop",
    date: "12 June 2026",
    readTime: "4 min read"
  },
  {
    slug: "choosing-perfect-padel-racket",
    title: "Choosing the Perfect Padel Racket: Control vs Power",
    excerpt: "A premium buyer guide outlining shapes, weights, and carbon structures to help select your next tournament weapon.",
    content: "Selecting a padel racket involves understanding shape dynamics. Diamond shapes favor explosive overheads, while round shapes provide a massive central sweet spot. We analyze which features will improve your game style...",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop",
    date: "08 June 2026",
    readTime: "6 min read"
  },
  {
    slug: "pickleball-retreats-algarve-guide",
    title: "Algarve's Luxury Pickleball Scene: What to Expect",
    excerpt: "Everything you need to know about Quinta do Lago, elite training hubs, and combining active sport with sun-drenched wellness.",
    content: "Portugal's Algarve coast is famous for golf, but a new championship sport is drawing high-end travellers. Pickleball has arrived, and our Quinta do Lago retreat matches top-tier coaching with stunning beachside estates...",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop",
    date: "02 June 2026",
    readTime: "5 min read"
  }
];

export const testimonialsData = [
  {
    quote: "The Marbella padel weekend exceeded all expectations. As a members-only club group from London, the caliber of Spanish coaching and the boutique beachfront luxury made it unforgettable.",
    author: "Edward Harrington-Smythe",
    location: "Hurlingham Club Member, London",
    rating: 5
  },
  {
    quote: "We commissioned Padel Pickle HQ to install a panoramic padel court at our villa in Quinta do Lago. The architectural integration is flawless, and the play quality is tournament standard.",
    author: "Charlotte and Richard Davies",
    location: "Homeowners, Algarve / Surrey",
    rating: 5
  },
  {
    quote: "Our resort added four pickleball courts using Padel Pickle HQ's turnkey commercial solutions. Booking revenues skyrocketed, and our British guests absolutely adore the active amenities.",
    author: "Mateo Silva",
    location: "General Manager, Algarve Sands Resort",
    rating: 5
  }
];
