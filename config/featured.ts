// Featured projects shown on the home page cards and, by name and description, in the hero boxes.

export interface FeaturedProject {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  href: string;
  /** Card background photo in /public. Cards without one get a gradient. */
  image?: string;
  /** Hover classes: border color + glow, and the accent color for badge and link. */
  glow: string;
  accent: string;
}

// Row 1: two wide cards. Row 2: three narrower cards.
export const topRow: FeaturedProject[] = [
  {
    id: "01",
    badge: "Dealership OS",
    title: "Dealio",
    tagline: "Gestión automotriz de punta a punta",
    description:
      "Catálogo de vehículos, captura guiada de permutas y derivación directa de consultas a la fuerza de ventas.",
    category: "Automotriz",
    href: "/proyectos/dealio-automotriz",
    image: "/projects/dealio.webp",
    glow: "lit:border-yellow-500/60 lit:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    accent: "text-yellow-500",
  },
  {
    id: "02",
    badge: "PropTech Portal",
    title: "Oikos",
    tagline: "Portal y catálogo inmobiliario",
    description:
      "Catálogo con filtrado avanzado, fichas descriptivas estandarizadas y captación automatizada de compradores.",
    category: "Inmobiliaria",
    href: "/proyectos/oikos-real-estate",
    image: "/projects/oikos.webp",
    glow: "lit:border-yellow-500/60 lit:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    accent: "text-yellow-500",
  },
];

export const bottomRow: FeaturedProject[] = [
  {
    id: "03",
    badge: "Digital Menu",
    title: "Hermio",
    tagline: "Menú digital y pedidos directos",
    description:
      "Catálogo interactivo de platos con pedidos estructurados y actualización en tiempo real para locales gastronómicos.",
    category: "Gastronomía",
    href: "/proyectos/hermio-gastronomia",
    image: "/projects/hermio.webp",
    glow: "lit:border-yellow-500/60 lit:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    accent: "text-yellow-500",
  },
  {
    id: "04",
    badge: "Port Directory",
    title: "Nauta",
    tagline: "Guía y directorio operativo",
    description:
      "Directorio comercial e infraestructura de servicios para operaciones, embarcaciones y prestadores de servicios.",
    category: "Servicios",
    href: "/proyectos/nauta-pde-directorio",
    glow: "lit:border-yellow-500/60 lit:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    accent: "text-yellow-500",
  },
  {
    id: "05",
    badge: "Operations OS",
    title: "Talos",
    tagline: "Motor de operaciones",
    description:
      "El motor central sobre el que corren nuestras plataformas verticales: inventario, calificación de prospectos y seguimiento comercial.",
    category: "Operaciones",
    href: "/proyectos",
    glow: "lit:border-yellow-500/60 lit:shadow-[0_0_35px_rgba(250,204,21,0.18)]",
    accent: "text-yellow-500",
  },
];
