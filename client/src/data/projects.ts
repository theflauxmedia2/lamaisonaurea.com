import { type Project } from "@shared/schema";

export type ProjectWithDetails = Project & {
  client?: string;
  location?: string;
  apartment?: string;
  theme?: string;
  featuredSpaces?: string[];
};

const baseDate = new Date("2024-01-01");

export const websiteProjects: ProjectWithDetails[] = [
  {
    id: 1,
    title: "Modern Contemporary Renovation",
    slug: "modern-contemporary-renovation-coonoor",
    shortDescription:
      'A "wood-free" aesthetic with sleek textures and a minimalist palette, creating a fresh, modern atmosphere.',
    fullDescription:
      "Transitioning from traditional wooden structures, this renovation focuses on a wood-free aesthetic, utilizing sleek textures and a minimalist palette to create a fresh, modern atmosphere. The design emphasizes neutral tones throughout the featured spaces.",
    coverImage: "/images/006.webp",
    galleryImages: [
      "/images/001.webp",
      "/images/002.webp",
      "/images/003.webp",
      "/images/004.webp",
      "/images/005.webp",
    ],
    category: "Residential",
    isFeatured: true,
    createdAt: baseDate,
    client: "Mr. Pratham",
    location: "Coonoor",
    theme: "Modern Contemporary with subtle neutral tones",
    featuredSpaces: ["Son's Room", "Daughter's Room", "Parent's Room"],
  },
  {
    id: 2,
    title: "Sophisticated Residential Luxury",
    slug: "sophisticated-residential-luxury-madurai",
    shortDescription:
      "High-end residential project with grand entryways, luxury materials, integrated lighting, and a state-of-the-art Home Theater.",
    fullDescription:
      "A high-end residential project emphasizing grand entryways, luxury materials, and integrated lighting. Features a state-of-the-art Home Theater and a Master Suite with bespoke wall treatments. The living area includes a unique hanging swing, while the modern kitchen showcases a striking island and carefully considered lighting.",
    coverImage: "/images/007.webp",
    galleryImages: [
      "/images/010.webp",
      "/images/011.webp",
      "/images/012.webp",
      "/images/013.webp",
      "/images/014.webp",
      "/images/015.webp",
    ],
    category: "Residential",
    isFeatured: true,
    createdAt: baseDate,
    client: "Mr. Dhanshekar",
    location: "Madurai",
    featuredSpaces: ["Grand Living Room", "Luxury Kitchen", "Home Theater"],
  },
  {
    id: 3,
    title: "The Japandi Apartment",
    slug: "the-japandi-apartment",
    shortDescription:
      "Japandi design balancing exposed brick with clean, straight lines to create a warm, functional sanctuary.",
    fullDescription:
      "Balancing the raw industrial feel of exposed brick walls with the clean, straight lines of Japandi design to create a warm, functional sanctuary. The living space contrasts brick with minimalist furniture; the kitchen features light wood cabinetry and greenery.",
    coverImage: "/images/018.webp",
    galleryImages: [
      "/images/016.webp",
      "/images/017.webp",
      "/images/019.webp",
      "/images/020.webp",
    ],
    category: "Residential",
    isFeatured: true,
    createdAt: baseDate,
    client: "Mr. Rishi Rahul & Mrs. Richa",
    location: "Bangalore",
    apartment: "Svasthya Mandala",
    theme: "Japandi (Minimalism + Earthy Elements)",
  },
  {
    id: 4,
    title: "Victorian Elegance",
    slug: "victorian-elegance",
    shortDescription:
      "Sophisticated classical Victorian aesthetics with ornate wall moldings, crystal chandeliers, and a soft, regal color palette.",
    fullDescription:
      "A sophisticated take on classical Victorian aesthetics, featuring ornate wall moldings, crystal chandeliers, and a soft, regal color palette. The living room centers on Victorian wall paneling; the Daughter's Room features 'Good Vibes Only' wall art and a study loft.",
    coverImage: "/images/021.webp",
    galleryImages: [
      "/images/022.webp",
      "/images/023.webp",
      "/images/024.webp",
      "/images/025.webp",
    ],
    category: "Residential",
    isFeatured: false,
    createdAt: baseDate,
    client: "Mr. Ram",
    location: "Bangalore",
    apartment: "Trifecta Verde En Resplandor",
    theme: "Victorian Style",
    featuredSpaces: ["Living Hall", "Master Bedroom", "Dedicated Workspace"],
  },
  {
    id: 5,
    title: "Fusion Living",
    slug: "fusion-living",
    shortDescription:
      "A blend of cultural motifs and modern luxury with marble flooring, gold accents, and expansive open-plan layouts.",
    fullDescription:
      "A blend of cultural motifs and modern luxury, utilizing marble flooring, gold accents, and expansive open-plan layouts. The main living hall showcases marble walls and gold-framed partitions; the bedroom features unique curved, backlit wall panels.",
    coverImage: "/images/026.webp",
    galleryImages: [
      "/images/027.webp",
      "/images/028.webp",
      "/images/029.webp",
      "/images/030.webp",
    ],
    category: "Residential",
    isFeatured: false,
    createdAt: baseDate,
    client: "Mrs. Hemalata",
    location: "Hosur",
    theme: "Fusion",
  },
  {
    id: 6,
    title: "Traditional-Modern Balance",
    slug: "traditional-modern-balance",
    shortDescription:
      "Multi-generational home where traditional teak wood doors and windows meet modern cabinetry and clean lines.",
    fullDescription:
      "A multi-generational home where the warmth of traditional teak wood doors and windows meets the sharp, clean lines of modern cabinetry and furniture. The living area showcases a double-height ceiling and teak wood accents; the kitchen pairs dark, modern cabinetry with light tiled walls.",
    coverImage: "/images/031.webp",
    galleryImages: [
      "/images/032.webp",
      "/images/033.webp",
      "/images/034.webp",
      "/images/035.webp",
    ],
    category: "Residential",
    isFeatured: false,
    createdAt: baseDate,
    client: "Dr. Chandrakanth",
    location: "Shimoga",
    theme: "Modern with a Traditional Touch",
  },
  {
    id: 7,
    title: "Contemporary Villa Design",
    slug: "contemporary-villa-design-whitefield",
    shortDescription:
      "A 700 sqm premium 3BHK villa maximizing natural light and ventilation with a sleek, modern aesthetic.",
    fullDescription:
      "A 700 sqm premium 3BHK villa in Whitefield, Bangalore, focused on maximizing natural light and ventilation while maintaining a sleek, modern aesthetic. Contemporary villa design with clean lines and thoughtful spatial planning.",
    coverImage: "/images/036.webp",
    galleryImages: [
      "/images/037.webp",
      "/images/038.webp",
      "/images/039.webp",
      "/images/040.webp",
    ],
    category: "Residential",
    isFeatured: false,
    createdAt: baseDate,
    location: "Whitefield, Bangalore",
  },
  {
    id: 8,
    title: "Modern Meeting Room",
    slug: "modern-meeting-room",
    shortDescription:
      "Commercial space featuring organic-shaped drop ceilings and integrated LED shelving.",
    fullDescription:
      "A modern commercial meeting room featuring organic-shaped drop ceilings and integrated LED shelving. Demonstrates our commercial expertise in creating functional, visually striking workspaces.",
    coverImage: "/images/041.webp",
    galleryImages: [
      "/images/042.webp",
      "/images/043.webp",
      "/images/044.webp",
      "/images/045.webp",
    ],
    category: "Commercial",
    isFeatured: false,
    createdAt: baseDate,
  },
  {
    id: 9,
    title: "Urban Intervention — Begur",
    slug: "urban-intervention-begur",
    shortDescription:
      "Comprehensive urban study of the Begur region focusing on heritage conservation and lake rejuvenation.",
    fullDescription:
      "A comprehensive urban study of the Begur region, focusing on heritage conservation and lake rejuvenation. This project explores the intersection of urban planning, cultural heritage, and environmental restoration.",
    coverImage: "/images/046.webp",
    galleryImages: [
      "/images/047.webp",
      "/images/048.webp",
      "/images/049.webp",
      "/images/050.webp",
    ],
    category: "Commercial",
    isFeatured: false,
    createdAt: baseDate,
    location: "Begur Region",
  },
];

export function getAllProjects(): ProjectWithDetails[] {
  return websiteProjects;
}

export function getProjectBySlug(slug: string): ProjectWithDetails | undefined {
  return websiteProjects.find((p) => p.slug === slug);
}
