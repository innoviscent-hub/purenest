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
  { label: "Projects", path: "/tender" },
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
];

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
