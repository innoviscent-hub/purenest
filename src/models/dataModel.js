// ============================================================
// MODEL LAYER — All static data & business entities
// ============================================================

export const company = {
  name: "PureNest",
  tagline: "Precision Cleaning. Pristine Spaces.",
  subTagline: "Professional Facility Management for Commercial & Institutional Sectors",
  email: "hello@purenestcleaning.co.nz",
  phone: "+64 22 088 9959",
  website: "purenestcleaning.co.nz",
  address: "89-92 Victoria Street West, Auckland CBD, Auckland - 1010",
  founded: "2016",
  yearsExperience: "10+",
  projectsCompleted: "10+",
  staffCount: "50+",
};

export const projectHistory = [
  { id: 1, name: "Commercial Office Cleaning Contract", client: "Corporate Client", service: "Cleaning Services", duration: "2 Years", period: "2024 - 2026" },
  { id: 2, name: "Hospitality Cleaning", client: "Elmo's Restaurant", service: "Cleaning + Hygiene Maintenance", duration: "2 Years", period: "2022 - 2024" },
  { id: 3, name: "Commercial Cleaning", client: "Sky City Auckland - Casino and Hotel", service: "Cleaning Services", duration: "5 Years", period: "2017 - 2022" },
  { id: 4, name: "Education Sector", client: "Manurewa South School", service: "Cleaning + Landscaping", duration: "3 Years", period: "2020 - 2023" },
  { id: 5, name: "Education Sector", client: "Facility Maintenance Wainuiomata High School Maintenance Services", service: "Cleaning + Pest Control", duration: "3 Years", period: "2021 - 2024" },
  { id: 6, name: "Education Sector", client: "Martinborough School Grounds and Cleaning Services", service: "Cleaning + Landscaping", duration: "2 Years", period: "2024 - 2026" },
  { id: 7, name: "Church Facility Cleaning & Grounds Maintenance", client: "Religious Organization", service: "Cleaning + Landscaping", duration: "3 Years", period: "2023 - 2026" },
  { id: 8, name: "Industrial Facility Cleaning & Pest Management", client: "Manufacturing Company", service: "Cleaning + Pest Control", duration: "3 Years", period: "2020 - 2023" },
  { id: 9, name: "Hotel Cleaning & Pest Control Services", client: "Hospitality Group", service: "Cleaning + Pest Control", duration: "3 Years", period: "2022 - 2025" },
  { id: 10, name: "Residential Estate Maintenance", client: "Private Estate", service: "Cleaning + Landscaping", duration: "2 Years", period: "2023 - 2025" },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export const services = [
  {
    id: "cleaning",
    icon: "🧹",
    title: "Custodial Services",
    shortDesc: "Comprehensive cleaning for offices, corporate centers, and high-end residences.",
    color: "#0a7c4a",
    features: [
      "Office, foyer & corridor cleaning",
      "Bathroom & kitchen sanitation",
      "Glass façade polishing",
      "Marble & porcelain floor polishing",
      "Carpet deep cleaning",
      "Lighting & chandelier cleaning",
      "Waste management & disposal",
      "Consumable restocking (soap, tissues, sanitizer)",
    ],
    schedule: "",
  },
  {
    id: "landscaping",
    icon: "🌿",
    title: "Landscaping & Gardening",
    shortDesc: "Maintaining green spaces, gardens, and irrigation at corporate complexes.",
    color: "#1aa363",
    features: [
      "Lawn mowing & edging",
      "Ornamental shrub & tree pruning",
      "Irrigation system operation & repair",
      "Seasonal plant supply (annual/winter/summer)",
      "Organic & chemical fertilizer application",
      "Snow & ice removal (seasonal)",
      "Drain & sewer cleaning",
      "Rainwater management",
    ],
    schedule: "",
  },
  {
    id: "pest",
    icon: "🛡️",
    title: "Pest Control",
    shortDesc: "Safe, licensed pest elimination protecting both people and plants.",
    color: "#0d5c38",
    features: [
      "Rodent & termite elimination",
      "Cockroach & crawling insect control",
      "Flying insect treatment",
      "Poisonous reptile & snake management",
      "Weekly site inspection visits",
      "Eco-safe pesticide application",
      "Preventative pest programs",
      "Full compliance with NZ local authority standards",
    ],
    schedule: "Weekly visits",
  },
  {
    id: "deepclean",
    icon: "✨",
    title: "All-Inclusive Deep Clean",
    shortDesc: "Compact featured deep cleaning scope for homes and apartments, with a detailed checklist on the services page.",
    color: "#0b6b44",
    features: [
      "General cleaning across all accessible areas",
      "Internal glass, frames, tracks, and mirrors",
      "Kitchen and bathroom deep clean detailing",
      "Final presentation with inspection-ready finish",
    ],
    schedule: "",
  },
];

export const allInclusiveDeepClean = {
  title: "ALL-INCLUSIVE DEEP CLEAN",
  subtitle: "WHAT'S INCLUDED",
  sections: [
    {
      title: "General Cleaning — All Areas",
      items: [
        "Thorough dusting of all accessible surfaces",
        "Dusting of skirting boards",
        "Dusting of doors and door frames",
        "Dusting of window sills and ledges",
        "Dusting of light switches and power points",
        "Dusting of ceiling fans",
        "Dusting of accessible light fittings",
        "Removal of cobwebs from ceilings, corners and walls",
        "Cleaning of accessible vents and grilles",
        "Vacuuming of floors and carpets",
        "Mopping of hard floors",
        "Cleaning around furniture and accessible areas",
        "Cleaning of internal doors",
        "Cleaning of handles and commonly touched surfaces",
      ],
    },
    {
      title: "Windows & Glass",
      items: [
        "Cleaning of internal glass surfaces",
        "Cleaning of accessible window frames",
        "Cleaning of accessible window tracks",
        "Cleaning of window sills",
        "Cleaning of glass doors",
        "Removal of fingerprints, marks and general buildup from glass",
        "Cleaning of accessible mirrors",
      ],
      note: "External windows are included where safely accessible without specialist equipment.",
    },
    {
      title: "Kitchen — Deep Clean",
      items: [
        "Clean and degrease kitchen benchtops",
        "Clean splashbacks",
        "Clean kitchen cabinets — exterior",
        "Clean accessible cabinet handles",
        "Clean cabinet interiors where empty",
        "Clean drawers where empty",
        "Clean sink and taps",
        "Remove limescale and water marks from taps",
        "Clean cooktop/stovetop",
        "Degrease cooktop and surrounding areas",
        "Clean rangehood exterior",
        "Clean accessible rangehood filters",
        "Clean oven exterior",
        "Clean oven interior",
        "Clean oven racks and trays",
        "Clean microwave interior and exterior",
        "Clean dishwasher exterior",
        "Clean refrigerator/freezer exterior",
        "Clean refrigerator/freezer interior where empty",
        "Clean kickboards",
        "Clean accessible areas underneath/around appliances",
        "Remove grease and food residue",
        "Clean kitchen floor thoroughly",
      ],
    },
    {
      title: "Bathrooms & Toilets — Deep Clean",
      items: [
        "Clean and disinfect toilets",
        "Clean toilet bowls and surrounding areas",
        "Clean toilet seats, lids and hinges",
        "Clean bathroom sinks and basins",
        "Clean taps and fixtures",
        "Remove general soap scum",
        "Clean showers",
        "Clean shower screens",
        "Remove water marks from shower screens",
        "Clean bathtub",
        "Clean bath surrounds",
        "Clean bathroom tiles",
        "Clean grout where accessible",
        "Clean vanity units",
        "Clean vanity drawers/cabinets where empty",
        "Clean mirrors",
        "Clean bathroom shelves",
        "Clean towel rails",
        "Clean toilet roll holders",
        "Clean exhaust fan covers",
        "Clean bathroom doors and handles",
        "Mop and disinfect bathroom floors",
        "Remove accessible limescale and buildup",
      ],
    },
    {
      title: "Bedrooms",
      items: [
        "Dust all accessible surfaces",
        "Dust wardrobes — exterior",
        "Clean wardrobe interiors where empty",
        "Clean wardrobe shelves where accessible",
        "Clean bedroom doors and handles",
        "Clean light switches",
        "Clean skirting boards",
        "Remove cobwebs",
        "Vacuum carpets thoroughly",
        "Mop hard floors",
        "Clean accessible window sills and frames",
        "Clean mirrors",
      ],
    },
    {
      title: "Living & Dining Areas",
      items: [
        "Thorough dusting of all surfaces",
        "Dust skirting boards",
        "Clean doors and handles",
        "Clean light switches",
        "Remove cobwebs",
        "Vacuum carpets and rugs",
        "Mop hard floors",
        "Clean accessible furniture surfaces",
        "Clean window sills",
        "Clean accessible window frames",
        "Clean mirrors and glass surfaces",
      ],
    },
    {
      title: "Hallways, Entrances & Common Areas",
      items: [
        "Dust and wipe accessible surfaces",
        "Clean skirting boards",
        "Clean doors and frames",
        "Clean door handles",
        "Clean light switches",
        "Remove cobwebs",
        "Vacuum floors",
        "Mop hard floors",
        "Clean entrance area thoroughly",
      ],
    },
    {
      title: "Floors",
      items: [
        "Thorough vacuuming of carpets",
        "Vacuum edges and accessible corners",
        "Vacuum under accessible furniture",
        "Vacuum stairs where applicable",
        "Mopping of tiled floors",
        "Mopping of timber/laminate/vinyl floors using appropriate methods",
        "Removal of general dirt and dust buildup",
        "Spot cleaning of minor marks where possible",
      ],
    },
    {
      title: "High-Touch & Detail Cleaning",
      items: [
        "Door handles",
        "Light switches",
        "Power point surrounds",
        "Cabinet handles",
        "Appliance handles",
        "Tap handles",
        "Toilet flush buttons",
        "Frequently touched surfaces",
        "General fingerprints and smudges",
      ],
    },
    {
      title: "Final Presentation",
      items: [
        "Remove cleaning debris generated during the service",
        "Empty bins where required",
        "Replace bin liners where supplied",
        "Final vacuum",
        "Final mop",
        "Final visual inspection of cleaned areas",
        "Leave property clean, fresh and presentable",
      ],
    },
  ],
  serviceConditions: [
    "All rates are inclusive of cleaning labour, standard cleaning equipment and standard cleaning chemicals.",
    "The above represents a comprehensive deep clean of the property and covers all standard accessible areas.",
  ],
  additionalChargeConditions: [
    "Specialist services such as carpet steam cleaning, blinds and curtains, upholstery cleaning, exterior/high-level window cleaning, mould remediation, heavy rubbish removal, pest treatment, biohazard cleaning, paint removal and heavily soiled restoration work may require additional charges.",
    "All areas must be reasonably accessible for cleaning. Items requiring excessive moving, dismantling or specialist equipment may incur an additional charge.",
  ],
};

// ============================================================
// DOMESTIC CLEANING — Rate Card & Operational Data
// ============================================================

export const domesticPricing = {
  disclaimer: "Indicative starting prices. All prices include GST. Final pricing is confirmed following the complimentary on-site inspection and reflects the property's actual size, condition, and scope of work required.",
  standardClean: {
    label: "Standard Clean",
    description: "Regular upkeep cleaning for well-maintained homes — ideal for weekly, fortnightly, or monthly recurring bookings. Covers kitchens, bathrooms, living areas, bedrooms, floors and general tidying.",
    rows: [
      { size: "Studio Apartment",             base: "$195.00",    gst: "$29.25",   total: "$224.25"    },
      { size: "1 Bedroom Apartment / House",  base: "$265.00",    gst: "$39.75",   total: "$304.75"    },
      { size: "2 Bedroom Apartment / House",  base: "$350.00",    gst: "$52.50",   total: "$402.50"    },
      { size: "3 Bedroom Apartment / House",  base: "$420.00",    gst: "$63.00",   total: "$483.00"    },
      { size: "4 Bedroom Apartment / House",  base: "$560.00",    gst: "$84.00",   total: "$644.00"    },
      { size: "5 Bedroom Apartment / House",  base: "$665.00",    gst: "$99.75",   total: "$764.75"    },
      { size: "6 Bedroom Apartment / House",  base: "$840.00",    gst: "$126.00",  total: "$966.00"    },
    ],
    discounts: [
      "10% off Standard Clean rates for fortnightly plans.",
      "15% off Standard Clean rates for weekly plans.",
    ],
  },
  deepClean: {
    label: "Deep Clean",
    description: "A thorough, top-to-bottom clean covering all accessible surfaces, fixtures and fittings. Recommended for first-time bookings, move-in/move-out, post-renovation, and homes requiring a full reset before switching to a Standard Clean plan. Every add-on service is included at no extra charge.",
    rows: [
      { size: "Studio Apartment",             base: "$300.00",    gst: "$45.00",   total: "$345.00"    },
      { size: "1 Bedroom Apartment / House",  base: "$410.00",    gst: "$61.50",   total: "$471.50"    },
      { size: "2 Bedroom Apartment / House",  base: "$540.00",    gst: "$81.00",   total: "$621.00"    },
      { size: "3 Bedroom Apartment / House",  base: "$650.00",    gst: "$97.50",   total: "$747.50"    },
      { size: "4 Bedroom Apartment / House",  base: "$865.00",    gst: "$129.75",  total: "$994.75"    },
      { size: "5 Bedroom Apartment / House",  base: "$1,025.00",  gst: "$153.75",  total: "$1,178.75"  },
      { size: "6 Bedroom Apartment / House",  base: "$1,295.00",  gst: "$194.25",  total: "$1,489.25"  },
    ],
  },
};

// Add-on services: included free with Deep Clean; optional extras for Standard Clean
export const domesticAddOns = [
  { service: "Interior Oven Clean",                             standardRate: "$69.00",   deepClean: "Included" },
  { service: "Interior Fridge / Freezer Clean",                 standardRate: "$57.50",   deepClean: "Included" },
  { service: "Interior Windows (per pane, ground floor)",       standardRate: "$9.20",    deepClean: "Included" },
  { service: "Carpet Steam Clean (per room)",                   standardRate: "$80.50",   deepClean: "Included" },
  { service: "Upholstery Clean (per seat)",                     standardRate: "$40.25",   deepClean: "Included" },
  { service: "Balcony / Patio Clean",                           standardRate: "$69.00",   deepClean: "Included" },
  { service: "Garage Clean (sweep & wipe-down)",                standardRate: "$92.00",   deepClean: "Included" },
  { service: "Wall Spot-Cleaning (per room)",                   standardRate: "$46.00",   deepClean: "Included" },
  { service: "Laundry / Utility Room Clean",                    standardRate: "$51.75",   deepClean: "Included" },
  { service: "Move-In / Move-Out Certification Clean",          standardRate: "On quote", deepClean: "Included" },
];

// Standard Clean scope — from the Rate Card
export const domesticStandardScope = [
  {
    area: "Kitchen",
    items: ["Bench tops", "Splash-back", "Exterior of cabinetry", "Sink", "Stove-top", "Exterior of appliances"],
  },
  {
    area: "Bathrooms",
    items: ["Shower", "Bath", "Toilet", "Vanity", "Mirrors", "Tiles", "Tapware"],
  },
  {
    area: "All Rooms",
    items: ["Thorough dusting of all accessible surfaces", "Skirting boards", "Light switches"],
  },
  {
    area: "Floors",
    items: ["Vacuuming of all hard and soft flooring", "Mopping of all hard and soft flooring as applicable"],
  },
  {
    area: "Windows",
    items: ["Interior glass", "Sills", "Accessible without ladder"],
  },
  {
    area: "General",
    items: ["Bin emptying", "General tidying"],
  },
];

// Deep Clean additional scope — from the Rate Card (on top of Standard Clean)
export const domesticDeepCleanAdditional = [
  "Interior of oven",
  "Interior of fridge, if emptied",
  "Interior of cabinetry",
  "Skirting board edging",
  "Door frames and handles",
  "Extractor fan exteriors",
  "Limescale / grout treatment in bathrooms",
  "Every listed add-on service, bundled at no extra cost",
];

// Booking / Inspection process — from the Domestic SOP
export const domesticBookingProcess = [
  {
    step: 1,
    icon: "📝",
    title: "Submit Your Enquiry",
    desc: "Complete the inspection request form with your property details and preferred inspection times. Our office aims to offer a slot within 24–48 hours of receiving your enquiry.",
  },
  {
    step: 2,
    icon: "🏠",
    title: "Free On-Site Inspection",
    desc: "A PureNest supervisor visits your property, walks through every area you want cleaned, photographs each room, and confirms the scope of work required.",
  },
  {
    step: 3,
    icon: "📋",
    title: "Written Quote",
    desc: "A fixed, written quote is prepared using the current Rate Card and emailed to you normally within 24 hours of the inspection. Before photos are included.",
  },
  {
    step: 4,
    icon: "✅",
    title: "Approval & Payment",
    desc: "You approve the quote by email or signed form, then complete payment. Once payment is confirmed, your booking is secured.",
  },
  {
    step: 5,
    icon: "📅",
    title: "Clean Scheduled",
    desc: "Your clean is scheduled within 72 hours of confirmation. The cleaning team receives your completed inspection checklist and photos.",
  },
  {
    step: 6,
    icon: "✨",
    title: "The Clean",
    desc: "The team follows your approved quote and checklist exactly. Any additional work discovered on site is reported to the supervisor before proceeding.",
  },
  {
    step: 7,
    icon: "📸",
    title: "Completion & Handover",
    desc: "After-clean photos are taken from the same angles as the before photos. Your before-and-after set is sent within 24 hours. Our office follows up to confirm your satisfaction.",
  },
];

// ============================================================

export const tenderDetails = {
  client: "Corporate Headquarters, Auckland",
  location: "Auckland, New Zealand",
  scope: "Commercial Office & Executive Residence",
  duration: "3 Years",
  currency: "NZD (New Zealand Dollar)",
  guarantee: "5% of contract value (within 30 days of award)",
  validity: "90 calendar days from submission",
  payments: "Quarterly",
  technicalPassScore: "60%",
  technicalWeight: "40%",
  financialWeight: "60%",
  maxPenalty: "20% of contract value",
};

export const evaluationCriteria = [
  {
    criterion: "Years of Experience",
    weight: "30%",
    topScore: ">10 years → 30%",
    midScore: "5–10 years → 20%",
    lowScore: "<5 years → 10%",
  },
  {
    criterion: "Projects (Last 10 Years)",
    weight: "30%",
    topScore: ">10 projects → 30%",
    midScore: "5–10 projects → 20%",
    lowScore: "<5 projects → 10%",
  },
  {
    criterion: "Plans & Programs",
    weight: "20%",
    topScore: ">80% fit → 20%",
    midScore: "50–80% fit → 10%",
    lowScore: "<50% fit → 0%",
  },
  {
    criterion: "Org Chart & Key Positions",
    weight: "20%",
    topScore: ">80% fit → 20%",
    midScore: "50–80% fit → 10%",
    lowScore: "<50% fit → 0%",
  },
];



export const consumables = [
  "Toilet Roll Tissue",
  "Folded Hand Towel Tissue",
  "Facial Tissue",
  "Toilet Fresheners",
  "Air Fresheners & Refills",
  "Liquid Antibacterial Soaps",
  "Hand Sanitizers",
  "Glass & Mirror Cleaners",
  "Furniture Polish",
  "Floor Cloths",
  "Refuse Bags",
  "Toilet Cleaners & Disinfectants",
];

export const requirements = [
  { icon: "📋", title: "LEI & Registration", desc: "Valid Legal Entity Identifier and business registration certificate (English only)." },
  { icon: "📊", title: "Progress Reports", desc: "Daily, weekly, monthly, semi-annual, and annual accomplishment reports signed and certified." },

  { icon: "🔒", title: "Confidentiality", desc: "Strict non-disclosure of any client-sensitive information by staff and contractor." },
  { icon: "👷", title: "Qualified Personnel", desc: "Physically fit, certified, and approved by the building manager before deployment." },
  { icon: "⚖️", title: "Legal Compliance", desc: "Full adherence to New Zealand local authority regulations and safety standards." },
];

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "3", label: "Service Disciplines" },
  { value: "100%", label: "NZ Compliance" },
];


export const testimonials = [
  {
    quote: "PureNest has maintained our facility grounds with absolute precision. Their attention to detail in high-security zones is unmatched.",
    author: "Senior Facility Manager",
    client: "Global Enterprise",
    rating: 5
  },
  {
    quote: "The most reliable custodial service in Auckland. They handled our marble floor restoration with world-class expertise.",
    author: "Facility Manager",
    client: "International Organization",
    rating: 5
  },
  {
    quote: "Discrete, professional, and eco-friendly. Their pest control programs are highly effective and compliant with our global standards.",
    author: "Building Manager",
    client: "Global Logistics Group",
    rating: 5
  }
];

export const gallery = [
  { id: 1, title: "Main Lobby Polishing", category: "Cleaning" },
  { id: 2, title: "Corporate Landscape Care", category: "Landscaping" },
  { id: 3, title: "Corporate Office Sanitation", category: "Cleaning" },
  { id: 4, title: "Avenue Tree Pruning", category: "Landscaping" },
];
